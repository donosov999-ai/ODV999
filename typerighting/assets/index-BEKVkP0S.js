(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}})();const Vn=["abandon","engRus","letterByLetter","poemHymn"];let Je=null;async function Xn(){return Je||(Je=await(await fetch("content/exercises.json")).json(),Je)}function dn(e,t){return e.filter(n=>n.bank===t)}const P={PENDING:0,CORRECT:1,WRONG:2};function w(e){const t=e.join(`
`);return{pattern:t,pos:0,errors:0,startedAt:null,finishedAt:null,marks:new Uint8Array(t.length)}}function ye(e,t,n){if(e.finishedAt!==null)return{accepted:!1,wrong:!1,finished:!0};e.startedAt===null&&(e.startedAt=Date.now());const r=e.pattern[e.pos];if((t==="\r"?`
`:t)===r){e.marks[e.pos]=P.CORRECT,e.pos++;const d=e.pos>=e.pattern.length;return d&&(e.finishedAt=Date.now()),{accepted:!0,wrong:!1,finished:d}}if(e.errors++,n)return{accepted:!1,wrong:!0,finished:!1};e.marks[e.pos]=P.WRONG,e.pos++;const i=e.pos>=e.pattern.length;return i&&(e.finishedAt=Date.now()),{accepted:!0,wrong:!0,finished:i}}function Qn(e){e.finishedAt===null&&e.pos>0&&(e.pos--,e.marks[e.pos]=P.PENDING)}function U(e){const t=e.finishedAt??Date.now(),n=e.startedAt?t-e.startedAt:0;let r=0;for(let c=0;c<e.pos;c++)e.marks[c]===P.CORRECT&&r++;const a=n/6e4,o=a>0?Math.round(r/5/a):0,i=r+e.errors,d=i>0?Math.round(r/i*100):100;return{typed:r,errors:e.errors,elapsedMs:n,wpm:o,accuracy:d}}const pn=[[{id:"tilde",u:1,en:"~",en2:"`",ru:"Ё"},{id:"d1",u:1,en:"1",en2:"!"},{id:"d2",u:1,en:"2",en2:"@"},{id:"d3",u:1,en:"3",en2:"#"},{id:"d4",u:1,en:"4",en2:"$"},{id:"d5",u:1,en:"5",en2:"%"},{id:"d6",u:1,en:"6",en2:"^"},{id:"d7",u:1,en:"7",en2:"&"},{id:"d8",u:1,en:"8",en2:"*"},{id:"d9",u:1,en:"9",en2:"("},{id:"d0",u:1,en:"0",en2:")"},{id:"minus",u:1,en:"-",en2:"_"},{id:"equal",u:1,en:"=",en2:"+"},{id:"backslash",u:1,en:"\\",en2:"|"},{id:"backspace",u:1.6,label:"←"}],[{id:"tab",u:1.5,label:"Tab"},{id:"q",u:1,en:"Q",ru:"Й"},{id:"w",u:1,en:"W",ru:"Ц"},{id:"e",u:1,en:"E",ru:"У"},{id:"r",u:1,en:"R",ru:"К"},{id:"t",u:1,en:"T",ru:"Е"},{id:"y",u:1,en:"Y",ru:"Н"},{id:"u",u:1,en:"U",ru:"Г"},{id:"i",u:1,en:"I",ru:"Ш"},{id:"o",u:1,en:"O",ru:"Щ"},{id:"p",u:1,en:"P",ru:"З"},{id:"lbracket",u:1,en:"[",en2:"{",ru:"Х"},{id:"rbracket",u:1,en:"]",en2:"}",ru:"Ъ"},{id:"enterpad2",u:1.45}],[{id:"caps",u:1.9,label:"Caps Lock"},{id:"a",u:1,en:"A",ru:"Ф"},{id:"s",u:1,en:"S",ru:"Ы"},{id:"d",u:1,en:"D",ru:"В"},{id:"f",u:1,en:"F",ru:"А"},{id:"g",u:1,en:"G",ru:"П"},{id:"h",u:1,en:"H",ru:"Р"},{id:"j",u:1,en:"J",ru:"О"},{id:"k",u:1,en:"K",ru:"Л"},{id:"l",u:1,en:"L",ru:"Д"},{id:"semi",u:1,en:";",en2:":",ru:"Ж"},{id:"quote",u:1,en:"'",en2:'"',ru:"Э"},{id:"enterpad3",u:1.45}],[{id:"lshift",u:2.3,label:"Shift"},{id:"z",u:1,en:"Z",ru:"Я"},{id:"x",u:1,en:"X",ru:"Ч"},{id:"c",u:1,en:"C",ru:"С"},{id:"v",u:1,en:"V",ru:"М"},{id:"b",u:1,en:"B",ru:"И"},{id:"n",u:1,en:"N",ru:"Т"},{id:"m",u:1,en:"M",ru:"Ь"},{id:"comma",u:1,en:",",en2:"<",ru:"Б"},{id:"period",u:1,en:".",en2:">",ru:"Ю"},{id:"slash",u:1,en:"/",en2:"?"},{id:"rshift",u:1.2,label:"Shift"},{id:"rept",u:1.2,label:"Rept"}],[{id:"lctrl",u:1.3,label:"Ctrl"},{id:"blank1",u:1.1},{id:"lalt",u:1.3,label:"Alt"},{id:"space",u:6.8,label:""},{id:"ralt",u:1.3,label:"Alt"},{id:"blank2",u:1.1},{id:"rctrl",u:1.3,label:"Ctrl"}]],fn=[["a","q"],["a","z"],["s","w"],["s","x"],["d","e"],["d","c"],["f","r"],["f","t"],["f","g"],["f","v"],["f","b"],["f","d5"],["j","y"],["j","u"],["j","h"],["j","n"],["j","m"],["j","d6"],["j","d7"],["k","i"],["k","comma"],["k","d8"],["l","o"],["l","period"],["semi","p"],["semi","lbracket"],["semi","rbracket"],["semi","quote"],["semi","slash"]],hn={};for(const[e,t]of fn)hn[t]=e;const yt=new Set(["tilde","d1","d2","d3","d4","d5","tab","q","w","e","r","t","caps","a","s","d","f","g","lshift","z","x","c","v","b"]),nt=920,Xt=380,mt=12,Qt=6,en=60,er=70,tr=14,M={};{pn.forEach((r,a)=>{const o=r.reduce((c,p)=>c+p.u,0),i=(nt-2*mt-Qt*(r.length-1))/o;let d=mt;for(const c of r){const p=c.u*i;M[c.id]={...c,x:d,y:tr+a*er,w:p,h:en},d+=p+Qt}});const e=M.enterpad2,t=M.enterpad3,n=Math.min(e.x,t.x);M.enter={id:"enter",u:0,label:"Enter",x:n,y:e.y,w:nt-mt-n,h:t.y+en-e.y},delete M.enterpad2,delete M.enterpad3}const nr=typeof navigator<"u"&&/Mac|iPhone|iPad/i.test((navigator.platform||"")+" "+(navigator.userAgent||""));nr&&(M.tilde&&(M.tilde.ru=void 0),M.backslash&&(M.backslash.ru="Ё"));const K={},B={};{const e=(t,n,r,a)=>{t[n]={id:r,shift:a}};for(const t of Object.values(M))t.en&&(/^[A-Z]$/.test(t.en)?(e(K,t.en.toLowerCase(),t.id,!1),e(K,t.en,t.id,!0)):(e(K,t.en,t.id,!1),t.en2&&e(K,t.en2,t.id,!0))),t.ru&&/^[А-ЯЁ]$/.test(t.ru)&&(e(B,t.ru.toLowerCase(),t.id,!1),e(B,t.ru,t.id,!0));e(B,".","slash",!1),e(B,",","slash",!0);for(const t of[K,B])e(t," ","space",!1),e(t,`
`,"enter",!1);for(const[t,n]of Object.entries(K))!(t in B)&&!/[a-zA-Z.,]/.test(t)&&(B[t]=n)}const mn={},bn={};for(const e of pn)for(const t of e)t.en&&t.ru&&/^[A-Z]$/.test(t.en)&&/^[А-ЯЁ]$/.test(t.ru)&&(mn[t.en.toLowerCase()]=t.ru.toLowerCase(),bn[t.ru.toLowerCase()]=t.en.toLowerCase());function Ke(e,t){if(e.length!==1||t.length!==1)return e;const n=e.toLowerCase();let r;return/[а-яё]/i.test(t)&&/[a-z]/.test(n)?r=mn[n]:/[a-z]/i.test(t)&&/[а-яё]/.test(n)&&(r=bn[n]),r?e===n?r:r.toUpperCase():e}function gn(e,t){return/[а-яё]/i.test(e)?B[e]??null:/[a-z]/i.test(e)?K[e]??null:(t?B[e]:K[e])??(t?K[e]:B[e])??null}function Pt(e){const t=[];for(const n of Object.values(M)){const r=e==="en"?n.en:n.ru;r&&/^[A-Za-zА-Яа-яЁё]$/.test(r)&&t.push({id:n.id,ch:r.toLowerCase()})}return t}function dt(e,t){var n;return((n=gn(e,t))==null?void 0:n.id)??null}function rr(e,t){return Pt(e).filter(({id:n})=>t==="left"?yt.has(n):!yt.has(n)).map(({ch:n})=>n)}const Ye=e=>e.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),$t=e=>e.x+e.w/2,vt=e=>e.y+e.h/2;function sr(e,t){const n=$t(e),r=vt(e),a=$t(t),o=vt(t),i=(n+a)/2,d=(r+o)/2,c=a-n,p=o-r,u=Math.hypot(c,p)||1,b=Math.min(18,u*.18)*(c>=0?1:-1),N=i-p/u*b,fe=d+c/u*b,Y=1-16/u,q=n+c*Y,Z=r+p*Y;return`M ${n.toFixed(1)} ${r.toFixed(1)} Q ${N.toFixed(1)} ${fe.toFixed(1)} ${q.toFixed(1)} ${Z.toFixed(1)}`}function Ge(e,t,n=!0,r=null){const a=e!==null?gn(e,t):null,o=(a==null?void 0:a.id)??null,i=o?hn[o]??null:null;let d=null;a!=null&&a.shift&&o&&(d=yt.has(o)?"rshift":"lshift");const c=[];for(const u of Object.values(M)){const b=["key"];u.id===o&&b.push("key-next"),u.id===d&&b.push("key-shift"),u.id===i&&b.push("key-home");const N=(u.x+4).toFixed(1),fe=u.y+3,Y=(u.w-8).toFixed(1),q=u.h-10;if(c.push(`<g class="${b.join(" ")}" data-key="${u.id}">`,`<rect class="key-base" x="${u.x}" y="${u.y}" width="${u.w.toFixed(1)}" height="${u.h}" rx="9"/>`,`<rect class="key-face" x="${N}" y="${fe}" width="${Y}" height="${q}" rx="6"/>`),r&&u.id in r){const Z=r[u.id],Yn=Z<=0?"34,197,94":"217,58,58",Zn=Z<=0?.22:(.2+.6*Math.min(Z,1)).toFixed(2);c.push(`<rect x="${N}" y="${fe}" width="${Y}" height="${q}" rx="6" fill="rgb(${Yn})" opacity="${Zn}"/>`)}u.label!==void 0?c.push(`<text class="key-fn" x="${$t(u).toFixed(1)}" y="${(vt(u)+4).toFixed(1)}" text-anchor="middle">${Ye(u.label)}</text>`):(u.en2&&c.push(`<text class="key-en2" x="${(u.x+12).toFixed(1)}" y="${u.y+22}">${Ye(u.en2)}</text>`),u.en&&c.push(`<text class="key-en" x="${(u.x+12).toFixed(1)}" y="${u.y+(u.en2?46:38)}">${Ye(u.en)}</text>`),u.ru&&n&&c.push(`<text class="key-ru" x="${(u.x+u.w-12).toFixed(1)}" y="${u.y+u.h-14}" text-anchor="end">${Ye(u.ru)}</text>`)),c.push("</g>")}const p=fn.map(([u,b])=>{const N=b===o&&u===(i??"");return`<path class="arr${N?" arr-active":""}" d="${sr(M[u],M[b])}" marker-end="url(#arrhead${N?"-a":""})"/>`}).join("");return`<svg class="kbsvg${o?" has-target":""}" viewBox="0 0 ${nt} ${Xt}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Схема клавиатуры: красные стрелки — правильное направление движения пальцев от домашнего ряда">
    <defs>
      <marker id="arrhead" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" class="arrhead"/></marker>
      <marker id="arrhead-a" markerWidth="8" markerHeight="8" refX="5.5" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" class="arrhead-a"/></marker>
    </defs>
    <rect class="kb-bg" x="0" y="0" width="${nt}" height="${Xt}" rx="14"/>
    ${c.join("")}
    ${p}
  </svg>`}const rt={m:"⌨️",f:"🌸",kids:"🐱"},kn="tr_profile";function ar(){const e=localStorage.getItem(kn);return e==="m"||e==="f"||e==="kids"?e:null}function Ot(e){try{localStorage.setItem(kn,e)}catch{}jt(e)}function jt(e){e?document.documentElement.dataset.profile=e:delete document.documentElement.dataset.profile}let Ct=localStorage.getItem("tr_lang")==="en"?"en":"ru";function A(){return Ct}function yn(e){Ct=e;try{localStorage.setItem("tr_lang",e)}catch{}}const or={"ob.sub":{ru:"Тренажёр слепой печати. Для кого настроить?",en:"Touch typing trainer. Who is it for?"},"ob.note":{ru:"Профиль можно сменить в любой момент в шапке.",en:"You can switch the profile any time in the header."},"profile.m":{ru:"Мужской",en:"Classic"},"profile.f":{ru:"Женский",en:"Soft"},"profile.kids":{ru:"Детский",en:"Kids"},"profile.m.desc":{ru:"Светлая тема, скорость и рекорды",en:"Light theme, speed and records"},"profile.f.desc":{ru:"Светлая тёплая тема, мягкий темп",en:"Warm light theme, gentle pace"},"profile.kids.desc":{ru:"Игра: уровни, звёзды и котик",en:"Game: levels, stars and a cat"},"bank.abandon":{ru:"Слова в предложениях",en:"Words in sentences"},"bank.engRus":{ru:"Англ↔Рус (с переводом)",en:"EN words + RU hints"},"bank.letterByLetter":{ru:"По буквам (наращивание)",en:"Letter by letter"},"bank.poemHymn":{ru:"Стихи и гимны",en:"Poems & hymns"},"bank.abandon.desc":{ru:"Печатай предложение с новым словом — словарный запас + скорость.",en:"Type a sentence with a new word — vocabulary + speed."},"bank.engRus.desc":{ru:"Слово с переводом + предложение. Перевод-подсказка над образцом.",en:"A word with RU translation + a sentence to type."},"bank.letterByLetter.desc":{ru:"Слово печатается по нарастающей: a, ab, aba… — постановка пальцев.",en:"Build the word up: a, ab, aba… — finger placement."},"bank.poemHymn.desc":{ru:"Стихи и гимны по строфам (4–8 строк) — ритм и выносливость печати.",en:"Poems & hymns by stanza (4–8 lines) — rhythm and stamina."},"tb.hide":{ru:"Спрятать образец",en:"Hide pattern"},"tb.sound":{ru:"Звук ошибки",en:"Error sound"},"tb.block":{ru:"Блок при ошибке",en:"Block on error"},"tb.keyb":{ru:"Клавиатура",en:"Keyboard"},"tb.flow":{ru:"Поток",en:"Flow"},"tb.heat":{ru:"Тепловая карта",en:"Heatmap"},"tb.exam":{ru:"Тест",en:"Test"},"tb.weak":{ru:"🎯 Слабые клавиши",en:"🎯 Weak keys"},"tb.custom":{ru:"✎ Свой текст",en:"✎ Custom text"},"tb.progress":{ru:"📈 Прогресс",en:"📈 Progress"},"tb.course":{ru:"📚 Курс",en:"📚 Course"},"tb.learn":{ru:"🤖 AI-обучение",en:"🤖 AI training"},"tb.compete":{ru:"🏆 Соревнование",en:"🏆 Compete"},"hub.q":{ru:"С чего начнём?",en:"Where to start?"},"hub.home":{ru:"Главная",en:"Home"},"hub.settings":{ru:"Настройки",en:"Settings"},"hub.train":{ru:"Тренировка",en:"Practice"},"hub.train.d":{ru:"Упражнения по банкам: слова, тексты, стихи",en:"Exercise banks: words, texts, poems"},"hub.course.d":{ru:"Уроки с нуля до текста, по шагам",en:"Lessons from scratch to text, step by step"},"hub.learn.d":{ru:"Умный поток, подстраивается под ошибки",en:"Smart stream, adapts to your mistakes"},"hub.compete.d":{ru:"Дисциплины на скорость + онлайн-таблица",en:"Speed disciplines + online board"},"hub.exam.d":{ru:"Тест на время с сертификатом",en:"Timed test with a certificate"},"hub.progress.d":{ru:"График скорости и рекорды",en:"Speed chart and records"},"hub.streak":{ru:"дней подряд",en:"day streak"},"nav.back":{ru:"← Назад",en:"← Back"},"nav.tomap":{ru:"← К списку",en:"← To list"},"compete.title":{ru:"Тест-соревнование",en:"Typing Compete"},"compete.intro":{ru:"Выбери дисциплину и поставь рекорд. Результат можно опубликовать в онлайн-таблице.",en:"Pick a discipline and set a record. Publish your result to the online leaderboard."},"comp.alpha_fwd":{ru:"Алфавит А→Я",en:"Alphabet A→Z"},"comp.alpha_rev":{ru:"Алфавит Я→А",en:"Alphabet Z→A"},"comp.words":{ru:"Слова",en:"Words"},"comp.digits":{ru:"Цифры",en:"Numbers"},"comp.sprint":{ru:"Спринт",en:"Sprint"},"comp.best":{ru:"рекорд",en:"best"},"comp.hint":{ru:"на скорость, без ошибок",en:"for speed, no errors"},"comp.record":{ru:"Новый личный рекорд!",en:"New personal record!"},"comp.name":{ru:"Имя для таблицы",en:"Name for the board"},"comp.publish":{ru:"Опубликовать",en:"Publish"},"comp.leaderboard":{ru:"Таблица рекордов",en:"Leaderboard"},"comp.player":{ru:"Игрок",en:"Player"},"comp.loading":{ru:"Загрузка таблицы…",en:"Loading board…"},"comp.empty":{ru:"Пока нет результатов — будь первым!",en:"No results yet — be the first!"},"learn.title":{ru:"AI-обучение",en:"AI training"},"learn.intro":{ru:"Программа сама генерирует связные строки и подмешивает буквы, где ты ошибаешься. Просто печатай поток — она подстраивается.",en:"The program generates connected lines and mixes in the letters you miss. Just type the stream — it adapts to you."},"learn.intro.kids":{ru:"Печатай слова, которые придумывает котик! Чем точнее — тем лучше 🐱",en:"Type the words the cat makes up! The more accurate, the better 🐱"},"learn.mastery":{ru:"Мастерство",en:"Mastery"},"learn.tempo":{ru:"Темп",en:"Tempo"},"learn.rhythm":{ru:"Ритмичность",en:"Rhythm"},"learn.lines":{ru:"строк",en:"lines"},"learn.tip":{ru:"Мастерство — скорость с учётом ошибок (сим/мин). Ритмичность >80% — ровный темп профи.",en:"Mastery — speed adjusted for errors (chars/min). Rhythm >80% — pro-level evenness."},"learn.lvl.start":{ru:"старт",en:"start"},"learn.lvl.good":{ru:"хорошо",en:"good"},"learn.lvl.work":{ru:"рабочий",en:"working"},"learn.lvl.pro":{ru:"профи",en:"pro"},"learn.hand":{ru:"Рука",en:"Hand"},"learn.hand.both":{ru:"Обе",en:"Both"},"learn.hand.left":{ru:"Левая",en:"Left"},"learn.hand.right":{ru:"Правая",en:"Right"},"course.title":{ru:"Курс печати",en:"Typing course"},"course.intro":{ru:"Последовательные уроки от домашнего ряда до предложений. Каждый урок открывает следующий.",en:"Step-by-step lessons from the home row to sentences. Each lesson unlocks the next."},"course.exit":{ru:"⚙ Выход",en:"⚙ Exit"},"course.lesson":{ru:"Урок",en:"Lesson"},"course.line":{ru:"строка",en:"line"},"course.tip":{ru:"Печатай ровно и точно — скорость придёт сама.",en:"Type evenly and accurately — speed will follow."},"course.home":{ru:"Домашний ряд",en:"Home row"},"course.review":{ru:"Повторение домашнего ряда",en:"Home row review"},"course.keys":{ru:"Новые клавиши",en:"New keys"},"course.caps":{ru:"Заглавные буквы (Shift)",en:"Capitals (Shift)"},"course.digits":{ru:"Цифры",en:"Numbers"},"course.punct":{ru:"Знаки препинания",en:"Punctuation"},"course.words":{ru:"Частые слова",en:"Common words"},"course.sentences":{ru:"Предложения",en:"Sentences"},"tb.dark":{ru:"Тёмная тема",en:"Dark theme"},"tb.prev":{ru:"‹ Пред",en:"‹ Prev"},"tb.next":{ru:"След ›",en:"Next ›"},"weak.title":{ru:"Слабые клавиши",en:"Weak keys"},"weak.hint":{ru:"Упражнение собрано из клавиш, где у тебя больше всего ошибок. «След» — новый набор.",en:"Built from the keys you miss most. “Next” — a fresh set."},"weak.none":{ru:"Пока мало данных — тренируем домашний ряд. Печатай ещё, и появятся твои слабые клавиши.",en:"Not enough data yet — training the home row. Keep typing to reveal your weak keys."},"prog.title":{ru:"Прогресс по сессиям",en:"Progress by session"},"prog.empty":{ru:"Недостаточно данных. Пройди хотя бы 2 упражнения — появится график скорости.",en:"Not enough data. Finish at least 2 exercises to see the speed chart."},"prog.close":{ru:"Закрыть",en:"Close"},"custom.title":{ru:"Свой текст",en:"Custom text"},"custom.ph":{ru:"Вставь любой текст для тренировки…",en:"Paste any text to practice…"},"custom.start":{ru:"Тренировать",en:"Practice"},"custom.cancel":{ru:"Отмена",en:"Cancel"},"st.exercises":{ru:"упражнений",en:"exercises"},"st.done":{ru:"пройдено",en:"done"},"st.record":{ru:"рекорд",en:"best"},"st.wpm":{ru:"WPM",en:"WPM"},"st.accuracy":{ru:"точность",en:"accuracy"},"st.errors":{ru:"ошибок",en:"errors"},"st.time":{ru:"время",en:"time"},"st.streak":{ru:"подряд",en:"streak"},"hint.flow":{ru:"Поток: упражнения идут подряд без остановки.",en:"Flow: exercises run back to back, no stops."},"hint.type":{ru:"Печатай по образцу.",en:"Type the pattern."},"hint.block":{ru:"Неверный символ не пропускается.",en:"Wrong keys are not accepted."},"hint.bs":{ru:"Backspace — исправить.",en:"Backspace to fix."},"hint.hidden":{ru:"образец скрыт — печатай по памяти",en:"pattern hidden — type from memory"},"done.title":{ru:"✓ Готово",en:"✓ Done"},"done.title.f":{ru:"✓ Отлично!",en:"✓ Great job!"},"done.again":{ru:"↻ Заново",en:"↻ Again"},"done.next":{ru:"Следующее →",en:"Next →"},"err.load":{ru:"Не удалось загрузить упражнения",en:"Failed to load exercises"},"k.title":{ru:"🐱 Котик-печатник",en:"🐱 Typing Cat"},"k.hello":{ru:"Привет! Выбирай уровень — будем учиться печатать. Печатай точно, спешить не надо!",en:"Hi! Pick a level and let’s learn to type. Be accurate — no need to rush!"},"k.rest":{ru:"🐱 Ты отлично позанимался! Передохни немножко 💛",en:"🐱 Great practice! Take a little break 💛"},"k.block.ru":{ru:"🇷🇺 По-русски",en:"🇷🇺 Russian"},"k.block.en":{ru:"🇬🇧 По-английски",en:"🇬🇧 English"},"k.level":{ru:"Уровень",en:"Level"},"k.word":{ru:"слово",en:"word"},"k.noerr":{ru:"⭐ без ошибок",en:"⭐ no errors"},"k.errors":{ru:"ошибок",en:"errors"},"k.passed":{ru:"пройден!",en:"passed!"},"k.note3":{ru:"Ни одной ошибки — ты звезда!",en:"Not a single error — you are a star!"},"k.note2":{ru:"Очень здорово! Ещё чуть точнее — будет три звезды.",en:"Very good! A bit more accurate for three stars."},"k.note1":{ru:"Уровень пройден! Попробуй ещё раз — получится точнее.",en:"Level passed! Try again to be more accurate."},"k.again":{ru:"↻ Ещё раз",en:"↻ Again"},"k.map":{ru:"К карте",en:"To map"},"k.next":{ru:"Дальше →",en:"Next →"},"k.back":{ru:"← К карте",en:"← To map"},"k.startRu":{ru:"Печатаем по-русски!",en:"Typing in Russian!"},"k.startEn":{ru:"Печатаем по-английски!",en:"Typing in English!"},"ex.title":{ru:"Тест печати",en:"Typing Test"},"ex.desc":{ru:"Печатай предложения без остановки, пока не выйдет время. В конце — отчёт с Gross/Net WPM и точностью.",en:"Type sentences non-stop until the time runs out. You get a report with Gross/Net WPM and accuracy."},"ex.duration":{ru:"Длительность",en:"Duration"},"ex.min":{ru:"мин",en:"min"},"ex.target":{ru:"Цель Net WPM",en:"Target Net WPM"},"ex.name":{ru:"Имя (для сертификата)",en:"Name (for the certificate)"},"ex.start":{ru:"Начать тест",en:"Start test"},"ex.cancel":{ru:"Выйти",en:"Exit"},"ex.left":{ru:"осталось",en:"left"},"ex.result":{ru:"Результат теста",en:"Test result"},"ex.gross":{ru:"Gross WPM",en:"Gross WPM"},"ex.net":{ru:"Net WPM",en:"Net WPM"},"ex.keystrokes":{ru:"нажатий",en:"keystrokes"},"ex.pass":{ru:"СДАН",en:"PASS"},"ex.fail":{ru:"НЕ СДАН",en:"FAIL"},"ex.target.short":{ru:"цель",en:"target"},"ex.cert":{ru:"⬇ Сертификат (PNG)",en:"⬇ Certificate (PNG)"},"ex.again":{ru:"↻ Ещё раз",en:"↻ Try again"},"ex.cert.title":{ru:"СЕРТИФИКАТ",en:"CERTIFICATE"},"ex.cert.sub":{ru:"тест слепой печати",en:"touch typing test"},"ex.cert.date":{ru:"Дата",en:"Date"}};function s(e){const t=or[e];return t?t[Ct]:e}const ir=["кот","дом","сок","лес","мяч","сыр","нос","рот","лук","мак","жук","дым","сон","мир","кит"],lr=["мама","папа","каша","зима","лето","луна","небо","море","гора","рыба","окно","сова","лиса","волк","утка"],cr=["весна","осень","школа","книга","песня","чашка","ложка","мышка","кошка","зебра","лампа","шапка","санки","горка","речка"],ur=["cat","dog","sun","box","red","run","mom","dad","egg","ice","car","bus","fox","bee","owl","hat","pen","map","cup","jam","sea","sky","toy","zoo","kid","leg","arm","eye","ear","nut","pig","hen","cow","ant","bat","big","hot","wet","six","ten"],dr=["ball","fish","bird","cake","milk","tree","star","moon","rain","snow","frog","duck","bear","lion","wolf","book","game","blue","pink","rose","door","desk","lamp","sofa","kite","ship","road","park","hand","foot","nose","face","hair","king","gold","fast","slow","warm","cold","five"],pr=["apple","house","smile","happy","water","bread","candy","tiger","mouse","horse","sheep","green","white","black","music","table","chair","plant","grass","cloud","river","beach","stone","train","plane","pizza","juice","sugar","lemon","mango","zebra","panda","koala","eagle","shark","dance","sleep","dream","light","seven"];function fr(e,t){return e.slice(t*5,t*5+5)}const be=[];{let e=1;const t=[[ir,"ru"],[lr,"ru"],[cr,"ru"],[ur,"en"],[dr,"en"],[pr,"en"]];for(const[n,r]of t)for(let a=0;a*5<n.length;a++)be.push({id:e,lang:r,title:String(e),words:fr(n,a)}),e++}let $e={stars:{}};function hr(){try{const e=JSON.parse(localStorage.getItem("tr_kids")??"");e&&e.stars&&($e=e)}catch{}}function mr(){try{localStorage.setItem("tr_kids",JSON.stringify($e))}catch{}}function br(e){return e===1||($e.stars[e-1]??0)>0}let ee="map",F=null,Re=0,I=w([""]),de=0,Nt=0,V=0,wt=0,ge="",_=null,Ve=null;const gr={ru:["Молодец!","Здорово!","Так держать!","Ты супер!","Отлично!","Вот это да!"],en:["Well done!","Great!","Keep it up!","You rock!","Awesome!","Wow!"]},kr={ru:["Ой! Попробуй ещё","Чуть-чуть мимо","Не спеши","Почти попал!"],en:["Oops! Try again","Almost!","Take your time","So close!"]},yr=()=>gr[A()],$n=()=>kr[A()],tn=e=>e[Math.floor(Math.random()*e.length)];let H=null;function qt(e,t,n,r=.07){if(!H)return;const a=H.createOscillator(),o=H.createGain();a.type="triangle",a.frequency.value=e,o.gain.setValueAtTime(r,H.currentTime+t),o.gain.exponentialRampToValueAtTime(.001,H.currentTime+t+n),a.connect(o),o.connect(H.destination),a.start(H.currentTime+t),a.stop(H.currentTime+t+n+.02)}function $r(){try{H??(H=new AudioContext),[523.25,659.25,783.99].forEach((e,t)=>qt(e,t*.09,.18))}catch{}}function vr(){try{H??(H=new AudioContext),[523.25,587.33,659.25,783.99,1046.5].forEach((e,t)=>qt(e,t*.11,.22,.08))}catch{}}function wr(){try{H??(H=new AudioContext),qt(196,0,.12,.05)}catch{}}let Te=null;function xr(e,t,n){_=e,Ve=t,Te=n??null,hr(),ee="map",Fe()}function Sr(e){if(ee!=="level"||!F||I.finishedAt!==null)return;if(e.key==="Backspace"){e.preventDefault();return}let t=null;if(e.key==="Enter"?t=`
`:e.key.length===1&&(t=e.key),t===null)return;e.preventDefault();const n=I.pattern[I.pos]??"";t=Ke(t,n);const r=ye(I,t,!0);r.wrong&&(de++,ge=tn($n()),wr()),r.finished&&(Nt+=I.pattern.length,ge=tn(yr()),Re+1<F.words.length?($r(),Re++,I=w([F.words[Re]])):Mr()),Fe()}function Mr(){F&&(vr(),V=de===0?3:1-de/Math.max(Nt,1)>=.9?2:1,V>($e.stars[F.id]??0)&&($e.stars[F.id]=V,mr()),wt++,ee="done")}function xt(e){F=e,Re=0,de=0,Nt=0,ge=e.lang==="ru"?s("k.startRu"):s("k.startEn"),I=w([e.words[0]]),ee="level",Fe()}const vn=e=>e.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);function Er(e){return e>0?"⭐".repeat(e):""}function Fe(){_&&(ee==="map"?Tr():ee==="level"?Ir():Lr())}function Tr(){const e=[{lang:"ru",title:s("k.block.ru"),levels:be.filter(r=>r.lang==="ru")},{lang:"en",title:s("k.block.en"),levels:be.filter(r=>r.lang==="en")}],t=wt>0&&wt%3===0?`<div class="k-rest">${s("k.rest")}</div>`:"";_.innerHTML=`
    <div class="wrap kids">
      <header class="mode-head">
        <button id="k-exit" class="mode-back">${s("nav.back")}</button>
        <h1>${s("k.title")}</h1>
        <div class="mode-actions">${Te?`<button id="k-ai" class="ghost">${s("learn.title")} 🤖</button>`:""}</div>
      </header>
      <p class="k-hello">${s("k.hello")}</p>
      ${t}
      ${e.map(r=>`
        <h2 class="k-block">${r.title}</h2>
        <div class="k-map">
          ${r.levels.map(a=>{const o=br(a.id),i=$e.stars[a.id]??0;return`<button class="k-lvl ${o?"open":"locked"} ${i>0?"passed":""}" data-level="${a.id}" ${o?"":"disabled"}>
              <span class="k-num">${o?a.id:"🔒"}</span>
              <span class="k-stars">${Er(i)}</span>
            </button>`}).join("")}
        </div>`).join("")}
    </div>`,_.querySelectorAll("[data-level]").forEach(r=>{r.onclick=()=>{const a=be.find(o=>o.id===Number(r.dataset.level));a&&xt(a)}}),_.querySelector("#k-exit").onclick=()=>Ve==null?void 0:Ve();const n=_.querySelector("#k-ai");n&&(n.onclick=()=>Te==null?void 0:Te())}function Ar(){let e="";for(let t=0;t<I.pattern.length;t++){const n=I.marks[t],r=t===I.pos?"cur":n===P.CORRECT?"ok":n===P.WRONG?"bad":"pend";e+=`<span class="${r}">${vn(I.pattern[t])}</span>`}return e}function Ir(){const e=F,t=I.finishedAt===null?I.pattern[I.pos]??null:null,n=A()==="ru"||e.lang==="ru";_.innerHTML=`
    <div class="wrap kids">
      <header class="mode-head">
        <button id="k-back" class="mode-back">${s("nav.tomap")}</button>
        <span class="k-progress">${s("k.level")} ${e.title} · ${s("k.word")} ${Re+1} / ${e.words.length}</span>
        <span class="k-acc">${de===0?s("k.noerr"):`${s("k.errors")}: ${de}`}</span>
      </header>
      <div class="k-mascot"><span class="k-cat">${de>0&&ge&&$n().includes(ge)?"🙀":"😺"}</span> <span class="k-say">${vn(ge)}</span></div>
      <div class="k-word">${Ar()}</div>
      <div class="keyb">${Ge(t,e.lang==="ru",n)}</div>
    </div>`,_.querySelector("#k-back").onclick=()=>{ee="map",Fe()}}function Lr(){const e=F;_.innerHTML=`
    <div class="wrap kids">
      <div class="k-done">
        <div class="k-cat-big">${V===3?"😻":"😺"}</div>
        <h2>${s("k.level")} ${e.title} ${s("k.passed")}</h2>
        <div class="k-stars-big">${"⭐".repeat(V)}${"☆".repeat(3-V)}</div>
        <p class="k-done-note">${s(V===3?"k.note3":V===2?"k.note2":"k.note1")}</p>
        <div class="donebtns">
          <button id="k-again">${s("k.again")}</button>
          <button id="k-map2" class="ghost">${s("k.map")}</button>
          ${be.find(n=>n.id===e.id+1)?`<button id="k-next" class="primary">${s("k.next")}</button>`:""}
        </div>
      </div>
    </div>`,_.querySelector("#k-again").onclick=()=>xt(e),_.querySelector("#k-map2").onclick=()=>{ee="map",Fe()};const t=_.querySelector("#k-next");t&&(t.onclick=()=>{const n=be.find(r=>r.id===e.id+1);n&&xt(n)})}const wn="tr_keystats";let ve=Rr();function Rr(){try{const e=JSON.parse(localStorage.getItem(wn)??"{}");return e&&typeof e=="object"?e:{}}catch{return{}}}let bt=null;function Pr(){bt||(bt=window.setTimeout(()=>{bt=null;try{localStorage.setItem(wn,JSON.stringify(ve))}catch{}},800))}function pt(e,t){const n=ve[e]??(ve[e]={ok:0,err:0});t?n.ok++:n.err++,Pr()}function xn(e=6){const t={};for(const[n,r]of Object.entries(ve)){const a=r.ok+r.err;a>=e&&(t[n]=r.err/a)}return t}function Sn(e=6){return Object.values(ve).some(t=>t.ok+t.err>=e)}function Or(e,t=6){return Pt(e).map(({id:a,ch:o})=>{const i=ve[a],d=i?i.ok+i.err:0,c=d>=3?i.err/d:0;return{ch:o,rate:c,n:d}}).filter(a=>a.rate>0).sort((a,o)=>o.rate-a.rate||o.n-a.n).slice(0,t).map(a=>a.ch)}function nn(e,t=6){const n=xn(4),r={};for(const{id:a,ch:o}of Pt(e)){const i=n[a];i!==void 0&&i>0&&(r[o]=1+i*t)}return r}function jr(e,t=5){let n=Or(e,6);const r=e==="en"?["a","s","d","f","j","k","l"]:["ф","ы","в","а","о","л","д"];n.length===0&&(n=r.slice(0,4));const a=[...n,...n,...r],o=()=>a[Math.floor(Math.random()*a.length)],i=[];for(let d=0;d<t;d++){const c=[];for(let p=0;p<6;p++){const u=3+Math.floor(Math.random()*3);let b="";for(let N=0;N<u;N++)b+=o();c.push(b)}i.push(c.join(" "))}return i}const St="tr_history";function ze(e,t,n){if(e<=0)return;let r=[];try{r=JSON.parse(localStorage.getItem(St)??"[]")}catch{r=[]}Array.isArray(r)||(r=[]),r.push({t:n,wpm:e,acc:t}),r.length>300&&(r=r.slice(r.length-300));try{localStorage.setItem(St,JSON.stringify(r))}catch{}}function Mt(){try{const e=JSON.parse(localStorage.getItem(St)??"[]");return Array.isArray(e)?e:[]}catch{return[]}}function Cr(e){const t=Mt();if(!t.length)return 0;const n=new Set(t.map(i=>Math.floor(i.t/864e5)));let a=Math.floor(e/864e5);if(!n.has(a))if(n.has(a-1))a-=1;else return 0;let o=0;for(;n.has(a);)o++,a-=1;return o}function Nr(e=40){const t=Mt().slice(-e);if(t.length<2)return"";const n=600,r=120,a=8,o=t.map(q=>q.wpm),i=Math.max(...o),d=Math.min(...o),c=i-d||1,p=q=>a+q/(t.length-1)*(n-2*a),u=q=>r-a-(q-d)/c*(r-2*a),b=t.map((q,Z)=>`${Z===0?"M":"L"} ${p(Z).toFixed(1)} ${u(q.wpm).toFixed(1)}`).join(" "),N=`${b} L ${p(t.length-1).toFixed(1)} ${r-a} L ${p(0).toFixed(1)} ${r-a} Z`,fe=Math.max(...o),Y=o[o.length-1];return`<svg class="spark" viewBox="0 0 ${n} ${r}" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path d="${N}" class="spark-area"/>
    <path d="${b}" class="spark-line"/>
    <circle cx="${p(t.length-1).toFixed(1)}" cy="${u(Y).toFixed(1)}" r="4" class="spark-dot"/>
  </svg>
  <div class="spark-meta"><span>сессий: <b>${Mt().length}</b></span><span>макс: <b>${fe}</b></span><span>последняя: <b>${Y}</b> WPM</span></div>`}const qr={en:["fj","dk","sl","a","ei","gh","ru","ty","wo","qp","vn","zxcb","m"],ru:["ао","вл","ыд","фж","пр","ен","кг","уш","цщ","йз","яч","смит","ьбюхэъ"]},_r={en:"the and you that was for are with his they have this from word what time work first water been call who now find long down day did get come made may part over new sound take only little place year live back give most very after thing our just name good through",ru:"и в не на что тот быть это как она для его так вот мочь сказать год этот рука дело глаз жизнь день есть знать самый раз время слово место друг два дом стать первый вода идти большой ещё свой"},Hr={en:["The quick brown fox jumps over the lazy dog.","Pack my box with five dozen liquor jugs.","How vexingly quick daft zebras jump.","The five boxing wizards jump quickly.","Sphinx of black quartz, judge my vow."],ru:["Съешь же ещё этих мягких французских булок да выпей чаю.","В чащах юга жил бы цитрус? Да, но фальшивый экземпляр!","Широкая электрификация южных губерний даст мощный толчок.","Эх, чужак, общий съём цен шляп юфти вдрызг!","Любя, съешь щипцы, — вздохнёт мэр, — кайф жгуч."]};function Dr(e){const t=[];let n=1,r="";qr[e].forEach((o,i)=>{if(r+=o,i===0){t.push({id:n++,kind:"home",newKeys:o,pool:o,titleKey:"course.home"});return}t.push({id:n++,kind:"keys",newKeys:o,pool:r,titleKey:"course.keys",titleArg:o.toUpperCase().split("").join(" ")}),o===(e==="en"?"a":"фж")&&t.push({id:n++,kind:"home",newKeys:"",pool:r,titleKey:"course.review"})});const a=r;return t.push({id:n++,kind:"caps",newKeys:"",pool:a,titleKey:"course.caps"}),t.push({id:n++,kind:"digits",newKeys:"0123456789",pool:"0123456789",titleKey:"course.digits"}),t.push({id:n++,kind:"punct",newKeys:"",pool:a,titleKey:"course.punct"}),t.push({id:n++,kind:"words",newKeys:"",pool:"",titleKey:"course.words"}),t.push({id:n++,kind:"sentences",newKeys:"",pool:"",titleKey:"course.sentences"}),t}const we=e=>Math.floor(Math.random()*e);function _t(e,t,n=5){const r=(e||"asdf").split(""),a=t?[...r,...t.split(""),...t.split("")]:r,o=[];for(let i=0;i<n;i++){const d=[];for(let c=0;c<6;c++){const p=3+we(3);let u="";for(let b=0;b<p;b++)u+=a[we(a.length)];d.push(u)}o.push(d.join(" "))}return o}function Wr(e=5){const t=[];for(let n=0;n<e;n++){const r=[];for(let a=0;a<6;a++){let o="";for(let i=0;i<3+we(2);i++)o+=String(we(10));r.push(o)}t.push(r.join(" "))}return t}function Br(e,t=4){const n=[",",".","?","!",";",":"];return _t(e,"",t).map(a=>a.split(" ").map(o=>o+n[we(n.length)]).join(" "))}function Kr(e,t=5){const n=_r[e].split(/\s+/),r=[];for(let a=0;a<t;a++){const o=[];for(let i=0;i<6;i++)o.push(n[we(n.length)]);r.push(o.join(" "))}return r}function Gr(e,t=4){return _t(e,"",t).map(n=>n.split(" ").map(r=>r.charAt(0).toUpperCase()+r.slice(1)).join(" "))}function Fr(e,t){switch(t.kind){case"digits":return Wr();case"punct":return Br(t.pool);case"words":return Kr(e);case"sentences":return Hr[e];case"caps":return Gr(t.pool);default:return _t(t.pool,t.newKeys)}}let z={stars:{}},Pe="en",Oe=[];function zr(){Pe=A()==="ru"?"ru":"en",Oe=Dr(Pe);try{const e=JSON.parse(localStorage.getItem(`tr_course_${Pe}`)??"");e&&e.stars?z=e:z={stars:{}}}catch{z={stars:{}}}}function Ur(){try{localStorage.setItem(`tr_course_${Pe}`,JSON.stringify(z))}catch{}}function Jr(e){return e===1||(z.stars[e-1]??0)>0}let te="map",pe=null,qe=[],je=0,y=w([""]),st=0,Ht=0,ie=0,D=null,Xe=null;function Yr(e,t){D=e,Xe=t,zr(),te="map",Ue()}function Zr(e){if(te!=="lesson"||!pe||y.finishedAt!==null)return;if(e.key==="Backspace"){e.preventDefault();return}let t=null;if(e.key==="Enter"?t=`
`:e.key.length===1&&(t=e.key),t===null)return;e.preventDefault();const n=y.pattern[y.pos]??"";t=Ke(t,n);const r=/[а-яё]/i.test(y.pattern),a=ye(y,t,!0);if(n&&n!==" "&&n!==`
`){const o=dt(n,r);o&&pt(o,!a.wrong)}a.wrong&&st++,a.finished&&(Ht+=y.pattern.length,je+1<qe.length?(je++,y=w([qe[je]])):Vr()),Ue()}function Vr(){if(!pe)return;const e=U(y);ie=st===0?3:1-st/Math.max(Ht,1)>=.92?2:1,ie>(z.stars[pe.id]??0)&&(z.stars[pe.id]=ie,Ur()),e.wpm>0&&ze(e.wpm,e.accuracy,Date.now()),te="done"}function Et(e){pe=e,je=0,st=0,Ht=0,qe=Fr(Pe,e),y=w([qe[0]]),te="lesson",Ue()}const Dt=e=>e.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),Mn=e=>e.titleArg?`${s(e.titleKey)}: ${e.titleArg}`:s(e.titleKey);function Ue(){D&&(te==="map"?Xr():te==="lesson"?es():ts())}function Xr(){const e=Object.values(z.stars).filter(t=>t>0).length;D.innerHTML=`
    <div class="wrap course">
      <header class="mode-head">
        <button id="c-exit" class="mode-back">${s("nav.back")}</button>
        <h1>📚 ${s("course.title")}</h1>
      </header>
      <p class="c-intro">${s("course.intro")} · ${s("st.done")} <b>${e}/${Oe.length}</b></p>
      <div class="c-map">
        ${Oe.map(t=>{const n=Jr(t.id),r=z.stars[t.id]??0;return`<button class="c-les ${n?"open":"locked"} ${r>0?"passed":""}" data-les="${t.id}" ${n?"":"disabled"}>
            <span class="c-num">${n?t.id:"🔒"}</span>
            <span class="c-name">${Dt(Mn(t))}</span>
            <span class="c-stars">${r>0?"⭐".repeat(r):""}</span>
          </button>`}).join("")}
      </div>
    </div>`,D.querySelectorAll("[data-les]").forEach(t=>{t.onclick=()=>{const n=Oe.find(r=>r.id===Number(t.dataset.les));n&&Et(n)}}),D.querySelector("#c-exit").onclick=()=>Xe==null?void 0:Xe()}function Qr(){let e="";for(let t=0;t<y.pattern.length;t++){const n=y.marks[t],r=t===y.pos?"cur":n===P.CORRECT?"ok":n===P.WRONG?"bad":"pend",a=y.pattern[t];a===`
`?e+=`<span class="${r} nl">↵</span><br/>`:e+=`<span class="${r}">${Dt(a)}</span>`}return e}function es(){const e=pe,t=/[а-яё]/i.test(y.pattern),n=A()==="ru"||t,r=U(y);D.innerHTML=`
    <div class="wrap course">
      <header class="mode-head">
        <button id="c-back" class="mode-back">${s("nav.tomap")}</button>
        <span class="c-progress">${s("course.lesson")} ${e.id} · ${Dt(Mn(e))} · ${s("course.line")} ${je+1}/${qe.length}</span>
        <span class="c-acc">${r.wpm} ${s("st.wpm")} · ${r.accuracy}%</span>
      </header>
      <div class="card"><div class="pattern" id="pattern">${Qr()}</div></div>
      <div class="keyb">${Ge(y.finishedAt===null?y.pattern[y.pos]??null:null,t,n)}</div>
      <p class="hint2">${s("course.tip")}</p>
    </div>`,D.querySelector("#c-back").onclick=()=>{te="map",Ue()}}function ts(){const e=pe,t=Oe.find(r=>r.id===e.id+1);D.innerHTML=`
    <div class="wrap course">
      <div class="c-done">
        <h2>${s("course.lesson")} ${e.id} ${s("k.passed")}</h2>
        <div class="k-stars-big">${"⭐".repeat(ie)}${"☆".repeat(3-ie)}</div>
        <p class="k-done-note">${s(ie===3?"k.note3":ie===2?"k.note2":"k.note1")}</p>
        <div class="donebtns">
          <button id="c-again">${s("k.again")}</button>
          <button id="c-map" class="ghost">${s("k.map")}</button>
          ${t?`<button id="c-next" class="primary">${s("k.next")}</button>`:""}
        </div>
      </div>
    </div>`,D.querySelector("#c-again").onclick=()=>Et(e),D.querySelector("#c-map").onclick=()=>{te="map",Ue()};const n=D.querySelector("#c-next");n&&t&&(n.onclick=()=>Et(t))}const le=" ";function ns(e,t){return e.toLowerCase().split("").map(n=>t.test(n)?n:le).join("").replace(/\s+/g,le).trim()}function rs(e,t,n=3){const r=t==="ru"?/[а-яё]/:/[a-z]/,a=le.repeat(n-1)+ns(e,r)+le,o=new Map,i=new Set,d=new Set;for(let c=0;c+n<=a.length;c++){const p=a.slice(c,c+n-1),u=a[c+n-1];u!==le&&d.add(u);let b=o.get(p);b||(b={},o.set(p,b)),b[u]=(b[u]??0)+1,p[0]===le&&p.trim().length>0&&i.add(p)}return{order:n,table:o,starts:[...i],alphabet:[...d].sort()}}function ss(e,t){let n=0;const r=Object.entries(e);for(const[o,i]of r)n+=i*((t==null?void 0:t[o])??1);let a=Math.random()*n;for(const[o,i]of r)if(a-=i*((t==null?void 0:t[o])??1),a<=0)return o;return r[r.length-1][0]}function as(e,t={}){const n=t.chars??48,r=t.maxWord??8;if(e.starts.length===0)return"";const a=[];let o=0;for(;a.join(" ").length<n&&o++<200;){let i=e.starts[Math.floor(Math.random()*e.starts.length)],d=i.trim(),c=0;for(;c++<r*2;){const p=e.table.get(i);if(!p)break;const u=ss(p,t.weight);if(u===le||(d+=u,i=(i+u).slice(-(e.order-1)),d.length>=r))break}d.length>=2&&a.push(d)}return a.join(" ")}const os=`
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
`,is=`
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
`;let Tt=null,rn=null;function ls(e){Tt&&rn===e||(Tt=rs(e==="ru"?os:is,e,3),rn=e)}let k=Wt();function Wt(){return{correct:0,keys:0,errors:0,ms:0,intervals:[],lines:0}}let L=w([""]),At=0,Qe=0,Ce="m",at="both",me=null,et=null;function cs(){return A()==="ru"?"ru":"en"}function us(){const e=cs(),t=Ce==="kids"?24:Ce==="f"?40:50,n=Ce==="kids"?5:8;if(at==="both")return ls(e),as(Tt,{chars:t,weight:nn(e),maxWord:n});const r=nn(e),a=[];for(const d of rr(e,at)){const c=Math.max(1,Math.round(r[d]??1));for(let p=0;p<c;p++)a.push(d)}if(a.length===0)return"";const o=[];let i=0;for(;o.join(" ").length<t&&i++<60;){const d=3+Math.floor(Math.random()*(n-2));let c="";for(let p=0;p<d;p++)c+=a[Math.floor(Math.random()*a.length)];o.push(c)}return o.join(" ")}function Bt(){L=w([us()]),At=0,Qe=0}function ds(e,t,n){me=e,et=n,Ce=t,k=Wt(),Bt(),Kt()}function ps(){const e=En();e.mastery>0&&ze(Math.round(e.mastery/5),e.accuracy,Date.now()),et==null||et()}function fs(e){if(!me)return;if(e.key==="Backspace"){e.preventDefault();return}let t=null;if(e.key==="Enter"?t=`
`:e.key.length===1&&(t=e.key),t===null)return;e.preventDefault();const n=Date.now();L.startedAt===null&&(At=n,Qe=n);const r=L.pattern[L.pos]??"";t=Ke(t,r);const a=/[а-яё]/i.test(L.pattern),o=ye(L,t,!0);if(o.accepted){const i=n-Qe;i>0&&i<3e3&&k.intervals.push(i),Qe=n,k.keys++,r!==" "&&r!==`
`&&k.correct++}if(r&&r!==" "&&r!==`
`){const i=dt(r,a);i&&pt(i,!o.wrong)}o.wrong&&k.errors++,o.finished&&(k.ms+=n-At,k.lines++,Bt()),Kt()}function En(){const e=k.ms/6e4,t=e>0?Math.round(k.correct/e):0,n=e>0?Math.round((k.correct+k.errors)/e):0,r=k.correct+k.errors,a=r>0?Math.round(k.correct/r*100):100;let o=0;if(k.intervals.length>=4){const i=k.intervals.reduce((p,u)=>p+u,0)/k.intervals.length,d=k.intervals.reduce((p,u)=>p+(u-i)**2,0)/k.intervals.length,c=Math.sqrt(d)/(i||1);o=Math.max(0,Math.min(100,Math.round((1-c)*100)))}return{mastery:t,tempo:n,rhythm:o,accuracy:a}}const hs=e=>e.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);function ms(){let e="";for(let t=0;t<L.pattern.length;t++){const n=L.marks[t],r=t===L.pos?"cur":n===P.CORRECT?"ok":n===P.WRONG?"bad":"pend";e+=`<span class="${r}">${hs(L.pattern[t])}</span>`}return e}function bs(e){return e>=300?s("learn.lvl.pro"):e>=200?s("learn.lvl.work"):e>=70?s("learn.lvl.good"):s("learn.lvl.start")}function Kt(){if(!me)return;const e=En(),t=/[а-яё]/i.test(L.pattern),n=A()==="ru"||t,r=Ce==="kids";me.innerHTML=`
    <div class="wrap learn">
      <header class="mode-head">
        <button id="ai-exit" class="mode-back">${s("nav.back")}</button>
        <h1>🤖 ${s("learn.title")}</h1>
      </header>
      <p class="c-intro">${s(r?"learn.intro.kids":"learn.intro")}</p>
      ${r?"":`<div class="hand-row">
        <span class="hand-lbl">${s("learn.hand")}:</span>
        ${["both","left","right"].map(a=>`<button class="hand-btn ${at===a?"on":""}" data-hand="${a}">${s("learn.hand."+a)}</button>`).join("")}
      </div>`}
      <div class="card"><div class="pattern" id="pattern">${ms()}</div></div>
      <div class="keyb">${Ge(L.finishedAt===null?L.pattern[L.pos]??null:null,t,n)}</div>
      ${r?`
        <div class="learn-kids"><span class="k-cat">😺</span> <b>${e.accuracy}%</b> ${s("st.accuracy")} · ${k.lines} ${s("learn.lines")}</div>
      `:`
        <div class="statsbar learn-stats">
          <div><b>${e.mastery}</b><span>${s("learn.mastery")}</span><i>${bs(e.mastery)}</i></div>
          <div><b>${e.tempo}</b><span>${s("learn.tempo")}</span></div>
          <div><b class="${e.rhythm>=80?"ok":""}">${e.rhythm}%</b><span>${s("learn.rhythm")}</span></div>
          <div><b>${e.accuracy}%</b><span>${s("st.accuracy")}</span></div>
          <div><b>${k.lines}</b><span>${s("learn.lines")}</span></div>
        </div>
        <p class="hint2">${s("learn.tip")}</p>
      `}
    </div>`,me.querySelector("#ai-exit").onclick=()=>ps(),me.querySelectorAll("[data-hand]").forEach(a=>{a.onclick=()=>{at=a.dataset.hand,k=Wt(),Bt(),Kt()}})}const Tn="https://iuvvheeocobhiothfgei.supabase.co",sn="sb_publishable_A2vJ5DjemTZIKrKX6XGqvQ_WaiuAkk1",An="typing_leaderboard",In={apikey:sn,Authorization:`Bearer ${sn}`,"Content-Type":"application/json"};async function gs(e){try{return(await fetch(`${Tn}/rest/v1/${An}`,{method:"POST",headers:{...In,Prefer:"return=minimal"},body:JSON.stringify(e)})).ok}catch{return!1}}async function ks(e,t,n=10){try{const r=`discipline=eq.${e}&lang=eq.${t}&order=wpm.desc&limit=${n}`,a=await fetch(`${Tn}/rest/v1/${An}?${r}`,{headers:In});return a.ok?await a.json():[]}catch{return[]}}const ys=["alpha_fwd","alpha_rev","words","digits","sprint"],an={en:"abcdefghijklmnopqrstuvwxyz",ru:"абвгдежзийклмнопрстуфхцчшщъыьэюя"},$s={en:"time year people way day man thing woman life child world school state family student group country problem hand part place case week company system program work",ru:"время год человек дело жизнь день рука работа слово место вопрос сторона страна мир случай ребёнок голова система вода друг земля город конец час глаз"},on={en:["the quick brown fox jumps","practice makes perfect every day","never stop learning new things","small steps lead to big wins"],ru:["тише едешь дальше будешь","практика путь к мастерству","учись каждый день понемногу","терпение и труд всё перетрут"]},gt=e=>Math.floor(Math.random()*e);function vs(e,t){if(e==="alpha_fwd")return an[t];if(e==="alpha_rev")return an[t].split("").reverse().join("");if(e==="digits"){let n="";for(let r=0;r<30;r++)n+=String(gt(10))+(r%5===4?" ":"");return n.trim()}if(e==="words"){const n=$s[t].split(/\s+/),r=[];for(let a=0;a<12;a++)r.push(n[gt(n.length)]);return r.join(" ")}return on[t][gt(on[t].length)]}let xe={};function ws(){try{xe=JSON.parse(localStorage.getItem("tr_compete")??"{}")||{}}catch{xe={}}}function xs(){try{localStorage.setItem("tr_compete",JSON.stringify(xe))}catch{}}const Ln=(e,t)=>`${e}_${t}`;let W="menu",ne="alpha_fwd",S=w([""]),ot=0,Gt=0,ce=null,Rn="m",E=null,tt=null,it=[],It=!1,_e=!1;function Se(){return A()==="ru"?"ru":"en"}function Ss(e,t,n){E=e,tt=n,Rn=t,ws(),W="menu",re()}function Pn(e){ne=e,Gt=0,ot=0,_e=!1,S=w([vs(e,Se())]),W="run",re()}function Ms(e){if(W!=="run"||S.finishedAt!==null)return;if(e.key==="Backspace"){e.preventDefault();return}let t=null;if(e.key==="Enter"?t=`
`:e.key.length===1&&(t=e.key),t===null)return;e.preventDefault(),ot===0&&(ot=Date.now());const n=S.pattern[S.pos]??"";t=Ke(t,n);const r=/[а-яё]/i.test(S.pattern),a=ye(S,t,!0);if(n&&n!==" "&&n!==`
`){const o=dt(n,r);o&&pt(o,!a.wrong)}a.wrong&&Gt++,a.finished&&Es(),re()}function Es(){U(S);const e=Date.now()-ot,t=e/6e4,n=S.pattern.replace(/\s/g,"").length,r=t>0?Math.round(n/5/t):0,a=n+Gt,o=a>0?Math.round(n/a*100):100,i=o===100?r>=60?"🥇":r>=40?"🥈":"🥉":r>=50&&o>=95?"🥈":"🎖",d=Ln(ne,Se()),c=r>(xe[d]??0)&&o>=90;c&&(xe[d]=r,xs()),ze(r,o,Date.now()),ce={wpm:r,acc:o,ms:e,medal:i,isRecord:c},W="result"}async function On(){W="board",It=!0,it=[],re(),it=await ks(ne,Se()),It=!1,re()}async function Ts(e){if(!(!ce||_e)){_e=!0;try{localStorage.setItem("tr_name",e)}catch{}await gs({name:e,discipline:ne,lang:Se(),wpm:ce.wpm,accuracy:ce.acc,ms:ce.ms}),await On()}}const Ft=e=>e.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);function As(){let e="";for(let t=0;t<S.pattern.length;t++){const n=S.marks[t],r=t===S.pos?"cur":n===P.CORRECT?"ok":n===P.WRONG?"bad":"pend";e+=`<span class="${r}">${Ft(S.pattern[t])}</span>`}return e}function re(){E&&(W==="menu"?Is():W==="run"?Ls():W==="result"?Rs():Ps())}function Is(){const e=Se();E.innerHTML=`
    <div class="wrap compete">
      <header class="mode-head">
        <button id="cp-exit" class="mode-back">${s("nav.back")}</button>
        <h1>🏆 ${s("compete.title")}</h1>
      </header>
      <p class="c-intro">${s("compete.intro")}</p>
      <div class="cp-grid">
        ${ys.map(t=>{const n=xe[Ln(t,e)]??0;return`<button class="cp-disc" data-d="${t}">
            <span class="cp-name">${s("comp."+t)}</span>
            <span class="cp-best">${n>0?`${s("comp.best")}: ${n} ${s("st.wpm")}`:"—"}</span>
          </button>`}).join("")}
      </div>
    </div>`,E.querySelectorAll("[data-d]").forEach(t=>{t.onclick=()=>Pn(t.dataset.d)}),E.querySelector("#cp-exit").onclick=()=>tt==null?void 0:tt()}function Ls(){const e=/[а-яё]/i.test(S.pattern),t=A()==="ru"||e;E.innerHTML=`
    <div class="wrap compete">
      <header class="mode-head">
        <button id="cp-back" class="mode-back">${s("nav.tomap")}</button>
        <span class="c-progress">🏆 ${s("comp."+ne)}</span>
        <span class="c-acc">${s("comp.hint")}</span>
      </header>
      <div class="card"><div class="pattern pattern-big" id="pattern">${As()}</div></div>
      <div class="keyb">${Ge(S.finishedAt===null?S.pattern[S.pos]??null:null,e,t)}</div>
    </div>`,E.querySelector("#cp-back").onclick=()=>{W="menu",re()}}function Rs(){const e=ce,t=localStorage.getItem("tr_name")??"",n=Rn==="kids";E.innerHTML=`
    <div class="wrap compete">
      <div class="cp-result">
        <div class="cp-medal">${e.medal}</div>
        <h2>${s("comp."+ne)}</h2>
        ${e.isRecord?`<div class="cp-record">⭐ ${s("comp.record")}</div>`:""}
        <div class="statsbar">
          <div><b>${e.wpm}</b><span>${s("st.wpm")}</span></div>
          <div><b>${e.acc}%</b><span>${s("st.accuracy")}</span></div>
          <div><b>${(e.ms/1e3).toFixed(1)}s</b><span>${s("st.time")}</span></div>
        </div>
        ${n?"":`
        <div class="cp-publish">
          <input id="cp-name" type="text" value="${Ft(t)}" placeholder="${s("comp.name")}" maxlength="24"/>
          <button id="cp-pub" class="primary" ${_e?"disabled":""}>${_e?"✓":"🌐 "+s("comp.publish")}</button>
        </div>`}
        <div class="donebtns">
          <button id="cp-again">${s("k.again")}</button>
          <button id="cp-board" class="ghost">🌐 ${s("comp.leaderboard")}</button>
          <button id="cp-menu" class="ghost">${s("k.map")}</button>
        </div>
      </div>
    </div>`,E.querySelector("#cp-again").onclick=()=>Pn(ne),E.querySelector("#cp-menu").onclick=()=>{W="menu",re()},E.querySelector("#cp-board").onclick=()=>On();const r=E.querySelector("#cp-pub");r&&(r.onclick=()=>Ts(E.querySelector("#cp-name").value.trim()||"—"))}function Ps(){const e=Se();E.innerHTML=`
    <div class="wrap compete">
      <header class="mode-head">
        <button id="cp-bback" class="mode-back">${s("nav.back")}</button>
        <h1>🌐 ${s("comp.leaderboard")}</h1>
      </header>
      <p class="c-intro">${s("comp."+ne)} · ${e.toUpperCase()}</p>
      ${It?`<p class="hint2">${s("comp.loading")}</p>`:it.length===0?`<p class="hint2">${s("comp.empty")}</p>`:`
        <table class="cp-board">
          <thead><tr><th>#</th><th>${s("comp.player")}</th><th>${s("st.wpm")}</th><th>${s("st.accuracy")}</th></tr></thead>
          <tbody>${it.map((t,n)=>`<tr><td>${n+1}</td><td>${Ft(t.name)}</td><td><b>${t.wpm}</b></td><td>${t.accuracy}%</td></tr>`).join("")}</tbody>
        </table>`}
    </div>`,E.querySelector("#cp-bback").onclick=()=>{W=ce?"result":"menu",re()}}let x=ar(),zt=[],se="abandon",R=[],$=0,h=w([""]),lt=!1,Ut=!0,He=!0,Jt=!0,ct=localStorage.getItem("tr_heat")==="1",Q=(()=>{const e=localStorage.getItem("tr_dark");return e==="1"?!0:e==="0"?!1:!!(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches)})(),g=null,m=null,ft="",C=null,T=localStorage.getItem("tr_flow")==="1",G={typed:0,errors:0,ms:0,count:0};function jn(){G={typed:0,errors:0,ms:0,count:0}}let l=null;function ut(){const e=l&&l.phase==="run"?U(h):{typed:0,errors:0},t=((l==null?void 0:l.typed)??0)+e.typed,n=((l==null?void 0:l.errors)??0)+e.errors,r=l?l.durMin*6e4-Math.max(0,l.endAt-Date.now()):0,a=Math.max(r/6e4,1/600),o=Math.round((t+n)/5/a),i=Math.round(t/5/a),d=t+n,c=d>0?Math.round(t/d*100):100;return{typed:t,errors:n,gross:o,net:i,accuracy:c,elapsedMs:r}}function Os(e,t,n){const a=[...dn(zt,"abandon")].sort(()=>Math.random()-.5);l={phase:"run",durMin:e,target:t,name:n,endAt:Date.now()+e*6e4,typed:0,errors:0,count:0,pool:a,pi:0,timer:null};try{localStorage.setItem("tr_name",n)}catch{}h=w([a[0].lines.join(" ")]),l.timer=window.setInterval(()=>{if(!(!l||l.phase!=="run")){if(Date.now()>=l.endAt){Cn();return}Ws()}},250),f()}function Cn(){if(!l)return;const e=U(h);l.typed+=e.typed,l.errors+=e.errors,l.timer&&(clearInterval(l.timer),l.timer=null),l.phase="result";const t=ut();ze(t.net,t.accuracy,Date.now()),f()}function ln(){l!=null&&l.timer&&clearInterval(l.timer),l=null,X()}let v={bestWpm:0,bestAcc:0,done:[],lastIdx:0};function js(e){try{const t=JSON.parse(localStorage.getItem(`tr_progress_${e}`)??"");if(t&&Array.isArray(t.done))return{bestWpm:t.bestWpm|0,bestAcc:t.bestAcc|0,done:t.done,lastIdx:t.lastIdx|0}}catch{}return{bestWpm:0,bestAcc:0,done:[],lastIdx:0}}function Yt(){try{localStorage.setItem(`tr_progress_${se}`,JSON.stringify(v))}catch{}}function Cs(e){const t=U(h);t.wpm>v.bestWpm&&(v.bestWpm=t.wpm),t.accuracy>v.bestAcc&&(v.bestAcc=t.accuracy),v.done.includes(e.id)||v.done.push(e.id),Yt()}function Nn(){const e=U(h);if(!T)return e;const t=G.typed+e.typed,n=G.errors+e.errors,r=G.ms+e.elapsedMs,a=r/6e4,o=a>0?Math.round(t/5/a):0,i=t+n;return{typed:t,errors:n,elapsedMs:r,wpm:o,accuracy:i>0?Math.round(t/i*100):100}}let Me=null;function cn(){if(Ut)try{Me??(Me=new AudioContext);const e=Me.createOscillator(),t=Me.createGain();e.frequency.value=220,e.type="square",t.gain.value=.06,e.connect(t),t.connect(Me.destination),e.start(),e.stop(Me.currentTime+.07)}catch{}}const j=document.getElementById("app");let oe=!1,De=!1,Ae=!1,ke=!1,Ie=!1,We=!1,Le=!1,ht=!0,Lt=!1;function qn(){return/[а-яё]/i.test(h.pattern)}function Ns(e){return A()==="ru"||e}function Zt(){Q?document.documentElement.dataset.theme="dark":delete document.documentElement.dataset.theme}function qs(){return`<select id="lang" title="Language">
    <option value="ru" ${A()==="ru"?"selected":""}>RU</option>
    <option value="en" ${A()==="en"?"selected":""}>EN</option>
  </select>`}function _n(e){const t=document.getElementById("lang");t&&(t.onchange=()=>{yn(t.value),e()})}function _s(){return m==="weak"?{id:"weak",bank:se,title:s("weak.title"),lines:Ne}:m==="custom"?{id:"custom",bank:se,title:s("custom.title"),lines:ue}:R[$]??null}let Ne=[],ue=[],he=null;function Hn(){if(he||(he=document.createElement("div"),he.id="chrome",document.body.appendChild(he)),x===null){he.innerHTML="";return}he.innerHTML=`
    <select id="g-profile" title="${s("hub.settings")}">
      ${Object.keys(rt).map(n=>`<option value="${n}" ${n===x?"selected":""}>${rt[n]}</option>`).join("")}
    </select>
    <button id="g-flow" class="chrome-btn ${T?"on":""}" title="${s("tb.flow")}">🌊</button>
    <button id="g-dark" class="chrome-btn" title="${s("tb.dark")}">${Q?"☀️":"🌙"}</button>
    <select id="g-lang" title="Language"><option value="ru" ${A()==="ru"?"selected":""}>RU</option><option value="en" ${A()==="en"?"selected":""}>EN</option></select>`;const e=document.getElementById("g-profile");e.onchange=()=>{x=e.value,Ot(x),kt()},document.getElementById("g-dark").onclick=()=>{Q=!Q;try{localStorage.setItem("tr_dark",Q?"1":"0")}catch{}Zt(),Hn()},document.getElementById("g-flow").onclick=()=>{T=!T;try{localStorage.setItem("tr_flow",T?"1":"0")}catch{}jn(),kt()};const t=document.getElementById("g-lang");t.onchange=()=>{yn(t.value),kt()}}function kt(){Ie=!1,Ae=!1,Le=!1,oe=!1,g&&(clearInterval(g),g=null),!ht&&!ke&&!We&&!De&&!l&&x!=="kids"&&(m?m==="weak"?Be():Rt(ft):X()),f()}function f(){if(Hn(),x===null){oe=!1,Fn();return}if(ke){Ie||(Ie=!0,ds(j,x??"m",()=>{ke=!1,Ie=!1,f()}));return}if(Ie=!1,We){Le||(Le=!0,Ss(j,x??"m",()=>{We=!1,Le=!1,f()}));return}if(Le=!1,x==="kids"){oe||(oe=!0,xr(j,()=>{oe=!1,x=null,jt(null),f()},()=>{oe=!1,ke=!0,f()}));return}if(oe=!1,De){Ae||(Ae=!0,Yr(j,()=>{De=!1,Ae=!1,f()}));return}if(Ae=!1,l){Ds();return}if(ht){Fs();return}const e=_s(),t=Nn(),n=m!==null;j.innerHTML=`
    <div class="wrap">
      <header>
        <h1><button id="home" class="home-btn" title="${s("hub.home")}">🏠</button> Type<span>RIGHT</span>ing</h1>
        <div class="headctl">
          <select id="bank">
            ${Vn.map(r=>`<option value="${r}" ${r===se&&!n?"selected":""}>${s("bank."+r)}</option>`).join("")}
          </select>
          <button id="settings" class="iconbtn" title="${s("hub.settings")}">⚙</button>
        </div>
      </header>
      <p class="bankdesc">${n?m==="weak"?s("weak.hint"):"":s("bank."+se+".desc")} ${n?"":`· <b>${R.length}</b> ${s("st.exercises")} · ${s("st.done")} <b>${v.done.length}</b>${v.bestWpm>0?` · ${s("st.record")} <b>${v.bestWpm}</b> ${s("st.wpm")} · <b>${v.bestAcc}%</b>`:""}`}</p>

      ${Lt?`<div class="toolbar settings-panel">
        <label><input type="checkbox" id="hide" ${lt?"checked":""}/> ${s("tb.hide")}</label>
        <label><input type="checkbox" id="sound" ${Ut?"checked":""}/> ${s("tb.sound")}</label>
        <label><input type="checkbox" id="block" ${He?"checked":""}/> ${s("tb.block")}</label>
        <label><input type="checkbox" id="keyb" ${Jt?"checked":""}/> ${s("tb.keyb")}</label>
        <label title="errRate"><input type="checkbox" id="heat" ${ct?"checked":""}/> ${s("tb.heat")}</label>
        <label title="Stamina-style"><input type="checkbox" id="flow" ${T?"checked":""}/> ${s("tb.flow")}</label>
      </div>`:""}

      <div class="nav-row">
        <div class="modes-tools">
          <button id="weak" class="tool-btn ${m==="weak"?"on":""}">${s("tb.weak")}</button>
          <button id="custom" class="tool-btn ${m==="custom"?"on":""}">${s("tb.custom")}</button>
        </div>
        <span class="spacer"></span>
        <button id="prev" class="ghost">${s("tb.prev")}</button>
        <span class="counter">${n?"•":`${$+1} / ${R.length}`}</span>
        <button id="next" class="ghost">${s("tb.next")}</button>
      </div>

      <div class="card">
        <div class="exhead">
          <span class="extitle">${J((e==null?void 0:e.title)??"")}</span>
          ${e!=null&&e.hint?`<span class="exhint">${J(e.hint)}</span>`:""}
        </div>
        <div class="pattern ${lt?"hidden":""}" id="pattern">${Kn()}</div>
      </div>

      ${Wn()}

      <div class="statsbar">${Bn(t)}</div>

      ${h.finishedAt!==null?Hs(t):`<p class="hint2">${m==="weak"&&Ne.length&&Dn?s("weak.none"):s(T?"hint.flow":"hint.type")} ${s(He?"hint.block":"hint.bs")}</p>`}
    </div>
    ${C?Gn():""}
  `,Gs()}let Dn=!1;function Wn(){if(!Jt)return"";const e=qn(),t=ct&&Sn()?xn():null;return`<div class="keyb">${Ge(h.finishedAt===null?h.pattern[h.pos]??null:null,e,Ns(e),t)}</div>
    ${t?'<p class="heat-legend"><i class="g">освоено</i> · <i class="r">слабые клавиши</i></p>':""}`}function Bn(e){return`
    <div><b>${e.wpm}</b><span>${s("st.wpm")}</span></div>
    <div><b>${e.accuracy}%</b><span>${s("st.accuracy")}</span></div>
    <div><b class="${e.errors>0?"err":""}">${e.errors}</b><span>${s("st.errors")}</span></div>
    <div><b>${(e.elapsedMs/1e3).toFixed(0)}s</b><span>${s("st.time")}</span></div>
    ${T?`<div><b>🔥 ${G.count}</b><span>${s("st.streak")}</span></div>`:""}`}function J(e){return e.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t])}function Kn(){if(lt)return`<span class="hidden-note">${s("hint.hidden")}</span>`;let e="";for(let t=0;t<h.pattern.length;t++){const n=h.pattern[t],r=h.marks[t],a=t===h.pos?"cur":r===P.CORRECT?"ok":r===P.WRONG?"bad":"pend";n===`
`?e+=`<span class="${a} nl">↵</span><br/>`:e+=`<span class="${a}">${J(n)}</span>`}return e}function Gn(){if(C==="custom")return`<div class="modal-bg" id="modal-bg"><div class="modal">
      <h2>${s("custom.title")}</h2>
      <textarea id="custom-ta" placeholder="${s("custom.ph")}">${J(ft)}</textarea>
      <div class="donebtns">
        <button id="custom-cancel" class="ghost">${s("custom.cancel")}</button>
        <button id="custom-go" class="primary">${s("custom.start")}</button>
      </div>
    </div></div>`;const e=Nr();return`<div class="modal-bg" id="modal-bg"><div class="modal">
    <h2>${s("prog.title")}</h2>
    ${e||`<p class="hint2">${s("prog.empty")}</p>`}
    <div class="donebtns"><button id="prog-close" class="primary">${s("prog.close")}</button></div>
  </div></div>`}function Fn(){j.innerHTML=`
    <div class="wrap onboard">
      <div class="ob-lang">${qs()}</div>
      <h1 class="ob-title">Type<span>RIGHT</span>ing</h1>
      <p class="ob-sub">${s("ob.sub")}</p>
      <div class="ob-cards">
        ${Object.keys(rt).map(e=>`
          <button class="ob-card" data-profile-pick="${e}">
            <span class="ob-emoji">${rt[e]}</span>
            <span class="ob-name">${s("profile."+e)}</span>
            <span class="ob-desc">${s("profile."+e+".desc")}</span>
          </button>`).join("")}
      </div>
      <p class="ob-note">${s("ob.note")}</p>
    </div>`,j.querySelectorAll("[data-profile-pick]").forEach(e=>{e.onclick=()=>{x=e.dataset.profilePick,Ot(x),f()}}),_n(()=>Fn())}function Hs(e){return`
    <div class="done">
      <h2>${s(x==="f"?"done.title.f":"done.title")}</h2>
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
    </div>`}function Ds(){if(!l)return;if(l.phase==="setup"){const n=localStorage.getItem("tr_name")??"";j.innerHTML=`
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
      </div></div>`,document.getElementById("ex-go").onclick=()=>{const r=Number(document.getElementById("ex-dur").value),a=Number(document.getElementById("ex-target").value)||35,o=document.getElementById("ex-name").value.trim();Os(r,a,o)},document.getElementById("ex-cancel").onclick=()=>ln();return}if(l.phase==="run"){const n=l.pool[l.pi],r=ut();j.innerHTML=`
      <div class="wrap">
        <div class="exam-hud">
          <span class="ex-timer" id="ex-timer">${zn(Math.max(0,l.endAt-Date.now()))}</span>
          <span class="ex-hudstats" id="ex-hudstats">${s("ex.net")} <b>${r.net}</b> · ${s("st.accuracy")} <b>${r.accuracy}%</b> · ${s("ex.target.short")} ${l.target}</span>
          <button id="ex-stop" class="ghost">${s("ex.cancel")}</button>
        </div>
        <div class="card"><div class="exhead"><span class="extitle">${J((n==null?void 0:n.title)??"")}</span></div>
          <div class="pattern" id="pattern">${Kn()}</div></div>
        ${Wn()}
      </div>`,document.getElementById("ex-stop").onclick=()=>Cn();return}const e=ut(),t=e.net>=l.target;j.innerHTML=`
    <div class="wrap"><div class="exam-result">
      <h2>${s("ex.result")}</h2>
      <div class="ex-verdict ${t?"pass":"fail"}">${s(t?"ex.pass":"ex.fail")} <small>(${s("ex.target.short")} ${l.target} ${s("ex.net")})</small></div>
      <div class="statsbar">
        <div><b>${e.net}</b><span>${s("ex.net")}</span></div>
        <div><b>${e.gross}</b><span>${s("ex.gross")}</span></div>
        <div><b>${e.accuracy}%</b><span>${s("st.accuracy")}</span></div>
        <div><b>${e.typed+e.errors}</b><span>${s("ex.keystrokes")}</span></div>
        <div><b>${l.durMin} ${s("ex.min")}</b><span>${s("st.time")}</span></div>
      </div>
      <div class="donebtns">
        <button id="ex-cert" class="primary">${s("ex.cert")}</button>
        <button id="ex-retry">${s("ex.again")}</button>
        <button id="ex-exit" class="ghost">${s("ex.cancel")}</button>
      </div>
    </div></div>`,document.getElementById("ex-cert").onclick=()=>Bs(e,t),document.getElementById("ex-retry").onclick=()=>{l.phase="setup",f()},document.getElementById("ex-exit").onclick=()=>ln()}function zn(e){const t=Math.ceil(e/1e3);return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`}function Ws(){if(!l||l.phase!=="run")return;const e=document.getElementById("ex-timer"),t=document.getElementById("ex-hudstats");if(!e||!t)return;const n=ut();e.textContent=zn(Math.max(0,l.endAt-Date.now())),t.innerHTML=`${s("ex.net")} <b>${n.net}</b> · ${s("st.accuracy")} <b>${n.accuracy}%</b> · ${s("ex.target.short")} ${l.target}`}function Bs(e,t){if(!l)return;const n=document.createElement("canvas");n.width=1200,n.height=850;const r=n.getContext("2d");r.fillStyle="#faf7f0",r.fillRect(0,0,1200,850),r.strokeStyle="#b9962e",r.lineWidth=6,r.strokeRect(30,30,1140,790),r.lineWidth=1.5,r.strokeRect(44,44,1112,762),r.fillStyle="#2a2a33",r.textAlign="center",r.font="700 28px Georgia, serif",r.fillText("TypeRIGHTing",600,110),r.font="800 64px Georgia, serif",r.fillStyle="#b9962e",r.fillText(s("ex.cert.title"),600,200),r.font="400 26px Georgia, serif",r.fillStyle="#555",r.fillText(s("ex.cert.sub"),600,240),r.font="700 52px Georgia, serif",r.fillStyle="#2a2a33",r.fillText(l.name||"—",600,350),r.font="800 110px Georgia, serif",r.fillStyle=t?"#2f7d4f":"#b3443a",r.fillText(`${e.net} ${s("ex.net")}`,600,500),r.font="400 30px Georgia, serif",r.fillStyle="#444",r.fillText(`${s("ex.gross")}: ${e.gross}   ·   ${s("st.accuracy")}: ${e.accuracy}%   ·   ${l.durMin} ${s("ex.min")}`,600,570),r.font="700 36px Georgia, serif",r.fillStyle=t?"#2f7d4f":"#b3443a",r.fillText(t?`✔ ${s("ex.pass")}`:`✘ ${s("ex.fail")}`,600,650),r.font="400 22px Georgia, serif",r.fillStyle="#777",r.fillText(`${s("ex.cert.date")}: ${new Date().toLocaleDateString()}`,600,740);const a=document.createElement("a");a.download=`TypeRIGHTing-test-${e.net}wpm.png`,a.href=n.toDataURL("image/png"),a.click()}function Be(){m="weak",l=null,Ne=jr(A()==="ru"?"ru":"en"),Dn=!Sn(3),h=w(T?[Ne.join(" ")]:Ne),g&&(clearInterval(g),g=null),f()}function Rt(e){ft=e,ue=e.split(/\r?\n/).map(t=>t.trimEnd()).filter(t=>t.length>0),ue.length!==0&&(m="custom",l=null,C=null,h=w(T?[ue.join(" ")]:ue),g&&(clearInterval(g),g=null),f())}function Ks(){m=null,Vt()}function O(e,t){const n=document.getElementById(e);n&&(n.onclick=t)}function ae(e,t){const n=document.getElementById(e);n&&(n.onchange=()=>t(n))}function Ee(e){m=null,l=null,g&&(clearInterval(g),g=null),e(),f()}function Un(){const e=document.getElementById("profile");e&&(e.onchange=()=>{x=e.value,Ot(x),f()}),O("dark",()=>{Q=!Q;try{localStorage.setItem("tr_dark",Q?"1":"0")}catch{}Zt(),f()}),_n(()=>f())}function Gs(){Un(),ae("bank",t=>{m=null,se=t.value,Vt()}),O("home",()=>{ht=!0,m=null,g&&(clearInterval(g),g=null),f()}),O("settings",()=>{Lt=!Lt,f()}),ae("hide",t=>{lt=t.checked,f()}),ae("sound",t=>{Ut=t.checked}),ae("block",t=>{He=t.checked}),ae("keyb",t=>{Jt=t.checked,f()}),ae("heat",t=>{ct=t.checked;try{localStorage.setItem("tr_heat",ct?"1":"0")}catch{}f()}),ae("flow",t=>{T=t.checked;try{localStorage.setItem("tr_flow",T?"1":"0")}catch{}jn(),m?m==="weak"?Be():Rt(ft):X()}),O("weak",()=>{m==="weak"?Ks():Be()}),O("custom",()=>{C="custom",f()}),O("prev",()=>{if(m){Ze();return}$=($-1+R.length)%R.length,X()}),O("next",()=>{if(m){Ze();return}$=($+1)%R.length,X()}),O("again",()=>{m?Ze(!0):X()}),O("nextdone",()=>{if(m){Ze();return}$=($+1)%R.length,X()});const e=document.getElementById("modal-bg");e&&(e.onclick=t=>{t.target===e&&(C=null,f())}),O("custom-go",()=>Rt(document.getElementById("custom-ta").value)),O("custom-cancel",()=>{C=null,f()}),O("prog-close",()=>{C=null,f()})}function Fs(){const e=Cr(Date.now()),t=[["train","⌨️",s("hub.train"),s("hub.train.d")],["course","📚",s("course.title"),s("hub.course.d")],["learn","🤖",s("learn.title"),s("hub.learn.d")],["compete","🏆",s("compete.title"),s("hub.compete.d")],["exam","⏱",s("ex.title"),s("hub.exam.d")],["progress","📈",s("prog.title"),s("hub.progress.d")]];j.innerHTML=`
    <div class="wrap hub">
      <header><h1>Type<span>RIGHT</span>ing</h1></header>
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
    ${C?Gn():""}`,Un(),j.querySelectorAll("[data-go]").forEach(r=>{r.onclick=()=>{const a=r.dataset.go;a==="train"?Ee(()=>{ht=!1}):a==="course"?Ee(()=>{De=!0}):a==="learn"?Ee(()=>{ke=!0}):a==="compete"?Ee(()=>{We=!0}):a==="exam"?Ee(()=>{l={phase:"setup",durMin:10,target:35,name:"",endAt:0,typed:0,errors:0,count:0,pool:[],pi:0,timer:null}}):a==="progress"&&(C="progress",f())}});const n=document.getElementById("modal-bg");n&&(n.onclick=r=>{r.target===n&&(C=null,f())}),O("prog-close",()=>{C=null,f()})}function Ze(e=!1){if(m==="weak"&&!e){Be();return}if(m==="weak"){Be();return}h=w(T?[ue.join(" ")]:ue),f()}function Vt(){R=dn(zt,se),v=js(se),$=Math.min(Math.max(v.lastIdx,0),Math.max(R.length-1,0)),X()}function Jn(e){return w(e?T?[e.lines.join(" ")]:e.lines:[""])}function X(){h=Jn(R[$]),g&&(clearInterval(g),g=null),v.lastIdx!==$&&(v.lastIdx=$,Yt()),f()}document.addEventListener("keydown",e=>{var i;const t=(i=e.target)==null?void 0:i.tagName;if(t==="SELECT"||t==="INPUT"||t==="TEXTAREA")return;if(C){e.key==="Escape"&&(C=null,f());return}if(De){Zr(e);return}if(ke){fs(e);return}if(We){Ms(e);return}if(x==="kids"){Sr(e);return}if(l&&l.phase!=="run"||h.finishedAt!==null)return;if(e.key==="Backspace"){e.preventDefault(),(l||!He)&&(Qn(h),f());return}let n=null;if(e.key==="Enter"?n=`
`:e.key.length===1&&(n=e.key),n===null)return;e.preventDefault();const r=h.pattern[h.pos]??"";n=Ke(n,r);const a=qn();if(l){const d=ye(h,n,!1);if(un(r,d.wrong,a),d.wrong&&cn(),d.finished){const c=U(h);l.typed+=c.typed,l.errors+=c.errors,l.count++,l.pi=(l.pi+1)%l.pool.length,h=w([l.pool[l.pi].lines.join(" ")])}f();return}h.startedAt===null&&!g&&(g=window.setInterval(()=>{h.finishedAt===null&&zs()},250));const o=ye(h,n,He);if(un(r,o.wrong,a),o.wrong&&cn(),o.finished){const d=U(h);if(T&&!m){const c=R[$];G.typed+=d.typed,G.errors+=d.errors,G.ms+=d.elapsedMs,G.count++,c&&!v.done.includes(c.id)&&v.done.push(c.id),$=($+1)%R.length,v.lastIdx=$,Yt(),h=Jn(R[$])}else if(g&&(clearInterval(g),g=null),ze(d.wpm,d.accuracy,Date.now()),!m){const c=R[$];c&&Cs(c)}}f()});function un(e,t,n){if(!e||e===`
`||e===" ")return;const r=dt(e,n);r&&pt(r,!t)}function zs(){const e=document.querySelector(".statsbar");e&&(e.innerHTML=Bn(Nn()))}jt(x);Zt();Xn().then(e=>{zt=e,Vt()}).catch(e=>{j.innerHTML=`<div class="wrap"><p class="err">${s("err.load")}: ${J(String(e))}</p></div>`});
