function ctSetCookie(e,t){document.cookie=e+"="+encodeURIComponent(t)+"; path=/; samesite=lax"}function apbct_collect_visible_fields(e){var t=[],o="",n=0,i=[];for(var a in e.elements)isNaN(+a)||(t[a]=e.elements[a]);return(t=t.filter(function(e){return"none"!==getComputedStyle(e).display&&"hidden"!==getComputedStyle(e).visibility&&"0"!==getComputedStyle(e).opacity&&"hidden"!==e.getAttribute("type")&&"submit"!==e.getAttribute("type")&&null!==e.getAttribute("name")&&-1===i.indexOf(e.getAttribute("name"))&&(n++,-1===["radio","checkbox"].indexOf(e.getAttribute("type"))||(i.push(e.getAttribute("name")),!1))})).forEach(function(e,t,n){o+=" "+e.getAttribute("name")}),{visible_fields:o=o.trim(),visible_fields_count:n}}function apbct_visible_fields_set_cookie(e){var t="object"==typeof e&&null!==e?e:{};ctSetCookie("apbct_visible_fields",JSON.stringify(t))}function apbct_js_keys__set_input_value(e,t,n,o){if(null!==document.getElementById(n.input_name)){var i=document.getElementById(n.input_name).value;document.getElementById(n.input_name).value=document.getElementById(n.input_name).value.replace(i,e.js_key)}}function apbct_public_sendAJAX(t,n,o){var i=n.callback||null,a=n.callback_context||null,c=n.callback_params||null,e=n.async||!0,s=n.notJson||null,l=n.timeout||15e3,r=(o=o||null,n.button||null),u=n.spinner||null,p=n.progressbar||null,d=n.silent||null,m=n.no_nonce||null;"string"==typeof t?(m||(t=t+"&_ajax_nonce="+ctPublic._ajax_nonce),t=t+"&no_cache="+Math.random()):(m||(t._ajax_nonce=ctPublic._ajax_nonce),t.no_cache=Math.random()),r&&(r.setAttribute("disabled","disabled"),r.style.cursor="not-allowed"),u&&jQuery(u).css("display","inline"),jQuery.ajax({type:"POST",url:ctPublic._ajax_url,data:t,async:e,success:function(e){r&&(r.removeAttribute("disabled"),r.style.cursor="pointer"),u&&jQuery(u).css("display","none"),s||(e=JSON.parse(e)),e.error?(setTimeout(function(){p&&p.fadeOut("slow")},1e3),alert("Error happens: "+(e.error||"Unkown"))):i&&(c?i.apply(a,c.concat(e,t,n,o)):i(e,t,n,o))},error:function(e,t,n){r&&(r.removeAttribute("disabled"),r.style.cursor="pointer"),u&&jQuery(u).css("display","none"),n&&!d&&(console.log("APBCT_AJAX_ERROR"),console.log(e),console.log(t),console.log("Anti-spam by Cleantalk plugin error: "+n+"Please, contact Cleantalk tech support https://wordpress.org/support/plugin/cleantalk-spam-protect/"),alert("Anti-spam by Cleantalk plugin error: "+n+"Please, contact Cleantalk tech support https://wordpress.org/support/plugin/cleantalk-spam-protect/"))},timeout:l})}!function(){var e=new Date,t=(new Date).getTime(),n=!0,o=[],i=0;function a(e,t,n){"function"==typeof window.addEventListener?e.addEventListener(t,n):e.attachEvent(t,n)}function c(e,t,n){"function"==typeof window.removeEventListener?e.removeEventListener(t,n):e.detachEvent(t,n)}ctSetCookie("ct_ps_timestamp",Math.floor((new Date).getTime()/1e3)),ctSetCookie("ct_fkp_timestamp","0"),ctSetCookie("ct_pointer_data","0"),ctSetCookie("ct_timezone","0"),setTimeout(function(){ctSetCookie("ct_timezone",e.getTimezoneOffset()/60*-1)},1e3);var s=function(){ctSetCookie("ct_fkp_timestamp",Math.floor((new Date).getTime()/1e3)),c(window,"mousedown",s),c(window,"keydown",s)},l=setInterval(function(){n=!0},150),r=setInterval(function(){ctSetCookie("ct_pointer_data",JSON.stringify(o))},1200),u=function(e){!0===n&&(o.push([Math.round(e.clientY),Math.round(e.clientX),Math.round((new Date).getTime()-t)]),n=!1,50<=++i&&(c(window,"mousemove",u),clearInterval(l),clearInterval(r)))};a(window,"mousemove",u),a(window,"mousedown",s),a(window,"keydown",s),a(window,"DOMContentLoaded",function(){ctSetCookie("apbct_visible_fields",0),setTimeout(function(){for(var e={},t=0;t<document.forms.length;t++){var n=document.forms[t];n.classList.contains("slp_search_form")||n.parentElement.classList.contains("mec-booking")||-1!==n.action.toString().indexOf("activehosted.com")||n.id&&"caspioform"==n.id||n.name.classList&&n.name.classList.contains("tinkoffPayRow")||(e[t]=apbct_collect_visible_fields(n),n.onsubmit_prev=n.onsubmit,n.onsubmit=function(e){var t={};t[0]=apbct_collect_visible_fields(this),apbct_visible_fields_set_cookie(t),e.target.onsubmit_prev instanceof Function&&setTimeout(function(){e.target.onsubmit_prev.call(e.target,e)},500)})}apbct_visible_fields_set_cookie(e)},1e3)})}(),"undefined"!=typeof jQuery&&jQuery(document).ajaxComplete(function(e,t,n){if(t.responseText&&-1!==t.responseText.indexOf('"apbct')){var o=JSON.parse(t.responseText);void 0!==o.apbct&&(o=o.apbct).blocked&&(document.dispatchEvent(new CustomEvent("apbctAjaxBockAlert",{bubbles:!0,detail:{message:o.comment}})),alert(o.comment),1==+o.stop_script&&window.stop())}});