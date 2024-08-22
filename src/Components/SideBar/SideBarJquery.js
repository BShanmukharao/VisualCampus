import $ from 'jquery';

$(function () {
  $(".menu > ul > li > a").on("click", function (e) {
    e.preventDefault();

    // Toggle the submenu under the clicked item
    $(this).next("ul").slideToggle();

    // Close other open submenus
    $(".menu ul ul").not($(this).next("ul")).slideUp();
  });
});

$(function () {
  $(".navbar > ul > li").on("click", function (e) {
    e.preventDefault()

    $(this).find("ul").slideToggle();

    $(".navbar ul ul").not($(this).next("ul")).slideUp();
  })
})

$(function () {
  $("ul ul").hide(); // Hide all sub-lists initially

  $("ul li").on("click", function (e) {
    $(this).children("ul").slideToggle(); 
    $(this).siblings().children("ul").slideUp();
    e.stopPropagation(); 
  });
})







