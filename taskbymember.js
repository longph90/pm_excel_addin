/*! For license information please see taskbymember.js.LICENSE.txt */
!function(){"use strict";var e={85910:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(){o=function(){return t};var e,t={},n=Object.prototype,a=n.hasOwnProperty,i=Object.defineProperty||function(e,t,n){e[t]=n.value},c="function"==typeof Symbol?Symbol:{},l=c.iterator||"@@iterator",u=c.asyncIterator||"@@asyncIterator",s=c.toStringTag||"@@toStringTag";function d(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{d({},"")}catch(e){d=function(e,t,n){return e[t]=n}}function f(e,t,n,r){var o=t&&t.prototype instanceof k?t:k,a=Object.create(o.prototype),c=new N(r||[]);return i(a,"_invoke",{value:L(e,n,c)}),a}function m(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}t.wrap=f;var p="suspendedStart",v="suspendedYield",g="executing",h="completed",y={};function k(){}function E(){}function b(){}var w={};d(w,l,(function(){return this}));var I=Object.getPrototypeOf,T=I&&I(I(O([])));T&&T!==n&&a.call(T,l)&&(w=T);var D=b.prototype=k.prototype=Object.create(w);function S(e){["next","throw","return"].forEach((function(t){d(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function n(o,i,c,l){var u=m(e[o],e,i);if("throw"!==u.type){var s=u.arg,d=s.value;return d&&"object"==r(d)&&a.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,c,l)}),(function(e){n("throw",e,c,l)})):t.resolve(d).then((function(e){s.value=e,c(s)}),(function(e){return n("throw",e,c,l)}))}l(u.arg)}var o;i(this,"_invoke",{value:function(e,r){function a(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(a,a):a()}})}function L(t,n,r){var o=p;return function(a,i){if(o===g)throw Error("Generator is already running");if(o===h){if("throw"===a)throw i;return{value:e,done:!0}}for(r.method=a,r.arg=i;;){var c=r.delegate;if(c){var l=B(c,r);if(l){if(l===y)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===p)throw o=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=g;var u=m(t,n,r);if("normal"===u.type){if(o=r.done?h:v,u.arg===y)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(o=h,r.method="throw",r.arg=u.arg)}}}function B(t,n){var r=n.method,o=t.iterator[r];if(o===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,B(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),y;var a=m(o,t.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,y;var i=a.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,y):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}function R(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function A(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(R,this),this.reset(!0)}function O(t){if(t||""===t){var n=t[l];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function n(){for(;++o<t.length;)if(a.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}throw new TypeError(r(t)+" is not iterable")}return E.prototype=b,i(D,"constructor",{value:b,configurable:!0}),i(b,"constructor",{value:E,configurable:!0}),E.displayName=d(b,s,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===E||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,d(e,s,"GeneratorFunction")),e.prototype=Object.create(D),e},t.awrap=function(e){return{__await:e}},S(x.prototype),d(x.prototype,u,(function(){return this})),t.AsyncIterator=x,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new x(f(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},S(D),d(D,s,"Generator"),d(D,l,(function(){return this})),d(D,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=O,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(A),!t)for(var n in this)"t"===n.charAt(0)&&a.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var l=a.call(i,"catchLoc"),u=a.call(i,"finallyLoc");if(l&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,y):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),A(n),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;A(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:O(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),y}},t}function a(e,t,n,r,o,a,i){try{var c=e[a](i),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(r,o)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function c(e){a(i,r,o,c,l,"next",e)}function l(e){a(i,r,o,c,l,"throw",e)}c(void 0)}))}}n.d(t,{Ds:function(){return d},Me:function(){return l},Uj:function(){return f},XQ:function(){return c},_f:function(){return u},lz:function(){return s},nk:function(){return h}});var c=Object.freeze({OPEN:"OPEN",IN_PROGRESS:"IN_PROGRESS",WAITING_REVIEW:"WAITING_REVIEW",WAITING_RELEASE:"WAITING_RELEASE",RELEASED:"RELEASED"});function l(e){var t=new Date(e);return 25569+(t.getTime()-60*t.getTimezoneOffset()*1e3)/864e5}function u(e){return!e||isNaN(e)?"":new Date(86400*(e-25569)*1e3).toISOString().split("T")[0]}function s(e){if(null===e||""===e)return"";var t=Math.round(24*e*60),n=Math.floor(t/60),r=t%60,o=String(n).padStart(2,"0"),a=String(r).padStart(2,"0");return"".concat(o,":").concat(a)}function d(e,t){var n=document.getElementById("notification");n.textContent=e,n.className="alert alert-".concat(t),n.style.display="block",setTimeout((function(){n.style.display="none"}),1e4)}function f(e){return m.apply(this,arguments)}function m(){return m=i(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Excel.run(function(){var e=i(o().mark((function e(n){var r,a,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.workbook.worksheets.getItem("Timesheet"),(a=r.tables.getItem("TblTimesheet")).rows.load("values"),e.next=5,n.sync();case 5:return i="",-1!==Number(t.rowIndex)?(p(0,a,t),i="Time sheet updated successfully."):(v(0,a,t),i="New time sheet entry added successfully."),e.next=10,n.sync();case 10:d(i,"success");case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:e.next=9;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0),d("Time sheet update failed."+e.t0+"with data: "+JSON.stringify(t),"error");case 9:case"end":return e.stop()}}),e,null,[[0,5]])}))),m.apply(this,arguments)}function p(e,t,n){var r=t.rows.getItemAt(Number(n.rowIndex)),o=g(n.startTime,n.endTime);r.values=[[null,null,null,n.startTime,n.endTime,o,n.desc]]}function v(e,t,n){var r=g(n.startTime,n.endTime);t.rows.add(null,[[n.date,n.taskID,n.pic,n.startTime,n.endTime,r,n.desc]])}function g(e,t){if(e&&t){var n=new Date("1970-01-01T".concat(e,":00")),r=new Date("1970-01-01T".concat(t,":00")),o=new Date("1970-01-01T12:00:00"),a=new Date("1970-01-01T13:00:00"),i=(r-n)/36e5;return n<o&&r>a?i-=1:n<a&&r>a?i-=(a-n)/36e5:n<o&&r>o&&(i-=(r-o)/36e5),i}return 0}function h(e){return y.apply(this,arguments)}function y(){return y=i(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Excel.run(function(){var e=i(o().mark((function e(n){var r,a,i,c,l,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.workbook.worksheets.getItem("Timesheet"),a=r.tables.getItem("TblTimesheet"),i=a.rows.load("values"),e.next=5,n.sync();case 5:c={rowIndex:-1,startTime:null,endTime:null},l=0;case 7:if(!(l<i.items.length)){e.next=17;break}if(u((s=i.items[l].values[0])[0])!==t.date||s[1]!==t.taskID||s[2]!==t.pic){e.next=14;break}return c.rowIndex=l,c.startTime=s[3],c.endTime=s[4],e.abrupt("break",17);case 14:l++,e.next=7;break;case 17:return e.abrupt("return",c);case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",{rowIndex:-1,startTime:null,endTime:null});case 10:case"end":return e.stop()}}),e,null,[[0,6]])}))),y.apply(this,arguments)}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};var r=n(85910);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function a(e,t,n){return(t=function(e){var t=function(e){if("object"!=o(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==o(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,c=[],l=!0,u=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=a.call(n)).done)&&(c.push(r.value),c.length!==t);l=!0);}catch(e){u=!0,o=e}finally{try{if(!l&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw o}}return c}}(e,t)||l(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||l(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){if(e){if("string"==typeof e)return u(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function s(e){Excel.run((function(t){var n=t.workbook.worksheets.getItem("WBS").tables.getItem("TblWbs").getDataBodyRange();n.load(["values"]);var o=t.workbook.worksheets.getItem("Setting").getRange("B3");return o.load("values"),t.sync().then((function(){var a=n.values,i=a.find((function(t){return t[0]===e})),c=a.findIndex((function(t){return t[0]===e}));if(i){document.querySelector("#progressForm #progressTaskID").value=e;var l=document.querySelector("#linkToBack"),u=o.values[0][0];l.href="".concat(u).concat(e),l.textContent="Open Backlog",l.target="_blank",l.rel="noopener noreferrer",document.querySelector("#progressForm #pic").value=i[3],document.querySelector("#progressForm #reviewer").value=i[4],document.querySelector("#progressForm #pStartDate").value=(0,r._f)(i[5]),document.querySelector("#progressForm #pEndDate").value=(0,r._f)(i[6]),document.querySelector("#progressForm #pEffort").value=i[8],document.querySelector("#progressForm #aStartDate").value=(0,r._f)(i[9]),document.querySelector("#progressForm #aEndDate").value=(0,r._f)(i[10]),document.querySelector("#progressForm #aEffort").value=i[11],document.querySelector("#progressForm #percentACompleted").value=100*i[12],document.querySelector("#progressForm #aReleaseDate").value=(0,r._f)(i[13]),document.querySelector("#progressForm #taskNote").value=i[23];var s=[16,17,18,19,20,21],d=["linkJira","linkBD","linkDD","linkEstimatedTask","linkEvidence","linkFileReview"],f=s.map((function(e){var t=n.getCell(c,e);return t.load("hyperlink"),t}));return t.sync().then((function(){f.forEach((function(e,t){var n=e.hyperlink,r=n?n.address:i[s[t]];document.querySelector("#progressForm #".concat(d[t])).value=r}))}))}(0,r.Ds)("không tìm thấy thông tin: "+e,"danger")}))})).catch((function(e){console.log(e)}))}function d(){var e=document.getElementById("accountSelect").value,t=document.getElementById("fullnameDisplay");e?Excel.run((function(n){var r=n.workbook.worksheets.getItem("Resource").tables.getItem("TblResource").getRange();return r.load("values"),n.sync().then((function(){for(var n=r.values,o=n[0],a=1;a<n.length;a++)if(n[a][o.indexOf("Account")]===e)return t.innerText=n[a][o.indexOf("Fullname")],void f();t.innerText=""}))})).catch((function(e){console.log("Error: "+e)})):(t.innerText="",f())}function f(){var e=document.getElementById("accountSelect").value.trim().toLowerCase();Excel.run((function(t){var n=t.workbook.worksheets.getItem("WBS").tables.getItem("TblWbs").getRange();return n.load("values"),t.sync().then((function(){var o=n.values,c=[16,17,18,19,20,21],l=o.map((function(e,t){return c.map((function(e){var r=n.getCell(t,e);return r.load(["hyperlink","rowIndex","columnIndex"]),r}))})).flat();return t.sync().then((function(){l.forEach((function(e){var t=e.hyperlink;if(t){var n=e.rowIndex,r=e.columnIndex;o[n][r]=t.address}}));var t=function(e,t){var n={"Tổng nhiệm vụ":[],"Task doing":[],"Task notDone":[],"Task review":[],"Task release":[],"Task released":[]};return e.forEach((function(e){var r=e[3].trim().toLowerCase(),o=e[4].trim().toLowerCase(),a=e[12];(function(e,t,n){return""===n||e===n||t===n})(r,o,t)&&function(e,t,n){n["Tổng nhiệm vụ"].push(e),t>0&&t<.8?n["Task doing"].push(e):0===t?n["Task notDone"].push(e):.8===t?n["Task review"].push(e):.9===t?n["Task release"].push(e):1===t&&n["Task released"].push(e)}(e,a,n)})),n}(o,e);!function(e){var t={total:e["Tổng nhiệm vụ"].length,doing:e["Task doing"].length,notDone:e["Task notDone"].length,review:e["Task review"].length,release:e["Task release"].length,released:e["Task released"].length};(function(e){Object.entries(e).forEach((function(e){var t=i(e,2),n=t[0],r=t[1],o=document.getElementById("".concat(n,"Count"));o?o.innerText=r:console.warn('Element with id "'.concat(n,'Count" not found'))}))})(t),function(e){var t,n,r,o,a,i,c;document.getElementById("taskProgressBar").innerHTML=(r=e.doing,o=e.review,a=e.release,i=e.released,c="\n      <div class='progress-bar progress-bar-striped bg-danger'\n           role='progressbar'\n           style='width: ".concat((n=e.notDone)/(t=e.total)*100,"%'\n           aria-valuenow='").concat(n/t*100,"'\n           aria-valuemin='0'\n           aria-valuemax='100'>\n          ").concat((n/t*100).toFixed(2),"%\n      </div>\n"),c+="\n      <div class='progress-bar progress-bar-striped bg-warning'\n           role='progressbar'\n           style='width: ".concat(r/t*100,"%'\n           aria-valuenow='").concat(r/t*100,"'\n           aria-valuemin='0'\n           aria-valuemax='100'>\n          ").concat((r/t*100).toFixed(2),"%\n      </div>\n"),c+="\n<div class='progress-bar progress-bar-striped bg-warning'\n     role='progressbar'\n     style='width: ".concat(o/t*100,"%'\n     aria-valuenow='").concat(o/t*100,"'\n     aria-valuemin='0'\n     aria-valuemax='100'>\n    ").concat((o/t*100).toFixed(2),"%\n</div>\n"),c+="\n<div class='progress-bar progress-bar-striped bg-warning'\n     role='progressbar'\n     style='width: ".concat(a/t*100,"%'\n     aria-valuenow='").concat(a/t*100,"'\n     aria-valuemin='0'\n     aria-valuemax='100'>\n    ").concat((a/t*100).toFixed(2),"%\n</div>\n"),c+="\n<div class='progress-bar progress-bar-striped bg-success'\n     role='progressbar'\n     style='width: ".concat(i/t*100,"%'\n     aria-valuenow='").concat(i/t*100,"'\n     aria-valuemin='0'\n     aria-valuemax='100'>\n    ").concat((i/t*100).toFixed(2),"%\n</div>\n"))}(t),function(e){var t={notDoneTasks:r.XQ.OPEN,doingTasks:r.XQ.IN_PROGRESS,reviewTasks:r.XQ.WAITING_REVIEW,releaseTasks:r.XQ.WAITING_RELEASE,releasedTasks:null};Object.entries(t).forEach((function(t){var n=i(t,2),o=n[0],c=n[1],l=o.replace("Tasks","");document.getElementById(o).innerHTML=function(e,t){if(0===e.length)return"<p>No tasks available.</p>";var n=function(e){var t=["TaskID","TaskName","P.StartDate","P.EndDate","P.Effort","PIC","Reviewer"];return e!==r.XQ.OPEN&&t.push("A.Effort","%A.Completed"),[r.XQ.OPEN,r.XQ.IN_PROGRESS,r.XQ.WAITING_REVIEW,r.XQ.WAITING_RELEASE].includes(e)&&t.push("Action"),t.push("Link Refer"),t.map((function(e){return"<th>".concat(e,"</th>")}))}(t),o=e.map((function(e){return function(e,t){var n=['<td><a href="#" class="openModal link-info" data-taskid="'.concat(e[0],'">').concat(e[0],"</a></td>"),'<td><span class="d-inline-block text-truncate" style="max-width: 50px;">'.concat(e[1],"</span></td>"),"<td>".concat((0,r._f)(e[5]),"</td>"),"<td>".concat((0,r._f)(e[6]),"</td>"),"<td>".concat(e[8],"</td>"),"<td>".concat(e[3],"</td>"),"<td>".concat(e[4],"</td>")];t!==r.XQ.OPEN&&n.push("<td>".concat(e[11],"</td>"),"<td>".concat(100*e[12],"%</td>")),n.push(function(e,t){var n=a(a(a(a({},r.XQ.OPEN,{class:"btn-task-start btn-primary",icon:"bi bi-play",tooltip:"Click To Start Task",validateLink:e[18]}),r.XQ.IN_PROGRESS,{class:"btn-task-inprogress  btn-success",icon:"bi bi-check-circle",tooltip:"Mark as Completed",validateLink:e[17]}),r.XQ.WAITING_REVIEW,{class:"btn-task-review  btn-success",icon:"bi bi-shield-fill-check",tooltip:"Mark as Pass Review"}),r.XQ.WAITING_RELEASE,{class:"btn-task-release btn-success",icon:"bi bi-rocket",tooltip:"Click To Release Task"})[t];return n?'\n    <td>\n      <button \n        class="btn btn-sm '.concat(n.class,'" \n        data-taskid="').concat(e[0],'" \n        data-validateLink="').concat(n.validateLink,'"\n        title="').concat(n.tooltip,'"\n        data-toggle="tooltip" \n        data-placement="top"\n      >\n        <i class="').concat(n.icon,'"></i>\n      </button>\n      <button \n        class="btn btn-sm btn-danger btn-logwork"\n        data-bs-toggle="modal"\n        data-bs-target="#logWorkModal"\n        data-taskid="').concat(e[0],'"\n        data-taskpic="').concat(e[4],'"\n        data-toggle="tooltip" \n        title="Click to logwork"\n      >\n        <i class="bi bi-clock-history"></i>\n      </button>\n    </td>\n  '):""}(e,t));var o={linkBD:e[17],linkDD:e[18],linkET:e[19],linkEV:e[20]};return n.push(function(e){var t="";return e.linkBD&&(t+='<li><a class="dropdown-item" href="'.concat(e.linkBD,'" target="_blank" rel="noopener noreferrer">Link BD</a></li>')),e.linkDD&&(t+='<li><a class="dropdown-item" href="'.concat(e.linkDD,'" target="_blank" rel="noopener noreferrer">Link DD</a></li>')),e.linkET&&(t+='<li><a class="dropdown-item" href="'.concat(e.linkET,'" target="_blank" rel="noopener noreferrer">Link Estimation</a></li>')),e.linkEV&&(t+='<li><a class="dropdown-item" href="'.concat(e.linkEV,'" target="_blank" rel="noopener noreferrer">Link Evidence</a></li>')),t||(t='<li><a class="dropdown-item" href="#">No Links Available</a></li>'),'\n    <td>\n      <div class="dropdown">\n        <button class="btn btn-sm btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">\n          Link\n        </button>\n        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">\n          '.concat(t,"\n        </ul>\n      </div>\n    </td>\n  ")}(o)),"<tr>".concat(n.join(""),"</tr>")}(e,t)}));return"\n    <table class='table table-bordered'>\n      <thead>\n        <tr>".concat(n.join(""),"</tr>\n      </thead>\n      <tbody>\n        ").concat(o.join(""),"\n      </tbody>\n    </table>\n  ")}(e["Task ".concat(l)],c)}))}(e),function(){var e=document.querySelectorAll(".openModal"),t=document.getElementById("updateProgressModal"),n=document.getElementById("progressTaskID");function r(e){e.preventDefault();var r=this.getAttribute("data-taskid");n.value=r,s(r),new bootstrap.Modal(t).show()}e.forEach((function(e){e.addEventListener("click",r)}))}(),[r.XQ.OPEN,r.XQ.IN_PROGRESS,r.XQ.WAITING_REVIEW,r.XQ.WAITING_RELEASE].forEach(m)}(t)}))}))})).catch((function(e){console.error("Error retrieving tasks:",e),(0,r.Ds)("Error retrieving tasks:"+e,"danger")}))}function m(e){var t=a(a(a(a({},r.XQ.OPEN,{elementId:"notDoneTasks",buttonClass:"btn-task-start",completionPercentage:.1,updateField:{index:9,value:"A.StartDate"},validateLink:{flg:!0,message:"Add link estimation vào, giỡn mặt hả???"}}),r.XQ.IN_PROGRESS,{elementId:"doingTasks",buttonClass:"btn-task-inprogress",completionPercentage:.8,validateLink:{flg:!0,message:"Add link evidence vào, giỡn mặt hả???"}}),r.XQ.WAITING_REVIEW,{elementId:"reviewTasks",buttonClass:"btn-task-review",completionPercentage:.9,updateField:{index:10,value:"A.EndDate"}}),r.XQ.WAITING_RELEASE,{elementId:"releaseTasks",buttonClass:"btn-task-release",completionPercentage:1,updateField:{index:13,value:"A.ReleaseDate"}})[e];t&&document.getElementById(t.elementId).addEventListener("click",(function(e){if(e.target&&e.target.classList.contains(t.buttonClass)){if(t.validateLink&&(n=e.target.getAttribute("data-validateLink"),o=t.validateLink.message,!n&&((0,r.Ds)("".concat(o),"danger"),1)))return;(function(e,t){return Excel.run((function(n){var o=n.workbook.tables.getItem("TblWbs").getDataBodyRange();return o.load("values"),n.sync().then((function(){var a=o.values,i=a.findIndex((function(t){return t[0]===e}));if(-1!==i){var l=c(a[i]);if(l[12]=t.completionPercentage,t.updateField){var u=(new Date).toISOString().split("T")[0];l[t.updateField.index]=(0,r.Me)(u)}o.getRow(i).values=[l]}return n.sync()}))}))})(e.target.getAttribute("data-taskid"),t).then((function(){d(),(0,r.Ds)("Task updated successfully!","success")})).catch((function(e){console.log(e),(0,r.Ds)("Error: ".concat(e.message),"danger")}))}var n,o}))}Office.onReady((function(e){e.host===Office.HostType.Excel&&(Excel.run((function(e){var t=e.workbook.worksheets.getItem("Resource").tables.getItem("TblResource").getRange();return t.load("values"),e.sync().then((function(){for(var e=t.values,n=document.getElementById("accountSelect"),r=e[0].indexOf("Account"),o=1;o<e.length;o++){var a=e[o][r],i=document.createElement("option");i.value=a,i.text=a,n.appendChild(i)}}))})).catch((function(e){console.log("Error: "+e)})),f(),document.getElementById("accountSelect").onchange=d,document.getElementById("logWorkModal").addEventListener("shown.bs.modal",(function(e){var t=e.relatedTarget,n=new Date,o=n.getFullYear(),a=String(n.getMonth()+1).padStart(2,"0"),i=String(n.getDate()).padStart(2,"0"),c="".concat(o,"-").concat(a,"-").concat(i),l="08:00",u="17:00";document.getElementById("inputDate").value=c;var s={date:c,taskID:null,pic:null,startTime:l,endTime:u};if(t){var d=t.getAttribute("data-taskid"),f=t.getAttribute("data-taskpic");document.getElementById("inputTaskID").value=d,document.getElementById("inputPIC").value=f,s.taskID=d,s.pic=f}document.getElementById("inputStartTime").value=l,document.getElementById("inputEndTime").value=u,(0,r.nk)(s).then((function(e){-1!==e.rowIndex?(document.getElementById("logwork-info").innerText="UPDATE: check StartTime and EndTime before submitting",document.getElementById("inputStartTime").value=(0,r.lz)(e.startTime),document.getElementById("inputEndTime").value=(0,r.lz)(e.endTime),document.getElementById("logwork-rowIndex").value=e.rowIndex):(document.getElementById("logwork-rowIndex").value=-1,document.getElementById("logwork-info").innerText="NEW: check information before submitting")})),document.getElementById("btn-startTime-now").addEventListener("click",(function(){var e=new Date,t=String(e.getHours()).padStart(2,"0"),n=String(e.getMinutes()).padStart(2,"0"),r="".concat(t,":").concat(n);document.getElementById("inputStartTime").value=r})),document.getElementById("btn-endTime-now").addEventListener("click",(function(){var e=new Date,t=String(e.getHours()).padStart(2,"0"),n=String(e.getMinutes()).padStart(2,"0"),r="".concat(t,":").concat(n);document.getElementById("inputEndTime").value=r}))})),document.getElementById("btnStartTime").addEventListener("click",(function(){var e={rowIndex:document.getElementById("logwork-rowIndex").value,date:document.getElementById("inputDate").value,taskID:document.getElementById("inputTaskID").value,pic:document.getElementById("inputPIC").value,startTime:document.getElementById("inputStartTime").value,endTime:document.getElementById("inputEndTime").value,desc:document.getElementById("inputDesc").value};(0,r.Ds)("data:"+JSON.stringify(e)),(0,r.Uj)(e);var t=document.getElementById("logWorkModal");bootstrap.Modal.getInstance(t).hide()})),document.getElementById("btnUpdateProgress").addEventListener("click",(function(){var e=document.getElementById("progressTaskID").value,t={pic:document.getElementById("pic").value,reviewer:document.getElementById("reviewer").value,pStartDate:document.getElementById("pStartDate").value,pEndDate:document.getElementById("pEndDate").value,pEffort:document.getElementById("pEffort").value,startDate:document.getElementById("aStartDate").value,endDate:document.getElementById("aEndDate").value,effort:document.getElementById("aEffort").value,percentCompleted:document.getElementById("percentACompleted").value,releaseDate:document.getElementById("aReleaseDate").value,taskNote:document.getElementById("taskNote").value,linkJR:document.getElementById("linkJira").value,linkBD:document.getElementById("linkBD").value,linkDD:document.getElementById("linkDD").value,linkET:document.getElementById("linkEstimatedTask").value,linkED:document.getElementById("linkEvidence").value,linkFR:document.getElementById("linkFileReview").value};s(e),function(e,t){Excel.run((function(n){var o=n.workbook.worksheets.getItem("WBS").tables.getItem("TblWbs").getDataBodyRange();return o.load("values"),n.sync().then((function(){var a=o.values,i=a.findIndex((function(t){return t[0]===e}));if(-1!==i){var l=c(a[i]);l[3]=t.pic,l[4]=t.reviewer,l[5]=(0,r.Me)(t.pStartDate),l[6]=(0,r.Me)(t.pEndDate),l[8]=t.pEffort,l[9]=(0,r.Me)(t.startDate),l[10]=(0,r.Me)(t.endDate),l[11]=t.effort,l[12]=t.percentCompleted/100,l[13]=(0,r.Me)(t.releaseDate),l[23]=t.taskNote,o.getRow(i).values=[l];var u=[{textToDisplay:"Link",screenTip:"Link Jira",address:t.linkJR},{textToDisplay:"Link",screenTip:"Link BD",address:t.linkBD},{textToDisplay:"Link",screenTip:"Link DD",address:t.linkDD},{textToDisplay:"Link",screenTip:"Link Estimation Task",address:t.linkET},{textToDisplay:"Link",screenTip:"Link Evidence",address:t.linkED},{textToDisplay:"Link",screenTip:"Link File Review",address:t.linkFR}];return[16,17,18,19,20,21].forEach((function(e,t){var n=o.getCell(i,e),r=u[t];r.address?n.set({hyperlink:r}):n.values=[[""]]})),n.sync().then((function(){(0,r.Ds)("Update Successfully","success")}))}(0,r.Ds)("Không tìm thấy thông tin: "+e,"danger")}))})).catch((function(e){console.log(e),(0,r.Ds)("Error updating task details: "+e.message,"danger")}))}(e,t),d();var n=document.getElementById("updateProgressModal"),o=bootstrap.Modal.getInstance(n);o?o.hide():new bootstrap.Modal(n).hide()})),document.getElementById("updateProgressModal").addEventListener("hidden.bs.modal",(function(){console.log("Modal đã đóng.")})),document.addEventListener("DOMContentLoaded",(function(){var e,t;e=(new Date).toISOString().split("T")[0],(t=document.getElementById("logworkForm_date"))?t.value=e:console.warn("Logwork date input field not found")})))}))}();
//# sourceMappingURL=taskbymember.js.map