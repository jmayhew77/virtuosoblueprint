function openModal(videoUrl=null){
  const modal=document.getElementById('modal'); const mc=document.getElementById('modal-content');
  if(videoUrl){ mc.innerHTML = `<div style="position:relative;padding-top:56.25%"><iframe src="${videoUrl}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute;inset:0;border:0;width:100%;height:100%"></iframe></div>`; }
  else { mc.textContent=''; }
  modal.setAttribute('aria-hidden','false');
}
function closeModal(){ const m=document.getElementById('modal'); const mc=document.getElementById('modal-content'); m.setAttribute('aria-hidden','true'); mc.innerHTML=''; }
function submitEmail(e){ e.preventDefault(); const email=(e.target.querySelector('input[type="email"]')||{}).value||''; if(!email) return false; localStorage.setItem('hrm_lead',email); alert('Thanks! Check your inbox for details.'); return false; }
document.addEventListener('DOMContentLoaded',()=>{ const y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear(); initSliders(); });
function initSliders(){ document.querySelectorAll('[data-slider]').forEach((s)=>{ s.dataset.idx=0; }); }
function sliderNext(btn){ const s=btn.closest('[data-slider]'); const slides=s.querySelector('.slides'); let i=+s.dataset.idx; i=(i+1)%slides.children.length; s.dataset.idx=i; slides.style.transform=`translateX(-${i*100}%)`; }
function sliderPrev(btn){ const s=btn.closest('[data-slider]'); const slides=s.querySelector('.slides'); let i=+s.dataset.idx; i=(i-1+slides.children.length)%slides.children.length; s.dataset.idx=i; slides.style.transform=`translateX(-${i*100}%)`; }
