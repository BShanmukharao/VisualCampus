import $ from 'jquery';
import { useSelector } from 'react-redux';
import { Store } from '../Redux/Store';

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

$(function () {
  const aboveArrowId = document.getElementById("Header-Above-Arrow-Id");
  const belowArrowId = document.getElementById('Header-Below-Arrow-Id');
  const closeSideBarId = document.getElementById("close-sidebar-id");
  const sidebarId = document.getElementById('SideBar-Id');

  $(aboveArrowId).on("click", function (e) {
    e.preventDefault();
    $(sidebarId).toggleClass('addAboveStyleClass');
  });

  $(belowArrowId).on('click', function (e) {
    e.preventDefault();
    $(sidebarId).toggleClass('addBelowStylesClass');
  })
  $(closeSideBarId).on('click', function (e) {
    e.preventDefault();
    $(sidebarId).removeClass("addBelowStylesClass");
  })

  

  /*$(arrowId).on("click", function (e) {
    //sidebarId.toggleClass.toggle('addStyleclass')
    /*const isSidebarVisible = Store.getState().toggle.value;
    if (isSidebarVisible) {
      $(sidebarId).removeClass('addStyleclass');
    } else {
      $(sidebarId).addClass('addStyleclass');
    }
  })*/
})


