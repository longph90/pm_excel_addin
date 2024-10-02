!function(){"use strict";var t={85910:function(t,e,n){async function a(t,e){try{return await Excel.run((async n=>{const a=n.workbook.worksheets.getItem(t).tables.getItem(e).getRange();return a.load("values"),await n.sync(),a.values}))}catch(e){throw function(t,e){const n=document.getElementById("notification");n.textContent=t,n.className=`alert alert-${e}`,n.style.display="block",setTimeout((()=>{n.style.display="none"}),1e4)}("Error when reading data from "+t+": "+e.message,"danger"),e}}function r(t){const e=t[0];return t.slice(1).map((t=>{let n={};return t.forEach(((t,a)=>{n[e[a]]=t})),n}))}function o(t){return!!new RegExp("^(https?:\\/\\/)?((([a-zA-Z\\d]([a-zA-Z\\d-]*[a-zA-Z\\d])*)\\.)+[a-zA-Z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-zA-Z\\d%_.~+]*)*(\\?[;&a-zA-Z\\d%_.~+=-]*)?(\\#[-a-zA-Z\\d_]*)?$","i").test(t)}n.d(e,{Gz:function(){return o},VD:function(){return r},jF:function(){return a}}),Object.freeze({OPEN:"OPEN",IN_PROGRESS:"IN_PROGRESS",WAITING_REVIEW:"WAITING_REVIEW",WAITING_RELEASE:"WAITING_RELEASE",RELEASED:"RELEASED"})}},e={};function n(a){var r=e[a];if(void 0!==r)return r.exports;var o=e[a]={exports:{}};return t[a](o,o.exports,n),o.exports}n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)};var a=n(85910);function r(t){if(!t||0===t.length)return"<p>No data available</p>";let e="<table class='table table-bordered'><tbody>";return t.forEach(((t,n)=>{e+="<tr>",e+=`<th>${t.Label}</th>`,(0,a.Gz)(t.Text)?e+=`<td colspan="2"><div class="d-flex"><span class="text-left"><a href="${t.Text}" target="_blank">${t.Text}</a></span> <div class="d-flex"><button class="copy-btn" data-text="${t.Text}"><i class="bi bi-clipboard icon-right"></i></button></div></div></td>`:e+=`<td colspan="2"><div class="d-flex"><span class="text-left">${t.Text}</span> <div class="d-flex"><button class="copy-btn" data-text="${t.Text}"><i class="bi bi-clipboard icon-right"></i></button></div></div></td>`,e+="</tr>"})),e+="</tbody></table>",e}Office.onReady((t=>{t.host===Office.HostType.Excel&&(async()=>{const t=await async function(){return await(0,a.jF)("Setting","TblMaster")}(),e=(0,a.VD)(t),n=e.filter((t=>"PJ_Infor"===t.Key));document.getElementById("pj_information").innerHTML=r(n);const o=e.filter((t=>"PJ_Rule"===t.Key));document.getElementById("pj_rule").innerHTML=r(o);const c=e.filter((t=>"PJ_Mail"===t.Key));document.getElementById("pj_mail").innerHTML=r(c);const i=e.filter((t=>"PJ_Report"===t.Key));document.getElementById("pj_report").innerHTML=r(i);const s=e.filter((t=>"PJ_Process"===t.Key));document.getElementById("pj_process").innerHTML=r(s),document.addEventListener("click",(t=>{t.target&&t.target.closest(".copy-btn")&&async function(t){try{await navigator.clipboard.writeText(t),alert("Copied to clipboard: "+t)}catch(t){console.error("Failed to copy: ",t)}}(t.target.closest(".copy-btn").getAttribute("data-text"))}))})()}))}();
//# sourceMappingURL=general.js.map