import{_ as y}from"./GraphicItem.dd801b78.js";import{H as h,_ as I}from"./HeaderImageLayout.d66472c5.js";import{z as x,j as n,L as j,M as w,o as c,c as l,e as _,w as p,a as m,F as S,k,v as B,d as b,p as L,b as E}from"./vendor.afe4c88e.js";import{_ as H,g as N}from"./index.bd9fdaeb.js";var D="/images/education-system-header.jpg";const F=t=>(L("data-v-77585553"),t=t(),E(),t),G={class:"education-system"},M=F(()=>m("img",{src:D,alt:""},null,-1)),R={class:"list-wrap max-width-wrap"},V={setup(t){const i=x(),v=[{name:"education",title:"\u804C\u4E1A\u6559\u80B2",url:"/education/vocational-education",id:18},{name:"training",title:"\u804C\u4E1A\u57F9\u8BAD",url:"/education/vocational-training",id:21}],r=n([]),d=n("education"),g=j(()=>i.params.category),u=async e=>{d.value=e;let o=n();e==="education"?o.value=18:e==="training"&&(o.value=21),N(o.value).then(s=>{r.value=s})};return u(i.params.category),w(e=>u(e.params.category)),(e,o)=>{const s=I,f=y;return c(),l("div",G,[_(h,null,{image:p(()=>[M]),memu:p(()=>[_(s,{data:v,active:B(g)},null,8,["active"])]),_:1}),m("div",R,[(c(!0),l(S,null,k(r.value,a=>(c(),b(f,{class:"list-item",key:a,id:a.id,title:a.title,category:d.value,icon:a.cover,content:a.description,date:a.date},null,8,["id","title","category","icon","content","date"]))),128))])])}}};var q=H(V,[["__scopeId","data-v-77585553"]]);export{q as default};