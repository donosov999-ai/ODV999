/* Common topnav for all relationship dashboards. Sticky header with dropdown to switch. */
(function(){
  var DASHBOARDS = [
    {url: 'relation-os-cheatsheet.html',  title: '📖 NZT-48 Шпаргалка'},
    // Тесты-диагностика
    {url: 'four-horsemen-test.html',      title: '🧪 4 всадника — тест'},
    {url: 'attachment-test.html',         title: '🧪 Тест привязанности (12 вопр)'},
    {url: 'attachment-triangle-test.html',title: '🧪 Привязанность + Карпман (30 вопр)'},
    {url: 'five-pillars-audit.html',      title: '🧪 Аудит 5 столпов'},
    {url: 'biochemistry-first.html',      title: '🧪 Биохимия ДО психолога'},
    {url: 'narcissist-test.html',         title: '🧪 Нарцисс или мудак?'},
    {url: 'alpha-beta-adult-test.html',   title: '🧪 Альфа / Бета / Взрослый'},
    {url: 'erotic-profile-test.html',     title: '🧪 Эротический профиль (Перель)'},
    {url: 'self-questionnaire.html',      title: '🧪 Опросник «Узнай себя» (32 вопр)'},
    // Трекеры
    {url: 'magic-6-hours-tracker.html',   title: '📊 Magic 6 Hours трекер'},
    {url: 'daily-habits.html',            title: '📊 Daily Habits (B=MAP)'},
    {url: 'state-of-the-union.html',      title: '📊 State of the Union'},
    {url: 'phubbing-tracker.html',        title: '📊 Phubbing трекер'},
    {url: 'magic-ratio-counter.html',     title: '📊 5:1 счётчик'},
    {url: '30-day-quest.html',            title: '📊 30 дней спасения'},
    // Ассистенты в моменте
    {url: 'aftermath-assistant.html',     title: '🛠 Ассистент после ссоры'},
    {url: 'i-message-generator.html',     title: '🛠 Я-сообщение генератор'},
    {url: 'therapy-speak-detector.html',  title: '🛠 Detector ярлыков'},
    // Кризис / справка
    {url: 'cycle-navigator.html',         title: '⚠ Цикл-навигатор (👨)'},
    {url: 'crisis-navigator.html',        title: '⚠ Кризис-навигатор'},
    // Карты
    {url: 'relation-os-overview.html',    title: '🗺 RELATION OS — карта 22 книги'},
    {url: 'relation-guide.html',          title: '🗺 RELATION OS — гайд'}
  ];

  function buildNav(){
    var nav = document.createElement('nav');
    nav.className = 'topnav';
    nav.innerHTML =
      '<div class="topnav-brand"><a href="../index.html">⌂ ODV999</a></div>' +
      '<select class="topnav-select" id="topnavSelect"></select>' +
      '<button class="topnav-theme" id="topnavTheme">🌙</button>';
    document.body.insertBefore(nav, document.body.firstChild);

    var sel = nav.querySelector('#topnavSelect');
    var current = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    DASHBOARDS.forEach(function(d){
      var opt = document.createElement('option');
      opt.value = d.url; opt.textContent = d.title;
      if (d.url === current) opt.selected = true;
      sel.appendChild(opt);
    });
    sel.addEventListener('change', function(e){
      if (e.target.value !== current) location.href = e.target.value;
    });

    var btn = nav.querySelector('#topnavTheme');
    var stored = localStorage.getItem('theme') || 'light';
    document.body.dataset.theme = stored;
    btn.textContent = stored === 'dark' ? '☀' : '🌙';
    btn.addEventListener('click', function(){
      var next = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
      document.body.dataset.theme = next;
      localStorage.setItem('theme', next);
      btn.textContent = next === 'dark' ? '☀' : '🌙';
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildNav);
  } else {
    buildNav();
  }
})();
