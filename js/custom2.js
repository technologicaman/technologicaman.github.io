// import * as THREE from "https://cdn.skypack.dev/three@0.125.0";
// import { GLTFLoader } from "https://cdn.skypack.dev/three@0.125.0/examples/jsm/loaders/GLTFLoader";
// import { OrbitControls } from "https://cdn.skypack.dev/three@0.125.0/examples/jsm/controls/OrbitControls.js";

// Percentage Increment Animation

const perfData = window.performance.timing,
    EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
    time = parseInt((EstimatedTime / 1000) % 60) * 100;

var PercentageID = $(".loading__timer"),
    start = 0,
    end = 100,
    durataion = time;
animateValue(PercentageID, start, end, durataion);

function animateValue(id, start, end, duration) {

    var range = end - start,
        current = start,
        increment = end > start ? 1 : -1,
        stepTime = Math.abs(Math.floor(duration / range)),
        obj = $(id);

    var timer = setInterval(function () {
        current += increment;
        $(obj).text(current);
        //obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
    $("body").removeClass("invisible");
}

// Fading Out Loadbar on Finised


// luxy.init();

gsap.registerPlugin(ScrollTrigger);

//  three js

setTimeout(function () {
    $('.loader__bg').fadeOut(300);

}, time + 1000);


// gsap.timeline({
//     scrollTrigger: {
//         trigger: ".main_banner",
//         start: "top 0%",
//         end: "bottom 0%",
//         scrub: true,
//     }
// })
//     .to(".banner_content_h1", { y: -80, }, 0)


const quotes = document.querySelectorAll(".banner_content_h1");

function setupSplits() {
  quotes.forEach(quote => {
    // Reset if needed
    if(quote.anim) {
      quote.anim.progress(1).kill();
      quote.split.revert();
    }

    quote.split = new SplitText(quote, { 
      type: "lines,words,chars",
      linesClass: "split-line"
    });

    // Set up the anim
    quote.anim = gsap.from(quote.split.chars, {
      scrollTrigger: {
        trigger: quote,
        toggleActions: "restart pause resume reverse",
        start: "top 20%",
      },
      duration: 0.8, 
      ease: "circ.out", 
      y: 50, 
      stagger: 0.05,
    });
  });
}

ScrollTrigger.addEventListener("refresh", setupSplits);
setupSplits();
