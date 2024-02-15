import{i as n,S as d}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const u=document.querySelector(".search-form"),c=document.querySelector(".gallery-list"),l=document.querySelector("#loader");u.addEventListener("submit",g);let m;function g(a){a.preventDefault(),c.innerHTML="",l.style.display="block";const i=document.querySelector(".search-input").value.trim();if(i===""){n.error({title:"",message:"Please enter a search query!",position:"topRight"}),l.style.display="none";return}f(i).then(r=>{r.hits.length===0&&n.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c.innerHTML=h(r.hits),m=new d(".gallery-link",{captionDelay:250,captionsData:"alt"}),m.refresh()}).catch(r=>{n.error({title:"",message:r.message,position:"topRight"})}).finally(()=>{u.reset(),l.style.display="none"})}function f(a){const s="42343385-eb6c059581ee4f8bb4ee68ac0",i="https://pixabay.com/api/",r=new URLSearchParams({key:s,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${i}?${r}`).then(e=>{if(!e.ok)throw new Error(`Error: ${e.status}`);return e.json()})}function h(a){return a.map(({webformatURL:s,largeImageURL:i,tags:r,likes:e,views:t,comments:o,downloads:p})=>`
  <li class="gallery-item">
  <a href="${i}" class="gallery-link">
      <img src="${s}" 
           alt="${r}" 
           class="gallery-image"
           loading="lazy" 
           width="250"
           height="250">
      <div>
        <div class="image-item">Likes <span class="image-elem">${e}</span></div>
        <div class="image-item">Views <span class="image-elem">${t}</span></div>
        <div class="image-item">Comments <span class="image-elem">${o}</span></div>
        <div class="image-item">Downloads <span class="image-elem">${p}</span></div>
  </div>
</a>
</li>
`).join("")}
//# sourceMappingURL=commonHelpers.js.map
