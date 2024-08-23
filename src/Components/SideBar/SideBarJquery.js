import $ from 'jquery';


//first-nested-menu

$(function () {
  $(".menu ul li ul").hide();
  $(".menu > ul > li > a").on("click", function (e) {
    e.preventDefault();

    $(this).toggleClass('arrow');

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


//third-nested-menu

$(function () {
  $(".menu > ul > li > ul > li > ul > li > ul > li > a").on("click", function (e) {
    e.preventDefault();

    $(this).next("ul").slideToggle();

    $(".menu ul ul ul ul ul").not($(this).next("ul")).slideUp();
  });
});
















/*$(function () {
  $(".navbar > ul > li").on("click", function (e) {
    e.preventDefault()

    $(this).find("ul").slideToggle();

    $(".navbar ul ul").not($(this).next("ul")).slideUp();
  })
})*/

/*$(function () {
  $("ul ul").hide(); // Hide all sub-lists initially

  $("ul li").on("click", function (e) {
    $(this).children("ul").slideToggle(); 
    $(this).siblings().children("ul").slideUp();
    e.stopPropagation(); 
  });
})*/







