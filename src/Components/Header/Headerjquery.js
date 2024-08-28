import $ from 'jquery';

$(function () {

    const getArroId = document.getElementById('header-arrow-icon');

  $(getArroId).on("click", function (e) {

    e.preventDefault();
   
    $(getArroId).toggleClass("rotate-nav-arrow");

  });
});