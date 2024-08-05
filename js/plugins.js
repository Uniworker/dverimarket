function preloadPage() {
  $(window).on("load", (function () {
    $(".preloader").length && $(".preloader").delay(250).fadeOut(500)
  }))
}
function startMainSlider() {
  $(".big-slider").length && $(".big-slider").slick({
    autoplay: !0,
    autoplaySpeed: 4e3,
    speed: 400,
    dots: !0,
    draggable: !1,
    nextArrow: '<button type="button" class="button is-medium is-outlined is-hovered slick-next"></button>',
    prevArrow: '<button type="button" class="button is-medium is-outlined is-hovered slick-prev"></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: !1
        }
      }
    ]
  })
}
function startProductsSlider() {
  $(".products-slider").length && $(".products-slider").slick({
    dots: !0,
    draggable: !1,
    infinite: !0,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: '<button type="button" class="button is-primary is-outlined slick-next"></button>',
    prevArrow: '<button type="button" class="button is-primary is-outlined slick-prev"></button>',
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          arrows: !1
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: !1
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: !1
        }
      }
    ]
  })
}
function startBrandsSlider() {
  $(".brands-slider").length && $(".brands-slider").slick({
    adaptiveHeight: !0,
    dots: !0,
    draggable: !1,
    lazyLoad: "ondemand",
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 400,
    nextArrow: '<button type="button" class="button is-medium is-outlined is-hovered slick-next"></button>',
    prevArrow: '<button type="button" class="button is-medium is-outlined is-hovered slick-prev"></button>',
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          arrows: !1
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: !1
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: !1,
          dots: !1
        }
      }
    ]
  })
}
function startSlideShow() {
  $(".slideshow").length && $(".slideshow").hover((function () {
    $(this).children().not(".active").show(),
    $(this).slick({
      arrows: !1,
      autoplay: !0,
      autoplaySpeed: 2e3,
      infinite: !0,
      draggable: !1,
      pauseOnHover: !1,
      pauseOnFocus: !1,
      focusOnSelect: !0,
      speed: 500,
      fade: !0,
      cssEase: "linear",
      lazyLoad: "progressive"
    })
  }), (function () {
    $(this).slick("slickPause"),
    $(this).slick("slickGoTo", 0, !0),
    $(this).slick("unslick"),
    $(this).children().not(".active").hide()
  }))
}
function startGallerySlider() {
  $(".slider-for").length && $(".slider-for").slick({
    arrows: false,
    focusOnSelect: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".slider-nav",
    respondTo: "slider",
    speed: 200,
    useTransform: false,
  })
  $(".slider-nav").length && $(".slider-nav").slick({
    slidesToShow: 4,
    asNavFor: ".slider-for",
    focusOnSelect: true,
    variableWidth: true,
    respondTo: "slider",
    useTransform: false
  })
}
function showCountdown() {
  var t = new Date,
    e = new Date(t.getMonth() + 1 + "/" + t.getDate() + "/" + t.getFullYear() + " 23:59:59").getTime() - t.getTime(),
    s = parseInt(parseInt(e / 1e3) / 86400),
    o = parseInt((parseInt(e / 1e3) - 24 * s * 3600) / 3600),
    n = parseInt(parseInt(parseInt(e / 1e3) - 24 * s * 3600 - 3600 * o) / 60),
    i = parseInt(parseInt(e / 1e3) - 24 * s * 3600 - 3600 * o) - 60 * n;
  i < 10 && (i = "0" + i),
  n < 10 && (n = "0" + n),
  o < 10 && (o = "0" + o),
  s < 10 && (s = "0" + s),
  $(".day").each((function () {
    $(this).text(s)
  })),
  $(".hour").each((function () {
    $(this).text(o)
  })),
  $(".min").each((function () {
    $(this).text(n)
  })),
  $(".sec").each((function () {
    $(this).text(i)
  })),
  setTimeout(showCountdown, 1e3)
}
function displayScrollButton(t) {
  var e = t;
  $(window).scroll((function () {
    $(this).scrollTop() > 200 ? e.fadeIn() : e.fadeOut()
  }))
}
function scrollToTop() {
  displayScrollButton($(".back-top")),
  $(".back-top a").click((function () {
    return $("html").animate({
      scrollTop: 0
    }, 700),
    !1
  }))
}
$(document).ready(preloadPage),
$(document).ready(startMainSlider),
$(document).ready(startProductsSlider),
$(document).ready(startBrandsSlider),
$(document).ready(startSlideShow),
$(document).ready(startGallerySlider),
$(document).ready(showCountdown),
$(document).ready(scrollToTop);
