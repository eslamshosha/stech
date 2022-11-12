let hint = document.querySelector(".preloader");
window.onload = function () {
  //hide the preloader
  setTimeout(function () {
    hint.style.display = "none";
  }, 700);
};
$(document).ready(function () {
  new WOW().init();

  //phone size menu onclick
  if ($(window).width() <= 991) {
    $("#menu-id").click(function (e) {
      e.preventDefault();

      $(".navgition").toggleClass("reset-left");
      $("body").toggleClass("overflow");
      $(".menu-bars").toggleClass("open-bars");
    });
    $(".nav-head .close-btn").click(function () {
      $(".navgition").removeClass("reset-left");
      $(".menu-bars .bars").toggleClass("open-bars");
      $(".menu-bars .bars").toggleClass("close-bars");
      $("body").removeClass("overflow");
    });
  }
  //fixed nav
  $stickyNav = $(".top-header");
  $(window).on("scroll load", function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
      $stickyNav.addClass("fixed-nav", 500);
    } else {
      $stickyNav.removeClass("fixed-nav", 500);
    }
    if (scroll == 0) {
      $stickyNav.removeClass("fixed-nav", 500);
    }
  });
  var $stickyheader = $("header");
  lastScroll = 0;
  $(window).on("scroll load", function () {
    var scroll = $(window).scrollTop();
    if (lastScroll - scroll > 0) {
      $stickyheader.addClass("fixed-header", { duration: 1000 });
    } else if (lastScroll - scroll >= 0 && $(window).width() <= 991) {
      $stickyheader.addClass("fixed-header", { duration: 1000 });
    } else {
      $stickyheader.removeClass("fixed-header", { duration: 500 });
    }
    lastScroll = scroll;
    if (scroll == 0) {
      $stickyheader.removeClass("fixed-header", { duration: 500 });
    }
  });
  ///////// ** main** /////////
  var specials = new Swiper(".main-slider .swiper-container", {
    loop: true,
    autoplay: true,
    slidesPerView: 1,
    pagination: {
      el: ".main-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".main-slider .swiper-btn-next",
      prevEl: ".main-slider .swiper-btn-prev",
    },
  });
  // for counter //

  var a = 0;
  function countFunction() {
    $(".counter-num").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-count");
      $({
        countNum: $this.text(),
      }).animate(
        {
          countNum: countTo,
        },

        {
          duration: 2000,
          easing: "swing",
          step: function () {
            if (this.countNum < 10) {
              $this.text("0" + Math.floor(this.countNum));
            } else {
              $this.text(Math.floor(this.countNum));
            }
          },
          complete: function () {
            if (this.countNum < 10) {
              $this.text("0" + this.countNum);
            } else {
              $this.text(this.countNum);
            }
            //alert('finished');
          },
        }
      );
    });
    a = 1;
  }
  if ($(window).width() <= 767) {
    window.onload(countFunction());
  }
  $(window).scroll(function () {
    var oTop = $(".counter-cont").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
      countFunction();
    }
  });
  var oTop = $(".counter-cont").offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    countFunction();
  }

  // end counter //
  ///////// ** testimonials-section** /////////
  var testimonials = new Swiper(".testimonials-slider .swiper-container", {
    loop: true,
    autoplay: true,
    slidesPerView: 1,
    pagination: {
      el: ".testimonials-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".testimonials-slider .swiper-btn-next",
      prevEl: ".testimonials-slider .swiper-btn-prev",
    },
  });
  ///////// ** partner-section** /////////
  var partner = new Swiper(".partner-slider .swiper-container", {
    loop: true,
    autoplay: true,
    pagination: {
      el: ".partner-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".partner-slider .swiper-btn-next",
      prevEl: ".partner-slider .swiper-btn-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 3,
      },
      767: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 5,
      },
      1199: {
        slidesPerView: 6,
      },
    },
  });
  const classExists =
    document.getElementsByClassName("new-address-select").length > 0;

  if (classExists) {
    $(".new-address-select").select2();
  } else {
  }

  //////////** fixed arrow to top**//////////
  $(".arrow-top").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1500
    );
  });
  $(this).scrollTop() >= 500
    ? $(".arrow-top").fadeIn(300)
    : $(".arrow-top").fadeOut(300);

  $(window).scroll(function () {
    $(this).scrollTop() >= 500
      ? $(".arrow-top").fadeIn(300)
      : $(".arrow-top").fadeOut(300);
  });
});
