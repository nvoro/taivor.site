/* ==========================================================
   TAIWOR
   SCRIPT.JS
========================================================== */


/* ==========================================================
   LOADER
========================================================== */

window.addEventListener("load",()=>{

    const loader = document.getElementById("loader");

    setTimeout(()=>{

        loader.classList.add("hide");

    },800);

});



/* ==========================================================
   CUSTOM CURSOR
========================================================== */

const cursor = document.querySelector(".cursor");


document.addEventListener("mousemove",(e)=>{

    cursor.style.left = e.clientX + "px";

    cursor.style.top = e.clientY + "px";

});



const hoverElements = document.querySelectorAll(
"a, button, .card, .feature-grid div"
);


hoverElements.forEach(element=>{


    element.addEventListener("mouseenter",()=>{

        cursor.classList.add("active");

    });


    element.addEventListener("mouseleave",()=>{

        cursor.classList.remove("active");

    });


});



/* ==========================================================
   SCROLL REVEAL
========================================================== */


const revealElements =
document.querySelectorAll(
".card, .feature-grid div, .stats div, .about, .contact"
);



const observer =
new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


    if(entry.isIntersecting){


        entry.target.classList.add("show");


    }


});


},
{

threshold:0.15

});



revealElements.forEach(el=>{

    el.classList.add("fade-in");

    observer.observe(el);

});



/* ==========================================================
   COUNTERS
========================================================== */


const counters =
document.querySelectorAll(".counter");



let started = false;



function startCounters(){


if(started) return;


started=true;



counters.forEach(counter=>{


    const target =
    Number(counter.dataset.target);


    let current = 0;


    const speed =
    target / 100;



    const update = ()=>{


        current += speed;



        if(current < target){


            counter.innerText =
            current.toFixed(
                target % 1 === 0 ? 0 : 2
            );


            requestAnimationFrame(update);


        }

        else{


            counter.innerText =
            target;


        }


    };


    update();


});


}





const stats =
document.querySelector(".stats");



if(stats){


const statsObserver =
new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


startCounters();


}


});


},
{

threshold:.5

});



statsObserver.observe(stats);


}



/* ==========================================================
   NAVBAR EFFECT
========================================================== */


const header =
document.querySelector("header");



window.addEventListener("scroll",()=>{


if(window.scrollY > 50){


header.style.background =
"rgba(0,0,0,.85)";


}

else{


header.style.background =
"rgba(0,0,0,.55)";


}


});



/* ==========================================================
   SMOOTH LINKS
========================================================== */


document.querySelectorAll(
'a[href^="#"]'
)
.forEach(link=>{


link.addEventListener(
"click",
function(e){


const target =
document.querySelector(
this.getAttribute("href")
);



if(target){


e.preventDefault();


target.scrollIntoView({

behavior:"smooth"

});


}



});


});



/* ==========================================================
   CARD TILT EFFECT
========================================================== */


const cards =
document.querySelectorAll(
".card"
);



cards.forEach(card=>{


card.addEventListener(
"mousemove",
(e)=>{


const rect =
card.getBoundingClientRect();



const x =
e.clientX - rect.left;


const y =
e.clientY - rect.top;



const rotateX =
(y - rect.height / 2)
/ 20;



const rotateY =
(rect.width / 2 - x)
/ 20;



card.style.transform =

`
perspective(800px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-10px)
`;



});



card.addEventListener(
"mouseleave",
()=>{


card.style.transform =
"";


});


});



/* ==========================================================
   RANDOM BACKGROUND PARTICLES
========================================================== */


const hero =
document.querySelector(".hero");



for(let i=0;i<25;i++){


const particle =
document.createElement("span");


particle.className =
"particle";



particle.style.left =
Math.random()*100+"%";



particle.style.top =
Math.random()*100+"%";



particle.style.animationDelay =
Math.random()*5+"s";



hero.appendChild(particle);


}
