!function(r){var t={};function e(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return r[n].call(a.exports,a,a.exports,e),a.l=!0,a.exports}e.m=r,e.c=t,e.d=function(r,t,n){e.o(r,t)||Object.defineProperty(r,t,{enumerable:!0,get:n})},e.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},e.t=function(r,t){if(1&t&&(r=e(r)),8&t)return r;if(4&t&&"object"==typeof r&&r&&r.__esModule)return r;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:r}),2&t&&"string"!=typeof r)for(var a in r)e.d(n,a,function(t){return r[t]}.bind(null,a));return n},e.n=function(r){var t=r&&r.__esModule?function(){return r.default}:function(){return r};return e.d(t,"a",t),t},e.o=function(r,t){return Object.prototype.hasOwnProperty.call(r,t)},e.p="dist",e(e.s=0)}([function(r,t,e){"use strict";e.r(t);window.app=new class{constructor(){this.initApp()}initApp(){Highcharts.mapChart("container",{chart:{map:"countries/br/br-all"},title:{text:"Mapa do Brasil"},subtitle:{text:'Source map: <a href="http://code.highcharts.com/mapdata/countries/br/br-all.js">Brasil</a>'},mapNavigation:{enabled:!0,buttonOptions:{verticalAlign:"bottom"}},colorAxis:{min:0},series:[{data:[["br-sp",0],["br-ma",1],["br-pa",2],["br-sc",3],["br-ba",4],["br-ap",5],["br-ms",6],["br-mg",7],["br-go",8],["br-rs",9],["br-to",10],["br-pi",11],["br-al",12],["br-pb",13],["br-ce",14],["br-se",15],["br-rr",16],["br-pe",17],["br-pr",18],["br-es",19],["br-rj",100],["br-rn",21],["br-am",22],["br-mt",23],["br-df",24],["br-ac",25],["br-ro",26]],name:"Random data",states:{hover:{color:"#BADA55"}},dataLabels:{enabled:!0,format:"{point.name}"}}]})}}}]);