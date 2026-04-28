(()=>{"use strict";var e,t={2531(e,t,a){a(1643),a(5647),a(5654);var n=a(211);var c=a(4692);var reportFormat="B";var s=new Map([["x","Primary tumor cannot be assessed"],["0","No evidence of primary tumor"],["a","Non-invasive papillary carcinoma"],["is",'Urothelial carcinoma in situ: "flat tumor"'],["1","Tumor invades lamina propria (subepithelial connective tissue)"],["2","Tumor invades muscularis propria"],["3","Tumor invades perivesical soft tissue"],["4","Extravesical tumor directly invades any of the following: prostatic stroma, seminal vesicles, uterus, vagina, pelvic wall, abdominal wall"],["4a","Extravesical tumor directly invades into prostatic stroma, uterus, vagina"],["4b","Extravesical tumor invades pelvic wall, abdominal wall"]]),i=new Map([["x","Lymph nodes cannot be assessed"],["0","No lymph node metastasis"],["1","Single regional lymph node metastasis in the true pelvis (perivesical, obturator, internal and external iliac, or sacral lymph node)"],["2","Multiple regional lymph node metastases in the true pelvis (perivesical, obturator, internal and external iliac, or sacral lymph node metastasis)"],["3","Lymph node metastasis to the common iliac lymph nodes"]]),o=new Map([["0","No distant metastasis (in this study)"],["1","Distant metastasis"],["1a","Distant metastasis limited to lymph nodes beyond the common iliacs"],["1b","Non-lymph-node distant metastases"]]);c('.cb_ti_t4a, input[name="radio_gender"]').change(function(){c(this).parent().parent().find('input[name="radio_gender"]').prop("checked",!0),c(this).parent().parent().siblings().find(".cb_ti").prop("checked",!1)}),c("#cb_tp_ts_nm").change(function(){c("form.was-validated").length}),(0,n.z_)({generateReportFn:function(){if("B"===reportFormat){
var eR="";
var p=c('input[name="protocol_radios"]:checked').val();
if(p==="ct"){eR+="1. CT protocol\nWith contrast, range: whole pelvis/abdomen, slice thickness <= 5mm\n\n";}else{eR+="1. MR protocol\nSEQUENCES:\n- Axial T1WI and T2WI;\n- Axial, coronal and sagittal post Gd-enhanced T1WI;\n- DWI\n\n";}
eR+="2. Tumor location / size / number\n";
var tn=c('input[name="radio_tn"]:checked').val();
eR+="--- Number: "+(tn||"___")+"\n";
var gender=c('input[name="radio_gender"]:checked').val();
eR+="--- Gender: "+(gender||"___")+"\n";
eR+="--- Primary tumor location:\n";
var tlP=[["cb_tl_pwt","posterior wall or trigone"],["cb_tl_rlw","right lateral wall"],["cb_tl_llw","left lateral wall"],["cb_tl_aw","anterior wall"],["cb_tl_dsw","dome or superior wall"],["cb_tl_iwn","inferior wall or neck"]];var tlY=[];
tlP.forEach(function(op){if(c("#"+op[0]).is(":checked")){tlY.push(op[1]);}});
if(tlY.length){eR+="* "+tlY.join(", ")+"\n";}else{eR+="* ___\n";}
if(tn==="multiple"){
  eR+="--- Secondary tumor location:\n";
  var tlS=[["cb_tl_l_pwt","posterior wall or trigone"],["cb_tl_l_rlw","right lateral wall"],["cb_tl_l_llw","left lateral wall"],["cb_tl_l_aw","anterior wall"],["cb_tl_l_dsw","dome or superior wall"],["cb_tl_l_iwn","inferior wall or neck"]];var tlY2=[];
  tlS.forEach(function(op){if(c("#"+op[0]).is(":checked")){tlY2.push(op[1]);}});
  if(tlY2.length){eR+="* "+tlY2.join(", ")+"\n";}else{eR+="* ___\n";}
}
eR+="--- Size:\n";
var tsNM=c("#cb_ts_nm").is(":checked");var tsL=parseFloat(c("#txt_ts_len").val());
if(tsNM){eR+="* Non-measurable\n";}else if(tsL){eR+="* "+tsL+" cm\n";}else{eR+="* ___ cm\n";}
eR+="\n3. Tumor invasion\n";
var isNA=c("#cb_ti_na").is(":checked");
if(isNA){eR+="--- Not assessable\n";}
else{
  var t2=[["cb_ti_mp","muscularis propria"]],t3=[["cb_ti_pvt","perivesical soft tissue"]],t4a=[["cb_ti_p","prostate"],["cb_ti_sv","seminal vesicles"],["cb_ti_u","uterus"],["cb_ti_v","vagina"]],t4b=[["cb_ti_pw","pelvic wall"],["cb_ti_aw","abdominal wall"]];
  var iY=[],iNcat={T2:[],T3:[],T4a:[],T4b:[]};
  t2.forEach(function(op){if(c("#"+op[0]).is(":checked")){iY.push("* "+op[1]+" (T2)");}else{iNcat.T2.push(op[1]);}});
  t3.forEach(function(op){if(c("#"+op[0]).is(":checked")){iY.push("* "+op[1]+" (T3)");}else{iNcat.T3.push(op[1]);}});
  t4a.forEach(function(op){if(c("#"+op[0]).is(":checked")){iY.push("* "+op[1]+" (T4a)");}else{iNcat.T4a.push(op[1]);}});
  t4b.forEach(function(op){if(c("#"+op[0]).is(":checked")){iY.push("* "+op[1]+" (T4b)");}else{iNcat.T4b.push(op[1]);}});
  if(c("#cb_ti_others").is(":checked")){var ti=c("#txt_ti_others").val();if(ti){iY.push("* "+ti+" (T4b)");}}
  if(iY.length){eR+="--- Yes:\n"+iY.join("\n")+"\n";}
  var noLines=[];
  ["T2","T3","T4a","T4b"].forEach(function(cat){if(iNcat[cat].length){noLines.push("* "+iNcat[cat].join(", ")+" ("+cat+")");}});
  if(noLines.length){eR+="--- No or Equivocal:\n"+noLines.join("\n")+"\n";}
}
eR+="\n4. Regional nodal metastasis\n";
var rnN_kind=c('input[name="radio_rn_n"]:checked').val();
eR+="--- Number: "+(rnN_kind||"___")+"\n";
var rnO=[["cb_rn_pv","perivesical"],["cb_rn_rii","right common iliac"],["cb_rn_lii","left common iliac"],["cb_rn_ro","right obturator"],["cb_rn_lo","left obturator"],["cb_rn_rei","right external iliac"],["cb_rn_lei","left external iliac"],["cb_rn_ps","presacral"],["cb_rn_rci","right common iliac (N3)"],["cb_rn_lci","left common iliac (N3)"]];var rnY=[],rnN=[];
rnO.forEach(function(op){if(c("#"+op[0]).is(":checked")){rnY.push(op[1]);}else{rnN.push(op[1]);}});
if(rnY.length){eR+="--- Yes:\n* "+rnY.join(", ")+"\n";}
if(rnN.length){eR+="--- No or Equivocal:\n* "+rnN.join(", ")+"\n";}
eR+="\n5. Distant metastasis (In this study)\n";
var m1a=[["cb_dm_ln","Non-regional lymph nodes"]],m1b=[["cb_dm_lu","lung"],["cb_dm_li","liver"],["cb_dm_ad","adrenal"],["cb_dm_b","bone"]];
var dmY=[],dmN=[];
m1a.forEach(function(op){if(c("#"+op[0]).is(":checked")){dmY.push(op[1]+" (M1a)");}else{dmN.push(op[1]);}});
m1b.forEach(function(op){if(c("#"+op[0]).is(":checked")){dmY.push(op[1]+" (M1b)");}else{dmN.push(op[1]);}});
if(c("#cb_dm_others").is(":checked")){var t=c("#txt_dm_others").val();if(t){dmY.push(t+" (M1b)");}}
if(dmY.length){eR+="--- Yes:\n* "+dmY.join(", ")+"\n";}
if(dmN.length){eR+="--- No or Equivocal:\n* "+dmN.join(", ")+"\n";}
eR+="\n6. Other findings:\n\n\n";
var tP=[],nP=["0"],mP=["0"];
if(isNA||tsNM){
  if(isNA){tP.push("x");}else{tP.push("0");}
}
else{
  tP.push("1");
  if(c(".cb_ti_t2:checked").length){tP.push("2");}
  if(c(".cb_ti_t3:checked").length){tP.push("3");}
  if(c(".cb_ti_t4a:checked").length){tP.push("4a");}
  if(c(".cb_ti_t4b:checked").length){tP.push("4b");}
}
var hasN=c(".cb_rn:not(#cb_rn_s):not(#cb_rn_m):checked").length>0;
var hasCommonIliac=c("#cb_rn_rci").is(":checked")||c("#cb_rn_lci").is(":checked");
var isMultiple=rnN_kind==="multiple";
if(hasN){
  if(hasCommonIliac){nP.push("3");}
  else if(isMultiple){nP.push("2");}
  else{nP.push("1");}
}
var hasM=c(".cb_dm:checked").length>0;
if(hasM){
  var isM1b=c(".cb_dm_m1b:checked").length>0||c("#cb_dm_others").is(":checked");
  if(isM1b){mP.push("1b");}else{mP.push("1a");}
}
var tF=tP.length?tP.sort()[tP.length-1]:"0";
var nF=nP.sort()[nP.length-1];var mF=mP.sort()[mP.length-1];
eR+=(0,n.xM)("Urinary Bladder Carcinoma",tF,s,nF,i,mF,o,8);
c("#reportModalLongTitle").html("Urinary Bladder Cancer Staging Form");
c("#reportModalBody pre code").html(eR);
return document.getElementById("reportModalLong").showModal();
}
var e="1. Imaging modality\n  - Imaging by ";"ct"==c('input[name="protocol_radios"]:checked').val()?e+="(+) CT scan  ( ) MRI":e+="( ) CT scan  (+) MRI",e+="\n\n";var t=c("#cb_tl_na").is(":checked"),a=c("#cb_tn_s").is(":checked")?"+":" ",r=c("#cb_tn_m").is(":checked")?"+":" ",l=t?"+":" ",d=c("#cb_tl_pwt").is(":checked")?"+":" ",h=c("#cb_tl_rlw").is(":checked")?"+":" ",_=c("#cb_tl_llw").is(":checked")?"+":" ",m=c("#cb_tl_aw").is(":checked")?"+":" ",b=c("#cb_tl_dsw").is(":checked")?"+":" ",u=c("#cb_tl_iwn").is(":checked")?"+":" ",p=c("#cb_ts_nm").is(":checked"),v=parseFloat(c("#txt_ts_len").val()),g=p?"+":" ",k=!p&&v?"+":" ",f=v||"___",w=c("#cb_tl_l_pwt").is(":checked")?"+":" ",y=c("#cb_tl_l_rlw").is(":checked")?"+":" ",N=c("#cb_tl_l_llw").is(":checked")?"+":" ",M=c("#cb_tl_l_aw").is(":checked")?"+":" ",x=c("#cb_tl_l_dsw").is(":checked")?"+":" ",T=c("#cb_tl_l_iwn").is(":checked")?"+":" ";e+="2. Tumor location / size\n    Tumor number: [".concat(a,"] Solitary   [").concat(r,"] Multiple\n    Locations at the urinary bladder:\n        [").concat(l,"] Not assessable\n        At [").concat(d,"] Posterior wall or Trigone  [").concat(h,"] Right lateral wall  [").concat(_,"] Left lateral wall\n           [").concat(m,"] Anterior wall  [").concat(b,"] Dome or Superior wall  [").concat(u,"] Inferior wall or Neck\n    Largest tumor size:\n        [").concat(g,"] Non-measurable\n        [").concat(k,"] Measurable: ").concat(f," cm (greatest dimension of the largest tumor)\n        At [").concat(w,"] Posterior wall or Trigone  [").concat(y,"] Right lateral wall  [").concat(N,"] Left lateral wall\n           [").concat(M,"] Anterior wall  [").concat(x,"] Dome or Superior wall  [").concat(T,"] Inferior wall or Neck\n\n");var C=c("#cb_ti_na").is(":checked"),I=C?"+":" ",O=c(".cb_ti:checked").length?" ":"+",A=c("#cb_ti_mp").is(":checked")?"+":" ",j=c("#cb_ti_pvt").is(":checked")?"+":" ",E=c(".cb_ti_t4:checked").length>0?"+":" ",L=c("#cb_ti_p").is(":checked")?"+":" ",D=c("#cb_ti_sv").is(":checked")?"+":" ",P=c("#cb_ti_u").is(":checked")?"+":" ",R=c("#cb_ti_v").is(":checked")?"+":" ",S=c("#cb_ti_pw").is(":checked")?"+":" ",U=c("#cb_ti_aw").is(":checked")?"+":" ",B=c("#cb_ti_others").is(":checked")?"+":" ",F=c("#txt_ti_others").val()?c("#txt_ti_others").val():"___";e+="3. Tumor invasion\n    [".concat(I,"] Not assessable\n    [").concat(O,"] No or Equivocal\n    [").concat(A,"] Tumor invasion of deep muscle\n    [").concat(j,"] Gross tumor invasion of perivesical tissue\n    [").concat(E,"] Tumor invasion to adjacent organs:\n        For male: [").concat(L,"] Prostate   [").concat(D,"] Seminal vesicles\n        For female: [").concat(P,"] Uterus   [").concat(R,"] Vagina\n    [").concat(S,"] Pelvic wall\n    [").concat(U,"] Abdominal wall\n    [").concat(B,"] Others: ").concat(F,"\n\n");var z=function(e){var t=["0"],a=["0"],n=["0"];return e.isNotAssessable||e.isNonMeasurable?e.isTInvasionNotAssessable?t.push("x"):t.push("0"):(t.push("1"),e.invasion.t2&&t.push("2"),e.invasion.t3&&t.push("3"),e.invasion.t4a&&t.push("4a"),e.invasion.t4b&&t.push("4b")),e.nodes.hasNodes&&(e.nodes.hasCommonIliacNodes?a.push("3"):e.nodes.isMultipleNodes||e.nodes.nodesCount>1?a.push("2"):a.push("1")),e.metastasis.hasMetastasis&&(e.metastasis.isM1b?n.push("1b"):n.push("1a")),{t,n:a,m:n}}({isNotAssessable:t,isNonMeasurable:p,isTInvasionNotAssessable:C,invasion:{t4b:c(".cb_ti_t4b:checked").length>0,t4a:c(".cb_ti_t4a:checked").length>0,t3:c(".cb_ti_t3:checked").length>0,t2:c(".cb_ti_t2:checked").length>0},nodes:{hasNodes:c(".cb_rn:checked").length>0,hasCommonIliacNodes:c(".cb_rn_n3:checked").length>0,isMultipleNodes:c("#cb_rn_m").is(":checked"),nodesCount:c(".cb_rn:checked").length},metastasis:{hasMetastasis:c(".cb_dm:checked").length>0,isM1b:c(".cb_dm_m1b:checked").length>0}}),q=z.t,H=z.n,Y=z.m,G=c(".cb_rn:checked").length>0,J=c("#cb_rn_s").is(":checked")?"+":" ",V=c("#cb_rn_m").is(":checked")?"+":" ";e+="4. Regional nodal metastasis\n",e+="    ["+(G?" ":"+")+"] No or Equivocal\n",e+="    ["+(G?"+":" ")+"] Yes, if yes:\n",e+="        Numbers: (".concat(J,") single   (").concat(V,") multiple\n"),c(".lb_rn").each(function(){var t=c(this).attr("for");if(c(this).hasClass("has_parts")){var a=c("."+t+":checked").length>0?"+":" ";e+="        [".concat(a,"] ")+c(this).text().trim()+": ";var n=c("."+t);n.each(function(t,a){var s=c(this).is(":checked")?"+":" ";e+="[".concat(s,"] ")+c(this).val(),t!==n.length-1&&(e+="  ")}),e+="\n"}else{var s=c("#"+t).is(":checked")?"+":" ";e+="        [".concat(s,"] ")+c(this).text().trim()+"\n"}}),e+="\n";var K=c(".cb_dm:checked").length>0;e+="5. Distant metastasis (In this study)\n",e+="    ["+(K?" ":"+")+"] No or Equivocal\n",e+="    ["+(K?"+":" ")+"] Yes, location: ",K?(c('.cb_dm:not("#cb_dm_others"):checked').length&&(e+=(0,n.y3)(c('.cb_dm:not("#cb_dm_others"):checked'))),c("#cb_dm_others").is(":checked")&&(c('.cb_dm:not("#cb_dm_others"):checked').length&&(e+=", "),e+=c("#txt_dm_others").val())):e+="___",e+="\n\n";var Q=c(".cb_o_hn:checked").length>0?"+":" ",W=c("#cb_o_hn_r").is(":checked")?"+":" ",X=c("#cb_o_hn_l").is(":checked")?"+":" ";e+="6. Other findings\n    [".concat(Q,"] Hydronephrosis: [").concat(W,"] right   [").concat(X,"] left\n\n");var Z=q.sort()[q.length-1],$=H.sort()[H.length-1],ee=Y.sort()[Y.length-1];e+=(0,n.xM)("Urinary Bladder Carcinoma",Z,s,$,i,ee,o,8),c("#reportModalLongTitle").html("Urinary Bladder Cancer Staging Form"),c("#reportModalBody pre code").html(e),document.getElementById("reportModalLong").showModal()},ajccData:{T:s,N:i,M:o},ajccTitleHtml:"AJCC Definitions for Urinary Bladder Carcinoma <span class='badge badge-secondary ml-2' style='font-size: 60%; vertical-align: super;'>8th</span>"});c("#btn_format_a").click(function(){reportFormat="A";c("#btn_format_a").attr("style","background-color:#16a34a;border:1px solid #15803d;color:#fff;");c("#btn_format_b").attr("style","background-color:#4b5563;border:1px solid #374151;color:#d1d5db;");});c("#btn_format_b").click(function(){reportFormat="B";c("#btn_format_b").attr("style","background-color:#16a34a;border:1px solid #15803d;color:#fff;");c("#btn_format_a").attr("style","background-color:#4b5563;border:1px solid #374151;color:#d1d5db;");})}},a={};function n(e){var c=a[e];if(void 0!==c)return c.exports;var s=a[e]={id:e,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.exports}n.m=t,e=[],n.O=(t,a,c,s)=>{if(!a){var i=1/0;for(d=0;d<e.length;d++){for(var[a,c,s]=e[d],o=!0,r=0;r<a.length;r++)(!1&s||i>=s)&&Object.keys(n.O).every(e=>n.O[e](a[r]))?a.splice(r--,1):(o=!1,s<i&&(i=s));if(o){e.splice(d--,1);var l=c();void 0!==l&&(t=l)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[a,c,s]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.j=272,(()=>{n.b="undefined"!=typeof document&&document.baseURI||self.location.href;var e={272:0};n.O.j=t=>0===e[t];var t=(t,a)=>{var c,s,[i,o,r]=a,l=0;if(i.some(t=>0!==e[t])){for(c in o)n.o(o,c)&&(n.m[c]=o[c]);if(r)var d=r(n)}for(t&&t(a);l<i.length;l++)s=i[l],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(d)},a=self.webpackChunkweb_structure_report=self.webpackChunkweb_structure_report||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})(),n.nc=void 0;var c=n.O(void 0,[96,76,312],()=>n(2531));c=n.O(c)})();