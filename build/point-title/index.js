!function(){"use strict";var t,n={270:function(){var t=window.wp.blocks,n=window.React,e=window.wp.i18n,r=window.wp.blockEditor,o=JSON.parse('{"u2":"nah-blocks/point-title"}');(0,t.registerBlockType)(o.u2,{edit:function(t){const o=(0,r.useBlockProps)(),{className:i,attributes:c,setAttributes:a}=t;return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(r.RichText,{...o,tagName:"h2",placeholder:(0,e.__)("Title","info-points"),value:c.content,onChange:t=>a({content:t})}))},save:function(t){const{className:e,attributes:o}=t;return(0,n.createElement)(r.RichText.Content,{...r.useBlockProps.save(),tagName:"h2",value:o.content})}})}},e={};function r(t){var o=e[t];if(void 0!==o)return o.exports;var i=e[t]={exports:{}};return n[t](i,i.exports,r),i.exports}r.m=n,t=[],r.O=function(n,e,o,i){if(!e){var c=1/0;for(l=0;l<t.length;l++){e=t[l][0],o=t[l][1],i=t[l][2];for(var a=!0,u=0;u<e.length;u++)(!1&i||c>=i)&&Object.keys(r.O).every((function(t){return r.O[t](e[u])}))?e.splice(u--,1):(a=!1,i<c&&(c=i));if(a){t.splice(l--,1);var s=o();void 0!==s&&(n=s)}}return n}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[e,o,i]},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},function(){var t={108:0,970:0};r.O.j=function(n){return 0===t[n]};var n=function(n,e){var o,i,c=e[0],a=e[1],u=e[2],s=0;if(c.some((function(n){return 0!==t[n]}))){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(u)var l=u(r)}for(n&&n(e);s<c.length;s++)i=c[s],r.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return r.O(l)},e=self.webpackChunkinfo_points=self.webpackChunkinfo_points||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))}();var o=r.O(void 0,[970],(function(){return r(270)}));o=r.O(o)}();