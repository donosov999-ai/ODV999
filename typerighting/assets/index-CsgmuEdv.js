(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=r(a);fetch(a.href,o)}})();const Bn=["abandon","engRus","letterByLetter","poemHymn"];let _e=null;async function _n(){return _e||(_e=await(await fetch("content/exercises.json")).json(),_e)}function Jt(e,t){return e.filter(r=>r.bank===t)}const T={PENDING:0,CORRECT:1,WRONG:2};function w(e){const t=e.join(`
`);return{pattern:t,pos:0,errors:0,startedAt:null,finishedAt:null,marks:new Uint8Array(t.length)}}function fe(e,t,r){if(e.finishedAt!==null)return{accepted:!1,wrong:!1,finished:!0};e.startedAt===null&&(e.startedAt=Date.now());const n=e.pattern[e.pos];if((t==="\r"?`
`:t)===n){e.marks[e.pos]=T.CORRECT,e.pos++;const d=e.pos>=e.pattern.length;return d&&(e.finishedAt=Date.now()),{accepted:!0,wrong:!1,finished:d}}if(e.errors++,r)return{accepted:!1,wrong:!0,finished:!1};e.marks[e.pos]=T.WRONG,e.pos++;const i=e.pos>=e.pattern.length;return i&&(e.finishedAt=Date.now()),{accepted:!0,wrong:!0,finished:i}}function qn(e){e.finishedAt===null&&e.pos>0&&(e.pos--,e.marks[e.pos]=T.PENDING)}function z(e){const t=e.finishedAt??Date.now(),r=e.startedAt?t-e.startedAt:0;let n=0;for(let u=0;u<e.pos;u++)e.marks[u]===T.CORRECT&&n++;const a=r/6e4,o=a>0?Math.round(n/5/a):0,i=n+e.errors,d=i>0?Math.round(n/i*100):100;return{typed:n,errors:e.errors,elapsedMs:r,wpm:o,accuracy:d}}const Yt=[[{id:"tilde",u:1,en:"~",en2:"`",ru:"Ё"},{id:"d1",u:1,en:"1",en2:"!"},{id:"d2",u:1,en:"2",en2:"@"},{id:"d3",u:1,en:"3",en2:"#"},{id:"d4",u:1,en:"4",en2:"$"},{id:"d5",u:1,en:"5",en2:"%"},{id:"d6",u:1,en:"6",en2:"^"},{id:"d7",u:1,en:"7",en2:"&"},{id:"d8",u:1,en:"8",en2:"*"},{id:"d9",u:1,en:"9",en2:"("},{id:"d0",u:1,en:"0",en2:")"},{id:"minus",u:1,en:"-",en2:"_"},{id:"equal",u:1,en:"=",en2:"+"},{id:"backslash",u:1,en:"\\",en2:"|"},{id:"backspace",u:1.6,label:"←"}],[{id:"tab",u:1.5,label:"Tab"},{id:"q",u:1,en:"Q",ru:"Й"},{id:"w",u:1,en:"W",ru:"Ц"},{id:"e",u:1,en:"E",ru:"У"},{id:"r",u:1,en:"R",ru:"К"},{id:"t",u:1,en:"T",ru:"Е"},{id:"y",u:1,en:"Y",ru:"Н"},{id:"u",u:1,en:"U",ru:"Г"},{id:"i",u:1,en:"I",ru:"Ш"},{id:"o",u:1,en:"O",ru:"Щ"},{id:"p",u:1,en:"P",ru:"З"},{id:"lbracket",u:1,en:"[",en2:"{",ru:"Х"},{id:"rbracket",u:1,en:"]",en2:"}",ru:"Ъ"},{id:"enterpad2",u:1.45}],[{id:"caps",u:1.9,label:"Caps Lock"},{id:"a",u:1,en:"A",ru:"Ф"},{id:"s",u:1,en:"S",ru:"Ы"},{id:"d",u:1,en:"D",ru:"В"},{id:"f",u:1,en:"F",ru:"А"},{id:"g",u:1,en:"G",ru:"П"},{id:"h",u:1,en:"H",ru:"Р"},{id:"j",u:1,en:"J",ru:"О"},{id:"k",u:1,en:"K",ru:"Л"},{id:"l",u:1,en:"L",ru:"Д"},{id:"semi",u:1,en:";",en2:":",ru:"Ж"},{id:"quote",u:1,en:"'",en2:'"',ru:"Э"},{id:"enterpad3",u:1.45}],[{id:"lshift",u:2.3,label:"Shift"},{id:"z",u:1,en:"Z",ru:"Я"},{id:"x",u:1,en:"X",ru:"Ч"},{id:"c",u:1,en:"C",ru:"С"},{id:"v",u:1,en:"V",ru:"М"},{id:"b",u:1,en:"B",ru:"И"},{id:"n",u:1,en:"N",ru:"Т"},{id:"m",u:1,en:"M",ru:"Ь"},{id:"comma",u:1,en:",",en2:"<",ru:"Б"},{id:"period",u:1,en:".",en2:">",ru:"Ю"},{id:"slash",u:1,en:"/",en2:"?"},{id:"rshift",u:1.2,label:"Shift"},{id:"rept",u:1.2,label:"Rept"}],[{id:"lctrl",u:1.3,label:"Ctrl"},{id:"blank1",u:1.1},{id:"lalt",u:1.3,label:"Alt"},{id:"space",u:6.8,label:""},{id:"ralt",u:1.3,label:"Alt"},{id:"blank2",u:1.1},{id:"rctrl",u:1.3,label:"Ctrl"}]],Zt=[["a","q"],["a","z"],["s","w"],["s","x"],["d","e"],["d","c"],["f","r"],["f","t"],["f","g"],["f","v"],["f","b"],["f","d5"],["j","y"],["j","u"],["j","h"],["j","n"],["j","m"],["j","d6"],["j","d7"],["k","i"],["k","comma"],["k","d8"],["l","o"],["l","period"],["semi","p"],["semi","lbracket"],["semi","rbracket"],["semi","quote"],["semi","slash"]],Vt={};for(const[e,t]of Zt)Vt[t]=e;const Dn=new Set(["tilde","d1","d2","d3","d4","d5","tab","q","w","e","r","t","caps","a","s","d","f","g","lshift","z","x","c","v","b"]),Ye=920,jt=380,lt=12,Ct=6,Bt=60,Wn=70,Hn=14,j={};{Yt.forEach((n,a)=>{const o=n.reduce((u,p)=>u+p.u,0),i=(Ye-2*lt-Ct*(n.length-1))/o;let d=lt;for(const u of n){const p=u.u*i;j[u.id]={...u,x:d,y:Hn+a*Wn,w:p,h:Bt},d+=p+Ct}});const e=j.enterpad2,t=j.enterpad3,r=Math.min(e.x,t.x);j.enter={id:"enter",u:0,label:"Enter",x:r,y:e.y,w:Ye-lt-r,h:t.y+Bt-e.y},delete j.enterpad2,delete j.enterpad3}const H={},D={};{const e=(t,r,n,a)=>{t[r]={id:n,shift:a}};for(const t of Object.values(j))t.en&&(/^[A-Z]$/.test(t.en)?(e(H,t.en.toLowerCase(),t.id,!1),e(H,t.en,t.id,!0)):(e(H,t.en,t.id,!1),t.en2&&e(H,t.en2,t.id,!0))),t.ru&&/^[А-ЯЁ]$/.test(t.ru)&&(e(D,t.ru.toLowerCase(),t.id,!1),e(D,t.ru,t.id,!0));e(D,".","slash",!1),e(D,",","slash",!0);for(const t of[H,D])e(t," ","space",!1),e(t,`
`,"enter",!1);for(const[t,r]of Object.entries(H))!(t in D)&&!/[a-zA-Z.,]/.test(t)&&(D[t]=r)}const Xt={},Qt={};for(const e of Yt)for(const t of e)t.en&&t.ru&&/^[A-Z]$/.test(t.en)&&/^[А-ЯЁ]$/.test(t.ru)&&(Xt[t.en.toLowerCase()]=t.ru.toLowerCase(),Qt[t.ru.toLowerCase()]=t.en.toLowerCase());function Oe(e,t){if(e.length!==1||t.length!==1)return e;const r=e.toLowerCase();let n;return/[а-яё]/i.test(t)&&/[a-z]/.test(r)?n=Xt[r]:/[a-z]/i.test(t)&&/[а-яё]/.test(r)&&(n=Qt[r]),n?e===r?n:n.toUpperCase():e}function en(e,t){return/[а-яё]/i.test(e)?D[e]??null:/[a-z]/i.test(e)?H[e]??null:(t?D[e]:H[e])??(t?H[e]:D[e])??null}function tn(e){const t=[];for(const r of Object.values(j)){const n=e==="en"?r.en:r.ru;n&&/^[A-Za-zА-Яа-яЁё]$/.test(n)&&t.push({id:r.id,ch:n.toLowerCase()})}return t}function ot(e,t){var r;return((r=en(e,t))==null?void 0:r.id)??null}const qe=e=>e.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),dt=e=>e.x+e.w/2,pt=e=>e.y+e.h/2;function Kn(e,t){const r=dt(e),n=pt(e),a=dt(t),o=pt(t),i=(r+a)/2,d=(n+o)/2,u=a-r,p=o-n,c=Math.hypot(u,p)||1,g=Math.min(18,c*.18)*(u>=0?1:-1),R=i-p/c*g,ce=d+u/c*g,U=1-16/c,P=r+u*U,J=n+p*U;return`M ${r.toFixed(1)} ${n.toFixed(1)} Q ${R.toFixed(1)} ${ce.toFixed(1)} ${P.toFixed(1)} ${J.toFixed(1)}`}function Ne(e,t,r=!0,n=null){const a=e!==null?en(e,t):null,o=(a==null?void 0:a.id)??null,i=o?Vt[o]??null:null;let d=null;a!=null&&a.shift&&o&&(d=Dn.has(o)?"rshift":"lshift");const u=[];for(const c of Object.values(j)){const g=["key"];c.id===o&&g.push("key-next"),c.id===d&&g.push("key-shift"),c.id===i&&g.push("key-home");const R=(c.x+4).toFixed(1),ce=c.y+3,U=(c.w-8).toFixed(1),P=c.h-10;if(u.push(`<g class="${g.join(" ")}" data-key="${c.id}">`,`<rect class="key-base" x="${c.x}" y="${c.y}" width="${c.w.toFixed(1)}" height="${c.h}" rx="9"/>`,`<rect class="key-face" x="${R}" y="${ce}" width="${U}" height="${P}" rx="6"/>`),n&&c.id in n){const J=n[c.id],jn=J<=0?"34,197,94":"217,58,58",Cn=J<=0?.22:(.2+.6*Math.min(J,1)).toFixed(2);u.push(`<rect x="${R}" y="${ce}" width="${U}" height="${P}" rx="6" fill="rgb(${jn})" opacity="${Cn}"/>`)}c.label!==void 0?u.push(`<text class="key-fn" x="${dt(c).toFixed(1)}" y="${(pt(c)+4).toFixed(1)}" text-anchor="middle">${qe(c.label)}</text>`):(c.en2&&u.push(`<text class="key-en2" x="${(c.x+12).toFixed(1)}" y="${c.y+22}">${qe(c.en2)}</text>`),c.en&&u.push(`<text class="key-en" x="${(c.x+12).toFixed(1)}" y="${c.y+(c.en2?46:38)}">${qe(c.en)}</text>`),c.ru&&r&&u.push(`<text class="key-ru" x="${(c.x+c.w-12).toFixed(1)}" y="${c.y+c.h-14}" text-anchor="end">${qe(c.ru)}</text>`)),u.push("</g>")}const p=Zt.map(([c,g])=>{const R=g===o&&c===(i??"");return`<path class="arr${R?" arr-active":""}" d="${Kn(j[c],j[g])}" marker-end="url(#arrhead${R?"-a":""})"/>`}).join("");return`<svg class="kbsvg${o?" has-target":""}" viewBox="0 0 ${Ye} ${jt}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Схема клавиатуры: красные стрелки — правильное направление движения пальцев от домашнего ряда">
    <defs>
      <marker id="arrhead" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" class="arrhead"/></marker>
      <marker id="arrhead-a" markerWidth="8" markerHeight="8" refX="5.5" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" class="arrhead-a"/></marker>
    </defs>
    <rect class="kb-bg" x="0" y="0" width="${Ye}" height="${jt}" rx="14"/>
    ${u.join("")}
    ${p}
  </svg>`}const Ze={m:"⌨️",f:"🌸",kids:"🐱"},nn="tr_profile";function Gn(){const e=localStorage.getItem(nn);return e==="m"||e==="f"||e==="kids"?e:null}function rn(e){try{localStorage.setItem(nn,e)}catch{}$t(e)}function $t(e){e?document.documentElement.dataset.profile=e:delete document.documentElement.dataset.profile}let vt=localStorage.getItem("tr_lang")==="en"?"en":"ru";function L(){return vt}function Fn(e){vt=e;try{localStorage.setItem("tr_lang",e)}catch{}}const zn={"ob.sub":{ru:"Тренажёр слепой печати. Для кого настроить?",en:"Touch typing trainer. Who is it for?"},"ob.note":{ru:"Профиль можно сменить в любой момент в шапке.",en:"You can switch the profile any time in the header."},"profile.m":{ru:"Мужской",en:"Classic"},"profile.f":{ru:"Женский",en:"Soft"},"profile.kids":{ru:"Детский",en:"Kids"},"profile.m.desc":{ru:"Светлая тема, скорость и рекорды",en:"Light theme, speed and records"},"profile.f.desc":{ru:"Светлая тёплая тема, мягкий темп",en:"Warm light theme, gentle pace"},"profile.kids.desc":{ru:"Игра: уровни, звёзды и котик",en:"Game: levels, stars and a cat"},"bank.abandon":{ru:"Слова в предложениях",en:"Words in sentences"},"bank.engRus":{ru:"Англ↔Рус (с переводом)",en:"EN words + RU hints"},"bank.letterByLetter":{ru:"По буквам (наращивание)",en:"Letter by letter"},"bank.poemHymn":{ru:"Стихи и гимны",en:"Poems & hymns"},"bank.abandon.desc":{ru:"Печатай предложение с новым словом — словарный запас + скорость.",en:"Type a sentence with a new word — vocabulary + speed."},"bank.engRus.desc":{ru:"Слово с переводом + предложение. Перевод-подсказка над образцом.",en:"A word with RU translation + a sentence to type."},"bank.letterByLetter.desc":{ru:"Слово печатается по нарастающей: a, ab, aba… — постановка пальцев.",en:"Build the word up: a, ab, aba… — finger placement."},"bank.poemHymn.desc":{ru:"Стихи и гимны по строфам (4–8 строк) — ритм и выносливость печати.",en:"Poems & hymns by stanza (4–8 lines) — rhythm and stamina."},"tb.hide":{ru:"Спрятать образец",en:"Hide pattern"},"tb.sound":{ru:"Звук ошибки",en:"Error sound"},"tb.block":{ru:"Блок при ошибке",en:"Block on error"},"tb.keyb":{ru:"Клавиатура",en:"Keyboard"},"tb.flow":{ru:"Поток",en:"Flow"},"tb.heat":{ru:"Тепловая карта",en:"Heatmap"},"tb.exam":{ru:"Тест",en:"Test"},"tb.weak":{ru:"🎯 Слабые клавиши",en:"🎯 Weak keys"},"tb.custom":{ru:"✎ Свой текст",en:"✎ Custom text"},"tb.progress":{ru:"📈 Прогресс",en:"📈 Progress"},"tb.course":{ru:"📚 Курс",en:"📚 Course"},"tb.learn":{ru:"🤖 AI-обучение",en:"🤖 AI training"},"tb.compete":{ru:"🏆 Соревнование",en:"🏆 Compete"},"compete.title":{ru:"Тест-соревнование",en:"Typing Compete"},"compete.intro":{ru:"Выбери дисциплину и поставь рекорд. Результат можно опубликовать в онлайн-таблице.",en:"Pick a discipline and set a record. Publish your result to the online leaderboard."},"comp.alpha_fwd":{ru:"Алфавит А→Я",en:"Alphabet A→Z"},"comp.alpha_rev":{ru:"Алфавит Я→А",en:"Alphabet Z→A"},"comp.words":{ru:"Слова",en:"Words"},"comp.digits":{ru:"Цифры",en:"Numbers"},"comp.sprint":{ru:"Спринт",en:"Sprint"},"comp.best":{ru:"рекорд",en:"best"},"comp.hint":{ru:"на скорость, без ошибок",en:"for speed, no errors"},"comp.record":{ru:"Новый личный рекорд!",en:"New personal record!"},"comp.name":{ru:"Имя для таблицы",en:"Name for the board"},"comp.publish":{ru:"Опубликовать",en:"Publish"},"comp.leaderboard":{ru:"Таблица рекордов",en:"Leaderboard"},"comp.player":{ru:"Игрок",en:"Player"},"comp.loading":{ru:"Загрузка таблицы…",en:"Loading board…"},"comp.empty":{ru:"Пока нет результатов — будь первым!",en:"No results yet — be the first!"},"learn.title":{ru:"AI-обучение",en:"AI training"},"learn.intro":{ru:"Программа сама генерирует связные строки и подмешивает буквы, где ты ошибаешься. Просто печатай поток — она подстраивается.",en:"The program generates connected lines and mixes in the letters you miss. Just type the stream — it adapts to you."},"learn.intro.kids":{ru:"Печатай слова, которые придумывает котик! Чем точнее — тем лучше 🐱",en:"Type the words the cat makes up! The more accurate, the better 🐱"},"learn.mastery":{ru:"Мастерство",en:"Mastery"},"learn.tempo":{ru:"Темп",en:"Tempo"},"learn.rhythm":{ru:"Ритмичность",en:"Rhythm"},"learn.lines":{ru:"строк",en:"lines"},"learn.tip":{ru:"Мастерство — скорость с учётом ошибок (сим/мин). Ритмичность >80% — ровный темп профи.",en:"Mastery — speed adjusted for errors (chars/min). Rhythm >80% — pro-level evenness."},"learn.lvl.start":{ru:"старт",en:"start"},"learn.lvl.good":{ru:"хорошо",en:"good"},"learn.lvl.work":{ru:"рабочий",en:"working"},"learn.lvl.pro":{ru:"профи",en:"pro"},"course.title":{ru:"Курс печати",en:"Typing course"},"course.intro":{ru:"Последовательные уроки от домашнего ряда до предложений. Каждый урок открывает следующий.",en:"Step-by-step lessons from the home row to sentences. Each lesson unlocks the next."},"course.exit":{ru:"⚙ Выход",en:"⚙ Exit"},"course.lesson":{ru:"Урок",en:"Lesson"},"course.line":{ru:"строка",en:"line"},"course.tip":{ru:"Печатай ровно и точно — скорость придёт сама.",en:"Type evenly and accurately — speed will follow."},"course.home":{ru:"Домашний ряд",en:"Home row"},"course.review":{ru:"Повторение домашнего ряда",en:"Home row review"},"course.keys":{ru:"Новые клавиши",en:"New keys"},"course.caps":{ru:"Заглавные буквы (Shift)",en:"Capitals (Shift)"},"course.digits":{ru:"Цифры",en:"Numbers"},"course.punct":{ru:"Знаки препинания",en:"Punctuation"},"course.words":{ru:"Частые слова",en:"Common words"},"course.sentences":{ru:"Предложения",en:"Sentences"},"tb.dark":{ru:"Тёмная тема",en:"Dark theme"},"tb.prev":{ru:"‹ Пред",en:"‹ Prev"},"tb.next":{ru:"След ›",en:"Next ›"},"weak.title":{ru:"Слабые клавиши",en:"Weak keys"},"weak.hint":{ru:"Упражнение собрано из клавиш, где у тебя больше всего ошибок. «След» — новый набор.",en:"Built from the keys you miss most. “Next” — a fresh set."},"weak.none":{ru:"Пока мало данных — тренируем домашний ряд. Печатай ещё, и появятся твои слабые клавиши.",en:"Not enough data yet — training the home row. Keep typing to reveal your weak keys."},"prog.title":{ru:"Прогресс по сессиям",en:"Progress by session"},"prog.empty":{ru:"Недостаточно данных. Пройди хотя бы 2 упражнения — появится график скорости.",en:"Not enough data. Finish at least 2 exercises to see the speed chart."},"prog.close":{ru:"Закрыть",en:"Close"},"custom.title":{ru:"Свой текст",en:"Custom text"},"custom.ph":{ru:"Вставь любой текст для тренировки…",en:"Paste any text to practice…"},"custom.start":{ru:"Тренировать",en:"Practice"},"custom.cancel":{ru:"Отмена",en:"Cancel"},"st.exercises":{ru:"упражнений",en:"exercises"},"st.done":{ru:"пройдено",en:"done"},"st.record":{ru:"рекорд",en:"best"},"st.wpm":{ru:"WPM",en:"WPM"},"st.accuracy":{ru:"точность",en:"accuracy"},"st.errors":{ru:"ошибок",en:"errors"},"st.time":{ru:"время",en:"time"},"st.streak":{ru:"подряд",en:"streak"},"hint.flow":{ru:"Поток: упражнения идут подряд без остановки.",en:"Flow: exercises run back to back, no stops."},"hint.type":{ru:"Печатай по образцу.",en:"Type the pattern."},"hint.block":{ru:"Неверный символ не пропускается.",en:"Wrong keys are not accepted."},"hint.bs":{ru:"Backspace — исправить.",en:"Backspace to fix."},"hint.hidden":{ru:"образец скрыт — печатай по памяти",en:"pattern hidden — type from memory"},"done.title":{ru:"✓ Готово",en:"✓ Done"},"done.title.f":{ru:"✓ Отлично!",en:"✓ Great job!"},"done.again":{ru:"↻ Заново",en:"↻ Again"},"done.next":{ru:"Следующее →",en:"Next →"},"err.load":{ru:"Не удалось загрузить упражнения",en:"Failed to load exercises"},"k.title":{ru:"🐱 Котик-печатник",en:"🐱 Typing Cat"},"k.hello":{ru:"Привет! Выбирай уровень — будем учиться печатать. Печатай точно, спешить не надо!",en:"Hi! Pick a level and let’s learn to type. Be accurate — no need to rush!"},"k.rest":{ru:"🐱 Ты отлично позанимался! Передохни немножко 💛",en:"🐱 Great practice! Take a little break 💛"},"k.block.ru":{ru:"🇷🇺 По-русски",en:"🇷🇺 Russian"},"k.block.en":{ru:"🇬🇧 По-английски",en:"🇬🇧 English"},"k.level":{ru:"Уровень",en:"Level"},"k.word":{ru:"слово",en:"word"},"k.noerr":{ru:"⭐ без ошибок",en:"⭐ no errors"},"k.errors":{ru:"ошибок",en:"errors"},"k.passed":{ru:"пройден!",en:"passed!"},"k.note3":{ru:"Ни одной ошибки — ты звезда!",en:"Not a single error — you are a star!"},"k.note2":{ru:"Очень здорово! Ещё чуть точнее — будет три звезды.",en:"Very good! A bit more accurate for three stars."},"k.note1":{ru:"Уровень пройден! Попробуй ещё раз — получится точнее.",en:"Level passed! Try again to be more accurate."},"k.again":{ru:"↻ Ещё раз",en:"↻ Again"},"k.map":{ru:"К карте",en:"To map"},"k.next":{ru:"Дальше →",en:"Next →"},"k.back":{ru:"← К карте",en:"← To map"},"k.startRu":{ru:"Печатаем по-русски!",en:"Typing in Russian!"},"k.startEn":{ru:"Печатаем по-английски!",en:"Typing in English!"},"ex.title":{ru:"Тест печати",en:"Typing Test"},"ex.desc":{ru:"Печатай предложения без остановки, пока не выйдет время. В конце — отчёт с Gross/Net WPM и точностью.",en:"Type sentences non-stop until the time runs out. You get a report with Gross/Net WPM and accuracy."},"ex.duration":{ru:"Длительность",en:"Duration"},"ex.min":{ru:"мин",en:"min"},"ex.target":{ru:"Цель Net WPM",en:"Target Net WPM"},"ex.name":{ru:"Имя (для сертификата)",en:"Name (for the certificate)"},"ex.start":{ru:"Начать тест",en:"Start test"},"ex.cancel":{ru:"Выйти",en:"Exit"},"ex.left":{ru:"осталось",en:"left"},"ex.result":{ru:"Результат теста",en:"Test result"},"ex.gross":{ru:"Gross WPM",en:"Gross WPM"},"ex.net":{ru:"Net WPM",en:"Net WPM"},"ex.keystrokes":{ru:"нажатий",en:"keystrokes"},"ex.pass":{ru:"СДАН",en:"PASS"},"ex.fail":{ru:"НЕ СДАН",en:"FAIL"},"ex.target.short":{ru:"цель",en:"target"},"ex.cert":{ru:"⬇ Сертификат (PNG)",en:"⬇ Certificate (PNG)"},"ex.again":{ru:"↻ Ещё раз",en:"↻ Try again"},"ex.cert.title":{ru:"СЕРТИФИКАТ",en:"CERTIFICATE"},"ex.cert.sub":{ru:"тест слепой печати",en:"touch typing test"},"ex.cert.date":{ru:"Дата",en:"Date"}};function s(e){const t=zn[e];return t?t[vt]:e}const Un=["кот","дом","сок","лес","мяч","сыр","нос","рот","лук","мак","жук","дым","сон","мир","кит"],Jn=["мама","папа","каша","зима","лето","луна","небо","море","гора","рыба","окно","сова","лиса","волк","утка"],Yn=["весна","осень","школа","книга","песня","чашка","ложка","мышка","кошка","зебра","лампа","шапка","санки","горка","речка"],Zn=["cat","dog","sun","box","red","run","mom","dad","egg","ice","car","bus","fox","bee","owl","hat","pen","map","cup","jam","sea","sky","toy","zoo","kid","leg","arm","eye","ear","nut","pig","hen","cow","ant","bat","big","hot","wet","six","ten"],Vn=["ball","fish","bird","cake","milk","tree","star","moon","rain","snow","frog","duck","bear","lion","wolf","book","game","blue","pink","rose","door","desk","lamp","sofa","kite","ship","road","park","hand","foot","nose","face","hair","king","gold","fast","slow","warm","cold","five"],Xn=["apple","house","smile","happy","water","bread","candy","tiger","mouse","horse","sheep","green","white","black","music","table","chair","plant","grass","cloud","river","beach","stone","train","plane","pizza","juice","sugar","lemon","mango","zebra","panda","koala","eagle","shark","dance","sleep","dream","light","seven"];function Qn(e,t){return e.slice(t*5,t*5+5)}const de=[];{let e=1;const t=[[Un,"ru"],[Jn,"ru"],[Yn,"ru"],[Zn,"en"],[Vn,"en"],[Xn,"en"]];for(const[r,n]of t)for(let a=0;a*5<r.length;a++)de.push({id:e,lang:n,title:String(e),words:Qn(r,a)}),e++}let he={stars:{}};function er(){try{const e=JSON.parse(localStorage.getItem("tr_kids")??"");e&&e.stars&&(he=e)}catch{}}function tr(){try{localStorage.setItem("tr_kids",JSON.stringify(he))}catch{}}function nr(e){return e===1||(he.stars[e-1]??0)>0}let Z="map",G=null,ve=0,E=w([""]),oe=0,wt=0,Y=0,ft=0,pe="",O=null,Ge=null;const rr={ru:["Молодец!","Здорово!","Так держать!","Ты супер!","Отлично!","Вот это да!"],en:["Well done!","Great!","Keep it up!","You rock!","Awesome!","Wow!"]},sr={ru:["Ой! Попробуй ещё","Чуть-чуть мимо","Не спеши","Почти попал!"],en:["Oops! Try again","Almost!","Take your time","So close!"]},ar=()=>rr[L()],sn=()=>sr[L()],_t=e=>e[Math.floor(Math.random()*e.length)];let N=null;function xt(e,t,r,n=.07){if(!N)return;const a=N.createOscillator(),o=N.createGain();a.type="triangle",a.frequency.value=e,o.gain.setValueAtTime(n,N.currentTime+t),o.gain.exponentialRampToValueAtTime(.001,N.currentTime+t+r),a.connect(o),o.connect(N.destination),a.start(N.currentTime+t),a.stop(N.currentTime+t+r+.02)}function or(){try{N??(N=new AudioContext),[523.25,659.25,783.99].forEach((e,t)=>xt(e,t*.09,.18))}catch{}}function ir(){try{N??(N=new AudioContext),[523.25,587.33,659.25,783.99,1046.5].forEach((e,t)=>xt(e,t*.11,.22,.08))}catch{}}function lr(){try{N??(N=new AudioContext),xt(196,0,.12,.05)}catch{}}let $e=null;function cr(e,t,r){O=e,Ge=t,$e=r??null,er(),Z="map",je()}function ur(e){if(Z!=="level"||!G||E.finishedAt!==null)return;if(e.key==="Backspace"){e.preventDefault();return}let t=null;if(e.key==="Enter"?t=`
`:e.key.length===1&&(t=e.key),t===null)return;e.preventDefault();const r=E.pattern[E.pos]??"";t=Oe(t,r);const n=fe(E,t,!0);n.wrong&&(oe++,pe=_t(sn()),lr()),n.finished&&(wt+=E.pattern.length,pe=_t(ar()),ve+1<G.words.length?(or(),ve++,E=w([G.words[ve]])):dr()),je()}function dr(){G&&(ir(),Y=oe===0?3:1-oe/Math.max(wt,1)>=.9?2:1,Y>(he.stars[G.id]??0)&&(he.stars[G.id]=Y,tr()),ft++,Z="done")}function ht(e){G=e,ve=0,oe=0,wt=0,pe=e.lang==="ru"?s("k.startRu"):s("k.startEn"),E=w([e.words[0]]),Z="level",je()}const an=e=>e.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);function pr(e){return e>0?"⭐".repeat(e):""}function je(){O&&(Z==="map"?fr():Z==="level"?mr():br())}function fr(){const e=[{lang:"ru",title:s("k.block.ru"),levels:de.filter(n=>n.lang==="ru")},{lang:"en",title:s("k.block.en"),levels:de.filter(n=>n.lang==="en")}],t=ft>0&&ft%3===0?`<div class="k-rest">${s("k.rest")}</div>`:"";O.innerHTML=`
    <div class="wrap kids">
      <header class="k-head">
        <h1>${s("k.title")}</h1>
        <div style="display:flex;gap:8px">
          ${$e?`<button id="k-ai" class="ghost">${s("learn.title")} 🤖</button>`:""}
          <button id="k-exit" class="ghost" title="Profile">⚙</button>
        </div>
      </header>
      <p class="k-hello">${s("k.hello")}</p>
      ${t}
      ${e.map(n=>`
        <h2 class="k-block">${n.title}</h2>
        <div class="k-map">
          ${n.levels.map(a=>{const o=nr(a.id),i=he.stars[a.id]??0;return`<button class="k-lvl ${o?"open":"locked"} ${i>0?"passed":""}" data-level="${a.id}" ${o?"":"disabled"}>
              <span class="k-num">${o?a.id:"🔒"}</span>
              <span class="k-stars">${pr(i)}</span>
            </button>`}).join("")}
        </div>`).join("")}
    </div>`,O.querySelectorAll("[data-level]").forEach(n=>{n.onclick=()=>{const a=de.find(o=>o.id===Number(n.dataset.level));a&&ht(a)}}),O.querySelector("#k-exit").onclick=()=>Ge==null?void 0:Ge();const r=O.querySelector("#k-ai");r&&(r.onclick=()=>$e==null?void 0:$e())}function hr(){let e="";for(let t=0;t<E.pattern.length;t++){const r=E.marks[t],n=t===E.pos?"cur":r===T.CORRECT?"ok":r===T.WRONG?"bad":"pend";e+=`<span class="${n}">${an(E.pattern[t])}</span>`}return e}function mr(){const e=G,t=E.finishedAt===null?E.pattern[E.pos]??null:null,r=L()==="ru"||e.lang==="ru";O.innerHTML=`
    <div class="wrap kids">
      <header class="k-head">
        <button id="k-back" class="ghost">${s("k.back")}</button>
        <span class="k-progress">${s("k.level")} ${e.title} · ${s("k.word")} ${ve+1} / ${e.words.length}</span>
        <span class="k-acc">${oe===0?s("k.noerr"):`${s("k.errors")}: ${oe}`}</span>
      </header>
      <div class="k-mascot"><span class="k-cat">${oe>0&&pe&&sn().includes(pe)?"🙀":"😺"}</span> <span class="k-say">${an(pe)}</span></div>
      <div class="k-word">${hr()}</div>
      <div class="keyb">${Ne(t,e.lang==="ru",r)}</div>
    </div>`,O.querySelector("#k-back").onclick=()=>{Z="map",je()}}function br(){const e=G;O.innerHTML=`
    <div class="wrap kids">
      <div class="k-done">
        <div class="k-cat-big">${Y===3?"😻":"😺"}</div>
        <h2>${s("k.level")} ${e.title} ${s("k.passed")}</h2>
        <div class="k-stars-big">${"⭐".repeat(Y)}${"☆".repeat(3-Y)}</div>
        <p class="k-done-note">${s(Y===3?"k.note3":Y===2?"k.note2":"k.note1")}</p>
        <div class="donebtns">
          <button id="k-again">${s("k.again")}</button>
          <button id="k-map2" class="ghost">${s("k.map")}</button>
          ${de.find(r=>r.id===e.id+1)?`<button id="k-next" class="primary">${s("k.next")}</button>`:""}
        </div>
      </div>
    </div>`,O.querySelector("#k-again").onclick=()=>ht(e),O.querySelector("#k-map2").onclick=()=>{Z="map",je()};const t=O.querySelector("#k-next");t&&(t.onclick=()=>{const r=de.find(n=>n.id===e.id+1);r&&ht(r)})}const on="tr_keystats";let me=gr();function gr(){try{const e=JSON.parse(localStorage.getItem(on)??"{}");return e&&typeof e=="object"?e:{}}catch{return{}}}let ct=null;function yr(){ct||(ct=window.setTimeout(()=>{ct=null;try{localStorage.setItem(on,JSON.stringify(me))}catch{}},800))}function it(e,t){const r=me[e]??(me[e]={ok:0,err:0});t?r.ok++:r.err++,yr()}function ln(e=6){const t={};for(const[r,n]of Object.entries(me)){const a=n.ok+n.err;a>=e&&(t[r]=n.err/a)}return t}function cn(e=6){return Object.values(me).some(t=>t.ok+t.err>=e)}function kr(e,t=6){return tn(e).map(({id:a,ch:o})=>{const i=me[a],d=i?i.ok+i.err:0,u=d>=3?i.err/d:0;return{ch:o,rate:u,n:d}}).filter(a=>a.rate>0).sort((a,o)=>o.rate-a.rate||o.n-a.n).slice(0,t).map(a=>a.ch)}function $r(e,t=6){const r=ln(4),n={};for(const{id:a,ch:o}of tn(e)){const i=r[a];i!==void 0&&i>0&&(n[o]=1+i*t)}return n}function vr(e,t=5){let r=kr(e,6);const n=e==="en"?["a","s","d","f","j","k","l"]:["ф","ы","в","а","о","л","д"];r.length===0&&(r=n.slice(0,4));const a=[...r,...r,...n],o=()=>a[Math.floor(Math.random()*a.length)],i=[];for(let d=0;d<t;d++){const u=[];for(let p=0;p<6;p++){const c=3+Math.floor(Math.random()*3);let g="";for(let R=0;R<c;R++)g+=o();u.push(g)}i.push(u.join(" "))}return i}const mt="tr_history";function Ce(e,t,r){if(e<=0)return;let n=[];try{n=JSON.parse(localStorage.getItem(mt)??"[]")}catch{n=[]}Array.isArray(n)||(n=[]),n.push({t:r,wpm:e,acc:t}),n.length>300&&(n=n.slice(n.length-300));try{localStorage.setItem(mt,JSON.stringify(n))}catch{}}function qt(){try{const e=JSON.parse(localStorage.getItem(mt)??"[]");return Array.isArray(e)?e:[]}catch{return[]}}function wr(e=40){const t=qt().slice(-e);if(t.length<2)return"";const r=600,n=120,a=8,o=t.map(P=>P.wpm),i=Math.max(...o),d=Math.min(...o),u=i-d||1,p=P=>a+P/(t.length-1)*(r-2*a),c=P=>n-a-(P-d)/u*(n-2*a),g=t.map((P,J)=>`${J===0?"M":"L"} ${p(J).toFixed(1)} ${c(P.wpm).toFixed(1)}`).join(" "),R=`${g} L ${p(t.length-1).toFixed(1)} ${n-a} L ${p(0).toFixed(1)} ${n-a} Z`,ce=Math.max(...o),U=o[o.length-1];return`<svg class="spark" viewBox="0 0 ${r} ${n}" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path d="${R}" class="spark-area"/>
    <path d="${g}" class="spark-line"/>
    <circle cx="${p(t.length-1).toFixed(1)}" cy="${c(U).toFixed(1)}" r="4" class="spark-dot"/>
  </svg>
  <div class="spark-meta"><span>сессий: <b>${qt().length}</b></span><span>макс: <b>${ce}</b></span><span>последняя: <b>${U}</b> WPM</span></div>`}const xr={en:["fj","dk","sl","a","ei","gh","ru","ty","wo","qp","vn","zxcb","m"],ru:["ао","вл","ыд","фж","пр","ен","кг","уш","цщ","йз","яч","смит","ьбюхэъ"]},Sr={en:"the and you that was for are with his they have this from word what time work first water been call who now find long down day did get come made may part over new sound take only little place year live back give most very after thing our just name good through",ru:"и в не на что тот быть это как она для его так вот мочь сказать год этот рука дело глаз жизнь день есть знать самый раз время слово место друг два дом стать первый вода идти большой ещё свой"},Er={en:["The quick brown fox jumps over the lazy dog.","Pack my box with five dozen liquor jugs.","How vexingly quick daft zebras jump.","The five boxing wizards jump quickly.","Sphinx of black quartz, judge my vow."],ru:["Съешь же ещё этих мягких французских булок да выпей чаю.","В чащах юга жил бы цитрус? Да, но фальшивый экземпляр!","Широкая электрификация южных губерний даст мощный толчок.","Эх, чужак, общий съём цен шляп юфти вдрызг!","Любя, съешь щипцы, — вздохнёт мэр, — кайф жгуч."]};function Ir(e){const t=[];let r=1,n="";xr[e].forEach((o,i)=>{if(n+=o,i===0){t.push({id:r++,kind:"home",newKeys:o,pool:o,titleKey:"course.home"});return}t.push({id:r++,kind:"keys",newKeys:o,pool:n,titleKey:"course.keys",titleArg:o.toUpperCase().split("").join(" ")}),o===(e==="en"?"a":"фж")&&t.push({id:r++,kind:"home",newKeys:"",pool:n,titleKey:"course.review"})});const a=n;return t.push({id:r++,kind:"caps",newKeys:"",pool:a,titleKey:"course.caps"}),t.push({id:r++,kind:"digits",newKeys:"0123456789",pool:"0123456789",titleKey:"course.digits"}),t.push({id:r++,kind:"punct",newKeys:"",pool:a,titleKey:"course.punct"}),t.push({id:r++,kind:"words",newKeys:"",pool:"",titleKey:"course.words"}),t.push({id:r++,kind:"sentences",newKeys:"",pool:"",titleKey:"course.sentences"}),t}const be=e=>Math.floor(Math.random()*e);function St(e,t,r=5){const n=(e||"asdf").split(""),a=t?[...n,...t.split(""),...t.split("")]:n,o=[];for(let i=0;i<r;i++){const d=[];for(let u=0;u<6;u++){const p=3+be(3);let c="";for(let g=0;g<p;g++)c+=a[be(a.length)];d.push(c)}o.push(d.join(" "))}return o}function Mr(e=5){const t=[];for(let r=0;r<e;r++){const n=[];for(let a=0;a<6;a++){let o="";for(let i=0;i<3+be(2);i++)o+=String(be(10));n.push(o)}t.push(n.join(" "))}return t}function Tr(e,t=4){const r=[",",".","?","!",";",":"];return St(e,"",t).map(a=>a.split(" ").map(o=>o+r[be(r.length)]).join(" "))}function Ar(e,t=5){const r=Sr[e].split(/\s+/),n=[];for(let a=0;a<t;a++){const o=[];for(let i=0;i<6;i++)o.push(r[be(r.length)]);n.push(o.join(" "))}return n}function Lr(e,t=4){return St(e,"",t).map(r=>r.split(" ").map(n=>n.charAt(0).toUpperCase()+n.slice(1)).join(" "))}function Rr(e,t){switch(t.kind){case"digits":return Mr();case"punct":return Tr(t.pool);case"words":return Ar(e);case"sentences":return Er[e];case"caps":return Lr(t.pool);default:return St(t.pool,t.newKeys)}}let F={stars:{}},we="en",xe=[];function Pr(){we=L()==="ru"?"ru":"en",xe=Ir(we);try{const e=JSON.parse(localStorage.getItem(`tr_course_${we}`)??"");e&&e.stars?F=e:F={stars:{}}}catch{F={stars:{}}}}function Or(){try{localStorage.setItem(`tr_course_${we}`,JSON.stringify(F))}catch{}}function Nr(e){return e===1||(F.stars[e-1]??0)>0}let V="map",ie=null,Le=[],Se=0,k=w([""]),Ve=0,Et=0,ne=0,B=null,Fe=null;function jr(e,t){B=e,Fe=t,Pr(),V="map",Be()}function Cr(e){if(V!=="lesson"||!ie||k.finishedAt!==null)return;if(e.key==="Backspace"){e.preventDefault();return}let t=null;if(e.key==="Enter"?t=`
`:e.key.length===1&&(t=e.key),t===null)return;e.preventDefault();const r=k.pattern[k.pos]??"";t=Oe(t,r);const n=/[а-яё]/i.test(k.pattern),a=fe(k,t,!0);if(r&&r!==" "&&r!==`
`){const o=ot(r,n);o&&it(o,!a.wrong)}a.wrong&&Ve++,a.finished&&(Et+=k.pattern.length,Se+1<Le.length?(Se++,k=w([Le[Se]])):Br()),Be()}function Br(){if(!ie)return;const e=z(k);ne=Ve===0?3:1-Ve/Math.max(Et,1)>=.92?2:1,ne>(F.stars[ie.id]??0)&&(F.stars[ie.id]=ne,Or()),e.wpm>0&&Ce(e.wpm,e.accuracy,Date.now()),V="done"}function bt(e){ie=e,Se=0,Ve=0,Et=0,Le=Rr(we,e),k=w([Le[0]]),V="lesson",Be()}const It=e=>e.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),un=e=>e.titleArg?`${s(e.titleKey)}: ${e.titleArg}`:s(e.titleKey);function Be(){B&&(V==="map"?_r():V==="lesson"?Dr():Wr())}function _r(){const e=Object.values(F.stars).filter(t=>t>0).length;B.innerHTML=`
    <div class="wrap course">
      <header class="c-head">
        <h1>📚 ${s("course.title")}</h1>
        <button id="c-exit" class="ghost">${s("course.exit")}</button>
      </header>
      <p class="c-intro">${s("course.intro")} · ${s("st.done")} <b>${e}/${xe.length}</b></p>
      <div class="c-map">
        ${xe.map(t=>{const r=Nr(t.id),n=F.stars[t.id]??0;return`<button class="c-les ${r?"open":"locked"} ${n>0?"passed":""}" data-les="${t.id}" ${r?"":"disabled"}>
            <span class="c-num">${r?t.id:"🔒"}</span>
            <span class="c-name">${It(un(t))}</span>
            <span class="c-stars">${n>0?"⭐".repeat(n):""}</span>
          </button>`}).join("")}
      </div>
    </div>`,B.querySelectorAll("[data-les]").forEach(t=>{t.onclick=()=>{const r=xe.find(n=>n.id===Number(t.dataset.les));r&&bt(r)}}),B.querySelector("#c-exit").onclick=()=>Fe==null?void 0:Fe()}function qr(){let e="";for(let t=0;t<k.pattern.length;t++){const r=k.marks[t],n=t===k.pos?"cur":r===T.CORRECT?"ok":r===T.WRONG?"bad":"pend",a=k.pattern[t];a===`
`?e+=`<span class="${n} nl">↵</span><br/>`:e+=`<span class="${n}">${It(a)}</span>`}return e}function Dr(){const e=ie,t=/[а-яё]/i.test(k.pattern),r=L()==="ru"||t,n=z(k);B.innerHTML=`
    <div class="wrap course">
      <header class="c-head">
        <button id="c-back" class="ghost">${s("k.back")}</button>
        <span class="c-progress">${s("course.lesson")} ${e.id} · ${It(un(e))} · ${s("course.line")} ${Se+1}/${Le.length}</span>
        <span class="c-acc">${n.wpm} ${s("st.wpm")} · ${n.accuracy}%</span>
      </header>
      <div class="card"><div class="pattern" id="pattern">${qr()}</div></div>
      <div class="keyb">${Ne(k.finishedAt===null?k.pattern[k.pos]??null:null,t,r)}</div>
      <p class="hint2">${s("course.tip")}</p>
    </div>`,B.querySelector("#c-back").onclick=()=>{V="map",Be()}}function Wr(){const e=ie,t=xe.find(n=>n.id===e.id+1);B.innerHTML=`
    <div class="wrap course">
      <div class="c-done">
        <h2>${s("course.lesson")} ${e.id} ${s("k.passed")}</h2>
        <div class="k-stars-big">${"⭐".repeat(ne)}${"☆".repeat(3-ne)}</div>
        <p class="k-done-note">${s(ne===3?"k.note3":ne===2?"k.note2":"k.note1")}</p>
        <div class="donebtns">
          <button id="c-again">${s("k.again")}</button>
          <button id="c-map" class="ghost">${s("k.map")}</button>
          ${t?`<button id="c-next" class="primary">${s("k.next")}</button>`:""}
        </div>
      </div>
    </div>`,B.querySelector("#c-again").onclick=()=>bt(e),B.querySelector("#c-map").onclick=()=>{V="map",Be()};const r=B.querySelector("#c-next");r&&t&&(r.onclick=()=>bt(t))}const re=" ";function Hr(e,t){return e.toLowerCase().split("").map(r=>t.test(r)?r:re).join("").replace(/\s+/g,re).trim()}function Kr(e,t,r=3){const n=t==="ru"?/[а-яё]/:/[a-z]/,a=re.repeat(r-1)+Hr(e,n)+re,o=new Map,i=new Set,d=new Set;for(let u=0;u+r<=a.length;u++){const p=a.slice(u,u+r-1),c=a[u+r-1];c!==re&&d.add(c);let g=o.get(p);g||(g={},o.set(p,g)),g[c]=(g[c]??0)+1,p[0]===re&&p.trim().length>0&&i.add(p)}return{order:r,table:o,starts:[...i],alphabet:[...d].sort()}}function Gr(e,t){let r=0;const n=Object.entries(e);for(const[o,i]of n)r+=i*((t==null?void 0:t[o])??1);let a=Math.random()*r;for(const[o,i]of n)if(a-=i*((t==null?void 0:t[o])??1),a<=0)return o;return n[n.length-1][0]}function Fr(e,t={}){const r=t.chars??48,n=t.maxWord??8;if(e.starts.length===0)return"";const a=[];let o=0;for(;a.join(" ").length<r&&o++<200;){let i=e.starts[Math.floor(Math.random()*e.starts.length)],d=i.trim(),u=0;for(;u++<n*2;){const p=e.table.get(i);if(!p)break;const c=Gr(p,t.weight);if(c===re||(d+=c,i=(i+c).slice(-(e.order-1)),d.length>=n))break}d.length>=2&&a.push(d)}return a.join(" ")}const zr=`
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
`,Ur=`
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
`;let gt=null,Dt=null;function Jr(e){gt&&Dt===e||(gt=Kr(e==="ru"?zr:Ur,e,3),Dt=e)}let y=dn();function dn(){return{correct:0,keys:0,errors:0,ms:0,intervals:[],lines:0}}let I=w([""]),yt=0,ze=0,Ee="m",Ie=null,Ue=null;function Yr(){return L()==="ru"?"ru":"en"}function Zr(){const e=Yr();Jr(e);const t=Ee==="kids"?24:Ee==="f"?40:50,r=Ee==="kids"?5:8;return Fr(gt,{chars:t,weight:$r(e),maxWord:r})}function pn(){I=w([Zr()]),yt=0,ze=0}function Vr(e,t,r){Ie=e,Ue=r,Ee=t,y=dn(),pn(),hn()}function Xr(){const e=fn();e.mastery>0&&Ce(Math.round(e.mastery/5),e.accuracy,Date.now()),Ue==null||Ue()}function Qr(e){if(!Ie)return;if(e.key==="Backspace"){e.preventDefault();return}let t=null;if(e.key==="Enter"?t=`
`:e.key.length===1&&(t=e.key),t===null)return;e.preventDefault();const r=Date.now();I.startedAt===null&&(yt=r,ze=r);const n=I.pattern[I.pos]??"";t=Oe(t,n);const a=/[а-яё]/i.test(I.pattern),o=fe(I,t,!0);if(o.accepted){const i=r-ze;i>0&&i<3e3&&y.intervals.push(i),ze=r,y.keys++,n!==" "&&n!==`
`&&y.correct++}if(n&&n!==" "&&n!==`
`){const i=ot(n,a);i&&it(i,!o.wrong)}o.wrong&&y.errors++,o.finished&&(y.ms+=r-yt,y.lines++,pn()),hn()}function fn(){const e=y.ms/6e4,t=e>0?Math.round(y.correct/e):0,r=e>0?Math.round((y.correct+y.errors)/e):0,n=y.correct+y.errors,a=n>0?Math.round(y.correct/n*100):100;let o=0;if(y.intervals.length>=4){const i=y.intervals.reduce((p,c)=>p+c,0)/y.intervals.length,d=y.intervals.reduce((p,c)=>p+(c-i)**2,0)/y.intervals.length,u=Math.sqrt(d)/(i||1);o=Math.max(0,Math.min(100,Math.round((1-u)*100)))}return{mastery:t,tempo:r,rhythm:o,accuracy:a}}const es=e=>e.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);function ts(){let e="";for(let t=0;t<I.pattern.length;t++){const r=I.marks[t],n=t===I.pos?"cur":r===T.CORRECT?"ok":r===T.WRONG?"bad":"pend";e+=`<span class="${n}">${es(I.pattern[t])}</span>`}return e}function ns(e){return e>=300?s("learn.lvl.pro"):e>=200?s("learn.lvl.work"):e>=70?s("learn.lvl.good"):s("learn.lvl.start")}function hn(){if(!Ie)return;const e=fn(),t=/[а-яё]/i.test(I.pattern),r=L()==="ru"||t,n=Ee==="kids";Ie.innerHTML=`
    <div class="wrap learn">
      <header class="c-head">
        <h1>🤖 ${s("learn.title")}</h1>
        <button id="ai-exit" class="ghost">${s("course.exit")}</button>
      </header>
      <p class="c-intro">${s(n?"learn.intro.kids":"learn.intro")}</p>
      <div class="card"><div class="pattern" id="pattern">${ts()}</div></div>
      <div class="keyb">${Ne(I.finishedAt===null?I.pattern[I.pos]??null:null,t,r)}</div>
      ${n?`
        <div class="learn-kids"><span class="k-cat">😺</span> <b>${e.accuracy}%</b> ${s("st.accuracy")} · ${y.lines} ${s("learn.lines")}</div>
      `:`
        <div class="statsbar learn-stats">
          <div><b>${e.mastery}</b><span>${s("learn.mastery")}</span><i>${ns(e.mastery)}</i></div>
          <div><b>${e.tempo}</b><span>${s("learn.tempo")}</span></div>
          <div><b class="${e.rhythm>=80?"ok":""}">${e.rhythm}%</b><span>${s("learn.rhythm")}</span></div>
          <div><b>${e.accuracy}%</b><span>${s("st.accuracy")}</span></div>
          <div><b>${y.lines}</b><span>${s("learn.lines")}</span></div>
        </div>
        <p class="hint2">${s("learn.tip")}</p>
      `}
    </div>`,Ie.querySelector("#ai-exit").onclick=()=>Xr()}const mn="https://iuvvheeocobhiothfgei.supabase.co",Wt="sb_publishable_A2vJ5DjemTZIKrKX6XGqvQ_WaiuAkk1",bn="typing_leaderboard",gn={apikey:Wt,Authorization:`Bearer ${Wt}`,"Content-Type":"application/json"};async function rs(e){try{return(await fetch(`${mn}/rest/v1/${bn}`,{method:"POST",headers:{...gn,Prefer:"return=minimal"},body:JSON.stringify(e)})).ok}catch{return!1}}async function ss(e,t,r=10){try{const n=`discipline=eq.${e}&lang=eq.${t}&order=wpm.desc&limit=${r}`,a=await fetch(`${mn}/rest/v1/${bn}?${n}`,{headers:gn});return a.ok?await a.json():[]}catch{return[]}}const as=["alpha_fwd","alpha_rev","words","digits","sprint"],Ht={en:"abcdefghijklmnopqrstuvwxyz",ru:"абвгдежзийклмнопрстуфхцчшщъыьэюя"},os={en:"time year people way day man thing woman life child world school state family student group country problem hand part place case week company system program work",ru:"время год человек дело жизнь день рука работа слово место вопрос сторона страна мир случай ребёнок голова система вода друг земля город конец час глаз"},Kt={en:["the quick brown fox jumps","practice makes perfect every day","never stop learning new things","small steps lead to big wins"],ru:["тише едешь дальше будешь","практика путь к мастерству","учись каждый день понемногу","терпение и труд всё перетрут"]},ut=e=>Math.floor(Math.random()*e);function is(e,t){if(e==="alpha_fwd")return Ht[t];if(e==="alpha_rev")return Ht[t].split("").reverse().join("");if(e==="digits"){let r="";for(let n=0;n<30;n++)r+=String(ut(10))+(n%5===4?" ":"");return r.trim()}if(e==="words"){const r=os[t].split(/\s+/),n=[];for(let a=0;a<12;a++)n.push(r[ut(r.length)]);return n.join(" ")}return Kt[t][ut(Kt[t].length)]}let ge={};function ls(){try{ge=JSON.parse(localStorage.getItem("tr_compete")??"{}")||{}}catch{ge={}}}function cs(){try{localStorage.setItem("tr_compete",JSON.stringify(ge))}catch{}}const yn=(e,t)=>`${e}_${t}`;let _="menu",X="alpha_fwd",x=w([""]),Xe=0,Mt=0,se=null,kn="m",S=null,Je=null,Qe=[],kt=!1,Re=!1;function ye(){return L()==="ru"?"ru":"en"}function us(e,t,r){S=e,Je=r,kn=t,ls(),_="menu",Q()}function $n(e){X=e,Mt=0,Xe=0,Re=!1,x=w([is(e,ye())]),_="run",Q()}function ds(e){if(_!=="run"||x.finishedAt!==null)return;if(e.key==="Backspace"){e.preventDefault();return}let t=null;if(e.key==="Enter"?t=`
`:e.key.length===1&&(t=e.key),t===null)return;e.preventDefault(),Xe===0&&(Xe=Date.now());const r=x.pattern[x.pos]??"";t=Oe(t,r);const n=/[а-яё]/i.test(x.pattern),a=fe(x,t,!0);if(r&&r!==" "&&r!==`
`){const o=ot(r,n);o&&it(o,!a.wrong)}a.wrong&&Mt++,a.finished&&ps(),Q()}function ps(){z(x);const e=Date.now()-Xe,t=e/6e4,r=x.pattern.replace(/\s/g,"").length,n=t>0?Math.round(r/5/t):0,a=r+Mt,o=a>0?Math.round(r/a*100):100,i=o===100?n>=60?"🥇":n>=40?"🥈":"🥉":n>=50&&o>=95?"🥈":"🎖",d=yn(X,ye()),u=n>(ge[d]??0)&&o>=90;u&&(ge[d]=n,cs()),Ce(n,o,Date.now()),se={wpm:n,acc:o,ms:e,medal:i,isRecord:u},_="result"}async function vn(){_="board",kt=!0,Qe=[],Q(),Qe=await ss(X,ye()),kt=!1,Q()}async function fs(e){if(!(!se||Re)){Re=!0;try{localStorage.setItem("tr_name",e)}catch{}await rs({name:e,discipline:X,lang:ye(),wpm:se.wpm,accuracy:se.acc,ms:se.ms}),await vn()}}const Tt=e=>e.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);function hs(){let e="";for(let t=0;t<x.pattern.length;t++){const r=x.marks[t],n=t===x.pos?"cur":r===T.CORRECT?"ok":r===T.WRONG?"bad":"pend";e+=`<span class="${n}">${Tt(x.pattern[t])}</span>`}return e}function Q(){S&&(_==="menu"?ms():_==="run"?bs():_==="result"?gs():ys())}function ms(){const e=ye();S.innerHTML=`
    <div class="wrap compete">
      <header class="c-head">
        <h1>🏆 ${s("compete.title")}</h1>
        <button id="cp-exit" class="ghost">${s("course.exit")}</button>
      </header>
      <p class="c-intro">${s("compete.intro")}</p>
      <div class="cp-grid">
        ${as.map(t=>{const r=ge[yn(t,e)]??0;return`<button class="cp-disc" data-d="${t}">
            <span class="cp-name">${s("comp."+t)}</span>
            <span class="cp-best">${r>0?`${s("comp.best")}: ${r} ${s("st.wpm")}`:"—"}</span>
          </button>`}).join("")}
      </div>
    </div>`,S.querySelectorAll("[data-d]").forEach(t=>{t.onclick=()=>$n(t.dataset.d)}),S.querySelector("#cp-exit").onclick=()=>Je==null?void 0:Je()}function bs(){const e=/[а-яё]/i.test(x.pattern),t=L()==="ru"||e;S.innerHTML=`
    <div class="wrap compete">
      <header class="c-head">
        <button id="cp-back" class="ghost">${s("k.back")}</button>
        <span class="c-progress">🏆 ${s("comp."+X)}</span>
        <span class="c-acc">${s("comp.hint")}</span>
      </header>
      <div class="card"><div class="pattern pattern-big" id="pattern">${hs()}</div></div>
      <div class="keyb">${Ne(x.finishedAt===null?x.pattern[x.pos]??null:null,e,t)}</div>
    </div>`,S.querySelector("#cp-back").onclick=()=>{_="menu",Q()}}function gs(){const e=se,t=localStorage.getItem("tr_name")??"",r=kn==="kids";S.innerHTML=`
    <div class="wrap compete">
      <div class="cp-result">
        <div class="cp-medal">${e.medal}</div>
        <h2>${s("comp."+X)}</h2>
        ${e.isRecord?`<div class="cp-record">⭐ ${s("comp.record")}</div>`:""}
        <div class="statsbar">
          <div><b>${e.wpm}</b><span>${s("st.wpm")}</span></div>
          <div><b>${e.acc}%</b><span>${s("st.accuracy")}</span></div>
          <div><b>${(e.ms/1e3).toFixed(1)}s</b><span>${s("st.time")}</span></div>
        </div>
        ${r?"":`
        <div class="cp-publish">
          <input id="cp-name" type="text" value="${Tt(t)}" placeholder="${s("comp.name")}" maxlength="24"/>
          <button id="cp-pub" class="primary" ${Re?"disabled":""}>${Re?"✓":"🌐 "+s("comp.publish")}</button>
        </div>`}
        <div class="donebtns">
          <button id="cp-again">${s("k.again")}</button>
          <button id="cp-board" class="ghost">🌐 ${s("comp.leaderboard")}</button>
          <button id="cp-menu" class="ghost">${s("k.map")}</button>
        </div>
      </div>
    </div>`,S.querySelector("#cp-again").onclick=()=>$n(X),S.querySelector("#cp-menu").onclick=()=>{_="menu",Q()},S.querySelector("#cp-board").onclick=()=>vn();const n=S.querySelector("#cp-pub");n&&(n.onclick=()=>fs(S.querySelector("#cp-name").value.trim()||"—"))}function ys(){const e=ye();S.innerHTML=`
    <div class="wrap compete">
      <header class="c-head">
        <h1>🌐 ${s("comp.leaderboard")}</h1>
        <button id="cp-bback" class="ghost">${s("k.back")}</button>
      </header>
      <p class="c-intro">${s("comp."+X)} · ${e.toUpperCase()}</p>
      ${kt?`<p class="hint2">${s("comp.loading")}</p>`:Qe.length===0?`<p class="hint2">${s("comp.empty")}</p>`:`
        <table class="cp-board">
          <thead><tr><th>#</th><th>${s("comp.player")}</th><th>${s("st.wpm")}</th><th>${s("st.accuracy")}</th></tr></thead>
          <tbody>${Qe.map((t,r)=>`<tr><td>${r+1}</td><td>${Tt(t.name)}</td><td><b>${t.wpm}</b></td><td>${t.accuracy}%</td></tr>`).join("")}</tbody>
        </table>`}
    </div>`,S.querySelector("#cp-bback").onclick=()=>{_=se?"result":"menu",Q()}}let A=Gn(),At=[],ee="abandon",M=[],$=0,h=w([""]),et=!1,Lt=!0,Pe=!0,Rt=!0,tt=localStorage.getItem("tr_heat")==="1",Me=localStorage.getItem("tr_dark")==="1",m=null,b=null,Pt="",W=null,q=localStorage.getItem("tr_flow")==="1",K={typed:0,errors:0,ms:0,count:0};function ks(){K={typed:0,errors:0,ms:0,count:0}}let l=null;function nt(){const e=l&&l.phase==="run"?z(h):{typed:0,errors:0},t=((l==null?void 0:l.typed)??0)+e.typed,r=((l==null?void 0:l.errors)??0)+e.errors,n=l?l.durMin*6e4-Math.max(0,l.endAt-Date.now()):0,a=Math.max(n/6e4,1/600),o=Math.round((t+r)/5/a),i=Math.round(t/5/a),d=t+r,u=d>0?Math.round(t/d*100):100;return{typed:t,errors:r,gross:o,net:i,accuracy:u,elapsedMs:n}}function $s(e,t,r){const a=[...Jt(At,"abandon")].sort(()=>Math.random()-.5);l={phase:"run",durMin:e,target:t,name:r,endAt:Date.now()+e*6e4,typed:0,errors:0,count:0,pool:a,pi:0,timer:null};try{localStorage.setItem("tr_name",r)}catch{}h=w([a[0].lines.join(" ")]),l.timer=window.setInterval(()=>{if(!(!l||l.phase!=="run")){if(Date.now()>=l.endAt){wn();return}Ts()}},250),f()}function wn(){if(!l)return;const e=z(h);l.typed+=e.typed,l.errors+=e.errors,l.timer&&(clearInterval(l.timer),l.timer=null),l.phase="result";const t=nt();Ce(t.net,t.accuracy,Date.now()),f()}function Gt(){l!=null&&l.timer&&clearInterval(l.timer),l=null,te()}let v={bestWpm:0,bestAcc:0,done:[],lastIdx:0};function vs(e){try{const t=JSON.parse(localStorage.getItem(`tr_progress_${e}`)??"");if(t&&Array.isArray(t.done))return{bestWpm:t.bestWpm|0,bestAcc:t.bestAcc|0,done:t.done,lastIdx:t.lastIdx|0}}catch{}return{bestWpm:0,bestAcc:0,done:[],lastIdx:0}}function Ot(){try{localStorage.setItem(`tr_progress_${ee}`,JSON.stringify(v))}catch{}}function ws(e){const t=z(h);t.wpm>v.bestWpm&&(v.bestWpm=t.wpm),t.accuracy>v.bestAcc&&(v.bestAcc=t.accuracy),v.done.includes(e.id)||v.done.push(e.id),Ot()}function xn(){const e=z(h);if(!q)return e;const t=K.typed+e.typed,r=K.errors+e.errors,n=K.ms+e.elapsedMs,a=n/6e4,o=a>0?Math.round(t/5/a):0,i=t+r;return{typed:t,errors:r,elapsedMs:n,wpm:o,accuracy:i>0?Math.round(t/i*100):100}}let ke=null;function Ft(){if(Lt)try{ke??(ke=new AudioContext);const e=ke.createOscillator(),t=ke.createGain();e.frequency.value=220,e.type="square",t.gain.value=.06,e.connect(t),t.connect(ke.destination),e.start(),e.stop(ke.currentTime+.07)}catch{}}const C=document.getElementById("app");let ue=!1,rt=!1,De=!1,Te=!1,We=!1,st=!1,He=!1;function Sn(){return/[а-яё]/i.test(h.pattern)}function xs(e){return L()==="ru"||e}function En(){Me?document.documentElement.dataset.theme="dark":delete document.documentElement.dataset.theme}function In(){return`<select id="lang" title="Language">
    <option value="ru" ${L()==="ru"?"selected":""}>RU</option>
    <option value="en" ${L()==="en"?"selected":""}>EN</option>
  </select>`}function Mn(e){const t=document.getElementById("lang");t&&(t.onchange=()=>{Fn(t.value),e()})}function Ss(){return b==="weak"?{id:"weak",bank:ee,title:s("weak.title"),lines:Ae}:b==="custom"?{id:"custom",bank:ee,title:s("custom.title"),lines:ae}:M[$]??null}let Ae=[],ae=[];function f(){if(A===null){ue=!1,Pn();return}if(Te){We||(We=!0,Vr(C,A??"m",()=>{Te=!1,We=!1,f()}));return}if(We=!1,st){He||(He=!0,us(C,A??"m",()=>{st=!1,He=!1,f()}));return}if(He=!1,A==="kids"){ue||(ue=!0,cr(C,()=>{ue=!1,A=null,$t(null),f()},()=>{ue=!1,Te=!0,f()}));return}if(ue=!1,rt){De||(De=!0,jr(C,()=>{rt=!1,De=!1,f()}));return}if(De=!1,l){Ms();return}const e=Ss(),t=xn(),r=b!==null;C.innerHTML=`
    <div class="wrap">
      <header>
        <h1>Type<span>RIGHT</span>ing</h1>
        <div class="headctl">
          <select id="bank">
            ${Bn.map(n=>`<option value="${n}" ${n===ee&&!r?"selected":""}>${s("bank."+n)}</option>`).join("")}
          </select>
          <select id="profile" title="Profile">
            ${Object.keys(Ze).map(n=>`<option value="${n}" ${n===A?"selected":""}>${Ze[n]} ${s("profile."+n)}</option>`).join("")}
          </select>
          <button id="dark" class="iconbtn" title="${s("tb.dark")}">${Me?"☀️":"🌙"}</button>
          ${In()}
        </div>
      </header>
      <p class="bankdesc">${r?b==="weak"?s("weak.hint"):"":s("bank."+ee+".desc")} ${r?"":`· <b>${M.length}</b> ${s("st.exercises")} · ${s("st.done")} <b>${v.done.length}</b>${v.bestWpm>0?` · ${s("st.record")} <b>${v.bestWpm}</b> ${s("st.wpm")} · <b>${v.bestAcc}%</b>`:""}`}</p>

      <div class="toolbar">
        <label><input type="checkbox" id="hide" ${et?"checked":""}/> ${s("tb.hide")}</label>
        <label><input type="checkbox" id="sound" ${Lt?"checked":""}/> ${s("tb.sound")}</label>
        <label><input type="checkbox" id="block" ${Pe?"checked":""}/> ${s("tb.block")}</label>
        <label><input type="checkbox" id="keyb" ${Rt?"checked":""}/> ${s("tb.keyb")}</label>
        <label title="errRate"><input type="checkbox" id="heat" ${tt?"checked":""}/> ${s("tb.heat")}</label>
        <label title="Stamina-style"><input type="checkbox" id="flow" ${q?"checked":""}/> ${s("tb.flow")}</label>
        <span class="spacer"></span>
        <button id="prev" class="ghost">${s("tb.prev")}</button>
        <span class="counter">${r?"•":`${$+1} / ${M.length}`}</span>
        <button id="next" class="ghost">${s("tb.next")}</button>
      </div>

      <div class="toolbar toolbar2">
        <button id="learn" class="ghost">${s("tb.learn")}</button>
        <button id="compete" class="ghost">${s("tb.compete")}</button>
        <button id="course" class="ghost">${s("tb.course")}</button>
        <button id="weak" class="ghost ${b==="weak"?"on":""}">${s("tb.weak")}</button>
        <button id="custom" class="ghost ${b==="custom"?"on":""}">${s("tb.custom")}</button>
        <button id="progress" class="ghost">${s("tb.progress")}</button>
        <button id="exam" class="ghost">⏱ ${s("tb.exam")}</button>
      </div>

      <div class="card">
        <div class="exhead">
          <span class="extitle">${le((e==null?void 0:e.title)??"")}</span>
          ${e!=null&&e.hint?`<span class="exhint">${le(e.hint)}</span>`:""}
        </div>
        <div class="pattern ${et?"hidden":""}" id="pattern">${Rn()}</div>
      </div>

      ${An()}

      <div class="statsbar">${Ln(t)}</div>

      ${h.finishedAt!==null?Is(t):`<p class="hint2">${b==="weak"&&Ae.length&&Tn?s("weak.none"):s(q?"hint.flow":"hint.type")} ${s(Pe?"hint.block":"hint.bs")}</p>`}
    </div>
    ${W?Es():""}
  `,Rs()}let Tn=!1;function An(){if(!Rt)return"";const e=Sn(),t=tt&&cn()?ln():null;return`<div class="keyb">${Ne(h.finishedAt===null?h.pattern[h.pos]??null:null,e,xs(e),t)}</div>
    ${t?'<p class="heat-legend"><i class="g">освоено</i> · <i class="r">слабые клавиши</i></p>':""}`}function Ln(e){return`
    <div><b>${e.wpm}</b><span>${s("st.wpm")}</span></div>
    <div><b>${e.accuracy}%</b><span>${s("st.accuracy")}</span></div>
    <div><b class="${e.errors>0?"err":""}">${e.errors}</b><span>${s("st.errors")}</span></div>
    <div><b>${(e.elapsedMs/1e3).toFixed(0)}s</b><span>${s("st.time")}</span></div>
    ${q?`<div><b>🔥 ${K.count}</b><span>${s("st.streak")}</span></div>`:""}`}function le(e){return e.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t])}function Rn(){if(et)return`<span class="hidden-note">${s("hint.hidden")}</span>`;let e="";for(let t=0;t<h.pattern.length;t++){const r=h.pattern[t],n=h.marks[t],a=t===h.pos?"cur":n===T.CORRECT?"ok":n===T.WRONG?"bad":"pend";r===`
`?e+=`<span class="${a} nl">↵</span><br/>`:e+=`<span class="${a}">${le(r)}</span>`}return e}function Es(){if(W==="custom")return`<div class="modal-bg" id="modal-bg"><div class="modal">
      <h2>${s("custom.title")}</h2>
      <textarea id="custom-ta" placeholder="${s("custom.ph")}">${le(Pt)}</textarea>
      <div class="donebtns">
        <button id="custom-cancel" class="ghost">${s("custom.cancel")}</button>
        <button id="custom-go" class="primary">${s("custom.start")}</button>
      </div>
    </div></div>`;const e=wr();return`<div class="modal-bg" id="modal-bg"><div class="modal">
    <h2>${s("prog.title")}</h2>
    ${e||`<p class="hint2">${s("prog.empty")}</p>`}
    <div class="donebtns"><button id="prog-close" class="primary">${s("prog.close")}</button></div>
  </div></div>`}function Pn(){C.innerHTML=`
    <div class="wrap onboard">
      <div class="ob-lang">${In()}</div>
      <h1 class="ob-title">Type<span>RIGHT</span>ing</h1>
      <p class="ob-sub">${s("ob.sub")}</p>
      <div class="ob-cards">
        ${Object.keys(Ze).map(e=>`
          <button class="ob-card" data-profile-pick="${e}">
            <span class="ob-emoji">${Ze[e]}</span>
            <span class="ob-name">${s("profile."+e)}</span>
            <span class="ob-desc">${s("profile."+e+".desc")}</span>
          </button>`).join("")}
      </div>
      <p class="ob-note">${s("ob.note")}</p>
    </div>`,C.querySelectorAll("[data-profile-pick]").forEach(e=>{e.onclick=()=>{A=e.dataset.profilePick,rn(A),f()}}),Mn(()=>Pn())}function Is(e){return`
    <div class="done">
      <h2>${s(A==="f"?"done.title.f":"done.title")}</h2>
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
    </div>`}function Ms(){if(!l)return;if(l.phase==="setup"){const r=localStorage.getItem("tr_name")??"";C.innerHTML=`
      <div class="wrap"><div class="exam-setup">
        <h2>⏱ ${s("ex.title")}</h2>
        <p class="ex-desc">${s("ex.desc")}</p>
        <div class="ex-form">
          <label>${s("ex.duration")}:
            <select id="ex-dur"><option value="1">1 ${s("ex.min")}</option><option value="5">5 ${s("ex.min")}</option><option value="10" selected>10 ${s("ex.min")}</option></select>
          </label>
          <label>${s("ex.target")}: <input id="ex-target" type="number" value="35" min="5" max="120"/></label>
          <label>${s("ex.name")}: <input id="ex-name" type="text" value="${le(r)}" placeholder="—"/></label>
        </div>
        <div class="donebtns">
          <button id="ex-cancel" class="ghost">${s("ex.cancel")}</button>
          <button id="ex-go" class="primary">${s("ex.start")}</button>
        </div>
      </div></div>`,document.getElementById("ex-go").onclick=()=>{const n=Number(document.getElementById("ex-dur").value),a=Number(document.getElementById("ex-target").value)||35,o=document.getElementById("ex-name").value.trim();$s(n,a,o)},document.getElementById("ex-cancel").onclick=()=>Gt();return}if(l.phase==="run"){const r=l.pool[l.pi],n=nt();C.innerHTML=`
      <div class="wrap">
        <div class="exam-hud">
          <span class="ex-timer" id="ex-timer">${On(Math.max(0,l.endAt-Date.now()))}</span>
          <span class="ex-hudstats" id="ex-hudstats">${s("ex.net")} <b>${n.net}</b> · ${s("st.accuracy")} <b>${n.accuracy}%</b> · ${s("ex.target.short")} ${l.target}</span>
          <button id="ex-stop" class="ghost">${s("ex.cancel")}</button>
        </div>
        <div class="card"><div class="exhead"><span class="extitle">${le((r==null?void 0:r.title)??"")}</span></div>
          <div class="pattern" id="pattern">${Rn()}</div></div>
        ${An()}
      </div>`,document.getElementById("ex-stop").onclick=()=>wn();return}const e=nt(),t=e.net>=l.target;C.innerHTML=`
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
    </div></div>`,document.getElementById("ex-cert").onclick=()=>As(e,t),document.getElementById("ex-retry").onclick=()=>{l.phase="setup",f()},document.getElementById("ex-exit").onclick=()=>Gt()}function On(e){const t=Math.ceil(e/1e3);return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`}function Ts(){if(!l||l.phase!=="run")return;const e=document.getElementById("ex-timer"),t=document.getElementById("ex-hudstats");if(!e||!t)return;const r=nt();e.textContent=On(Math.max(0,l.endAt-Date.now())),t.innerHTML=`${s("ex.net")} <b>${r.net}</b> · ${s("st.accuracy")} <b>${r.accuracy}%</b> · ${s("ex.target.short")} ${l.target}`}function As(e,t){if(!l)return;const r=document.createElement("canvas");r.width=1200,r.height=850;const n=r.getContext("2d");n.fillStyle="#faf7f0",n.fillRect(0,0,1200,850),n.strokeStyle="#b9962e",n.lineWidth=6,n.strokeRect(30,30,1140,790),n.lineWidth=1.5,n.strokeRect(44,44,1112,762),n.fillStyle="#2a2a33",n.textAlign="center",n.font="700 28px Georgia, serif",n.fillText("TypeRIGHTing",600,110),n.font="800 64px Georgia, serif",n.fillStyle="#b9962e",n.fillText(s("ex.cert.title"),600,200),n.font="400 26px Georgia, serif",n.fillStyle="#555",n.fillText(s("ex.cert.sub"),600,240),n.font="700 52px Georgia, serif",n.fillStyle="#2a2a33",n.fillText(l.name||"—",600,350),n.font="800 110px Georgia, serif",n.fillStyle=t?"#2f7d4f":"#b3443a",n.fillText(`${e.net} ${s("ex.net")}`,600,500),n.font="400 30px Georgia, serif",n.fillStyle="#444",n.fillText(`${s("ex.gross")}: ${e.gross}   ·   ${s("st.accuracy")}: ${e.accuracy}%   ·   ${l.durMin} ${s("ex.min")}`,600,570),n.font="700 36px Georgia, serif",n.fillStyle=t?"#2f7d4f":"#b3443a",n.fillText(t?`✔ ${s("ex.pass")}`:`✘ ${s("ex.fail")}`,600,650),n.font="400 22px Georgia, serif",n.fillStyle="#777",n.fillText(`${s("ex.cert.date")}: ${new Date().toLocaleDateString()}`,600,740);const a=document.createElement("a");a.download=`TypeRIGHTing-test-${e.net}wpm.png`,a.href=r.toDataURL("image/png"),a.click()}function at(){b="weak",l=null,Ae=vr(L()==="ru"?"ru":"en"),Tn=!cn(3),h=w(q?[Ae.join(" ")]:Ae),m&&(clearInterval(m),m=null),f()}function zt(e){Pt=e,ae=e.split(/\r?\n/).map(t=>t.trimEnd()).filter(t=>t.length>0),ae.length!==0&&(b="custom",l=null,W=null,h=w(q?[ae.join(" ")]:ae),m&&(clearInterval(m),m=null),f())}function Ls(){b=null,Nt()}function Rs(){document.getElementById("bank").onchange=i=>{b=null,ee=i.target.value,Nt()},document.getElementById("profile").onchange=i=>{A=i.target.value,rn(A),f()},document.getElementById("dark").onclick=()=>{Me=!Me;try{localStorage.setItem("tr_dark",Me?"1":"0")}catch{}En(),f()},Mn(()=>f()),document.getElementById("hide").onchange=i=>{et=i.target.checked,f()},document.getElementById("sound").onchange=i=>{Lt=i.target.checked},document.getElementById("block").onchange=i=>{Pe=i.target.checked},document.getElementById("keyb").onchange=i=>{Rt=i.target.checked,f()},document.getElementById("heat").onchange=i=>{tt=i.target.checked;try{localStorage.setItem("tr_heat",tt?"1":"0")}catch{}f()},document.getElementById("flow").onchange=i=>{q=i.target.checked;try{localStorage.setItem("tr_flow",q?"1":"0")}catch{}ks(),b?b==="weak"?at():zt(Pt):te()},document.getElementById("learn").onclick=()=>{b=null,l=null,Te=!0,m&&(clearInterval(m),m=null),f()},document.getElementById("compete").onclick=()=>{b=null,l=null,st=!0,m&&(clearInterval(m),m=null),f()},document.getElementById("course").onclick=()=>{b=null,l=null,rt=!0,m&&(clearInterval(m),m=null),f()},document.getElementById("weak").onclick=()=>{b==="weak"?Ls():at()},document.getElementById("custom").onclick=()=>{W="custom",f()},document.getElementById("progress").onclick=()=>{W="progress",f()},document.getElementById("exam").onclick=()=>{b=null,l={phase:"setup",durMin:10,target:35,name:"",endAt:0,typed:0,errors:0,count:0,pool:[],pi:0,timer:null},m&&(clearInterval(m),m=null),f()},document.getElementById("prev").onclick=()=>{if(b){Ke();return}$=($-1+M.length)%M.length,te()},document.getElementById("next").onclick=()=>{if(b){Ke();return}$=($+1)%M.length,te()};const e=document.getElementById("again");e&&(e.onclick=()=>{b?Ke(!0):te()});const t=document.getElementById("nextdone");t&&(t.onclick=()=>{if(b){Ke();return}$=($+1)%M.length,te()});const r=document.getElementById("modal-bg");r&&(r.onclick=i=>{i.target===r&&(W=null,f())});const n=document.getElementById("custom-go");n&&(n.onclick=()=>zt(document.getElementById("custom-ta").value));const a=document.getElementById("custom-cancel");a&&(a.onclick=()=>{W=null,f()});const o=document.getElementById("prog-close");o&&(o.onclick=()=>{W=null,f()})}function Ke(e=!1){if(b==="weak"&&!e){at();return}if(b==="weak"){at();return}h=w(q?[ae.join(" ")]:ae),f()}function Nt(){M=Jt(At,ee),v=vs(ee),$=Math.min(Math.max(v.lastIdx,0),Math.max(M.length-1,0)),te()}function Nn(e){return w(e?q?[e.lines.join(" ")]:e.lines:[""])}function te(){h=Nn(M[$]),m&&(clearInterval(m),m=null),v.lastIdx!==$&&(v.lastIdx=$,Ot()),f()}document.addEventListener("keydown",e=>{var i;const t=(i=e.target)==null?void 0:i.tagName;if(t==="SELECT"||t==="INPUT"||t==="TEXTAREA")return;if(W){e.key==="Escape"&&(W=null,f());return}if(rt){Cr(e);return}if(Te){Qr(e);return}if(st){ds(e);return}if(A==="kids"){ur(e);return}if(l&&l.phase!=="run"||h.finishedAt!==null)return;if(e.key==="Backspace"){e.preventDefault(),(l||!Pe)&&(qn(h),f());return}let r=null;if(e.key==="Enter"?r=`
`:e.key.length===1&&(r=e.key),r===null)return;e.preventDefault();const n=h.pattern[h.pos]??"";r=Oe(r,n);const a=Sn();if(l){const d=fe(h,r,!1);if(Ut(n,d.wrong,a),d.wrong&&Ft(),d.finished){const u=z(h);l.typed+=u.typed,l.errors+=u.errors,l.count++,l.pi=(l.pi+1)%l.pool.length,h=w([l.pool[l.pi].lines.join(" ")])}f();return}h.startedAt===null&&!m&&(m=window.setInterval(()=>{h.finishedAt===null&&Ps()},250));const o=fe(h,r,Pe);if(Ut(n,o.wrong,a),o.wrong&&Ft(),o.finished){const d=z(h);if(q&&!b){const u=M[$];K.typed+=d.typed,K.errors+=d.errors,K.ms+=d.elapsedMs,K.count++,u&&!v.done.includes(u.id)&&v.done.push(u.id),$=($+1)%M.length,v.lastIdx=$,Ot(),h=Nn(M[$])}else if(m&&(clearInterval(m),m=null),Ce(d.wpm,d.accuracy,Date.now()),!b){const u=M[$];u&&ws(u)}}f()});function Ut(e,t,r){if(!e||e===`
`||e===" ")return;const n=ot(e,r);n&&it(n,!t)}function Ps(){const e=document.querySelector(".statsbar");e&&(e.innerHTML=Ln(xn()))}$t(A);En();_n().then(e=>{At=e,Nt()}).catch(e=>{C.innerHTML=`<div class="wrap"><p class="err">${s("err.load")}: ${le(String(e))}</p></div>`});
