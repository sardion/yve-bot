!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n(require("isomorphic-unfetch"),require("../../core")):"function"==typeof define&&define.amd?define(["isomorphic-unfetch","../../core"],n):e.YveBotTypesStringSearch=n(null,e.YveBot)}(this,function(e,n){"use strict";function t(e,n,t,r){return new(t||(t=Promise))(function(o,i){function u(e){try{l(r.next(e))}catch(e){i(e)}}function a(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){e.done?o(e.value):new t(function(n){n(e.value)}).then(u,a)}l((r=r.apply(e,n||[])).next())})}function r(e,n){function t(t){return function(u){return function(t){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,o&&(i=o[2&t[0]?"return":t[0]?"throw":"next"])&&!(i=i.call(o,t[1])).done)return i;switch(o=0,i&&(t=[0,i.value]),t[0]){case 0:case 1:i=t;break;case 4:return a.label++,{value:t[1],done:!1};case 5:a.label++,o=t[1],t=[0];continue;case 7:t=a.ops.pop(),a.trys.pop();continue;default:if(i=a.trys,!(i=i.length>0&&i[i.length-1])&&(6===t[0]||2===t[0])){a=0;continue}if(3===t[0]&&(!i||t[1]>i[0]&&t[1]<i[3])){a.label=t[1];break}if(6===t[0]&&a.label<i[1]){a.label=i[1],i=t;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(t);break}i[2]&&a.ops.pop(),a.trys.pop();continue}t=n.call(e,a)}catch(e){t=[6,e],o=0}finally{r=i=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,u])}}var r,o,i,u,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return u={next:t(0),throw:t(1),return:t(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u}var o=(n=n&&n.hasOwnProperty("default")?n.default:n).exceptions,i=o.PauseRuleTypeExecutors,u=o.ValidatorError;return n.types.defineExtension("StringSearch",{executors:[{},{transform:function(e,n,o){return t(void 0,void 0,void 0,function(){var t,i,a,l,c,s;return r(this,function(r){return t=n.config,i=t.apiURI,a=t.apiQueryParam,l=t.translate,c=t.messages,s=i+"?"+a+"="+encodeURIComponent(String(e)),o.dispatch("typing"),[2,fetch(s).then(function(e){return e.json()}).then(function(e){if(0===e.length)throw new u(c.noResults,n);return e}).then(function(e){if(!l)return e;var n=l.label,t=l.value;return e.map(function(e){return{label:e[n],value:e[t]}})})]})})}},{transform:function(e,n,o){return t(void 0,void 0,void 0,function(){var t,u,a;return r(this,function(r){if(!0===o.store.get("stringsearch."+n.name+".wait"))return o.store.unset("stringsearch."+n.name+".wait"),[2,e];throw t=n.config.messages,1===e.length?(a=t.didYouMean+": "+e[0].label+"?",u=[{label:t.yes,value:e[0].value},{label:t.no,value:null}]):(a=t.multipleResults+":",u=e.concat([{label:t.noneOfAbove,value:null}])),o.store.set("stringsearch."+n.name+".wait",!0),o.talk(a,{type:"SingleChoice",options:u}),new i(n.name)})})}},{validators:[{function:function(e,n,t){var r=n.config.messages;if(!e)throw t.store.unset("executors."+n.name+".currentIdx"),t.talk(r.wrongResult),new i(n.name);return!0}}]}]})});