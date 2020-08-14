define(["react","lodash","@grafana/ui","@grafana/data","@grafana/runtime"],(function(e,t,n,r,a){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=5)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t){e.exports=a},function(e,t,n){"use strict";n.r(t);var r=n(2),a=n(3),l=n(4),o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function i(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var s=function(){return(s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};function u(e,t,n,r){return new(n||(n=Promise))((function(a,l){function o(e){try{s(r.next(e))}catch(e){l(e)}}function i(e){try{s(r.throw(e))}catch(e){l(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,i)}s((r=r.apply(e,t||[])).next())}))}function c(e,t){var n,r,a,l,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return l={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function i(l){return function(i){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(a=2&l[0]?r.return:l[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,l[1])).done)return a;switch(r=0,a&&(l=[2&l[0],a.value]),l[0]){case 0:case 1:a=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,r=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!(a=o.trys,(a=a.length>0&&a[a.length-1])||6!==l[0]&&2!==l[0])){o=0;continue}if(3===l[0]&&(!a||l[1]>a[0]&&l[1]<a[3])){o.label=l[1];break}if(6===l[0]&&o.label<a[1]){o.label=a[1],a=l;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(l);break}a[2]&&o.ops.pop(),o.trys.pop();continue}l=t.call(e,o)}catch(e){l=[6,e],r=0}finally{n=a=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,i])}}}function f(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,l=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(r=l.next()).done;)o.push(r.value)}catch(e){a={error:e}}finally{try{r&&!r.done&&(n=l.return)&&n.call(l)}finally{if(a)throw a.error}}return o}function p(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(f(arguments[t]));return e}var m=n(1);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var h=function(){function e(e){var t=this;this.output={columns:[],rows:[],type:"table"},e.filter((function(e){return e&&e.result&&e.result.data&&e.result.data.result})).forEach((function(e){t.query=e.query,e&&e.query&&e.query.servicenow&&"stats"===e.query.servicenow.type?e.result.data.result.stats?t.parseResultsAsSingleStat(e):t.parseResultsAsMultiStat(e):t.parseResultsAsTable(e)}))}return e.prototype.parseResultsAsSingleStat=function(e){this.output.columns.push({text:"count",type:"number"}),this.output.rows.push([Object(m.toInteger)(e.result.data.result.stats.count)])},e.prototype.parseResultsAsMultiStat=function(e){var t=this;e.result.data.result.forEach((function(n,r){if(0===r&&e&&e.query&&e.query.servicenow&&e.query.servicenow.groupBy&&(e.query.servicenow.groupBy.split(",").forEach((function(e){t.output.columns.push({text:e,type:"string"})})),t.output.columns.push({text:"count",type:"number"})),n&&n.stats){var a=Object(m.toInteger)(n.stats.count),l=[];e.query.servicenow.groupBy.split(",").forEach((function(e){var t=n.groupby_fields.find((function(t){return t.field===e}));t&&l.push(t.display_value||t.value||"-")})),l.push(a),t.output.rows.push(l)}}))},e.prototype.parseResultsAsTable=function(e){var t=this;this.output.columns=[];var n="";n=e&&e.query&&e.query.servicenow&&e.query.servicenow.fields?e.query.servicenow.fields:n,n=e&&e.query&&e.query&&e.query.fields?e.query.fields:n;var r=Object(m.uniq)(n.split(",").map((function(e){return e.trim()})).filter(Boolean));e.result.data.result.forEach((function(e,n){0===n&&Object(m.forEach)(r,(function(e){t.output.columns.push({text:e,type:"string"})}));var a=[];t.output.columns.forEach((function(t){var n=e[t.text];"object"===d(n)&&n&&(n.display_value||""===n.value)?a.push(n.display_value||n.value):"object"===d(n)?a.push(JSON.stringify(n)):a.push(n)})),t.output.rows.push(a)}))},e.prototype.getResultsAsAnnotations=function(){var e=this,t=[];return Object(m.forEach)(this.output.rows,(function(n){var r=function(e,t,n){var r={text:"",title:"",tags:[],time:(new Date).getTime()},a="";return Object(m.forEach)(t,(function(t,l){t.text===n.startTimeField?e[l]&&(r.time=new Date(e[l]).getTime(),a+=t.text+" : "+e[l]+"\n"):t.text===n.endTimeField?e[l]&&(r.timeEnd=new Date(e[l]).getTime(),a+=t.text+" : "+e[l]+"\n"):t.text===n.titleField?e[l]&&(r.title=e[l]):t.text===n.descriptionField?e[l]&&(r.text=e[l]):e[l]&&r.tags.push(t.text+" : "+e[l])})),r.text+="\n    "+a+"\n  ",r}(n,e.output.columns,e.query);t.push(r)})),t},e}(),v=function(){function e(e,t){this.key=e,this.value=t.toString()}return e.prototype.getValue=function(){return[this.key,this.value].join("=")},e}(),y=function(){function e(e,t,n,r){void 0===r&&(r="^"),this.condition=r,this.field=e,this.operator=t,this.value=n}return e.prototype.toString=function(){return(""+this.field+this.operator+this.value).trim()},e}(),b=function(){function e(e){this.table="incident",this.type="table",this.orderByDirection="asc",this.table=e.table||"incident",this.type=e.type||"table",this.fields=e.fields||"",this.query=e.query||"",this.filters=e.filters||[],this.orderByDirection=e.orderByDirection||"asc",this.orderBy=e.orderBy||"",this.groupBy=e.groupBy||"",this.limit=e.limit||25}return e.prototype.getUrl=function(){var e=[];e.push(new v("sysparm_display_value","all")),e.push(new v("sysparm_limit",this.limit||10)),this.fields&&"*"!==this.fields&&e.push(new v("sysparm_fields",this.fields||"opened_at,number,short_description,sys_created_by,severity,category,state,priority"));var t=[(this.query+"").trim().replace(/\^OR\n/g,"^OR").replace(/\^\n/g,"^").replace(/\n/g,"^")].filter(Boolean);return this.filters.forEach((function(e,n){var r=0===t.length&&0===n?"":e.condition||"^";t.push(encodeURIComponent((""+r+e.field+e.operator+e.value).trim()))})),this.orderBy&&t.push(("asc"===this.orderByDirection?"^ORDERBY":"^ORDERBYDESC")+this.orderBy.trim()),t.length>0&&e.push(new v("sysparm_query",t.join(""))),"stats"===this.type&&e.push(new v("sysparm_count","true")),"stats"===this.type&&this.groupBy&&e.push(new v("sysparm_group_by",this.groupBy.trim())),"/api/now/"+(this.type||"table")+"/"+this.table+"?"+e.map((function(e){return e.getValue()})).join("&")},e}(),g=new b({table:"incident",type:"table",fields:"opened_at,number,short_description,sys_created_by,severity,category,state,priority",query:"",groupBy:"",orderBy:"opened_at",orderByDirection:"desc",limit:10}),w=function e(t,n,r){return void 0===r&&(r=1),Object(l.getBackendSrv)().datasourceRequest({method:"GET",url:t}).catch((function(a){if(console.log(a),r>0)return e(t,n,r-1);throw a}))},E=function(e,t,n){var r="javascript:gs.dateGenerate('"+t.format("YYYY-MM-DD")+"','"+t.format("HH:mm:ss")+"')",a="javascript:gs.dateGenerate('"+n.format("YYYY-MM-DD")+"','"+n.format("HH:mm:ss")+"')";return e=(e=(e=e.replace("$__timeFrom()",r)).replace("$__timeTo()",a)).replace("$__timeFilter()",r+"@"+a)},N=function(){function e(e,t){this.instanceSettings=e,this.templateSrv=t,this.url="",this.url=this.instanceSettings.url+""}return e.prototype.doQueries=function(e,t){var n=this;return e.map((function(e){var r=e.servicenow;r&&r.query&&(r.query=E(r.query,t.range.from,t.range.to),r.query=n.templateSrv.replace(r.query,{},"glob")),r&&r.filters&&(r.filters=r.filters.map((function(e){return e.value=E(e.value,t.range.from,t.range.to),e.value=n.templateSrv.replace(e.value,{},"glob"),e})));var a=new b(r);return w(n.url+a.getUrl(),a).then((function(n){return{result:n,query:e,options:t}})).catch((function(t){throw{error:t,query:e}}))}))},e.prototype.doAnnotationQueries=function(e,t){var n=this;return e.map((function(e){e.query=E(e.query,t.range.from,t.range.to);var r=new b(e);return w(n.url+r.getUrl(),r).then((function(t){return{result:t,query:e,options:{}}})).catch((function(t){throw{error:t,query:e}}))}))},e.prototype.query=function(e){var t=[];e.targets&&(t=e.targets.filter((function(e){return!0!==e.hide})));var n=this.doQueries(t,e);return Promise.all(n).then((function(e){return new h(e).output}))},e.prototype.annotationsQuery=function(e){var t=[];if(e.targets)t=e.targets.filter((function(e){return!0!==e.hide}));else if(e.annotation){var n={limit:e.annotation.limit||30,startTimeField:e.annotation.startTimeField,endTimeField:e.annotation.endTimeField,titleField:e.annotation.titleField,descriptionField:e.annotation.descriptionField,fields:p(e.annotation.fields.split(","),[e.annotation.titleField,e.annotation.descriptionField,e.annotation.startTimeField,e.annotation.endTimeField]).filter(Boolean).join(","),query:e.annotation.query||"",table:e.annotation.table};t.push(n)}var r=this.doAnnotationQueries(t,e);return Promise.all(r).then((function(e){return new h(e).getResultsAsAnnotations()}))},e}(),q=function(e){function t(t,n){var r=e.call(this,t)||this;return r.instanceSettings=t,r.templateSrv=n,r.serviceNowDataSource=new N(r.instanceSettings,r.templateSrv),r}return t.$inject=["instanceSettings","templateSrv"],i(t,e),t.prototype.query=function(e){var t=[],n=Object(m.cloneDeep)(e);if(n.targets.length>0){var r=this.serviceNowDataSource.query(n);r&&t.push(r)}return Promise.all(t).then((function(e){return{data:Object(m.flatten)(e)}}))},t.prototype.annotationQuery=function(e){e.annotation.query=this.templateSrv.replace(e.annotation.query,{},"glob");var t={range:e.range,rangeRaw:e.rangeRaw,annotation:e.annotation};return this.serviceNowDataSource.annotationsQuery(t).then((function(e){return e})).catch((function(e){return console.error(e),[]}))},t.prototype.testDatasource=function(){var e=this;return new Promise((function(t,n){return u(e,void 0,void 0,(function(){return c(this,(function(e){return this.serviceNowDataSource.query({range:{from:"",to:""},targets:[]}).then((function(e){t({message:"Successfully Connected ServiceNow",status:"success"})})).catch((function(e){n({message:"Failed to Connect ServiceNow",status:"error"})})),[2]}))}))}))},t.prototype.metricFindQuery=function(e){return Promise.resolve([])},t}(a.DataSourceApi),S=n(0),_=n.n(S),C=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onURLChange=function(e){var n=t.props,r=n.onOptionsChange,a=n.options;r(s(s({},a),{url:e.target.value}))},t.onUserNameChange=function(e){var n=t.props,r=n.onOptionsChange,a=n.options;r(s(s({},a),{basicAuthUser:e.target.value}))},t.onPasswordChange=function(e){var n=t.props,r=n.onOptionsChange,a=n.options;r(s(s({},a),{secureJsonData:{basicAuthPassword:e.target.value}}))},t.onResetPassword=function(){var e=t.props,n=e.onOptionsChange,r=e.options;n(s(s({},r),{secureJsonFields:s(s({},r.secureJsonFields),{basicAuthPassword:!1}),secureJsonData:s(s({},r.secureJsonData),{basicAuthPassword:""})}))},t}return i(t,e),t.prototype.render=function(){var e=this.props.options;e.basicAuth=!0;var t=e.secureJsonFields,n=e.secureJsonData||{};return _.a.createElement(_.a.Fragment,null,_.a.createElement("h3",{className:"page-heading"},"Service Now Settings"),_.a.createElement("div",{className:"gf-form-inline"},_.a.createElement("div",{className:"gf-form"},_.a.createElement("label",{className:"gf-form-label width-11",title:"Service Now URL"},"Service Now URL"),_.a.createElement("input",{className:"gf-form-input width-20",type:"text",onChange:this.onURLChange,value:e.url||"",placeholder:"https://YOUR_INSTANCE_NAME.service-now.com"}))),_.a.createElement("div",{className:"gf-form-inline"},_.a.createElement("div",{className:"gf-form"},_.a.createElement("label",{className:"gf-form-label width-11",title:"User Name"},"User name"),_.a.createElement("input",{className:"gf-form-input width-20",type:"text",onChange:this.onUserNameChange,value:e.basicAuthUser||"",placeholder:"username"}))),_.a.createElement("div",{className:"gf-form-inline"},_.a.createElement("div",{className:"gf-form"},_.a.createElement("label",{className:"gf-form-label width-11",title:"Password"},"Password"),t&&t.basicAuthPassword?_.a.createElement(_.a.Fragment,null,_.a.createElement("label",{className:"gf-form-label width-20"},"Configured"),_.a.createElement("span",{className:"gf-form-button btn btn-secondary width-6",onClick:this.onResetPassword},"Reset")):_.a.createElement("input",{type:"password",value:n.basicAuthPassword||"",className:"gf-form-input width-20",onChange:this.onPasswordChange}))))},t}(S.PureComponent),T=function(e,t,n){var r=n.query,a=n.onChange,l=r.servicenow;Object(m.set)(l,t,e.value),a(s(s({},r),{servicenow:l}))},O=function(e,t,n){var r=n.query,a=n.onChange,l=r.servicenow;Object(m.set)(l,t,e.target.value),a(s(s({},r),{servicenow:l}))},A="annotations/annotations.editor.html",R=[{label:"Incidents (INC)",value:"incident"},{label:"Change Request (CHG)",value:"change_request"}],F=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={showHelpModal:!1},t.showHelpModal=function(e){return function(){t.setState({showHelpModal:e})}},t}return i(t,e),t.prototype.render=function(){var e=this.state.showHelpModal;return _.a.createElement(_.a.Fragment,null,"  ",_.a.createElement("button",{onClick:this.showHelpModal(!0),title:"Help",className:"btn btn-secondary btn-small"},"service now query help"),_.a.createElement(r.Modal,{title:_.a.createElement("div",{className:"modal-header-title"},_.a.createElement("span",{className:"p-l-1"},"Service Now Query Help")),isOpen:e,onDismiss:this.showHelpModal(!1)},_.a.createElement("div",null,_.a.createElement("div",null,_.a.createElement("h4",null,"Time Filter"),_.a.createElement("br",null),_.a.createElement("pre",{style:{display:"inline"}},"$__timeFrom()")," Returns the From datetime from the Grafana picker. Can be used with"," ",_.a.createElement("b",null,"Before / After")," filter.",_.a.createElement("br",null),_.a.createElement("br",null),_.a.createElement("pre",{style:{display:"inline"}},"$__timeTo()")," Returns the To datetime from the Grafana picker. Can be used with"," ",_.a.createElement("b",null,"Before / After")," filter.",_.a.createElement("br",null),_.a.createElement("br",null),_.a.createElement("pre",{style:{display:"inline"}},"$__timeFilter()")," Return start and end time form Grafana picker. Can be used with ",_.a.createElement("b",null,"Between")," ","filter.",_.a.createElement("br",null),_.a.createElement("br",null),_.a.createElement("h4",null,"Relative Time"),_.a.createElement("br",null),_.a.createElement("pre",{style:{display:"inline"}},"@hour@ago@24")," Returns the timestamp of 24 hours ago. Can be used with ",_.a.createElement("b",null,"Relative")," filter.",_.a.createElement("br",null),_.a.createElement("br",null),_.a.createElement("pre",{style:{display:"inline"}},"@hour@ago@-24")," Returns the timestamp of 24 hours from now. Can be used with ",_.a.createElement("b",null,"Relative")," ","filter.",_.a.createElement("br",null),_.a.createElement("br",null),_.a.createElement("p",null,"More help can be found at"," ",_.a.createElement("a",{href:"https://docs.servicenow.com/bundle/orlando-platform-user-interface/page/use/common-ui-elements/reference/r_OpAvailableFiltersQueries.html",target:"_blank",rel:"noopener"},"service-now website."))))))},t}(S.PureComponent),D=R,B=[{label:"Table",value:"table"},{label:"Stats",value:"stats"}],x=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.render=function(){var e=this,t=this.props.query;return _.a.createElement("div",null,_.a.createElement("div",{className:"gf-form-inline"},_.a.createElement("div",{className:"gf-form"},_.a.createElement("label",{className:"gf-form-label query-keyword width-8"},"Table"),_.a.createElement(r.Select,{className:"width-12",value:D.find((function(e){return e.value===t.servicenow.table})),options:D,defaultValue:t.servicenow.table,onChange:function(t){return T(t,"table",e.props)}})),_.a.createElement("div",{className:"gf-form"},_.a.createElement("label",{className:"gf-form-label query-keyword width-6"},"Type"),_.a.createElement(r.Select,{className:"width-12",value:B.find((function(e){return e.value===t.servicenow.type})),options:B,defaultValue:t.servicenow.type,onChange:function(t){return T(t,"type",e.props)}}),_.a.createElement(F,null))))},t}(S.PureComponent),P=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.render=function(){var e=this,t=this.props.query;return _.a.createElement("div",null,_.a.createElement("div",{className:"gf-form-inline"},_.a.createElement("div",{className:"gf-form"},_.a.createElement("label",{className:"gf-form-label width-8",title:"Fields ( Comma separated )"},"Fields"),_.a.createElement("input",{className:"gf-form-input width-30",type:"text",onChange:function(t){return O(t,"fields",e.props)},value:t.servicenow.fields,placeholder:"Fields ( Comma Separated)",title:"Fields ( Comma Separated )"}))))},t}(S.PureComponent),I=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.render=function(){var e=this,t=this.props.query;return _.a.createElement("div",null,_.a.createElement("div",{className:"gf-form-inline"},_.a.createElement("div",{className:"gf-form"},_.a.createElement("label",{className:"gf-form-label width-8",title:"Query"},"Query"),_.a.createElement("textarea",{value:t.servicenow.query||"",onChange:function(t){return O(t,"query",e.props)},className:"gf-form-input min-width-30 width-30",rows:3}))))},t}(S.PureComponent),j=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.render=function(){var e=this,t=this.props.query;return _.a.createElement("div",null,_.a.createElement("div",{className:"gf-form-inline"},_.a.createElement("div",{className:"gf-form"},_.a.createElement("label",{className:"gf-form-label width-8",title:"Group By Field"},"Group By"),_.a.createElement("input",{className:"gf-form-input width-30",type:"text",onChange:function(t){return O(t,"groupBy",e.props)},value:t.servicenow.groupBy,placeholder:"",title:"Group By"}))))},t}(S.PureComponent),L="incident",M=[{value:"active",label:"Active",tables:[L,"change_request"]},{value:"assigned_to",label:"Assigned To",tables:[L,"change_request"]},{value:"assignment_group.name",label:"Assignment Group",tables:[L,"change_request"]},{value:"assignment_group",label:"Assignment Group ID",tables:[L,"change_request"]},{value:"description",label:"Description",tables:[L,"change_request"]},{value:"end_date",label:"End Date",tables:["change_request"]},{value:"incident_state",label:"Incident State",tables:[L]},{value:"number",label:"Number",tables:[L,"change_request"]},{value:"opened_at",label:"Opened At",tables:[L,"change_request"]},{value:"priority",label:"Priority",tables:[L,"change_request"]},{value:"short_description",label:"Short Description",tables:[L,"change_request"]},{value:"start_date",label:"Start Date",tables:["change_request"]},{value:"state",label:"State",tables:[L,"change_request"]},{value:"sys_created_by",label:"Created By",tables:[L,"change_request"]},{value:"sys_created_on",label:"Created On",tables:[L,"change_request"]},{value:"type",label:"Type",tables:[L,"change_request"]}],G=[{label:"Ascending",value:"asc"},{label:"Descending",value:"desc"}],H=[10,25,50,100,250,500,1e3].map((function(e){return{label:e.toString(),value:e.toString()}})),k=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.render=function(){var e=this,t=this.props.query;return _.a.createElement("div",null,_.a.createElement("div",{className:"gf-form-inline"},_.a.createElement("div",{className:"gf-form"},_.a.createElement("label",{className:"gf-form-label width-8",title:"Order By"},"Order By"),_.a.createElement(r.Select,{className:"width-12",value:M.find((function(e){return e.value===t.servicenow.orderBy}))||{value:t.servicenow.orderBy,label:t.servicenow.orderBy},options:M.filter((function(e){return e.tables.indexOf(t.servicenow.table)>-1})),defaultValue:t.servicenow.orderBy,onChange:function(t){return T(t,"orderBy",e.props)},allowCustomValue:!0}),_.a.createElement("label",{className:"gf-form-label width-8",title:"Order Direction"},"Order Direction"),_.a.createElement(r.Select,{className:"width-8",value:G.find((function(e){return e.value===t.servicenow.orderByDirection})),options:G,defaultValue:t.servicenow.orderByDirection,onChange:function(t){return T(t,"orderByDirection",e.props)}}),_.a.createElement("label",{className:"gf-form-label width-3",title:"Limit"},"Limit"),_.a.createElement(r.Select,{className:"width-5",value:H.find((function(e){return e.value===t.servicenow.limit}))||{value:t.servicenow.limit,label:t.servicenow.limit},options:H,defaultValue:t.servicenow.limit,onChange:function(t){return T(t,"limit",e.props)},allowCustomValue:!0}))))},t}(S.PureComponent),V=[{value:"=",label:"Equals"},{value:"!=",label:"Not Equals"},{value:"<",label:"Less than"},{value:"<=",label:"Less than or Equals"},{value:">",label:"Greater than"},{value:">=",label:"Greater than or Equals"},{value:"STARTSWITH",label:"Starts With"},{value:"ENDSWITH",label:"Ends With"},{value:"LIKE",label:"Like"},{value:"NOTLIKE",label:"Not Like"},{value:"ISEMPTY",label:"Is Empty"},{value:"ISNOTEMPTY",label:"Is Not Empty"},{value:"IN",label:"In"},{value:"NOT IN",label:"Not In"},{value:"ANYTHING",label:"Anything"},{value:"BETWEEN",label:"Between"},{value:"SAMEAS",label:"Is Same"},{value:"NSAMEAS",label:"Is Different"},{value:"ONToday",label:"On Today"},{value:"NOTONToday",label:"NOT ON Today"},{value:"DATEPART",label:"Date Part"},{value:"RELATIVEGE",label:"Relative (on or after)"},{value:"RELATIVELE",label:"Relative (on or before)"},{value:"RELATIVEGT",label:"Relative (after)"},{value:"RELATIVELT",label:"Relative (before)"},{value:"RELATIVEEE",label:"Relative (on)"},{value:"MORETHAN",label:"Is More than"},{value:"LESSTHAN",label:"Is Less than"},{value:"GT_FIELD",label:"Greater than field"},{value:"LT_FIELD",label:"Less than field"},{value:"GT_OR_EQUALS_FIELD",label:"Greater than or is field"},{value:"LT_OR_EQUALS_FIELD",label:"Less than or is field"}],U=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onFilterAdd=function(e){void 0===e&&(e="^");var n=t.props,r=n.query,a=n.onChange,l=r.servicenow,o=new y("number","STARTSWITH","incident"===l.table?"INC":"CHG",e);l.filters=l.filters||[o],l.filters.push(o),a(s(s({},r),{servicenow:l}))},t.onFilterRemove=function(e){var n=t.props,r=n.query,a=n.onChange,l=r.servicenow,o=new y("number","STARTSWITH","incident"===l.table?"INC":"CHG","^");l.filters=l.filters||[o],l.filters.splice(e,1),a(s(s({},r),{servicenow:l}))},t}return i(t,e),t.prototype.render=function(){var e=this,t=this.props.query;return _.a.createElement("div",null,0===t.servicenow.filters.length?_.a.createElement("div",{className:"gf-form-inline"},_.a.createElement("div",{className:"gf-form"},_.a.createElement("div",{className:"gf-form gf-form--grow"},_.a.createElement("label",{className:"gf-form-label width-8",title:"Filter"},"Filter"))),_.a.createElement("div",{className:"gf-form"},_.a.createElement("div",{className:"gf-form gf-form--grow"},_.a.createElement("span",{className:"btn btn-success btn-small",style:{margin:"5px"},onClick:function(){return e.onFilterAdd("^")}},"Add Filter")))):null,t.servicenow.filters.map((function(n,a){return _.a.createElement("div",{className:"gf-form-inline"},_.a.createElement("div",{className:"gf-form"},_.a.createElement("div",{className:"gf-form gf-form--grow"},_.a.createElement("label",{className:"gf-form-label width-8",title:"Filter"},"Filter ",a+1))),_.a.createElement("div",{className:"gf-form"},_.a.createElement("div",{className:"gf-form gf-form--grow"},_.a.createElement(r.Select,{className:"width-12",value:M.find((function(e){return e.value===n.field}))||{value:n.field,label:n.field},options:M.filter((function(e){return e.tables.indexOf(t.servicenow.table)>-1})),defaultValue:n.field,onChange:function(t){return T(t,"filters["+a+"].field",e.props)},allowCustomValue:!0}),_.a.createElement(r.Select,{className:"width-12",value:V.find((function(e){return e.value===n.operator}))||{value:n.operator,label:n.operator},options:V,defaultValue:n.operator,onChange:function(t){return T(t,"filters["+a+"].operator",e.props)},allowCustomValue:!0}),_.a.createElement("input",{type:"text",className:"gf-form-input width-12",title:"Value",placeholder:"Value",value:n.value,onChange:function(t){return O(t,"filters["+a+"].value",e.props)}}))),_.a.createElement("span",null,_.a.createElement("div",{className:"gf-form"},_.a.createElement("div",{className:"gf-form gf-form--grow"},a===t.servicenow.filters.length-1?_.a.createElement("span",{className:"btn btn-success btn-small",style:{margin:"5px"},onClick:function(){return e.onFilterAdd("^")}},"+"):null,_.a.createElement("span",{className:"btn btn-danger btn-small",style:{margin:"5px"},onClick:function(){return e.onFilterRemove(a)}},"x")))))})))},t}(S.PureComponent),Q=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.render=function(){var e,t=Object(m.defaults)(this.props.query,{servicenow:Object(m.defaults)(this.props.query.servicenow,g)});if(t&&t.servicenow&&t.servicenow.type)switch(t.servicenow.type){case"table":e=_.a.createElement(P,{onChange:this.props.onChange,query:t,datasource:this.props.datasource});break;case"stats":e=_.a.createElement(j,{onChange:this.props.onChange,query:t,datasource:this.props.datasource})}return _.a.createElement("div",null,_.a.createElement(x,{onChange:this.props.onChange,query:t,datasource:this.props.datasource}),e,_.a.createElement(I,{onChange:this.props.onChange,query:t,datasource:this.props.datasource}),_.a.createElement(U,{onChange:this.props.onChange,query:t,datasource:this.props.datasource}),_.a.createElement(k,{onChange:this.props.onChange,query:t,datasource:this.props.datasource}))},t}(S.PureComponent),Y=function(){function e(){this.supportedTables=R.map((function(e){return{text:e.label,value:e.value}}))}return e.templateUrl=A,e}();n.d(t,"plugin",(function(){return J}));var J=new a.DataSourcePlugin(q).setConfigEditor(C).setQueryEditor(Q).setAnnotationQueryCtrl(Y)}])}));