!function(){"use strict";var e={85910:function(e,t,n){function o(e,t,n,o,a,r,u,c){return Excel.run((function(s){var l=s.workbook.worksheets.getItem(e).tables.getItem(t),i=s.workbook.worksheets.getItem(a).tables.getItem(r),f=l.getDataBodyRange(),d=i.getDataBodyRange();f.load("values"),d.load("values");var v=l.getHeaderRowRange(),g=i.getHeaderRowRange();return v.load("values"),g.load("values"),s.sync().then((function(){var e=f.values,t=d.values,a=new Set(t.map((function(e){return e[0]}))),r=v.values[0],l=g.values[0],p=r.indexOf(n),h=o.map((function(e){return r.indexOf(e)})),w=(l.indexOf(u),c.map((function(e){return l.indexOf(e)}))),m=[];if(e.forEach((function(e){var t=e[p];if(!a.has(t)){var n=new Array(l.length).fill("");h.forEach((function(t,o){var a=w[o];n[a]=e[t]})),m.push(n)}})),m.length>0)return i.rows.add(null,m),s.sync().then((function(){console.log("Mapping completed. New rows inserted:",m.length)}));console.log("No new rows to insert.")})).catch((function(e){console.error(e)}))}))}n.d(t,{pU:function(){return o}})}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};var o=n(85910);Office.onReady((function(e){if(e.host===Office.HostType.Excel){var t=["キー","カテゴリー名","親課題キー","開始日","期限日","期限日"],n=["TaskID","TaskName","ParentID","P.StartDate","P.EndDate","P.ReleaseDate"];document.getElementById("btnSyncData").onclick=function(){(0,o.pU)("ExternalData","TblExternalData","キー",t,"WBS","TblWbs","TaskID",n)}}}))}();
//# sourceMappingURL=taskpane.js.map