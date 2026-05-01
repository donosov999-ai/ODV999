/* Floating overlay nav for RELATION OS dashboards */
(function(){
  var REL = [
    {url:'relation-os-cheatsheet.html',  title:'📖 Шпаргалка'},
    {url:'four-horsemen-test.html',      title:'🧪 4 всадника'},
    {url:'attachment-test.html',         title:'🧪 Привязанность (12)'},
    {url:'attachment-triangle-test.html',title:'🧪 Привязанность + Карпман (30)'},
    {url:'five-pillars-audit.html',      title:'🧪 5 столпов'},
    {url:'biochemistry-first.html',      title:'🧪 Биохимия первой'},
    {url:'narcissist-test.html',         title:'🧪 Нарцисс?'},
    {url:'alpha-beta-adult-test.html',   title:'🧪 Альфа/Бета/Взрослый'},
    {url:'erotic-profile-test.html',     title:'🧪 Эротический профиль'},
    {url:'self-questionnaire.html',      title:'🧪 «Узнай себя»'},
    {url:'magic-6-hours-tracker.html',   title:'📊 Magic 6 Hours'},
    {url:'daily-habits.html',            title:'📊 Daily Habits'},
    {url:'state-of-the-union.html',      title:'📊 State of the Union'},
    {url:'phubbing-tracker.html',        title:'📊 Phubbing'},
    {url:'magic-ratio-counter.html',     title:'📊 5:1 счётчик'},
    {url:'30-day-quest.html',            title:'📊 30 дней'},
    {url:'aftermath-assistant.html',     title:'🛠 После ссоры'},
    {url:'i-message-generator.html',     title:'🛠 Я-сообщение'},
    {url:'therapy-speak-detector.html',  title:'🛠 Detector ярлыков'},
    {url:'cycle-navigator.html',         title:'⚠ Цикл-навигатор'},
    {url:'crisis-navigator.html',        title:'⚠ Кризис'},
    {url:'relation-os-overview.html',    title:'🗺 Карта RELATION OS'},
    {url:'relation-guide.html',          title:'🗺 Гайд RELATION OS'}
  ];
  function build(){
    if (document.getElementById('odv-overlay-nav')) return;
    var current = (location.pathname.split('/').pop() || '').toLowerCase();
    var wrap = document.createElement('div');
    wrap.id = 'odv-overlay-nav';
    wrap.style.cssText = 'position:fixed;top:8px;right:8px;z-index:99999;display:flex;gap:6px;font-family:-apple-system,BlinkMacSystemFont,sans-serif;font-size:13px;';
    var home = document.createElement('a');
    home.href = '../index.html';
    home.textContent = '⌂ Главная';
    home.style.cssText = 'background:#fff;color:#1f2328;border:1px solid #d0d7de;border-radius:6px;padding:7px 13px;text-decoration:none;font-weight:600;box-shadow:0 4px 12px rgba(0,0,0,.1);transition:background .15s;';
    home.onmouseover = function(){ home.style.background = '#f6f8fa'; };
    home.onmouseout = function(){ home.style.background = '#fff'; };
    var sel = document.createElement('select');
    sel.style.cssText = 'background:#fff;color:#1f2328;border:1px solid #d0d7de;border-radius:6px;padding:7px 9px;font-size:13px;font-family:inherit;cursor:pointer;max-width:200px;box-shadow:0 4px 12px rgba(0,0,0,.1);';
    var def = document.createElement('option'); def.value=''; def.textContent='— дашборд —'; sel.appendChild(def);
    REL.forEach(function(d){
      var opt = document.createElement('option');
      opt.value = d.url; opt.textContent = d.title;
      if (d.url === current) opt.selected = true;
      sel.appendChild(opt);
    });
    sel.addEventListener('change', function(e){
      if (e.target.value && e.target.value !== current) location.href = e.target.value;
    });
    wrap.appendChild(home); wrap.appendChild(sel);
    document.body.appendChild(wrap);
    if (window.innerWidth <= 600) { home.textContent = '⌂'; sel.style.maxWidth = '130px'; }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build);
  else build();
})();
