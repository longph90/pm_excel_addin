"use strict";(self.webpackChunkoffice_addin_taskpane_js=self.webpackChunkoffice_addin_taskpane_js||[]).push([[8],{95008:function(e,t,a){a.r(t),a.d(t,{default:function(){return v}});var n=a(96540),l=a(20735),r=a(54354),s=a(5556),m=a.n(s);const o=({name:e})=>{const t={smile:"😄",sad:"😢",laugh:"😂",angry:"😠",love:"🥰",surprised:"😱",dead:"💀",crying:"😭",party:"🥳",rocket:"🚀",thumbs_up:"👍",heart:"❤️"}[e]||"❓";return n.createElement("span",{role:"img","aria-label":e,"aria-hidden":"❓"===t},t)};o.propTypes={name:m().string.isRequired};var c=o,i=a(48954);const p=({show:e,title:t,body:a,onClose:l,onSave:r})=>n.createElement("div",{className:"modal fade "+(e?"show d-block":""),tabIndex:"-1",style:{backgroundColor:e?"rgba(0, 0, 0, 0.5)":"transparent"}},n.createElement("div",{className:"modal-dialog"},n.createElement("div",{className:"modal-content"},n.createElement("div",{className:"modal-header"},n.createElement("h5",{className:"modal-title"},t),n.createElement("button",{type:"button",className:"btn-close",onClick:l})),n.createElement("div",{className:"modal-body"},n.createElement("p",null,a)),n.createElement("div",{className:"modal-footer"},n.createElement("button",{type:"button",className:"btn btn-secondary",onClick:l},"Close"),n.createElement("button",{type:"button",className:"btn btn-primary",onClick:r},"Save changes")))));p.propTypes={show:m().bool.isRequired,title:m().string.isRequired,body:m().string.isRequired,onClose:m().func.isRequired,onSave:m().func.isRequired};var u=p,d=a(49044);const E=({initialData:e,onFormDataChange:t})=>{const[a,l]=(0,n.useState)(e),r=e=>{const{name:n,value:r}=e.target,s={...a,[n]:r};l(s),t(s)},s=[{title:"Planning",content:n.createElement(n.Fragment,null,n.createElement("div",{className:"input-group mb-3"},n.createElement("span",{className:"input-group-text"},"Task Name"),n.createElement("input",{type:"text",className:"form-control",name:"TaskName",value:a.TaskName,onChange:r})),n.createElement("div",{className:"input-group mb-3"},n.createElement("span",{className:"input-group-text"},"Type"),n.createElement("input",{type:"text",className:"form-control",name:"Type",value:a.Type,onChange:r})),n.createElement("div",{className:"input-group mb-3"},n.createElement("span",{className:"input-group-text"},"PIC"),n.createElement("input",{type:"text",className:"form-control",name:"PIC",value:a.PIC,onChange:r})),n.createElement("div",{className:"input-group mb-3"},n.createElement("span",{className:"input-group-text"},"Reviewer"),n.createElement("input",{type:"text",className:"form-control",name:"Reviewer",value:a.Reviewer,onChange:r})),n.createElement("div",{className:"input-group mb-3"},n.createElement("span",{className:"input-group-text"},"P. Start Date"),n.createElement("input",{type:"date",className:"form-control",name:"P.StartDate",value:a["P.StartDate"],onChange:r})),n.createElement("div",{className:"input-group mb-3"},n.createElement("span",{className:"input-group-text"},"P. End Date"),n.createElement("input",{type:"date",className:"form-control",name:"P.EndDate",value:a["P.EndDate"],onChange:r})),n.createElement("div",{className:"input-group mb-3"},n.createElement("span",{className:"input-group-text"},"P. Effort"),n.createElement("input",{type:"text",className:"form-control",name:"P.Effort",value:a["P.Effort"],onChange:r})))},{title:"Actual",content:n.createElement(n.Fragment,null,n.createElement("div",{className:"input-group mb-3"},n.createElement("span",{className:"input-group-text"},"A. Start Date"),n.createElement("input",{type:"date",className:"form-control",name:"A.StartDate",value:a["A.StartDate"],onChange:r})),n.createElement("div",{className:"input-group mb-3"},n.createElement("span",{className:"input-group-text"},"A. End Date"),n.createElement("input",{type:"date",className:"form-control",name:"A.EndDate",value:a["A.EndDate"],onChange:r})),n.createElement("div",{className:"input-group mb-3"},n.createElement("span",{className:"input-group-text"},"A. Effort"),n.createElement("input",{type:"text",className:"form-control",name:"A.Effort",value:a["A.Effort"],onChange:r})),n.createElement("div",{className:"input-group mb-3"},n.createElement("span",{className:"input-group-text"},"%A Completed"),n.createElement("input",{type:"number",className:"form-control",name:"%A.Completed",value:a["%A.Completed"],onChange:r})))},{title:"Link",content:n.createElement(n.Fragment,null,n.createElement("div",{className:"input-group mb-3"},n.createElement("span",{className:"input-group-text"},"Link Jira"),n.createElement("input",{type:"text",className:"form-control",name:"LinkJira",value:a.LinkJira,onChange:r}),n.createElement("span",{className:"input-group-text"},n.createElement("a",{className:"icon-link",href:a.LinkJira,target:"_blank"},"Open"))),n.createElement("div",{className:"input-group mb-3"},n.createElement("span",{className:"input-group-text"},"Link Estimation"),n.createElement("input",{type:"text",className:"form-control",name:"LinkEstimation",value:a.LinkEstimation,onChange:r}),n.createElement("span",{className:"input-group-text"},n.createElement("a",{className:"icon-link",href:a.LinkEstimation,target:"_blank"},"Open"))),n.createElement("div",{className:"input-group mb-3"},n.createElement("span",{className:"input-group-text"},"Link BD"),n.createElement("input",{type:"text",className:"form-control",name:"LinkBD",value:a.LinkBD,onChange:r}),n.createElement("span",{className:"input-group-text"},n.createElement("a",{className:"icon-link",href:a.LinkBD,target:"_blank"},"Open"))),n.createElement("div",{className:"input-group mb-3"},n.createElement("span",{className:"input-group-text"},"Link DD"),n.createElement("input",{type:"text",className:"form-control",name:"LinkDD",value:a.LinkDD,onChange:r}),n.createElement("span",{className:"input-group-text"},n.createElement("a",{className:"icon-link",href:a.LinkDD,target:"_blank"},"Open"))),n.createElement("div",{className:"input-group mb-3"},n.createElement("span",{className:"input-group-text"},"Link Evidence"),n.createElement("input",{type:"text",className:"form-control",name:"LinkEvidence",value:a.LinkEvidence,onChange:r}),n.createElement("span",{className:"input-group-text"},n.createElement("a",{className:"icon-link",href:a.LinkEvidence,target:"_blank"},"Open"))),n.createElement("div",{className:"input-group mb-3"},n.createElement("span",{className:"input-group-text"},"Link Comment"),n.createElement("input",{type:"text",className:"form-control",name:"LinkReview",value:a.LinkReview,onChange:r}),n.createElement("span",{className:"input-group-text"},n.createElement("a",{className:"icon-link",href:a.LinkReview,target:"_blank"},"Open"))))}];return n.createElement("form",null,n.createElement("div",{className:"input-group mb-3"},n.createElement("span",{className:"input-group-text"},"Task ID"),n.createElement("input",{type:"text",className:"form-control",name:"TaskID",value:a.TaskID,onChange:r,readOnly:!0})),n.createElement(d.A,{items:s}),n.createElement("div",{className:"input-group mb-3"},n.createElement("span",{className:"input-group-text"},"Note"),n.createElement("textarea",{className:"form-control",name:"Note",value:a.Note,onChange:r,rows:3})))};E.propTypes={initialData:m().object.isRequired,onFormDataChange:m().func.isRequired};var g=E;const f=({initialData:e,onFormDataChange:t})=>{const[a,l]=(0,n.useState)({rowIndex:-1,Date:"",TaskID:e.TaskID,Account:e.PIC,StartTime:"",EndTime:"",TotalTime:"",Description:""}),r=e=>{const{name:n,value:r}=e.target,s={...a,[n]:r};l(s),t(s)};return n.createElement("form",null,n.createElement("div",{className:"input-group mb-3"},n.createElement("span",{className:"input-group-text"},"Date"),n.createElement("input",{type:"date",className:"form-control",name:"Date",value:a.Date,onChange:r})),n.createElement("div",{className:"input-group mb-3"},n.createElement("span",{className:"input-group-text"},"TaskID"),n.createElement("input",{type:"text",className:"form-control",name:"TaskID",value:a.TaskID,onChange:r})),n.createElement("div",{className:"input-group mb-3"},n.createElement("span",{className:"input-group-text"},"Account"),n.createElement("input",{type:"text",className:"form-control",name:"Account",value:a.Account,onChange:r})),n.createElement("div",{className:"input-group mb-3"},n.createElement("span",{className:"input-group-text"},"Start Time"),n.createElement("input",{type:"time",className:"form-control",name:"StartTime",value:a.StartTime,onChange:r})),n.createElement("div",{className:"input-group mb-3"},n.createElement("span",{className:"input-group-text"},"End Time"),n.createElement("input",{type:"time",className:"form-control",name:"EndTime",value:a.EndTime,onChange:r})),n.createElement("div",{className:"input-group mb-3"},n.createElement("span",{className:"input-group-text"},"Desc"),n.createElement("textarea",{className:"form-control",name:"Desc",value:a.Desc,onChange:r})))};f.propTypes={initialData:m().object.isRequired,onFormDataChange:m().func.isRequired};var N=f,k=a(5199),v=()=>{const{projectInfo:e}=(0,n.useContext)(k.B),[t,a]=(0,n.useState)(!0),[s,m]=(0,n.useState)([]),[o,p]=(0,n.useState)([]),[d,E]=(0,n.useState)([]),[f,v]=(0,n.useState)([]),[b,y]=(0,n.useState)(""),[C,h]=(0,n.useState)("0"),[D,A]=(0,n.useState)(""),[x,S]=(0,n.useState)(!1),[w,T]=(0,n.useState)(null),[P,L]=(0,n.useState)({}),[I,R]=(0,n.useState)({}),[O,_]=(0,n.useState)(""),[F,q]=(0,n.useState)([]),[j,B]=(0,n.useState)([]),[z,J]=(0,n.useState)([]),[W,U]=(0,n.useState)([]),[$,K]=(0,n.useState)([]),[V,G]=(0,n.useState)("doing");(0,n.useEffect)((()=>{H()}),[]),(0,n.useEffect)((()=>{switch(V){case"notStarted":m(F);break;case"doing":default:m(j);break;case"reviewing":m(z);break;case"waitingRelease":m(W);break;case"released":m($)}}),[F,j,z,W,$,V]);const H=async()=>{a(!0);const e=await(0,l.jF)("WBS","TblWbs"),t=(0,l.VD)(e),r=b.trim().toLowerCase(),s=t.filter((e=>Object.values(e).some((e=>"string"==typeof e&&e.trim().toLowerCase().includes(r))))),m=(e=>e.map((e=>{let t;switch(e["P.StartDate"]=(0,l._f)(e["P.StartDate"]),e["P.EndDate"]=(0,l._f)(e["P.EndDate"]),e["%A.Completed"]=100*e["%A.Completed"],e["%A.Completed"]){case 0:t=n.createElement(c,{name:"smile"});break;case.5:t=n.createElement(c,{name:"surprised"});break;case.6:t=n.createElement(c,{name:"crying"});break;case.8:t=n.createElement(c,{name:"sad"});break;default:t=n.createElement(c,{name:"dead"})}return{...e,action:n.createElement("div",{class:"input-group mb-3"},n.createElement(i.qy,{type:"success",icon:"play-btn",size:"sm",onClick:()=>(async e=>{e["%A.Completed"]>=0&&e["%A.Completed"]<10?(e["A.StartDate"]=(new Date).toISOString().slice(0,10),e["%A.Completed"]=.1):e["%A.Completed"]>=10&&e["%A.Completed"]<80?(e["A.EndDate"]=(new Date).toISOString().slice(0,10),e["%A.Completed"]=.8):e["%A.Completed"]>=80&&e["%A.Completed"]<90?e["%A.Completed"]=.9:e["%A.Completed"]>=90&&e["%A.Completed"]<100&&(e["A.ReleaseDate"]=(new Date).toISOString().slice(0,10),e["%A.Completed"]=1),await(0,l.BF)("WBS","TblWbs",e),await H(),JSON.stringify(e)!==JSON.stringify(w)&&T(e)})(e),title:"Click to change progress"}),n.createElement(i.qy,{type:"warning",icon:"pen",size:"sm",onClick:()=>(async e=>{A("edit-task"),T(e),S(!0)})(e),title:"Click to open task details"}),n.createElement(i.qy,{type:"danger",icon:"stopwatch",size:"sm",onClick:()=>(async e=>{A("logwork"),T(e),S(!0)})(e),title:"Click to logwork"}))}})))(s);(e=>{const t=[],a=[],n=[],l=[],r=[];e.forEach((e=>{0===e["%A.Completed"]?t.push(e):e["%A.Completed"]>=10&&e["%A.Completed"]<80?a.push(e):e["%A.Completed"]>=80&&e["%A.Completed"]<90?n.push(e):e["%A.Completed"]>=90&&e["%A.Completed"]<100?l.push(e):100===e["%A.Completed"]&&r.push(e)})),q(t),B(a),J(n),U(l),K(r)})(m),h(m.length);const o=(e=>e.filter((e=>0===e["P.Effort"]||""===e["P.Effort"])))(s);v(o);const u=((e,t=new Date)=>e.filter((e=>(0,l._f)(e["P.ReleaseDate"])<t&&e["%A.Completed"]<1)))(s);p(u);const d=((e,t=new Date)=>e.filter((e=>{const a=(0,l._f)(e["P.StartDate"]);return t>a&&0===e["%A.Completed"]})))(s);E(d),a(!1)},M=e=>{switch(D){case"edit-task":R(e);break;case"logwork":L(e)}};return t?n.createElement("div",{className:"d-flex justify-content-center"},n.createElement("p",null,"Loading..."),n.createElement("div",{className:"spinner-border",role:"status"},n.createElement("span",{className:"visually-hidden"},"Loading..."))):O?n.createElement("div",{className:"alert alert-danger"},O):n.createElement("div",null,n.createElement("h3",null,"Task information:"),n.createElement("p",{id:"task_info"}),n.createElement("div",{className:"input-group input-group-sm mb-3"},n.createElement("span",{className:"input-group-text",id:"basic-addon1"},"Search:"),n.createElement("input",{id:"txtAccount",type:"text",className:"form-control",placeholder:"Please enter the information you want to search for.","aria-label":"Username","aria-describedby":"basic-addon1",value:b,onChange:e=>y(e.target.value)}),n.createElement(i.$n,{label:"Load",onClick:H}),n.createElement(i.$n,{label:"LoadAll",type:"danger",onClick:async()=>{y(""),await H()}})),n.createElement("div",{className:"input-group mb-3"},n.createElement(i.Oy,{label:"Total:",type:"outline-primary",size:"sm",badge:C}),n.createElement(i.Oy,{label:"⏰:",type:"outline-primary",size:"sm",active:"notStarted"===V?"active":"",badge:F.length,onClick:()=>{m(F),G("notStarted")}}),n.createElement(i.Oy,{label:"👨‍💻:",type:"outline-primary",size:"sm",active:"doing"===V?"active":"",badge:j.length,onClick:()=>{m(j),G("doing")}}),n.createElement(i.Oy,{label:"👮:",type:"outline-primary",size:"sm",active:"reviewing"===V?"active":"",badge:z.length,onClick:()=>{m(z),G("reviewing")}}),n.createElement(i.Oy,{label:"🚀:",type:"outline-primary",size:"sm",active:"waitingRelease"===V?"active":"",badge:W.length,onClick:()=>{m(W),G("waitingRelease")}}),n.createElement(i.Oy,{label:"✅:",type:"outline-primary",size:"sm",active:"released"===V?"active":"",badge:$.length,onClick:()=>{m($),G("released")}})),n.createElement("div",{className:"input-group mb-3"}),n.createElement(r.A,{data:s,columns:[{header:"Idx",key:"rowIndex"},{header:"JiraKey",key:"LinkJira"},{header:"TaskID",key:"TaskID"},{header:"TaskName",key:"TaskName"},{header:"P.Start",key:"P.StartDate"},{header:"P.End",key:"P.EndDate"},{header:"P.Effort",key:"P.Effort"},{header:"A.Effort",key:"A.Effort"},{header:"%Done",key:"%A.Completed"},{header:"PIC",key:"PIC"},{header:"Reviewer",key:"Reviewer"},{header:"Action",key:"action"}],colorConfig:{"A.Effort":{red:(e,t)=>e>0&&e>t["P.Effort"],green:(e,t)=>e>0&&e<=t["P.Effort"],textWhite:(e,t)=>e>0},"%A.Completed":{red:(e,t)=>t["A.Effort"]>0&&t["P.Effort"]>0&&(t["A.Effort"]/t["P.Effort"]*100).toFixed(1)-e>20,green:(e,t)=>t["A.Effort"]>0&&t["P.Effort"]>0&&(t["A.Effort"]/t["P.Effort"]*100).toFixed(1)-e<=20,textWhite:(e,t)=>t["A.Effort"]>0&&t["P.Effort"]>0&&e>=0&&e<=100}},projectInfo:e}),x&&n.createElement(u,{show:x,title:(()=>{switch(D){case"logwork":return"Update Timesheet";case"edit-task":return"Update Task";default:return null}})(),body:(()=>{switch(D){case"edit-task":return n.createElement(g,{initialData:w,onFormDataChange:M});case"logwork":return n.createElement(N,{initialData:w,onFormDataChange:M});default:return null}})(),onClose:()=>S(!1),onSave:async()=>{switch(D){case"edit-task":I["%A.Completed"]=I["%A.Completed"]/100,await(0,l.BF)("WBS","TblWbs",I),T({...I}),await H();break;case"logwork":(0,l.Uj)(P),await H()}S(!1)}}))}}}]);
//# sourceMappingURL=8.js.map