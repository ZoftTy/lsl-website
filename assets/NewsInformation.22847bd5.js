import{z as S,j as o,L,M as z,E as H,f as R,q as D,o as _,c as b,e as a,w as s,a as j,v as F,F as G,k as M,d as V,p as W,b as q}from"./vendor.afe4c88e.js";import{_ as A}from"./GraphicItem.fbbbd5ce.js";import{H as P,_ as T}from"./HeaderImageLayout.93387edf.js";import{_ as U,g as k}from"./index.a0a51138.js";var J="/images/news-information-header.jpg";const K=l=>(W("data-v-8f5eb99e"),l=l(),q(),l),O={class:"news-information"},Q=K(()=>j("img",{src:J,alt:""},null,-1)),X={class:"max-width-wrap"},Y={setup(l){const d=S(),x=[{name:"company",title:"\u516C\u53F8\u65B0\u95FB",url:"/news/company"},{name:"industry",title:"\u884C\u4E1A\u52A8\u6001",url:"/news/industry"}],p=o([]),m=o(0),u=o(1),f=(e,r)=>{console.log(e,r),k(e,3,!0,r).then(n=>{p.value=n}),k(e,0,!0,r).then(n=>{m.value=n.length})},C=L(()=>d.params.category),v=o();let c=o();const g=async e=>{v.value=e,e==="company"?c.value=20:e==="industry"&&(c.value=22),f(c.value,u.value)},N=e=>{u.value=e,console.log(e,123),f(c.value,u.value)};g(d.params.category),z(e=>g(e.params.category));const i=o(!1),y=e=>{e>768?i.value=!1:i.value=!0};return y(document.body.clientWidth),window.onresize=()=>y(document.body.clientWidth),(e,r)=>{const n=T,B=A,h=H,w=R,E=D;return _(),b("div",O,[a(P,null,{image:s(()=>[Q]),memu:s(()=>[a(n,{data:x,active:F(C)},null,8,["active"])]),_:1}),j("div",X,[a(w,{class:"list-wrap"},{default:s(()=>[(_(!0),b(G,null,M(p.value,(t,I)=>(_(),V(h,{class:"item-wrap",key:t,md:I==0?24:12},{default:s(()=>[a(B,{class:"item",shadow:!1,background:!1,small:I==0?i.value:!0,id:t.id,title:t.title,category:v.value,icon:t.cover,content:t.description,date:t.date},null,8,["small","id","title","category","icon","content","date"])]),_:2},1032,["md"]))),128))]),_:1})]),a(w,{justify:"center"},{default:s(()=>[a(h,{class:"item-controller"},{default:s(()=>[a(E,{"page-size":3,background:"",layout:"prev, pager, next",total:m.value,onCurrentChange:N},null,8,["total"])]),_:1})]),_:1})])}}};var te=U(Y,[["__scopeId","data-v-8f5eb99e"]]);export{te as default};
