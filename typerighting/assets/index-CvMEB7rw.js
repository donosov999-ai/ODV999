(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}})();const Un=["abandon","engRus","letterByLetter","poemHymn"];let We=null;async function Jn(){return We||(We=await(await fetch("content/exercises.json")).json(),We)}function on(e,t){return e.filter(n=>n.bank===t)}const I={PENDING:0,CORRECT:1,WRONG:2};function w(e){const t=e.join(`
`);return{pattern:t,pos:0,errors:0,startedAt:null,finishedAt:null,marks:new Uint8Array(t.length)}}function ge(e,t,n){if(e.finishedAt!==null)return{accepted:!1,wrong:!1,finished:!0};e.startedAt===null&&(e.startedAt=Date.now());const r=e.pattern[e.pos];if((t==="\r"?`
`:t)===r){e.marks[e.pos]=I.CORRECT,e.pos++;const d=e.pos>=e.pattern.length;return d&&(e.finishedAt=Date.now()),{accepted:!0,wrong:!1,finished:d}}if(e.errors++,n)return{accepted:!1,wrong:!0,finished:!1};e.marks[e.pos]=I.WRONG,e.pos++;const i=e.pos>=e.pattern.length;return i&&(e.finishedAt=Date.now()),{accepted:!0,wrong:!0,finished:i}}function Yn(e){e.finishedAt===null&&e.pos>0&&(e.pos--,e.marks[e.pos]=I.PENDING)}function U(e){const t=e.finishedAt??Date.now(),n=e.startedAt?t-e.startedAt:0;let r=0;for(let l=0;l<e.pos;l++)e.marks[l]===I.CORRECT&&r++;const a=n/6e4,o=a>0?Math.round(r/5/a):0,i=r+e.errors,d=i>0?Math.round(r/i*100):100;return{typed:r,errors:e.errors,elapsedMs:n,wpm:o,accuracy:d}}const ln=[[{id:"tilde",u:1,en:"~",en2:"`",ru:"Ё"},{id:"d1",u:1,en:"1",en2:"!"},{id:"d2",u:1,en:"2",en2:"@"},{id:"d3",u:1,en:"3",en2:"#"},{id:"d4",u:1,en:"4",en2:"$"},{id:"d5",u:1,en:"5",en2:"%"},{id:"d6",u:1,en:"6",en2:"^"},{id:"d7",u:1,en:"7",en2:"&"},{id:"d8",u:1,en:"8",en2:"*"},{id:"d9",u:1,en:"9",en2:"("},{id:"d0",u:1,en:"0",en2:")"},{id:"minus",u:1,en:"-",en2:"_"},{id:"equal",u:1,en:"=",en2:"+"},{id:"backslash",u:1,en:"\\",en2:"|"},{id:"backspace",u:1.6,label:"←"}],[{id:"tab",u:1.5,label:"Tab"},{id:"q",u:1,en:"Q",ru:"Й"},{id:"w",u:1,en:"W",ru:"Ц"},{id:"e",u:1,en:"E",ru:"У"},{id:"r",u:1,en:"R",ru:"К"},{id:"t",u:1,en:"T",ru:"Е"},{id:"y",u:1,en:"Y",ru:"Н"},{id:"u",u:1,en:"U",ru:"Г"},{id:"i",u:1,en:"I",ru:"Ш"},{id:"o",u:1,en:"O",ru:"Щ"},{id:"p",u:1,en:"P",ru:"З"},{id:"lbracket",u:1,en:"[",en2:"{",ru:"Х"},{id:"rbracket",u:1,en:"]",en2:"}",ru:"Ъ"},{id:"enterpad2",u:1.45}],[{id:"caps",u:1.9,label:"Caps Lock"},{id:"a",u:1,en:"A",ru:"Ф"},{id:"s",u:1,en:"S",ru:"Ы"},{id:"d",u:1,en:"D",ru:"В"},{id:"f",u:1,en:"F",ru:"А"},{id:"g",u:1,en:"G",ru:"П"},{id:"h",u:1,en:"H",ru:"Р"},{id:"j",u:1,en:"J",ru:"О"},{id:"k",u:1,en:"K",ru:"Л"},{id:"l",u:1,en:"L",ru:"Д"},{id:"semi",u:1,en:";",en2:":",ru:"Ж"},{id:"quote",u:1,en:"'",en2:'"',ru:"Э"},{id:"enterpad3",u:1.45}],[{id:"lshift",u:2.3,label:"Shift"},{id:"z",u:1,en:"Z",ru:"Я"},{id:"x",u:1,en:"X",ru:"Ч"},{id:"c",u:1,en:"C",ru:"С"},{id:"v",u:1,en:"V",ru:"М"},{id:"b",u:1,en:"B",ru:"И"},{id:"n",u:1,en:"N",ru:"Т"},{id:"m",u:1,en:"M",ru:"Ь"},{id:"comma",u:1,en:",",en2:"<",ru:"Б"},{id:"period",u:1,en:".",en2:">",ru:"Ю"},{id:"slash",u:1,en:"/",en2:"?"},{id:"rshift",u:1.2,label:"Shift"},{id:"rept",u:1.2,label:"Rept"}],[{id:"lctrl",u:1.3,label:"Ctrl"},{id:"blank1",u:1.1},{id:"lalt",u:1.3,label:"Alt"},{id:"space",u:6.8,label:""},{id:"ralt",u:1.3,label:"Alt"},{id:"blank2",u:1.1},{id:"rctrl",u:1.3,label:"Ctrl"}]],cn=[["a","q"],["a","z"],["s","w"],["s","x"],["d","e"],["d","c"],["f","r"],["f","t"],["f","g"],["f","v"],["f","b"],["f","d5"],["j","y"],["j","u"],["j","h"],["j","n"],["j","m"],["j","d6"],["j","d7"],["k","i"],["k","comma"],["k","d8"],["l","o"],["l","period"],["semi","p"],["semi","lbracket"],["semi","rbracket"],["semi","quote"],["semi","slash"]],un={};for(const[e,t]of cn)un[t]=e;const mt=new Set(["tilde","d1","d2","d3","d4","d5","tab","q","w","e","r","t","caps","a","s","d","f","g","lshift","z","x","c","v","b"]),Xe=920,Ut=380,pt=12,Jt=6,Yt=60,Zn=70,Vn=14,S={};{ln.forEach((r,a)=>{const o=r.reduce((l,p)=>l+p.u,0),i=(Xe-2*pt-Jt*(r.length-1))/o;let d=pt;for(const l of r){const p=l.u*i;S[l.id]={...l,x:d,y:Vn+a*Zn,w:p,h:Yt},d+=p+Jt}});const e=S.enterpad2,t=S.enterpad3,n=Math.min(e.x,t.x);S.enter={id:"enter",u:0,label:"Enter",x:n,y:e.y,w:Xe-pt-n,h:t.y+Yt-e.y},delete S.enterpad2,delete S.enterpad3}const Xn=typeof navigator<"u"&&/Mac|iPhone|iPad/i.test((navigator.platform||"")+" "+(navigator.userAgent||""));Xn&&(S.tilde&&(S.tilde.ru=void 0),S.backslash&&(S.backslash.ru="Ё"));const K={},B={};{const e=(t,n,r,a)=>{t[n]={id:r,shift:a}};for(const t of Object.values(S))t.en&&(/^[A-Z]$/.test(t.en)?(e(K,t.en.toLowerCase(),t.id,!1),e(K,t.en,t.id,!0)):(e(K,t.en,t.id,!1),t.en2&&e(K,t.en2,t.id,!0))),t.ru&&/^[А-ЯЁ]$/.test(t.ru)&&(e(B,t.ru.toLowerCase(),t.id,!1),e(B,t.ru,t.id,!0));e(B,".","slash",!1),e(B,",","slash",!0);for(const t of[K,B])e(t," ","space",!1),e(t,`
`,"enter",!1);for(const[t,n]of Object.entries(K))!(t in B)&&!/[a-zA-Z.,]/.test(t)&&(B[t]=n)}const dn={},pn={};for(const e of ln)for(const t of e)t.en&&t.ru&&/^[A-Z]$/.test(t.en)&&/^[А-ЯЁ]$/.test(t.ru)&&(dn[t.en.toLowerCase()]=t.ru.toLowerCase(),pn[t.ru.toLowerCase()]=t.en.toLowerCase());function Ne(e,t){if(e.length!==1||t.length!==1)return e;const n=e.toLowerCase();let r;return/[а-яё]/i.test(t)&&/[a-z]/.test(n)?r=dn[n]:/[a-z]/i.test(t)&&/[а-яё]/.test(n)&&(r=pn[n]),r?e===n?r:r.toUpperCase():e}function hn(e,t){return/[а-яё]/i.test(e)?B[e]??null:/[a-z]/i.test(e)?K[e]??null:(t?B[e]:K[e])??(t?K[e]:B[e])??null}function Et(e){const t=[];for(const n of Object.values(S)){const r=e==="en"?n.en:n.ru;r&&/^[A-Za-zА-Яа-яЁё]$/.test(r)&&t.push({id:n.id,ch:r.toLowerCase()})}return t}function ut(e,t){var n;return((n=hn(e,t))==null?void 0:n.id)??null}function Qn(e,t){return Et(e).filter(({id:n})=>t==="left"?mt.has(n):!mt.has(n)).map(({ch:n})=>n)}const Be=e=>e.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),bt=e=>e.x+e.w/2,gt=e=>e.y+e.h/2;function er(e,t){const n=bt(e),r=gt(e),a=bt(t),o=gt(t),i=(n+a)/2,d=(r+o)/2,l=a-n,p=o-r,u=Math.hypot(l,p)||1,m=Math.min(18,u*.18)*(l>=0?1:-1),C=i-p/u*m,de=d+l/u*m,Y=1-16/u,N=n+l*Y,Z=r+p*Y;return`M ${n.toFixed(1)} ${r.toFixed(1)} Q ${C.toFixed(1)} ${de.toFixed(1)} ${N.toFixed(1)} ${Z.toFixed(1)}`}function qe(e,t,n=!0,r=null){const a=e!==null?hn(e,t):null,o=(a==null?void 0:a.id)??null,i=o?un[o]??null:null;let d=null;a!=null&&a.shift&&o&&(d=mt.has(o)?"rshift":"lshift");const l=[];for(const u of Object.values(S)){const m=["key"];u.id===o&&m.push("key-next"),u.id===d&&m.push("key-shift"),u.id===i&&m.push("key-home");const C=(u.x+4).toFixed(1),de=u.y+3,Y=(u.w-8).toFixed(1),N=u.h-10;if(l.push(`<g class="${m.join(" ")}" data-key="${u.id}">`,`<rect class="key-base" x="${u.x}" y="${u.y}" width="${u.w.toFixed(1)}" height="${u.h}" rx="9"/>`,`<rect class="key-face" x="${C}" y="${de}" width="${Y}" height="${N}" rx="6"/>`),r&&u.id in r){const Z=r[u.id],Fn=Z<=0?"34,197,94":"217,58,58",zn=Z<=0?.22:(.2+.6*Math.min(Z,1)).toFixed(2);l.push(`<rect x="${C}" y="${de}" width="${Y}" height="${N}" rx="6" fill="rgb(${Fn})" opacity="${zn}"/>`)}u.label!==void 0?l.push(`<text class="key-fn" x="${bt(u).toFixed(1)}" y="${(gt(u)+4).toFixed(1)}" text-anchor="middle">${Be(u.label)}</text>`):(u.en2&&l.push(`<text class="key-en2" x="${(u.x+12).toFixed(1)}" y="${u.y+22}">${Be(u.en2)}</text>`),u.en&&l.push(`<text class="key-en" x="${(u.x+12).toFixed(1)}" y="${u.y+(u.en2?46:38)}">${Be(u.en)}</text>`),u.ru&&n&&l.push(`<text class="key-ru" x="${(u.x+u.w-12).toFixed(1)}" y="${u.y+u.h-14}" text-anchor="end">${Be(u.ru)}</text>`)),l.push("</g>")}const p=cn.map(([u,m])=>{const C=m===o&&u===(i??"");return`<path class="arr${C?" arr-active":""}" d="${er(S[u],S[m])}" marker-end="url(#arrhead${C?"-a":""})"/>`}).join("");return`<svg class="kbsvg${o?" has-target":""}" viewBox="0 0 ${Xe} ${Ut}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Схема клавиатуры: красные стрелки — правильное направление движения пальцев от домашнего ряда">
    <defs>
      <marker id="arrhead" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" class="arrhead"/></marker>
      <marker id="arrhead-a" markerWidth="8" markerHeight="8" refX="5.5" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" class="arrhead-a"/></marker>
    </defs>
    <rect class="kb-bg" x="0" y="0" width="${Xe}" height="${Ut}" rx="14"/>
    ${l.join("")}
    ${p}
  </svg>`}const Qe={m:"⌨️",f:"🌸",kids:"🐱"},fn="tr_profile";function tr(){const e=localStorage.getItem(fn);return e==="m"||e==="f"||e==="kids"?e:null}function mn(e){try{localStorage.setItem(fn,e)}catch{}At(e)}function At(e){e?document.documentElement.dataset.profile=e:delete document.documentElement.dataset.profile}let It=localStorage.getItem("tr_lang")==="en"?"en":"ru";function j(){return It}function nr(e){It=e;try{localStorage.setItem("tr_lang",e)}catch{}}const rr={"ob.sub":{ru:"Тренажёр слепой печати. Для кого настроить?",en:"Touch typing trainer. Who is it for?"},"ob.note":{ru:"Профиль можно сменить в любой момент в шапке.",en:"You can switch the profile any time in the header."},"profile.m":{ru:"Мужской",en:"Classic"},"profile.f":{ru:"Женский",en:"Soft"},"profile.kids":{ru:"Детский",en:"Kids"},"profile.m.desc":{ru:"Светлая тема, скорость и рекорды",en:"Light theme, speed and records"},"profile.f.desc":{ru:"Светлая тёплая тема, мягкий темп",en:"Warm light theme, gentle pace"},"profile.kids.desc":{ru:"Игра: уровни, звёзды и котик",en:"Game: levels, stars and a cat"},"bank.abandon":{ru:"Слова в предложениях",en:"Words in sentences"},"bank.engRus":{ru:"Англ↔Рус (с переводом)",en:"EN words + RU hints"},"bank.letterByLetter":{ru:"По буквам (наращивание)",en:"Letter by letter"},"bank.poemHymn":{ru:"Стихи и гимны",en:"Poems & hymns"},"bank.abandon.desc":{ru:"Печатай предложение с новым словом — словарный запас + скорость.",en:"Type a sentence with a new word — vocabulary + speed."},"bank.engRus.desc":{ru:"Слово с переводом + предложение. Перевод-подсказка над образцом.",en:"A word with RU translation + a sentence to type."},"bank.letterByLetter.desc":{ru:"Слово печатается по нарастающей: a, ab, aba… — постановка пальцев.",en:"Build the word up: a, ab, aba… — finger placement."},"bank.poemHymn.desc":{ru:"Стихи и гимны по строфам (4–8 строк) — ритм и выносливость печати.",en:"Poems & hymns by stanza (4–8 lines) — rhythm and stamina."},"tb.hide":{ru:"Спрятать образец",en:"Hide pattern"},"tb.sound":{ru:"Звук ошибки",en:"Error sound"},"tb.block":{ru:"Блок при ошибке",en:"Block on error"},"tb.keyb":{ru:"Клавиатура",en:"Keyboard"},"tb.flow":{ru:"Поток",en:"Flow"},"tb.heat":{ru:"Тепловая карта",en:"Heatmap"},"tb.exam":{ru:"Тест",en:"Test"},"tb.weak":{ru:"🎯 Слабые клавиши",en:"🎯 Weak keys"},"tb.custom":{ru:"✎ Свой текст",en:"✎ Custom text"},"tb.progress":{ru:"📈 Прогресс",en:"📈 Progress"},"tb.course":{ru:"📚 Курс",en:"📚 Course"},"tb.learn":{ru:"🤖 AI-обучение",en:"🤖 AI training"},"tb.compete":{ru:"🏆 Соревнование",en:"🏆 Compete"},"hub.q":{ru:"С чего начнём?",en:"Where to start?"},"hub.home":{ru:"Главная",en:"Home"},"hub.settings":{ru:"Настройки",en:"Settings"},"hub.train":{ru:"Тренировка",en:"Practice"},"hub.train.d":{ru:"Упражнения по банкам: слова, тексты, стихи",en:"Exercise banks: words, texts, poems"},"hub.course.d":{ru:"Уроки с нуля до текста, по шагам",en:"Lessons from scratch to text, step by step"},"hub.learn.d":{ru:"Умный поток, подстраивается под ошибки",en:"Smart stream, adapts to your mistakes"},"hub.compete.d":{ru:"Дисциплины на скорость + онлайн-таблица",en:"Speed disciplines + online board"},"hub.exam.d":{ru:"Тест на время с сертификатом",en:"Timed test with a certificate"},"hub.progress.d":{ru:"График скорости и рекорды",en:"Speed chart and records"},"hub.streak":{ru:"дней подряд",en:"day streak"},"nav.back":{ru:"← Назад",en:"← Back"},"nav.tomap":{ru:"← К списку",en:"← To list"},"compete.title":{ru:"Тест-соревнование",en:"Typing Compete"},"compete.intro":{ru:"Выбери дисциплину и поставь рекорд. Результат можно опубликовать в онлайн-таблице.",en:"Pick a discipline and set a record. Publish your result to the online leaderboard."},"comp.alpha_fwd":{ru:"Алфавит А→Я",en:"Alphabet A→Z"},"comp.alpha_rev":{ru:"Алфавит Я→А",en:"Alphabet Z→A"},"comp.words":{ru:"Слова",en:"Words"},"comp.digits":{ru:"Цифры",en:"Numbers"},"comp.sprint":{ru:"Спринт",en:"Sprint"},"comp.best":{ru:"рекорд",en:"best"},"comp.hint":{ru:"на скорость, без ошибок",en:"for speed, no errors"},"comp.record":{ru:"Новый личный рекорд!",en:"New personal record!"},"comp.name":{ru:"Имя для таблицы",en:"Name for the board"},"comp.publish":{ru:"Опубликовать",en:"Publish"},"comp.leaderboard":{ru:"Таблица рекордов",en:"Leaderboard"},"comp.player":{ru:"Игрок",en:"Player"},"comp.loading":{ru:"Загрузка таблицы…",en:"Loading board…"},"comp.empty":{ru:"Пока нет результатов — будь первым!",en:"No results yet — be the first!"},"learn.title":{ru:"AI-обучение",en:"AI training"},"learn.intro":{ru:"Программа сама генерирует связные строки и подмешивает буквы, где ты ошибаешься. Просто печатай поток — она подстраивается.",en:"The program generates connected lines and mixes in the letters you miss. Just type the stream — it adapts to you."},"learn.intro.kids":{ru:"Печатай слова, которые придумывает котик! Чем точнее — тем лучше 🐱",en:"Type the words the cat makes up! The more accurate, the better 🐱"},"learn.mastery":{ru:"Мастерство",en:"Mastery"},"learn.tempo":{ru:"Темп",en:"Tempo"},"learn.rhythm":{ru:"Ритмичность",en:"Rhythm"},"learn.lines":{ru:"строк",en:"lines"},"learn.tip":{ru:"Мастерство — скорость с учётом ошибок (сим/мин). Ритмичность >80% — ровный темп профи.",en:"Mastery — speed adjusted for errors (chars/min). Rhythm >80% — pro-level evenness."},"learn.lvl.start":{ru:"старт",en:"start"},"learn.lvl.good":{ru:"хорошо",en:"good"},"learn.lvl.work":{ru:"рабочий",en:"working"},"learn.lvl.pro":{ru:"профи",en:"pro"},"learn.hand":{ru:"Рука",en:"Hand"},"learn.hand.both":{ru:"Обе",en:"Both"},"learn.hand.left":{ru:"Левая",en:"Left"},"learn.hand.right":{ru:"Правая",en:"Right"},"course.title":{ru:"Курс печати",en:"Typing course"},"course.intro":{ru:"Последовательные уроки от домашнего ряда до предложений. Каждый урок открывает следующий.",en:"Step-by-step lessons from the home row to sentences. Each lesson unlocks the next."},"course.exit":{ru:"⚙ Выход",en:"⚙ Exit"},"course.lesson":{ru:"Урок",en:"Lesson"},"course.line":{ru:"строка",en:"line"},"course.tip":{ru:"Печатай ровно и точно — скорость придёт сама.",en:"Type evenly and accurately — speed will follow."},"course.home":{ru:"Домашний ряд",en:"Home row"},"course.review":{ru:"Повторение домашнего ряда",en:"Home row review"},"course.keys":{ru:"Новые клавиши",en:"New keys"},"course.caps":{ru:"Заглавные буквы (Shift)",en:"Capitals (Shift)"},"course.digits":{ru:"Цифры",en:"Numbers"},"course.punct":{ru:"Знаки препинания",en:"Punctuation"},"course.words":{ru:"Частые слова",en:"Common words"},"course.sentences":{ru:"Предложения",en:"Sentences"},"tb.dark":{ru:"Тёмная тема",en:"Dark theme"},"tb.prev":{ru:"‹ Пред",en:"‹ Prev"},"tb.next":{ru:"След ›",en:"Next ›"},"weak.title":{ru:"Слабые клавиши",en:"Weak keys"},"weak.hint":{ru:"Упражнение собрано из клавиш, где у тебя больше всего ошибок. «След» — новый набор.",en:"Built from the keys you miss most. “Next” — a fresh set."},"weak.none":{ru:"Пока мало данных — тренируем домашний ряд. Печатай ещё, и появятся твои слабые клавиши.",en:"Not enough data yet — training the home row. Keep typing to reveal your weak keys."},"prog.title":{ru:"Прогресс по сессиям",en:"Progress by session"},"prog.empty":{ru:"Недостаточно данных. Пройди хотя бы 2 упражнения — появится график скорости.",en:"Not enough data. Finish at least 2 exercises to see the speed chart."},"prog.close":{ru:"Закрыть",en:"Close"},"custom.title":{ru:"Свой текст",en:"Custom text"},"custom.ph":{ru:"Вставь любой текст для тренировки…",en:"Paste any text to practice…"},"custom.start":{ru:"Тренировать",en:"Practice"},"custom.cancel":{ru:"Отмена",en:"Cancel"},"st.exercises":{ru:"упражнений",en:"exercises"},"st.done":{ru:"пройдено",en:"done"},"st.record":{ru:"рекорд",en:"best"},"st.wpm":{ru:"WPM",en:"WPM"},"st.accuracy":{ru:"точность",en:"accuracy"},"st.errors":{ru:"ошибок",en:"errors"},"st.time":{ru:"время",en:"time"},"st.streak":{ru:"подряд",en:"streak"},"hint.flow":{ru:"Поток: упражнения идут подряд без остановки.",en:"Flow: exercises run back to back, no stops."},"hint.type":{ru:"Печатай по образцу.",en:"Type the pattern."},"hint.block":{ru:"Неверный символ не пропускается.",en:"Wrong keys are not accepted."},"hint.bs":{ru:"Backspace — исправить.",en:"Backspace to fix."},"hint.hidden":{ru:"образец скрыт — печатай по памяти",en:"pattern hidden — type from memory"},"done.title":{ru:"✓ Готово",en:"✓ Done"},"done.title.f":{ru:"✓ Отлично!",en:"✓ Great job!"},"done.again":{ru:"↻ Заново",en:"↻ Again"},"done.next":{ru:"Следующее →",en:"Next →"},"err.load":{ru:"Не удалось загрузить упражнения",en:"Failed to load exercises"},"k.title":{ru:"🐱 Котик-печатник",en:"🐱 Typing Cat"},"k.hello":{ru:"Привет! Выбирай уровень — будем учиться печатать. Печатай точно, спешить не надо!",en:"Hi! Pick a level and let’s learn to type. Be accurate — no need to rush!"},"k.rest":{ru:"🐱 Ты отлично позанимался! Передохни немножко 💛",en:"🐱 Great practice! Take a little break 💛"},"k.block.ru":{ru:"🇷🇺 По-русски",en:"🇷🇺 Russian"},"k.block.en":{ru:"🇬🇧 По-английски",en:"🇬🇧 English"},"k.level":{ru:"Уровень",en:"Level"},"k.word":{ru:"слово",en:"word"},"k.noerr":{ru:"⭐ без ошибок",en:"⭐ no errors"},"k.errors":{ru:"ошибок",en:"errors"},"k.passed":{ru:"пройден!",en:"passed!"},"k.note3":{ru:"Ни одной ошибки — ты звезда!",en:"Not a single error — you are a star!"},"k.note2":{ru:"Очень здорово! Ещё чуть точнее — будет три звезды.",en:"Very good! A bit more accurate for three stars."},"k.note1":{ru:"Уровень пройден! Попробуй ещё раз — получится точнее.",en:"Level passed! Try again to be more accurate."},"k.again":{ru:"↻ Ещё раз",en:"↻ Again"},"k.map":{ru:"К карте",en:"To map"},"k.next":{ru:"Дальше →",en:"Next →"},"k.back":{ru:"← К карте",en:"← To map"},"k.startRu":{ru:"Печатаем по-русски!",en:"Typing in Russian!"},"k.startEn":{ru:"Печатаем по-английски!",en:"Typing in English!"},"ex.title":{ru:"Тест печати",en:"Typing Test"},"ex.desc":{ru:"Печатай предложения без остановки, пока не выйдет время. В конце — отчёт с Gross/Net WPM и точностью.",en:"Type sentences non-stop until the time runs out. You get a report with Gross/Net WPM and accuracy."},"ex.duration":{ru:"Длительность",en:"Duration"},"ex.min":{ru:"мин",en:"min"},"ex.target":{ru:"Цель Net WPM",en:"Target Net WPM"},"ex.name":{ru:"Имя (для сертификата)",en:"Name (for the certificate)"},"ex.start":{ru:"Начать тест",en:"Start test"},"ex.cancel":{ru:"Выйти",en:"Exit"},"ex.left":{ru:"осталось",en:"left"},"ex.result":{ru:"Результат теста",en:"Test result"},"ex.gross":{ru:"Gross WPM",en:"Gross WPM"},"ex.net":{ru:"Net WPM",en:"Net WPM"},"ex.keystrokes":{ru:"нажатий",en:"keystrokes"},"ex.pass":{ru:"СДАН",en:"PASS"},"ex.fail":{ru:"НЕ СДАН",en:"FAIL"},"ex.target.short":{ru:"цель",en:"target"},"ex.cert":{ru:"⬇ Сертификат (PNG)",en:"⬇ Certificate (PNG)"},"ex.again":{ru:"↻ Ещё раз",en:"↻ Try again"},"ex.cert.title":{ru:"СЕРТИФИКАТ",en:"CERTIFICATE"},"ex.cert.sub":{ru:"тест слепой печати",en:"touch typing test"},"ex.cert.date":{ru:"Дата",en:"Date"}};function s(e){const t=rr[e];return t?t[It]:e}const sr=["кот","дом","сок","лес","мяч","сыр","нос","рот","лук","мак","жук","дым","сон","мир","кит"],ar=["мама","папа","каша","зима","лето","луна","небо","море","гора","рыба","окно","сова","лиса","волк","утка"],or=["весна","осень","школа","книга","песня","чашка","ложка","мышка","кошка","зебра","лампа","шапка","санки","горка","речка"],ir=["cat","dog","sun","box","red","run","mom","dad","egg","ice","car","bus","fox","bee","owl","hat","pen","map","cup","jam","sea","sky","toy","zoo","kid","leg","arm","eye","ear","nut","pig","hen","cow","ant","bat","big","hot","wet","six","ten"],lr=["ball","fish","bird","cake","milk","tree","star","moon","rain","snow","frog","duck","bear","lion","wolf","book","game","blue","pink","rose","door","desk","lamp","sofa","kite","ship","road","park","hand","foot","nose","face","hair","king","gold","fast","slow","warm","cold","five"],cr=["apple","house","smile","happy","water","bread","candy","tiger","mouse","horse","sheep","green","white","black","music","table","chair","plant","grass","cloud","river","beach","stone","train","plane","pizza","juice","sugar","lemon","mango","zebra","panda","koala","eagle","shark","dance","sleep","dream","light","seven"];function ur(e,t){return e.slice(t*5,t*5+5)}const fe=[];{let e=1;const t=[[sr,"ru"],[ar,"ru"],[or,"ru"],[ir,"en"],[lr,"en"],[cr,"en"]];for(const[n,r]of t)for(let a=0;a*5<n.length;a++)fe.push({id:e,lang:r,title:String(e),words:ur(n,a)}),e++}let ke={stars:{}};function dr(){try{const e=JSON.parse(localStorage.getItem("tr_kids")??"");e&&e.stars&&(ke=e)}catch{}}function pr(){try{localStorage.setItem("tr_kids",JSON.stringify(ke))}catch{}}function hr(e){return e===1||(ke.stars[e-1]??0)>0}let X="map",F=null,Te=0,T=w([""]),ce=0,Lt=0,V=0,kt=0,me="",q=null,Ue=null;const fr={ru:["Молодец!","Здорово!","Так держать!","Ты супер!","Отлично!","Вот это да!"],en:["Well done!","Great!","Keep it up!","You rock!","Awesome!","Wow!"]},mr={ru:["Ой! Попробуй ещё","Чуть-чуть мимо","Не спеши","Почти попал!"],en:["Oops! Try again","Almost!","Take your time","So close!"]},br=()=>fr[j()],bn=()=>mr[j()],Zt=e=>e[Math.floor(Math.random()*e.length)];let _=null;function Rt(e,t,n,r=.07){if(!_)return;const a=_.createOscillator(),o=_.createGain();a.type="triangle",a.frequency.value=e,o.gain.setValueAtTime(r,_.currentTime+t),o.gain.exponentialRampToValueAtTime(.001,_.currentTime+t+n),a.connect(o),o.connect(_.destination),a.start(_.currentTime+t),a.stop(_.currentTime+t+n+.02)}function gr(){try{_??(_=new AudioContext),[523.25,659.25,783.99].forEach((e,t)=>Rt(e,t*.09,.18))}catch{}}function kr(){try{_??(_=new AudioContext),[523.25,587.33,659.25,783.99,1046.5].forEach((e,t)=>Rt(e,t*.11,.22,.08))}catch{}}function yr(){try{_??(_=new AudioContext),Rt(196,0,.12,.05)}catch{}}let Me=null;function $r(e,t,n){q=e,Ue=t,Me=n??null,dr(),X="map",_e()}function vr(e){if(X!=="level"||!F||T.finishedAt!==null)return;if(e.key==="Backspace"){e.preventDefault();return}let t=null;if(e.key==="Enter"?t=`
`:e.key.length===1&&(t=e.key),t===null)return;e.preventDefault();const n=T.pattern[T.pos]??"";t=Ne(t,n);const r=ge(T,t,!0);r.wrong&&(ce++,me=Zt(bn()),yr()),r.finished&&(Lt+=T.pattern.length,me=Zt(br()),Te+1<F.words.length?(gr(),Te++,T=w([F.words[Te]])):wr()),_e()}function wr(){F&&(kr(),V=ce===0?3:1-ce/Math.max(Lt,1)>=.9?2:1,V>(ke.stars[F.id]??0)&&(ke.stars[F.id]=V,pr()),kt++,X="done")}function yt(e){F=e,Te=0,ce=0,Lt=0,me=e.lang==="ru"?s("k.startRu"):s("k.startEn"),T=w([e.words[0]]),X="level",_e()}const gn=e=>e.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);function xr(e){return e>0?"⭐".repeat(e):""}function _e(){q&&(X==="map"?Sr():X==="level"?Tr():Er())}function Sr(){const e=[{lang:"ru",title:s("k.block.ru"),levels:fe.filter(r=>r.lang==="ru")},{lang:"en",title:s("k.block.en"),levels:fe.filter(r=>r.lang==="en")}],t=kt>0&&kt%3===0?`<div class="k-rest">${s("k.rest")}</div>`:"";q.innerHTML=`
    <div class="wrap kids">
      <header class="mode-head">
        <button id="k-exit" class="mode-back">${s("nav.back")}</button>
        <h1>${s("k.title")}</h1>
        <div class="mode-actions">${Me?`<button id="k-ai" class="ghost">${s("learn.title")} 🤖</button>`:""}</div>
      </header>
      <p class="k-hello">${s("k.hello")}</p>
      ${t}
      ${e.map(r=>`
        <h2 class="k-block">${r.title}</h2>
        <div class="k-map">
          ${r.levels.map(a=>{const o=hr(a.id),i=ke.stars[a.id]??0;return`<button class="k-lvl ${o?"open":"locked"} ${i>0?"passed":""}" data-level="${a.id}" ${o?"":"disabled"}>
              <span class="k-num">${o?a.id:"🔒"}</span>
              <span class="k-stars">${xr(i)}</span>
            </button>`}).join("")}
        </div>`).join("")}
    </div>`,q.querySelectorAll("[data-level]").forEach(r=>{r.onclick=()=>{const a=fe.find(o=>o.id===Number(r.dataset.level));a&&yt(a)}}),q.querySelector("#k-exit").onclick=()=>Ue==null?void 0:Ue();const n=q.querySelector("#k-ai");n&&(n.onclick=()=>Me==null?void 0:Me())}function Mr(){let e="";for(let t=0;t<T.pattern.length;t++){const n=T.marks[t],r=t===T.pos?"cur":n===I.CORRECT?"ok":n===I.WRONG?"bad":"pend";e+=`<span class="${r}">${gn(T.pattern[t])}</span>`}return e}function Tr(){const e=F,t=T.finishedAt===null?T.pattern[T.pos]??null:null,n=j()==="ru"||e.lang==="ru";q.innerHTML=`
    <div class="wrap kids">
      <header class="mode-head">
        <button id="k-back" class="mode-back">${s("nav.tomap")}</button>
        <span class="k-progress">${s("k.level")} ${e.title} · ${s("k.word")} ${Te+1} / ${e.words.length}</span>
        <span class="k-acc">${ce===0?s("k.noerr"):`${s("k.errors")}: ${ce}`}</span>
      </header>
      <div class="k-mascot"><span class="k-cat">${ce>0&&me&&bn().includes(me)?"🙀":"😺"}</span> <span class="k-say">${gn(me)}</span></div>
      <div class="k-word">${Mr()}</div>
      <div class="keyb">${qe(t,e.lang==="ru",n)}</div>
    </div>`,q.querySelector("#k-back").onclick=()=>{X="map",_e()}}function Er(){const e=F;q.innerHTML=`
    <div class="wrap kids">
      <div class="k-done">
        <div class="k-cat-big">${V===3?"😻":"😺"}</div>
        <h2>${s("k.level")} ${e.title} ${s("k.passed")}</h2>
        <div class="k-stars-big">${"⭐".repeat(V)}${"☆".repeat(3-V)}</div>
        <p class="k-done-note">${s(V===3?"k.note3":V===2?"k.note2":"k.note1")}</p>
        <div class="donebtns">
          <button id="k-again">${s("k.again")}</button>
          <button id="k-map2" class="ghost">${s("k.map")}</button>
          ${fe.find(n=>n.id===e.id+1)?`<button id="k-next" class="primary">${s("k.next")}</button>`:""}
        </div>
      </div>
    </div>`,q.querySelector("#k-again").onclick=()=>yt(e),q.querySelector("#k-map2").onclick=()=>{X="map",_e()};const t=q.querySelector("#k-next");t&&(t.onclick=()=>{const n=fe.find(r=>r.id===e.id+1);n&&yt(n)})}const kn="tr_keystats";let ye=Ar();function Ar(){try{const e=JSON.parse(localStorage.getItem(kn)??"{}");return e&&typeof e=="object"?e:{}}catch{return{}}}let ht=null;function Ir(){ht||(ht=window.setTimeout(()=>{ht=null;try{localStorage.setItem(kn,JSON.stringify(ye))}catch{}},800))}function dt(e,t){const n=ye[e]??(ye[e]={ok:0,err:0});t?n.ok++:n.err++,Ir()}function yn(e=6){const t={};for(const[n,r]of Object.entries(ye)){const a=r.ok+r.err;a>=e&&(t[n]=r.err/a)}return t}function $n(e=6){return Object.values(ye).some(t=>t.ok+t.err>=e)}function Lr(e,t=6){return Et(e).map(({id:a,ch:o})=>{const i=ye[a],d=i?i.ok+i.err:0,l=d>=3?i.err/d:0;return{ch:o,rate:l,n:d}}).filter(a=>a.rate>0).sort((a,o)=>o.rate-a.rate||o.n-a.n).slice(0,t).map(a=>a.ch)}function Vt(e,t=6){const n=yn(4),r={};for(const{id:a,ch:o}of Et(e)){const i=n[a];i!==void 0&&i>0&&(r[o]=1+i*t)}return r}function Rr(e,t=5){let n=Lr(e,6);const r=e==="en"?["a","s","d","f","j","k","l"]:["ф","ы","в","а","о","л","д"];n.length===0&&(n=r.slice(0,4));const a=[...n,...n,...r],o=()=>a[Math.floor(Math.random()*a.length)],i=[];for(let d=0;d<t;d++){const l=[];for(let p=0;p<6;p++){const u=3+Math.floor(Math.random()*3);let m="";for(let C=0;C<u;C++)m+=o();l.push(m)}i.push(l.join(" "))}return i}const $t="tr_history";function De(e,t,n){if(e<=0)return;let r=[];try{r=JSON.parse(localStorage.getItem($t)??"[]")}catch{r=[]}Array.isArray(r)||(r=[]),r.push({t:n,wpm:e,acc:t}),r.length>300&&(r=r.slice(r.length-300));try{localStorage.setItem($t,JSON.stringify(r))}catch{}}function vt(){try{const e=JSON.parse(localStorage.getItem($t)??"[]");return Array.isArray(e)?e:[]}catch{return[]}}function Pr(e){const t=vt();if(!t.length)return 0;const n=new Set(t.map(i=>Math.floor(i.t/864e5)));let a=Math.floor(e/864e5);if(!n.has(a))if(n.has(a-1))a-=1;else return 0;let o=0;for(;n.has(a);)o++,a-=1;return o}function Or(e=40){const t=vt().slice(-e);if(t.length<2)return"";const n=600,r=120,a=8,o=t.map(N=>N.wpm),i=Math.max(...o),d=Math.min(...o),l=i-d||1,p=N=>a+N/(t.length-1)*(n-2*a),u=N=>r-a-(N-d)/l*(r-2*a),m=t.map((N,Z)=>`${Z===0?"M":"L"} ${p(Z).toFixed(1)} ${u(N.wpm).toFixed(1)}`).join(" "),C=`${m} L ${p(t.length-1).toFixed(1)} ${r-a} L ${p(0).toFixed(1)} ${r-a} Z`,de=Math.max(...o),Y=o[o.length-1];return`<svg class="spark" viewBox="0 0 ${n} ${r}" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path d="${C}" class="spark-area"/>
    <path d="${m}" class="spark-line"/>
    <circle cx="${p(t.length-1).toFixed(1)}" cy="${u(Y).toFixed(1)}" r="4" class="spark-dot"/>
  </svg>
  <div class="spark-meta"><span>сессий: <b>${vt().length}</b></span><span>макс: <b>${de}</b></span><span>последняя: <b>${Y}</b> WPM</span></div>`}const jr={en:["fj","dk","sl","a","ei","gh","ru","ty","wo","qp","vn","zxcb","m"],ru:["ао","вл","ыд","фж","пр","ен","кг","уш","цщ","йз","яч","смит","ьбюхэъ"]},Cr={en:"the and you that was for are with his they have this from word what time work first water been call who now find long down day did get come made may part over new sound take only little place year live back give most very after thing our just name good through",ru:"и в не на что тот быть это как она для его так вот мочь сказать год этот рука дело глаз жизнь день есть знать самый раз время слово место друг два дом стать первый вода идти большой ещё свой"},Nr={en:["The quick brown fox jumps over the lazy dog.","Pack my box with five dozen liquor jugs.","How vexingly quick daft zebras jump.","The five boxing wizards jump quickly.","Sphinx of black quartz, judge my vow."],ru:["Съешь же ещё этих мягких французских булок да выпей чаю.","В чащах юга жил бы цитрус? Да, но фальшивый экземпляр!","Широкая электрификация южных губерний даст мощный толчок.","Эх, чужак, общий съём цен шляп юфти вдрызг!","Любя, съешь щипцы, — вздохнёт мэр, — кайф жгуч."]};function qr(e){const t=[];let n=1,r="";jr[e].forEach((o,i)=>{if(r+=o,i===0){t.push({id:n++,kind:"home",newKeys:o,pool:o,titleKey:"course.home"});return}t.push({id:n++,kind:"keys",newKeys:o,pool:r,titleKey:"course.keys",titleArg:o.toUpperCase().split("").join(" ")}),o===(e==="en"?"a":"фж")&&t.push({id:n++,kind:"home",newKeys:"",pool:r,titleKey:"course.review"})});const a=r;return t.push({id:n++,kind:"caps",newKeys:"",pool:a,titleKey:"course.caps"}),t.push({id:n++,kind:"digits",newKeys:"0123456789",pool:"0123456789",titleKey:"course.digits"}),t.push({id:n++,kind:"punct",newKeys:"",pool:a,titleKey:"course.punct"}),t.push({id:n++,kind:"words",newKeys:"",pool:"",titleKey:"course.words"}),t.push({id:n++,kind:"sentences",newKeys:"",pool:"",titleKey:"course.sentences"}),t}const $e=e=>Math.floor(Math.random()*e);function Pt(e,t,n=5){const r=(e||"asdf").split(""),a=t?[...r,...t.split(""),...t.split("")]:r,o=[];for(let i=0;i<n;i++){const d=[];for(let l=0;l<6;l++){const p=3+$e(3);let u="";for(let m=0;m<p;m++)u+=a[$e(a.length)];d.push(u)}o.push(d.join(" "))}return o}function _r(e=5){const t=[];for(let n=0;n<e;n++){const r=[];for(let a=0;a<6;a++){let o="";for(let i=0;i<3+$e(2);i++)o+=String($e(10));r.push(o)}t.push(r.join(" "))}return t}function Dr(e,t=4){const n=[",",".","?","!",";",":"];return Pt(e,"",t).map(a=>a.split(" ").map(o=>o+n[$e(n.length)]).join(" "))}function Hr(e,t=5){const n=Cr[e].split(/\s+/),r=[];for(let a=0;a<t;a++){const o=[];for(let i=0;i<6;i++)o.push(n[$e(n.length)]);r.push(o.join(" "))}return r}function Wr(e,t=4){return Pt(e,"",t).map(n=>n.split(" ").map(r=>r.charAt(0).toUpperCase()+r.slice(1)).join(" "))}function Br(e,t){switch(t.kind){case"digits":return _r();case"punct":return Dr(t.pool);case"words":return Hr(e);case"sentences":return Nr[e];case"caps":return Wr(t.pool);default:return Pt(t.pool,t.newKeys)}}let z={stars:{}},Ee="en",Ae=[];function Kr(){Ee=j()==="ru"?"ru":"en",Ae=qr(Ee);try{const e=JSON.parse(localStorage.getItem(`tr_course_${Ee}`)??"");e&&e.stars?z=e:z={stars:{}}}catch{z={stars:{}}}}function Gr(){try{localStorage.setItem(`tr_course_${Ee}`,JSON.stringify(z))}catch{}}function Fr(e){return e===1||(z.stars[e-1]??0)>0}let Q="map",ue=null,Oe=[],Ie=0,y=w([""]),et=0,Ot=0,ae=0,D=null,Je=null;function zr(e,t){D=e,Je=t,Kr(),Q="map",He()}function Ur(e){if(Q!=="lesson"||!ue||y.finishedAt!==null)return;if(e.key==="Backspace"){e.preventDefault();return}let t=null;if(e.key==="Enter"?t=`
`:e.key.length===1&&(t=e.key),t===null)return;e.preventDefault();const n=y.pattern[y.pos]??"";t=Ne(t,n);const r=/[а-яё]/i.test(y.pattern),a=ge(y,t,!0);if(n&&n!==" "&&n!==`
`){const o=ut(n,r);o&&dt(o,!a.wrong)}a.wrong&&et++,a.finished&&(Ot+=y.pattern.length,Ie+1<Oe.length?(Ie++,y=w([Oe[Ie]])):Jr()),He()}function Jr(){if(!ue)return;const e=U(y);ae=et===0?3:1-et/Math.max(Ot,1)>=.92?2:1,ae>(z.stars[ue.id]??0)&&(z.stars[ue.id]=ae,Gr()),e.wpm>0&&De(e.wpm,e.accuracy,Date.now()),Q="done"}function wt(e){ue=e,Ie=0,et=0,Ot=0,Oe=Br(Ee,e),y=w([Oe[0]]),Q="lesson",He()}const jt=e=>e.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),vn=e=>e.titleArg?`${s(e.titleKey)}: ${e.titleArg}`:s(e.titleKey);function He(){D&&(Q==="map"?Yr():Q==="lesson"?Vr():Xr())}function Yr(){const e=Object.values(z.stars).filter(t=>t>0).length;D.innerHTML=`
    <div class="wrap course">
      <header class="mode-head">
        <button id="c-exit" class="mode-back">${s("nav.back")}</button>
        <h1>📚 ${s("course.title")}</h1>
      </header>
      <p class="c-intro">${s("course.intro")} · ${s("st.done")} <b>${e}/${Ae.length}</b></p>
      <div class="c-map">
        ${Ae.map(t=>{const n=Fr(t.id),r=z.stars[t.id]??0;return`<button class="c-les ${n?"open":"locked"} ${r>0?"passed":""}" data-les="${t.id}" ${n?"":"disabled"}>
            <span class="c-num">${n?t.id:"🔒"}</span>
            <span class="c-name">${jt(vn(t))}</span>
            <span class="c-stars">${r>0?"⭐".repeat(r):""}</span>
          </button>`}).join("")}
      </div>
    </div>`,D.querySelectorAll("[data-les]").forEach(t=>{t.onclick=()=>{const n=Ae.find(r=>r.id===Number(t.dataset.les));n&&wt(n)}}),D.querySelector("#c-exit").onclick=()=>Je==null?void 0:Je()}function Zr(){let e="";for(let t=0;t<y.pattern.length;t++){const n=y.marks[t],r=t===y.pos?"cur":n===I.CORRECT?"ok":n===I.WRONG?"bad":"pend",a=y.pattern[t];a===`
`?e+=`<span class="${r} nl">↵</span><br/>`:e+=`<span class="${r}">${jt(a)}</span>`}return e}function Vr(){const e=ue,t=/[а-яё]/i.test(y.pattern),n=j()==="ru"||t,r=U(y);D.innerHTML=`
    <div class="wrap course">
      <header class="mode-head">
        <button id="c-back" class="mode-back">${s("nav.tomap")}</button>
        <span class="c-progress">${s("course.lesson")} ${e.id} · ${jt(vn(e))} · ${s("course.line")} ${Ie+1}/${Oe.length}</span>
        <span class="c-acc">${r.wpm} ${s("st.wpm")} · ${r.accuracy}%</span>
      </header>
      <div class="card"><div class="pattern" id="pattern">${Zr()}</div></div>
      <div class="keyb">${qe(y.finishedAt===null?y.pattern[y.pos]??null:null,t,n)}</div>
      <p class="hint2">${s("course.tip")}</p>
    </div>`,D.querySelector("#c-back").onclick=()=>{Q="map",He()}}function Xr(){const e=ue,t=Ae.find(r=>r.id===e.id+1);D.innerHTML=`
    <div class="wrap course">
      <div class="c-done">
        <h2>${s("course.lesson")} ${e.id} ${s("k.passed")}</h2>
        <div class="k-stars-big">${"⭐".repeat(ae)}${"☆".repeat(3-ae)}</div>
        <p class="k-done-note">${s(ae===3?"k.note3":ae===2?"k.note2":"k.note1")}</p>
        <div class="donebtns">
          <button id="c-again">${s("k.again")}</button>
          <button id="c-map" class="ghost">${s("k.map")}</button>
          ${t?`<button id="c-next" class="primary">${s("k.next")}</button>`:""}
        </div>
      </div>
    </div>`,D.querySelector("#c-again").onclick=()=>wt(e),D.querySelector("#c-map").onclick=()=>{Q="map",He()};const n=D.querySelector("#c-next");n&&t&&(n.onclick=()=>wt(t))}const oe=" ";function Qr(e,t){return e.toLowerCase().split("").map(n=>t.test(n)?n:oe).join("").replace(/\s+/g,oe).trim()}function es(e,t,n=3){const r=t==="ru"?/[а-яё]/:/[a-z]/,a=oe.repeat(n-1)+Qr(e,r)+oe,o=new Map,i=new Set,d=new Set;for(let l=0;l+n<=a.length;l++){const p=a.slice(l,l+n-1),u=a[l+n-1];u!==oe&&d.add(u);let m=o.get(p);m||(m={},o.set(p,m)),m[u]=(m[u]??0)+1,p[0]===oe&&p.trim().length>0&&i.add(p)}return{order:n,table:o,starts:[...i],alphabet:[...d].sort()}}function ts(e,t){let n=0;const r=Object.entries(e);for(const[o,i]of r)n+=i*((t==null?void 0:t[o])??1);let a=Math.random()*n;for(const[o,i]of r)if(a-=i*((t==null?void 0:t[o])??1),a<=0)return o;return r[r.length-1][0]}function ns(e,t={}){const n=t.chars??48,r=t.maxWord??8;if(e.starts.length===0)return"";const a=[];let o=0;for(;a.join(" ").length<n&&o++<200;){let i=e.starts[Math.floor(Math.random()*e.starts.length)],d=i.trim(),l=0;for(;l++<r*2;){const p=e.table.get(i);if(!p)break;const u=ts(p,t.weight);if(u===oe||(d+=u,i=(i+u).slice(-(e.order-1)),d.length>=r))break}d.length>=2&&a.push(d)}return a.join(" ")}const rs=`
Мороз и солнце день чудесный ещё ты дремлешь друг прелестный пора красавица проснись открой сомкнуты негой взоры навстречу северной авроры звездою севера явись.
Буря мглою небо кроет вихри снежные крутя то как зверь она завоет то заплачет как дитя.
У лукоморья дуб зелёный златая цепь на дубе том и днём и ночью кот учёный всё ходит по цепи кругом идёт направо песнь заводит налево сказку говорит.
Жил старик со своею старухой у самого синего моря они жили в ветхой землянке ровно тридцать лет и три года старик ловил неводом рыбу старуха пряла свою пряжу.
Ветер по морю гуляет и кораблик подгоняет он бежит себе в волнах на раздутых парусах мимо острова крутого мимо города большого.
Уж небо осенью дышало уж реже солнышко блистало короче становился день лесов таинственная сень с печальным шумом обнажалась ложился на поля туман.
Скажи мне кудесник любимец богов что сбудется в жизни со мною и скоро ль на радость соседей врагов могильной засыплюсь землёю.
Не было бы счастья да несчастье помогло без труда не выловишь и рыбку из пруда тише едешь дальше будешь семь раз отмерь один раз отрежь.
Друзья мои прекрасен наш союз он как душа неразделим и вечен неколебим свободен и беспечен срастался он под сенью дружных муз.
Я помню чудное мгновенье передо мной явилась ты как мимолётное виденье как гений чистой красоты.
Сегодня хорошая погода завтра мы поедем в город купить хлеба молока и овощей на рынке всегда свежие фрукты и ягоды.
Работа над новым проектом идёт полным ходом команда собирается каждое утро чтобы обсудить план на день и распределить задачи между собой.
Книга лежала на столе рядом с лампой за окном медленно темнело и в комнате становилось всё тише только часы мерно отсчитывали минуты.
Человек привычка природа сила время вопрос ответ дорога город страна народ слово дело жизнь работа дружба радость надежда мечта.
`,ss=`
The quick brown fox jumps over the lazy dog while the curious cat watches from the warm windowsill in the afternoon sun.
She sells seashells by the seashore and the shells she sells are surely seashells from the deep blue ocean.
Once upon a time in a quiet village there lived a young girl who loved to read books about distant lands and brave adventures.
The morning light filtered through the tall trees casting long shadows across the narrow path that wound its way toward the river.
Knowledge is power and reading is the key that opens the door to a world of endless learning and discovery for everyone.
Practice makes perfect so keep typing every single day and soon your fingers will dance across the keyboard without effort.
The old clock on the wall ticked softly as the rain fell gently against the glass and the fire crackled in the hearth.
People often forget that small steps taken consistently lead to great results over time so be patient and trust the process.
Water flows down the mountain stream past the smooth grey stones and gathers in a clear pool beneath the ancient oak tree.
Our team works hard each week to build better software that helps people learn new skills and reach their personal goals.
Bright stars filled the night sky above the silent forest where an owl called out and a soft wind stirred the fallen leaves.
The chef prepared a simple meal of fresh bread warm soup and ripe fruit which they shared with friends around the table.
Every great journey begins with a single step and the courage to leave the comfort of the familiar behind for a while.
Time and tide wait for no one so make the most of each day and never put off until tomorrow what you can do today.
`;let xt=null,Xt=null;function as(e){xt&&Xt===e||(xt=es(e==="ru"?rs:ss,e,3),Xt=e)}let g=Ct();function Ct(){return{correct:0,keys:0,errors:0,ms:0,intervals:[],lines:0}}let E=w([""]),St=0,Ye=0,Le="m",tt="both",he=null,Ze=null;function os(){return j()==="ru"?"ru":"en"}function is(){const e=os(),t=Le==="kids"?24:Le==="f"?40:50,n=Le==="kids"?5:8;if(tt==="both")return as(e),ns(xt,{chars:t,weight:Vt(e),maxWord:n});const r=Vt(e),a=[];for(const d of Qn(e,tt)){const l=Math.max(1,Math.round(r[d]??1));for(let p=0;p<l;p++)a.push(d)}if(a.length===0)return"";const o=[];let i=0;for(;o.join(" ").length<t&&i++<60;){const d=3+Math.floor(Math.random()*(n-2));let l="";for(let p=0;p<d;p++)l+=a[Math.floor(Math.random()*a.length)];o.push(l)}return o.join(" ")}function Nt(){E=w([is()]),St=0,Ye=0}function ls(e,t,n){he=e,Ze=n,Le=t,g=Ct(),Nt(),qt()}function cs(){const e=wn();e.mastery>0&&De(Math.round(e.mastery/5),e.accuracy,Date.now()),Ze==null||Ze()}function us(e){if(!he)return;if(e.key==="Backspace"){e.preventDefault();return}let t=null;if(e.key==="Enter"?t=`
`:e.key.length===1&&(t=e.key),t===null)return;e.preventDefault();const n=Date.now();E.startedAt===null&&(St=n,Ye=n);const r=E.pattern[E.pos]??"";t=Ne(t,r);const a=/[а-яё]/i.test(E.pattern),o=ge(E,t,!0);if(o.accepted){const i=n-Ye;i>0&&i<3e3&&g.intervals.push(i),Ye=n,g.keys++,r!==" "&&r!==`
`&&g.correct++}if(r&&r!==" "&&r!==`
`){const i=ut(r,a);i&&dt(i,!o.wrong)}o.wrong&&g.errors++,o.finished&&(g.ms+=n-St,g.lines++,Nt()),qt()}function wn(){const e=g.ms/6e4,t=e>0?Math.round(g.correct/e):0,n=e>0?Math.round((g.correct+g.errors)/e):0,r=g.correct+g.errors,a=r>0?Math.round(g.correct/r*100):100;let o=0;if(g.intervals.length>=4){const i=g.intervals.reduce((p,u)=>p+u,0)/g.intervals.length,d=g.intervals.reduce((p,u)=>p+(u-i)**2,0)/g.intervals.length,l=Math.sqrt(d)/(i||1);o=Math.max(0,Math.min(100,Math.round((1-l)*100)))}return{mastery:t,tempo:n,rhythm:o,accuracy:a}}const ds=e=>e.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);function ps(){let e="";for(let t=0;t<E.pattern.length;t++){const n=E.marks[t],r=t===E.pos?"cur":n===I.CORRECT?"ok":n===I.WRONG?"bad":"pend";e+=`<span class="${r}">${ds(E.pattern[t])}</span>`}return e}function hs(e){return e>=300?s("learn.lvl.pro"):e>=200?s("learn.lvl.work"):e>=70?s("learn.lvl.good"):s("learn.lvl.start")}function qt(){if(!he)return;const e=wn(),t=/[а-яё]/i.test(E.pattern),n=j()==="ru"||t,r=Le==="kids";he.innerHTML=`
    <div class="wrap learn">
      <header class="mode-head">
        <button id="ai-exit" class="mode-back">${s("nav.back")}</button>
        <h1>🤖 ${s("learn.title")}</h1>
      </header>
      <p class="c-intro">${s(r?"learn.intro.kids":"learn.intro")}</p>
      ${r?"":`<div class="hand-row">
        <span class="hand-lbl">${s("learn.hand")}:</span>
        ${["both","left","right"].map(a=>`<button class="hand-btn ${tt===a?"on":""}" data-hand="${a}">${s("learn.hand."+a)}</button>`).join("")}
      </div>`}
      <div class="card"><div class="pattern" id="pattern">${ps()}</div></div>
      <div class="keyb">${qe(E.finishedAt===null?E.pattern[E.pos]??null:null,t,n)}</div>
      ${r?`
        <div class="learn-kids"><span class="k-cat">😺</span> <b>${e.accuracy}%</b> ${s("st.accuracy")} · ${g.lines} ${s("learn.lines")}</div>
      `:`
        <div class="statsbar learn-stats">
          <div><b>${e.mastery}</b><span>${s("learn.mastery")}</span><i>${hs(e.mastery)}</i></div>
          <div><b>${e.tempo}</b><span>${s("learn.tempo")}</span></div>
          <div><b class="${e.rhythm>=80?"ok":""}">${e.rhythm}%</b><span>${s("learn.rhythm")}</span></div>
          <div><b>${e.accuracy}%</b><span>${s("st.accuracy")}</span></div>
          <div><b>${g.lines}</b><span>${s("learn.lines")}</span></div>
        </div>
        <p class="hint2">${s("learn.tip")}</p>
      `}
    </div>`,he.querySelector("#ai-exit").onclick=()=>cs(),he.querySelectorAll("[data-hand]").forEach(a=>{a.onclick=()=>{tt=a.dataset.hand,g=Ct(),Nt(),qt()}})}const xn="https://iuvvheeocobhiothfgei.supabase.co",Qt="sb_publishable_A2vJ5DjemTZIKrKX6XGqvQ_WaiuAkk1",Sn="typing_leaderboard",Mn={apikey:Qt,Authorization:`Bearer ${Qt}`,"Content-Type":"application/json"};async function fs(e){try{return(await fetch(`${xn}/rest/v1/${Sn}`,{method:"POST",headers:{...Mn,Prefer:"return=minimal"},body:JSON.stringify(e)})).ok}catch{return!1}}async function ms(e,t,n=10){try{const r=`discipline=eq.${e}&lang=eq.${t}&order=wpm.desc&limit=${n}`,a=await fetch(`${xn}/rest/v1/${Sn}?${r}`,{headers:Mn});return a.ok?await a.json():[]}catch{return[]}}const bs=["alpha_fwd","alpha_rev","words","digits","sprint"],en={en:"abcdefghijklmnopqrstuvwxyz",ru:"абвгдежзийклмнопрстуфхцчшщъыьэюя"},gs={en:"time year people way day man thing woman life child world school state family student group country problem hand part place case week company system program work",ru:"время год человек дело жизнь день рука работа слово место вопрос сторона страна мир случай ребёнок голова система вода друг земля город конец час глаз"},tn={en:["the quick brown fox jumps","practice makes perfect every day","never stop learning new things","small steps lead to big wins"],ru:["тише едешь дальше будешь","практика путь к мастерству","учись каждый день понемногу","терпение и труд всё перетрут"]},ft=e=>Math.floor(Math.random()*e);function ks(e,t){if(e==="alpha_fwd")return en[t];if(e==="alpha_rev")return en[t].split("").reverse().join("");if(e==="digits"){let n="";for(let r=0;r<30;r++)n+=String(ft(10))+(r%5===4?" ":"");return n.trim()}if(e==="words"){const n=gs[t].split(/\s+/),r=[];for(let a=0;a<12;a++)r.push(n[ft(n.length)]);return r.join(" ")}return tn[t][ft(tn[t].length)]}let ve={};function ys(){try{ve=JSON.parse(localStorage.getItem("tr_compete")??"{}")||{}}catch{ve={}}}function $s(){try{localStorage.setItem("tr_compete",JSON.stringify(ve))}catch{}}const Tn=(e,t)=>`${e}_${t}`;let H="menu",ee="alpha_fwd",x=w([""]),nt=0,_t=0,ie=null,En="m",M=null,Ve=null,rt=[],Mt=!1,je=!1;function we(){return j()==="ru"?"ru":"en"}function vs(e,t,n){M=e,Ve=n,En=t,ys(),H="menu",te()}function An(e){ee=e,_t=0,nt=0,je=!1,x=w([ks(e,we())]),H="run",te()}function ws(e){if(H!=="run"||x.finishedAt!==null)return;if(e.key==="Backspace"){e.preventDefault();return}let t=null;if(e.key==="Enter"?t=`
`:e.key.length===1&&(t=e.key),t===null)return;e.preventDefault(),nt===0&&(nt=Date.now());const n=x.pattern[x.pos]??"";t=Ne(t,n);const r=/[а-яё]/i.test(x.pattern),a=ge(x,t,!0);if(n&&n!==" "&&n!==`
`){const o=ut(n,r);o&&dt(o,!a.wrong)}a.wrong&&_t++,a.finished&&xs(),te()}function xs(){U(x);const e=Date.now()-nt,t=e/6e4,n=x.pattern.replace(/\s/g,"").length,r=t>0?Math.round(n/5/t):0,a=n+_t,o=a>0?Math.round(n/a*100):100,i=o===100?r>=60?"🥇":r>=40?"🥈":"🥉":r>=50&&o>=95?"🥈":"🎖",d=Tn(ee,we()),l=r>(ve[d]??0)&&o>=90;l&&(ve[d]=r,$s()),De(r,o,Date.now()),ie={wpm:r,acc:o,ms:e,medal:i,isRecord:l},H="result"}async function In(){H="board",Mt=!0,rt=[],te(),rt=await ms(ee,we()),Mt=!1,te()}async function Ss(e){if(!(!ie||je)){je=!0;try{localStorage.setItem("tr_name",e)}catch{}await fs({name:e,discipline:ee,lang:we(),wpm:ie.wpm,accuracy:ie.acc,ms:ie.ms}),await In()}}const Dt=e=>e.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);function Ms(){let e="";for(let t=0;t<x.pattern.length;t++){const n=x.marks[t],r=t===x.pos?"cur":n===I.CORRECT?"ok":n===I.WRONG?"bad":"pend";e+=`<span class="${r}">${Dt(x.pattern[t])}</span>`}return e}function te(){M&&(H==="menu"?Ts():H==="run"?Es():H==="result"?As():Is())}function Ts(){const e=we();M.innerHTML=`
    <div class="wrap compete">
      <header class="mode-head">
        <button id="cp-exit" class="mode-back">${s("nav.back")}</button>
        <h1>🏆 ${s("compete.title")}</h1>
      </header>
      <p class="c-intro">${s("compete.intro")}</p>
      <div class="cp-grid">
        ${bs.map(t=>{const n=ve[Tn(t,e)]??0;return`<button class="cp-disc" data-d="${t}">
            <span class="cp-name">${s("comp."+t)}</span>
            <span class="cp-best">${n>0?`${s("comp.best")}: ${n} ${s("st.wpm")}`:"—"}</span>
          </button>`}).join("")}
      </div>
    </div>`,M.querySelectorAll("[data-d]").forEach(t=>{t.onclick=()=>An(t.dataset.d)}),M.querySelector("#cp-exit").onclick=()=>Ve==null?void 0:Ve()}function Es(){const e=/[а-яё]/i.test(x.pattern),t=j()==="ru"||e;M.innerHTML=`
    <div class="wrap compete">
      <header class="mode-head">
        <button id="cp-back" class="mode-back">${s("nav.tomap")}</button>
        <span class="c-progress">🏆 ${s("comp."+ee)}</span>
        <span class="c-acc">${s("comp.hint")}</span>
      </header>
      <div class="card"><div class="pattern pattern-big" id="pattern">${Ms()}</div></div>
      <div class="keyb">${qe(x.finishedAt===null?x.pattern[x.pos]??null:null,e,t)}</div>
    </div>`,M.querySelector("#cp-back").onclick=()=>{H="menu",te()}}function As(){const e=ie,t=localStorage.getItem("tr_name")??"",n=En==="kids";M.innerHTML=`
    <div class="wrap compete">
      <div class="cp-result">
        <div class="cp-medal">${e.medal}</div>
        <h2>${s("comp."+ee)}</h2>
        ${e.isRecord?`<div class="cp-record">⭐ ${s("comp.record")}</div>`:""}
        <div class="statsbar">
          <div><b>${e.wpm}</b><span>${s("st.wpm")}</span></div>
          <div><b>${e.acc}%</b><span>${s("st.accuracy")}</span></div>
          <div><b>${(e.ms/1e3).toFixed(1)}s</b><span>${s("st.time")}</span></div>
        </div>
        ${n?"":`
        <div class="cp-publish">
          <input id="cp-name" type="text" value="${Dt(t)}" placeholder="${s("comp.name")}" maxlength="24"/>
          <button id="cp-pub" class="primary" ${je?"disabled":""}>${je?"✓":"🌐 "+s("comp.publish")}</button>
        </div>`}
        <div class="donebtns">
          <button id="cp-again">${s("k.again")}</button>
          <button id="cp-board" class="ghost">🌐 ${s("comp.leaderboard")}</button>
          <button id="cp-menu" class="ghost">${s("k.map")}</button>
        </div>
      </div>
    </div>`,M.querySelector("#cp-again").onclick=()=>An(ee),M.querySelector("#cp-menu").onclick=()=>{H="menu",te()},M.querySelector("#cp-board").onclick=()=>In();const r=M.querySelector("#cp-pub");r&&(r.onclick=()=>Ss(M.querySelector("#cp-name").value.trim()||"—"))}function Is(){const e=we();M.innerHTML=`
    <div class="wrap compete">
      <header class="mode-head">
        <button id="cp-bback" class="mode-back">${s("nav.back")}</button>
        <h1>🌐 ${s("comp.leaderboard")}</h1>
      </header>
      <p class="c-intro">${s("comp."+ee)} · ${e.toUpperCase()}</p>
      ${Mt?`<p class="hint2">${s("comp.loading")}</p>`:rt.length===0?`<p class="hint2">${s("comp.empty")}</p>`:`
        <table class="cp-board">
          <thead><tr><th>#</th><th>${s("comp.player")}</th><th>${s("st.wpm")}</th><th>${s("st.accuracy")}</th></tr></thead>
          <tbody>${rt.map((t,n)=>`<tr><td>${n+1}</td><td>${Dt(t.name)}</td><td><b>${t.wpm}</b></td><td>${t.accuracy}%</td></tr>`).join("")}</tbody>
        </table>`}
    </div>`,M.querySelector("#cp-bback").onclick=()=>{H=ie?"result":"menu",te()}}let R=tr(),Ht=[],ne="abandon",A=[],$=0,f=w([""]),st=!1,Wt=!0,Ce=!0,Bt=!0,at=localStorage.getItem("tr_heat")==="1",be=(()=>{const e=localStorage.getItem("tr_dark");return e==="1"?!0:e==="0"?!1:!!(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches)})(),k=null,b=null,Kt="",O=null,W=localStorage.getItem("tr_flow")==="1",G={typed:0,errors:0,ms:0,count:0};function Ls(){G={typed:0,errors:0,ms:0,count:0}}let c=null;function ot(){const e=c&&c.phase==="run"?U(f):{typed:0,errors:0},t=((c==null?void 0:c.typed)??0)+e.typed,n=((c==null?void 0:c.errors)??0)+e.errors,r=c?c.durMin*6e4-Math.max(0,c.endAt-Date.now()):0,a=Math.max(r/6e4,1/600),o=Math.round((t+n)/5/a),i=Math.round(t/5/a),d=t+n,l=d>0?Math.round(t/d*100):100;return{typed:t,errors:n,gross:o,net:i,accuracy:l,elapsedMs:r}}function Rs(e,t,n){const a=[...on(Ht,"abandon")].sort(()=>Math.random()-.5);c={phase:"run",durMin:e,target:t,name:n,endAt:Date.now()+e*6e4,typed:0,errors:0,count:0,pool:a,pi:0,timer:null};try{localStorage.setItem("tr_name",n)}catch{}f=w([a[0].lines.join(" ")]),c.timer=window.setInterval(()=>{if(!(!c||c.phase!=="run")){if(Date.now()>=c.endAt){Ln();return}_s()}},250),h()}function Ln(){if(!c)return;const e=U(f);c.typed+=e.typed,c.errors+=e.errors,c.timer&&(clearInterval(c.timer),c.timer=null),c.phase="result";const t=ot();De(t.net,t.accuracy,Date.now()),h()}function nn(){c!=null&&c.timer&&clearInterval(c.timer),c=null,se()}let v={bestWpm:0,bestAcc:0,done:[],lastIdx:0};function Ps(e){try{const t=JSON.parse(localStorage.getItem(`tr_progress_${e}`)??"");if(t&&Array.isArray(t.done))return{bestWpm:t.bestWpm|0,bestAcc:t.bestAcc|0,done:t.done,lastIdx:t.lastIdx|0}}catch{}return{bestWpm:0,bestAcc:0,done:[],lastIdx:0}}function Gt(){try{localStorage.setItem(`tr_progress_${ne}`,JSON.stringify(v))}catch{}}function Os(e){const t=U(f);t.wpm>v.bestWpm&&(v.bestWpm=t.wpm),t.accuracy>v.bestAcc&&(v.bestAcc=t.accuracy),v.done.includes(e.id)||v.done.push(e.id),Gt()}function Rn(){const e=U(f);if(!W)return e;const t=G.typed+e.typed,n=G.errors+e.errors,r=G.ms+e.elapsedMs,a=r/6e4,o=a>0?Math.round(t/5/a):0,i=t+n;return{typed:t,errors:n,elapsedMs:r,wpm:o,accuracy:i>0?Math.round(t/i*100):100}}let xe=null;function rn(){if(Wt)try{xe??(xe=new AudioContext);const e=xe.createOscillator(),t=xe.createGain();e.frequency.value=220,e.type="square",t.gain.value=.06,e.connect(t),t.connect(xe.destination),e.start(),e.stop(xe.currentTime+.07)}catch{}}const P=document.getElementById("app");let pe=!1,it=!1,Ke=!1,Re=!1,Ge=!1,lt=!1,Fe=!1,Ft=!0,Tt=!1;function Pn(){return/[а-яё]/i.test(f.pattern)}function js(e){return j()==="ru"||e}function On(){be?document.documentElement.dataset.theme="dark":delete document.documentElement.dataset.theme}function jn(){return`<select id="lang" title="Language">
    <option value="ru" ${j()==="ru"?"selected":""}>RU</option>
    <option value="en" ${j()==="en"?"selected":""}>EN</option>
  </select>`}function Cn(e){const t=document.getElementById("lang");t&&(t.onchange=()=>{nr(t.value),e()})}function Cs(){return b==="weak"?{id:"weak",bank:ne,title:s("weak.title"),lines:Pe}:b==="custom"?{id:"custom",bank:ne,title:s("custom.title"),lines:le}:A[$]??null}let Pe=[],le=[];function h(){if(R===null){pe=!1,Wn();return}if(Re){Ge||(Ge=!0,ls(P,R??"m",()=>{Re=!1,Ge=!1,h()}));return}if(Ge=!1,lt){Fe||(Fe=!0,vs(P,R??"m",()=>{lt=!1,Fe=!1,h()}));return}if(Fe=!1,R==="kids"){pe||(pe=!0,$r(P,()=>{pe=!1,R=null,At(null),h()},()=>{pe=!1,Re=!0,h()}));return}if(pe=!1,it){Ke||(Ke=!0,zr(P,()=>{it=!1,Ke=!1,h()}));return}if(Ke=!1,c){qs();return}if(Ft){Bs();return}const e=Cs(),t=Rn(),n=b!==null;P.innerHTML=`
    <div class="wrap">
      <header>
        <h1><button id="home" class="home-btn" title="${s("hub.home")}">🏠</button> Type<span>RIGHT</span>ing</h1>
        <div class="headctl">
          <select id="bank">
            ${Un.map(r=>`<option value="${r}" ${r===ne&&!n?"selected":""}>${s("bank."+r)}</option>`).join("")}
          </select>
          <button id="settings" class="iconbtn" title="${s("hub.settings")}">⚙</button>
          <button id="dark" class="iconbtn" title="${s("tb.dark")}">${be?"☀️":"🌙"}</button>
        </div>
      </header>
      <p class="bankdesc">${n?b==="weak"?s("weak.hint"):"":s("bank."+ne+".desc")} ${n?"":`· <b>${A.length}</b> ${s("st.exercises")} · ${s("st.done")} <b>${v.done.length}</b>${v.bestWpm>0?` · ${s("st.record")} <b>${v.bestWpm}</b> ${s("st.wpm")} · <b>${v.bestAcc}%</b>`:""}`}</p>

      ${Tt?`<div class="toolbar settings-panel">
        <label><input type="checkbox" id="hide" ${st?"checked":""}/> ${s("tb.hide")}</label>
        <label><input type="checkbox" id="sound" ${Wt?"checked":""}/> ${s("tb.sound")}</label>
        <label><input type="checkbox" id="block" ${Ce?"checked":""}/> ${s("tb.block")}</label>
        <label><input type="checkbox" id="keyb" ${Bt?"checked":""}/> ${s("tb.keyb")}</label>
        <label title="errRate"><input type="checkbox" id="heat" ${at?"checked":""}/> ${s("tb.heat")}</label>
        <label title="Stamina-style"><input type="checkbox" id="flow" ${W?"checked":""}/> ${s("tb.flow")}</label>
      </div>`:""}

      <div class="nav-row">
        <div class="modes-tools">
          <button id="weak" class="tool-btn ${b==="weak"?"on":""}">${s("tb.weak")}</button>
          <button id="custom" class="tool-btn ${b==="custom"?"on":""}">${s("tb.custom")}</button>
        </div>
        <span class="spacer"></span>
        <button id="prev" class="ghost">${s("tb.prev")}</button>
        <span class="counter">${n?"•":`${$+1} / ${A.length}`}</span>
        <button id="next" class="ghost">${s("tb.next")}</button>
      </div>

      <div class="card">
        <div class="exhead">
          <span class="extitle">${J((e==null?void 0:e.title)??"")}</span>
          ${e!=null&&e.hint?`<span class="exhint">${J(e.hint)}</span>`:""}
        </div>
        <div class="pattern ${st?"hidden":""}" id="pattern">${Dn()}</div>
      </div>

      ${qn()}

      <div class="statsbar">${_n(t)}</div>

      ${f.finishedAt!==null?Ns(t):`<p class="hint2">${b==="weak"&&Pe.length&&Nn?s("weak.none"):s(W?"hint.flow":"hint.type")} ${s(Ce?"hint.block":"hint.bs")}</p>`}
    </div>
    ${O?Hn():""}
  `,Ws()}let Nn=!1;function qn(){if(!Bt)return"";const e=Pn(),t=at&&$n()?yn():null;return`<div class="keyb">${qe(f.finishedAt===null?f.pattern[f.pos]??null:null,e,js(e),t)}</div>
    ${t?'<p class="heat-legend"><i class="g">освоено</i> · <i class="r">слабые клавиши</i></p>':""}`}function _n(e){return`
    <div><b>${e.wpm}</b><span>${s("st.wpm")}</span></div>
    <div><b>${e.accuracy}%</b><span>${s("st.accuracy")}</span></div>
    <div><b class="${e.errors>0?"err":""}">${e.errors}</b><span>${s("st.errors")}</span></div>
    <div><b>${(e.elapsedMs/1e3).toFixed(0)}s</b><span>${s("st.time")}</span></div>
    ${W?`<div><b>🔥 ${G.count}</b><span>${s("st.streak")}</span></div>`:""}`}function J(e){return e.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t])}function Dn(){if(st)return`<span class="hidden-note">${s("hint.hidden")}</span>`;let e="";for(let t=0;t<f.pattern.length;t++){const n=f.pattern[t],r=f.marks[t],a=t===f.pos?"cur":r===I.CORRECT?"ok":r===I.WRONG?"bad":"pend";n===`
`?e+=`<span class="${a} nl">↵</span><br/>`:e+=`<span class="${a}">${J(n)}</span>`}return e}function Hn(){if(O==="custom")return`<div class="modal-bg" id="modal-bg"><div class="modal">
      <h2>${s("custom.title")}</h2>
      <textarea id="custom-ta" placeholder="${s("custom.ph")}">${J(Kt)}</textarea>
      <div class="donebtns">
        <button id="custom-cancel" class="ghost">${s("custom.cancel")}</button>
        <button id="custom-go" class="primary">${s("custom.start")}</button>
      </div>
    </div></div>`;const e=Or();return`<div class="modal-bg" id="modal-bg"><div class="modal">
    <h2>${s("prog.title")}</h2>
    ${e||`<p class="hint2">${s("prog.empty")}</p>`}
    <div class="donebtns"><button id="prog-close" class="primary">${s("prog.close")}</button></div>
  </div></div>`}function Wn(){P.innerHTML=`
    <div class="wrap onboard">
      <div class="ob-lang">${jn()}</div>
      <h1 class="ob-title">Type<span>RIGHT</span>ing</h1>
      <p class="ob-sub">${s("ob.sub")}</p>
      <div class="ob-cards">
        ${Object.keys(Qe).map(e=>`
          <button class="ob-card" data-profile-pick="${e}">
            <span class="ob-emoji">${Qe[e]}</span>
            <span class="ob-name">${s("profile."+e)}</span>
            <span class="ob-desc">${s("profile."+e+".desc")}</span>
          </button>`).join("")}
      </div>
      <p class="ob-note">${s("ob.note")}</p>
    </div>`,P.querySelectorAll("[data-profile-pick]").forEach(e=>{e.onclick=()=>{R=e.dataset.profilePick,mn(R),h()}}),Cn(()=>Wn())}function Ns(e){return`
    <div class="done">
      <h2>${s(R==="f"?"done.title.f":"done.title")}</h2>
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
    </div>`}function qs(){if(!c)return;if(c.phase==="setup"){const n=localStorage.getItem("tr_name")??"";P.innerHTML=`
      <div class="wrap"><div class="exam-setup">
        <h2>⏱ ${s("ex.title")}</h2>
        <p class="ex-desc">${s("ex.desc")}</p>
        <div class="ex-form">
          <label>${s("ex.duration")}:
            <select id="ex-dur"><option value="1">1 ${s("ex.min")}</option><option value="5">5 ${s("ex.min")}</option><option value="10" selected>10 ${s("ex.min")}</option></select>
          </label>
          <label>${s("ex.target")}: <input id="ex-target" type="number" value="35" min="5" max="120"/></label>
          <label>${s("ex.name")}: <input id="ex-name" type="text" value="${J(n)}" placeholder="—"/></label>
        </div>
        <div class="donebtns">
          <button id="ex-cancel" class="ghost">${s("ex.cancel")}</button>
          <button id="ex-go" class="primary">${s("ex.start")}</button>
        </div>
      </div></div>`,document.getElementById("ex-go").onclick=()=>{const r=Number(document.getElementById("ex-dur").value),a=Number(document.getElementById("ex-target").value)||35,o=document.getElementById("ex-name").value.trim();Rs(r,a,o)},document.getElementById("ex-cancel").onclick=()=>nn();return}if(c.phase==="run"){const n=c.pool[c.pi],r=ot();P.innerHTML=`
      <div class="wrap">
        <div class="exam-hud">
          <span class="ex-timer" id="ex-timer">${Bn(Math.max(0,c.endAt-Date.now()))}</span>
          <span class="ex-hudstats" id="ex-hudstats">${s("ex.net")} <b>${r.net}</b> · ${s("st.accuracy")} <b>${r.accuracy}%</b> · ${s("ex.target.short")} ${c.target}</span>
          <button id="ex-stop" class="ghost">${s("ex.cancel")}</button>
        </div>
        <div class="card"><div class="exhead"><span class="extitle">${J((n==null?void 0:n.title)??"")}</span></div>
          <div class="pattern" id="pattern">${Dn()}</div></div>
        ${qn()}
      </div>`,document.getElementById("ex-stop").onclick=()=>Ln();return}const e=ot(),t=e.net>=c.target;P.innerHTML=`
    <div class="wrap"><div class="exam-result">
      <h2>${s("ex.result")}</h2>
      <div class="ex-verdict ${t?"pass":"fail"}">${s(t?"ex.pass":"ex.fail")} <small>(${s("ex.target.short")} ${c.target} ${s("ex.net")})</small></div>
      <div class="statsbar">
        <div><b>${e.net}</b><span>${s("ex.net")}</span></div>
        <div><b>${e.gross}</b><span>${s("ex.gross")}</span></div>
        <div><b>${e.accuracy}%</b><span>${s("st.accuracy")}</span></div>
        <div><b>${e.typed+e.errors}</b><span>${s("ex.keystrokes")}</span></div>
        <div><b>${c.durMin} ${s("ex.min")}</b><span>${s("st.time")}</span></div>
      </div>
      <div class="donebtns">
        <button id="ex-cert" class="primary">${s("ex.cert")}</button>
        <button id="ex-retry">${s("ex.again")}</button>
        <button id="ex-exit" class="ghost">${s("ex.cancel")}</button>
      </div>
    </div></div>`,document.getElementById("ex-cert").onclick=()=>Ds(e,t),document.getElementById("ex-retry").onclick=()=>{c.phase="setup",h()},document.getElementById("ex-exit").onclick=()=>nn()}function Bn(e){const t=Math.ceil(e/1e3);return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`}function _s(){if(!c||c.phase!=="run")return;const e=document.getElementById("ex-timer"),t=document.getElementById("ex-hudstats");if(!e||!t)return;const n=ot();e.textContent=Bn(Math.max(0,c.endAt-Date.now())),t.innerHTML=`${s("ex.net")} <b>${n.net}</b> · ${s("st.accuracy")} <b>${n.accuracy}%</b> · ${s("ex.target.short")} ${c.target}`}function Ds(e,t){if(!c)return;const n=document.createElement("canvas");n.width=1200,n.height=850;const r=n.getContext("2d");r.fillStyle="#faf7f0",r.fillRect(0,0,1200,850),r.strokeStyle="#b9962e",r.lineWidth=6,r.strokeRect(30,30,1140,790),r.lineWidth=1.5,r.strokeRect(44,44,1112,762),r.fillStyle="#2a2a33",r.textAlign="center",r.font="700 28px Georgia, serif",r.fillText("TypeRIGHTing",600,110),r.font="800 64px Georgia, serif",r.fillStyle="#b9962e",r.fillText(s("ex.cert.title"),600,200),r.font="400 26px Georgia, serif",r.fillStyle="#555",r.fillText(s("ex.cert.sub"),600,240),r.font="700 52px Georgia, serif",r.fillStyle="#2a2a33",r.fillText(c.name||"—",600,350),r.font="800 110px Georgia, serif",r.fillStyle=t?"#2f7d4f":"#b3443a",r.fillText(`${e.net} ${s("ex.net")}`,600,500),r.font="400 30px Georgia, serif",r.fillStyle="#444",r.fillText(`${s("ex.gross")}: ${e.gross}   ·   ${s("st.accuracy")}: ${e.accuracy}%   ·   ${c.durMin} ${s("ex.min")}`,600,570),r.font="700 36px Georgia, serif",r.fillStyle=t?"#2f7d4f":"#b3443a",r.fillText(t?`✔ ${s("ex.pass")}`:`✘ ${s("ex.fail")}`,600,650),r.font="400 22px Georgia, serif",r.fillStyle="#777",r.fillText(`${s("ex.cert.date")}: ${new Date().toLocaleDateString()}`,600,740);const a=document.createElement("a");a.download=`TypeRIGHTing-test-${e.net}wpm.png`,a.href=n.toDataURL("image/png"),a.click()}function ct(){b="weak",c=null,Pe=Rr(j()==="ru"?"ru":"en"),Nn=!$n(3),f=w(W?[Pe.join(" ")]:Pe),k&&(clearInterval(k),k=null),h()}function sn(e){Kt=e,le=e.split(/\r?\n/).map(t=>t.trimEnd()).filter(t=>t.length>0),le.length!==0&&(b="custom",c=null,O=null,f=w(W?[le.join(" ")]:le),k&&(clearInterval(k),k=null),h())}function Hs(){b=null,zt()}function L(e,t){const n=document.getElementById(e);n&&(n.onclick=t)}function re(e,t){const n=document.getElementById(e);n&&(n.onchange=()=>t(n))}function Se(e){b=null,c=null,k&&(clearInterval(k),k=null),e(),h()}function Kn(){const e=document.getElementById("profile");e&&(e.onchange=()=>{R=e.value,mn(R),h()}),L("dark",()=>{be=!be;try{localStorage.setItem("tr_dark",be?"1":"0")}catch{}On(),h()}),Cn(()=>h())}function Ws(){Kn(),re("bank",t=>{b=null,ne=t.value,zt()}),L("home",()=>{Ft=!0,b=null,k&&(clearInterval(k),k=null),h()}),L("settings",()=>{Tt=!Tt,h()}),re("hide",t=>{st=t.checked,h()}),re("sound",t=>{Wt=t.checked}),re("block",t=>{Ce=t.checked}),re("keyb",t=>{Bt=t.checked,h()}),re("heat",t=>{at=t.checked;try{localStorage.setItem("tr_heat",at?"1":"0")}catch{}h()}),re("flow",t=>{W=t.checked;try{localStorage.setItem("tr_flow",W?"1":"0")}catch{}Ls(),b?b==="weak"?ct():sn(Kt):se()}),L("weak",()=>{b==="weak"?Hs():ct()}),L("custom",()=>{O="custom",h()}),L("prev",()=>{if(b){ze();return}$=($-1+A.length)%A.length,se()}),L("next",()=>{if(b){ze();return}$=($+1)%A.length,se()}),L("again",()=>{b?ze(!0):se()}),L("nextdone",()=>{if(b){ze();return}$=($+1)%A.length,se()});const e=document.getElementById("modal-bg");e&&(e.onclick=t=>{t.target===e&&(O=null,h())}),L("custom-go",()=>sn(document.getElementById("custom-ta").value)),L("custom-cancel",()=>{O=null,h()}),L("prog-close",()=>{O=null,h()})}function Bs(){const e=Pr(Date.now()),t=[["train","⌨️",s("hub.train"),s("hub.train.d")],["course","📚",s("course.title"),s("hub.course.d")],["learn","🤖",s("learn.title"),s("hub.learn.d")],["compete","🏆",s("compete.title"),s("hub.compete.d")],["exam","⏱",s("ex.title"),s("hub.exam.d")],["progress","📈",s("prog.title"),s("hub.progress.d")]];P.innerHTML=`
    <div class="wrap hub">
      <header>
        <h1>Type<span>RIGHT</span>ing</h1>
        <div class="headctl">
          <select id="profile" title="Profile">
            ${Object.keys(Qe).map(r=>`<option value="${r}" ${r===R?"selected":""}>${Qe[r]} ${s("profile."+r)}</option>`).join("")}
          </select>
          <button id="dark" class="iconbtn" title="${s("tb.dark")}">${be?"☀️":"🌙"}</button>
          ${jn()}
        </div>
      </header>
      <p class="hub-q">${s("hub.q")}${e>=2?` &nbsp;·&nbsp; <b class="streak">🔥 ${e} ${s("hub.streak")}</b>`:""}</p>
      <div class="hub-cards">
        ${t.map(([r,a,o,i],d)=>`
          <button class="hub-card ${d===0?"hub-primary":""}" data-go="${r}">
            <span class="hub-ic">${a}</span>
            <span class="hub-name">${J(o)}</span>
            <span class="hub-desc">${J(i)}</span>
          </button>`).join("")}
      </div>
    </div>
    ${O?Hn():""}`,Kn(),P.querySelectorAll("[data-go]").forEach(r=>{r.onclick=()=>{const a=r.dataset.go;a==="train"?Se(()=>{Ft=!1}):a==="course"?Se(()=>{it=!0}):a==="learn"?Se(()=>{Re=!0}):a==="compete"?Se(()=>{lt=!0}):a==="exam"?Se(()=>{c={phase:"setup",durMin:10,target:35,name:"",endAt:0,typed:0,errors:0,count:0,pool:[],pi:0,timer:null}}):a==="progress"&&(O="progress",h())}});const n=document.getElementById("modal-bg");n&&(n.onclick=r=>{r.target===n&&(O=null,h())}),L("prog-close",()=>{O=null,h()})}function ze(e=!1){if(b==="weak"&&!e){ct();return}if(b==="weak"){ct();return}f=w(W?[le.join(" ")]:le),h()}function zt(){A=on(Ht,ne),v=Ps(ne),$=Math.min(Math.max(v.lastIdx,0),Math.max(A.length-1,0)),se()}function Gn(e){return w(e?W?[e.lines.join(" ")]:e.lines:[""])}function se(){f=Gn(A[$]),k&&(clearInterval(k),k=null),v.lastIdx!==$&&(v.lastIdx=$,Gt()),h()}document.addEventListener("keydown",e=>{var i;const t=(i=e.target)==null?void 0:i.tagName;if(t==="SELECT"||t==="INPUT"||t==="TEXTAREA")return;if(O){e.key==="Escape"&&(O=null,h());return}if(it){Ur(e);return}if(Re){us(e);return}if(lt){ws(e);return}if(R==="kids"){vr(e);return}if(c&&c.phase!=="run"||f.finishedAt!==null)return;if(e.key==="Backspace"){e.preventDefault(),(c||!Ce)&&(Yn(f),h());return}let n=null;if(e.key==="Enter"?n=`
`:e.key.length===1&&(n=e.key),n===null)return;e.preventDefault();const r=f.pattern[f.pos]??"";n=Ne(n,r);const a=Pn();if(c){const d=ge(f,n,!1);if(an(r,d.wrong,a),d.wrong&&rn(),d.finished){const l=U(f);c.typed+=l.typed,c.errors+=l.errors,c.count++,c.pi=(c.pi+1)%c.pool.length,f=w([c.pool[c.pi].lines.join(" ")])}h();return}f.startedAt===null&&!k&&(k=window.setInterval(()=>{f.finishedAt===null&&Ks()},250));const o=ge(f,n,Ce);if(an(r,o.wrong,a),o.wrong&&rn(),o.finished){const d=U(f);if(W&&!b){const l=A[$];G.typed+=d.typed,G.errors+=d.errors,G.ms+=d.elapsedMs,G.count++,l&&!v.done.includes(l.id)&&v.done.push(l.id),$=($+1)%A.length,v.lastIdx=$,Gt(),f=Gn(A[$])}else if(k&&(clearInterval(k),k=null),De(d.wpm,d.accuracy,Date.now()),!b){const l=A[$];l&&Os(l)}}h()});function an(e,t,n){if(!e||e===`
`||e===" ")return;const r=ut(e,n);r&&dt(r,!t)}function Ks(){const e=document.querySelector(".statsbar");e&&(e.innerHTML=_n(Rn()))}At(R);On();Jn().then(e=>{Ht=e,zt()}).catch(e=>{P.innerHTML=`<div class="wrap"><p class="err">${s("err.load")}: ${J(String(e))}</p></div>`});
