$(document).ready(function () {

  $(".detail-pop-close").click(function () {
    $("#top-details").hide();
  });
  $(".top-click").click(function () {
    $("#top-details").show();
  });
  $(".detail-pop-close").click(function () {
    $(".detail-pop").hide();
  });

// slider 2

  $(".slide2-d1").click(function () {
    $("#slide2-d1").show();
    $("#slide2-d2").hide();
  });
  $(".slide2-d2").click(function () {
    $("#slide2-d2").show();
    $("#slide2-d1").hide();
  });


  // slider 3

  $(".slide3-d1").click(function () {
    $("#slide3-d1").show();
    $("#slide3-d2").hide();
    $("#slide3-d3").hide();
  });
  $(".slide3-d2").click(function () {
    $("#slide3-d1").hide();
    $("#slide3-d2").show();
    $("#slide3-d3").hide();
  });
  $(".slide3-d3").click(function () {
    $("#slide3-d1").hide();
    $("#slide3-d2").hide();
    $("#slide3-d3").show();
  });


    // slider 4

    $(".slide4-d1").click(function () {
      $("#slide4-d1").show();
      $("#slide4-d2").hide();
      $("#slide4-d3").hide();
    });
    $(".slide4-d2").click(function () {
      $("#slide4-d1").hide();
      $("#slide4-d2").show();
      $("#slide4-d3").hide();
    });
    $(".slide4-d3").click(function () {
      $("#slide4-d1").hide();
      $("#slide4-d2").hide();
      $("#slide4-d3").show();
    });

    // slider 5

    $(".slide5-d1").click(function () {
      $("#slide5-d1").show();
      $("#slide5-d2").hide();
      $("#slide5-d3").hide();
      $("#slide5-d4").hide();
    });
    $(".slide5-d2").click(function () {
      $("#slide5-d1").hide();
      $("#slide5-d2").show();
      $("#slide5-d3").hide();
      $("#slide5-d4").hide();
    });
    $(".slide5-d3").click(function () {
      $("#slide5-d1").hide();
      $("#slide5-d2").hide();
      $("#slide5-d3").show();
      $("#slide5-d4").hide();
    });
    $(".slide5-d4").click(function () {
      $("#slide5-d1").hide();
      $("#slide5-d2").hide();
      $("#slide5-d3").hide();
      $("#slide5-d4").show();
    });


  $(".menu-icon").click(function () {
    $('.menu-icon').addClass("rotate");
    $('.hide-menu').removeClass("rotate");
    $('.menu-outer').fadeIn();
    $('.menu-icon').fadeOut();
    $('.hide-menu').fadeIn();
  });
  $('.hide-menu').click(function () {
    $('.menu-outer').fadeOut();
    $('.hide-menu').addClass("rotate");
    $('.menu-icon').removeClass("rotate");
    $('.hide-menu').fadeOut();
    $('.menu-icon').fadeIn();
  });

  $('.playIcon').click(function () {
    $('.playIcon').parent().addClass('active')
  });
  $('.stopIcon').click(function () {
    $('.playIcon').parent().removeClass('active')
  });

  $(".active").click(function () {
    $('.menu-btn-custom').addClass("open");
    $('.menu-outer').fadeIn();
    $('.close-menu-btn').fadeIn();
  });

  $(".close-menu-btn").click(function () {
    $('.menu-btn-custom').removeClass("open");
    $('.menu-outer').fadeOut();
    $('.close-menu-btn').fadeOut();
  });

});

