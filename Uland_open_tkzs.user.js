// ==UserScript==
// @name         Uland_open_tkzs
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        http://uland.taobao.com/coupon/edetail*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

 
    var eg = Request("itemId");
    //alert(eg);
    //window.open('https://detail.taobao.com/item.htm?id=' +eg);
    //window.open('http://cha.taokezhushou.com/?url=' +encodeURIComponent('https://detail.taobao.com/item.htm?id=' +eg));
//window.open('https://detail.taobao.com/item.htm?id=' +encodeURIComponent(document.location.href));
    // Your code here...
   
    window.location.href='http://cha.taokezhushou.com/?url=' +encodeURIComponent('https://detail.taobao.com/item.htm?id=' +eg);
    
})();

function Request(strName)
     {
       var strHref =document.location.href;
       var intPos = strHref.indexOf("?");
       var strRight = strHref.substr(intPos + 1);

       var arrTmp = strRight.split("&");
       for(var i = 0; i < arrTmp.length; i++)
       {
        var arrTemp = arrTmp[i].split("=");

       if(arrTemp[0].toUpperCase() == strName.toUpperCase()) return arrTemp[1];
       }
       return "";
     }

