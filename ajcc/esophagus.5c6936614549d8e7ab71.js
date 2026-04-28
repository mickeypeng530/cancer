(()=>{"use strict";var e,c={1237(e,c,a){a(1643),a(5647),a(5654);var t=a(211);var n=a(4692);var reportFormat="B";var o=new Map([["x","Primary tumor cannot be assessed"],["0","No evidence of primary tumor"],["1","Tumor invades the lamina propria, muscularis mucosae, or submucosa"],["1a","Tumor invades the lamina propria or muscularis mucosae"],["1b","Tumor invades the submucosa"],["2","Tumor invades the muscularis propria"],["3","Tumor invades adventitia"],["4","Tumor invades adjacent structures"],["4a","Tumor invades the pleura, pericardium, azygos vein, diaphragm, or peritoneum"],["4b","Tumor invades other adjacent structures, such as the aorta, vertebral body, or airway"]]),s=new Map([["x","Regional lymph nodes cannot be assessed"],["0","No regional lymph node metastasis"],["1","Metastasis in one or two regional lymph nodes"],["2","Metastasis in three to six regional lymph nodes"],["3","Metastasis in seven or more regional lymph nodes"]]),r=new Map([["0","No distant metastasis (in this study)"],["1","Distant metastasis"]]);n("#cb_tp_ts_nm").change(function(){n("form.was-validated").length}),n(".cb_rn").change(function(){var e=+n("#txt_rln_num").val();this.checked?n("#txt_rln_num").val(e+1):e>0&&n("#txt_rln_num").val(e-1)}),(0,t.z_)({generateReportFn:function(){if("B"===reportFormat){
var eR="";
var protoFmt=n('input[name="protocol_radios"]:checked').val();
if(protoFmt==="ct"){eR+="1. CT protocol\nWith contrast, range: chest and upper abdomen, slice thickness <= 5mm\n\n";}else{eR+="1. MR protocol\nSEQUENCES:\n- Axial T1WI and T2WI with fat suppression;\n- Axial, coronal and sagittal post Gd-enhanced T1WI with fat suppression\n\n";}
eR+="2. Tumor location / size\n";
eR+="--- Location:\n";
var tlOpts_B=[["cb_tl_cer","Cervical segment"],["cb_tl_upp","Upper third of thoracic segment"],["cb_tl_mid","Middle third of thoracic segment"],["cb_tl_low","Lower third of thoracic segment"]];
var tlYes_B=[],tlNo_B=[];
tlOpts_B.forEach(function(op){if(n("#"+op[0]).is(":checked")){tlYes_B.push(op[1]);}else{tlNo_B.push(op[1]);}});
if(tlYes_B.length){eR+="* "+tlYes_B.join(", ")+"\n";}else{eR+="* ___\n";}
eR+="--- Size:\n";
var tsNM_B=n("#cb_ts_nm").is(":checked");
var tsLen_B=parseFloat(n("#txt_ts_len").val());
var tsThk_B=parseFloat(n("#txt_ts_thick").val());
if(tsNM_B){eR+="* Non-measurable\n";}
else{
  var szParts=[];
  if(tsLen_B){szParts.push("Length "+tsLen_B+" cm");}
  if(tsThk_B){szParts.push("Max thickness "+tsThk_B+" cm");}
  if(szParts.length){eR+="* Measurable: "+szParts.join(", ")+"\n";}
  else{eR+="* ___ cm\n";}
}
eR+="\n";
eR+="3. Tumor invasion\n";
var tiT2=[["cb_ti_mp","esophageal muscularis propria"]],tiT3=[["cb_ti_ad","esophageal adventitia"]],tiT4a=[["cb_ti_pl","pleura"],["cb_ti_pc","pericardium"],["cb_ti_av","azygos vein"],["cb_ti_di","diaphragm"],["cb_ti_pt","peritoneum"]],tiT4b=[["cb_ti_aw","aortic wall"],["cb_ti_car","carina"],["cb_ti_law","left atrial wall"],["cb_ti_vb","vertebral body"],["cb_ti_pwot","posterior wall of trachea"],["cb_ti_pwomb","posterior wall of main bronchus"],["cb_ti_s","stomach"]];
var tiAll_B=tiT2.concat(tiT3).concat(tiT4a).concat(tiT4b);
var tiYes_B=[],tiNoCat_B={"T2":[],"T3":[],"T4a":[],"T4b":[]};
var catFor=function(idx){
  if(idx<tiT2.length){return "T2";}
  if(idx<tiT2.length+tiT3.length){return "T3";}
  if(idx<tiT2.length+tiT3.length+tiT4a.length){return "T4a";}
  return "T4b";
};
tiAll_B.forEach(function(op,i){
  var cat=catFor(i);
  if(n("#"+op[0]).is(":checked")){tiYes_B.push("* "+op[1]+" ("+cat+")");}else{tiNoCat_B[cat].push(op[1]);}
});
var tiOther_B=n("#cb_ti_others").is(":checked");
if(tiOther_B){var txtTI=n("#txt_ti_others").val();if(txtTI){tiYes_B.push("* "+txtTI+" (T4b)");}}
if(tiYes_B.length){eR+="--- Yes:\n"+tiYes_B.join("\n")+"\n";}
var noLines_B=[];
if(tiNoCat_B["T2"].length){noLines_B.push("* "+tiNoCat_B["T2"].join(", ")+" (T2)");}
if(tiNoCat_B["T3"].length){noLines_B.push("* "+tiNoCat_B["T3"].join(", ")+" (T3)");}
if(tiNoCat_B["T4a"].length){noLines_B.push("* "+tiNoCat_B["T4a"].join(", ")+" (T4a)");}
if(tiNoCat_B["T4b"].length){noLines_B.push("* "+tiNoCat_B["T4b"].join(", ")+" (T4b)");}
if(noLines_B.length){eR+="--- No or Equivocal:\n"+noLines_B.join("\n")+"\n";}
eR+="\n";
eR+="4. Regional nodal metastasis\n";
var rnOpts_B=[["cb_rn_rlc","right lower cervical"],["cb_rn_llc","left lower cervical"],["cb_rn_rup","right upper paratracheal"],["cb_rn_lup","left upper paratracheal"],["cb_rn_rlp","right lower paratracheal"],["cb_rn_llp","left lower paratracheal"],["cb_rn_utpe","upper thoracic paraesophageal"],["cb_rn_mtpe","middle thoracic paraesophageal"],["cb_rn_ltpe","lower thoracic paraesophageal"],["cb_rn_rpl","right pulmonary ligament"],["cb_rn_lpl","left pulmonary ligament"],["cb_rn_sca","subcarinal"],["cb_rn_di","diaphragmatic"],["cb_rn_pc","paracardial"],["cb_rn_lga","left gastric"],["cb_rn_cha","common hepatic"],["cb_rn_sa","splenic"],["cb_rn_c","celiac"]];
var rnYes_B=[],rnNo_B=[];
rnOpts_B.forEach(function(op){if(n("#"+op[0]).is(":checked")){rnYes_B.push(op[1]);}else{rnNo_B.push(op[1]);}});
var nodeCount_B=parseInt(n("#txt_rln_num").val())||0;
var hasRNodes_B=n(".cb_rn:checked").length>0&&nodeCount_B>0;
if(hasRNodes_B||rnYes_B.length){
  eR+="--- Yes:\n";
  if(nodeCount_B>0){eR+="* Number of suspicious lymph nodes: "+nodeCount_B+"\n";}
  if(rnYes_B.length){eR+="* Locations: "+rnYes_B.join(", ")+"\n";}
}
if(rnNo_B.length){eR+="--- No or Equivocal:\n* "+rnNo_B.join(", ")+"\n";}
eR+="\n";
eR+="5. Distant metastasis (In this study)\n";
var dmOpts_B=[["cb_dm_et_lun","lung"],["cb_dm_et_liv","liver"],["cb_dm_et_ad","adrenal"],["cb_dm_et_b","bone"]];
var dmY_B=[],dmN_B=[];
dmOpts_B.forEach(function(op){if(n("#"+op[0]).is(":checked")){dmY_B.push(op[1]);}else{dmN_B.push(op[1]);}});
var dmO_B=n("#cb_dm_others").is(":checked");
if(dmO_B){var txtDM=n("#txt_dm_others").val();if(txtDM){dmY_B.push(txtDM);}}
if(dmY_B.length){eR+="--- Yes:\n* "+dmY_B.join(", ")+"\n";}
if(dmN_B.length){eR+="--- No or Equivocal:\n* "+dmN_B.join(", ")+"\n";}
eR+="\n";
eR+="6. Other findings:\n\n\n";
// TNM
var tPush_B=[],nPush_B=["0"],mPush_B=["0"];
var hasInv_B=n(".cb_ti:checked").length>0;
var hasTumor_B=!tsNM_B&&(tsLen_B||tsThk_B||hasInv_B);
if(hasInv_B){
  if(n(".cb_ti_t4b:checked").length){tPush_B.push("4b");}
  if(n(".cb_ti_t4a:checked").length){tPush_B.push("4a");}
  if(n(".cb_ti_t3:checked").length){tPush_B.push("3");}
  if(n(".cb_ti_t2:checked").length){tPush_B.push("2");}
}else if(tsNM_B){tPush_B.push("x");}
else{tPush_B.push("1");}
if(nodeCount_B>0){
  if(nodeCount_B>=7){nPush_B.push("3");}
  else if(nodeCount_B>=3){nPush_B.push("2");}
  else{nPush_B.push("1");}
}
if(n(".cb_dm:checked").length){mPush_B.push("1");}
var tFin=tPush_B.length?tPush_B.sort()[tPush_B.length-1]:"0";
var nFin=nPush_B.sort()[nPush_B.length-1];
var mFin=mPush_B.sort()[mPush_B.length-1];
eR+=(0,t.xM)("Esophageal Carcinoma",tFin,o,nFin,s,mFin,r,8);
n("#reportModalLongTitle").html("Esophageal Cancer Staging Form");
n("#reportModalBody pre code").html(eR);
return document.getElementById("reportModalLong").showModal();
}
var e="1. Imaging modality\n  - Imaging by ";"ct"==n('input[name="protocol_radios"]:checked').val()?e+="(+) CT scan  ( ) MRI":e+="( ) CT scan  (+) MRI",e+="\n\n",e+="2. Tumor location / size\n  - Location:\n",n(".cb_tl").each(function(){e+="    ["+(n(this).is(":checked")?"+":" ")+"] "+n(this).val()+"\n"}),e+="  - Size:";var c=n("#cb_ts_nm").is(":checked")||!n("#txt_ts_len").val()||!n("#txt_ts_thick").val();if(c)e+="\n    [+] Non-measurable\n    [ ] Measurable: Length: ___ cm, Max thickness: ___ cm";else{var a=parseFloat(n("#txt_ts_len").val()),i=parseFloat(n("#txt_ts_thick").val());e+="\n    [ ] Non-measurable\n    [+] Measurable: Length: ".concat(a," cm, Max thickness: ").concat(i," cm")}e+="\n\n";var l=n(".cb_ti:checked").length>0,h=l?" ":"+",_=l?"+":" ",d=n("#cb_ti_mp").is(":checked")?"+":" ",u=n("#cb_ti_ad").is(":checked")?"+":" ",m=n("#cb_ti_pl").is(":checked")?"+":" ",p=n("#cb_ti_pc").is(":checked")?"+":" ",b=n("#cb_ti_av").is(":checked")?"+":" ",v=n("#cb_ti_di").is(":checked")?"+":" ",g=n("#cb_ti_pt").is(":checked")?"+":" ",k=n("#cb_ti_aw").is(":checked")?"+":" ",f=n("#cb_ti_car").is(":checked")?"+":" ",y=n("#cb_ti_law").is(":checked")?"+":" ",x=n("#cb_ti_vb").is(":checked")?"+":" ",M=n("#cb_ti_pwot").is(":checked")?"+":" ",w=n("#cb_ti_pwomb").is(":checked")?"+":" ",T=n("#cb_ti_s").is(":checked")?"+":" ";e+="3. Tumor invasion\n    [".concat(h,"] No or Equivocal\n    [").concat(_,"] Yes, if yes:\n        [").concat(d,"] Esophageal muscularis propria    [").concat(u,"] Esophageal adventitia    [").concat(m,"] Pleura\n        [").concat(p,"] Pericardium                      [").concat(b,"] Azygos vein              [").concat(v,"] Diaphragm\n        [").concat(g,"] Peritoneum                       [").concat(k,"] Aortic wall              [").concat(f,"] Carina\n        [").concat(y,"] Left atrial wall                 [").concat(x,"] Vertebral body           [").concat(M,"] Posterior wall of trachea\n        [").concat(w,"] Posterior wall of main bronchus  [").concat(T,"] Stomach\n\n");var C=function(e){var c=[],a=["0"],t=["0"];return e.hasInvasion?(e.invasion.t4b&&c.push("4b"),e.invasion.t4a&&c.push("4a"),e.invasion.t3&&c.push("3"),e.invasion.t2&&c.push("2")):e.hasNoMeasurableTumor?c.push("x"):c.push("1"),e.nodesCount>0&&(e.nodesCount>=7?a.push("3"):e.nodesCount>=3?a.push("2"):e.nodesCount>=1&&a.push("1")),e.hasMetastasis&&t.push("1"),{t:c,n:a,m:t}}({hasInvasion:l,hasNoMeasurableTumor:c,invasion:{t4b:n(".cb_ti_t4b:checked").length>0,t4a:n(".cb_ti_t4a:checked").length>0,t3:n(".cb_ti_t3:checked").length>0,t2:n(".cb_ti_t2:checked").length>0},nodesCount:n(".cb_rn:checked").length&&n("#txt_rln_num").val()>0?parseInt(n("#txt_rln_num").val()):0,hasMetastasis:n(".cb_dm:checked").length>0}),L=C.t,O=C.n,I=C.m,N=n(".cb_rn:checked").length&&n("#txt_rln_num").val()>0,E=N?parseInt(n("#txt_rln_num").val()):"___";e+="4. Regional nodal metastasis\n",e+="    ["+(N?" ":"+")+"] No or Equivocal\n",e+="    ["+(N?"+":" ")+"] Yes, if yes, number of suspicious lymph node: "+E+", and locations:";var P=n("#cb_rn_rlc").is(":checked")?"+":" ",R=n("#cb_rn_llc").is(":checked")?"+":" ",j=n("#cb_rn_rup").is(":checked")?"+":" ",z=n("#cb_rn_lup").is(":checked")?"+":" ",D=n("#cb_rn_rlp").is(":checked")?"+":" ",S=n("#cb_rn_llp").is(":checked")?"+":" ",F=n("#cb_rn_utpe").is(":checked")?"+":" ",q=n("#cb_rn_mtpe").is(":checked")?"+":" ",A=n("#cb_rn_ltpe").is(":checked")?"+":" ",U=n("#cb_rn_rpl").is(":checked")?"+":" ",Y=n("#cb_rn_lpl").is(":checked")?"+":" ",B=n("#cb_rn_sca").is(":checked")?"+":" ",H=n("#cb_rn_di").is(":checked")?"+":" ",J=n("#cb_rn_pc").is(":checked")?"+":" ",V=n("#cb_rn_lga").is(":checked")?"+":" ",G=n("#cb_rn_cha").is(":checked")?"+":" ",K=n("#cb_rn_sa").is(":checked")?"+":" ",Q=n("#cb_rn_c").is(":checked")?"+":" ",W=n("#cb_rn_others").is(":checked")?"+":" ",X=n("#txt_rn_others").val()?n("#txt_rn_others").val():"___";e+="\n        Lower cervical          [".concat(P,"] Right    [").concat(R,"] Left\n        Upper paratracheal      [").concat(j,"] Right    [").concat(z,"] Left\n        Lower paratracheal      [").concat(D,"] Right    [").concat(S,"] Left\n        Thoracic paraesophageal [").concat(F,"] Upper    [").concat(q,"] Middle   [").concat(A,"] Lower\n        Pulmonary ligament      [").concat(U,"] Right    [").concat(Y,"] Left\n        [").concat(B,"] Subcarinal       [").concat(H,"] Diaphragmatic    [").concat(J,"] Paracardial  [").concat(V,"] Left gastric\n        [").concat(G,"] Common hepatic   [").concat(K,"] Splenic          [").concat(Q,"] Celiac       [").concat(W,"] Others: ").concat(X,"\n\n");var Z=n(".cb_dm:checked").length>0;e+="5. Distant metastasis (In this study)\n",e+="    ["+(Z?" ":"+")+"] No or Equivocal\n",e+="    ["+(Z?"+":" ")+"] Yes, location(s): ",Z?(n('.cb_dm:not("#cb_dm_others"):checked').length&&(e+=(0,t.y3)(n('.cb_dm:not("#cb_dm_others"):checked'))),n("#cb_dm_others").is(":checked")&&(n('.cb_dm:not("#cb_dm_others"):checked').length&&(e+=", "),e+=n("#txt_dm_others").val())):e+="___",e+="\n\n",e+="6. Other findings\n\n\n";var $=L.sort()[L.length-1],ee=O.sort()[O.length-1],ce=I.sort()[I.length-1];e+=(0,t.xM)("Esophageal Carcinoma",$,o,ee,s,ce,r,8),n("#reportModalLongTitle").html("Esophageal Cancer Staging Form"),n("#reportModalBody pre code").html(e),document.getElementById("reportModalLong").showModal()},ajccData:{T:o,N:s,M:r},ajccTitleHtml:"AJCC Definitions for Esophageal Carcinoma <span class='badge badge-secondary ml-2' style='font-size: 60%; vertical-align: super;'>8th</span>"});n("#btn_format_a").click(function(){reportFormat="A";n("#btn_format_a").attr("style","background-color:#16a34a;border:1px solid #15803d;color:#fff;");n("#btn_format_b").attr("style","background-color:#4b5563;border:1px solid #374151;color:#d1d5db;");});n("#btn_format_b").click(function(){reportFormat="B";n("#btn_format_b").attr("style","background-color:#16a34a;border:1px solid #15803d;color:#fff;");n("#btn_format_a").attr("style","background-color:#4b5563;border:1px solid #374151;color:#d1d5db;");})}},a={};function t(e){var n=a[e];if(void 0!==n)return n.exports;var o=a[e]={id:e,exports:{}};return c[e].call(o.exports,o,o.exports,t),o.exports}t.m=c,e=[],t.O=(c,a,n,o)=>{if(!a){var s=1/0;for(h=0;h<e.length;h++){for(var[a,n,o]=e[h],r=!0,i=0;i<a.length;i++)(!1&o||s>=o)&&Object.keys(t.O).every(e=>t.O[e](a[i]))?a.splice(i--,1):(r=!1,o<s&&(s=o));if(r){e.splice(h--,1);var l=n();void 0!==l&&(c=l)}}return c}o=o||0;for(var h=e.length;h>0&&e[h-1][2]>o;h--)e[h]=e[h-1];e[h]=[a,n,o]},t.n=e=>{var c=e&&e.__esModule?()=>e.default:()=>e;return t.d(c,{a:c}),c},t.d=(e,c)=>{for(var a in c)t.o(c,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:c[a]})},t.o=(e,c)=>Object.prototype.hasOwnProperty.call(e,c),t.j=430,(()=>{t.b="undefined"!=typeof document&&document.baseURI||self.location.href;var e={430:0};t.O.j=c=>0===e[c];var c=(c,a)=>{var n,o,[s,r,i]=a,l=0;if(s.some(c=>0!==e[c])){for(n in r)t.o(r,n)&&(t.m[n]=r[n]);if(i)var h=i(t)}for(c&&c(a);l<s.length;l++)o=s[l],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(h)},a=self.webpackChunkweb_structure_report=self.webpackChunkweb_structure_report||[];a.forEach(c.bind(null,0)),a.push=c.bind(null,a.push.bind(a))})(),t.nc=void 0;var n=t.O(void 0,[96,76,312],()=>t(1237));n=t.O(n)})();