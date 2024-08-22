import $ from 'jquery';

$(function () {
  $(".menu > ul > li").on("click", function (e) {
    e.preventDefault();

    //$(this).next("ul").slideToggle();
    //$(this).find("ul").slideToggle();

    //$(".menu ul ul").not($(this).find("ul")).removeClass("active").slideUp();
  });
})


$(function() {
  $(".menu > ul > li > a").on("click", function(e) {
    e.preventDefault(); 
   
    // Toggle the submenu under the clicked item
    $(this).next("ul").slideToggle();
    
    // Close other open submenus
    $(".menu ul ul").not($(this).next("ul")).slideUp();
  });
});





