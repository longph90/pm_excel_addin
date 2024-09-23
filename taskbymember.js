!function(){"use strict";!function(){function e(e){var t=new Date(e);return 25569+(t.getTime()-60*t.getTimezoneOffset()*1e3)/864e5}function t(e){return!e||isNaN(e)?"":new Date(86400*(e-25569)*1e3).toISOString().split("T")[0]}function n(e,t){var n=document.getElementById("notification");n.textContent=e,n.className="alert alert-".concat(t," position-fixed bottom-0 start-50 translate-middle-x mb-3"),n.classList.remove("d-none"),setTimeout((function(){n.classList.add("d-none")}),3e3)}var r=Object.freeze({OPEN:"OPEN",IN_PROGRESS:"IN_PROGRESS",WAITING_REVIEW:"WAITING_REVIEW",WAITING_RELEASE:"WAITING_RELEASE",RELEASED:"RELEASED"});function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function o(e,t,n){return(t=function(e){var t=function(e){if("object"!=a(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==a(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,c,s=[],l=!0,i=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=o.call(n)).done)&&(s.push(r.value),s.length!==t);l=!0);}catch(e){i=!0,a=e}finally{try{if(!l&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(i)throw a}}return s}}(e,t)||l(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||l(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){if(e){if("string"==typeof e)return i(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function u(e){Excel.run((function(r){var a=r.workbook.worksheets.getItem("WBS").tables.getItem("TblWbs").getDataBodyRange();a.load("values");var o=r.workbook.worksheets.getItem("Setting").getRange("B3");return o.load("values"),r.sync().then((function(){var r=a.values.find((function(t){return t[0]===e}));if(r){document.querySelector("#progressForm #progressTaskID").value=e;var c=document.querySelector("#linkToBack"),s=o.values[0][0];c.href="".concat(s).concat(e),c.textContent="Open Backlog",c.target="_blank",c.rel="noopener noreferrer",document.querySelector("#progressForm #pic").value=r[3],document.querySelector("#progressForm #reviewer").value=r[4],document.querySelector("#progressForm #pStartDate").value=t(r[5]),document.querySelector("#progressForm #pEndDate").value=t(r[6]),document.querySelector("#progressForm #pEffort").value=r[8],document.querySelector("#progressForm #aStartDate").value=t(r[9]),document.querySelector("#progressForm #aEndDate").value=t(r[10]),document.querySelector("#progressForm #aEffort").value=r[11],document.querySelector("#progressForm #percentACompleted").value=100*r[12],document.querySelector("#progressForm #aReleaseDate").value=t(r[13])}else n("không tìm thấy thông tin: "+e,"danger")}))})).catch((function(e){console.log(e)}))}function d(){var e=document.getElementById("accountSelect").value,t=document.getElementById("fullnameDisplay");e?Excel.run((function(n){var r=n.workbook.worksheets.getItem("Resource").tables.getItem("TblResource").getRange();return r.load("values"),n.sync().then((function(){for(var n=r.values,a=n[0],o=1;o<n.length;o++)if(n[o][a.indexOf("Account")]===e)return t.innerText=n[o][a.indexOf("Fullname")],void m();t.innerText=""}))})).catch((function(e){console.log("Error: "+e)})):(t.innerText="",m())}function m(){var e=document.getElementById("accountSelect").value.trim().toLowerCase();Excel.run((function(n){var a=n.workbook.worksheets.getItem("WBS").tables.getItem("TblWbs").getRange();return a.load("values"),n.sync().then((function(){var n=function(e,t){var n={"Tổng nhiệm vụ":[],"Task doing":[],"Task notDone":[],"Task review":[],"Task release":[],"Task released":[]};return e.forEach((function(e){var r=e[3].trim().toLowerCase(),a=e[4].trim().toLowerCase(),o=e[12];(function(e,t,n){return""===n||e===n||t===n})(r,a,t)&&function(e,t,n){n["Tổng nhiệm vụ"].push(e),t>0&&t<.8?n["Task doing"].push(e):0===t?n["Task notDone"].push(e):.8===t?n["Task review"].push(e):.9===t?n["Task release"].push(e):1===t&&n["Task released"].push(e)}(e,o,n)})),n}(a.values,e);!function(e){var n={total:e["Tổng nhiệm vụ"].length,doing:e["Task doing"].length,notDone:e["Task notDone"].length,review:e["Task review"].length,release:e["Task release"].length,released:e["Task released"].length};(function(e){Object.entries(e).forEach((function(e){var t=c(e,2),n=t[0],r=t[1],a=document.getElementById("".concat(n,"Count"));a?a.innerText=r:console.warn('Element with id "'.concat(n,'Count" not found'))}))})(n),function(e){var t,n,r,a,o,c,s;document.getElementById("taskProgressBar").innerHTML=(r=e.doing,a=e.review,o=e.release,c=e.released,s="\n      <div class='progress-bar progress-bar-striped bg-danger'\n           role='progressbar'\n           style='width: ".concat((n=e.notDone)/(t=e.total)*100,"%'\n           aria-valuenow='").concat(n/t*100,"'\n           aria-valuemin='0'\n           aria-valuemax='100'>\n          ").concat((n/t*100).toFixed(2),"%\n      </div>\n"),s+="\n      <div class='progress-bar progress-bar-striped bg-warning'\n           role='progressbar'\n           style='width: ".concat(r/t*100,"%'\n           aria-valuenow='").concat(r/t*100,"'\n           aria-valuemin='0'\n           aria-valuemax='100'>\n          ").concat((r/t*100).toFixed(2),"%\n      </div>\n"),s+="\n<div class='progress-bar progress-bar-striped bg-warning'\n     role='progressbar'\n     style='width: ".concat(a/t*100,"%'\n     aria-valuenow='").concat(a/t*100,"'\n     aria-valuemin='0'\n     aria-valuemax='100'>\n    ").concat((a/t*100).toFixed(2),"%\n</div>\n"),s+="\n<div class='progress-bar progress-bar-striped bg-warning'\n     role='progressbar'\n     style='width: ".concat(o/t*100,"%'\n     aria-valuenow='").concat(o/t*100,"'\n     aria-valuemin='0'\n     aria-valuemax='100'>\n    ").concat((o/t*100).toFixed(2),"%\n</div>\n"),s+="\n<div class='progress-bar progress-bar-striped bg-success'\n     role='progressbar'\n     style='width: ".concat(c/t*100,"%'\n     aria-valuenow='").concat(c/t*100,"'\n     aria-valuemin='0'\n     aria-valuemax='100'>\n    ").concat((c/t*100).toFixed(2),"%\n</div>\n"))}(n),function(e){var n={notDoneTasks:r.OPEN,doingTasks:r.IN_PROGRESS,reviewTasks:r.WAITING_REVIEW,releaseTasks:r.WAITING_RELEASE,releasedTasks:null};Object.entries(n).forEach((function(n){var a=c(n,2),s=a[0],l=a[1],i=s.replace("Tasks","");document.getElementById(s).innerHTML=function(e,n){if(0===e.length)return"<p>No tasks available.</p>";var a=function(e){var t=["TaskID","TaskName","P.StartDate","P.EndDate","P.Effort","PIC","Reviewer"];return e!==r.OPEN&&t.push("A.Effort","%A.Completed"),[r.OPEN,r.IN_PROGRESS,r.WAITING_REVIEW,r.WAITING_RELEASE].includes(e)&&t.push("Action"),t.map((function(e){return"<th>".concat(e,"</th>")}))}(n),c=e.map((function(e){return function(e,n){var a=['<td><a href="#" class="openModal link-info" data-taskid="'.concat(e[0],'">').concat(e[0],"</a></td>"),'<td><span class="d-inline-block text-truncate" style="max-width: 50px;">'.concat(e[1],"</span></td>"),"<td>".concat(t(e[5]),"</td>"),"<td>".concat(t(e[6]),"</td>"),"<td>".concat(e[8],"</td>"),"<td>".concat(e[3],"</td>"),"<td>".concat(e[4],"</td>")];return n!==r.OPEN&&a.push("<td>".concat(e[11],"</td>"),"<td>".concat(100*e[12],"%</td>")),a.push(function(e,t){var n=o(o(o(o({},r.OPEN,{class:"btn-task-start",icon:"▶️",tooltip:"Click To Start Task"}),r.IN_PROGRESS,{class:"btn-task-inprogress",icon:"✅",tooltip:"Mark as Completed"}),r.WAITING_REVIEW,{class:"btn-task-review",icon:"✅",tooltip:"Mark as Pass Review"}),r.WAITING_RELEASE,{class:"btn-task-release",icon:"🚀",tooltip:"Click To Release Task"})[t];return n?'\n    <td>\n      <button \n        class="btn btn-sm '.concat(n.class,'" \n        data-taskid="').concat(e,'" \n        title="').concat(n.tooltip,'"\n        data-toggle="tooltip" \n        data-placement="top"\n      >\n        ').concat(n.icon,"\n      </button>\n    </td>\n  "):""}(e[0],n)),"<tr>".concat(a.join(""),"</tr>")}(e,n)}));return"\n    <table class='table table-bordered'>\n      <thead>\n        <tr>".concat(a.join(""),"</tr>\n      </thead>\n      <tbody>\n        ").concat(c.join(""),"\n      </tbody>\n    </table>\n  ")}(e["Task ".concat(i)],l)}))}(e),function(){var e=document.querySelectorAll(".openModal"),t=document.getElementById("updateProgressModal"),n=document.getElementById("progressTaskID");function r(e){e.preventDefault();var r=this.getAttribute("data-taskid");n.value=r,u(r),new bootstrap.Modal(t).show()}e.forEach((function(e){e.addEventListener("click",r)}))}(),[r.OPEN,r.IN_PROGRESS,r.WAITING_REVIEW,r.WAITING_RELEASE].forEach(g)}(n)}))})).catch((function(e){console.error("Error retrieving tasks:",e),n("Error retrieving tasks:"+e,"danger")}))}function g(t){var a=o(o(o(o({},r.OPEN,{elementId:"notDoneTasks",buttonClass:"btn-task-start",completionPercentage:.1,updateField:{index:9,value:"A.StartDate"}}),r.IN_PROGRESS,{elementId:"doingTasks",buttonClass:"btn-task-inprogress",completionPercentage:.8}),r.WAITING_REVIEW,{elementId:"reviewTasks",buttonClass:"btn-task-review",completionPercentage:.9,updateField:{index:10,value:"A.EndDate"}}),r.WAITING_RELEASE,{elementId:"releaseTasks",buttonClass:"btn-task-release",completionPercentage:1,updateField:{index:13,value:"A.ReleaseDate"}})[t];a&&document.getElementById(a.elementId).addEventListener("click",(function(t){t.target&&t.target.classList.contains(a.buttonClass)&&function(t,n){return Excel.run((function(r){var a=r.workbook.tables.getItem("TblWbs").getDataBodyRange();return a.load("values"),r.sync().then((function(){var o=a.values,c=o.findIndex((function(e){return e[0]===t}));if(-1!==c){var l=s(o[c]);if(l[12]=n.completionPercentage,n.updateField){var i=(new Date).toISOString().split("T")[0];l[n.updateField.index]=e(i)}a.getRow(c).values=[l]}return r.sync()}))}))}(t.target.getAttribute("data-taskid"),a).then((function(){d(),n("Task updated successfully!","success")})).catch((function(e){console.log(e),n("Error: ".concat(e.message),"danger")}))}))}Office.onReady((function(t){t.host===Office.HostType.Excel&&(Excel.run((function(e){var t=e.workbook.worksheets.getItem("Resource").tables.getItem("TblResource").getRange();return t.load("values"),e.sync().then((function(){for(var e=t.values,n=document.getElementById("accountSelect"),r=e[0].indexOf("Account"),a=1;a<e.length;a++){var o=e[a][r],c=document.createElement("option");c.value=o,c.text=o,n.appendChild(c)}}))})).catch((function(e){console.log("Error: "+e)})),m(),document.getElementById("accountSelect").onchange=d,document.getElementById("btnUpdateProgress").addEventListener("click",(function(){var t=document.getElementById("progressTaskID").value,r={pic:document.getElementById("pic").value,reviewer:document.getElementById("reviewer").value,pStartDate:document.getElementById("pStartDate").value,pEndDate:document.getElementById("pEndDate").value,pEffort:document.getElementById("pEffort").value,startDate:document.getElementById("aStartDate").value,endDate:document.getElementById("aEndDate").value,effort:document.getElementById("aEffort").value,percentCompleted:document.getElementById("percentACompleted").value,releaseDate:document.getElementById("aReleaseDate").value};u(t),function(t,r){Excel.run((function(a){var o=a.workbook.worksheets.getItem("WBS").tables.getItem("TblWbs").getDataBodyRange();return o.load("values"),a.sync().then((function(){var c=o.values,l=c.findIndex((function(e){return e[0]===t}));if(-1!==l){var i=s(c[l]);return i[3]=r.pic,i[4]=r.reviewer,i[5]=e(r.pStartDate),i[6]=e(r.pEndDate),i[8]=r.pEffort,i[9]=e(r.startDate),i[10]=e(r.endDate),i[11]=r.effort,i[12]=r.percentCompleted/100,i[13]=e(r.releaseDate),o.getRow(l).values=[i],a.sync().then((function(){n("Update Successfully","success")}))}n("Không tìm thấy thông tin: "+t,"danger")}))})).catch((function(e){console.log(e),n("Error updating task details: "+e.message,"danger")}))}(t,r),d();var a=document.getElementById("updateProgressModal"),o=bootstrap.Modal.getInstance(a);o?o.hide():new bootstrap.Modal(a).hide()})),document.getElementById("updateProgressModal").addEventListener("hidden.bs.modal",(function(){console.log("Modal đã đóng.")})),document.addEventListener("DOMContentLoaded",(function(){var e,t;e=(new Date).toISOString().split("T")[0],(t=document.getElementById("logworkForm_date"))?t.value=e:console.warn("Logwork date input field not found")})))}))}()}();
//# sourceMappingURL=taskbymember.js.map