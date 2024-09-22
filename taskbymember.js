!function(){"use strict";!function(){function e(e){var t=new Date(e);return 25569+(t.getTime()-60*t.getTimezoneOffset()*1e3)/864e5}function t(e){return!e||isNaN(e)?"":new Date(86400*(e-25569)*1e3).toISOString().split("T")[0]}function n(e,t){var n=document.getElementById("notification");n.textContent=e,n.className="alert alert-".concat(t," position-fixed bottom-0 start-50 translate-middle-x mb-3"),n.classList.remove("d-none"),setTimeout((function(){n.classList.add("d-none")}),3e3)}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=Array(t);n<t;n++)a[n]=e[n];return a}function r(e){Excel.run((function(a){var r=a.workbook.worksheets.getItem("WBS").tables.getItem("TblWbs").getDataBodyRange();return r.load("values"),a.sync().then((function(){var a=r.values.find((function(t){return t[0]===e}));a?(document.querySelector("#progressForm #progressTaskID").value=e,document.querySelector("#progressForm #aStartDate").value=t(a[9]),document.querySelector("#progressForm #aEndDate").value=t(a[10]),document.querySelector("#progressForm #aEffort").value=a[11],document.querySelector("#progressForm #percentACompleted").value=100*a[12],document.querySelector("#progressForm #aReleaseDate").value=t(a[13])):n("không tìm thấy thông tin: "+e,"danger")}))})).catch((function(e){console.log(e)}))}function o(){var e=document.getElementById("accountSelect").value,t=document.getElementById("fullnameDisplay");e?Excel.run((function(n){var a=n.workbook.worksheets.getItem("Resource").tables.getItem("TblResource").getRange();return a.load("values"),n.sync().then((function(){for(var n=a.values,r=n[0],o=1;o<n.length;o++)if(n[o][r.indexOf("Account")]===e)return t.innerText=n[o][r.indexOf("Fullname")],void s();t.innerText=""}))})).catch((function(e){console.log("Error: "+e)})):(t.innerText="",s())}function s(){var e=document.getElementById("accountSelect").value;Excel.run((function(t){var n=t.workbook.worksheets.getItem("WBS").tables.getItem("TblWbs").getRange();return n.load("values"),t.sync().then((function(){var t=n.values,a={"Tổng nhiệm vụ":[],"Task đang làm":[],"Task chưa làm":[],"Task chờ review":[],"Task chờ release":[],"Task đã release":[]};t.forEach((function(t){var n=t[3].trim().toLowerCase(),r=t[12];n===e.trim().toLowerCase()&&(a["Tổng nhiệm vụ"].push(t),r>0&&r<.8?a["Task đang làm"].push(t):0===r?a["Task chưa làm"].push(t):.8===r?a["Task chờ review"].push(t):.9===r?a["Task chờ release"].push(t):1===r&&a["Task đã release"].push(t)),""===e.trim().toLowerCase()&&(a["Tổng nhiệm vụ"].push(t),r>0&&r<.8?a["Task đang làm"].push(t):0===r?a["Task chưa làm"].push(t):.8===r?a["Task chờ review"].push(t):.9===r?a["Task chờ release"].push(t):1===r&&a["Task đã release"].push(t))}));var o,s,l,d,u,i,m,g=a["Tổng nhiệm vụ"].length,h=a["Task đang làm"].length,v=a["Task chưa làm"].length,f=a["Task chờ review"].length,p=a["Task chờ release"].length,y=a["Task đã release"].length;document.getElementById("totalTasksCount").innerText=g,document.getElementById("doingCount").innerText=h,document.getElementById("notDoneCount").innerText=v,document.getElementById("reviewCount").innerText=f,document.getElementById("releaseCount").innerText=p,document.getElementById("releasedCount").innerText=y,document.getElementById("taskProgressBar").innerHTML=(l=h,d=f,u=p,i=y,m="\n      <div class='progress-bar progress-bar-striped bg-danger'\n           role='progressbar'\n           style='width: ".concat((s=v)/(o=g)*100,"%'\n           aria-valuenow='").concat(s/o*100,"'\n           aria-valuemin='0'\n           aria-valuemax='100'>\n          ").concat((s/o*100).toFixed(2),"%\n      </div>\n"),m+="\n      <div class='progress-bar progress-bar-striped bg-warning'\n           role='progressbar'\n           style='width: ".concat(l/o*100,"%'\n           aria-valuenow='").concat(l/o*100,"'\n           aria-valuemin='0'\n           aria-valuemax='100'>\n          ").concat((l/o*100).toFixed(2),"%\n      </div>\n"),m+="\n<div class='progress-bar progress-bar-striped bg-warning'\n     role='progressbar'\n     style='width: ".concat(d/o*100,"%'\n     aria-valuenow='").concat(d/o*100,"'\n     aria-valuemin='0'\n     aria-valuemax='100'>\n    ").concat((d/o*100).toFixed(2),"%\n</div>\n"),m+="\n<div class='progress-bar progress-bar-striped bg-warning'\n     role='progressbar'\n     style='width: ".concat(u/o*100,"%'\n     aria-valuenow='").concat(u/o*100,"'\n     aria-valuemin='0'\n     aria-valuemax='100'>\n    ").concat((u/o*100).toFixed(2),"%\n</div>\n"),m+="\n<div class='progress-bar progress-bar-striped bg-success'\n     role='progressbar'\n     style='width: ".concat(i/o*100,"%'\n     aria-valuenow='").concat(i/o*100,"'\n     aria-valuemin='0'\n     aria-valuemax='100'>\n    ").concat((i/o*100).toFixed(2),"%\n</div>\n")),document.getElementById("doingTasks").innerHTML=c(a["Task đang làm"],!0),document.getElementById("notDoneTasks").innerHTML=c(a["Task chưa làm"]),document.getElementById("reviewTasks").innerHTML=c(a["Task chờ review"]),document.getElementById("releaseTasks").innerHTML=c(a["Task chờ release"]),document.getElementById("releasedTasks").innerHTML=c(a["Task đã release"]),document.querySelectorAll(".openModal").forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var t=this.getAttribute("data-taskid");document.getElementById("progressTaskID").value=t,r(t),new bootstrap.Modal(document.getElementById("updateProgressModal")).show()}))})),document.querySelectorAll(".open-logwork-modal").forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var t=this.getAttribute("data-taskid");document.getElementById("taskId").value=t,r(t),new bootstrap.Modal(document.getElementById("logworkModal")).show()}))}))}))})).catch((function(e){console.error("Error retrieving tasks:",e)}))}function c(e,n){if(0===e.length)return"<p>No tasks available.</p>";var a="<table class='table table-bordered'>";return a+="<thead><tr>",a+="<th>TaskID</th><th>P.StartDate</th><th>P.EndDate</th><th>P.Effort</th>",a+="<th>A.StartDate</th><th>A.EndDate</th><th>A.Effort</th><th>%A.Completed</th>",n&&(a+="<th>Action</th>"),a+="</tr></thead><tbody>",e.forEach((function(e){a+="<tr>",a+='<td><a href="#" class="openModal link-info" data-taskid="'.concat(e[0],'">').concat(e[0],"</a></td>"),a+="<td>".concat(t(e[5]),"</td>"),a+="<td>".concat(t(e[6]),"</td>"),a+="<td>".concat(e[8],"</td>"),a+="<td>".concat(t(e[9]),"</td>"),a+="<td>".concat(t(e[10]),"</td>"),a+="<td>".concat(e[11],"</td>"),a+="<td>".concat(100*e[12],"%</td>"),n&&(a+='<td><button class="btn btn-primary btn-sm open-logwork-modal" data-taskid="'.concat(e[0],'">Logwork</button></td>')),a+="</tr>"})),a+="</tbody></table>"}Office.onReady((function(t){t.host===Office.HostType.Excel&&(Excel.run((function(e){var t=e.workbook.worksheets.getItem("Resource").tables.getItem("TblResource").getRange();return t.load("values"),e.sync().then((function(){for(var e=t.values,n=document.getElementById("accountSelect"),a=e[0].indexOf("Account"),r=1;r<e.length;r++){var o=e[r][a],s=document.createElement("option");s.value=o,s.text=o,n.appendChild(s)}}))})).catch((function(e){console.log("Error: "+e)})),s(),document.getElementById("accountSelect").onchange=o,document.getElementById("btnUpdateProgress").addEventListener("click",(function(){var t=document.getElementById("progressTaskID").value,o={startDate:document.getElementById("aStartDate").value,endDate:document.getElementById("aEndDate").value,effort:document.getElementById("aEffort").value,percentCompleted:document.getElementById("percentACompleted").value,releaseDate:document.getElementById("aReleaseDate").value};r(t),function(t,r){Excel.run((function(o){var s=o.workbook.worksheets.getItem("WBS").tables.getItem("TblWbs").getDataBodyRange();return s.load("values"),o.sync().then((function(){var c,l=s.values,d=l.findIndex((function(e){return e[0]===t}));if(-1!==d){var u=function(e){if(Array.isArray(e))return a(e)}(c=l[d])||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(c)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(c)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();return u[9]=e(r.startDate),u[10]=e(r.endDate),u[11]=r.effort,u[12]=r.percentCompleted/100,u[13]=e(r.releaseDate),s.getRow(d).values=[u],o.sync().then((function(){n("Update Successfully","success")}))}n("Không tìm thấy thông tin: "+t,"danger")}))})).catch((function(e){console.log(e),n("Error updating task details: "+e.message,"danger")}))}(t,o);var s=document.getElementById("updateProgressModal"),c=bootstrap.Modal.getInstance(s);c?c.hide():new bootstrap.Modal(s).hide()})),document.getElementById("updateProgressModal").addEventListener("hidden.bs.modal",(function(){console.log("Modal đã đóng.")})),document.addEventListener("DOMContentLoaded",(function(){var e,t;e=(new Date).toISOString().split("T")[0],(t=document.getElementById("logworkForm_date"))?t.value=e:console.warn("Logwork date input field not found")})))}))}()}();
//# sourceMappingURL=taskbymember.js.map