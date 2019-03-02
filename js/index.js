$(document).ready(function () {

    var photo = document.getElementById("photo");
    var navCurve = document.getElementById("navCurve");


    var last_known_scroll_position = 0;
    var defaultCurveValue = 1000;
    var curveRate = 1.5;
    var ticking = false;
    var curveValue;
    var rate = 1.5;
    var sliderScrollHeight;

    var svgScrollH = parseInt(photo.getAttribute("d").split(" ")[5]);
    var fixHeaderHeight = 150;
    var windowW = window.innerWidth;
    var windowHS = windowW / 2;
    var svgBaseHeight = window.innerHeight / rate;
    function scrollEvent(scrollPos) {

        if (scrollPos >= 0 && scrollPos < window.innerHeight) {

            sliderScrollHeight = parseInt(photo.getAttribute("d").split(" ")[5]);
            var svgHeight = parseInt(photo.getAttribute("d").split(" ")[2]); //479
            curveValue = svgScrollH - parseFloat(scrollPos * curveRate);

            photo.setAttribute(
                "d",
                "M 0 " + svgHeight + " Q " + windowHS + " " + curveValue + " 1920 700 V 0 H 0 Z"
            );

            navCurve.setAttribute(
                "d",
                "M 0 " + svgHeight + " Q " + windowHS + " " + curveValue + " 1920 700"
            );

        }
    }



    window.addEventListener("scroll", function(e) {
        last_known_scroll_position = window.scrollY;

        if (!ticking) {
            window.requestAnimationFrame(function() {
                scrollEvent(last_known_scroll_position);
                ticking = false;
            });
        }

        ticking = true;
    });
















    



})