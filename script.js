/*====================================================
CIETCAB
script.js
====================================================*/


/*==============================
PRELOADER
==============================*/

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    setTimeout(() => {

        preloader.style.opacity = "0";

        preloader.style.visibility = "hidden";

    }, 900);

});



/*==============================
HEADER
==============================*/

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.classList.add("scrolled");

    }

    else {

        header.classList.remove("scrolled");

    }

});



/*==============================
PARALLAX HERO
==============================*/

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    hero.style.backgroundPositionY = window.scrollY * .35 + "px";

});



/*==============================
ÓRBITA
==============================*/

const orbit = document.querySelector(".orbit");

let angle = 0;

function rotateOrbit(){

    angle += 0.08;

    orbit.style.transform =

    `rotate(${angle}deg)`;

}

setInterval(rotateOrbit,20);



/*==============================
LOGO CENTRAL
==============================*/

const centerLogo = document.querySelector(".centerLogo");

let pulse = 0;

setInterval(()=>{

    pulse+=0.05;

    const scale = 1 + Math.sin(pulse)*0.03;

    centerLogo.style.transform =
    `translate(-50%,-50%) scale(${scale})`;

},25);




/*==============================
FADE IN
==============================*/

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity=1;

entry.target.style.transform="translateY(0px)";

}

});

},{threshold:.15});

document.querySelectorAll("section").forEach(sec=>{

sec.style.opacity=0;

sec.style.transform="translateY(80px)";

sec.style.transition="1s";

observer.observe(sec);

});




/*==============================
BOTÕES
==============================*/

document.querySelectorAll("a[href^='#']").forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const destino=document.querySelector(this.getAttribute("href"));

window.scroll({

top:destino.offsetTop-80,

behavior:"smooth"

});

});

});



/*==============================
EFEITO 3D
==============================*/

const cards=document.querySelectorAll(".cardPilar");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=((x/rect.width)-0.5)*12;

const rotateX=((y/rect.height)-0.5)*-12;

card.style.transform=

`perspective(900px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.04)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform=

"perspective(900px) rotateX(0deg) rotateY(0deg)";

});

});



/*==============================
MENU MOBILE
==============================*/

const menu=document.querySelector(".menuMobile");

const nav=document.querySelector("nav");

menu.addEventListener("click",()=>{

nav.classList.toggle("ativo");

});



/*==============================
ESTRELAS
==============================*/

const particles=document.querySelector(".heroParticles");

for(let i=0;i<80;i++){

let estrela=document.createElement("span");

estrela.classList.add("star");

estrela.style.left=Math.random()*100+"%";

estrela.style.top=Math.random()*100+"%";

estrela.style.animationDelay=Math.random()*5+"s";

estrela.style.animationDuration=(3+Math.random()*6)+"s";

particles.appendChild(estrela);

}