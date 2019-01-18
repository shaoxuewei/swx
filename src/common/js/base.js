(function (win, doc) {
  if (!win.addEventListener) return;
  var html = doc.documentElement;

  function setFont() {
    var cliWidth = html.clientWidth;
    html.style.fontSize = cliWidth / 10 + 'px';
  }
  setFont();
  doc.addEventListener('DOMContentLoaded', setFont, false);
  win.addEventListener('resize', setFont, false);
})(window, document);