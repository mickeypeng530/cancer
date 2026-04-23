(()=>{"use strict";var e,t={7938(e,t,a){a(1643),a(5647),a(5654);var n=a(211);var o=a(4692);var reportFormat="A";var r=new Map([["x","Primary tumor cannot be assessed"],["0","No evidence of primary tumor"],["1","Solitary tumor ≤2 cm, or >2 cm without vascular invasion"],["1a","Solitary tumor ≤2 cm"],["1b","Solitary tumor >2 cm without vascular invasion"],["2","Solitary tumor >2 cm with vascular invasion, or multiple tumors, none >5 cm"],["3","Multiple tumors, at least one of which is >5 cm"],["4","Single tumor or multiple tumors of any size involving a major branch of the portal vein or hepatic vein, or tumor(s) with direct invasion of adjacent organs other than the gallbladder or with perforation of visceral peritoneum"]]),c=new Map([["x","Regional lymph nodes cannot be assessed"],["0","No regional lymph node metastasis"],["1","Regional lymph node metastasis"]]),s=new Map([["0","No distant metastasis (in this study)"],["1","Distant metastasis"]]);o("#cb_tp_ts_nm").change(function(){o("form.was-validated").length}),(0,n.z_)({generateReportFn:function(){if("B"===reportFormat){
var eR="";
var protoFmt=o('input[name="protocol_radios"]:checked').val();
if(protoFmt==="ct"){eR+="1. CT protocol\nWith contrast (multi-phase), range: whole abdomen, slice thickness <= 5mm\n\n";}else{eR+="1. MR protocol\nSEQUENCES:\n- Axial T1WI and T2WI with fat suppression;\n- Axial, coronal and sagittal post Gd-enhanced T1WI with fat suppression (dynamic phases)\n\n";}
eR+="2. Tumor location / size / count\n";
var tlNum=o("#txt_tl_num").val();
var tlLoc=o("#txt_tl_loc").val();
eR+="--- Tumor count: "+(tlNum||"___")+"\n";
eR+="--- Location: "+(tlLoc||"___")+"\n";
eR+="--- Size:\n";
var tsNM_B=o("#cb_ts_nm").is(":checked");
var tsLen_B=parseFloat(o("#txt_ts_len").val());
if(tsNM_B){eR+="* Non-measurable\n";}
else if(tsLen_B){eR+="* Measurable: "+tsLen_B+" cm (largest diameter)\n";}
else{eR+="* ___ cm\n";}
eR+="\n";
eR+="3. Tumor characteristics\n";
var tcT4=[["cb_tc_pvt","Portal vein thrombosis"],["cb_tc_hvi","Hepatic vein invasion"],["cb_tc_pvp","Perforation of visceral peritoneum"],["cb_tc_iao","Invasion of adjacent organs"]];
var tcInfo=[["cb_tc_a","Ascites"],["cb_tc_smg","Splenomegaly"],["cb_tc_c","Cirrhosis"],["cb_tc_pcv","Portosystemic collateral vessels"],["cb_tc_fl","Fatty liver"],["cb_tc_tep","Typical enhancement pattern"]];
var tcYes_B=[],tcNo_B=[];
tcT4.forEach(function(op){if(o("#"+op[0]).is(":checked")){tcYes_B.push("* "+op[1]+" (T4)");}else{tcNo_B.push(op[1]);}});
tcInfo.forEach(function(op){if(o("#"+op[0]).is(":checked")){tcYes_B.push("* "+op[1]);}});
if(o("#cb_tc_pvt").is(":checked")){var pvt=o("#txt_tc_pvt").val();if(pvt){tcYes_B.push("  PVT location: "+pvt);}}
if(o("#cb_tc_hvi").is(":checked")){var hvi=o("#txt_tc_hvi").val();if(hvi){tcYes_B.push("  HVI location: "+hvi);}}
if(o("#cb_tc_iao").is(":checked")){var iao=o("#txt_tc_iao").val();if(iao){tcYes_B.push("  IAO location: "+iao);}}
if(tcYes_B.length){eR+="--- Yes:\n"+tcYes_B.join("\n")+"\n";}
if(tcNo_B.length){eR+="--- No or Equivocal (T4 criteria):\n* "+tcNo_B.join(", ")+"\n";}
eR+="\n";
eR+="4. Regional nodal metastasis\n";
var rnOpts_B=[["cb_rn_hh","hepatic hilum"],["cb_rn_hl","hepatoduodenal ligament"],["cb_rn_ip","inferior phrenic"],["cb_rn_c","caval"]];
var rnY_B=[],rnN_B=[];
rnOpts_B.forEach(function(op){if(o("#"+op[0]).is(":checked")){rnY_B.push(op[1]);}else{rnN_B.push(op[1]);}});
var rnOther_B=o("#cb_rn_others").is(":checked");
if(rnOther_B){var txtRN=o("#txt_rn_others").val();if(txtRN){rnY_B.push(txtRN);}}
if(rnY_B.length){eR+="--- Yes:\n* "+rnY_B.join(", ")+"\n";}
if(rnN_B.length){eR+="--- No or Equivocal:\n* "+rnN_B.join(", ")+"\n";}
eR+="\n";
eR+="5. Distant metastasis (In this study)\n";
var dmOpts_B=[["cb_dm_ad","adrenal"],["cb_dm_lu","lung"],["cb_dm_b","bone"]];
var dmY_B=[],dmN_B=[];
dmOpts_B.forEach(function(op){if(o("#"+op[0]).is(":checked")){dmY_B.push(op[1]);}else{dmN_B.push(op[1]);}});
var dmO_B=o("#cb_dm_others").is(":checked");
if(dmO_B){var txtDM=o("#txt_dm_others").val();if(txtDM){dmY_B.push(txtDM);}}
if(dmY_B.length){eR+="--- Yes:\n* "+dmY_B.join(", ")+"\n";}
if(dmN_B.length){eR+="--- No or Equivocal:\n* "+dmN_B.join(", ")+"\n";}
eR+="\n";
eR+="6. Other findings:\n\n\n";
// TNM per original HCC logic
var tPush_B=[],nPush_B=["0"],mPush_B=["0"];
var tumorCountRaw=o("#txt_tl_num").val();
var tumorCountNum=parseInt(tumorCountRaw,10);
if(tumorCountNum>3||isNaN(tumorCountNum)){tumorCountNum=-1;}
var hasT4_B=o(".cb_tc_t4:checked").length>0;
if(hasT4_B){tPush_B.push("4");}
else if(tumorCountNum===1){
  if(tsLen_B>2){tPush_B.push("1b");}else{tPush_B.push("1a");}
}
else{
  if(tsLen_B>5){tPush_B.push("3");}else{tPush_B.push("2");}
}
if(o(".cb_rn:checked").length){nPush_B.push("1");}
if(o(".cb_dm:checked").length){mPush_B.push("1");}
var tFin=tPush_B.length?tPush_B.sort()[tPush_B.length-1]:"0";
var nFin=nPush_B.sort()[nPush_B.length-1];
var mFin=mPush_B.sort()[mPush_B.length-1];
eR+=(0,n.xM)("Hepatocellular Carcinoma",tFin,r,nFin,c,mFin,s,8);
o("#reportModalLongTitle").html("Hepatocellular Carcinoma (HCC) Staging Form");
o("#reportModalBody pre code").html(eR);
return document.getElementById("reportModalLong").showModal();
}
var e="1. Imaging modality\n  - Imaging by ";"ct"==o('input[name="protocol_radios"]:checked').val()?e+="(+) CT scan  ( ) MRI":e+="( ) CT scan  (+) MRI",e+="\n\n";var t=o("#txt_tl_num").val(),a=parseInt(t,10);(a>3||isNaN(a))&&(t="multiple");var i=o("#txt_tl_loc").val(),l=parseFloat(o("#txt_ts_len").val()),h=o("#cb_ts_nm").is(":checked")||!l?"+":" ",m=!o("#cb_ts_nm").is(":checked")&&l?"+":" ",u=l||"___";e+="2. Tumor location / size\n  - Number (1,2,3 or multiple): ".concat(t,"\n  - Location (segment or lobe): ").concat(i,"\n  - Size:\n    [").concat(h,"] Non-measurable\n    [").concat(m,"] Measurable: ").concat(u," cm (the largest tumor)\n\n"),e+="3. Tumor characteristics and associated liver features\n",o(".cb_tc").each(function(){var t=o(this).is(":checked")?"+":" ";if(e+="    [".concat(t,"] ")+o(this).val(),o(this).hasClass("has_txt")){e+=", location: ";var a=o(this).parent().next().children("input:text").val();e+=a||"___"}e+="\n"}),e+="\n";var d=function(e){var t=[],a=["0"],n=["0"];return e.majorVascularInvasion?t.push("4"):1===e.tumorCount?e.largestTumorSize>2?t.push("1b"):t.push("1a"):e.largestTumorSize>5?t.push("3"):t.push("2"),e.hasNodes&&a.push("1"),e.hasMetastasis&&n.push("1"),{t,n:a,m:n}}({tumorCount:a,largestTumorSize:l,majorVascularInvasion:o(".cb_tc_t4:checked").length>0,hasNodes:o(".cb_rn:checked").length>0,hasMetastasis:o(".cb_dm:checked").length>0}),_=d.t,p=d.n,v=d.m,b=o(".cb_rn:checked").length,g=b?" ":"+",f=b?"+":" ",y=o("#cb_rn_hh").is(":checked")?"+":" ",k=o("#cb_rn_hl").is(":checked")?"+":" ",w=o("#cb_rn_ip").is(":checked")?"+":" ",x=o("#cb_rn_c").is(":checked")?"+":" ",M=o("#cb_rn_others").is(":checked")?"+":" ",C=o("#txt_rn_others").val()?o("#txt_rn_others").val():"___";e+="4. Regional nodal metastasis\n    [".concat(g,"] No or Equivocal\n    [").concat(f,"] Yes, if yes, location (specified as below):\n        [").concat(y,"] Hepatic hilum    [").concat(k,"] Hepatoduodenal ligament  [").concat(w,"] Inferior phrenic\n        [").concat(x,"] Caval            [").concat(M,"] Others: ").concat(C,"\n\n");var O=o(".cb_dm:checked").length>0;e+="5. Distant metastasis (In this study)\n",e+="    ["+(O?" ":"+")+"] No or Equivocal\n",e+="    ["+(O?"+":" ")+"] Yes, location: ",O?(o('.cb_dm:not("#cb_dm_others"):checked').length&&(e+=(0,n.y3)(o('.cb_dm:not("#cb_dm_others"):checked'))),o("#cb_dm_others").is(":checked")&&(o('.cb_dm:not("#cb_dm_others"):checked').length&&(e+=", "),e+=o("#txt_dm_others").val())):e+="___",e+="\n\n",e+="6. Other findings\n\n\n";var N=_.sort()[_.length-1],j=p.sort()[p.length-1],I=v.sort()[v.length-1];e+=(0,n.xM)("Hepatocellular Carcinoma",N,r,j,c,I,s),o("#reportModalLongTitle").html("Hepatocellular Carcinoma Staging Form"),o("#reportModalBody pre code").html(e),document.getElementById("reportModalLong").showModal()},ajccData:{T:r,N:c,M:s},ajccTitleHtml:"AJCC Definitions for Hepatocellular Carcinoma <span class='badge badge-secondary ml-2' style='font-size: 60%; vertical-align: super;'>8th</span>"});o("#btn_format_a").click(function(){reportFormat="A";o("#btn_format_a").attr("style","background-color:#16a34a;border:1px solid #15803d;color:#fff;");o("#btn_format_b").attr("style","background-color:#4b5563;border:1px solid #374151;color:#d1d5db;");});o("#btn_format_b").click(function(){reportFormat="B";o("#btn_format_b").attr("style","background-color:#16a34a;border:1px solid #15803d;color:#fff;");o("#btn_format_a").attr("style","background-color:#4b5563;border:1px solid #374151;color:#d1d5db;");})}},a={};function n(e){var o=a[e];if(void 0!==o)return o.exports;var r=a[e]={id:e,exports:{}};return t[e].call(r.exports,r,r.exports,n),r.exports}n.m=t,e=[],n.O=(t,a,o,r)=>{if(!a){var c=1/0;for(h=0;h<e.length;h++){for(var[a,o,r]=e[h],s=!0,i=0;i<a.length;i++)(!1&r||c>=r)&&Object.keys(n.O).every(e=>n.O[e](a[i]))?a.splice(i--,1):(s=!1,r<c&&(c=r));if(s){e.splice(h--,1);var l=o();void 0!==l&&(t=l)}}return t}r=r||0;for(var h=e.length;h>0&&e[h-1][2]>r;h--)e[h]=e[h-1];e[h]=[a,o,r]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.j=375,(()=>{n.b="undefined"!=typeof document&&document.baseURI||self.location.href;var e={375:0};n.O.j=t=>0===e[t];var t=(t,a)=>{var o,r,[c,s,i]=a,l=0;if(c.some(t=>0!==e[t])){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(i)var h=i(n)}for(t&&t(a);l<c.length;l++)r=c[l],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(h)},a=self.webpackChunkweb_structure_report=self.webpackChunkweb_structure_report||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})(),n.nc=void 0;var o=n.O(void 0,[96,76,312],()=>n(7938));o=n.O(o)})();