"use strict";

// load script
jQuery(document).ready(function ($) {
  "use script"; // header__burger

  $(".burger-js").on("click", function () {
    $(this).toggleClass("active");
    $(".header__bottom").toggleClass("active");
    $("body").toggleClass("overflow");
  });
  $(".header__bottom-menu ul.sub__menu").attr("data-content", "").on("click", function () {
    $(this).children("li.sub__menu-item").toggle("show");
    $(this).toggleClass("active");
  });
  $("li.search-js").on("click", function (e) {
    e.preventDefault();
    $(".header__center-search").toggle("show");
  });
  var prev = "<button type=\"button\" class=\"slick-prev\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"29.448\" height=\"14.474\" viewBox=\"0 0 29.448 14.474\"> <path id=\"long-arrow-alt-right\" d=\"M8.812,14.867H28.659a.789.789,0,0,1,.789.789v3.681a.789.789,0,0,1-.789.789H8.812v3.028a1.578,1.578,0,0,1-2.693,1.115L.462,18.613a1.577,1.577,0,0,1,0-2.231l5.657-5.657a1.578,1.578,0,0,1,2.693,1.115Z\" transform=\"translate(0 -10.26)\" fill=\"#ebe9e0\"/> </svg></button>";
  var next = "<button type=\"button\" class=\"slick-next\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"29.448\" height=\"14.474\" viewBox=\"0 0 29.448 14.474\"> <path id=\"long-arrow-alt-right\" d=\"M20.636,14.867H.789A.789.789,0,0,0,0,15.656v3.681a.789.789,0,0,0,.789.789H20.636v3.028a1.578,1.578,0,0,0,2.693,1.115l5.657-5.657a1.577,1.577,0,0,0,0-2.231l-5.657-5.657a1.578,1.578,0,0,0-2.693,1.115Z\" transform=\"translate(0 -10.26)\" fill=\"#ebe9e0\"/> </svg></button>";
  $(".slider-js").slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    dots: false,
    infinite: false,
    arrows: true,
    prevArrow: prev,
    nextArrow: next,
    responsive: [{
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }]
  });
  $(".related .product__items").slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    dots: false,
    arrows: false,
    infinite: false,
    prevArrow: prev,
    nextArrow: next,
    responsive: [{
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }]
  });
  $(".main__slider-js").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    infinite: false
  }); // mobile settings

  $(window).resize(function () {
    width = $(window).width();

    if (width <= 767) {
      $(document).on('scroll', function () {
        $(".header__bottom").removeClass("fixed");
      });
    }
  }); // webp
  // Проверяем, можно ли использовать Webp формат

  function canUseWebp() {
    var elem = document.createElement('canvas');

    if (!!(elem.getContext && elem.getContext('2d'))) {
      return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
    }

    return false;
  }

  var images = document.querySelectorAll('[data-bg]');

  for (var i = 0; i < images.length; i++) {
    var image = images[i].getAttribute('data-bg');
    images[i].style.backgroundImage = 'url(' + image + ')';
  } // Проверяем, является ли браузер посетителя сайта Firefox и получаем его версию


  var isitFirefox = window.navigator.userAgent.match(/Firefox\/([0-9]+)\./);
  var firefoxVer = isitFirefox ? parseInt(isitFirefox[1]) : 0; // Если есть поддержка Webp или браузер Firefox версии больше или равно 65

  if (canUseWebp() || firefoxVer >= 65) {
    var imagesWebp = document.querySelectorAll('[data-bg-webp]');

    for (var _i = 0; _i < imagesWebp.length; _i++) {
      var imageWebp = imagesWebp[_i].getAttribute('data-bg-webp');

      imagesWebp[_i].style.backgroundImage = 'url(' + imageWebp + ')';
    }
  } // first page category


  $("ul.sub-category.js-el").attr("data-content", "").on("click", function () {
    $(this).children("li").toggle("show");
    $(this).toggleClass("active");
  }); // woof settings

  var priceStr = jQuery(".price_label");

  if (priceStr.length) {
    split();
  }

  function split() {
    var priceHtml = priceStr.html().trim().split("").splice(7).join("");
    var newHtml = priceStr.html(priceHtml);
    return newHtml;
  }

  $("button.woof_reset_search_form").text("Zurücksetzen"); // header menu slicky   

  var height = $(window).scrollTop();
  $(document).on('scroll', function () {
    if (height > 300 - 78) {
      $(".header__bottom").addClass("fixed");
    } else {
      $(".header__bottom").removeClass("fixed");
    }
  }); // header__menu
});