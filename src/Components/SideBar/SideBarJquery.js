import $ from 'jquery';


//first-nested-menu

$(function () {
  $(".menu ul li ul").hide();
  $(".menu > ul > li > a").on("click", function (e) {
    e.preventDefault();
  
    //$('.menu > ul > li > a > .arrow').toggleClass("rotate")
    
    $(this).next("ul").slideToggle();

    $(".menu ul ul").not($(this).next("ul")).slideUp();
  });
});



//second-nested-menu 

$(function () {
  $(".menu > ul > li > ul > li > a").on("click", function (e) {
    e.preventDefault();

    $(this).next("ul").slideToggle();

    $(".menu ul ul ul").not($(this).next("ul")).slideUp();
  });
});



//third-nested-menu

$(function () {
  $(".menu > ul > li > ul > li > ul > li > a").on("click", function (e) {
    e.preventDefault();

    $(this).next("ul").slideToggle();

    $(".menu ul ul ul ul").not($(this).next("ul")).slideUp();
  });
});


//forth-nested-menu

$(function () {
  $(".menu > ul > li > ul > li > ul > li > ul > li > a").on("click", function (e) {
    e.preventDefault();

    $(this).next("ul").slideToggle();

    $(".menu ul ul ul ul ul").not($(this).next("ul")).slideUp();
  });
});

//fifth-nested-menu

$(function () {
  $(".menu > ul > li > ul > li > ul > li > ul > li > ul > li > a").on("click", function (e) {
    e.preventDefault();

    $(this).next("ul").slideToggle();

    $(".menu ul ul ul ul ul ul").not($(this).next("ul")).slideUp();
  });
});


