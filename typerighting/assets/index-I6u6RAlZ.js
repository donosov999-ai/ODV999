(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();const Ve=["abandon","engRus","letterByLetter","poemHymn"];let J=null;async function Ze(){return J||(J=await(await fetch("content/exercises.json")).json(),J)}function we(e,t){return e.filter(n=>n.bank===t)}const L={PENDING:0,CORRECT:1,WRONG:2};function R(e){const t=e.join(`
`);return{pattern:t,pos:0,errors:0,startedAt:null,finishedAt:null,marks:new Uint8Array(t.length)}}function ne(e,t,n){if(e.finishedAt!==null)return{accepted:!1,wrong:!1,finished:!0};e.startedAt===null&&(e.startedAt=Date.now());const r=e.pattern[e.pos];if((t==="\r"?`
`:t)===r){e.marks[e.pos]=L.CORRECT,e.pos++;const u=e.pos>=e.pattern.length;return u&&(e.finishedAt=Date.now()),{accepted:!0,wrong:!1,finished:u}}if(e.errors++,n)return{accepted:!1,wrong:!0,finished:!1};e.marks[e.pos]=L.WRONG,e.pos++;const c=e.pos>=e.pattern.length;return c&&(e.finishedAt=Date.now()),{accepted:!0,wrong:!0,finished:c}}function Xe(e){e.finishedAt===null&&e.pos>0&&(e.pos--,e.marks[e.pos]=L.PENDING)}function G(e){const t=e.finishedAt??Date.now(),n=e.startedAt?t-e.startedAt:0;let r=0;for(let p=0;p<e.pos;p++)e.marks[p]===L.CORRECT&&r++;const a=n/6e4,i=a>0?Math.round(r/5/a):0,c=r+e.errors,u=c>0?Math.round(r/c*100):100;return{typed:r,errors:e.errors,elapsedMs:n,wpm:i,accuracy:u}}const Ee=[[{id:"tilde",u:1,en:"~",en2:"`",ru:"Ё"},{id:"d1",u:1,en:"1",en2:"!"},{id:"d2",u:1,en:"2",en2:"@"},{id:"d3",u:1,en:"3",en2:"#"},{id:"d4",u:1,en:"4",en2:"$"},{id:"d5",u:1,en:"5",en2:"%"},{id:"d6",u:1,en:"6",en2:"^"},{id:"d7",u:1,en:"7",en2:"&"},{id:"d8",u:1,en:"8",en2:"*"},{id:"d9",u:1,en:"9",en2:"("},{id:"d0",u:1,en:"0",en2:")"},{id:"minus",u:1,en:"-",en2:"_"},{id:"equal",u:1,en:"=",en2:"+"},{id:"backslash",u:1,en:"\\",en2:"|"},{id:"backspace",u:1.6,label:"←"}],[{id:"tab",u:1.5,label:"Tab"},{id:"q",u:1,en:"Q",ru:"Й"},{id:"w",u:1,en:"W",ru:"Ц"},{id:"e",u:1,en:"E",ru:"У"},{id:"r",u:1,en:"R",ru:"К"},{id:"t",u:1,en:"T",ru:"Е"},{id:"y",u:1,en:"Y",ru:"Н"},{id:"u",u:1,en:"U",ru:"Г"},{id:"i",u:1,en:"I",ru:"Ш"},{id:"o",u:1,en:"O",ru:"Щ"},{id:"p",u:1,en:"P",ru:"З"},{id:"lbracket",u:1,en:"[",en2:"{",ru:"Х"},{id:"rbracket",u:1,en:"]",en2:"}",ru:"Ъ"},{id:"enterpad2",u:1.45}],[{id:"caps",u:1.9,label:"Caps Lock"},{id:"a",u:1,en:"A",ru:"Ф"},{id:"s",u:1,en:"S",ru:"Ы"},{id:"d",u:1,en:"D",ru:"В"},{id:"f",u:1,en:"F",ru:"А"},{id:"g",u:1,en:"G",ru:"П"},{id:"h",u:1,en:"H",ru:"Р"},{id:"j",u:1,en:"J",ru:"О"},{id:"k",u:1,en:"K",ru:"Л"},{id:"l",u:1,en:"L",ru:"Д"},{id:"semi",u:1,en:";",en2:":",ru:"Ж"},{id:"quote",u:1,en:"'",en2:'"',ru:"Э"},{id:"enterpad3",u:1.45}],[{id:"lshift",u:2.3,label:"Shift"},{id:"z",u:1,en:"Z",ru:"Я"},{id:"x",u:1,en:"X",ru:"Ч"},{id:"c",u:1,en:"C",ru:"С"},{id:"v",u:1,en:"V",ru:"М"},{id:"b",u:1,en:"B",ru:"И"},{id:"n",u:1,en:"N",ru:"Т"},{id:"m",u:1,en:"M",ru:"Ь"},{id:"comma",u:1,en:",",en2:"<",ru:"Б"},{id:"period",u:1,en:".",en2:">",ru:"Ю"},{id:"slash",u:1,en:"/",en2:"?"},{id:"rshift",u:1.2,label:"Shift"},{id:"rept",u:1.2,label:"Rept"}],[{id:"lctrl",u:1.3,label:"Ctrl"},{id:"blank1",u:1.1},{id:"lalt",u:1.3,label:"Alt"},{id:"space",u:6.8,label:""},{id:"ralt",u:1.3,label:"Alt"},{id:"blank2",u:1.1},{id:"rctrl",u:1.3,label:"Ctrl"}]],Ie=[["a","q"],["a","z"],["s","w"],["s","x"],["d","e"],["d","c"],["f","r"],["f","t"],["f","g"],["f","v"],["f","b"],["f","d5"],["j","y"],["j","u"],["j","h"],["j","n"],["j","m"],["j","d6"],["j","d7"],["k","i"],["k","comma"],["k","d8"],["l","o"],["l","period"],["semi","p"],["semi","lbracket"],["semi","rbracket"],["semi","quote"],["semi","slash"]],Te={};for(const[e,t]of Ie)Te[t]=e;const Qe=new Set(["tilde","d1","d2","d3","d4","d5","tab","q","w","e","r","t","caps","a","s","d","f","g","lshift","z","x","c","v","b"]),X=920,ge=380,te=12,ke=6,ye=60,et=70,tt=14,E={};{Ee.forEach((r,a)=>{const i=r.reduce((p,l)=>p+l.u,0),c=(X-2*te-ke*(r.length-1))/i;let u=te;for(const p of r){const l=p.u*c;E[p.id]={...p,x:u,y:tt+a*et,w:l,h:ye},u+=l+ke}});const e=E.enterpad2,t=E.enterpad3,n=Math.min(e.x,t.x);E.enter={id:"enter",u:0,label:"Enter",x:n,y:e.y,w:X-te-n,h:t.y+ye-e.y},delete E.enterpad2,delete E.enterpad3}const I={},w={};{const e=(t,n,r,a)=>{t[n]={id:r,shift:a}};for(const t of Object.values(E))t.en&&(/^[A-Z]$/.test(t.en)?(e(I,t.en.toLowerCase(),t.id,!1),e(I,t.en,t.id,!0)):(e(I,t.en,t.id,!1),t.en2&&e(I,t.en2,t.id,!0))),t.ru&&/^[А-ЯЁ]$/.test(t.ru)&&(e(w,t.ru.toLowerCase(),t.id,!1),e(w,t.ru,t.id,!0));e(w,".","slash",!1),e(w,",","slash",!0);for(const t of[I,w])e(t," ","space",!1),e(t,`
`,"enter",!1);for(const[t,n]of Object.entries(I))!(t in w)&&!/[a-zA-Z.,]/.test(t)&&(w[t]=n)}const Se={},Ae={};for(const e of Ee)for(const t of e)t.en&&t.ru&&/^[A-Z]$/.test(t.en)&&/^[А-ЯЁ]$/.test(t.ru)&&(Se[t.en.toLowerCase()]=t.ru.toLowerCase(),Ae[t.ru.toLowerCase()]=t.en.toLowerCase());function Me(e,t){if(e.length!==1||t.length!==1)return e;const n=e.toLowerCase();let r;return/[а-яё]/i.test(t)&&/[a-z]/.test(n)?r=Se[n]:/[a-z]/i.test(t)&&/[а-яё]/.test(n)&&(r=Ae[n]),r?e===n?r:r.toUpperCase():e}function nt(e,t){return/[а-яё]/i.test(e)?w[e]??null:/[a-z]/i.test(e)?I[e]??null:(t?w[e]:I[e])??(t?I[e]:w[e])??null}const V=e=>e.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),re=e=>e.x+e.w/2,se=e=>e.y+e.h/2;function rt(e,t){const n=re(e),r=se(e),a=re(t),i=se(t),c=(n+a)/2,u=(r+i)/2,p=a-n,l=i-r,k=Math.hypot(p,l)||1,_=Math.min(18,k*.18)*(p>=0?1:-1),Ue=c-l/k*_,ze=u+p/k*_,be=1-16/k,Ye=n+p*be,Je=r+l*be;return`M ${n.toFixed(1)} ${r.toFixed(1)} Q ${Ue.toFixed(1)} ${ze.toFixed(1)} ${Ye.toFixed(1)} ${Je.toFixed(1)}`}function Le(e,t,n=!0){const r=e!==null?nt(e,t):null,a=(r==null?void 0:r.id)??null,i=a?Te[a]??null:null;let c=null;r!=null&&r.shift&&a&&(c=Qe.has(a)?"rshift":"lshift");const u=[];for(const l of Object.values(E)){const k=["key"];l.id===a&&k.push("key-next"),l.id===c&&k.push("key-shift"),l.id===i&&k.push("key-home"),u.push(`<g class="${k.join(" ")}" data-key="${l.id}">`,`<rect class="key-base" x="${l.x}" y="${l.y}" width="${l.w.toFixed(1)}" height="${l.h}" rx="9"/>`,`<rect class="key-face" x="${(l.x+4).toFixed(1)}" y="${l.y+3}" width="${(l.w-8).toFixed(1)}" height="${l.h-10}" rx="6"/>`),l.label!==void 0?u.push(`<text class="key-fn" x="${re(l).toFixed(1)}" y="${(se(l)+4).toFixed(1)}" text-anchor="middle">${V(l.label)}</text>`):(l.en2&&u.push(`<text class="key-en2" x="${(l.x+12).toFixed(1)}" y="${l.y+22}">${V(l.en2)}</text>`),l.en&&u.push(`<text class="key-en" x="${(l.x+12).toFixed(1)}" y="${l.y+(l.en2?46:38)}">${V(l.en)}</text>`),l.ru&&n&&u.push(`<text class="key-ru" x="${(l.x+l.w-12).toFixed(1)}" y="${l.y+l.h-14}" text-anchor="end">${V(l.ru)}</text>`)),u.push("</g>")}const p=Ie.map(([l,k])=>{const _=k===a&&l===(i??"");return`<path class="arr${_?" arr-active":""}" d="${rt(E[l],E[k])}" marker-end="url(#arrhead${_?"-a":""})"/>`}).join("");return`<svg class="kbsvg${a?" has-target":""}" viewBox="0 0 ${X} ${ge}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Схема клавиатуры: красные стрелки — правильное направление движения пальцев от домашнего ряда">
    <defs>
      <marker id="arrhead" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" class="arrhead"/></marker>
      <marker id="arrhead-a" markerWidth="8" markerHeight="8" refX="5.5" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" class="arrhead-a"/></marker>
    </defs>
    <rect class="kb-bg" x="0" y="0" width="${X}" height="${ge}" rx="14"/>
    ${u.join("")}
    ${p}
  </svg>`}const Q={m:"⌨️",f:"🌸",kids:"🐱"},Re="tr_profile";function st(){const e=localStorage.getItem(Re);return e==="m"||e==="f"||e==="kids"?e:null}function Pe(e){try{localStorage.setItem(Re,e)}catch{}le(e)}function le(e){e?document.documentElement.dataset.profile=e:delete document.documentElement.dataset.profile}let ce=localStorage.getItem("tr_lang")==="en"?"en":"ru";function j(){return ce}function at(e){ce=e;try{localStorage.setItem("tr_lang",e)}catch{}}const ot={"ob.sub":{ru:"Тренажёр слепой печати. Для кого настроить?",en:"Touch typing trainer. Who is it for?"},"ob.note":{ru:"Профиль можно сменить в любой момент в шапке.",en:"You can switch the profile any time in the header."},"profile.m":{ru:"Мужской",en:"Classic"},"profile.f":{ru:"Женский",en:"Soft"},"profile.kids":{ru:"Детский",en:"Kids"},"profile.m.desc":{ru:"Тёмная тема, скорость и рекорды",en:"Dark theme, speed and records"},"profile.f.desc":{ru:"Светлая тёплая тема, мягкий темп",en:"Warm light theme, gentle pace"},"profile.kids.desc":{ru:"Игра: уровни, звёзды и котик",en:"Game: levels, stars and a cat"},"bank.abandon":{ru:"Слова в предложениях",en:"Words in sentences"},"bank.engRus":{ru:"Англ↔Рус (с переводом)",en:"EN words + RU hints"},"bank.letterByLetter":{ru:"По буквам (наращивание)",en:"Letter by letter"},"bank.poemHymn":{ru:"Стихи и гимны",en:"Poems & hymns"},"bank.abandon.desc":{ru:"Печатай предложение с новым словом — словарный запас + скорость.",en:"Type a sentence with a new word — vocabulary + speed."},"bank.engRus.desc":{ru:"Слово с переводом + предложение. Перевод-подсказка над образцом.",en:"A word with RU translation + a sentence to type."},"bank.letterByLetter.desc":{ru:"Слово печатается по нарастающей: a, ab, aba… — постановка пальцев.",en:"Build the word up: a, ab, aba… — finger placement."},"bank.poemHymn.desc":{ru:"Стихи и гимны по строфам (4–8 строк) — ритм и выносливость печати.",en:"Poems & hymns by stanza (4–8 lines) — rhythm and stamina."},"tb.hide":{ru:"Спрятать образец",en:"Hide pattern"},"tb.sound":{ru:"Звук ошибки",en:"Error sound"},"tb.block":{ru:"Блок при ошибке",en:"Block on error"},"tb.keyb":{ru:"Клавиатура",en:"Keyboard"},"tb.flow":{ru:"Поток",en:"Flow"},"tb.exam":{ru:"Тест",en:"Test"},"tb.prev":{ru:"‹ Пред",en:"‹ Prev"},"tb.next":{ru:"След ›",en:"Next ›"},"st.exercises":{ru:"упражнений",en:"exercises"},"st.done":{ru:"пройдено",en:"done"},"st.record":{ru:"рекорд",en:"best"},"st.wpm":{ru:"WPM",en:"WPM"},"st.accuracy":{ru:"точность",en:"accuracy"},"st.errors":{ru:"ошибок",en:"errors"},"st.time":{ru:"время",en:"time"},"st.streak":{ru:"подряд",en:"streak"},"hint.flow":{ru:"Поток: упражнения идут подряд без остановки.",en:"Flow: exercises run back to back, no stops."},"hint.type":{ru:"Печатай по образцу.",en:"Type the pattern."},"hint.block":{ru:"Неверный символ не пропускается.",en:"Wrong keys are not accepted."},"hint.bs":{ru:"Backspace — исправить.",en:"Backspace to fix."},"hint.hidden":{ru:"образец скрыт — печатай по памяти",en:"pattern hidden — type from memory"},"done.title":{ru:"✓ Готово",en:"✓ Done"},"done.title.f":{ru:"✓ Отлично!",en:"✓ Great job!"},"done.again":{ru:"↻ Заново",en:"↻ Again"},"done.next":{ru:"Следующее →",en:"Next →"},"err.load":{ru:"Не удалось загрузить упражнения",en:"Failed to load exercises"},"k.title":{ru:"🐱 Котик-печатник",en:"🐱 Typing Cat"},"k.hello":{ru:"Привет! Выбирай уровень — будем учиться печатать. Печатай точно, спешить не надо!",en:"Hi! Pick a level and let’s learn to type. Be accurate — no need to rush!"},"k.rest":{ru:"🐱 Ты отлично позанимался! Передохни немножко 💛",en:"🐱 Great practice! Take a little break 💛"},"k.block.ru":{ru:"🇷🇺 По-русски",en:"🇷🇺 Russian"},"k.block.en":{ru:"🇬🇧 По-английски",en:"🇬🇧 English"},"k.level":{ru:"Уровень",en:"Level"},"k.word":{ru:"слово",en:"word"},"k.noerr":{ru:"⭐ без ошибок",en:"⭐ no errors"},"k.errors":{ru:"ошибок",en:"errors"},"k.passed":{ru:"пройден!",en:"passed!"},"k.note3":{ru:"Ни одной ошибки — ты звезда!",en:"Not a single error — you are a star!"},"k.note2":{ru:"Очень здорово! Ещё чуть точнее — будет три звезды.",en:"Very good! A bit more accurate for three stars."},"k.note1":{ru:"Уровень пройден! Попробуй ещё раз — получится точнее.",en:"Level passed! Try again to be more accurate."},"k.again":{ru:"↻ Ещё раз",en:"↻ Again"},"k.map":{ru:"К карте",en:"To map"},"k.next":{ru:"Дальше →",en:"Next →"},"k.back":{ru:"← К карте",en:"← To map"},"k.startRu":{ru:"Печатаем по-русски!",en:"Typing in Russian!"},"k.startEn":{ru:"Печатаем по-английски!",en:"Typing in English!"},"ex.title":{ru:"Тест печати",en:"Typing Test"},"ex.desc":{ru:"Печатай предложения без остановки, пока не выйдет время. В конце — отчёт с Gross/Net WPM и точностью.",en:"Type sentences non-stop until the time runs out. You get a report with Gross/Net WPM and accuracy."},"ex.duration":{ru:"Длительность",en:"Duration"},"ex.min":{ru:"мин",en:"min"},"ex.target":{ru:"Цель Net WPM",en:"Target Net WPM"},"ex.name":{ru:"Имя (для сертификата)",en:"Name (for the certificate)"},"ex.start":{ru:"Начать тест",en:"Start test"},"ex.cancel":{ru:"Выйти",en:"Exit"},"ex.left":{ru:"осталось",en:"left"},"ex.result":{ru:"Результат теста",en:"Test result"},"ex.gross":{ru:"Gross WPM",en:"Gross WPM"},"ex.net":{ru:"Net WPM",en:"Net WPM"},"ex.keystrokes":{ru:"нажатий",en:"keystrokes"},"ex.pass":{ru:"СДАН",en:"PASS"},"ex.fail":{ru:"НЕ СДАН",en:"FAIL"},"ex.target.short":{ru:"цель",en:"target"},"ex.cert":{ru:"⬇ Сертификат (PNG)",en:"⬇ Certificate (PNG)"},"ex.again":{ru:"↻ Ещё раз",en:"↻ Try again"},"ex.cert.title":{ru:"СЕРТИФИКАТ",en:"CERTIFICATE"},"ex.cert.sub":{ru:"тест слепой печати",en:"touch typing test"},"ex.cert.date":{ru:"Дата",en:"Date"}};function s(e){const t=ot[e];return t?t[ce]:e}const it=["кот","дом","сок","лес","мяч","сыр","нос","рот","лук","мак","жук","дым","сон","мир","кит"],lt=["мама","папа","каша","зима","лето","луна","небо","море","гора","рыба","окно","сова","лиса","волк","утка"],ct=["весна","осень","школа","книга","песня","чашка","ложка","мышка","кошка","зебра","лампа","шапка","санки","горка","речка"],dt=["cat","dog","sun","box","red","run","mom","dad","egg","ice","car","bus","fox","bee","owl","hat","pen","map","cup","jam","sea","sky","toy","zoo","kid","leg","arm","eye","ear","nut","pig","hen","cow","ant","bat","big","hot","wet","six","ten"],ut=["ball","fish","bird","cake","milk","tree","star","moon","rain","snow","frog","duck","bear","lion","wolf","book","game","blue","pink","rose","door","desk","lamp","sofa","kite","ship","road","park","hand","foot","nose","face","hair","king","gold","fast","slow","warm","cold","five"],pt=["apple","house","smile","happy","water","bread","candy","tiger","mouse","horse","sheep","green","white","black","music","table","chair","plant","grass","cloud","river","beach","stone","train","plane","pizza","juice","sugar","lemon","mango","zebra","panda","koala","eagle","shark","dance","sleep","dream","light","seven"];function ft(e,t){return e.slice(t*5,t*5+5)}const B=[];{let e=1;const t=[[it,"ru"],[lt,"ru"],[ct,"ru"],[dt,"en"],[ut,"en"],[pt,"en"]];for(const[n,r]of t)for(let a=0;a*5<n.length;a++)B.push({id:e,lang:r,title:String(e),words:ft(n,a)}),e++}let H={stars:{}};function ht(){try{const e=JSON.parse(localStorage.getItem("tr_kids")??"");e&&e.stars&&(H=e)}catch{}}function mt(){try{localStorage.setItem("tr_kids",JSON.stringify(H))}catch{}}function bt(e){return e===1||(H.stars[e-1]??0)>0}let P="map",S=null,U=0,m=R([""]),C=0,de=0,A=0,ae=0,W="",x=null,Z=null;const gt={ru:["Молодец!","Здорово!","Так держать!","Ты супер!","Отлично!","Вот это да!"],en:["Well done!","Great!","Keep it up!","You rock!","Awesome!","Wow!"]},kt={ru:["Ой! Попробуй ещё","Чуть-чуть мимо","Не спеши","Почти попал!"],en:["Oops! Try again","Almost!","Take your time","So close!"]},yt=()=>gt[j()],Oe=()=>kt[j()],$e=e=>e[Math.floor(Math.random()*e.length)];let y=null;function ue(e,t,n,r=.07){if(!y)return;const a=y.createOscillator(),i=y.createGain();a.type="triangle",a.frequency.value=e,i.gain.setValueAtTime(r,y.currentTime+t),i.gain.exponentialRampToValueAtTime(.001,y.currentTime+t+n),a.connect(i),i.connect(y.destination),a.start(y.currentTime+t),a.stop(y.currentTime+t+n+.02)}function $t(){try{y??(y=new AudioContext),[523.25,659.25,783.99].forEach((e,t)=>ue(e,t*.09,.18))}catch{}}function xt(){try{y??(y=new AudioContext),[523.25,587.33,659.25,783.99,1046.5].forEach((e,t)=>ue(e,t*.11,.22,.08))}catch{}}function vt(){try{y??(y=new AudioContext),ue(196,0,.12,.05)}catch{}}function wt(e,t){x=e,Z=t,ht(),P="map",Y()}function Et(e){if(P!=="level"||!S||m.finishedAt!==null)return;if(e.key==="Backspace"){e.preventDefault();return}let t=null;if(e.key==="Enter"?t=`
`:e.key.length===1&&(t=e.key),t===null)return;e.preventDefault();const n=m.pattern[m.pos]??"";t=Me(t,n);const r=ne(m,t,!0);r.wrong&&(C++,W=$e(Oe()),vt()),r.finished&&(de+=m.pattern.length,W=$e(yt()),U+1<S.words.length?($t(),U++,m=R([S.words[U]])):It()),Y()}function It(){S&&(xt(),A=C===0?3:1-C/Math.max(de,1)>=.9?2:1,A>(H.stars[S.id]??0)&&(H.stars[S.id]=A,mt()),ae++,P="done")}function oe(e){S=e,U=0,C=0,de=0,W=e.lang==="ru"?s("k.startRu"):s("k.startEn"),m=R([e.words[0]]),P="level",Y()}const Ne=e=>e.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);function Tt(e){return e>0?"⭐".repeat(e):""}function Y(){x&&(P==="map"?St():P==="level"?Mt():Lt())}function St(){const e=[{lang:"ru",title:s("k.block.ru"),levels:B.filter(n=>n.lang==="ru")},{lang:"en",title:s("k.block.en"),levels:B.filter(n=>n.lang==="en")}],t=ae>0&&ae%3===0?`<div class="k-rest">${s("k.rest")}</div>`:"";x.innerHTML=`
    <div class="wrap kids">
      <header class="k-head">
        <h1>${s("k.title")}</h1>
        <button id="k-exit" class="ghost" title="Profile">⚙</button>
      </header>
      <p class="k-hello">${s("k.hello")}</p>
      ${t}
      ${e.map(n=>`
        <h2 class="k-block">${n.title}</h2>
        <div class="k-map">
          ${n.levels.map(r=>{const a=bt(r.id),i=H.stars[r.id]??0;return`<button class="k-lvl ${a?"open":"locked"} ${i>0?"passed":""}" data-level="${r.id}" ${a?"":"disabled"}>
              <span class="k-num">${a?r.id:"🔒"}</span>
              <span class="k-stars">${Tt(i)}</span>
            </button>`}).join("")}
        </div>`).join("")}
    </div>`,x.querySelectorAll("[data-level]").forEach(n=>{n.onclick=()=>{const r=B.find(a=>a.id===Number(n.dataset.level));r&&oe(r)}}),x.querySelector("#k-exit").onclick=()=>Z==null?void 0:Z()}function At(){let e="";for(let t=0;t<m.pattern.length;t++){const n=m.marks[t],r=t===m.pos?"cur":n===L.CORRECT?"ok":n===L.WRONG?"bad":"pend";e+=`<span class="${r}">${Ne(m.pattern[t])}</span>`}return e}function Mt(){const e=S,t=m.finishedAt===null?m.pattern[m.pos]??null:null,n=j()==="ru"||e.lang==="ru";x.innerHTML=`
    <div class="wrap kids">
      <header class="k-head">
        <button id="k-back" class="ghost">${s("k.back")}</button>
        <span class="k-progress">${s("k.level")} ${e.title} · ${s("k.word")} ${U+1} / ${e.words.length}</span>
        <span class="k-acc">${C===0?s("k.noerr"):`${s("k.errors")}: ${C}`}</span>
      </header>
      <div class="k-mascot"><span class="k-cat">${C>0&&W&&Oe().includes(W)?"🙀":"😺"}</span> <span class="k-say">${Ne(W)}</span></div>
      <div class="k-word">${At()}</div>
      <div class="keyb">${Le(t,e.lang==="ru",n)}</div>
    </div>`,x.querySelector("#k-back").onclick=()=>{P="map",Y()}}function Lt(){const e=S;x.innerHTML=`
    <div class="wrap kids">
      <div class="k-done">
        <div class="k-cat-big">${A===3?"😻":"😺"}</div>
        <h2>${s("k.level")} ${e.title} ${s("k.passed")}</h2>
        <div class="k-stars-big">${"⭐".repeat(A)}${"☆".repeat(3-A)}</div>
        <p class="k-done-note">${s(A===3?"k.note3":A===2?"k.note2":"k.note1")}</p>
        <div class="donebtns">
          <button id="k-again">${s("k.again")}</button>
          <button id="k-map2" class="ghost">${s("k.map")}</button>
          ${B.find(n=>n.id===e.id+1)?`<button id="k-next" class="primary">${s("k.next")}</button>`:""}
        </div>
      </div>
    </div>`,x.querySelector("#k-again").onclick=()=>oe(e),x.querySelector("#k-map2").onclick=()=>{P="map",Y()};const t=x.querySelector("#k-next");t&&(t.onclick=()=>{const n=B.find(r=>r.id===e.id+1);n&&oe(n)})}let v=st(),pe=[],D="abandon",g=[],h=0,d=R([""]),ee=!1,fe=!0,z=!0,he=!0,$=null,O=localStorage.getItem("tr_flow")==="1",T={typed:0,errors:0,ms:0,count:0};function Rt(){T={typed:0,errors:0,ms:0,count:0}}let o=null;function ie(){const e=o&&o.phase==="run"?G(d):{typed:0,errors:0},t=((o==null?void 0:o.typed)??0)+e.typed,n=((o==null?void 0:o.errors)??0)+e.errors,r=o?o.durMin*6e4-Math.max(0,o.endAt-Date.now()):0,a=Math.max(r/6e4,1/600),i=Math.round((t+n)/5/a),c=Math.round(t/5/a),u=t+n,p=u>0?Math.round(t/u*100):100;return{typed:t,errors:n,gross:i,net:c,accuracy:p,elapsedMs:r}}function Pt(e,t,n){const a=[...we(pe,"abandon")].sort(()=>Math.random()-.5);o={phase:"run",durMin:e,target:t,name:n,endAt:Date.now()+e*6e4,typed:0,errors:0,count:0,pool:a,pi:0,timer:null};try{localStorage.setItem("tr_name",n)}catch{}d=R([a[0].lines.join(" ")]),o.timer=window.setInterval(()=>{if(!(!o||o.phase!=="run")){if(Date.now()>=o.endAt){Ce();return}Gt()}},250),b()}function Ce(){if(!o)return;const e=G(d);o.typed+=e.typed,o.errors+=e.errors,o.timer&&(clearInterval(o.timer),o.timer=null),o.phase="result",b()}function xe(){o!=null&&o.timer&&clearInterval(o.timer),o=null,N()}let f={bestWpm:0,bestAcc:0,done:[],lastIdx:0};function Ot(e){try{const t=JSON.parse(localStorage.getItem(`tr_progress_${e}`)??"");if(t&&Array.isArray(t.done))return{bestWpm:t.bestWpm|0,bestAcc:t.bestAcc|0,done:t.done,lastIdx:t.lastIdx|0}}catch{}return{bestWpm:0,bestAcc:0,done:[],lastIdx:0}}function me(){try{localStorage.setItem(`tr_progress_${D}`,JSON.stringify(f))}catch{}}function Nt(e){const t=G(d);t.wpm>f.bestWpm&&(f.bestWpm=t.wpm),t.accuracy>f.bestAcc&&(f.bestAcc=t.accuracy),f.done.includes(e.id)||f.done.push(e.id),me()}function Be(){const e=G(d);if(!O)return e;const t=T.typed+e.typed,n=T.errors+e.errors,r=T.ms+e.elapsedMs,a=r/6e4,i=a>0?Math.round(t/5/a):0,c=t+n;return{typed:t,errors:n,elapsedMs:r,wpm:i,accuracy:c>0?Math.round(t/c*100):100}}let q=null;function ve(){if(fe)try{q??(q=new AudioContext);const e=q.createOscillator(),t=q.createGain();e.frequency.value=220,e.type="square",t.gain.value=.06,e.connect(t),t.connect(q.destination),e.start(),e.stop(q.currentTime+.07)}catch{}}const M=document.getElementById("app");let K=!1;function Ct(e){return j()==="ru"||e}function We(){return`<select id="lang" title="Language">
    <option value="ru" ${j()==="ru"?"selected":""}>RU</option>
    <option value="en" ${j()==="en"?"selected":""}>EN</option>
  </select>`}function Ge(e){const t=document.getElementById("lang");t&&(t.onchange=()=>{at(t.value),e()})}function b(){if(v===null){K=!1,Fe();return}if(v==="kids"){K||(K=!0,wt(M,()=>{K=!1,v=null,le(null),b()}));return}if(K=!1,o){Wt();return}const e=g[h],t=Be();M.innerHTML=`
    <div class="wrap">
      <header>
        <h1>Type<span>RIGHT</span>ing</h1>
        <div class="headctl">
          <select id="bank">
            ${Ve.map(n=>`<option value="${n}" ${n===D?"selected":""}>${s("bank."+n)}</option>`).join("")}
          </select>
          <select id="profile" title="Profile">
            ${Object.keys(Q).map(n=>`<option value="${n}" ${n===v?"selected":""}>${Q[n]} ${s("profile."+n)}</option>`).join("")}
          </select>
          ${We()}
        </div>
      </header>
      <p class="bankdesc">${s("bank."+D+".desc")} · <b>${g.length}</b> ${s("st.exercises")}
        · ${s("st.done")} <b>${f.done.length}</b>${f.bestWpm>0?` · ${s("st.record")} <b>${f.bestWpm}</b> ${s("st.wpm")} · <b>${f.bestAcc}%</b>`:""}</p>

      <div class="toolbar">
        <label><input type="checkbox" id="hide" ${ee?"checked":""}/> ${s("tb.hide")}</label>
        <label><input type="checkbox" id="sound" ${fe?"checked":""}/> ${s("tb.sound")}</label>
        <label><input type="checkbox" id="block" ${z?"checked":""}/> ${s("tb.block")}</label>
        <label><input type="checkbox" id="keyb" ${he?"checked":""}/> ${s("tb.keyb")}</label>
        <label title="Stamina-style"><input type="checkbox" id="flow" ${O?"checked":""}/> ${s("tb.flow")}</label>
        <button id="exam" class="ghost">⏱ ${s("tb.exam")}</button>
        <span class="spacer"></span>
        <button id="prev" class="ghost">${s("tb.prev")}</button>
        <span class="counter">${h+1} / ${g.length}</span>
        <button id="next" class="ghost">${s("tb.next")}</button>
      </div>

      <div class="card">
        <div class="exhead">
          <span class="extitle">${F((e==null?void 0:e.title)??"")}</span>
          ${e!=null&&e.hint?`<span class="exhint">${F(e.hint)}</span>`:""}
        </div>
        <div class="pattern ${ee?"hidden":""}" id="pattern">${De()}</div>
      </div>

      ${je()}

      <div class="statsbar">${He(t)}</div>

      ${d.finishedAt!==null?Bt(t):`<p class="hint2">${s(O?"hint.flow":"hint.type")} ${s(z?"hint.block":"hint.bs")}</p>`}
    </div>
  `,Ht()}function je(){if(!he)return"";const e=/[а-яё]/i.test(d.pattern);return`<div class="keyb">${Le(d.finishedAt===null?d.pattern[d.pos]??null:null,e,Ct(e))}</div>`}function He(e){return`
    <div><b>${e.wpm}</b><span>${s("st.wpm")}</span></div>
    <div><b>${e.accuracy}%</b><span>${s("st.accuracy")}</span></div>
    <div><b class="${e.errors>0?"err":""}">${e.errors}</b><span>${s("st.errors")}</span></div>
    <div><b>${(e.elapsedMs/1e3).toFixed(0)}s</b><span>${s("st.time")}</span></div>
    ${O?`<div><b>🔥 ${T.count}</b><span>${s("st.streak")}</span></div>`:""}`}function F(e){return e.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t])}function De(){if(ee)return`<span class="hidden-note">${s("hint.hidden")}</span>`;let e="";for(let t=0;t<d.pattern.length;t++){const n=d.pattern[t],r=d.marks[t],a=t===d.pos?"cur":r===L.CORRECT?"ok":r===L.WRONG?"bad":"pend";n===`
`?e+=`<span class="${a} nl">↵</span><br/>`:e+=`<span class="${a}">${F(n)}</span>`}return e}function Fe(){M.innerHTML=`
    <div class="wrap onboard">
      <div class="ob-lang">${We()}</div>
      <h1 class="ob-title">Type<span>RIGHT</span>ing</h1>
      <p class="ob-sub">${s("ob.sub")}</p>
      <div class="ob-cards">
        ${Object.keys(Q).map(e=>`
          <button class="ob-card" data-profile-pick="${e}">
            <span class="ob-emoji">${Q[e]}</span>
            <span class="ob-name">${s("profile."+e)}</span>
            <span class="ob-desc">${s("profile."+e+".desc")}</span>
          </button>`).join("")}
      </div>
      <p class="ob-note">${s("ob.note")}</p>
    </div>`,M.querySelectorAll("[data-profile-pick]").forEach(e=>{e.onclick=()=>{v=e.dataset.profilePick,Pe(v),b()}}),Ge(()=>Fe())}function Bt(e){return`
    <div class="done">
      <h2>${s(v==="f"?"done.title.f":"done.title")}</h2>
      <div class="donestats">
        <span><b>${e.wpm}</b> ${s("st.wpm")}</span>
        <span><b>${e.accuracy}%</b> ${s("st.accuracy")}</span>
        <span><b>${e.errors}</b> ${s("st.errors")}</span>
        <span><b>${(e.elapsedMs/1e3).toFixed(1)}s</b></span>
      </div>
      <div class="donebtns">
        <button id="again">${s("done.again")}</button>
        <button id="nextdone" class="primary">${s("done.next")}</button>
      </div>
    </div>`}function Wt(){if(!o)return;if(o.phase==="setup"){const n=localStorage.getItem("tr_name")??"";M.innerHTML=`
      <div class="wrap">
        <div class="exam-setup">
          <h2>⏱ ${s("ex.title")}</h2>
          <p class="ex-desc">${s("ex.desc")}</p>
          <div class="ex-form">
            <label>${s("ex.duration")}:
              <select id="ex-dur">
                <option value="1">1 ${s("ex.min")}</option>
                <option value="5">5 ${s("ex.min")}</option>
                <option value="10" selected>10 ${s("ex.min")}</option>
              </select>
            </label>
            <label>${s("ex.target")}: <input id="ex-target" type="number" value="35" min="5" max="120"/></label>
            <label>${s("ex.name")}: <input id="ex-name" type="text" value="${F(n)}" placeholder="—"/></label>
          </div>
          <div class="donebtns">
            <button id="ex-cancel" class="ghost">${s("ex.cancel")}</button>
            <button id="ex-go" class="primary">${s("ex.start")}</button>
          </div>
        </div>
      </div>`,document.getElementById("ex-go").onclick=()=>{const r=Number(document.getElementById("ex-dur").value),a=Number(document.getElementById("ex-target").value)||35,i=document.getElementById("ex-name").value.trim();Pt(r,a,i)},document.getElementById("ex-cancel").onclick=()=>xe();return}if(o.phase==="run"){const n=o.pool[o.pi],r=ie(),a=Math.max(0,o.endAt-Date.now());M.innerHTML=`
      <div class="wrap">
        <div class="exam-hud">
          <span class="ex-timer" id="ex-timer">${_e(a)}</span>
          <span class="ex-hudstats" id="ex-hudstats">${s("ex.net")} <b>${r.net}</b> · ${s("st.accuracy")} <b>${r.accuracy}%</b> · ${s("ex.target.short")} ${o.target}</span>
          <button id="ex-stop" class="ghost">${s("ex.cancel")}</button>
        </div>
        <div class="card">
          <div class="exhead"><span class="extitle">${F((n==null?void 0:n.title)??"")}</span></div>
          <div class="pattern" id="pattern">${De()}</div>
        </div>
        ${je()}
      </div>`,document.getElementById("ex-stop").onclick=()=>Ce();return}const e=ie(),t=e.net>=o.target;M.innerHTML=`
    <div class="wrap">
      <div class="exam-result">
        <h2>${s("ex.result")}</h2>
        <div class="ex-verdict ${t?"pass":"fail"}">${s(t?"ex.pass":"ex.fail")} <small>(${s("ex.target.short")} ${o.target} ${s("ex.net")})</small></div>
        <div class="statsbar">
          <div><b>${e.net}</b><span>${s("ex.net")}</span></div>
          <div><b>${e.gross}</b><span>${s("ex.gross")}</span></div>
          <div><b>${e.accuracy}%</b><span>${s("st.accuracy")}</span></div>
          <div><b>${e.typed+e.errors}</b><span>${s("ex.keystrokes")}</span></div>
          <div><b>${o.durMin} ${s("ex.min")}</b><span>${s("st.time")}</span></div>
        </div>
        <div class="donebtns">
          <button id="ex-cert" class="primary">${s("ex.cert")}</button>
          <button id="ex-retry">${s("ex.again")}</button>
          <button id="ex-exit" class="ghost">${s("ex.cancel")}</button>
        </div>
      </div>
    </div>`,document.getElementById("ex-cert").onclick=()=>jt(e,t),document.getElementById("ex-retry").onclick=()=>{o.phase="setup",b()},document.getElementById("ex-exit").onclick=()=>xe()}function _e(e){const t=Math.ceil(e/1e3);return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`}function Gt(){if(!o||o.phase!=="run")return;const e=document.getElementById("ex-timer"),t=document.getElementById("ex-hudstats");if(!e||!t)return;const n=ie();e.textContent=_e(Math.max(0,o.endAt-Date.now())),t.innerHTML=`${s("ex.net")} <b>${n.net}</b> · ${s("st.accuracy")} <b>${n.accuracy}%</b> · ${s("ex.target.short")} ${o.target}`}function jt(e,t){if(!o)return;const n=document.createElement("canvas");n.width=1200,n.height=850;const r=n.getContext("2d");r.fillStyle="#faf7f0",r.fillRect(0,0,1200,850),r.strokeStyle="#b9962e",r.lineWidth=6,r.strokeRect(30,30,1140,790),r.lineWidth=1.5,r.strokeRect(44,44,1112,762),r.fillStyle="#2a2a33",r.textAlign="center",r.font="700 28px Georgia, serif",r.fillText("TypeRIGHTing",600,110),r.font="800 64px Georgia, serif",r.fillStyle="#b9962e",r.fillText(s("ex.cert.title"),600,200),r.font="400 26px Georgia, serif",r.fillStyle="#555",r.fillText(s("ex.cert.sub"),600,240),r.font="700 52px Georgia, serif",r.fillStyle="#2a2a33",r.fillText(o.name||"—",600,350),r.font="800 110px Georgia, serif",r.fillStyle=t?"#2f7d4f":"#b3443a",r.fillText(`${e.net} ${s("ex.net")}`,600,500),r.font="400 30px Georgia, serif",r.fillStyle="#444",r.fillText(`${s("ex.gross")}: ${e.gross}   ·   ${s("st.accuracy")}: ${e.accuracy}%   ·   ${o.durMin} ${s("ex.min")}`,600,570),r.font="700 36px Georgia, serif",r.fillStyle=t?"#2f7d4f":"#b3443a",r.fillText(t?`✔ ${s("ex.pass")}`:`✘ ${s("ex.fail")}`,600,650),r.font="400 22px Georgia, serif",r.fillStyle="#777",r.fillText(`${s("ex.cert.date")}: ${new Date().toLocaleDateString()}`,600,740);const a=document.createElement("a");a.download=`TypeRIGHTing-test-${e.net}wpm.png`,a.href=n.toDataURL("image/png"),a.click()}function Ht(){document.getElementById("bank").onchange=n=>{D=n.target.value,qe()},document.getElementById("profile").onchange=n=>{v=n.target.value,Pe(v),b()},Ge(()=>b()),document.getElementById("hide").onchange=n=>{ee=n.target.checked,b()},document.getElementById("sound").onchange=n=>{fe=n.target.checked},document.getElementById("block").onchange=n=>{z=n.target.checked},document.getElementById("keyb").onchange=n=>{he=n.target.checked,b()},document.getElementById("flow").onchange=n=>{O=n.target.checked;try{localStorage.setItem("tr_flow",O?"1":"0")}catch{}Rt(),N()},document.getElementById("exam").onclick=()=>{o={phase:"setup",durMin:10,target:35,name:"",endAt:0,typed:0,errors:0,count:0,pool:[],pi:0,timer:null},$&&(clearInterval($),$=null),b()},document.getElementById("prev").onclick=()=>{h=(h-1+g.length)%g.length,N()},document.getElementById("next").onclick=()=>{h=(h+1)%g.length,N()};const e=document.getElementById("again");e&&(e.onclick=()=>N());const t=document.getElementById("nextdone");t&&(t.onclick=()=>{h=(h+1)%g.length,N()})}function qe(){g=we(pe,D),f=Ot(D),h=Math.min(Math.max(f.lastIdx,0),Math.max(g.length-1,0)),N()}function Ke(e){return R(e?O?[e.lines.join(" ")]:e.lines:[""])}function N(){d=Ke(g[h]),$&&(clearInterval($),$=null),f.lastIdx!==h&&(f.lastIdx=h,me()),b()}document.addEventListener("keydown",e=>{var a;const t=(a=e.target)==null?void 0:a.tagName;if(t==="SELECT"||t==="INPUT")return;if(v==="kids"){Et(e);return}if(o&&o.phase!=="run"||d.finishedAt!==null)return;if(e.key==="Backspace"){e.preventDefault(),(o||!z)&&(Xe(d),b());return}let n=null;if(e.key==="Enter"?n=`
`:e.key.length===1&&(n=e.key),n===null)return;if(e.preventDefault(),n=Me(n,d.pattern[d.pos]??""),o){const i=ne(d,n,!1);if(i.wrong&&ve(),i.finished){const c=G(d);o.typed+=c.typed,o.errors+=c.errors,o.count++,o.pi=(o.pi+1)%o.pool.length,d=R([o.pool[o.pi].lines.join(" ")])}b();return}d.startedAt===null&&!$&&($=window.setInterval(()=>{d.finishedAt===null&&Dt()},250));const r=ne(d,n,z);if(r.wrong&&ve(),r.finished){const i=g[h];if(O&&i){const c=G(d);T.typed+=c.typed,T.errors+=c.errors,T.ms+=c.elapsedMs,T.count++,f.done.includes(i.id)||f.done.push(i.id),h=(h+1)%g.length,f.lastIdx=h,me(),d=Ke(g[h])}else $&&(clearInterval($),$=null),i&&Nt(i)}b()});function Dt(){const e=document.querySelector(".statsbar");e&&(e.innerHTML=He(Be()))}le(v);Ze().then(e=>{pe=e,qe()}).catch(e=>{M.innerHTML=`<div class="wrap"><p class="err">${s("err.load")}: ${F(String(e))}</p></div>`});
