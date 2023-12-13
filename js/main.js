$(document).ready(function () {
  $(".dropholder").click(function () {
    $(".menu ").toggleClass("showMenu");
    $(".menu > li ").click(function () {
      $(".dropdown > p").html($(this).html()).parent().removeClass("showMenu");
    });
  });
  $(".dropholder1").click(function () {
    $(".menu1 ").toggleClass("showMenu");
    $(".menu1 > li ").click(function () {
      $(".dropdown1 > p").html($(this).html()).parent().removeClass("showMenu");
    });
  });
  $(".dropholder2").click(function () {
    $(".menu2 ").toggleClass("showMenu");
    $(".menu2 > li ").click(function () {
      $(".dropdown2 > p").html($(this).html()).parent().removeClass("showMenu");
      $(".homeSearch .content").html($(this).html());
    });
  });
  $(".toggleBox .fa-angle-double-right").click(function () {
    $(".filterSearchBox ").toggleClass("open");
    $(".filterContent ").toggleClass("reset");
    $(".fa-angle-double-right ").toggleClass("fa-spin");
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#scrolltop").fadeIn();
    } else {
      $("#scrolltop").fadeOut();
    }
  });
  $("#scrolltop").click(function () {
    $("html , body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });

  $(".se-pre-con").fadeOut(2000);
  $("html").css("overflow", "visible");
  $("body").niceScroll({
    cursorborder: "",
    autohidemode: false,
    cursorcolor: "#007bff",
    boxzoom: true,
  });
});
