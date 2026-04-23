(()=>{"use strict";var e,t={1783(e,t,n){n(1643),n(5647),n(5654);var a=n(211);var i=n(4692);var reportFormat="A";var c=new Map([["x","Primary tumor cannot be assessed"],["0","No evidence of primary tumor"],["1","Tumor ≤7 cm in greatest dimension, limited to the kidney"],["1a","Tumor ≤4 cm in greatest dimension, limited to the kidney"],["1b","Tumor >4 cm but ≤7 cm in greatest dimension limited to the kidney"],["2","Tumor >7 cm in greatest dimension, limited to the kidney"],["2a","Tumor >7 cm but ≤10 cm in greatest dimension, limited to the kidney"],["2b","Tumor >10 cm, limited to the kidney"],["3","Tumor extends into major veins or perinephric tissues, but not into the ipsilateral adrenal gland and not beyond Gerota’s fascia"],["3a","Tumor extends into the renal vein or its segmental branches, or invades the pelvicalyceal system, or invades perirenal and/or renal sinus fat but not beyond Gerota’s fascia"],["3b","Tumor extends into the vena cava below the diaphragm"],["3c","Tumor extends into the vena cava above the diaphragm or invades the wall of the vena cava"],["4","Tumor invades beyond Gerota’s fascia (including contiguous extension into the ipsilateral adrenal gland)"]]),s=new Map([["x","Regional lymph nodes cannot be assessed"],["0","No regional lymph node metastasis"],["1","Metastasis in regional node(s)"]]),o=new Map([["0","No distant metastasis (in this study)"],["1","Distant metastasis"]]);i("#cb_tp_ts_nm").change(function(){i("form.was-validated").length}),(0,a.z_)({generateReportFn:function(){if("B"===reportFormat){
var eR="";
var p=i('input[name="protocol_radios"]:checked').val();
if(p==="ct"){eR+="1. CT protocol\nWith contrast (multi-phase), range: whole abdomen, slice thickness <= 5mm\n\n";}else{eR+="1. MR protocol\nSEQUENCES:\n- Axial T1WI and T2WI with fat suppression;\n- Axial, coronal and sagittal post Gd-enhanced T1WI with fat suppression\n\n";}
eR+="2. Tumor location / size\n--- Location:\n";
var tlO=[["cb_tl_r","right kidney"],["cb_tl_l","left kidney"]];var tlY=[];
tlO.forEach(function(op){if(i("#"+op[0]).is(":checked")){tlY.push(op[1]);}});
if(tlY.length){eR+="* "+tlY.join(", ")+"\n";}else{eR+="* ___\n";}
eR+="--- Size:\n";
var tsNM=i("#cb_ts_nm").is(":checked");var tsD=parseFloat(i("#txt_ts_dia").val());
if(tsNM){eR+="* Non-measurable\n";}else if(tsD){eR+="* Measurable: "+tsD+" cm (largest diameter)\n";}else{eR+="* ___ cm\n";}
eR+="\n3. Tumor invasion\n";
var isNA=i("#cb_ti_na").is(":checked");
if(isNA){eR+="--- Not assessable\n";}
else{
  var t3a=[["cb_ti_prf","perirenal fat"],["cb_ti_rsf","renal sinus fat"],["cb_ti_rv","renal vein or segmental branches"]],t3bc=[["cb_ti_ivc","IVC"]],t3c=[["cb_ti_ivc_w","wall of vena cava"]],t4=[["cb_ti_iag","ipsilateral adrenal gland"]];
  var iY=[],iN3a=[],iN3bc=[],iN3c=[],iN4=[];
  t3a.forEach(function(op){if(i("#"+op[0]).is(":checked")){iY.push("* "+op[1]+" (T3a)");}else{iN3a.push(op[1]);}});
  t3bc.forEach(function(op){if(i("#"+op[0]).is(":checked")){var lvl=i('input[name="rb_ti_ivc"]:checked').val();var tag=lvl==="3c"?"T3c":"T3b";iY.push("* "+op[1]+" ("+tag+")");}else{iN3bc.push(op[1]);}});
  t3c.forEach(function(op){if(i("#"+op[0]).is(":checked")){iY.push("* "+op[1]+" (T3c)");}else{iN3c.push(op[1]);}});
  t4.forEach(function(op){if(i("#"+op[0]).is(":checked")){iY.push("* "+op[1]+" (T4)");}else{iN4.push(op[1]);}});
  if(i("#cb_ti_others").is(":checked")){var ti=i("#txt_ti_others").val();if(ti){iY.push("* "+ti+" (T4)");}}
  if(iY.length){eR+="--- Yes:\n"+iY.join("\n")+"\n";}
  var noLines=[];
  if(iN3a.length){noLines.push("* "+iN3a.join(", ")+" (T3a)");}
  if(iN3bc.length){noLines.push("* "+iN3bc.join(", ")+" (T3b/3c)");}
  if(iN3c.length){noLines.push("* "+iN3c.join(", ")+" (T3c)");}
  if(iN4.length){noLines.push("* "+iN4.join(", ")+" (T4)");}
  if(noLines.length){eR+="--- No or Equivocal:\n"+noLines.join("\n")+"\n";}
}
eR+="\n4. Regional nodal metastasis\n";
var rnO=[["cb_rn_rh","renal hilar"],["cb_rn_pc","paracaval"],["cb_rn_ac","aortocaval"],["cb_rn_pa","paraaortic"]];var rnY=[],rnN=[];
rnO.forEach(function(op){if(i("#"+op[0]).is(":checked")){rnY.push(op[1]);}else{rnN.push(op[1]);}});
if(rnY.length){eR+="--- Yes:\n* "+rnY.join(", ")+"\n";}
if(rnN.length){eR+="--- No or Equivocal:\n* "+rnN.join(", ")+"\n";}
eR+="\n5. Distant metastasis (In this study)\n";
var dmC=[["cb_dm_li","liver"],["cb_dm_ad","adrenal"],["cb_dm_lu","lung"]],dmB=[["cb_dm_b","bone"]];
var dmY=[],dmN=[];
dmC.forEach(function(op){if(i("#"+op[0]).is(":checked")){dmY.push(op[1]+" (M1c)");}else{dmN.push(op[1]);}});
dmB.forEach(function(op){if(i("#"+op[0]).is(":checked")){dmY.push(op[1]+" (M1b)");}else{dmN.push(op[1]);}});
if(i("#cb_dm_others").is(":checked")){var t=i("#txt_dm_others").val();if(t){dmY.push(t);}}
if(dmY.length){eR+="--- Yes:\n* "+dmY.join(", ")+"\n";}
if(dmN.length){eR+="--- No or Equivocal:\n* "+dmN.join(", ")+"\n";}
eR+="\n6. Other findings:\n\n\n";
var tP=["0"],nP=["0"],mP=["0"];
if(isNA){tP.push("x");}
else{
  if(tsD>10){tP.push("2b");}else if(tsD>7){tP.push("2a");}else if(tsD>4){tP.push("1b");}else if(tsD>0){tP.push("1a");}
  if(i(".cb_ti_t3a:checked").length){tP.push("3a");}
  if(i(".cb_ti_t3bc:checked").length){tP.push("3b");var lvl=i('input[name="rb_ti_ivc"]:checked').val();if(lvl){tP.push(lvl);}}
  if(i(".cb_ti_t3c:checked").length){tP.push("3c");}
  if(i(".cb_ti_t4:checked").length){tP.push("4");}
}
if(i(".cb_rn:checked").length){nP.push("1");}
if(i(".cb_dm:checked").length){mP.push("1");}
var tF=tP.sort()[tP.length-1];var nF=nP.sort()[nP.length-1];var mF=mP.sort()[mP.length-1];
eR+=(0,a.xM)("Renal Cell Carcinoma",tF,c,nF,s,mF,o,8);
i("#reportModalLongTitle").html("Renal Cell Carcinoma Staging Form");
i("#reportModalBody pre code").html(eR);
return document.getElementById("reportModalLong").showModal();
}
var e="1. Imaging modality\n  - Imaging by ";"ct"==i('input[name="protocol_radios"]:checked').val()?e+="(+) CT scan  ( ) MRI":e+="( ) CT scan  (+) MRI",e+="\n\n";var t=parseFloat(i("#txt_ts_dia").val());if(e+="2. Tumor location / size\n",i("#cb_ts_nm").is(":checked")?e+="--- Not assessable":(e+="Location: ",i(".cb_tl:checked").length&&(e+=(0,a.y3)(i(".cb_tl:checked"))+"\n"),e+="Size: ".concat(t," cm (largest diameter of the biggest tumor)")),e+="\n\n",e+="3. Tumor invasion\n",i("#cb_ti_na").is(":checked"))e+="--- Not assessable\n";else{if(i(".cb_ti:checked").length){if(e+="--- Yes:\n",i(".cb_ti_t3a:checked").length&&(e+="* "+(0,a.y3)(i(".cb_ti_t3a:checked"),"\n* ")+"\n"),i(".cb_ti_t3bc:checked").length){var n=[];i("input[name='rb_ti_ivc']:checked").length&&n.push(i("input[name='rb_ti_ivc']:checked").next().text()),i(".cb_ti_t3c:checked").length&&n.push(i(".cb_ti_t3c:checked").next().text()),e+="* IVC: "+n.join(", ")+"\n"}i(".cb_ti_t4:checked").length&&(e+="* "+(0,a.y3)(i(".cb_ti_t4:checked"),"\n* "),i("#cb_ti_others").is(":checked")&&(e+="\n* "+i("#txt_ti_others").val()),e+="\n")}i(".cb_ti:not(:checked)").length&&(e+="--- No or Equivocal:\n",e+="* "+(0,a.y3)(i(".cb_ti:not(:checked)"))+"\n")}e+="\n",e+="4. Regional nodal metastasis\n",i(".cb_rn:checked").length&&(e+="--- Yes:\n",e+="* "+(0,a.y3)(i(".cb_rn:checked"),"\n* "),e+="\n"),i(".cb_rn:not(:checked)").length&&(e+="--- No or Equivocal:\n",i(".cb_rn:not(:checked)").length&&(e+="* "+(0,a.y3)(i(".cb_rn:not(:checked)"))+"\n")),e+="\n",e+="5. Distant metastasis (In this study)\n",i(".cb_dm:checked").length&&(e+="--- Yes:\n",i('.cb_dm:not("#cb_dm_others"):checked').length&&(e+="* "+(0,a.y3)(i('.cb_dm:not("#cb_dm_others"):checked'),"\n* ")+"\n"),i("#cb_dm_others").is(":checked")&&(e+="* "+i("#txt_dm_others").val()+"\n")),i('.cb_dm:not("#cb_dm_others"):not(:checked)').length&&(e+="--- No or Equivocal:\n",e+="* "+(0,a.y3)(i('.cb_dm:not("#cb_dm_others"):not(:checked)'))+"\n"),e+="\n";var r=function(e){var t=["0"],n=["0"],a=["0"];if(e.isNotAssessable)t.push("x");else{var i=e.tumorSize;i>10?t.push("2b"):i>7?t.push("2a"):i>4?t.push("1b"):t.push("1a"),e.invasion.t3a&&t.push("3a"),e.invasion.t3bc&&(t.push("3b"),e.invasion.ivcLevel&&t.push(e.invasion.ivcLevel),e.invasion.t3c&&t.push("3c")),e.invasion.t4&&t.push("4")}return e.hasNodes&&n.push("1"),e.hasMetastasis&&a.push("1"),{t,n,m:a}}({tumorSize:t,isNotAssessable:i("#cb_ts_nm").is(":checked"),invasion:{t3a:i(".cb_ti_t3a:checked").length>0,t3bc:i(".cb_ti_t3bc:checked").length>0,t3c:i(".cb_ti_t3c:checked").length>0,t4:i(".cb_ti_t4:checked").length>0,ivcLevel:i("input[name='rb_ti_ivc']:checked").val()||""},hasNodes:i(".cb_rn:checked").length>0,hasMetastasis:i(".cb_dm:checked").length>0}),d=r.t,l=r.n,h=r.m;e+="6. Other findings\n\n\n";var m=d.sort()[d.length-1],b=l.sort()[l.length-1],u=h.sort()[h.length-1];e+=(0,a.xM)("Renal Cell Carcinoma",m,c,b,s,u,o,8),i("#reportModalLongTitle").html("Renal Cell Carcinoma Staging Form"),i("#reportModalBody pre code").html(e),document.getElementById("reportModalLong").showModal()},ajccData:{T:c,N:s,M:o},ajccTitleHtml:"AJCC Definitions for Renal Cell Carcinoma <span class='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100 ml-2' style='font-size: 60%; vertical-align: super;'>8th</span>"});i("#btn_format_a").click(function(){reportFormat="A";i("#btn_format_a").attr("style","background-color:#16a34a;border:1px solid #15803d;color:#fff;");i("#btn_format_b").attr("style","background-color:#4b5563;border:1px solid #374151;color:#d1d5db;");});i("#btn_format_b").click(function(){reportFormat="B";i("#btn_format_b").attr("style","background-color:#16a34a;border:1px solid #15803d;color:#fff;");i("#btn_format_a").attr("style","background-color:#4b5563;border:1px solid #374151;color:#d1d5db;");})}},n={};function a(e){var i=n[e];if(void 0!==i)return i.exports;var c=n[e]={id:e,exports:{}};return t[e].call(c.exports,c,c.exports,a),c.exports}a.m=t,e=[],a.O=(t,n,i,c)=>{if(!n){var s=1/0;for(l=0;l<e.length;l++){for(var[n,i,c]=e[l],o=!0,r=0;r<n.length;r++)(!1&c||s>=c)&&Object.keys(a.O).every(e=>a.O[e](n[r]))?n.splice(r--,1):(o=!1,c<s&&(s=c));if(o){e.splice(l--,1);var d=i();void 0!==d&&(t=d)}}return t}c=c||0;for(var l=e.length;l>0&&e[l-1][2]>c;l--)e[l]=e[l-1];e[l]=[n,i,c]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.j=201,(()=>{a.b="undefined"!=typeof document&&document.baseURI||self.location.href;var e={201:0};a.O.j=t=>0===e[t];var t=(t,n)=>{var i,c,[s,o,r]=n,d=0;if(s.some(t=>0!==e[t])){for(i in o)a.o(o,i)&&(a.m[i]=o[i]);if(r)var l=r(a)}for(t&&t(n);d<s.length;d++)c=s[d],a.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return a.O(l)},n=self.webpackChunkweb_structure_report=self.webpackChunkweb_structure_report||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),a.nc=void 0;var i=a.O(void 0,[96,76,312],()=>a(1783));i=a.O(i)})();