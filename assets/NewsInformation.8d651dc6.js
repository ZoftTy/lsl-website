import{z as k,j as l,L as x,M as B,E,f as N,q as S,o as u,c as y,e as a,w as s,a as h,v as L,F as C,k as H,d as R,p as z,b as D}from"./vendor.afe4c88e.js";import{_ as F}from"./GraphicItem.9afcceb0.js";import{H as G,_ as M}from"./HeaderImageLayout.393c95b8.js";import{_ as V,g as W}from"./index.184212a4.js";var q="/images/news-information-header.jpg";const A=c=>(z("data-v-0b76faa8"),c=c(),D(),c),P={class:"news-information"},T=A(()=>h("img",{src:q,alt:""},null,-1)),U={class:"max-width-wrap"},$={setup(c){const _=k(),I=[{name:"company",title:"\u516C\u53F8\u65B0\u95FB",url:"/news/company"},{name:"industry",title:"\u884C\u4E1A\u52A8\u6001",url:"/news/industry"}],r=l([]),b=x(()=>_.params.category),d=l(),p=async e=>{const f=`/data/news/${e}.json`;r.value=await fetch(f).then(n=>n.json()),d.value=e;let t=l();e==="company"?t.value=20:e==="industry"&&(t.value=22),console.log(t.value),W(t.value).then(n=>{r.value=n})};p(_.params.category),B(e=>p(e.params.category));const i=l(!1),m=e=>{e>768?i.value=!1:i.value=!0};return m(document.body.clientWidth),window.onresize=()=>m(document.body.clientWidth),(e,f)=>{const t=M,n=F,v=E,g=N,j=S;return u(),y("div",P,[a(G,null,{image:s(()=>[T]),memu:s(()=>[a(t,{data:I,active:L(b)},null,8,["active"])]),_:1}),h("div",U,[a(g,{class:"list-wrap"},{default:s(()=>[(u(!0),y(C,null,H(r.value,(o,w)=>(u(),R(v,{class:"item-wrap",key:o,md:w==0?24:12},{default:s(()=>[a(n,{class:"item",shadow:!1,background:!1,small:w==0?i.value:!0,id:o.id,title:o.title,category:d.value,icon:o.cover,content:o.description,date:o.date},null,8,["small","id","title","category","icon","content","date"])]),_:2},1032,["md"]))),128))]),_:1})]),a(g,{justify:"center"},{default:s(()=>[a(v,{class:"item-controller"},{default:s(()=>[a(j,{"pager-count":5,background:"",layout:"prev, pager, next",total:50})]),_:1})]),_:1})])}}};var X=V($,[["__scopeId","data-v-0b76faa8"]]);export{X as default};
