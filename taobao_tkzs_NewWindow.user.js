// ==UserScript==
// @name         taobao_tkzs_NewWindow
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        https://detail.tmall.com/item.htm*
// @include     https://item.taobao.com/item.htm*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    //window.open('http://cha.taokezhushou.com/?url=' +encodeURIComponent(document.location.href),'getA','toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, copyhistory=yes, width=930, height=600');void(0);
    window.open('http://cha.taokezhushou.com/?url=' +encodeURIComponent(document.location.href));
})();
