import $ from 'jquery';


//first-nested-menu

$(function () {

  //$(".menu ul li ul").hide();     // initially hide all tags inside main-menu

  $(".menu > ul > li > a").on("click", function (e) {

    e.preventDefault();


    $(this).find('.arrow').toggleClass("rotate");     // Toggle the "rotate" class on the clicked arrow


    $('.menu > ul > li > a > .arrow').not($(this).find('.arrow')).removeClass("rotate");    // Remove the "rotate" class from all other arrows


    $(this).next("ul").slideToggle();     // Toggle the "ul" items on the clicked menu


    $(".menu ul ul").not($(this).next("ul")).slideUp();     // Remove the "ul" items from all other menus
  });
});



//second-nested-menu 

$(function () {
  $(".menu > ul > li > ul > li > a").on("click", function (e) {

    e.preventDefault();


    $(this).find('.arrow').toggleClass("rotate");     // Toggle the "rotate" class on the clicked arrow


    $('.menu > ul > li > ul > li > a .arrow').not($(this).find(".arrow")).removeClass("rotate");    // Remove the "rotate" class from all other arrows


    $(this).next("ul").slideToggle();     // Toggle the "ul" items on the clicked menu


    $(".menu ul ul ul").not($(this).next("ul")).slideUp();     // Remove the "ul" items from all other menus
  });
});



//third-nested-menu

$(function () {
  $(".menu > ul > li > ul > li > ul > li > a").on("click", function (e) {

    e.preventDefault();


    $(this).find('.arrow').toggleClass("rotate");     // Toggle the "rotate" class on the clicked arrow


    $('.menu > ul > li > ul > li > ul > li > a .arrow').not($(this).find(".arrow")).removeClass("rotate");    // Remove the "rotate" class from all other arrows


    $(this).next("ul").slideToggle();     // Toggle the "ul" items on the clicked menu


    $(".menu ul ul ul ul").not($(this).next("ul")).slideUp();     // Remove the "ul" items from all other menus
  });
});



//forth-nested-menu

$(function () {
  $(".menu > ul > li > ul > li > ul > li > ul > li > a").on("click", function (e) {

    e.preventDefault();


    $(this).find('.arrow').toggleClass("rotate");     // Toggle the "rotate" class on the clicked arrow


    $('.menu > ul > li > ul > li > ul > li > ul > li > a .arrow').not($(this).find(".arrow")).removeClass("rotate");    // Remove the "rotate" class from all other arrows


    $(this).next("ul").slideToggle();     // Toggle the "ul" items on the clicked menu


    $(".menu ul ul ul ul ul").not($(this).next("ul")).slideUp();     // Remove the "ul" items from all other menus
  });
});



//fifth-nested-menu

$(function () {
  $(".menu > ul > li > ul > li > ul > li > ul > li > ul > li > a").on("click", function (e) {

    e.preventDefault();
    

    $(this).find('.arrow').toggleClass("rotate");     // Toggle the "rotate" class on the clicked arrow


    $('.menu > ul > li > ul > li > ul > li > ul > li > ul > li > a .arrow').not($(this).find(".arrow")).removeClass("rotate");    // Remove the "rotate" class from all other arrows


    $(this).next("ul").slideToggle();     // Toggle the "ul" items on the clicked menu

    $(".menu ul ul ul ul ul ul").not($(this).next("ul")).slideUp();     // Remove the "ul" items from all other menus
  });
});


