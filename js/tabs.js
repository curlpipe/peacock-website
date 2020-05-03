// Tab code
function changeTab(activate, clicked) {
  document.querySelectorAll('li.tab').forEach(function(tab) {
    if (tab.id == activate) { tab.classList.add('is-active'); }
    else { tab.classList.remove('is-active'); }
  });
  document.querySelectorAll('div.tab-pane').forEach(function(tab) {
    if (tab.id == clicked) { tab.style.display = 'initial'; }
    else { tab.style.display = 'none'; }
  });
}

// Detect platform
var OSName="Unknown OS";
if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";

switch(OSName) {
  case 'Windows':
    changeTab('toggle-windows', 1);
    break;
  case 'Linux':
    changeTab('toggle-linux', 2);
    break;
  case 'MacOS':
    changeTab('toggle-mac', 3);
    break;
  default:
    changeTab('toggle-windows', 1);
}
