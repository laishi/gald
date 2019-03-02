$(document).ready(function() {

    var svgBox = document.getElementById("svgBox");
    var photo = document.getElementById("photo");
    var navCurve = document.getElementById("navCurve");
    var textCurve = document.getElementById("textCurve");


    var last_known_scroll_position = 0;
    var curveRate = 1.8;
    var ticking = false;
    var curveValue;
    var rate = 1.8;
    var sliderScrollHeight;

    var svgScrollH = parseInt(photo.getAttribute("d").split(" ")[5]);
    console.log("svgScrollH: " + svgScrollH)
    var fixHeaderHeight = 150;
    var windowW = window.innerWidth;
    var windowHS = 960;
    var svgBaseHeight = window.innerHeight / rate;

    var homeHeight = $(".galdhome").height();



    var homekey = $(".navHome").attr("keyPoints").split(";")[0] - 0.0;
    var teamkey = $(".navTeam").attr("keyPoints").split(";")[0] - 0.0;
    var workkey = $(".navWork").attr("keyPoints").split(";")[0] - 0.0;
    var contactkey = $(".navContact").attr("keyPoints").split(";")[0] - 0.0;

    // var homekey = 0.35;
    // var teamkey = 0.42;
    // var workkey = 0.58;
    // var contactkey = 0.65;


    var logopos = $(".galdCicle").offset().top
    $(".sliders").height(800);



    var headerHeight = svgBox.getBBox().height


    TweenMax.from(".navHome", 5, { attr: { keyPoints: '0.0;0.0' }, ease: Elastic.easeOut.config(0.6, 0.5), y: -500 });
    TweenMax.from(".navTeam", 5, { attr: { keyPoints: '0.0;0.0' }, ease: Elastic.easeOut.config(0.6, 0.5), y: -500 });
    TweenMax.from(".navWork", 5, { attr: { keyPoints: '1.0;1.0' }, ease: Elastic.easeOut.config(0.6, 0.5), y: -500 });
    TweenMax.from(".navContact", 5, { attr: { keyPoints: '1.0;1.0' }, ease: Elastic.easeOut.config(0.6, 0.5), y: -500 });









    function scrollEvent(scrollPos) {

        var scrollRate = scrollPos / homeHeight;
        var homepos = homekey - scrollRate;
        var teamkpos = teamkey - scrollRate / 2;
        var workpos = workkey + scrollRate / 2;
        var contactpos = contactkey + scrollRate;

        var logopos = $(".galdCicle").offset().top + 60
        $(".sliders").height(logopos);
        console.log("logopos: " + logopos)


        if (scrollPos < 660) {
            $(".navHome").attr("keyPoints", homepos + ";" + homepos);
            $(".navTeam").attr("keyPoints", teamkpos + ";" + teamkpos);
            $(".navWork").attr("keyPoints", workpos + ";" + workpos);
            $(".navContact").attr("keyPoints", contactpos + ";" + contactpos);
        }






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
            textCurve.setAttribute(
                "d",
                "M 0 " + 550 + " Q " + windowHS + " " + curveValue + " 1920 550"
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





    // icon hover

    $('.navHomeGroup').hover(navHomeGroupIn, showGald);

    function navHomeGroupIn() {
        console.log($('this'));
        console.log($('.galdText')[0].innerHTML = '回 到 首 页')

    }

    $('.navTeamGroup').hover(navTeamGroupIn, showGald);

    function navTeamGroupIn() {
        console.log($('.galdText')[0].innerHTML = '优秀的团队 确保您的设计出彩')

    }

    $('.navWorkGroup').hover(navWorkGroupIn, showGald);

    function navWorkGroupIn() {
        console.log($('.galdText')[0].innerHTML = '工作案例展示')

    }

    $('.navContactGroup').hover(navContactGroupIn, showGald);

    function navContactGroupIn() {
        console.log($('.galdText')[0].innerHTML = 'Phone: 13640566324  Email:504677424@qq.com')

    }


    function showGald() {
        console.log($('.galdText')[0].innerHTML = ' 光 爱 照 明 设 计')
    }





    // $('.galdLogo').hover(handlerIn, handlerOut);

    function handlerIn() {
        TweenMax.to(".navHome", 2, { attr: { keyPoints: '0.398;0.398' }, ease: Elastic.easeOut.config(1.3, 0.3), y: -500 });
        TweenMax.to(".navTeam", 2, { attr: { keyPoints: '0.445;0.445' }, ease: Elastic.easeOut.config(1.3, 0.3), y: -500 });
        TweenMax.to(".navWork", 2, { attr: { keyPoints: '0.555;0.555' }, ease: Elastic.easeOut.config(1.3, 0.3), y: -500 });
        TweenMax.to(".navContact", 2, { attr: { keyPoints: '0.602;0.602' }, ease: Elastic.easeOut.config(1.3, 0.3), y: -500 });
    }


    function handlerOut() {
        TweenMax.to(".navHome", 2, { attr: { keyPoints: '0.35;0.35' }, ease: Elastic.easeOut.config(1.3, 0.3), y: -500 });
        TweenMax.to(".navTeam", 2, { attr: { keyPoints: '0.42;0.42' }, ease: Elastic.easeOut.config(1.3, 0.3), y: -500 });
        TweenMax.to(".navWork", 2, { attr: { keyPoints: '0.58;0.58' }, ease: Elastic.easeOut.config(1.3, 0.3), y: -500 });
        TweenMax.to(".navContact", 2, { attr: { keyPoints: '0.65;0.65' }, ease: Elastic.easeOut.config(1.3, 0.3), y: -500 });
    }






})