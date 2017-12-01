function loadInjector() {
  var script = "window.KSext={_u1:function(o,t,v){o.setAttribute(t,v);},_u2:function(u){var o=document.createElement('script');this._u1(o,'type','text/javascript');this._u1(o,'src',u);document.getElementsByTagName('head')[0].appendChild(o);}};";
  script+="KSext._u2('https://cdn.rawgit.com/hidekiyamamoto/element-keystone-chrome-extension/master/KS.js');";
  chrome.tabs.executeScript({
    code:script
  });
}
function getCurrentTabUrl(callback) {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    var tab = tabs[0];
    var url = tab.url;
    console.assert(typeof url == 'string', 'tab.url should be a string');
    callback(url);
  });
}


document.addEventListener('DOMContentLoaded', () => {
  getCurrentTabUrl((url) => {loadInjector();});
});
