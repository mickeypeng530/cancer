(()=>{"use strict";var e,t={3028(e,t,n){n(1643),n(5647),n(5654);var a=n(211);var i=n(4692);var reportFormat="B";var r=new Map([["x","Primary tumor cannot be assessed"],["0","No evidence of primary tumor"],["is","Carcinoma in situ/high-grade dysplasia"],["1","Tumor confined to the bile duct, with extension up to the muscle layer or fibrous tissue"],["2","Tumor invades beyond the wall of the bile duct to surrounding adipose tissue, or tumor invades adjacent hepatic parenchyma"],["2a","Tumor invades beyond the wall of the bile duct to surrounding adipose tissue"],["2b","Tumor invades adjacent hepatic parenchyma"],["3","Tumor invades unilateral branches of the portal vein or hepatic artery"],["4","Tumor invades the main portal vein or its branches bilaterally, or the common hepatic artery; or unilateral second-order biliary radicals with contralateral portal vein or hepatic artery involvement"]]),o=new Map([["x","Regional lymph nodes cannot be assessed"],["0","No regional lymph node metastasis"],["1","One to three positive lymph nodes typically involving the hilar, cystic duct, common bile duct, hepatic artery, posterior pancreatoduodenal, and portal vein lymph nodes"],["2","Four or more positive lymph nodes from the sites described for N1"]]),s=new Map([["0","No distant metastasis (in this study)"],["1","Distant metastasis"]]);i('.cb_rn, input[name="radio_rn"]').change(function(){i(this).parent().parent().find(".cb_rn:checked").length?i(this).parent().parent().find('input[name="radio_rn"]').prop("checked",!0):i(this).parent().parent().find('input[name="radio_rn"]').prop("checked",!1),i(this).parent().parent().siblings().find(".cb_rn").prop("checked",!1)}),i("#cb_tp_ts_nm").change(function(){i("form.was-validated").length}),i(".cb_rn").change(function(){var e=+i("#txt_rln_num").val();this.checked?i("#txt_rln_num").val(e+1):e>0&&i("#txt_rln_num").val(e-1)}),(0,a.z_)({generateReportFn:function(){if("B"===reportFormat){
var eR="";
var protoFmt=i('input[name="protocol_radios"]:checked').val();
if(protoFmt==="ct"){eR+="1. CT protocol\nWith contrast (multi-phase), range: whole abdomen, slice thickness <= 5mm\n\n";}else{eR+="1. MR protocol\nSEQUENCES:\n- Axial T1WI and T2WI with fat suppression;\n- Axial, coronal and sagittal post Gd-enhanced T1WI with fat suppression;\n- MRCP\n\n";}
eR+="2. Tumor location / size\n";
eR+="--- Location: ";
var tlSel=i('input[name="radio_tl"]:checked').val();
eR+=(tlSel||"___")+"\n";
eR+="--- Size:\n";
var tsNM_B=i("#cb_ts_nm").is(":checked");
var tsLen_B=parseFloat(i("#txt_ts_len").val());
if(tsNM_B){eR+="* Non-measurable\n";}
else if(tsLen_B){eR+="* Measurable: "+tsLen_B+" cm (largest diameter)\n";}
else{eR+="* ___ cm\n";}
eR+="\n";
eR+="3. Tumor invasion\n";
var tiOpts_B=[["cb_ti_t0","T0","No evidence of primary tumor"],["cb_ti_t1","T1","Tumor confines in the bile duct"],["cb_ti_t2a","T2a","Tumor invades beyond the wall of the bile duct to surrounding adipose tissue"],["cb_ti_t2b","T2b","Tumor invades adjacent hepatic parenchyma"],["cb_ti_t3","T3","Unilateral branches of the portal vein or hepatic artery"],["cb_ti_t4_mpv","T4","Main portal vein or portal branches bilaterally"],["cb_ti_t4_cha","T4","Common hepatic artery"],["cb_ti_t4_u2bd","T4","Unilateral 2nd-order branch bile duct and contralateral portal vein or hepatic artery"]];
var tiYes_B=[],tiNo_B=[];
tiOpts_B.forEach(function(op){if(i("#"+op[0]).is(":checked")){tiYes_B.push("* "+op[2]+" ("+op[1]+")");}else{tiNo_B.push(op[2]+" ("+op[1]+")");}});
if(tiYes_B.length){eR+="--- Yes:\n"+tiYes_B.join("\n")+"\n";}
if(tiNo_B.length){eR+="--- No or Equivocal:\n* "+tiNo_B.join("; ")+"\n";}
eR+="\n";
eR+="4. Regional nodal metastasis\n";
var nodeCount_B=parseInt(i("#txt_rln_num").val())||0;
if(nodeCount_B>0){eR+="--- Yes:\n* Number of suspicious lymph nodes: "+nodeCount_B+"\n";}
else{eR+="--- No or Equivocal\n";}
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
var isT1_B=i("#cb_ti_t1").is(":checked");
var isT2a_B=i("#cb_ti_t2a").is(":checked");
var isT2b_B=i("#cb_ti_t2b").is(":checked");
var isT3_B=i("#cb_ti_t3").is(":checked");
var isT4_B=i(".cb_ti_t4:checked").length>0;
if(isT0_B){tPush_B.push("0");}
else if(tsNM_B||!tsLen_B){tPush_B.push("x");}
else if(isT4_B){tPush_B.push("4");}
else if(isT3_B){tPush_B.push("3");}
else if(isT2b_B){tPush_B.push("2b");}
else if(isT2a_B){tPush_B.push("2a");}
else if(isT1_B){tPush_B.push("1");}
else{tPush_B.push("x");}
if(nodeCount_B>0){if(nodeCount_B>=4){nPush_B.push("2");}else{nPush_B.push("1");}}
if(i(".cb_dm:checked").length){mPush_B.push("1");}
var tFin=tPush_B.sort()[tPush_B.length-1];
var nFin=nPush_B.sort()[nPush_B.length-1];
var mFin=mPush_B.sort()[mPush_B.length-1];
eR+=(0,a.xM)("Perihilar Cholangiocarcinoma",tFin,r,nFin,o,mFin,s,8);
i("#reportModalLongTitle").html("Perihilar Cholangiocarcinoma Staging Form");
i("#reportModalBody pre code").html(eR);
return document.getElementById("reportModalLong").showModal();
}
var e={tumorSize:parseFloat(i("#txt_ts_len").val()),isNonMeasurable:i("#cb_ts_nm").is(":checked"),isT0:i(".cb_ti_t0:checked").length>0,isT1:i("#cb_ti_t1").is(":checked"),isT2a:i("#cb_ti_t2a").is(":checked"),isT2b:i("#cb_ti_t2b").is(":checked"),isT3:i("#cb_ti_t3").is(":checked"),isT4:i(".cb_ti_t4:checked").length>0,nodesCount:parseInt(i("#txt_rln_num").val())||0,hasMetastasis:i(".cb_dm:checked").length>0},t=function(e){var t=[],n=["0"],a=["0"];return e.isT0?t.push("0"):e.isNonMeasurable||!e.tumorSize?t.push("x"):e.isT4?t.push("4"):e.isT3?t.push("3"):e.isT2b?t.push("2b"):e.isT2a?t.push("2a"):e.isT1?t.push("1"):t.push("x"),e.nodesCount>0&&(e.nodesCount>=4?n.push("2"):n.push("1")),e.hasMetastasis&&a.push("1"),{t,n,m:a}}(e),n=t.t,c=t.n,l=t.m,d="1. Imaging modality\n  - Imaging by ";"ct"==i('input[name="protocol_radios"]:checked').val()?d+="(+) CT scan  ( ) MRI":d+="( ) CT scan  (+) MRI",d+="\n\n";var h=e.tumorSize;d+="2. Tumor size\n",d+="  - Size: ",d+=e.isNonMeasurable||!h?"\n    [+] Non-measurable\n    [ ] Measurable: ___ cm (greatest dimension)":"\n    [ ] Non-measurable\n    [+] Measurable: ".concat(h," cm (greatest dimension)"),d+="\n",d+="  - Location: ",i('input[name="radio_tl"]').each(function(){var e=i(this).is(":checked")?"+":" ";d+="(".concat(e,") ")+i(this).val()+"  "}),d+="\n\n";var u=i("#cb_ti_t0").is(":checked")?"+":" ",p=i("#cb_ti_t1").is(":checked")?"+":" ",m=i("#cb_ti_t2a").is(":checked")?"+":" ",_=i("#cb_ti_t2b").is(":checked")?"+":" ",b=i("#cb_ti_t3").is(":checked")?"+":" ",v=i("#cb_ti_t4_mpv").is(":checked")?"+":" ",g=i("#cb_ti_t4_cha").is(":checked")?"+":" ",f=i("#cb_ti_t4_u2bd").is(":checked")?"+":" ";d+="3. Tumor invasion\n    T0:  [".concat(u,"] No evidence of primary tumor\n    T1:  [").concat(p,"] Tumor confines in the bile duct\n    T2a: [").concat(m,"] Tumor invades beyond the wall of the bile duct to surrounding adipose tissue\n    T2b: [").concat(_,"] Tumor invades adjacent hepatic parenchyma\n    T3:  [").concat(b,"] Unilateral branches of the portal vein or hepatic artery\n    T4:  [").concat(v,"] Main portal vein or portal branches bilaterally\n         [").concat(g,"] Common hepatic artery\n         [").concat(f,"] Unilateral 2nd-order branch bile duct and contralateral portal vein or hepatic artery\n\n");var y=e.nodesCount,T=y>0;d+="4. Regional nodal metastasis\n    ["+(T?" ":"+")+"] No regional lymph node metastasis\n    ["+(T&&y<=3?"+":" ")+"] 1-3 positive lymph nodes (N1)\n    ["+(T&&y>3?"+":" ")+"] 4 or more positive lymph nodes (N2)\n    Number: "+(Number.isInteger(y)?y:"___"),d+="\n\n";var k=e.hasMetastasis;d+="5. Distant metastasis (In this study)\n",d+="    ["+(k?" ":"+")+"] No or Equivocal\n",d+="    ["+(k?"+":" ")+"] Yes, location: ",k?(i('.cb_dm:not("#cb_dm_others"):checked').length&&(d+=(0,a.y3)(i('.cb_dm:not("#cb_dm_others"):checked'))),i("#cb_dm_others").is(":checked")&&(i('.cb_dm:not("#cb_dm_others"):checked').length&&(d+=", "),d+=i("#txt_dm_others").val())):d+="___",d+="\n\n",d+="6. Other findings\n\n\n";var M=n.sort()[n.length-1],x=c.sort()[c.length-1],N=l.sort()[l.length-1];d+=(0,a.xM)("Cholangiocarcinoma: Perihilar Bile Duct",M,r,x,o,N,s,8),i("#reportModalLongTitle").html("Cholangiocarcinoma: Perihilar Bile Duct Staging Form"),i("#reportModalBody pre code").html(d),document.getElementById("reportModalLong").showModal()},ajccData:{T:r,N:o,M:s},ajccTitleHtml:"AJCC Definitions for Cholangiocarcinoma: Perihilar Bile Duct <span class='badge badge-secondary ml-2' style='font-size: 60%; vertical-align: super;'>8th</span>"});i("#btn_format_a").click(function(){reportFormat="A";i("#btn_format_a").attr("style","background-color:#16a34a;border:1px solid #15803d;color:#fff;");i("#btn_format_b").attr("style","background-color:#4b5563;border:1px solid #374151;color:#d1d5db;");});i("#btn_format_b").click(function(){reportFormat="B";i("#btn_format_b").attr("style","background-color:#16a34a;border:1px solid #15803d;color:#fff;");i("#btn_format_a").attr("style","background-color:#4b5563;border:1px solid #374151;color:#d1d5db;");})}},n={};function a(e){var i=n[e];if(void 0!==i)return i.exports;var r=n[e]={id:e,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.exports}a.m=t,e=[],a.O=(t,n,i,r)=>{if(!n){var o=1/0;for(d=0;d<e.length;d++){for(var[n,i,r]=e[d],s=!0,c=0;c<n.length;c++)(!1&r||o>=r)&&Object.keys(a.O).every(e=>a.O[e](n[c]))?n.splice(c--,1):(s=!1,r<o&&(o=r));if(s){e.splice(d--,1);var l=i();void 0!==l&&(t=l)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[n,i,r]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.j=731,(()=>{a.b="undefined"!=typeof document&&document.baseURI||self.location.href;var e={731:0};a.O.j=t=>0===e[t];var t=(t,n)=>{var i,r,[o,s,c]=n,l=0;if(o.some(t=>0!==e[t])){for(i in s)a.o(s,i)&&(a.m[i]=s[i]);if(c)var d=c(a)}for(t&&t(n);l<o.length;l++)r=o[l],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(d)},n=self.webpackChunkweb_structure_report=self.webpackChunkweb_structure_report||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),a.nc=void 0;var i=a.O(void 0,[96,76,312],()=>a(3028));i=a.O(i)})();