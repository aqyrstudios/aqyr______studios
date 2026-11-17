// Set your real contact email here before publishing. Leave empty to hide the email link.
const contactEmail = "";
document.getElementById('year').textContent = new Date().getFullYear();
if(contactEmail){const link=document.getElementById('contact-link');link.href='mailto:'+contactEmail;link.hidden=false;document.getElementById('contact-placeholder').hidden=true;}
const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
let x=innerWidth/2,y=innerHeight/2,frame=0;
window.addEventListener('pointermove',e=>{if(reduced.matches || e.pointerType==='touch')return;x=e.clientX;y=e.clientY;if(!frame)frame=requestAnimationFrame(()=>{document.documentElement.style.setProperty('--x',x+'px');document.documentElement.style.setProperty('--y',y+'px');document.body.classList.add('pointer-active');frame=0;});},{passive:true});
document.documentElement.addEventListener('pointerleave',()=>document.body.classList.remove('pointer-active'));
