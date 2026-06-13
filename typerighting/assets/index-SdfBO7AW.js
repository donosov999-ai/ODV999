(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=r(a);fetch(a.href,o)}})();const Dn=["abandon","engRus","letterByLetter","poemHymn"];let _e=null;async function Wn(){return _e||(_e=await(await fetch("content/exercises.json")).json(),_e)}function tn(e,t){return e.filter(r=>r.bank===t)}const T={PENDING:0,CORRECT:1,WRONG:2};function w(e){const t=e.join(`
`);return{pattern:t,pos:0,errors:0,startedAt:null,finishedAt:null,marks:new Uint8Array(t.length)}}function he(e,t,r){if(e.finishedAt!==null)return{accepted:!1,wrong:!1,finished:!0};e.startedAt===null&&(e.startedAt=Date.now());const n=e.pattern[e.pos];if((t==="\r"?`
`:t)===n){e.marks[e.pos]=T.CORRECT,e.pos++;const d=e.pos>=e.pattern.length;return d&&(e.finishedAt=Date.now()),{accepted:!0,wrong:!1,finished:d}}if(e.errors++,r)return{accepted:!1,wrong:!0,finished:!1};e.marks[e.pos]=T.WRONG,e.pos++;const l=e.pos>=e.pattern.length;return l&&(e.finishedAt=Date.now()),{accepted:!0,wrong:!0,finished:l}}function Hn(e){e.finishedAt===null&&e.pos>0&&(e.pos--,e.marks[e.pos]=T.PENDING)}function z(e){const t=e.finishedAt??Date.now(),r=e.startedAt?t-e.startedAt:0;let n=0;for(let c=0;c<e.pos;c++)e.marks[c]===T.CORRECT&&n++;const a=r/6e4,o=a>0?Math.round(n/5/a):0,l=n+e.errors,d=l>0?Math.round(n/l*100):100;return{typed:n,errors:e.errors,elapsedMs:r,wpm:o,accuracy:d}}const nn=[[{id:"tilde",u:1,en:"~",en2:"`",ru:"Ё"},{id:"d1",u:1,en:"1",en2:"!"},{id:"d2",u:1,en:"2",en2:"@"},{id:"d3",u:1,en:"3",en2:"#"},{id:"d4",u:1,en:"4",en2:"$"},{id:"d5",u:1,en:"5",en2:"%"},{id:"d6",u:1,en:"6",en2:"^"},{id:"d7",u:1,en:"7",en2:"&"},{id:"d8",u:1,en:"8",en2:"*"},{id:"d9",u:1,en:"9",en2:"("},{id:"d0",u:1,en:"0",en2:")"},{id:"minus",u:1,en:"-",en2:"_"},{id:"equal",u:1,en:"=",en2:"+"},{id:"backslash",u:1,en:"\\",en2:"|"},{id:"backspace",u:1.6,label:"←"}],[{id:"tab",u:1.5,label:"Tab"},{id:"q",u:1,en:"Q",ru:"Й"},{id:"w",u:1,en:"W",ru:"Ц"},{id:"e",u:1,en:"E",ru:"У"},{id:"r",u:1,en:"R",ru:"К"},{id:"t",u:1,en:"T",ru:"Е"},{id:"y",u:1,en:"Y",ru:"Н"},{id:"u",u:1,en:"U",ru:"Г"},{id:"i",u:1,en:"I",ru:"Ш"},{id:"o",u:1,en:"O",ru:"Щ"},{id:"p",u:1,en:"P",ru:"З"},{id:"lbracket",u:1,en:"[",en2:"{",ru:"Х"},{id:"rbracket",u:1,en:"]",en2:"}",ru:"Ъ"},{id:"enterpad2",u:1.45}],[{id:"caps",u:1.9,label:"Caps Lock"},{id:"a",u:1,en:"A",ru:"Ф"},{id:"s",u:1,en:"S",ru:"Ы"},{id:"d",u:1,en:"D",ru:"В"},{id:"f",u:1,en:"F",ru:"А"},{id:"g",u:1,en:"G",ru:"П"},{id:"h",u:1,en:"H",ru:"Р"},{id:"j",u:1,en:"J",ru:"О"},{id:"k",u:1,en:"K",ru:"Л"},{id:"l",u:1,en:"L",ru:"Д"},{id:"semi",u:1,en:";",en2:":",ru:"Ж"},{id:"quote",u:1,en:"'",en2:'"',ru:"Э"},{id:"enterpad3",u:1.45}],[{id:"lshift",u:2.3,label:"Shift"},{id:"z",u:1,en:"Z",ru:"Я"},{id:"x",u:1,en:"X",ru:"Ч"},{id:"c",u:1,en:"C",ru:"С"},{id:"v",u:1,en:"V",ru:"М"},{id:"b",u:1,en:"B",ru:"И"},{id:"n",u:1,en:"N",ru:"Т"},{id:"m",u:1,en:"M",ru:"Ь"},{id:"comma",u:1,en:",",en2:"<",ru:"Б"},{id:"period",u:1,en:".",en2:">",ru:"Ю"},{id:"slash",u:1,en:"/",en2:"?"},{id:"rshift",u:1.2,label:"Shift"},{id:"rept",u:1.2,label:"Rept"}],[{id:"lctrl",u:1.3,label:"Ctrl"},{id:"blank1",u:1.1},{id:"lalt",u:1.3,label:"Alt"},{id:"space",u:6.8,label:""},{id:"ralt",u:1.3,label:"Alt"},{id:"blank2",u:1.1},{id:"rctrl",u:1.3,label:"Ctrl"}]],rn=[["a","q"],["a","z"],["s","w"],["s","x"],["d","e"],["d","c"],["f","r"],["f","t"],["f","g"],["f","v"],["f","b"],["f","d5"],["j","y"],["j","u"],["j","h"],["j","n"],["j","m"],["j","d6"],["j","d7"],["k","i"],["k","comma"],["k","d8"],["l","o"],["l","period"],["semi","p"],["semi","lbracket"],["semi","rbracket"],["semi","quote"],["semi","slash"]],sn={};for(const[e,t]of rn)sn[t]=e;const pt=new Set(["tilde","d1","d2","d3","d4","d5","tab","q","w","e","r","t","caps","a","s","d","f","g","lshift","z","x","c","v","b"]),Ye=920,Wt=380,ct=12,Ht=6,Kt=60,Kn=70,Gn=14,N={};{nn.forEach((n,a)=>{const o=n.reduce((c,p)=>c+p.u,0),l=(Ye-2*ct-Ht*(n.length-1))/o;let d=ct;for(const c of n){const p=c.u*l;N[c.id]={...c,x:d,y:Gn+a*Kn,w:p,h:Kt},d+=p+Ht}});const e=N.enterpad2,t=N.enterpad3,r=Math.min(e.x,t.x);N.enter={id:"enter",u:0,label:"Enter",x:r,y:e.y,w:Ye-ct-r,h:t.y+Kt-e.y},delete N.enterpad2,delete N.enterpad3}const H={},D={};{const e=(t,r,n,a)=>{t[r]={id:n,shift:a}};for(const t of Object.values(N))t.en&&(/^[A-Z]$/.test(t.en)?(e(H,t.en.toLowerCase(),t.id,!1),e(H,t.en,t.id,!0)):(e(H,t.en,t.id,!1),t.en2&&e(H,t.en2,t.id,!0))),t.ru&&/^[А-ЯЁ]$/.test(t.ru)&&(e(D,t.ru.toLowerCase(),t.id,!1),e(D,t.ru,t.id,!0));e(D,".","slash",!1),e(D,",","slash",!0);for(const t of[H,D])e(t," ","space",!1),e(t,`
`,"enter",!1);for(const[t,r]of Object.entries(H))!(t in D)&&!/[a-zA-Z.,]/.test(t)&&(D[t]=r)}const an={},on={};for(const e of nn)for(const t of e)t.en&&t.ru&&/^[A-Z]$/.test(t.en)&&/^[А-ЯЁ]$/.test(t.ru)&&(an[t.en.toLowerCase()]=t.ru.toLowerCase(),on[t.ru.toLowerCase()]=t.en.toLowerCase());function Oe(e,t){if(e.length!==1||t.length!==1)return e;const r=e.toLowerCase();let n;return/[а-яё]/i.test(t)&&/[a-z]/.test(r)?n=an[r]:/[a-z]/i.test(t)&&/[а-яё]/.test(r)&&(n=on[r]),n?e===r?n:n.toUpperCase():e}function ln(e,t){return/[а-яё]/i.test(e)?D[e]??null:/[a-z]/i.test(e)?H[e]??null:(t?D[e]:H[e])??(t?H[e]:D[e])??null}function wt(e){const t=[];for(const r of Object.values(N)){const n=e==="en"?r.en:r.ru;n&&/^[A-Za-zА-Яа-яЁё]$/.test(n)&&t.push({id:r.id,ch:n.toLowerCase()})}return t}function lt(e,t){var r;return((r=ln(e,t))==null?void 0:r.id)??null}function Fn(e,t){return wt(e).filter(({id:r})=>t==="left"?pt.has(r):!pt.has(r)).map(({ch:r})=>r)}const qe=e=>e.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),ft=e=>e.x+e.w/2,ht=e=>e.y+e.h/2;function zn(e,t){const r=ft(e),n=ht(e),a=ft(t),o=ht(t),l=(r+a)/2,d=(n+o)/2,c=a-r,p=o-n,u=Math.hypot(c,p)||1,g=Math.min(18,u*.18)*(c>=0?1:-1),R=l-p/u*g,ce=d+c/u*g,U=1-16/u,P=r+c*U,J=n+p*U;return`M ${r.toFixed(1)} ${n.toFixed(1)} Q ${R.toFixed(1)} ${ce.toFixed(1)} ${P.toFixed(1)} ${J.toFixed(1)}`}function je(e,t,r=!0,n=null){const a=e!==null?ln(e,t):null,o=(a==null?void 0:a.id)??null,l=o?sn[o]??null:null;let d=null;a!=null&&a.shift&&o&&(d=pt.has(o)?"rshift":"lshift");const c=[];for(const u of Object.values(N)){const g=["key"];u.id===o&&g.push("key-next"),u.id===d&&g.push("key-shift"),u.id===l&&g.push("key-home");const R=(u.x+4).toFixed(1),ce=u.y+3,U=(u.w-8).toFixed(1),P=u.h-10;if(c.push(`<g class="${g.join(" ")}" data-key="${u.id}">`,`<rect class="key-base" x="${u.x}" y="${u.y}" width="${u.w.toFixed(1)}" height="${u.h}" rx="9"/>`,`<rect class="key-face" x="${R}" y="${ce}" width="${U}" height="${P}" rx="6"/>`),n&&u.id in n){const J=n[u.id],_n=J<=0?"34,197,94":"217,58,58",qn=J<=0?.22:(.2+.6*Math.min(J,1)).toFixed(2);c.push(`<rect x="${R}" y="${ce}" width="${U}" height="${P}" rx="6" fill="rgb(${_n})" opacity="${qn}"/>`)}u.label!==void 0?c.push(`<text class="key-fn" x="${ft(u).toFixed(1)}" y="${(ht(u)+4).toFixed(1)}" text-anchor="middle">${qe(u.label)}</text>`):(u.en2&&c.push(`<text class="key-en2" x="${(u.x+12).toFixed(1)}" y="${u.y+22}">${qe(u.en2)}</text>`),u.en&&c.push(`<text class="key-en" x="${(u.x+12).toFixed(1)}" y="${u.y+(u.en2?46:38)}">${qe(u.en)}</text>`),u.ru&&r&&c.push(`<text class="key-ru" x="${(u.x+u.w-12).toFixed(1)}" y="${u.y+u.h-14}" text-anchor="end">${qe(u.ru)}</text>`)),c.push("</g>")}const p=rn.map(([u,g])=>{const R=g===o&&u===(l??"");return`<path class="arr${R?" arr-active":""}" d="${zn(N[u],N[g])}" marker-end="url(#arrhead${R?"-a":""})"/>`}).join("");return`<svg class="kbsvg${o?" has-target":""}" viewBox="0 0 ${Ye} ${Wt}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Схема клавиатуры: красные стрелки — правильное направление движения пальцев от домашнего ряда">
    <defs>
      <marker id="arrhead" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" class="arrhead"/></marker>
      <marker id="arrhead-a" markerWidth="8" markerHeight="8" refX="5.5" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" class="arrhead-a"/></marker>
    </defs>
    <rect class="kb-bg" x="0" y="0" width="${Ye}" height="${Wt}" rx="14"/>
    ${c.join("")}
    ${p}
  </svg>`}const Ze={m:"⌨️",f:"🌸",kids:"🐱"},cn="tr_profile";function Un(){const e=localStorage.getItem(cn);return e==="m"||e==="f"||e==="kids"?e:null}function un(e){try{localStorage.setItem(cn,e)}catch{}xt(e)}function xt(e){e?document.documentElement.dataset.profile=e:delete document.documentElement.dataset.profile}let St=localStorage.getItem("tr_lang")==="en"?"en":"ru";function L(){return St}function Jn(e){St=e;try{localStorage.setItem("tr_lang",e)}catch{}}const Yn={"ob.sub":{ru:"Тренажёр слепой печати. Для кого настроить?",en:"Touch typing trainer. Who is it for?"},"ob.note":{ru:"Профиль можно сменить в любой момент в шапке.",en:"You can switch the profile any time in the header."},"profile.m":{ru:"Мужской",en:"Classic"},"profile.f":{ru:"Женский",en:"Soft"},"profile.kids":{ru:"Детский",en:"Kids"},"profile.m.desc":{ru:"Светлая тема, скорость и рекорды",en:"Light theme, speed and records"},"profile.f.desc":{ru:"Светлая тёплая тема, мягкий темп",en:"Warm light theme, gentle pace"},"profile.kids.desc":{ru:"Игра: уровни, звёзды и котик",en:"Game: levels, stars and a cat"},"bank.abandon":{ru:"Слова в предложениях",en:"Words in sentences"},"bank.engRus":{ru:"Англ↔Рус (с переводом)",en:"EN words + RU hints"},"bank.letterByLetter":{ru:"По буквам (наращивание)",en:"Letter by letter"},"bank.poemHymn":{ru:"Стихи и гимны",en:"Poems & hymns"},"bank.abandon.desc":{ru:"Печатай предложение с новым словом — словарный запас + скорость.",en:"Type a sentence with a new word — vocabulary + speed."},"bank.engRus.desc":{ru:"Слово с переводом + предложение. Перевод-подсказка над образцом.",en:"A word with RU translation + a sentence to type."},"bank.letterByLetter.desc":{ru:"Слово печатается по нарастающей: a, ab, aba… — постановка пальцев.",en:"Build the word up: a, ab, aba… — finger placement."},"bank.poemHymn.desc":{ru:"Стихи и гимны по строфам (4–8 строк) — ритм и выносливость печати.",en:"Poems & hymns by stanza (4–8 lines) — rhythm and stamina."},"tb.hide":{ru:"Спрятать образец",en:"Hide pattern"},"tb.sound":{ru:"Звук ошибки",en:"Error sound"},"tb.block":{ru:"Блок при ошибке",en:"Block on error"},"tb.keyb":{ru:"Клавиатура",en:"Keyboard"},"tb.flow":{ru:"Поток",en:"Flow"},"tb.heat":{ru:"Тепловая карта",en:"Heatmap"},"tb.exam":{ru:"Тест",en:"Test"},"tb.weak":{ru:"🎯 Слабые клавиши",en:"🎯 Weak keys"},"tb.custom":{ru:"✎ Свой текст",en:"✎ Custom text"},"tb.progress":{ru:"📈 Прогресс",en:"📈 Progress"},"tb.course":{ru:"📚 Курс",en:"📚 Course"},"tb.learn":{ru:"🤖 AI-обучение",en:"🤖 AI training"},"tb.compete":{ru:"🏆 Соревнование",en:"🏆 Compete"},"compete.title":{ru:"Тест-соревнование",en:"Typing Compete"},"compete.intro":{ru:"Выбери дисциплину и поставь рекорд. Результат можно опубликовать в онлайн-таблице.",en:"Pick a discipline and set a record. Publish your result to the online leaderboard."},"comp.alpha_fwd":{ru:"Алфавит А→Я",en:"Alphabet A→Z"},"comp.alpha_rev":{ru:"Алфавит Я→А",en:"Alphabet Z→A"},"comp.words":{ru:"Слова",en:"Words"},"comp.digits":{ru:"Цифры",en:"Numbers"},"comp.sprint":{ru:"Спринт",en:"Sprint"},"comp.best":{ru:"рекорд",en:"best"},"comp.hint":{ru:"на скорость, без ошибок",en:"for speed, no errors"},"comp.record":{ru:"Новый личный рекорд!",en:"New personal record!"},"comp.name":{ru:"Имя для таблицы",en:"Name for the board"},"comp.publish":{ru:"Опубликовать",en:"Publish"},"comp.leaderboard":{ru:"Таблица рекордов",en:"Leaderboard"},"comp.player":{ru:"Игрок",en:"Player"},"comp.loading":{ru:"Загрузка таблицы…",en:"Loading board…"},"comp.empty":{ru:"Пока нет результатов — будь первым!",en:"No results yet — be the first!"},"learn.title":{ru:"AI-обучение",en:"AI training"},"learn.intro":{ru:"Программа сама генерирует связные строки и подмешивает буквы, где ты ошибаешься. Просто печатай поток — она подстраивается.",en:"The program generates connected lines and mixes in the letters you miss. Just type the stream — it adapts to you."},"learn.intro.kids":{ru:"Печатай слова, которые придумывает котик! Чем точнее — тем лучше 🐱",en:"Type the words the cat makes up! The more accurate, the better 🐱"},"learn.mastery":{ru:"Мастерство",en:"Mastery"},"learn.tempo":{ru:"Темп",en:"Tempo"},"learn.rhythm":{ru:"Ритмичность",en:"Rhythm"},"learn.lines":{ru:"строк",en:"lines"},"learn.tip":{ru:"Мастерство — скорость с учётом ошибок (сим/мин). Ритмичность >80% — ровный темп профи.",en:"Mastery — speed adjusted for errors (chars/min). Rhythm >80% — pro-level evenness."},"learn.lvl.start":{ru:"старт",en:"start"},"learn.lvl.good":{ru:"хорошо",en:"good"},"learn.lvl.work":{ru:"рабочий",en:"working"},"learn.lvl.pro":{ru:"профи",en:"pro"},"learn.hand":{ru:"Рука",en:"Hand"},"learn.hand.both":{ru:"Обе",en:"Both"},"learn.hand.left":{ru:"Левая",en:"Left"},"learn.hand.right":{ru:"Правая",en:"Right"},"course.title":{ru:"Курс печати",en:"Typing course"},"course.intro":{ru:"Последовательные уроки от домашнего ряда до предложений. Каждый урок открывает следующий.",en:"Step-by-step lessons from the home row to sentences. Each lesson unlocks the next."},"course.exit":{ru:"⚙ Выход",en:"⚙ Exit"},"course.lesson":{ru:"Урок",en:"Lesson"},"course.line":{ru:"строка",en:"line"},"course.tip":{ru:"Печатай ровно и точно — скорость придёт сама.",en:"Type evenly and accurately — speed will follow."},"course.home":{ru:"Домашний ряд",en:"Home row"},"course.review":{ru:"Повторение домашнего ряда",en:"Home row review"},"course.keys":{ru:"Новые клавиши",en:"New keys"},"course.caps":{ru:"Заглавные буквы (Shift)",en:"Capitals (Shift)"},"course.digits":{ru:"Цифры",en:"Numbers"},"course.punct":{ru:"Знаки препинания",en:"Punctuation"},"course.words":{ru:"Частые слова",en:"Common words"},"course.sentences":{ru:"Предложения",en:"Sentences"},"tb.dark":{ru:"Тёмная тема",en:"Dark theme"},"tb.prev":{ru:"‹ Пред",en:"‹ Prev"},"tb.next":{ru:"След ›",en:"Next ›"},"weak.title":{ru:"Слабые клавиши",en:"Weak keys"},"weak.hint":{ru:"Упражнение собрано из клавиш, где у тебя больше всего ошибок. «След» — новый набор.",en:"Built from the keys you miss most. “Next” — a fresh set."},"weak.none":{ru:"Пока мало данных — тренируем домашний ряд. Печатай ещё, и появятся твои слабые клавиши.",en:"Not enough data yet — training the home row. Keep typing to reveal your weak keys."},"prog.title":{ru:"Прогресс по сессиям",en:"Progress by session"},"prog.empty":{ru:"Недостаточно данных. Пройди хотя бы 2 упражнения — появится график скорости.",en:"Not enough data. Finish at least 2 exercises to see the speed chart."},"prog.close":{ru:"Закрыть",en:"Close"},"custom.title":{ru:"Свой текст",en:"Custom text"},"custom.ph":{ru:"Вставь любой текст для тренировки…",en:"Paste any text to practice…"},"custom.start":{ru:"Тренировать",en:"Practice"},"custom.cancel":{ru:"Отмена",en:"Cancel"},"st.exercises":{ru:"упражнений",en:"exercises"},"st.done":{ru:"пройдено",en:"done"},"st.record":{ru:"рекорд",en:"best"},"st.wpm":{ru:"WPM",en:"WPM"},"st.accuracy":{ru:"точность",en:"accuracy"},"st.errors":{ru:"ошибок",en:"errors"},"st.time":{ru:"время",en:"time"},"st.streak":{ru:"подряд",en:"streak"},"hint.flow":{ru:"Поток: упражнения идут подряд без остановки.",en:"Flow: exercises run back to back, no stops."},"hint.type":{ru:"Печатай по образцу.",en:"Type the pattern."},"hint.block":{ru:"Неверный символ не пропускается.",en:"Wrong keys are not accepted."},"hint.bs":{ru:"Backspace — исправить.",en:"Backspace to fix."},"hint.hidden":{ru:"образец скрыт — печатай по памяти",en:"pattern hidden — type from memory"},"done.title":{ru:"✓ Готово",en:"✓ Done"},"done.title.f":{ru:"✓ Отлично!",en:"✓ Great job!"},"done.again":{ru:"↻ Заново",en:"↻ Again"},"done.next":{ru:"Следующее →",en:"Next →"},"err.load":{ru:"Не удалось загрузить упражнения",en:"Failed to load exercises"},"k.title":{ru:"🐱 Котик-печатник",en:"🐱 Typing Cat"},"k.hello":{ru:"Привет! Выбирай уровень — будем учиться печатать. Печатай точно, спешить не надо!",en:"Hi! Pick a level and let’s learn to type. Be accurate — no need to rush!"},"k.rest":{ru:"🐱 Ты отлично позанимался! Передохни немножко 💛",en:"🐱 Great practice! Take a little break 💛"},"k.block.ru":{ru:"🇷🇺 По-русски",en:"🇷🇺 Russian"},"k.block.en":{ru:"🇬🇧 По-английски",en:"🇬🇧 English"},"k.level":{ru:"Уровень",en:"Level"},"k.word":{ru:"слово",en:"word"},"k.noerr":{ru:"⭐ без ошибок",en:"⭐ no errors"},"k.errors":{ru:"ошибок",en:"errors"},"k.passed":{ru:"пройден!",en:"passed!"},"k.note3":{ru:"Ни одной ошибки — ты звезда!",en:"Not a single error — you are a star!"},"k.note2":{ru:"Очень здорово! Ещё чуть точнее — будет три звезды.",en:"Very good! A bit more accurate for three stars."},"k.note1":{ru:"Уровень пройден! Попробуй ещё раз — получится точнее.",en:"Level passed! Try again to be more accurate."},"k.again":{ru:"↻ Ещё раз",en:"↻ Again"},"k.map":{ru:"К карте",en:"To map"},"k.next":{ru:"Дальше →",en:"Next →"},"k.back":{ru:"← К карте",en:"← To map"},"k.startRu":{ru:"Печатаем по-русски!",en:"Typing in Russian!"},"k.startEn":{ru:"Печатаем по-английски!",en:"Typing in English!"},"ex.title":{ru:"Тест печати",en:"Typing Test"},"ex.desc":{ru:"Печатай предложения без остановки, пока не выйдет время. В конце — отчёт с Gross/Net WPM и точностью.",en:"Type sentences non-stop until the time runs out. You get a report with Gross/Net WPM and accuracy."},"ex.duration":{ru:"Длительность",en:"Duration"},"ex.min":{ru:"мин",en:"min"},"ex.target":{ru:"Цель Net WPM",en:"Target Net WPM"},"ex.name":{ru:"Имя (для сертификата)",en:"Name (for the certificate)"},"ex.start":{ru:"Начать тест",en:"Start test"},"ex.cancel":{ru:"Выйти",en:"Exit"},"ex.left":{ru:"осталось",en:"left"},"ex.result":{ru:"Результат теста",en:"Test result"},"ex.gross":{ru:"Gross WPM",en:"Gross WPM"},"ex.net":{ru:"Net WPM",en:"Net WPM"},"ex.keystrokes":{ru:"нажатий",en:"keystrokes"},"ex.pass":{ru:"СДАН",en:"PASS"},"ex.fail":{ru:"НЕ СДАН",en:"FAIL"},"ex.target.short":{ru:"цель",en:"target"},"ex.cert":{ru:"⬇ Сертификат (PNG)",en:"⬇ Certificate (PNG)"},"ex.again":{ru:"↻ Ещё раз",en:"↻ Try again"},"ex.cert.title":{ru:"СЕРТИФИКАТ",en:"CERTIFICATE"},"ex.cert.sub":{ru:"тест слепой печати",en:"touch typing test"},"ex.cert.date":{ru:"Дата",en:"Date"}};function s(e){const t=Yn[e];return t?t[St]:e}const Zn=["кот","дом","сок","лес","мяч","сыр","нос","рот","лук","мак","жук","дым","сон","мир","кит"],Vn=["мама","папа","каша","зима","лето","луна","небо","море","гора","рыба","окно","сова","лиса","волк","утка"],Xn=["весна","осень","школа","книга","песня","чашка","ложка","мышка","кошка","зебра","лампа","шапка","санки","горка","речка"],Qn=["cat","dog","sun","box","red","run","mom","dad","egg","ice","car","bus","fox","bee","owl","hat","pen","map","cup","jam","sea","sky","toy","zoo","kid","leg","arm","eye","ear","nut","pig","hen","cow","ant","bat","big","hot","wet","six","ten"],er=["ball","fish","bird","cake","milk","tree","star","moon","rain","snow","frog","duck","bear","lion","wolf","book","game","blue","pink","rose","door","desk","lamp","sofa","kite","ship","road","park","hand","foot","nose","face","hair","king","gold","fast","slow","warm","cold","five"],tr=["apple","house","smile","happy","water","bread","candy","tiger","mouse","horse","sheep","green","white","black","music","table","chair","plant","grass","cloud","river","beach","stone","train","plane","pizza","juice","sugar","lemon","mango","zebra","panda","koala","eagle","shark","dance","sleep","dream","light","seven"];function nr(e,t){return e.slice(t*5,t*5+5)}const pe=[];{let e=1;const t=[[Zn,"ru"],[Vn,"ru"],[Xn,"ru"],[Qn,"en"],[er,"en"],[tr,"en"]];for(const[r,n]of t)for(let a=0;a*5<r.length;a++)pe.push({id:e,lang:n,title:String(e),words:nr(r,a)}),e++}let me={stars:{}};function rr(){try{const e=JSON.parse(localStorage.getItem("tr_kids")??"");e&&e.stars&&(me=e)}catch{}}function sr(){try{localStorage.setItem("tr_kids",JSON.stringify(me))}catch{}}function ar(e){return e===1||(me.stars[e-1]??0)>0}let Z="map",G=null,we=0,E=w([""]),oe=0,Et=0,Y=0,mt=0,fe="",O=null,Ge=null;const or={ru:["Молодец!","Здорово!","Так держать!","Ты супер!","Отлично!","Вот это да!"],en:["Well done!","Great!","Keep it up!","You rock!","Awesome!","Wow!"]},lr={ru:["Ой! Попробуй ещё","Чуть-чуть мимо","Не спеши","Почти попал!"],en:["Oops! Try again","Almost!","Take your time","So close!"]},ir=()=>or[L()],dn=()=>lr[L()],Gt=e=>e[Math.floor(Math.random()*e.length)];let j=null;function It(e,t,r,n=.07){if(!j)return;const a=j.createOscillator(),o=j.createGain();a.type="triangle",a.frequency.value=e,o.gain.setValueAtTime(n,j.currentTime+t),o.gain.exponentialRampToValueAtTime(.001,j.currentTime+t+r),a.connect(o),o.connect(j.destination),a.start(j.currentTime+t),a.stop(j.currentTime+t+r+.02)}function cr(){try{j??(j=new AudioContext),[523.25,659.25,783.99].forEach((e,t)=>It(e,t*.09,.18))}catch{}}function ur(){try{j??(j=new AudioContext),[523.25,587.33,659.25,783.99,1046.5].forEach((e,t)=>It(e,t*.11,.22,.08))}catch{}}function dr(){try{j??(j=new AudioContext),It(196,0,.12,.05)}catch{}}let ve=null;function pr(e,t,r){O=e,Ge=t,ve=r??null,rr(),Z="map",Ne()}function fr(e){if(Z!=="level"||!G||E.finishedAt!==null)return;if(e.key==="Backspace"){e.preventDefault();return}let t=null;if(e.key==="Enter"?t=`
`:e.key.length===1&&(t=e.key),t===null)return;e.preventDefault();const r=E.pattern[E.pos]??"";t=Oe(t,r);const n=he(E,t,!0);n.wrong&&(oe++,fe=Gt(dn()),dr()),n.finished&&(Et+=E.pattern.length,fe=Gt(ir()),we+1<G.words.length?(cr(),we++,E=w([G.words[we]])):hr()),Ne()}function hr(){G&&(ur(),Y=oe===0?3:1-oe/Math.max(Et,1)>=.9?2:1,Y>(me.stars[G.id]??0)&&(me.stars[G.id]=Y,sr()),mt++,Z="done")}function bt(e){G=e,we=0,oe=0,Et=0,fe=e.lang==="ru"?s("k.startRu"):s("k.startEn"),E=w([e.words[0]]),Z="level",Ne()}const pn=e=>e.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);function mr(e){return e>0?"⭐".repeat(e):""}function Ne(){O&&(Z==="map"?br():Z==="level"?yr():kr())}function br(){const e=[{lang:"ru",title:s("k.block.ru"),levels:pe.filter(n=>n.lang==="ru")},{lang:"en",title:s("k.block.en"),levels:pe.filter(n=>n.lang==="en")}],t=mt>0&&mt%3===0?`<div class="k-rest">${s("k.rest")}</div>`:"";O.innerHTML=`
    <div class="wrap kids">
      <header class="k-head">
        <h1>${s("k.title")}</h1>
        <div style="display:flex;gap:8px">
          ${ve?`<button id="k-ai" class="ghost">${s("learn.title")} 🤖</button>`:""}
          <button id="k-exit" class="ghost" title="Profile">⚙</button>
        </div>
      </header>
      <p class="k-hello">${s("k.hello")}</p>
      ${t}
      ${e.map(n=>`
        <h2 class="k-block">${n.title}</h2>
        <div class="k-map">
          ${n.levels.map(a=>{const o=ar(a.id),l=me.stars[a.id]??0;return`<button class="k-lvl ${o?"open":"locked"} ${l>0?"passed":""}" data-level="${a.id}" ${o?"":"disabled"}>
              <span class="k-num">${o?a.id:"🔒"}</span>
              <span class="k-stars">${mr(l)}</span>
            </button>`}).join("")}
        </div>`).join("")}
    </div>`,O.querySelectorAll("[data-level]").forEach(n=>{n.onclick=()=>{const a=pe.find(o=>o.id===Number(n.dataset.level));a&&bt(a)}}),O.querySelector("#k-exit").onclick=()=>Ge==null?void 0:Ge();const r=O.querySelector("#k-ai");r&&(r.onclick=()=>ve==null?void 0:ve())}function gr(){let e="";for(let t=0;t<E.pattern.length;t++){const r=E.marks[t],n=t===E.pos?"cur":r===T.CORRECT?"ok":r===T.WRONG?"bad":"pend";e+=`<span class="${n}">${pn(E.pattern[t])}</span>`}return e}function yr(){const e=G,t=E.finishedAt===null?E.pattern[E.pos]??null:null,r=L()==="ru"||e.lang==="ru";O.innerHTML=`
    <div class="wrap kids">
      <header class="k-head">
        <button id="k-back" class="ghost">${s("k.back")}</button>
        <span class="k-progress">${s("k.level")} ${e.title} · ${s("k.word")} ${we+1} / ${e.words.length}</span>
        <span class="k-acc">${oe===0?s("k.noerr"):`${s("k.errors")}: ${oe}`}</span>
      </header>
      <div class="k-mascot"><span class="k-cat">${oe>0&&fe&&dn().includes(fe)?"🙀":"😺"}</span> <span class="k-say">${pn(fe)}</span></div>
      <div class="k-word">${gr()}</div>
      <div class="keyb">${je(t,e.lang==="ru",r)}</div>
    </div>`,O.querySelector("#k-back").onclick=()=>{Z="map",Ne()}}function kr(){const e=G;O.innerHTML=`
    <div class="wrap kids">
      <div class="k-done">
        <div class="k-cat-big">${Y===3?"😻":"😺"}</div>
        <h2>${s("k.level")} ${e.title} ${s("k.passed")}</h2>
        <div class="k-stars-big">${"⭐".repeat(Y)}${"☆".repeat(3-Y)}</div>
        <p class="k-done-note">${s(Y===3?"k.note3":Y===2?"k.note2":"k.note1")}</p>
        <div class="donebtns">
          <button id="k-again">${s("k.again")}</button>
          <button id="k-map2" class="ghost">${s("k.map")}</button>
          ${pe.find(r=>r.id===e.id+1)?`<button id="k-next" class="primary">${s("k.next")}</button>`:""}
        </div>
      </div>
    </div>`,O.querySelector("#k-again").onclick=()=>bt(e),O.querySelector("#k-map2").onclick=()=>{Z="map",Ne()};const t=O.querySelector("#k-next");t&&(t.onclick=()=>{const r=pe.find(n=>n.id===e.id+1);r&&bt(r)})}const fn="tr_keystats";let be=$r();function $r(){try{const e=JSON.parse(localStorage.getItem(fn)??"{}");return e&&typeof e=="object"?e:{}}catch{return{}}}let ut=null;function vr(){ut||(ut=window.setTimeout(()=>{ut=null;try{localStorage.setItem(fn,JSON.stringify(be))}catch{}},800))}function it(e,t){const r=be[e]??(be[e]={ok:0,err:0});t?r.ok++:r.err++,vr()}function hn(e=6){const t={};for(const[r,n]of Object.entries(be)){const a=n.ok+n.err;a>=e&&(t[r]=n.err/a)}return t}function mn(e=6){return Object.values(be).some(t=>t.ok+t.err>=e)}function wr(e,t=6){return wt(e).map(({id:a,ch:o})=>{const l=be[a],d=l?l.ok+l.err:0,c=d>=3?l.err/d:0;return{ch:o,rate:c,n:d}}).filter(a=>a.rate>0).sort((a,o)=>o.rate-a.rate||o.n-a.n).slice(0,t).map(a=>a.ch)}function Ft(e,t=6){const r=hn(4),n={};for(const{id:a,ch:o}of wt(e)){const l=r[a];l!==void 0&&l>0&&(n[o]=1+l*t)}return n}function xr(e,t=5){let r=wr(e,6);const n=e==="en"?["a","s","d","f","j","k","l"]:["ф","ы","в","а","о","л","д"];r.length===0&&(r=n.slice(0,4));const a=[...r,...r,...n],o=()=>a[Math.floor(Math.random()*a.length)],l=[];for(let d=0;d<t;d++){const c=[];for(let p=0;p<6;p++){const u=3+Math.floor(Math.random()*3);let g="";for(let R=0;R<u;R++)g+=o();c.push(g)}l.push(c.join(" "))}return l}const gt="tr_history";function Ce(e,t,r){if(e<=0)return;let n=[];try{n=JSON.parse(localStorage.getItem(gt)??"[]")}catch{n=[]}Array.isArray(n)||(n=[]),n.push({t:r,wpm:e,acc:t}),n.length>300&&(n=n.slice(n.length-300));try{localStorage.setItem(gt,JSON.stringify(n))}catch{}}function zt(){try{const e=JSON.parse(localStorage.getItem(gt)??"[]");return Array.isArray(e)?e:[]}catch{return[]}}function Sr(e=40){const t=zt().slice(-e);if(t.length<2)return"";const r=600,n=120,a=8,o=t.map(P=>P.wpm),l=Math.max(...o),d=Math.min(...o),c=l-d||1,p=P=>a+P/(t.length-1)*(r-2*a),u=P=>n-a-(P-d)/c*(n-2*a),g=t.map((P,J)=>`${J===0?"M":"L"} ${p(J).toFixed(1)} ${u(P.wpm).toFixed(1)}`).join(" "),R=`${g} L ${p(t.length-1).toFixed(1)} ${n-a} L ${p(0).toFixed(1)} ${n-a} Z`,ce=Math.max(...o),U=o[o.length-1];return`<svg class="spark" viewBox="0 0 ${r} ${n}" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path d="${R}" class="spark-area"/>
    <path d="${g}" class="spark-line"/>
    <circle cx="${p(t.length-1).toFixed(1)}" cy="${u(U).toFixed(1)}" r="4" class="spark-dot"/>
  </svg>
  <div class="spark-meta"><span>сессий: <b>${zt().length}</b></span><span>макс: <b>${ce}</b></span><span>последняя: <b>${U}</b> WPM</span></div>`}const Er={en:["fj","dk","sl","a","ei","gh","ru","ty","wo","qp","vn","zxcb","m"],ru:["ао","вл","ыд","фж","пр","ен","кг","уш","цщ","йз","яч","смит","ьбюхэъ"]},Ir={en:"the and you that was for are with his they have this from word what time work first water been call who now find long down day did get come made may part over new sound take only little place year live back give most very after thing our just name good through",ru:"и в не на что тот быть это как она для его так вот мочь сказать год этот рука дело глаз жизнь день есть знать самый раз время слово место друг два дом стать первый вода идти большой ещё свой"},Mr={en:["The quick brown fox jumps over the lazy dog.","Pack my box with five dozen liquor jugs.","How vexingly quick daft zebras jump.","The five boxing wizards jump quickly.","Sphinx of black quartz, judge my vow."],ru:["Съешь же ещё этих мягких французских булок да выпей чаю.","В чащах юга жил бы цитрус? Да, но фальшивый экземпляр!","Широкая электрификация южных губерний даст мощный толчок.","Эх, чужак, общий съём цен шляп юфти вдрызг!","Любя, съешь щипцы, — вздохнёт мэр, — кайф жгуч."]};function Tr(e){const t=[];let r=1,n="";Er[e].forEach((o,l)=>{if(n+=o,l===0){t.push({id:r++,kind:"home",newKeys:o,pool:o,titleKey:"course.home"});return}t.push({id:r++,kind:"keys",newKeys:o,pool:n,titleKey:"course.keys",titleArg:o.toUpperCase().split("").join(" ")}),o===(e==="en"?"a":"фж")&&t.push({id:r++,kind:"home",newKeys:"",pool:n,titleKey:"course.review"})});const a=n;return t.push({id:r++,kind:"caps",newKeys:"",pool:a,titleKey:"course.caps"}),t.push({id:r++,kind:"digits",newKeys:"0123456789",pool:"0123456789",titleKey:"course.digits"}),t.push({id:r++,kind:"punct",newKeys:"",pool:a,titleKey:"course.punct"}),t.push({id:r++,kind:"words",newKeys:"",pool:"",titleKey:"course.words"}),t.push({id:r++,kind:"sentences",newKeys:"",pool:"",titleKey:"course.sentences"}),t}const ge=e=>Math.floor(Math.random()*e);function Mt(e,t,r=5){const n=(e||"asdf").split(""),a=t?[...n,...t.split(""),...t.split("")]:n,o=[];for(let l=0;l<r;l++){const d=[];for(let c=0;c<6;c++){const p=3+ge(3);let u="";for(let g=0;g<p;g++)u+=a[ge(a.length)];d.push(u)}o.push(d.join(" "))}return o}function Ar(e=5){const t=[];for(let r=0;r<e;r++){const n=[];for(let a=0;a<6;a++){let o="";for(let l=0;l<3+ge(2);l++)o+=String(ge(10));n.push(o)}t.push(n.join(" "))}return t}function Lr(e,t=4){const r=[",",".","?","!",";",":"];return Mt(e,"",t).map(a=>a.split(" ").map(o=>o+r[ge(r.length)]).join(" "))}function Rr(e,t=5){const r=Ir[e].split(/\s+/),n=[];for(let a=0;a<t;a++){const o=[];for(let l=0;l<6;l++)o.push(r[ge(r.length)]);n.push(o.join(" "))}return n}function Pr(e,t=4){return Mt(e,"",t).map(r=>r.split(" ").map(n=>n.charAt(0).toUpperCase()+n.slice(1)).join(" "))}function Or(e,t){switch(t.kind){case"digits":return Ar();case"punct":return Lr(t.pool);case"words":return Rr(e);case"sentences":return Mr[e];case"caps":return Pr(t.pool);default:return Mt(t.pool,t.newKeys)}}let F={stars:{}},xe="en",Se=[];function jr(){xe=L()==="ru"?"ru":"en",Se=Tr(xe);try{const e=JSON.parse(localStorage.getItem(`tr_course_${xe}`)??"");e&&e.stars?F=e:F={stars:{}}}catch{F={stars:{}}}}function Nr(){try{localStorage.setItem(`tr_course_${xe}`,JSON.stringify(F))}catch{}}function Cr(e){return e===1||(F.stars[e-1]??0)>0}let V="map",le=null,Le=[],Ee=0,k=w([""]),Ve=0,Tt=0,ne=0,B=null,Fe=null;function Br(e,t){B=e,Fe=t,jr(),V="map",Be()}function _r(e){if(V!=="lesson"||!le||k.finishedAt!==null)return;if(e.key==="Backspace"){e.preventDefault();return}let t=null;if(e.key==="Enter"?t=`
`:e.key.length===1&&(t=e.key),t===null)return;e.preventDefault();const r=k.pattern[k.pos]??"";t=Oe(t,r);const n=/[а-яё]/i.test(k.pattern),a=he(k,t,!0);if(r&&r!==" "&&r!==`
`){const o=lt(r,n);o&&it(o,!a.wrong)}a.wrong&&Ve++,a.finished&&(Tt+=k.pattern.length,Ee+1<Le.length?(Ee++,k=w([Le[Ee]])):qr()),Be()}function qr(){if(!le)return;const e=z(k);ne=Ve===0?3:1-Ve/Math.max(Tt,1)>=.92?2:1,ne>(F.stars[le.id]??0)&&(F.stars[le.id]=ne,Nr()),e.wpm>0&&Ce(e.wpm,e.accuracy,Date.now()),V="done"}function yt(e){le=e,Ee=0,Ve=0,Tt=0,Le=Or(xe,e),k=w([Le[0]]),V="lesson",Be()}const At=e=>e.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),bn=e=>e.titleArg?`${s(e.titleKey)}: ${e.titleArg}`:s(e.titleKey);function Be(){B&&(V==="map"?Dr():V==="lesson"?Hr():Kr())}function Dr(){const e=Object.values(F.stars).filter(t=>t>0).length;B.innerHTML=`
    <div class="wrap course">
      <header class="c-head">
        <h1>📚 ${s("course.title")}</h1>
        <button id="c-exit" class="ghost">${s("course.exit")}</button>
      </header>
      <p class="c-intro">${s("course.intro")} · ${s("st.done")} <b>${e}/${Se.length}</b></p>
      <div class="c-map">
        ${Se.map(t=>{const r=Cr(t.id),n=F.stars[t.id]??0;return`<button class="c-les ${r?"open":"locked"} ${n>0?"passed":""}" data-les="${t.id}" ${r?"":"disabled"}>
            <span class="c-num">${r?t.id:"🔒"}</span>
            <span class="c-name">${At(bn(t))}</span>
            <span class="c-stars">${n>0?"⭐".repeat(n):""}</span>
          </button>`}).join("")}
      </div>
    </div>`,B.querySelectorAll("[data-les]").forEach(t=>{t.onclick=()=>{const r=Se.find(n=>n.id===Number(t.dataset.les));r&&yt(r)}}),B.querySelector("#c-exit").onclick=()=>Fe==null?void 0:Fe()}function Wr(){let e="";for(let t=0;t<k.pattern.length;t++){const r=k.marks[t],n=t===k.pos?"cur":r===T.CORRECT?"ok":r===T.WRONG?"bad":"pend",a=k.pattern[t];a===`
`?e+=`<span class="${n} nl">↵</span><br/>`:e+=`<span class="${n}">${At(a)}</span>`}return e}function Hr(){const e=le,t=/[а-яё]/i.test(k.pattern),r=L()==="ru"||t,n=z(k);B.innerHTML=`
    <div class="wrap course">
      <header class="c-head">
        <button id="c-back" class="ghost">${s("k.back")}</button>
        <span class="c-progress">${s("course.lesson")} ${e.id} · ${At(bn(e))} · ${s("course.line")} ${Ee+1}/${Le.length}</span>
        <span class="c-acc">${n.wpm} ${s("st.wpm")} · ${n.accuracy}%</span>
      </header>
      <div class="card"><div class="pattern" id="pattern">${Wr()}</div></div>
      <div class="keyb">${je(k.finishedAt===null?k.pattern[k.pos]??null:null,t,r)}</div>
      <p class="hint2">${s("course.tip")}</p>
    </div>`,B.querySelector("#c-back").onclick=()=>{V="map",Be()}}function Kr(){const e=le,t=Se.find(n=>n.id===e.id+1);B.innerHTML=`
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
    </div>`,B.querySelector("#c-again").onclick=()=>yt(e),B.querySelector("#c-map").onclick=()=>{V="map",Be()};const r=B.querySelector("#c-next");r&&t&&(r.onclick=()=>yt(t))}const re=" ";function Gr(e,t){return e.toLowerCase().split("").map(r=>t.test(r)?r:re).join("").replace(/\s+/g,re).trim()}function Fr(e,t,r=3){const n=t==="ru"?/[а-яё]/:/[a-z]/,a=re.repeat(r-1)+Gr(e,n)+re,o=new Map,l=new Set,d=new Set;for(let c=0;c+r<=a.length;c++){const p=a.slice(c,c+r-1),u=a[c+r-1];u!==re&&d.add(u);let g=o.get(p);g||(g={},o.set(p,g)),g[u]=(g[u]??0)+1,p[0]===re&&p.trim().length>0&&l.add(p)}return{order:r,table:o,starts:[...l],alphabet:[...d].sort()}}function zr(e,t){let r=0;const n=Object.entries(e);for(const[o,l]of n)r+=l*((t==null?void 0:t[o])??1);let a=Math.random()*r;for(const[o,l]of n)if(a-=l*((t==null?void 0:t[o])??1),a<=0)return o;return n[n.length-1][0]}function Ur(e,t={}){const r=t.chars??48,n=t.maxWord??8;if(e.starts.length===0)return"";const a=[];let o=0;for(;a.join(" ").length<r&&o++<200;){let l=e.starts[Math.floor(Math.random()*e.starts.length)],d=l.trim(),c=0;for(;c++<n*2;){const p=e.table.get(l);if(!p)break;const u=zr(p,t.weight);if(u===re||(d+=u,l=(l+u).slice(-(e.order-1)),d.length>=n))break}d.length>=2&&a.push(d)}return a.join(" ")}const Jr=`
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
`,Yr=`
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
`;let kt=null,Ut=null;function Zr(e){kt&&Ut===e||(kt=Fr(e==="ru"?Jr:Yr,e,3),Ut=e)}let y=Lt();function Lt(){return{correct:0,keys:0,errors:0,ms:0,intervals:[],lines:0}}let I=w([""]),$t=0,ze=0,Ie="m",Xe="both",de=null,Ue=null;function Vr(){return L()==="ru"?"ru":"en"}function Xr(){const e=Vr(),t=Ie==="kids"?24:Ie==="f"?40:50,r=Ie==="kids"?5:8;if(Xe==="both")return Zr(e),Ur(kt,{chars:t,weight:Ft(e),maxWord:r});const n=Ft(e),a=[];for(const d of Fn(e,Xe)){const c=Math.max(1,Math.round(n[d]??1));for(let p=0;p<c;p++)a.push(d)}if(a.length===0)return"";const o=[];let l=0;for(;o.join(" ").length<t&&l++<60;){const d=3+Math.floor(Math.random()*(r-2));let c="";for(let p=0;p<d;p++)c+=a[Math.floor(Math.random()*a.length)];o.push(c)}return o.join(" ")}function Rt(){I=w([Xr()]),$t=0,ze=0}function Qr(e,t,r){de=e,Ue=r,Ie=t,y=Lt(),Rt(),Pt()}function es(){const e=gn();e.mastery>0&&Ce(Math.round(e.mastery/5),e.accuracy,Date.now()),Ue==null||Ue()}function ts(e){if(!de)return;if(e.key==="Backspace"){e.preventDefault();return}let t=null;if(e.key==="Enter"?t=`
`:e.key.length===1&&(t=e.key),t===null)return;e.preventDefault();const r=Date.now();I.startedAt===null&&($t=r,ze=r);const n=I.pattern[I.pos]??"";t=Oe(t,n);const a=/[а-яё]/i.test(I.pattern),o=he(I,t,!0);if(o.accepted){const l=r-ze;l>0&&l<3e3&&y.intervals.push(l),ze=r,y.keys++,n!==" "&&n!==`
`&&y.correct++}if(n&&n!==" "&&n!==`
`){const l=lt(n,a);l&&it(l,!o.wrong)}o.wrong&&y.errors++,o.finished&&(y.ms+=r-$t,y.lines++,Rt()),Pt()}function gn(){const e=y.ms/6e4,t=e>0?Math.round(y.correct/e):0,r=e>0?Math.round((y.correct+y.errors)/e):0,n=y.correct+y.errors,a=n>0?Math.round(y.correct/n*100):100;let o=0;if(y.intervals.length>=4){const l=y.intervals.reduce((p,u)=>p+u,0)/y.intervals.length,d=y.intervals.reduce((p,u)=>p+(u-l)**2,0)/y.intervals.length,c=Math.sqrt(d)/(l||1);o=Math.max(0,Math.min(100,Math.round((1-c)*100)))}return{mastery:t,tempo:r,rhythm:o,accuracy:a}}const ns=e=>e.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);function rs(){let e="";for(let t=0;t<I.pattern.length;t++){const r=I.marks[t],n=t===I.pos?"cur":r===T.CORRECT?"ok":r===T.WRONG?"bad":"pend";e+=`<span class="${n}">${ns(I.pattern[t])}</span>`}return e}function ss(e){return e>=300?s("learn.lvl.pro"):e>=200?s("learn.lvl.work"):e>=70?s("learn.lvl.good"):s("learn.lvl.start")}function Pt(){if(!de)return;const e=gn(),t=/[а-яё]/i.test(I.pattern),r=L()==="ru"||t,n=Ie==="kids";de.innerHTML=`
    <div class="wrap learn">
      <header class="c-head">
        <h1>🤖 ${s("learn.title")}</h1>
        <button id="ai-exit" class="ghost">${s("course.exit")}</button>
      </header>
      <p class="c-intro">${s(n?"learn.intro.kids":"learn.intro")}</p>
      ${n?"":`<div class="hand-row">
        <span class="hand-lbl">${s("learn.hand")}:</span>
        ${["both","left","right"].map(a=>`<button class="hand-btn ${Xe===a?"on":""}" data-hand="${a}">${s("learn.hand."+a)}</button>`).join("")}
      </div>`}
      <div class="card"><div class="pattern" id="pattern">${rs()}</div></div>
      <div class="keyb">${je(I.finishedAt===null?I.pattern[I.pos]??null:null,t,r)}</div>
      ${n?`
        <div class="learn-kids"><span class="k-cat">😺</span> <b>${e.accuracy}%</b> ${s("st.accuracy")} · ${y.lines} ${s("learn.lines")}</div>
      `:`
        <div class="statsbar learn-stats">
          <div><b>${e.mastery}</b><span>${s("learn.mastery")}</span><i>${ss(e.mastery)}</i></div>
          <div><b>${e.tempo}</b><span>${s("learn.tempo")}</span></div>
          <div><b class="${e.rhythm>=80?"ok":""}">${e.rhythm}%</b><span>${s("learn.rhythm")}</span></div>
          <div><b>${e.accuracy}%</b><span>${s("st.accuracy")}</span></div>
          <div><b>${y.lines}</b><span>${s("learn.lines")}</span></div>
        </div>
        <p class="hint2">${s("learn.tip")}</p>
      `}
    </div>`,de.querySelector("#ai-exit").onclick=()=>es(),de.querySelectorAll("[data-hand]").forEach(a=>{a.onclick=()=>{Xe=a.dataset.hand,y=Lt(),Rt(),Pt()}})}const yn="https://iuvvheeocobhiothfgei.supabase.co",Jt="sb_publishable_A2vJ5DjemTZIKrKX6XGqvQ_WaiuAkk1",kn="typing_leaderboard",$n={apikey:Jt,Authorization:`Bearer ${Jt}`,"Content-Type":"application/json"};async function as(e){try{return(await fetch(`${yn}/rest/v1/${kn}`,{method:"POST",headers:{...$n,Prefer:"return=minimal"},body:JSON.stringify(e)})).ok}catch{return!1}}async function os(e,t,r=10){try{const n=`discipline=eq.${e}&lang=eq.${t}&order=wpm.desc&limit=${r}`,a=await fetch(`${yn}/rest/v1/${kn}?${n}`,{headers:$n});return a.ok?await a.json():[]}catch{return[]}}const ls=["alpha_fwd","alpha_rev","words","digits","sprint"],Yt={en:"abcdefghijklmnopqrstuvwxyz",ru:"абвгдежзийклмнопрстуфхцчшщъыьэюя"},is={en:"time year people way day man thing woman life child world school state family student group country problem hand part place case week company system program work",ru:"время год человек дело жизнь день рука работа слово место вопрос сторона страна мир случай ребёнок голова система вода друг земля город конец час глаз"},Zt={en:["the quick brown fox jumps","practice makes perfect every day","never stop learning new things","small steps lead to big wins"],ru:["тише едешь дальше будешь","практика путь к мастерству","учись каждый день понемногу","терпение и труд всё перетрут"]},dt=e=>Math.floor(Math.random()*e);function cs(e,t){if(e==="alpha_fwd")return Yt[t];if(e==="alpha_rev")return Yt[t].split("").reverse().join("");if(e==="digits"){let r="";for(let n=0;n<30;n++)r+=String(dt(10))+(n%5===4?" ":"");return r.trim()}if(e==="words"){const r=is[t].split(/\s+/),n=[];for(let a=0;a<12;a++)n.push(r[dt(r.length)]);return n.join(" ")}return Zt[t][dt(Zt[t].length)]}let ye={};function us(){try{ye=JSON.parse(localStorage.getItem("tr_compete")??"{}")||{}}catch{ye={}}}function ds(){try{localStorage.setItem("tr_compete",JSON.stringify(ye))}catch{}}const vn=(e,t)=>`${e}_${t}`;let _="menu",X="alpha_fwd",x=w([""]),Qe=0,Ot=0,se=null,wn="m",S=null,Je=null,et=[],vt=!1,Re=!1;function ke(){return L()==="ru"?"ru":"en"}function ps(e,t,r){S=e,Je=r,wn=t,us(),_="menu",Q()}function xn(e){X=e,Ot=0,Qe=0,Re=!1,x=w([cs(e,ke())]),_="run",Q()}function fs(e){if(_!=="run"||x.finishedAt!==null)return;if(e.key==="Backspace"){e.preventDefault();return}let t=null;if(e.key==="Enter"?t=`
`:e.key.length===1&&(t=e.key),t===null)return;e.preventDefault(),Qe===0&&(Qe=Date.now());const r=x.pattern[x.pos]??"";t=Oe(t,r);const n=/[а-яё]/i.test(x.pattern),a=he(x,t,!0);if(r&&r!==" "&&r!==`
`){const o=lt(r,n);o&&it(o,!a.wrong)}a.wrong&&Ot++,a.finished&&hs(),Q()}function hs(){z(x);const e=Date.now()-Qe,t=e/6e4,r=x.pattern.replace(/\s/g,"").length,n=t>0?Math.round(r/5/t):0,a=r+Ot,o=a>0?Math.round(r/a*100):100,l=o===100?n>=60?"🥇":n>=40?"🥈":"🥉":n>=50&&o>=95?"🥈":"🎖",d=vn(X,ke()),c=n>(ye[d]??0)&&o>=90;c&&(ye[d]=n,ds()),Ce(n,o,Date.now()),se={wpm:n,acc:o,ms:e,medal:l,isRecord:c},_="result"}async function Sn(){_="board",vt=!0,et=[],Q(),et=await os(X,ke()),vt=!1,Q()}async function ms(e){if(!(!se||Re)){Re=!0;try{localStorage.setItem("tr_name",e)}catch{}await as({name:e,discipline:X,lang:ke(),wpm:se.wpm,accuracy:se.acc,ms:se.ms}),await Sn()}}const jt=e=>e.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);function bs(){let e="";for(let t=0;t<x.pattern.length;t++){const r=x.marks[t],n=t===x.pos?"cur":r===T.CORRECT?"ok":r===T.WRONG?"bad":"pend";e+=`<span class="${n}">${jt(x.pattern[t])}</span>`}return e}function Q(){S&&(_==="menu"?gs():_==="run"?ys():_==="result"?ks():$s())}function gs(){const e=ke();S.innerHTML=`
    <div class="wrap compete">
      <header class="c-head">
        <h1>🏆 ${s("compete.title")}</h1>
        <button id="cp-exit" class="ghost">${s("course.exit")}</button>
      </header>
      <p class="c-intro">${s("compete.intro")}</p>
      <div class="cp-grid">
        ${ls.map(t=>{const r=ye[vn(t,e)]??0;return`<button class="cp-disc" data-d="${t}">
            <span class="cp-name">${s("comp."+t)}</span>
            <span class="cp-best">${r>0?`${s("comp.best")}: ${r} ${s("st.wpm")}`:"—"}</span>
          </button>`}).join("")}
      </div>
    </div>`,S.querySelectorAll("[data-d]").forEach(t=>{t.onclick=()=>xn(t.dataset.d)}),S.querySelector("#cp-exit").onclick=()=>Je==null?void 0:Je()}function ys(){const e=/[а-яё]/i.test(x.pattern),t=L()==="ru"||e;S.innerHTML=`
    <div class="wrap compete">
      <header class="c-head">
        <button id="cp-back" class="ghost">${s("k.back")}</button>
        <span class="c-progress">🏆 ${s("comp."+X)}</span>
        <span class="c-acc">${s("comp.hint")}</span>
      </header>
      <div class="card"><div class="pattern pattern-big" id="pattern">${bs()}</div></div>
      <div class="keyb">${je(x.finishedAt===null?x.pattern[x.pos]??null:null,e,t)}</div>
    </div>`,S.querySelector("#cp-back").onclick=()=>{_="menu",Q()}}function ks(){const e=se,t=localStorage.getItem("tr_name")??"",r=wn==="kids";S.innerHTML=`
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
          <input id="cp-name" type="text" value="${jt(t)}" placeholder="${s("comp.name")}" maxlength="24"/>
          <button id="cp-pub" class="primary" ${Re?"disabled":""}>${Re?"✓":"🌐 "+s("comp.publish")}</button>
        </div>`}
        <div class="donebtns">
          <button id="cp-again">${s("k.again")}</button>
          <button id="cp-board" class="ghost">🌐 ${s("comp.leaderboard")}</button>
          <button id="cp-menu" class="ghost">${s("k.map")}</button>
        </div>
      </div>
    </div>`,S.querySelector("#cp-again").onclick=()=>xn(X),S.querySelector("#cp-menu").onclick=()=>{_="menu",Q()},S.querySelector("#cp-board").onclick=()=>Sn();const n=S.querySelector("#cp-pub");n&&(n.onclick=()=>ms(S.querySelector("#cp-name").value.trim()||"—"))}function $s(){const e=ke();S.innerHTML=`
    <div class="wrap compete">
      <header class="c-head">
        <h1>🌐 ${s("comp.leaderboard")}</h1>
        <button id="cp-bback" class="ghost">${s("k.back")}</button>
      </header>
      <p class="c-intro">${s("comp."+X)} · ${e.toUpperCase()}</p>
      ${vt?`<p class="hint2">${s("comp.loading")}</p>`:et.length===0?`<p class="hint2">${s("comp.empty")}</p>`:`
        <table class="cp-board">
          <thead><tr><th>#</th><th>${s("comp.player")}</th><th>${s("st.wpm")}</th><th>${s("st.accuracy")}</th></tr></thead>
          <tbody>${et.map((t,r)=>`<tr><td>${r+1}</td><td>${jt(t.name)}</td><td><b>${t.wpm}</b></td><td>${t.accuracy}%</td></tr>`).join("")}</tbody>
        </table>`}
    </div>`,S.querySelector("#cp-bback").onclick=()=>{_=se?"result":"menu",Q()}}let A=Un(),Nt=[],ee="abandon",M=[],$=0,h=w([""]),tt=!1,Ct=!0,Pe=!0,Bt=!0,nt=localStorage.getItem("tr_heat")==="1",Me=localStorage.getItem("tr_dark")==="1",m=null,b=null,_t="",W=null,q=localStorage.getItem("tr_flow")==="1",K={typed:0,errors:0,ms:0,count:0};function vs(){K={typed:0,errors:0,ms:0,count:0}}let i=null;function rt(){const e=i&&i.phase==="run"?z(h):{typed:0,errors:0},t=((i==null?void 0:i.typed)??0)+e.typed,r=((i==null?void 0:i.errors)??0)+e.errors,n=i?i.durMin*6e4-Math.max(0,i.endAt-Date.now()):0,a=Math.max(n/6e4,1/600),o=Math.round((t+r)/5/a),l=Math.round(t/5/a),d=t+r,c=d>0?Math.round(t/d*100):100;return{typed:t,errors:r,gross:o,net:l,accuracy:c,elapsedMs:n}}function ws(e,t,r){const a=[...tn(Nt,"abandon")].sort(()=>Math.random()-.5);i={phase:"run",durMin:e,target:t,name:r,endAt:Date.now()+e*6e4,typed:0,errors:0,count:0,pool:a,pi:0,timer:null};try{localStorage.setItem("tr_name",r)}catch{}h=w([a[0].lines.join(" ")]),i.timer=window.setInterval(()=>{if(!(!i||i.phase!=="run")){if(Date.now()>=i.endAt){En();return}Ls()}},250),f()}function En(){if(!i)return;const e=z(h);i.typed+=e.typed,i.errors+=e.errors,i.timer&&(clearInterval(i.timer),i.timer=null),i.phase="result";const t=rt();Ce(t.net,t.accuracy,Date.now()),f()}function Vt(){i!=null&&i.timer&&clearInterval(i.timer),i=null,te()}let v={bestWpm:0,bestAcc:0,done:[],lastIdx:0};function xs(e){try{const t=JSON.parse(localStorage.getItem(`tr_progress_${e}`)??"");if(t&&Array.isArray(t.done))return{bestWpm:t.bestWpm|0,bestAcc:t.bestAcc|0,done:t.done,lastIdx:t.lastIdx|0}}catch{}return{bestWpm:0,bestAcc:0,done:[],lastIdx:0}}function qt(){try{localStorage.setItem(`tr_progress_${ee}`,JSON.stringify(v))}catch{}}function Ss(e){const t=z(h);t.wpm>v.bestWpm&&(v.bestWpm=t.wpm),t.accuracy>v.bestAcc&&(v.bestAcc=t.accuracy),v.done.includes(e.id)||v.done.push(e.id),qt()}function In(){const e=z(h);if(!q)return e;const t=K.typed+e.typed,r=K.errors+e.errors,n=K.ms+e.elapsedMs,a=n/6e4,o=a>0?Math.round(t/5/a):0,l=t+r;return{typed:t,errors:r,elapsedMs:n,wpm:o,accuracy:l>0?Math.round(t/l*100):100}}let $e=null;function Xt(){if(Ct)try{$e??($e=new AudioContext);const e=$e.createOscillator(),t=$e.createGain();e.frequency.value=220,e.type="square",t.gain.value=.06,e.connect(t),t.connect($e.destination),e.start(),e.stop($e.currentTime+.07)}catch{}}const C=document.getElementById("app");let ue=!1,st=!1,De=!1,Te=!1,We=!1,at=!1,He=!1;function Mn(){return/[а-яё]/i.test(h.pattern)}function Es(e){return L()==="ru"||e}function Tn(){Me?document.documentElement.dataset.theme="dark":delete document.documentElement.dataset.theme}function An(){return`<select id="lang" title="Language">
    <option value="ru" ${L()==="ru"?"selected":""}>RU</option>
    <option value="en" ${L()==="en"?"selected":""}>EN</option>
  </select>`}function Ln(e){const t=document.getElementById("lang");t&&(t.onchange=()=>{Jn(t.value),e()})}function Is(){return b==="weak"?{id:"weak",bank:ee,title:s("weak.title"),lines:Ae}:b==="custom"?{id:"custom",bank:ee,title:s("custom.title"),lines:ae}:M[$]??null}let Ae=[],ae=[];function f(){if(A===null){ue=!1,Nn();return}if(Te){We||(We=!0,Qr(C,A??"m",()=>{Te=!1,We=!1,f()}));return}if(We=!1,at){He||(He=!0,ps(C,A??"m",()=>{at=!1,He=!1,f()}));return}if(He=!1,A==="kids"){ue||(ue=!0,pr(C,()=>{ue=!1,A=null,xt(null),f()},()=>{ue=!1,Te=!0,f()}));return}if(ue=!1,st){De||(De=!0,Br(C,()=>{st=!1,De=!1,f()}));return}if(De=!1,i){As();return}const e=Is(),t=In(),r=b!==null;C.innerHTML=`
    <div class="wrap">
      <header>
        <h1>Type<span>RIGHT</span>ing</h1>
        <div class="headctl">
          <select id="bank">
            ${Dn.map(n=>`<option value="${n}" ${n===ee&&!r?"selected":""}>${s("bank."+n)}</option>`).join("")}
          </select>
          <select id="profile" title="Profile">
            ${Object.keys(Ze).map(n=>`<option value="${n}" ${n===A?"selected":""}>${Ze[n]} ${s("profile."+n)}</option>`).join("")}
          </select>
          <button id="dark" class="iconbtn" title="${s("tb.dark")}">${Me?"☀️":"🌙"}</button>
          ${An()}
        </div>
      </header>
      <p class="bankdesc">${r?b==="weak"?s("weak.hint"):"":s("bank."+ee+".desc")} ${r?"":`· <b>${M.length}</b> ${s("st.exercises")} · ${s("st.done")} <b>${v.done.length}</b>${v.bestWpm>0?` · ${s("st.record")} <b>${v.bestWpm}</b> ${s("st.wpm")} · <b>${v.bestAcc}%</b>`:""}`}</p>

      <div class="toolbar">
        <label><input type="checkbox" id="hide" ${tt?"checked":""}/> ${s("tb.hide")}</label>
        <label><input type="checkbox" id="sound" ${Ct?"checked":""}/> ${s("tb.sound")}</label>
        <label><input type="checkbox" id="block" ${Pe?"checked":""}/> ${s("tb.block")}</label>
        <label><input type="checkbox" id="keyb" ${Bt?"checked":""}/> ${s("tb.keyb")}</label>
        <label title="errRate"><input type="checkbox" id="heat" ${nt?"checked":""}/> ${s("tb.heat")}</label>
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
          <span class="extitle">${ie((e==null?void 0:e.title)??"")}</span>
          ${e!=null&&e.hint?`<span class="exhint">${ie(e.hint)}</span>`:""}
        </div>
        <div class="pattern ${tt?"hidden":""}" id="pattern">${jn()}</div>
      </div>

      ${Pn()}

      <div class="statsbar">${On(t)}</div>

      ${h.finishedAt!==null?Ts(t):`<p class="hint2">${b==="weak"&&Ae.length&&Rn?s("weak.none"):s(q?"hint.flow":"hint.type")} ${s(Pe?"hint.block":"hint.bs")}</p>`}
    </div>
    ${W?Ms():""}
  `,Os()}let Rn=!1;function Pn(){if(!Bt)return"";const e=Mn(),t=nt&&mn()?hn():null;return`<div class="keyb">${je(h.finishedAt===null?h.pattern[h.pos]??null:null,e,Es(e),t)}</div>
    ${t?'<p class="heat-legend"><i class="g">освоено</i> · <i class="r">слабые клавиши</i></p>':""}`}function On(e){return`
    <div><b>${e.wpm}</b><span>${s("st.wpm")}</span></div>
    <div><b>${e.accuracy}%</b><span>${s("st.accuracy")}</span></div>
    <div><b class="${e.errors>0?"err":""}">${e.errors}</b><span>${s("st.errors")}</span></div>
    <div><b>${(e.elapsedMs/1e3).toFixed(0)}s</b><span>${s("st.time")}</span></div>
    ${q?`<div><b>🔥 ${K.count}</b><span>${s("st.streak")}</span></div>`:""}`}function ie(e){return e.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t])}function jn(){if(tt)return`<span class="hidden-note">${s("hint.hidden")}</span>`;let e="";for(let t=0;t<h.pattern.length;t++){const r=h.pattern[t],n=h.marks[t],a=t===h.pos?"cur":n===T.CORRECT?"ok":n===T.WRONG?"bad":"pend";r===`
`?e+=`<span class="${a} nl">↵</span><br/>`:e+=`<span class="${a}">${ie(r)}</span>`}return e}function Ms(){if(W==="custom")return`<div class="modal-bg" id="modal-bg"><div class="modal">
      <h2>${s("custom.title")}</h2>
      <textarea id="custom-ta" placeholder="${s("custom.ph")}">${ie(_t)}</textarea>
      <div class="donebtns">
        <button id="custom-cancel" class="ghost">${s("custom.cancel")}</button>
        <button id="custom-go" class="primary">${s("custom.start")}</button>
      </div>
    </div></div>`;const e=Sr();return`<div class="modal-bg" id="modal-bg"><div class="modal">
    <h2>${s("prog.title")}</h2>
    ${e||`<p class="hint2">${s("prog.empty")}</p>`}
    <div class="donebtns"><button id="prog-close" class="primary">${s("prog.close")}</button></div>
  </div></div>`}function Nn(){C.innerHTML=`
    <div class="wrap onboard">
      <div class="ob-lang">${An()}</div>
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
    </div>`,C.querySelectorAll("[data-profile-pick]").forEach(e=>{e.onclick=()=>{A=e.dataset.profilePick,un(A),f()}}),Ln(()=>Nn())}function Ts(e){return`
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
    </div>`}function As(){if(!i)return;if(i.phase==="setup"){const r=localStorage.getItem("tr_name")??"";C.innerHTML=`
      <div class="wrap"><div class="exam-setup">
        <h2>⏱ ${s("ex.title")}</h2>
        <p class="ex-desc">${s("ex.desc")}</p>
        <div class="ex-form">
          <label>${s("ex.duration")}:
            <select id="ex-dur"><option value="1">1 ${s("ex.min")}</option><option value="5">5 ${s("ex.min")}</option><option value="10" selected>10 ${s("ex.min")}</option></select>
          </label>
          <label>${s("ex.target")}: <input id="ex-target" type="number" value="35" min="5" max="120"/></label>
          <label>${s("ex.name")}: <input id="ex-name" type="text" value="${ie(r)}" placeholder="—"/></label>
        </div>
        <div class="donebtns">
          <button id="ex-cancel" class="ghost">${s("ex.cancel")}</button>
          <button id="ex-go" class="primary">${s("ex.start")}</button>
        </div>
      </div></div>`,document.getElementById("ex-go").onclick=()=>{const n=Number(document.getElementById("ex-dur").value),a=Number(document.getElementById("ex-target").value)||35,o=document.getElementById("ex-name").value.trim();ws(n,a,o)},document.getElementById("ex-cancel").onclick=()=>Vt();return}if(i.phase==="run"){const r=i.pool[i.pi],n=rt();C.innerHTML=`
      <div class="wrap">
        <div class="exam-hud">
          <span class="ex-timer" id="ex-timer">${Cn(Math.max(0,i.endAt-Date.now()))}</span>
          <span class="ex-hudstats" id="ex-hudstats">${s("ex.net")} <b>${n.net}</b> · ${s("st.accuracy")} <b>${n.accuracy}%</b> · ${s("ex.target.short")} ${i.target}</span>
          <button id="ex-stop" class="ghost">${s("ex.cancel")}</button>
        </div>
        <div class="card"><div class="exhead"><span class="extitle">${ie((r==null?void 0:r.title)??"")}</span></div>
          <div class="pattern" id="pattern">${jn()}</div></div>
        ${Pn()}
      </div>`,document.getElementById("ex-stop").onclick=()=>En();return}const e=rt(),t=e.net>=i.target;C.innerHTML=`
    <div class="wrap"><div class="exam-result">
      <h2>${s("ex.result")}</h2>
      <div class="ex-verdict ${t?"pass":"fail"}">${s(t?"ex.pass":"ex.fail")} <small>(${s("ex.target.short")} ${i.target} ${s("ex.net")})</small></div>
      <div class="statsbar">
        <div><b>${e.net}</b><span>${s("ex.net")}</span></div>
        <div><b>${e.gross}</b><span>${s("ex.gross")}</span></div>
        <div><b>${e.accuracy}%</b><span>${s("st.accuracy")}</span></div>
        <div><b>${e.typed+e.errors}</b><span>${s("ex.keystrokes")}</span></div>
        <div><b>${i.durMin} ${s("ex.min")}</b><span>${s("st.time")}</span></div>
      </div>
      <div class="donebtns">
        <button id="ex-cert" class="primary">${s("ex.cert")}</button>
        <button id="ex-retry">${s("ex.again")}</button>
        <button id="ex-exit" class="ghost">${s("ex.cancel")}</button>
      </div>
    </div></div>`,document.getElementById("ex-cert").onclick=()=>Rs(e,t),document.getElementById("ex-retry").onclick=()=>{i.phase="setup",f()},document.getElementById("ex-exit").onclick=()=>Vt()}function Cn(e){const t=Math.ceil(e/1e3);return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`}function Ls(){if(!i||i.phase!=="run")return;const e=document.getElementById("ex-timer"),t=document.getElementById("ex-hudstats");if(!e||!t)return;const r=rt();e.textContent=Cn(Math.max(0,i.endAt-Date.now())),t.innerHTML=`${s("ex.net")} <b>${r.net}</b> · ${s("st.accuracy")} <b>${r.accuracy}%</b> · ${s("ex.target.short")} ${i.target}`}function Rs(e,t){if(!i)return;const r=document.createElement("canvas");r.width=1200,r.height=850;const n=r.getContext("2d");n.fillStyle="#faf7f0",n.fillRect(0,0,1200,850),n.strokeStyle="#b9962e",n.lineWidth=6,n.strokeRect(30,30,1140,790),n.lineWidth=1.5,n.strokeRect(44,44,1112,762),n.fillStyle="#2a2a33",n.textAlign="center",n.font="700 28px Georgia, serif",n.fillText("TypeRIGHTing",600,110),n.font="800 64px Georgia, serif",n.fillStyle="#b9962e",n.fillText(s("ex.cert.title"),600,200),n.font="400 26px Georgia, serif",n.fillStyle="#555",n.fillText(s("ex.cert.sub"),600,240),n.font="700 52px Georgia, serif",n.fillStyle="#2a2a33",n.fillText(i.name||"—",600,350),n.font="800 110px Georgia, serif",n.fillStyle=t?"#2f7d4f":"#b3443a",n.fillText(`${e.net} ${s("ex.net")}`,600,500),n.font="400 30px Georgia, serif",n.fillStyle="#444",n.fillText(`${s("ex.gross")}: ${e.gross}   ·   ${s("st.accuracy")}: ${e.accuracy}%   ·   ${i.durMin} ${s("ex.min")}`,600,570),n.font="700 36px Georgia, serif",n.fillStyle=t?"#2f7d4f":"#b3443a",n.fillText(t?`✔ ${s("ex.pass")}`:`✘ ${s("ex.fail")}`,600,650),n.font="400 22px Georgia, serif",n.fillStyle="#777",n.fillText(`${s("ex.cert.date")}: ${new Date().toLocaleDateString()}`,600,740);const a=document.createElement("a");a.download=`TypeRIGHTing-test-${e.net}wpm.png`,a.href=r.toDataURL("image/png"),a.click()}function ot(){b="weak",i=null,Ae=xr(L()==="ru"?"ru":"en"),Rn=!mn(3),h=w(q?[Ae.join(" ")]:Ae),m&&(clearInterval(m),m=null),f()}function Qt(e){_t=e,ae=e.split(/\r?\n/).map(t=>t.trimEnd()).filter(t=>t.length>0),ae.length!==0&&(b="custom",i=null,W=null,h=w(q?[ae.join(" ")]:ae),m&&(clearInterval(m),m=null),f())}function Ps(){b=null,Dt()}function Os(){document.getElementById("bank").onchange=l=>{b=null,ee=l.target.value,Dt()},document.getElementById("profile").onchange=l=>{A=l.target.value,un(A),f()},document.getElementById("dark").onclick=()=>{Me=!Me;try{localStorage.setItem("tr_dark",Me?"1":"0")}catch{}Tn(),f()},Ln(()=>f()),document.getElementById("hide").onchange=l=>{tt=l.target.checked,f()},document.getElementById("sound").onchange=l=>{Ct=l.target.checked},document.getElementById("block").onchange=l=>{Pe=l.target.checked},document.getElementById("keyb").onchange=l=>{Bt=l.target.checked,f()},document.getElementById("heat").onchange=l=>{nt=l.target.checked;try{localStorage.setItem("tr_heat",nt?"1":"0")}catch{}f()},document.getElementById("flow").onchange=l=>{q=l.target.checked;try{localStorage.setItem("tr_flow",q?"1":"0")}catch{}vs(),b?b==="weak"?ot():Qt(_t):te()},document.getElementById("learn").onclick=()=>{b=null,i=null,Te=!0,m&&(clearInterval(m),m=null),f()},document.getElementById("compete").onclick=()=>{b=null,i=null,at=!0,m&&(clearInterval(m),m=null),f()},document.getElementById("course").onclick=()=>{b=null,i=null,st=!0,m&&(clearInterval(m),m=null),f()},document.getElementById("weak").onclick=()=>{b==="weak"?Ps():ot()},document.getElementById("custom").onclick=()=>{W="custom",f()},document.getElementById("progress").onclick=()=>{W="progress",f()},document.getElementById("exam").onclick=()=>{b=null,i={phase:"setup",durMin:10,target:35,name:"",endAt:0,typed:0,errors:0,count:0,pool:[],pi:0,timer:null},m&&(clearInterval(m),m=null),f()},document.getElementById("prev").onclick=()=>{if(b){Ke();return}$=($-1+M.length)%M.length,te()},document.getElementById("next").onclick=()=>{if(b){Ke();return}$=($+1)%M.length,te()};const e=document.getElementById("again");e&&(e.onclick=()=>{b?Ke(!0):te()});const t=document.getElementById("nextdone");t&&(t.onclick=()=>{if(b){Ke();return}$=($+1)%M.length,te()});const r=document.getElementById("modal-bg");r&&(r.onclick=l=>{l.target===r&&(W=null,f())});const n=document.getElementById("custom-go");n&&(n.onclick=()=>Qt(document.getElementById("custom-ta").value));const a=document.getElementById("custom-cancel");a&&(a.onclick=()=>{W=null,f()});const o=document.getElementById("prog-close");o&&(o.onclick=()=>{W=null,f()})}function Ke(e=!1){if(b==="weak"&&!e){ot();return}if(b==="weak"){ot();return}h=w(q?[ae.join(" ")]:ae),f()}function Dt(){M=tn(Nt,ee),v=xs(ee),$=Math.min(Math.max(v.lastIdx,0),Math.max(M.length-1,0)),te()}function Bn(e){return w(e?q?[e.lines.join(" ")]:e.lines:[""])}function te(){h=Bn(M[$]),m&&(clearInterval(m),m=null),v.lastIdx!==$&&(v.lastIdx=$,qt()),f()}document.addEventListener("keydown",e=>{var l;const t=(l=e.target)==null?void 0:l.tagName;if(t==="SELECT"||t==="INPUT"||t==="TEXTAREA")return;if(W){e.key==="Escape"&&(W=null,f());return}if(st){_r(e);return}if(Te){ts(e);return}if(at){fs(e);return}if(A==="kids"){fr(e);return}if(i&&i.phase!=="run"||h.finishedAt!==null)return;if(e.key==="Backspace"){e.preventDefault(),(i||!Pe)&&(Hn(h),f());return}let r=null;if(e.key==="Enter"?r=`
`:e.key.length===1&&(r=e.key),r===null)return;e.preventDefault();const n=h.pattern[h.pos]??"";r=Oe(r,n);const a=Mn();if(i){const d=he(h,r,!1);if(en(n,d.wrong,a),d.wrong&&Xt(),d.finished){const c=z(h);i.typed+=c.typed,i.errors+=c.errors,i.count++,i.pi=(i.pi+1)%i.pool.length,h=w([i.pool[i.pi].lines.join(" ")])}f();return}h.startedAt===null&&!m&&(m=window.setInterval(()=>{h.finishedAt===null&&js()},250));const o=he(h,r,Pe);if(en(n,o.wrong,a),o.wrong&&Xt(),o.finished){const d=z(h);if(q&&!b){const c=M[$];K.typed+=d.typed,K.errors+=d.errors,K.ms+=d.elapsedMs,K.count++,c&&!v.done.includes(c.id)&&v.done.push(c.id),$=($+1)%M.length,v.lastIdx=$,qt(),h=Bn(M[$])}else if(m&&(clearInterval(m),m=null),Ce(d.wpm,d.accuracy,Date.now()),!b){const c=M[$];c&&Ss(c)}}f()});function en(e,t,r){if(!e||e===`
`||e===" ")return;const n=lt(e,r);n&&it(n,!t)}function js(){const e=document.querySelector(".statsbar");e&&(e.innerHTML=On(In()))}xt(A);Tn();Wn().then(e=>{Nt=e,Dt()}).catch(e=>{C.innerHTML=`<div class="wrap"><p class="err">${s("err.load")}: ${ie(String(e))}</p></div>`});
