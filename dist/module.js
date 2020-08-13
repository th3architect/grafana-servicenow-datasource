define(["react","lodash","@grafana/data","@grafana/ui","@grafana/runtime"],(function(e,t,n,r,a){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=5)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t){e.exports=a},function(e,t,n){"use strict";n.r(t);var r=n(3),a=n(2),o=n(4),i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function l(e,t){function n(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var s=function(){return(s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};function u(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{s(r.next(e))}catch(e){o(e)}}function l(e){try{s(r.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}s((r=r.apply(e,t||[])).next())}))}function c(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}}function f(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,o=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)i.push(r.value)}catch(e){a={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(a)throw a.error}}return i}function p(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(f(arguments[t]));return e}var m=n(1);function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var d=function(){function e(e){var t=this;this.output={columns:[],rows:[],type:"table"},e.filter((function(e){return e&&e.result&&e.result.data&&e.result.data.result})).forEach((function(e){t.query=e.query,e&&e.query&&e.query.servicenow&&"stats"===e.query.servicenow.type?e.result.data.result.stats?(t.output.columns.push({text:"count",type:"number"}),t.output.rows.push([Object(m.toInteger)(e.result.data.result.stats.count)])):e.result.data.result.forEach((function(n,r){if(0===r&&e&&e.query&&e.query.servicenow&&e.query.servicenow.groupBy&&(e.query.servicenow.groupBy.split(",").forEach((function(e){t.output.columns.push({text:e,type:"string"})})),t.output.columns.push({text:"count",type:"number"})),n&&n.stats){var a=Object(m.toInteger)(n.stats.count),o=[];e.query.servicenow.groupBy.split(",").forEach((function(e){var t=n.groupby_fields.find((function(t){return t.field===e}));t&&o.push(t.display_value||t.value||"-")})),o.push(a),t.output.rows.push(o)}})):e.result.data.result.forEach((function(e,n){0===n&&Object(m.forEach)(e,(function(e,n){"object"===h(e)&&e&&(e.display_value||""===e.value)?t.output.columns.push({text:n,type:"string"}):t.output.columns.push({text:n,type:"object"===h(e)?"string":h(e)})}));var r=[];Object(m.forEach)(e,(function(e){"object"===h(e)&&e&&(e.display_value||""===e.value)?r.push(e.display_value||e.value):"object"===h(e)?r.push(JSON.stringify(e)):r.push(e)})),t.output.rows.push(r)}))}))}return e.prototype.getResultsAsAnnotations=function(){var e=this,t=[];return Object(m.forEach)(this.output.rows,(function(n){var r=function(e,t,n){var r={text:"",title:"",tags:[],time:(new Date).getTime()},a="";return Object(m.forEach)(t,(function(t,o){t.text===n.startTimeField?e[o]&&(r.time=new Date(e[o]).getTime(),a+=t.text+" : "+e[o]+"\n"):t.text===n.endTimeField?e[o]&&(r.timeEnd=new Date(e[o]).getTime(),a+=t.text+" : "+e[o]+"\n"):t.text===n.titleField?e[o]&&(r.title=e[o]):t.text===n.descriptionField?e[o]&&(r.text=e[o]):e[o]&&r.tags.push(t.text+" : "+e[o])})),r.text+="\n    "+a+"\n  ",r}(n,e.output.columns,e.query);t.push(r)})),t},e}(),v=function(){function e(e,t){this.key=e,this.value=t.toString()}return e.prototype.getValue=function(){return[this.key,this.value].join("=")},e}(),y=function(){function e(e,t,n,r){void 0===r&&(r="^"),this.condition=r,this.field=e,this.operator=t,this.value=n}return e.prototype.toString=function(){return(""+this.field+this.operator+this.value).trim()},e}(),g=function(){function e(e){this.table="incident",this.type="table",this.orderByDirection="asc",this.table=e.table||"incident",this.type=e.type||"table",this.fields=e.fields||"",this.query=e.query||"",this.filters=e.filters||[],this.orderByDirection=e.orderByDirection||"asc",this.orderBy=e.orderBy||"",this.groupBy=e.groupBy||"",this.limit=e.limit||25}return e.prototype.getUrl=function(){var e=[];e.push(new v("sysparm_display_value","all")),e.push(new v("sysparm_limit",this.limit||10)),this.fields&&"*"!==this.fields&&e.push(new v("sysparm_fields",this.fields||"opened_at,number,short_description,sys_created_by,severity,category,state,priority"));var t=[(this.query+"").trim().replace(/\^OR\n/g,"^OR").replace(/\^\n/g,"^").replace(/\n/g,"^")].filter(Boolean);return this.filters.forEach((function(e,n){var r=0===t.length&&0===n?"":e.condition||"^";t.push(encodeURIComponent((""+r+e.field+e.operator+e.value).trim()))})),this.orderBy&&t.push(("asc"===this.orderByDirection?"^ORDERBY":"^ORDERBYDESC")+this.orderBy.trim()),t.length>0&&e.push(new v("sysparm_query",t.join(""))),"stats"===this.type&&e.push(new v("sysparm_count","true")),"stats"===this.type&&this.groupBy&&e.push(new v("sysparm_group_by",this.groupBy.trim())),"/api/now/"+(this.type||"table")+"/"+this.table+"?"+e.map((function(e){return e.getValue()})).join("&")},e}(),b=new g({table:"incident",type:"table",fields:"opened_at,number,short_description,sys_created_by,severity,category,state,priority",query:"",groupBy:"",orderBy:"opened_at",orderByDirection:"desc",limit:10}),w=function e(t,n,r){return void 0===r&&(r=1),Object(o.getBackendSrv)().datasourceRequest({method:"GET",url:t}).catch((function(a){if(console.log(a),r>0)return e(t,n,r-1);throw a}))},E=function(e,t,n){var r="javascript:gs.dateGenerate('"+t.format("YYYY-MM-DD")+"','"+t.format("HH:mm:ss")+"')",a="javascript:gs.dateGenerate('"+n.format("YYYY-MM-DD")+"','"+n.format("HH:mm:ss")+"')";return e=(e=(e=e.replace("$__timeFrom()",r)).replace("$__timeTo()",a)).replace("$__timeFilter()",r+"@"+a)},C=function(){function e(e,t){this.instanceSettings=e,this.templateSrv=t,this.url="",this.url=this.instanceSettings.url+""}return e.prototype.doQueries=function(e,t){var n=this;return e.map((function(e){var r=e.servicenow;r&&r.query&&(r.query=E(r.query,t.range.from,t.range.to),r.query=n.templateSrv.replace(r.query,{},"glob")),r&&r.filters&&(r.filters=r.filters.map((function(e){return e.value=E(e.value,t.range.from,t.range.to),e.value=n.templateSrv.replace(e.value,{},"glob"),e})));var a=new g(r);return w(n.url+a.getUrl(),a).then((function(n){return{result:n,query:e,options:t}})).catch((function(t){throw{error:t,query:e}}))}))},e.prototype.doAnnotationQueries=function(e,t){var n=this;return e.map((function(e){e.query=E(e.query,t.range.from,t.range.to);var r=new g(e);return w(n.url+r.getUrl(),r).then((function(t){return{result:t,query:e,options:{}}})).catch((function(t){throw{error:t,query:e}}))}))},e.prototype.query=function(e){var t=[];e.targets&&(t=e.targets.filter((function(e){return!0!==e.hide})));var n=this.doQueries(t,e);return Promise.all(n).then((function(e){return new d(e).output}))},e.prototype.annotationsQuery=function(e){var t=[];if(e.targets)t=e.targets.filter((function(e){return!0!==e.hide}));else if(e.annotation){var n={limit:e.annotation.limit||30,startTimeField:e.annotation.startTimeField,endTimeField:e.annotation.endTimeField,titleField:e.annotation.titleField,descriptionField:e.annotation.descriptionField,fields:p(e.annotation.fields.split(","),[e.annotation.titleField,e.annotation.descriptionField,e.annotation.startTimeField,e.annotation.endTimeField]).filter(Boolean).join(","),query:e.annotation.query||"",table:e.annotation.table};t.push(n)}var r=this.doAnnotationQueries(t,e);return Promise.all(r).then((function(e){return new d(e).getResultsAsAnnotations()}))},e}(),N=function(e){function t(t,n){var r=e.call(this,t)||this;return r.instanceSettings=t,r.templateSrv=n,r.serviceNowDataSource=new C(r.instanceSettings,r.templateSrv),r}return t.$inject=["instanceSettings","templateSrv"],l(t,e),t.prototype.query=function(e){var t=[],n=Object(m.cloneDeep)(e);if(n.targets.length>0){var r=this.serviceNowDataSource.query(n);r&&t.push(r)}return Promise.all(t).then((function(e){return{data:Object(m.flatten)(e)}}))},t.prototype.annotationQuery=function(e){e.annotation.query=this.templateSrv.replace(e.annotation.query,{},"glob");var t={range:e.range,rangeRaw:e.rangeRaw,annotation:e.annotation};return this.serviceNowDataSource.annotationsQuery(t).then((function(e){return e})).catch((function(e){return console.error(e),[]}))},t.prototype.testDatasource=function(){var e=this;return new Promise((function(t,n){return u(e,void 0,void 0,(function(){return c(this,(function(e){return this.serviceNowDataSource.query({range:{from:"",to:""},targets:[]}).then((function(e){t({message:"Successfully Connected ServiceNow",status:"success"})})).catch((function(e){n({message:"Failed to Connect ServiceNow",status:"error"})})),[2]}))}))}))},t.prototype.metricFindQuery=function(e){return Promise.resolve([])},t}(a.DataSourceApi),S=n(0),q=n.n(S),T=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onURLChange=function(e){var n=t.props,r=n.onOptionsChange,a=n.options;r(s(s({},a),{url:e.target.value}))},t.onUserNameChange=function(e){var n=t.props,r=n.onOptionsChange,a=n.options;r(s(s({},a),{basicAuthUser:e.target.value}))},t.onPasswordChange=function(e){var n=t.props,r=n.onOptionsChange,a=n.options;r(s(s({},a),{secureJsonData:{basicAuthPassword:e.target.value}}))},t.onResetPassword=function(){var e=t.props,n=e.onOptionsChange,r=e.options;n(s(s({},r),{secureJsonFields:s(s({},r.secureJsonFields),{basicAuthPassword:!1}),secureJsonData:s(s({},r.secureJsonData),{basicAuthPassword:""})}))},t}return l(t,e),t.prototype.render=function(){var e=this.props.options;e.basicAuth=!0;var t=e.secureJsonFields,n=e.secureJsonData||{};return q.a.createElement(q.a.Fragment,null,q.a.createElement("h3",{className:"page-heading"},"Service Now Settings"),q.a.createElement("div",{className:"gf-form-inline"},q.a.createElement("div",{className:"gf-form"},q.a.createElement("label",{className:"gf-form-label width-11",title:"Service Now URL"},"Service Now URL"),q.a.createElement("input",{className:"gf-form-input width-20",type:"text",onChange:this.onURLChange,value:e.url||"",placeholder:"https://YOUR_INSTANCE_NAME.service-now.com"}))),q.a.createElement("div",{className:"gf-form-inline"},q.a.createElement("div",{className:"gf-form"},q.a.createElement("label",{className:"gf-form-label width-11",title:"User Name"},"User name"),q.a.createElement("input",{className:"gf-form-input width-20",type:"text",onChange:this.onUserNameChange,value:e.basicAuthUser||"",placeholder:"username"}))),q.a.createElement("div",{className:"gf-form-inline"},q.a.createElement("div",{className:"gf-form"},q.a.createElement("label",{className:"gf-form-label width-11",title:"Password"},"Password"),t&&t.basicAuthPassword?q.a.createElement(q.a.Fragment,null,q.a.createElement("label",{className:"gf-form-label width-20"},"Configured"),q.a.createElement("span",{className:"gf-form-button btn btn-secondary width-6",onClick:this.onResetPassword},"Reset")):q.a.createElement("input",{type:"password",value:n.basicAuthPassword||"",className:"gf-form-input width-20",onChange:this.onPasswordChange}))))},t}(S.PureComponent),_="annotations/annotations.editor.html",O=[{label:"Incidents (INC)",value:"incident"},{label:"Change Request (CHG)",value:"change_request"}],F=[{value:"number",label:"Number",tables:["incident","change_request"]},{value:"short_description",label:"Short Description",tables:["incident","change_request"]},{value:"incident_state",label:"Incident State",tables:["incident"]},{value:"state",label:"State",tables:["incident","change_request"]},{value:"assigned_to",label:"Assigned To",tables:["incident"]},{value:"assignment_group.name",label:"Assignment Group",tables:["incident","change_request"]},{value:"assignment_group",label:"Assignment Group ID",tables:["incident","change_request"]},{value:"sys_created_by",label:"Created By",tables:["incident"]},{value:"sys_opened_by",label:"Opened By",tables:["incident"]},{value:"business_service",label:"Business Service",tables:["incident"]},{value:"cmdb_ci",label:"CMDB CI",tables:["incident"]},{value:"active",label:"Active",tables:["incident"]},{value:"priority",label:"Priority",tables:["incident"]},{value:"phase_state",label:"Phase State",tables:["change_request"]},{value:"type",label:"Type",tables:["change_request"]},{value:"start_date",label:"Start Date",tables:["change_request"]},{value:"end_date",label:"End Date",tables:["change_request"]}],A=[{value:"=",label:"Equals"},{value:"!=",label:"Not Equals"},{value:"<",label:"Less than"},{value:"<=",label:"Less than or Equals"},{value:">",label:"Greater than"},{value:">=",label:"Greater than or Equals"},{value:"STARTSWITH",label:"Starts With"},{value:"ENDSWITH",label:"Ends With"},{value:"LIKE",label:"Like"},{value:"NOTLIKE",label:"Not Like"},{value:"ISEMPTY",label:"Is Empty"},{value:"ISNOTEMPTY",label:"Is Not Empty"},{value:"IN",label:"In"},{value:"NOT IN",label:"Not In"},{value:"ANYTHING",label:"Anything"},{value:"BETWEEN",label:"Between"},{value:"SAMEAS",label:"Is Same"},{value:"NSAMEAS",label:"Is Different"},{value:"ONToday",label:"On Today"},{value:"NOTONToday",label:"NOT ON Today"},{value:"DATEPART",label:"Date Part"},{value:"RELATIVEGE",label:"Relative (on or after)"},{value:"RELATIVELE",label:"Relative (on or before)"},{value:"RELATIVEGT",label:"Relative (after)"},{value:"RELATIVELT",label:"Relative (before)"},{value:"RELATIVEEE",label:"Relative (on)"},{value:"MORETHAN",label:"Is More than"},{value:"LESSTHAN",label:"Is Less than"},{value:"GT_FIELD",label:"Greater than field"},{value:"LT_FIELD",label:"Less than field"},{value:"GT_OR_EQUALS_FIELD",label:"Greater than or is field"},{value:"LT_OR_EQUALS_FIELD",label:"Less than or is field"}],D=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onFilterAdd=function(e){void 0===e&&(e="^");var n=t.props,r=n.query,a=n.onChange,o=r.servicenow,i=new y("number","STARTSWITH","incident"===o.table?"INC":"CHG",e);o.filters=o.filters||[i],o.filters.push(i),a(s(s({},r),{servicenow:o}))},t.onFilterRemove=function(e){var n=t.props,r=n.query,a=n.onChange,o=r.servicenow,i=new y("number","STARTSWITH","incident"===o.table?"INC":"CHG","^");o.filters=o.filters||[i],o.filters.splice(e,1),a(s(s({},r),{servicenow:o}))},t.onFilterConditionChange=function(e,n){var r=e.value,a=t.props,o=a.query,i=a.onChange,l=o.servicenow,u=new y("number","STARTSWITH","incident"===l.table?"INC":"CHG",r);l.filters=l.filters||[u],l.filters[n].condition=r,i(s(s({},o),{servicenow:l}))},t.onFilterKeyChange=function(e,n){var r=e.value,a=t.props,o=a.query,i=a.onChange,l=o.servicenow,u=new y("number","STARTSWITH","incident"===l.table?"INC":"CHG","^");l.filters=l.filters||[u],l.filters[n].field=r,i(s(s({},o),{servicenow:l}))},t.onFilterOperatorChange=function(e,n){var r=e.value,a=t.props,o=a.query,i=a.onChange,l=o.servicenow,u=new y("number","STARTSWITH","incident"===l.table?"INC":"CHG","^");l.filters=l.filters||[u],l.filters[n].operator=r,i(s(s({},o),{servicenow:l}))},t.onFilterValueChange=function(e,n){var r=e.target.value,a=t.props,o=a.query,i=a.onChange,l=o.servicenow,u=new y("number","STARTSWITH","incident"===l.table?"INC":"CHG","^");l.filters=l.filters||[u],l.filters[n].value=r,i(s(s({},o),{servicenow:l}))},t}return l(t,e),t.prototype.render=function(){var e=this,t=this.props.query;return q.a.createElement("div",null,0===t.servicenow.filters.length?q.a.createElement("div",{className:"gf-form-inline"},q.a.createElement("div",{className:"gf-form"},q.a.createElement("div",{className:"gf-form gf-form--grow"},q.a.createElement("label",{className:"gf-form-label width-8",title:"Filter"},"Filter"))),q.a.createElement("div",{className:"gf-form"},q.a.createElement("div",{className:"gf-form gf-form--grow"},q.a.createElement("span",{className:"btn btn-success btn-small",style:{margin:"5px"},onClick:function(){return e.onFilterAdd("^")}},"Add Filter")))):null,t.servicenow.filters.map((function(n,a){return q.a.createElement("div",{className:"gf-form-inline"},q.a.createElement("div",{className:"gf-form"},q.a.createElement("div",{className:"gf-form gf-form--grow"},q.a.createElement("label",{className:"gf-form-label width-8",title:"Filter"},"Filter ",a+1))),q.a.createElement("div",{className:"gf-form"},q.a.createElement("div",{className:"gf-form gf-form--grow"},q.a.createElement(r.Select,{className:"width-12",value:F.find((function(e){return e.value===n.field}))||{value:n.field,label:n.field},options:F.filter((function(e){return e.tables.indexOf(t.servicenow.table)>-1})),defaultValue:n.field,onChange:function(t){return e.onFilterKeyChange(t,a)},allowCustomValue:!0}),q.a.createElement(r.Select,{className:"width-12",value:A.find((function(e){return e.value===n.operator}))||{value:n.operator,label:n.operator},options:A,defaultValue:n.operator,onChange:function(t){return e.onFilterOperatorChange(t,a)},allowCustomValue:!0}),q.a.createElement("input",{type:"text",className:"gf-form-input width-12",title:"Value",placeholder:"Value",value:n.value,onChange:function(t){return e.onFilterValueChange(t,a)}}))),q.a.createElement("span",null,q.a.createElement("div",{className:"gf-form"},q.a.createElement("div",{className:"gf-form gf-form--grow"},a===t.servicenow.filters.length-1?q.a.createElement("span",{className:"btn btn-success btn-small",style:{margin:"5px"},onClick:function(){return e.onFilterAdd("^")}},"+"):null,q.a.createElement("span",{className:"btn btn-danger btn-small",style:{margin:"5px"},onClick:function(){return e.onFilterRemove(a)}},"x")))))})))},t}(S.PureComponent),I=O,B=[{label:"Table",value:"table"},{label:"Stats",value:"stats"}],x=[{label:"Ascending",value:"asc"},{label:"Descending",value:"desc"}],R=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onTableChange=function(e){var n=t.props,r=n.query,a=n.onChange,o=r.servicenow;o.table=e.value,a(s(s({},r),{servicenow:o}))},t.onTypeChange=function(e){var n=t.props,r=n.query,a=n.onChange,o=r.servicenow;o.type=e.value,a(s(s({},r),{servicenow:o}))},t}return l(t,e),t.prototype.render=function(){var e=this.props.query;return q.a.createElement("div",null,q.a.createElement("div",{className:"gf-form-inline"},q.a.createElement("div",{className:"gf-form"},q.a.createElement("label",{className:"gf-form-label query-keyword width-8"},"Table"),q.a.createElement(r.Select,{className:"width-12",value:I.find((function(t){return t.value===e.servicenow.table})),options:I,defaultValue:e.servicenow.table,onChange:this.onTableChange})),q.a.createElement("div",{className:"gf-form"},q.a.createElement("label",{className:"gf-form-label query-keyword width-6"},"Type"),q.a.createElement(r.Select,{className:"width-12",value:B.find((function(t){return t.value===e.servicenow.type})),options:B,defaultValue:e.servicenow.type,onChange:this.onTypeChange}))))},t}(S.PureComponent),P=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onFieldChange=function(e){var n=e.target.value,r=t.props,a=r.query,o=r.onChange,i=a.servicenow;i.fields=n,o(s(s({},a),{servicenow:i}))},t}return l(t,e),t.prototype.render=function(){var e=this.props.query;return q.a.createElement("div",null,q.a.createElement("div",{className:"gf-form-inline"},q.a.createElement("div",{className:"gf-form"},q.a.createElement("label",{className:"gf-form-label width-8",title:"Fields ( Comma separated )"},"Fields"),q.a.createElement("input",{className:"gf-form-input width-30",type:"text",onChange:this.onFieldChange,value:e.servicenow.fields,placeholder:"Fields ( Comma Separated)",title:"Fields ( Comma Separated )"}))))},t}(S.PureComponent),L=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onQueryChange=function(e){var n=e.target.value,r=t.props,a=r.query,o=r.onChange,i=a.servicenow;i.query=n,o(s(s({},a),{servicenow:i}))},t}return l(t,e),t.prototype.render=function(){var e=this.props.query;return q.a.createElement("div",null,q.a.createElement("div",{className:"gf-form-inline"},q.a.createElement("div",{className:"gf-form"},q.a.createElement("label",{className:"gf-form-label width-8",title:"Query"},"Query"),q.a.createElement("textarea",{value:e.servicenow.query||"",onChange:this.onQueryChange,className:"gf-form-input min-width-30 width-30",rows:3}))))},t}(S.PureComponent),j=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onGroupByChange=function(e){var n=e.target.value,r=t.props,a=r.query,o=r.onChange,i=a.servicenow;i.groupBy=n,o(s(s({},a),{servicenow:i}))},t}return l(t,e),t.prototype.render=function(){var e=this.props.query;return q.a.createElement("div",null,q.a.createElement("div",{className:"gf-form-inline"},q.a.createElement("div",{className:"gf-form"},q.a.createElement("label",{className:"gf-form-label width-8",title:"Group By Field"},"Group By"),q.a.createElement("input",{className:"gf-form-input width-30",type:"text",onChange:this.onGroupByChange,value:e.servicenow.groupBy,placeholder:"",title:"Group By"}))))},t}(S.PureComponent),G=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onOrderByChange=function(e){var n=e.target.value,r=t.props,a=r.query,o=r.onChange,i=a.servicenow;i.orderBy=n,o(s(s({},a),{servicenow:i}))},t.onOrderDirectionChange=function(e){var n=e.value,r=t.props,a=r.query,o=r.onChange,i=a.servicenow;i.orderByDirection=n,o(s(s({},a),{servicenow:i}))},t}return l(t,e),t.prototype.render=function(){var e=this.props.query;return q.a.createElement("div",null,q.a.createElement("div",{className:"gf-form-inline"},q.a.createElement("div",{className:"gf-form"},q.a.createElement("label",{className:"gf-form-label width-8",title:"Order By"},"Order By"),q.a.createElement("input",{className:"gf-form-input width-10",type:"text",onChange:this.onOrderByChange,value:e.servicenow.orderBy,placeholder:"",title:"Order By"}),q.a.createElement("label",{className:"gf-form-label width-8",title:"Order Direction"},"Order Direction"),q.a.createElement(r.Select,{className:"width-12",value:x.find((function(t){return t.value===e.servicenow.orderByDirection})),options:x,defaultValue:e.servicenow.orderByDirection,onChange:this.onOrderDirectionChange}))))},t}(S.PureComponent),H=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onLimitChange=function(e){var n=e.target.value,r=t.props,a=r.query,o=r.onChange,i=a.servicenow;i.limit=n,o(s(s({},a),{servicenow:i}))},t}return l(t,e),t.prototype.render=function(){var e=this.props.query;return q.a.createElement("div",null,q.a.createElement("div",{className:"gf-form-inline"},q.a.createElement("div",{className:"gf-form"},q.a.createElement("label",{className:"gf-form-label width-8",title:"Limit"},"Limit"),q.a.createElement("input",{className:"gf-form-input width-10",type:"text",onChange:this.onLimitChange,value:e.servicenow.limit,placeholder:"Limit",title:"Limit"}))))},t}(S.PureComponent),U=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),t.prototype.render=function(){var e,t,n=Object(m.defaults)(this.props.query,{servicenow:Object(m.defaults)(this.props.query.servicenow,b)});return n&&n.servicenow&&"table"===n.servicenow.type&&(e=q.a.createElement(P,{onChange:this.props.onChange,query:n,datasource:this.props.datasource})),n&&n.servicenow&&"stats"===n.servicenow.type&&(t=q.a.createElement(j,{onChange:this.props.onChange,query:n,datasource:this.props.datasource})),q.a.createElement("div",null,q.a.createElement(R,{onChange:this.props.onChange,query:n,datasource:this.props.datasource}),e,t,q.a.createElement(L,{onChange:this.props.onChange,query:n,datasource:this.props.datasource}),q.a.createElement(D,{onChange:this.props.onChange,query:n,datasource:this.props.datasource}),q.a.createElement(G,{onChange:this.props.onChange,query:n,datasource:this.props.datasource}),q.a.createElement(H,{onChange:this.props.onChange,query:n,datasource:this.props.datasource}))},t}(S.PureComponent),V=function(){function e(){this.supportedTables=O.map((function(e){return{text:e.label,value:e.value}}))}return e.templateUrl=_,e}();n.d(t,"plugin",(function(){return M}));var M=new a.DataSourcePlugin(N).setConfigEditor(T).setQueryEditor(U).setAnnotationQueryCtrl(V)}])}));