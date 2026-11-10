/* ==========================================
   SAMPAHKU HARTAKU - JAVASCRIPT AESTHETIC
   Vanilla JS | Tanpa library | GitHub Pages
   ========================================== */

(() => {
"use strict";

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

/* 1. TAMBAHAN STYLE */
const css = `
html { scroll-behavior:smooth; scroll-padding-top:90px; }
body { overflow-x:hidden; transition:background .35s,color .35s; }

.js-progress {
 position:fixed;top:0;left:0;width:0;height:4px;z-index:99999;
 background:linear-gradient(90deg,#176b45,#83d6a8,#d5f4df);
 box-shadow:0 0 12px #83d6a8;
}

.js-theme-toggle,.js-top {
 position:fixed;right:22px;width:48px;height:48px;
 border:0;border-radius:50%;cursor:pointer;color:white;
 background:linear-gradient(145deg,#176b45,#2b9b68);
 box-shadow:0 8px 24px rgba(23,107,69,.28);
 z-index:9998;font-size:20px;transition:.25s;
}
.js-top {bottom:22px;opacity:0;visibility:hidden;transform:translateY(12px);}
.js-top.show {opacity:1;visibility:visible;transform:translateY(0);}
.js-theme-toggle:hover,.js-top:hover {transform:translateY(-4px);}

body.eco-dark {
 background:#101b16!important;color:#e7f2eb!important;
}
body.eco-dark .card,
body.eco-dark .product-card,
body.eco-dark .member,
body.eco-dark .subject,
body.eco-dark .detail-box,
body.eco-dark .math-box,
body.eco-dark .report,
body.eco-dark .contact-container,
body.eco-dark .problem,
body.eco-dark .section:not(.hero) {
 background-color:#192820!important;color:#e7f2eb!important;
 border-color:rgba(184,232,207,.13)!important;
}
body.eco-dark p,body.eco-dark li,
body.eco-dark h1,body.eco-dark h2,
body.eco-dark h3,body.eco-dark h4,
body.eco-dark label,body.eco-dark summary,
body.eco-dark .navbar nav a {color:#e7f2eb;}
body.eco-dark input,body.eco-dark textarea {
 background:#102018!important;color:white!important;
 border-color:#385c48!important;
}
body.eco-dark footer {background:#0b1510!important;}

.eco-orb {
 position:fixed;z-index:-1;pointer-events:none;
 width:280px;height:280px;border-radius:50%;
 filter:blur(75px);opacity:.17;background:#70d69b;
 animation:ecoFloat 15s ease-in-out infinite alternate;
}
.orb-one {top:15%;left:-130px;}
.orb-two {right:-150px;top:58%;background:#a4d9c0;animation-delay:-6s;}
@keyframes ecoFloat {
 from {transform:translate(0,0) scale(.9);}
 to {transform:translate(55px,-35px) scale(1.2);}
}

.js-reveal {
 opacity:0;transform:translateY(24px);
 transition:opacity .7s ease,transform .7s ease;
}
.js-reveal.is-visible {opacity:1;transform:translateY(0);}

.card,.product-card,.member,.detail-box,.math-box,.report {
 transition:transform .3s,box-shadow .3s;
}
.card:hover,.product-card:hover,.member:hover {
 transform:translateY(-7px);
 box-shadow:0 18px 38px rgba(23,107,69,.15);
}
.btn,button,.product-info a {
 transition:transform .22s,box-shadow .22s;
}
.btn:hover,button:hover,.product-info a:hover {
 transform:translateY(-3px);
 box-shadow:0 10px 24px rgba(23,107,69,.2);
}
.btn:active,button:active {transform:scale(.97);}

.navbar nav a.js-active {
 color:#218653!important;position:relative;
}
.navbar nav a.js-active::after {
 content:"";position:absolute;left:0;right:0;bottom:-7px;
 height:2px;border-radius:4px;background:currentColor;
}

.js-toast {
 position:fixed;left:50%;bottom:25px;z-index:100000;
 transform:translate(-50%,20px);opacity:0;pointer-events:none;
 padding:13px 19px;border-radius:14px;color:white;
 background:#183c2a;box-shadow:0 12px 35px rgba(0,0,0,.2);
 font:500 14px/1.4 Arial;max-width:90vw;text-align:center;
 transition:.3s;
}
.js-toast.show {opacity:1;transform:translate(-50%,0);}

.js-lightbox {
 position:fixed;inset:0;z-index:100001;display:grid;
 place-items:center;padding:25px;background:rgba(5,15,10,.88);
 opacity:0;visibility:hidden;transition:.25s;cursor:zoom-out;
}
.js-lightbox.open {opacity:1;visibility:visible;}
.js-lightbox img {
 max-width:min(100%,1000px);max-height:85vh;
 object-fit:contain;border-radius:14px;
 box-shadow:0 20px 70px rgba(0,0,0,.4);
}
.js-lightbox-close {
 position:absolute;top:18px;right:24px;border:0;
 background:transparent;color:white;font-size:36px;
}
.product-card img,.problem-icon img,.math-box img {cursor:zoom-in;}

.js-menu-button {
 display:none;border:0;background:#176b45;color:white;
 border-radius:10px;padding:9px 12px;font-size:20px;
}
.js-field-error {
 border:1px solid #df6868!important;
 box-shadow:0 0 0 3px rgba(223,104,104,.12)!important;
}

@media(max-width:760px) {
 .js-menu-button {display:block;}
 .navbar nav {
  display:none!important;position:absolute;top:100%;left:0;right:0;
  padding:18px 8%;flex-direction:column;gap:17px!important;
  background:rgba(255,255,255,.95);backdrop-filter:blur(18px);
  box-shadow:0 15px 25px rgba(0,0,0,.09);
 }
 .navbar nav.mobile-open {display:flex!important;}
 .navbar nav a {width:fit-content;}
 .js-theme-toggle {right:16px;bottom:78px;}
 .js-top {right:16px;bottom:16px;}
}
@media(prefers-reduced-motion:reduce) {
 *,*::before,*::after {
  animation-duration:.01ms!important;
  transition-duration:.01ms!important;
 }
 .js-reveal {opacity:1;transform:none;}
}
`;

const style = document.createElement("style");
style.textContent = css;
document.head.appendChild(style);

/* 2. MEMBUAT KOMPONEN */
const progress = document.createElement("div");
progress.className = "js-progress";
document.body.appendChild(progress);

const themeButton = document.createElement("button");
themeButton.className = "js-theme-toggle";
themeButton.type = "button";
document.body.appendChild(themeButton);

const topButton = document.createElement("button");
topButton.className = "js-top";
topButton.type = "button";
topButton.textContent = "↑";
document.body.appendChild(topButton);

const toast = document.createElement("div");
toast.className = "js-toast";
toast.setAttribute("role","status");
document.body.appendChild(toast);

const orb1 = document.createElement("div");
orb1.className = "eco-orb orb-one";
const orb2 = document.createElement("div");
orb2.className = "eco-orb orb-two";
document.body.append(orb1,orb2);

let toastTimer;
function showToast(message) {
 toast.textContent = message;
 toast.classList.add("show");
 clearTimeout(toastTimer);
 toastTimer = setTimeout(() => toast.classList.remove("show"),2600);
}




/* 3. THEME SYSTEM */

const savedTheme = localStorage.getItem("sampahku-theme");
const savedGlass = localStorage.getItem("sampahku-glass");

if (savedTheme === "dark") {
    document.body.classList.add("eco-dark");
}

if (savedGlass === "off") {
    document.body.classList.add("glass-off");
}

function updateTheme() {
    const dark = document.body.classList.contains("eco-dark");

    themeButton.textContent = dark ? "☀️" : "🌙";
    themeButton.title = dark ? "Light Mode" : "Dark Mode";
}

updateTheme();

themeButton.addEventListener("click", () => {
    document.body.classList.toggle("eco-dark");

    const dark = document.body.classList.contains("eco-dark");

    localStorage.setItem(
        "sampahku-theme",
        dark ? "dark" : "light"
    );

    updateTheme();

    showToast(
        dark ? "Emerald Night Mode 🌙" : "Fresh Sage Mode ☀️"
    );
});

/* LIQUID GLASS SWITCH */

const glassButton = document.createElement("button");

glassButton.className = "js-glass-toggle";
glassButton.type = "button";
glassButton.setAttribute("aria-label", "Toggle Liquid Glass");

document.body.appendChild(glassButton);

function updateGlass() {
    const off = document.body.classList.contains("glass-off");

    glassButton.textContent = off ? "◻️" : "🫧";
    glassButton.title = off
        ? "Aktifkan Liquid Glass"
        : "Matikan Liquid Glass";

    $$(".navbar,.card,.product-card,.member,.detail-box,.math-box,.report,.contact-container,.problem")
        .forEach(element => {
            element.classList.toggle("liquid-glass", !off);
        });
}

updateGlass();

glassButton.addEventListener("click", () => {
    document.body.classList.toggle("glass-off");

    const off = document.body.classList.contains("glass-off");

    localStorage.setItem(
        "sampahku-glass",
        off ? "off" : "on"
    );

    updateGlass();

    showToast(
        off
            ? "Liquid Glass dimatikan"
            : "Liquid Glass diaktifkan 🫧"
    );
});


/* 4. MOBILE NAVBAR */
const navbar = $(".navbar");
const nav = navbar ? $("nav",navbar) : null;

if(navbar && nav) {
 const menuButton = document.createElement("button");
 menuButton.className = "js-menu-button";
 menuButton.type = "button";
 menuButton.textContent = "☰";
 navbar.insertBefore(menuButton,nav);

 menuButton.addEventListener("click",() => {
  const opened = nav.classList.toggle("mobile-open");
  menuButton.textContent = opened?"✕":"☰";
 });

 $$("a",nav).forEach(link => {
  link.addEventListener("click",() => {
   nav.classList.remove("mobile-open");
   menuButton.textContent = "☰";
  });
 });
}

/* 5. SCROLL PROGRESS DAN NAVBAR AKTIF */
const navLinks = $$(".navbar nav a");
const sections = navLinks
 .map(link => document.querySelector(link.getAttribute("href")))
 .filter(Boolean);

function onScroll() {
 const scrollTop = window.scrollY;
 const maxScroll = document.documentElement.scrollHeight-window.innerHeight;

 progress.style.width =
  (maxScroll>0?scrollTop/maxScroll*100:0)+"%";

 topButton.classList.toggle("show",scrollTop>450);

 let current = "";
 sections.forEach(section => {
  if(scrollTop>=section.offsetTop-150) current=section.id;
 });

 navLinks.forEach(link => {
  link.classList.toggle(
   "js-active",
   link.getAttribute("href")==="#"+current
  );
 });
}
window.addEventListener("scroll",onScroll,{passive:true});
onScroll();

topButton.addEventListener("click",() => {
 window.scrollTo({top:0,behavior:"smooth"});
});

/* 6. SCROLL REVEAL */
const revealTargets = $$(".section-title,.problem,.card,.product-card,.detail-box,.subject,.member,.contact-container,footer");

revealTargets.forEach((element,index) => {
 element.classList.add("js-reveal");
 if(element.matches(".card,.product-card,.member")) {
  element.style.transitionDelay=(index%4)*75+"ms";
 }
});

if("IntersectionObserver" in window) {
 const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
   if(entry.isIntersecting) {
    entry.target.classList.add("is-visible");
    observer.unobserve(entry.target);
   }
  });
 },{threshold:.12});

 revealTargets.forEach(element => observer.observe(element));
} else {
 revealTargets.forEach(element => element.classList.add("is-visible"));
}
/* 7. IMAGE LIGHTBOX */
const lightbox = document.createElement("div");
lightbox.className = "js-lightbox";
lightbox.innerHTML = `
 <button class="js-lightbox-close" type="button">×</button>
 <img alt="Pratinjau gambar">
`;
document.body.appendChild(lightbox);

const lightboxImage = $("img",lightbox);

function closeLightbox() {
 lightbox.classList.remove("open");
 document.body.style.overflow="";
}

$$(".product-card img,.problem-icon img,.math-box img").forEach(img => {
 img.addEventListener("click",() => {
  lightboxImage.src=img.currentSrc||img.src;
  lightboxImage.alt=img.alt||"Pratinjau gambar";
  lightbox.classList.add("open");
  document.body.style.overflow="hidden";
 });
});

lightbox.addEventListener("click",event => {
 if(event.target===lightbox ||
    event.target.closest(".js-lightbox-close")) {
  closeLightbox();
 }
});

document.addEventListener("keydown",event => {
 if(event.key==="Escape") closeLightbox();
});

/* 8. ACCORDION DETAILS */
$$("details").forEach(detail => {
 detail.addEventListener("toggle",() => {
  if(!detail.open) return;

  const group=detail.closest(".subject")||detail.parentElement;

  $$("details[open]",group).forEach(other => {
   if(other!==detail) other.open=false;
  });
 });
});

/* 9. FORM KONTAK */
const contactForm=$(".contact-container form");

if(contactForm) {
 const nameInput=$('input[type="text"]',contactForm);
 const emailInput=$('input[type="email"]',contactForm);
 const messageInput=$("textarea",contactForm);
 const sendButton=$('button[type="button"],button[type="submit"]',contactForm);

 [nameInput,emailInput,messageInput].filter(Boolean).forEach(field => {
  field.addEventListener("input",() => {
   field.classList.remove("js-field-error");
  });
 });

 if(sendButton) {
  sendButton.addEventListener("click",event => {
   event.preventDefault();

   const fields=[nameInput,emailInput,messageInput].filter(Boolean);
   let valid=true;

   fields.forEach(field => {
    const empty=!field.value.trim();
    const invalidEmail=field===emailInput &&
     !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim());

    field.classList.toggle("js-field-error",empty||invalidEmail);

    if(empty||invalidEmail) valid=false;
   });

   if(!valid) {
    showToast("Periksa nama, email, dan pesan kamu ya.");
    return;
   }

   const subject=encodeURIComponent("Pesan dari website SampahKu");
   const body=encodeURIComponent(
    `Nama: ${nameInput.value.trim()}
Email: ${emailInput.value.trim()}

Pesan:
${messageInput.value.trim()}`
   );

   showToast("Membuka aplikasi email ✉️");
   window.location.href=`mailto:?subject=${subject}&body=${body}`;
  });
 }
}

/* 10. TAHUN FOOTER OTOMATIS */
const copyright=$(".copyright");

if(copyright) {
 copyright.textContent=copyright.textContent.replace(
  /©\s*\d{4}/,
  "© "+new Date().getFullYear()
 );
}

/* 11. SAPAAN */
window.addEventListener("load",() => {
 document.body.classList.add("page-ready");
 setTimeout(() => {
  showToast("Selamat datang di SampahKu Hartaku 🌱");
 },650);
},{once:true});

/* 12. MOUSE SPOTLIGHT */

const spotlight = document.createElement("div");
spotlight.className = "eco-spotlight";
document.body.appendChild(spotlight);

window.addEventListener("mousemove",event => {
 spotlight.style.setProperty("--mouse-x",event.clientX+"px");
 spotlight.style.setProperty("--mouse-y",event.clientY+"px");
});

/* 13. 3D TILT CARD */

if(window.matchMedia("(hover:hover) and (pointer:fine)").matches) {

 $$(".product-card,.card,.member").forEach(card => {

  card.addEventListener("mousemove",event => {
   const rect=card.getBoundingClientRect();

   const x=(event.clientX-rect.left)/rect.width;
   const y=(event.clientY-rect.top)/rect.height;

   const rotateX=(.5-y)*8;
   const rotateY=(x-.5)*8;

   card.style.transform=
    `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
  });

  card.addEventListener("mouseleave",() => {
   card.style.transform="";
  });

 });
}

/* 14. RIPPLE BUTTON */

$$("button,.btn").forEach(button => {

 button.style.position="relative";
 button.style.overflow="hidden";

 button.addEventListener("click",event => {

  const rect=button.getBoundingClientRect();
  const ripple=document.createElement("span");

  ripple.className="js-ripple";

  const size=Math.max(rect.width,rect.height);

  ripple.style.width=size+"px";
  ripple.style.height=size+"px";

  ripple.style.left=(event.clientX-rect.left-size/2)+"px";
  ripple.style.top=(event.clientY-rect.top-size/2)+"px";

  button.appendChild(ripple);

  setTimeout(() => ripple.remove(),650);

 });

});


/* 15. NAVBAR GLASS SAAT SCROLL */

window.addEventListener("scroll", () => {
    if (!navbar) return;

    const glassOff = document.body.classList.contains("glass-off");

    if (window.scrollY > 40 && !glassOff) {
        navbar.classList.add("liquid-glass");
    } else {
        navbar.classList.remove("liquid-glass");
    }
}, { passive: true });


/* 16. IMAGE HOVER EFFECT */

$$(".product-card img").forEach(img => {

 img.style.transition="transform .5s ease";

 img.addEventListener("mouseenter",() => {
  img.style.transform="scale(1.045)";
 });

 img.addEventListener("mouseleave",() => {
  img.style.transform="scale(1)";
 });

});

/* 17. CUSTOM TAB TITLE */

document.addEventListener("visibilitychange",() => {

 if(document.hidden) {
  document.title="Balik lagi ke SampahKu 🌱";
 } else {
  document.title="Sampahku Hartaku - Kelompok 11";
 }

});

/* 18. SMOOTH ANCHOR */

$$('a[href^="#"]').forEach(link => {

 link.addEventListener("click",event => {

  const target=$(link.getAttribute("href"));

  if(!target) return;

  event.preventDefault();

  target.scrollIntoView({
   behavior:"smooth",
   block:"start"
  });

 });

});
})();