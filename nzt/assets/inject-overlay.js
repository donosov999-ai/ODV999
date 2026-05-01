/* Floating overlay nav for NZT pages */
(function(){
  var BIO = [
    {url:'poroshki-calculator.html', title:'🧪 Калькулятор порошков v4.7'},
    {url:'stack-denis.html',     title:'💊 Стек Дениса'},
    {url:'biohacking-map.html',  title:'🗺 Карта биохакинга'},
    {url:'nzt48-overview.html',  title:'🗺 NZT-48 v4'},
    {url:'family.html',          title:'👪 Семейный'},
    {url:'7-neurosystems.html',  title:'🧠 7 нейросистем'},
    {url:'skincare-denis.html',  title:'🧴 Skincare'}
  ];
  function build(){
    if (document.getElementById('odv-overlay-nav')) return;
    var current = (location.pathname.split('/').pop() || '').toLowerCase();
    var wrap = document.createElement('div');
    wrap.id = 'odv-overlay-nav';
    wrap.style.cssText = 'position:fixed;top:8px;right:8px;z-index:99999;display:flex;gap:6px;font-family:-apple-system,BlinkMacSystemFont,sans-serif;font-size:13px;';
    var home = document.createElement('a');
    home.href = '../index.html';
    home.textContent = '⌂ NZT главная';
    home.style.cssText = 'background:#fff;color:#1f2328;border:1px solid #d0d7de;border-radius:6px;padding:7px 13px;text-decoration:none;font-weight:600;box-shadow:0 4px 12px rgba(0,0,0,.1);';
    var sel = document.createElement('select');
    sel.style.cssText = 'background:#fff;color:#1f2328;border:1px solid #d0d7de;border-radius:6px;padding:7px 9px;font-size:13px;font-family:inherit;cursor:pointer;max-width:200px;box-shadow:0 4px 12px rgba(0,0,0,.1);';
    var def = document.createElement('option'); def.value=''; def.textContent='— дашборд —'; sel.appendChild(def);
    BIO.forEach(function(d){
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
