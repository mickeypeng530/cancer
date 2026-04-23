(()=>{"use strict";var e,t={5550(e,t,a){a(1643),a(5647),a(5654);var n=a(211);var i=a(4692);var reportFormat="A";var o=new Map([["x","Primary tumor cannot be assessed"],["0","No evidence of primary tumor"],["is","Carcinoma in situ (intraductal tumor)"],["1","Solitary tumor without vascular invasion, ≤5 cm or >5 cm"],["1a","Solitary tumor ≤5 cm without vascular invasion"],["1b","Solitary tumor >5 cm without vascular invasion"],["2","Solitary tumor with intrahepatic vascular invasion or multiple tumors, with or without vascular invasion"],["3","Tumor perforating the visceral peritoneum"],["4","Tumor involving local extrahepatic structures by direct invasion"]]),r=new Map([["x","Regional lymph nodes cannot be assessed"],["0","No regional lymph node metastasis"],["1","Regional lymph node metastasis"]]),c=new Map([["0","No distant metastasis (in this study)"],["1","Distant metastasis"]]);i("#cb_tp_ts_nm").change(function(){i("form.was-validated").length}),i(".cb_rn").change(function(){var e=+i("#txt_rln_num").val();this.checked?i("#txt_rln_num").val(e+1):e>0&&i("#txt_rln_num").val(e-1)}),(0,n.z_)({generateReportFn:function(){if("B"===reportFormat){
var eR="";
var protoFmt=i('input[name="protocol_radios"]:checked').val();
if(protoFmt==="ct"){eR+="1. CT protocol\nWith contrast (multi-phase), range: whole abdomen, slice thickness <= 5mm\n\n";}else{eR+="1. MR protocol\nSEQUENCES:\n- Axial T1WI and T2WI with fat suppression;\n- Axial, coronal and sagittal post Gd-enhanced T1WI with fat suppression\n\n";}
eR+="2. Tumor location / size\n";
eR+="--- Location (Couinaud segments):\n";
var tlOpts_B=[["cb_tl_s1","S1"],["cb_tl_s2","S2"],["cb_tl_s3","S3"],["cb_tl_s4","S4"],["cb_tl_s5","S5"],["cb_tl_s6","S6"],["cb_tl_s7","S7"],["cb_tl_s8","S8"]];
var tlYes_B=[],tlNo_B=[];
tlOpts_B.forEach(function(op){if(i("#"+op[0]).is(":checked")){tlYes_B.push(op[1]);}else{tlNo_B.push(op[1]);}});
if(tlYes_B.length){eR+="* "+tlYes_B.join(", ")+"\n";}else{eR+="* ___\n";}
eR+="--- Tumor number: ";
var tnSel=i('input[name="radio_tn"]:checked').val();
eR+=(tnSel||"___")+"\n";
eR+="--- Size:\n";
var tsNM_B=i("#cb_ts_nm").is(":checked");
var tsLen_B=parseFloat(i("#txt_ts_len").val());
if(tsNM_B){eR+="* Non-measurable\n";}
else if(tsLen_B){eR+="* Measurable: "+tsLen_B+" cm (largest diameter)\n";}
else{eR+="* ___ cm\n";}
eR+="\n";
eR+="3. Tumor invasion\n";
var tiOpts_B=[["cb_ti_t0","T0","No evidence of primary tumor"],["cb_ti_t2","T2","intrahepatic vascular invasion"],["cb_ti_t3","T3","tumor perforating the visceral peritoneum"],["cb_ti_t4","T4","tumor involving local extrahepatic structures by direct invasion"]];
var tiYes_B=[],tiNo_B=[];
tiOpts_B.forEach(function(op){if(i("#"+op[0]).is(":checked")){tiYes_B.push("* "+op[2]+" ("+op[1]+")");}else{tiNo_B.push(op[2]+" ("+op[1]+")");}});
if(tiYes_B.length){eR+="--- Yes:\n"+tiYes_B.join("\n")+"\n";}
if(tiNo_B.length){eR+="--- No or Equivocal:\n* "+tiNo_B.join("; ")+"\n";}
eR+="\n";
eR+="4. Regional nodal metastasis\n";
var rnOpts_B=[["cb_rn_r_ip","inferior phrenic (right)"],["cb_rn_r_h","hilar (right)"],["cb_rn_r_gh","gastrohepatic (right)"],["cb_rn_l_pd","periduodenal (left)"],["cb_rn_l_pp","peripancreatic (left)"]];
var rnY_B=[],rnN_B=[];
rnOpts_B.forEach(function(op){if(i("#"+op[0]).is(":checked")){rnY_B.push(op[1]);}else{rnN_B.push(op[1]);}});
if(rnY_B.length){eR+="--- Yes:\n* "+rnY_B.join(", ")+"\n";}
if(rnN_B.length){eR+="--- No or Equivocal:\n* "+rnN_B.join(", ")+"\n";}
eR+="\n";
eR+="5. Distant metastasis (In this study)\n";
var dmOpts_B=[["cb_dm_ad","adrenal"],["cb_dm_lu","lung"],["cb_dm_b","bone"]];
var dmY_B=[],dmN_B=[];
dmOpts_B.forEach(function(op){if(i("#"+op[0]).is(":checked")){dmY_B.push(op[1]);}else{dmN_B.push(op[1]);}});
var dmO_B=i("#cb_dm_others").is(":checked");
if(dmO_B){var txtDM=i("#txt_dm_others").val();if(txtDM){dmY_B.push(txtDM);}}
if(dmY_B.length){eR+="--- Yes:\n* "+dmY_B.join(", ")+"\n";}
if(dmN_B.length){eR+="--- No or Equivocal:\n* "+dmN_B.join(", ")+"\n";}
eR+="\n";
eR+="6. Other findings:\n\n\n";
// TNM per original
var tPush_B=["0"],nPush_B=["0"],mPush_B=["0"];
var isT0_B=i(".cb_ti_t0:checked").length>0;
var isT4_B=i("#cb_ti_t4").is(":checked");
var isT3_B=i("#cb_ti_t3").is(":checked");
var isT2_B=i("#cb_ti_t2").is(":checked");
var isMultiple_B=tnSel==="multiple";
if(isT0_B){tPush_B.push("0");}
else if(tsNM_B||!tsLen_B){tPush_B.push("x");}
else if(isT4_B){tPush_B.push("4");}
else if(isT3_B){tPush_B.push("3");}
else if(isT2_B||isMultiple_B){tPush_B.push("2");}
else{tPush_B.push("1");if(tsLen_B>5){tPush_B.push("1b");}else{tPush_B.push("1a");}}
if(i(".cb_rn:checked").length){nPush_B.push("1");}
if(i(".cb_dm:checked").length){mPush_B.push("1");}
var tFin=tPush_B.sort()[tPush_B.length-1];
var nFin=nPush_B.sort()[nPush_B.length-1];
var mFin=mPush_B.sort()[mPush_B.length-1];
eR+=(0,n.xM)("Intrahepatic Cholangiocarcinoma",tFin,o,nFin,r,mFin,c,8);
i("#reportModalLongTitle").html("Intrahepatic Cholangiocarcinoma Staging Form");
i("#reportModalBody pre code").html(eR);
return document.getElementById("reportModalLong").showModal();
}
var e={tumorSize:parseFloat(i("#txt_ts_len").val()),isNonMeasurable:i("#cb_ts_nm").is(":checked"),isT0:i(".cb_ti_t0:checked").length>0,isT2:i('#cb_ti_t2:is(":checked")').length>0,isT3:i('#cb_ti_t3:is(":checked")').length>0,isT4:i('#cb_ti_t4:is(":checked")').length>0,isMultiple:"multiple"===i('input[name="radio_tn"]:checked').val(),hasRegionalNodes:i(".cb_rn:checked").length>0,hasMetastasis:i(".cb_dm:checked").length>0},t=function(e){var t=[],a=["0"],n=["0"];return e.isT0?t.push("0"):e.isNonMeasurable||!e.tumorSize?t.push("x"):e.isT4?t.push("4"):e.isT3?t.push("3"):e.isT2||e.isMultiple?t.push("2"):(t.push("1"),e.tumorSize>5?t.push("1b"):t.push("1a")),e.hasRegionalNodes&&a.push("1"),e.hasMetastasis&&n.push("1"),{t,n:a,m:n}}(e),a=t.t,s=t.n,l=t.m,h="1. Imaging modality\n  - Imaging by ";"ct"==i('input[name="protocol_radios"]:checked').val()?h+="(+) CT scan  ( ) MRI":h+="( ) CT scan  (+) MRI",h+="\n\n";var u=e.tumorSize;h+="2. Tumor size\n",h+="  - Size: ",h+=e.isNonMeasurable||!u?"\n    [+] Non-measurable\n    [ ] Measurable: ___ cm (greatest dimension)":"\n    [ ] Non-measurable\n    [+] Measurable: ".concat(u," cm (greatest dimension)"),h+="\n",h+="  - Location: ",i(".cb_tl").each(function(){var e=i(this).is(":checked")?"+":" ";h+="[".concat(e,"] ")+i(this).val()+"  "}),h+="\n",h+="  - Number: ",i('input[name="radio_tn"]').each(function(){var e=i(this).is(":checked")?"+":" ";h+="(".concat(e,") ")+i(this).val()+"  "}),h+="\n\n";var d=i("#cb_ti_t0").is(":checked")?"+":" ",m=i("#cb_ti_t2").is(":checked")?"+":" ",_=i("#cb_ti_t3").is(":checked")?"+":" ",p=i("#cb_ti_t4").is(":checked")?"+":" ",v=i("#txt_ti_t4").val()?i("#txt_ti_t4").val():"___";h+="3. Tumor invasion\n    T0: [".concat(d,"] No evidence of primary tumor\n    T2: [").concat(m,"] Intrahepatic vascular invasion\n    T3: [").concat(_,"] Tumor perforating the visceral peritoneum\n    T4: [").concat(p,"] Tumor involving local extrahepatic structures by direct invasion, location: ").concat(v,"\n\n");var b=e.hasRegionalNodes,g=i("#cb_rn_r_ip").is(":checked")?"+":" ",f=i("#cb_rn_r_h").is(":checked")?"+":" ",k=i("#cb_rn_r_gh").is(":checked")?"+":" ",y=i("#cb_rn_l_pd").is(":checked")?"+":" ",T=i("#cb_rn_l_pp").is(":checked")?"+":" ";h+="4. Regional nodal metastasis\n    ["+(b?" ":"+")+"] No regional lymph node metastasis\n    ["+(b?"+":" ")+"] Yes, locations:\n        [".concat(g,"] Inferior phrenic     [").concat(f,"] Hilar            [").concat(k,"] Gastrohepatic\n        [").concat(y,"] Periduodenal         [").concat(T,"] Peripancreatic\n\n");var M=e.hasMetastasis;h+="5. Distant metastasis (In this study)\n",h+="    ["+(M?" ":"+")+"] No or Equivocal\n",h+="    ["+(M?"+":" ")+"] Yes, location: ",M?(i('.cb_dm:not("#cb_dm_others"):checked').length&&(h+=(0,n.y3)(i('.cb_dm:not("#cb_dm_others"):checked'))),i("#cb_dm_others").is(":checked")&&(i('.cb_dm:not("#cb_dm_others"):checked').length&&(h+=", "),h+=i("#txt_dm_others").val())):h+="___",h+="\n\n",h+="6. Other findings\n\n\n";var x=a.sort()[a.length-1],w=s.sort()[s.length-1],N=l.sort()[l.length-1];h+=(0,n.xM)("Cholangiocarcinoma: Intrahepatic Bile Duct",x,o,w,r,N,c,8),i("#reportModalLongTitle").html("Cholangiocarcinoma: Intrahepatic Bile Duct Staging Form"),i("#reportModalBody pre code").html(h),document.getElementById("reportModalLong").showModal()},ajccData:{T:o,N:r,M:c},ajccTitleHtml:"AJCC Definitions for Cholangiocarcinoma: Intrahepatic Bile Duct <span class='badge badge-secondary ml-2' style='font-size: 60%; vertical-align: super;'>8th</span>"});i("#btn_format_a").click(function(){reportFormat="A";i("#btn_format_a").attr("style","background-color:#16a34a;border:1px solid #15803d;color:#fff;");i("#btn_format_b").attr("style","background-color:#4b5563;border:1px solid #374151;color:#d1d5db;");});i("#btn_format_b").click(function(){reportFormat="B";i("#btn_format_b").attr("style","background-color:#16a34a;border:1px solid #15803d;color:#fff;");i("#btn_format_a").attr("style","background-color:#4b5563;border:1px solid #374151;color:#d1d5db;");})}},a={};function n(e){var i=a[e];if(void 0!==i)return i.exports;var o=a[e]={id:e,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.exports}n.m=t,e=[],n.O=(t,a,i,o)=>{if(!a){var r=1/0;for(h=0;h<e.length;h++){for(var[a,i,o]=e[h],c=!0,s=0;s<a.length;s++)(!1&o||r>=o)&&Object.keys(n.O).every(e=>n.O[e](a[s]))?a.splice(s--,1):(c=!1,o<r&&(r=o));if(c){e.splice(h--,1);var l=i();void 0!==l&&(t=l)}}return t}o=o||0;for(var h=e.length;h>0&&e[h-1][2]>o;h--)e[h]=e[h-1];e[h]=[a,i,o]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.j=606,(()=>{n.b="undefined"!=typeof document&&document.baseURI||self.location.href;var e={606:0};n.O.j=t=>0===e[t];var t=(t,a)=>{var i,o,[r,c,s]=a,l=0;if(r.some(t=>0!==e[t])){for(i in c)n.o(c,i)&&(n.m[i]=c[i]);if(s)var h=s(n)}for(t&&t(a);l<r.length;l++)o=r[l],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(h)},a=self.webpackChunkweb_structure_report=self.webpackChunkweb_structure_report||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})(),n.nc=void 0;var i=n.O(void 0,[96,76,312],()=>n(5550));i=n.O(i)})();