import $ from 'jquery';

$(".menu > ul > li").on("click", function (e){
    //remove active form already active
    $(this).siblings().removeClass("active");

    //add active to clicked
    $(this).toggleClass("active");

    //if has sub menu open it
    $(this).find("ul").slideToggle();

    //class other sub menu if any open
    $(this).siblings.find("ul").slideUp()

    //remove activate class of sub menu items
    $(this).siblings().find("ul").find("li").removeClass("action");
})




