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

