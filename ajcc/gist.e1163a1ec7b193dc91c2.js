(()=>{"use strict";var e,n={8583(e,n,t){t(1643),t(5647),t(5654);var o=t(211);var r=t(4692);var reportFormat="A";var a=new Map([["x","Primary tumor cannot be assessed"],["0","No evidence of primary tumor"],["1","Tumor 2 cm or less"],["2","Tumor more than 2 cm but not more than 5 cm"],["3","Tumor more than 5 cm but not more than 10 cm"],["4","Tumor more than 10 cm in greatest dimension"]]),s=new Map([["0","No regional lymph node metastasis or unknown lymph node status"],["1","Regional lymph node metastasis"]]),c=new Map([["0","No distant metastasis (in this study)"],["1","Distant metastasis"]]);r("#cb_tp_ts_nm").change(function(){r("form.was-validated").length}),r(".cb_rn").change(function(){var e=+r("#txt_rln_num").val();this.checked?r("#txt_rln_num").val(e+1):e>0&&r("#txt_rln_num").val(e-1)}),(0,o.z_)({generateReportFn:function(){if("B"===reportFormat){
var eR="";
var protoFmt=r('input[name="protocol_radios"]:checked').val();
if(protoFmt==="ct"){eR+="1. CT protocol\nWith contrast, range: whole abdomen, slice thickness <= 5mm\n\n";}else{eR+="1. MR protocol\nSEQUENCES:\n- Axial T1WI and T2WI with fat suppression;\n- Axial, coronal and sagittal post Gd-enhanced T1WI with fat suppression\n\n";}
eR+="2. Tumor location / size\n";
eR+="--- Location:\n";
var tlOpts_B=[["cb_tl_s","stomach"],["cb_tl_si","small intestine"],["cb_tl_li","large intestine"],["cb_tl_p","peritoneum"]];
var tlYes_B=[],tlNo_B=[];
tlOpts_B.forEach(function(op){if(r("#"+op[0]).is(":checked")){tlYes_B.push(op[1]);}else{tlNo_B.push(op[1]);}});
var tlOther_B=r("#cb_tl_others").is(":checked");
if(tlOther_B){var txtO=r("#txt_tl_others").val();if(txtO){tlYes_B.push(txtO);}}
if(tlYes_B.length){eR+="* "+tlYes_B.join(", ")+"\n";}else{eR+="* ___\n";}
eR+="--- Size:\n";
var tsNM_B=r("#cb_ts_nm").is(":checked");
var tsLen_B=parseFloat(r("#txt_ts_len").val());
if(tsNM_B){eR+="* Non-measurable\n";}
else if(tsLen_B){eR+="* Measurable: "+tsLen_B+" cm (greatest dimension of the largest tumor)\n";}
else{eR+="* ___ cm (greatest dimension)\n";}
eR+="\n";
eR+="3. Tumor invasion\n";
var tiSel_B=r('input[name="radios_ti"]:checked');
if(tiSel_B.length){
  var tiLabel=tiSel_B.next().text().trim();
  eR+="* "+tiLabel;
  if(tiSel_B.val()==="ti"){var loc=r("#txt_ti_loc").val();if(loc){eR+=", location: "+loc;}}
  eR+="\n";
}else{eR+="* Not specified\n";}
eR+="\n";
eR+="4. Regional nodal metastasis\n";
var rnYes_B=r(".cb_rn:checked").length>0;
if(rnYes_B){
  var rnOther=r("#txt_rn_others").val();
  eR+="--- Yes:\n* "+(rnOther||"___")+"\n";
}else{eR+="--- No or Equivocal\n";}
eR+="\n";
eR+="5. Distant metastasis (In this study)\n";
var dmOpts_B=[["cb_dm_li","liver"],["cb_dm_ad","adrenal"],["cb_dm_lu","lung"],["cb_dm_b","bone"]];
var dmY_B=[],dmN_B=[];
dmOpts_B.forEach(function(op){if(r("#"+op[0]).is(":checked")){dmY_B.push(op[1]);}else{dmN_B.push(op[1]);}});
var dmO_B=r("#cb_dm_others").is(":checked");
if(dmO_B){var txtDM=r("#txt_dm_others").val();if(txtDM){dmY_B.push(txtDM);}}
if(dmY_B.length){eR+="--- Yes:\n* "+dmY_B.join(", ")+"\n";}
if(dmN_B.length){eR+="--- No or Equivocal:\n* "+dmN_B.join(", ")+"\n";}
eR+="\n";
eR+="6. Other findings:\n\n\n";
var tPush_B=["0"],nPush_B=["0"],mPush_B=["0"];
if(!tsNM_B&&tsLen_B>0){
  if(tsLen_B>10){tPush_B.push("4");}
  else if(tsLen_B>5){tPush_B.push("3");}
  else if(tsLen_B>2){tPush_B.push("2");}
  else{tPush_B.push("1");}
}
if(r(".cb_rn:checked").length){nPush_B.push("1");}
if(r(".cb_dm:checked").length){mPush_B.push("1");}
var tFin=tPush_B.sort()[tPush_B.length-1];
var nFin=nPush_B.sort()[nPush_B.length-1];
var mFin=mPush_B.sort()[mPush_B.length-1];
eR+=(0,o.xM)("GIST",tFin,a,nFin,s,mFin,c,8);
r("#reportModalLongTitle").html("GIST Staging Form");
r("#reportModalBody pre code").html(eR);
return document.getElementById("reportModalLong").showModal();
}
var e="1. Imaging modality\n  - Imaging by ";"ct"==r('input[name="protocol_radios"]:checked').val()?e+="(+) CT scan  ( ) MRI":e+="( ) CT scan  (+) MRI",e+="\n\n",e+="2. Tumor location / size\n--- Location:\n",r(".cb_tl:checked").length&&(e+="* "+(0,o.y3)(r(".cb_tl:checked"),"\n* ")+"\n");var n=parseFloat(r("#txt_ts_len").val());if(e+="--- Size:\n",r("#cb_ts_nm").is(":checked")?e+="* Non-measurable":e+="* Measurable: "+n+" cm (greatest dimension of the largest tumor)",e+="\n\n",e+="3. Tumor invasion\n",r('input[name="radios_ti"]:checked').length){var t=r('input[name="radios_ti"]:checked');e+="* "+t.next().text(),"ti"==t.val()&&(e+=", location: "+r("#txt_ti_loc").val()),e+="\n"}e+="\n",e+="4. Regional nodal metastasis\n",r(".cb_rn:checked").length&&(e+="--- Yes: "+r("#txt_rn_others").val()+"\n"),r(".cb_rn:not(:checked)").length&&(e+="--- No or Equivocal\n"),e+="\n",e+="5. Distant metastasis (In this study)\n",r(".cb_dm:checked").length&&(e+="--- Yes:\n",r(".cb_dm_nrn:checked").length&&(e+="* Non-regional lymph nodes: "+(0,o.y3)(r(".cb_dm_nrn:checked"))+"\n"),r(".cb_dm:not(.cb_dm_nrn):checked").length&&(e+="* "+(0,o.y3)(r(".cb_dm:not(.cb_dm_nrn):checked"),"\n* ")),r("#cb_dm_others:checked").length&&(e+=r("#txt_dm_others").val()),e+="\n"),r(".cb_dm:not(:checked)").length&&(e+="--- No or Equivocal:\n",r(".cb_dm_nrn:not(:checked)").length&&(e+="* Non-regional lymph nodes: "+(0,o.y3)(r(".cb_dm_nrn:not(:checked)"))+"\n"),r(".cb_dm:not(.cb_dm_nrn):not(:checked)").length&&(e+="* "+(0,o.y3)(r(".cb_dm:not(.cb_dm_nrn):not(:checked)"))+"\n")),e+="\n";var i=function(e){var n=["0"],t=["0"],o=["0"];return e.isNonMeasurable||e.tumorSize>0&&(e.tumorSize>10?n.push("4"):e.tumorSize>5?n.push("3"):e.tumorSize>2?n.push("2"):n.push("1")),e.hasNodes&&t.push("1"),e.hasMetastasis&&o.push("1"),{t:n,n:t,m:o}}({tumorSize:n,isNonMeasurable:r("#cb_ts_nm").is(":checked"),hasNodes:r(".cb_rn:checked").length>0,hasMetastasis:r(".cb_dm:checked").length>0}),l=i.t,m=i.n,d=i.m;e+="6. Other findings\n\n\n";var h=l.sort()[l.length-1],u=m.sort()[m.length-1],_=d.sort()[d.length-1];a[h],s[u],c[_],e+=(0,o.xM)("Gastrointestinal Stromal Tumor",h,a,u,s,_,c,8),r("#reportModalLongTitle").html("Gastrointestinal Stromal Tumor Staging Form"),r("#reportModalBody pre code").html(e),document.getElementById("reportModalLong").showModal()},ajccData:{T:a,N:s,M:c},ajccTitleHtml:"AJCC Definitions for Gastrointestinal Stromal Tumor <span class='badge badge-secondary ml-2' style='font-size: 60%; vertical-align: super;'>8th</span>"});r("#btn_format_a").click(function(){reportFormat="A";r("#btn_format_a").attr("style","background-color:#16a34a;border:1px solid #15803d;color:#fff;");r("#btn_format_b").attr("style","background-color:#4b5563;border:1px solid #374151;color:#d1d5db;");});r("#btn_format_b").click(function(){reportFormat="B";r("#btn_format_b").attr("style","background-color:#16a34a;border:1px solid #15803d;color:#fff;");r("#btn_format_a").attr("style","background-color:#4b5563;border:1px solid #374151;color:#d1d5db;");})}},t={};function o(e){var r=t[e];if(void 0!==r)return r.exports;var a=t[e]={id:e,exports:{}};return n[e].call(a.exports,a,a.exports,o),a.exports}o.m=n,e=[],o.O=(n,t,r,a)=>{if(!t){var s=1/0;for(m=0;m<e.length;m++){for(var[t,r,a]=e[m],c=!0,i=0;i<t.length;i++)(!1&a||s>=a)&&Object.keys(o.O).every(e=>o.O[e](t[i]))?t.splice(i--,1):(c=!1,a<s&&(s=a));if(c){e.splice(m--,1);var l=r();void 0!==l&&(n=l)}}return n}a=a||0;for(var m=e.length;m>0&&e[m-1][2]>a;m--)e[m]=e[m-1];e[m]=[t,r,a]},o.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return o.d(n,{a:n}),n},o.d=(e,n)=>{for(var t in n)o.o(n,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},o.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),o.j=726,(()=>{o.b="undefined"!=typeof document&&document.baseURI||self.location.href;var e={726:0};o.O.j=n=>0===e[n];var n=(n,t)=>{var r,a,[s,c,i]=t,l=0;if(s.some(n=>0!==e[n])){for(r in c)o.o(c,r)&&(o.m[r]=c[r]);if(i)var m=i(o)}for(n&&n(t);l<s.length;l++)a=s[l],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(m)},t=self.webpackChunkweb_structure_report=self.webpackChunkweb_structure_report||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})(),o.nc=void 0;var r=o.O(void 0,[96,76,312],()=>o(8583));r=o.O(r)})();