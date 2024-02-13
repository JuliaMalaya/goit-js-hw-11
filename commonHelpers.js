import{i as n,S as f}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const u=document.querySelector(".search-form"),l=document.querySelector(".gallery-list"),c=document.querySelector("#loader");u.addEventListener("submit",g);let m;function g(i){i.preventDefault(),l.innerHTML="",c.classList.add("loader");const s=document.querySelector(".search-input");p(s.value).then(r=>{r.hits.length===0&&n.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),l.innerHTML=h(r.hits),m=new f(".gallery-link",{captionDelay:250,captionsData:"alt"})}).catch(r=>{n.error({title:"",message:r.message,position:"topRight"})}).finally(()=>{u.reset(),c.classList.remove("loader"),m.refresh()})}function p(i){const s="42343385-eb6c059581ee4f8bb4ee68ac0",r="https://pixabay.com/api/",a=new URLSearchParams({key:s,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${r}?${a}`).then(e=>{if(!e.ok)throw new Error(`Error: ${e.status}`);return e.json()})}function h(i){return i.map(({webformatURL:s,largeImageURL:r,tags:a,likes:e,views:t,comments:o,downloads:d})=>`
  <li class="gallery-item">
  <a href="${r}" class="gallery-link">
      <img src="${s}" 
           alt="${a}" 
           class="gallery-image"
           loading="lazy" 
           width="250"
           height="250">
      <div>
        <div class="image-item">Likes <span class="image-elem">${e}</span></div>
        <div class="image-item">Views <span class="image-elem">${t}</span></div>
        <div class="image-item">Comments <span class="image-elem">${o}</span></div>
        <div class="image-item">Downloads <span class="image-elem">${d}</span></div>
  </div>
</a>
</li>
`).join("")}
//# sourceMappingURL=commonHelpers.js.map
