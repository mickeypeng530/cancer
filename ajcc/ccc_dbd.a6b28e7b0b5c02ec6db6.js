(()=>{"use strict";var e,t={7488(e,t,n){n(1643),n(5647),n(5654);var a=n(211);var s=n(4692);var reportFormat="A";var r=new Map([["x","Primary tumor cannot be assessed"],["0","No evidence of primary tumor"],["is","Carcinoma in situ/high-grade dysplasia"],["1","Tumor invades the bile duct wall with a depth less than 5 mm"],["2","Tumor invades the bile duct wall with a depth of 5-12 mm"],["3","Tumor invades the bile duct wall with a depth greater than 12 mm"],["4","Tumor involves the celiac axis, superior mesenteric artery, and/or common hepatic artery"]]),i=new Map([["x","Regional lymph nodes cannot be assessed"],["0","No regional lymph node metastasis"],["1","Metastasis in one to three regional lymph nodes"],["2","Metastasis in four or more regional lymph nodes"]]),o=new Map([["0","No distant metastasis (in this study)"],["1","Distant metastasis"]]);s('.cb_rn, input[name="radio_rn"]').change(function(){s(this).parent().parent().find(".cb_rn:checked").length?s(this).parent().parent().find('input[name="radio_rn"]').prop("checked",!0):s(this).parent().parent().find('input[name="radio_rn"]').prop("checked",!1),s(this).parent().parent().siblings().find(".cb_rn").prop("checked",!1)}),s("#cb_tp_ts_nm").change(function(){s("form.was-validated").length}),s(".cb_rn").change(function(){var e=+s("#txt_rln_num").val();this.checked?s("#txt_rln_num").val(e+1):e>0&&s("#txt_rln_num").val(e-1)}),(0,a.z_)({generateReportFn:function(){if("B"===reportFormat){
var eR="";
var protoFmt=s('input[name="protocol_radios"]:checked').val();
if(protoFmt==="ct"){eR+="1. CT protocol\nWith contrast (multi-phase), range: whole abdomen, slice thickness <= 5mm\n\n";}else{eR+="1. MR protocol\nSEQUENCES:\n- Axial T1WI and T2WI with fat suppression;\n- Axial, coronal and sagittal post Gd-enhanced T1WI with fat suppression;\n- MRCP\n\n";}
eR+="2. Tumor size\n";
var tsNM_B=s("#cb_ts_nm").is(":checked");
var tsLen_B=parseFloat(s("#txt_ts_len").val());
if(tsNM_B){eR+="--- Non-measurable\n";}
else if(tsLen_B){eR+="--- Measurable: "+tsLen_B+" cm (largest diameter)\n";}
else{eR+="--- ___ cm\n";}
eR+="\n";
eR+="3. Tumor invasion\n";
var isNA_B=s("#cb_ti_na").is(":checked");
var depth_B=parseInt(s("#txt_ti_dep").val())||0;
if(isNA_B){eR+="--- Not assessable\n";}
else{
  eR+="--- Invasion depth: "+(depth_B>0?depth_B+" mm":"___ mm")+"\n";
  eR+="  (T1: <5 mm, T2: 5-12 mm, T3: >12 mm)\n";
}
// T4 invasions
var t4Opts_B=[["cb_ti_ca","celiac axis"],["cb_ti_sma","superior mesenteric artery"],["cb_ti_cha","common hepatic artery"]];
var t4Y_B=[],t4N_B=[];
t4Opts_B.forEach(function(op){if(s("#"+op[0]).is(":checked")){t4Y_B.push(op[1]);}else{t4N_B.push(op[1]);}});
var t4Other_B=s("#cb_ti_others").is(":checked");
if(t4Other_B){var txtO=s("#txt_ti_others").val();if(txtO){t4Y_B.push(txtO);}}
if(t4Y_B.length){eR+="--- T4 criteria (Yes):\n* "+t4Y_B.join(", ")+"\n";}
if(t4N_B.length){eR+="--- T4 criteria (No or Equivocal):\n* "+t4N_B.join(", ")+"\n";}
eR+="\n";
eR+="4. Regional nodal metastasis\n";
var nodeCount_B=parseInt(s("#txt_rln_num").val())||0;
if(nodeCount_B>0){eR+="--- Yes:\n* Number of suspicious lymph nodes: "+nodeCount_B+"\n";}
else{eR+="--- No or Equivocal\n";}
eR+="\n";
eR+="5. Distant metastasis (In this study)\n";
var dmOpts_B=[["cb_dm_li","liver"],["cb_dm_ad","adrenal"],["cb_dm_lu","lung"],["cb_dm_b","bone"]];
var dmY_B=[],dmN_B=[];
dmOpts_B.forEach(function(op){if(s("#"+op[0]).is(":checked")){dmY_B.push(op[1]);}else{dmN_B.push(op[1]);}});
var dmO_B=s("#cb_dm_others").is(":checked");
if(dmO_B){var txtDM=s("#txt_dm_others").val();if(txtDM){dmY_B.push(txtDM);}}
if(dmY_B.length){eR+="--- Yes:\n* "+dmY_B.join(", ")+"\n";}
if(dmN_B.length){eR+="--- No or Equivocal:\n* "+dmN_B.join(", ")+"\n";}
eR+="\n";
eR+="6. Other findings:\n\n\n";
// TNM per original
var tPush_B=[],nPush_B=["0"],mPush_B=["0"];
var isT4_B=s(".cb_ti_t4:checked").length>0;
var isMeasurable_B=!isNA_B&&depth_B>0;
var hasInvasion_B=!isNA_B&&depth_B>0;
if(isMeasurable_B&&(hasInvasion_B||isT4_B)){
  if(isT4_B){tPush_B.push("4");}
  else if(depth_B>12){tPush_B.push("3");}
  else if(depth_B>=5){tPush_B.push("2");}
  else if(depth_B>0){tPush_B.push("1");}
  else{tPush_B.push("x");}
}else{tPush_B.push("x");}
if(nodeCount_B>0){if(nodeCount_B>=4){nPush_B.push("2");}else{nPush_B.push("1");}}
if(s(".cb_dm:checked").length){mPush_B.push("1");}
var tFin=tPush_B.length?tPush_B.sort()[tPush_B.length-1]:"0";
var nFin=nPush_B.sort()[nPush_B.length-1];
var mFin=mPush_B.sort()[mPush_B.length-1];
eR+=(0,a.xM)("Distal Cholangiocarcinoma",tFin,r,nFin,i,mFin,o,8);
s("#reportModalLongTitle").html("Distal Cholangiocarcinoma Staging Form");
s("#reportModalBody pre code").html(eR);
return document.getElementById("reportModalLong").showModal();
}
var e=parseFloat(s("#txt_ts_len").val()),t=!s("#cb_ts_nm").is(":checked")&&e>0,n=parseInt(s("#txt_ti_dep").val())||0,c=!s("#cb_ti_na").is(":checked")&&n>0,l={isMeasurable:t,hasInvasion:c,invasionDepth:n,isT4:s(".cb_ti_t4:checked").length>0,nodesCount:parseInt(s("#txt_rln_num").val())||0,hasMetastasis:s(".cb_dm:checked").length>0},h=function(e){var t=[],n=["0"],a=["0"];return e.isMeasurable&&(e.hasInvasion||e.isT4)?e.isT4?t.push("4"):e.invasionDepth>12?t.push("3"):e.invasionDepth>=5?t.push("2"):e.invasionDepth>0?t.push("1"):t.push("x"):t.push("x"),e.nodesCount>0&&(e.nodesCount>=4?n.push("2"):n.push("1")),e.hasMetastasis&&a.push("1"),{t,n,m:a}}(l),d=h.t,m=h.n,u=h.m,p="1. Imaging modality\n  - Imaging by ";"ct"==s('input[name="protocol_radios"]:checked').val()?p+="(+) CT scan  ( ) MRI":p+="( ) CT scan  (+) MRI",p+="\n\n",p+="2. Tumor size\n",p+="  - Size: ",p+=t?"\n    [ ] Non-measurable\n    [+] Measurable: ".concat(e," cm (greatest dimension)"):"\n    [+] Non-measurable\n    [ ] Measurable: ___ cm (greatest dimension)",p+="\n\n",p+="3. Tumor invasion\n",p+="  - Tumor invades the bile duct wall with a depth (Maximum tumor thickness): "+(c?n+" mm":"")+"\n",p+="    ["+(c?" ":"+")+"] Difficult to access\n",p+="    ["+(c&&n<5?"+":" ")+"] < 5 mm (T1)\n",p+="    ["+(c&&n>=5&&n<=12?"+":" ")+"] 5-12 mm (T2)\n",p+="    ["+(c&&n>12?"+":" ")+"] > 12 mm (T3)\n",p+="  - Tumor invades (T4)\n    ",s('.cb_ti_t4:not("#cb_ti_others")').each(function(){var e=s(this).is(":checked")?"+":" ";p+="[".concat(e,"] ")+s(this).val()+"  "}),p+="\n";var _=s("#cb_ti_others").is(":checked");p+="    ["+(_?"+":" ")+"] Other adjacent organ: ",p+=s("#txt_ti_others").val()?s("#txt_ti_others").val():"___",p+="\n\n";var v=l.nodesCount,b=v>0;p+="4. Regional nodal metastasis\n    ["+(b?" ":"+")+"] No regional lymph node metastasis\n    ["+(b&&v<=3?"+":" ")+"] 1-3 positive lymph nodes (N1)\n    ["+(b&&v>3?"+":" ")+"] 4 or more positive lymph nodes (N2)\n    Number: "+(Number.isInteger(v)?v:"___"),p+="\n\n";var g=l.hasMetastasis;p+="5. Distant metastasis (In this study)\n",p+="    ["+(g?" ":"+")+"] No or Equivocal\n",p+="    ["+(g?"+":" ")+"] Yes, location: ",g?(s('.cb_dm:not("#cb_dm_others"):checked').length&&(p+=(0,a.y3)(s('.cb_dm:not("#cb_dm_others"):checked'))),s("#cb_dm_others").is(":checked")&&(s('.cb_dm:not("#cb_dm_others"):checked').length&&(p+=", "),p+=s("#txt_dm_others").val())):p+="___",p+="\n\n",p+="6. Other findings\n\n\n";var f=d.sort()[d.length-1],y=m.sort()[m.length-1],k=u.sort()[u.length-1];p+=(0,a.xM)("Cholangiocarcinoma: Distal Bile Duct",f,r,y,i,k,o,8),s("#reportModalLongTitle").html("Cholangiocarcinoma: Distal Bile Duct Staging Form"),s("#reportModalBody pre code").html(p),document.getElementById("reportModalLong").showModal()},ajccData:{T:r,N:i,M:o},ajccTitleHtml:"AJCC Definitions for Cholangiocarcinoma: Distal Bile Duct <span class='badge badge-secondary ml-2' style='font-size: 60%; vertical-align: super;'>8th</span>"});s("#btn_format_a").click(function(){reportFormat="A";s("#btn_format_a").attr("style","background-color:#16a34a;border:1px solid #15803d;color:#fff;");s("#btn_format_b").attr("style","background-color:#4b5563;border:1px solid #374151;color:#d1d5db;");});s("#btn_format_b").click(function(){reportFormat="B";s("#btn_format_b").attr("style","background-color:#16a34a;border:1px solid #15803d;color:#fff;");s("#btn_format_a").attr("style","background-color:#4b5563;border:1px solid #374151;color:#d1d5db;");})}},n={};function a(e){var s=n[e];if(void 0!==s)return s.exports;var r=n[e]={id:e,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.exports}a.m=t,e=[],a.O=(t,n,s,r)=>{if(!n){var i=1/0;for(h=0;h<e.length;h++){for(var[n,s,r]=e[h],o=!0,c=0;c<n.length;c++)(!1&r||i>=r)&&Object.keys(a.O).every(e=>a.O[e](n[c]))?n.splice(c--,1):(o=!1,r<i&&(i=r));if(o){e.splice(h--,1);var l=s();void 0!==l&&(t=l)}}return t}r=r||0;for(var h=e.length;h>0&&e[h-1][2]>r;h--)e[h]=e[h-1];e[h]=[n,s,r]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.j=719,(()=>{a.b="undefined"!=typeof document&&document.baseURI||self.location.href;var e={719:0};a.O.j=t=>0===e[t];var t=(t,n)=>{var s,r,[i,o,c]=n,l=0;if(i.some(t=>0!==e[t])){for(s in o)a.o(o,s)&&(a.m[s]=o[s]);if(c)var h=c(a)}for(t&&t(n);l<i.length;l++)r=i[l],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(h)},n=self.webpackChunkweb_structure_report=self.webpackChunkweb_structure_report||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),a.nc=void 0;var s=a.O(void 0,[96,76,312],()=>a(7488));s=a.O(s)})();