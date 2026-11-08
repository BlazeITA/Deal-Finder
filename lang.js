// Lingua del sito: scelta salvata, altrimenti quella del browser (italiano o inglese)
(function () {
  var saved = null;
  try { saved = localStorage.getItem('df-lang'); } catch (e) {}
  var lang = saved || ((navigator.language || 'en').slice(0, 2) === 'it' ? 'it' : 'en');
  function set(l) {
    document.documentElement.lang = l;
    try { localStorage.setItem('df-lang', l); } catch (e) {}
    document.querySelectorAll('.lang button').forEach(function (b) { b.classList.toggle('on', b.dataset.l === l); });
    var t = document.querySelector('title[data-' + l + ']');
    if (t) document.title = t.getAttribute('data-' + l);
  }
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.lang button').forEach(function (b) { b.onclick = function () { set(b.dataset.l); }; });
    set(lang);
  });
  document.documentElement.lang = lang;
})();
