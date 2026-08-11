/*====================================================*
* CIET
* script.js
*====================================================*/


/*====================================================*
* PRELOADER
*====================================================*/

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    if (preloader) {

        setTimeout(() => {

            preloader.style.opacity = "0";
            preloader.style.visibility = "hidden";

        }, 900);

    }

});



/*====================================================*
* HEADER
*====================================================*/

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 40) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});



/*====================================================*
* PARALLAX HERO
*====================================================*/

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    if (!hero) return;

    hero.style.backgroundPositionY =
        window.scrollY * 0.35 + "px";

});



/*====================================================*
* FADE IN DAS SEÇÕES
*====================================================*/

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0px)";

            }

        });

    },

    {
        threshold: 0.15
    }

);


document.querySelectorAll("section").forEach(section => {

    section.style.opacity = "0";

    section.style.transform =
        "translateY(80px)";

    section.style.transition =
        "opacity 1s ease, transform 1s ease";

    observer.observe(section);

});



/*====================================================*
* BOTÕES / SCROLL SUAVE
*====================================================*/

document
    .querySelectorAll("a[href^='#']")
    .forEach(anchor => {

        anchor.addEventListener("click", function(e) {

            const id =
                this.getAttribute("href");

            const destino =
                document.querySelector(id);

            if (!destino) return;

            e.preventDefault();

            window.scrollTo({

                top:
                    destino.offsetTop - 80,

                behavior:
                    "smooth"

            });

        });

    });



/*====================================================*
* EFEITO 3D DOS CARDS
*====================================================*/

const cards =
    document.querySelectorAll(".cardPilar");


cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect =
            card.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        const rotateY =
            ((x / rect.width) - 0.5) * 12;

        const rotateX =
            ((y / rect.height) - 0.5) * -12;


        card.style.transform =

            `perspective(900px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             scale(1.04)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(900px) rotateX(0deg) rotateY(0deg)";

    });

});



/*====================================================*
* MENU MOBILE
*====================================================*/

const menu =
    document.querySelector(".menuMobile");

const nav =
    document.querySelector("nav");


if (menu && nav) {

    menu.addEventListener("click", () => {

        nav.classList.toggle("ativo");

    });

}



/*====================================================*
* ESTRELAS DO HERO
*====================================================*/

const particles =
    document.querySelector(".heroParticles");


if (particles) {

    for (let i = 0; i < 80; i++) {

        const estrela =
            document.createElement("span");


        estrela.classList.add("star");


        estrela.style.left =
            Math.random() * 100 + "%";


        estrela.style.top =
            Math.random() * 100 + "%";


        estrela.style.animationDelay =
            Math.random() * 5 + "s";


        estrela.style.animationDuration =
            (3 + Math.random() * 6) + "s";


        particles.appendChild(estrela);

    }

}



/*====================================================*
* SISTEMA ORBITAL CIET
*====================================================*
*
* Terra permanece fixa no centro.
*
* Os quatro elementos ficam presos
* ao orbitTrack.
*
* O orbitTrack gira ao redor da Terra.
*
* Cada elemento faz uma contra-rotação
* através do CSS para permanecer legível.
*
*====================================================*/


const earthSystem =
    document.querySelector(".earthSystem");

const orbitTrack =
    document.querySelector(".orbitTrack");


if (earthSystem && orbitTrack) {


    /*==============================================*
    * VELOCIDADE DA ÓRBITA
    *==============================================*/

    let orbitAngle = 0;


    /*

        Quanto menor o valor,
        mais lenta será a órbita.

        0.025 = muito suave
        0.035 = velocidade atual
        0.05  = mais rápida

    */

    const orbitSpeed = 0.035;



    /*==============================================*
    * ANIMAÇÃO DA ÓRBITA
    *==============================================*/

    function animateEarthOrbit() {

        orbitAngle += orbitSpeed;


        /*
            O CSS já posiciona o orbitTrack
            exatamente no centro da Terra.

            Aqui apenas alteramos a rotação.
        */

        orbitTrack.style.transform =

            `translate(-50%, -50%)
             rotate(${orbitAngle}deg)`;


        requestAnimationFrame(
            animateEarthOrbit
        );

    }


    /*==============================================*
    * INICIA A ÓRBITA
    *==============================================*/

    animateEarthOrbit();

}