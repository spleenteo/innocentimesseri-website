var $ = require("jquery");
global.jQuery = $;

import modernizr from 'modernizr';
import slick from 'slick-carousel';
var Isotope = require('isotope-layout');
var ImagesLoader =  require('imagesloaded');

$(document).ready(function() {
  // CANVAS ASIDE LEFT
  $(".js-nav-toggler--left").click(function(e) {
    e.preventDefault;
    $(".canvas").addClass("is-shifted shift-left");
  });
  // CANVAS ASIDE RIGHT
  $(".js-nav-toggler--right").click(function(e) {
    e.preventDefault;
    $(".canvas").addClass("is-shifted shift-right");
  });
  $(".js-nav-close").click(function(e) {
    e.preventDefault;
    $(".canvas").removeClass("is-shifted shift-left shift-right");
  });


  new ImagesLoader( $('.js-works'), function( instance ) {

    var iso = new Isotope( '.js-works', {
      itemSelector: '.js-work',
      percentPosition: true,
      masonry: {
        gutter: 10
      }
    });
  });

  // passing a selector (document.querySelector is used to get the node)

  // CAROUSEL WITH SLICK
  /*
  $(".carousel").slick({
    mobileFirst: true,
    slidesToShow: 1,
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: false,
    adaptiveHeight: true
  })
  */
});
