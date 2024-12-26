var acc = document.getElementsByClassName("accordion-header-vfor-thelogistico");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    for (i = 0; i < acc.length; i++) {
      if (acc[i] == this) {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      } else {
        var panel = acc[i].nextElementSibling;
        panel.style.maxHeight = null;
        acc[i].classList.remove("active");
      }
    }
  });
}
$(document).ready(function () {
  var swiper = new Swiper(".swiper-section", {
    grabCursor: !0,
    effect: "cube",
    speed: 1000,
    loop: !0,
    cubeEffect: {
      shadow: !0,
      slideShadows: !1,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    autoplay: { delay: 5000 },
    pagination: { el: ".swiper-pagination" },
  });
  var btn = $("#scrollButton");
  $(window).scroll(function () {
    if ($(window).scrollTop() > 900) {
      btn.addClass("display");
    } else {
      btn.removeClass("display");
    }
  });
  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  });
  $(".hamberger").click(function () {
    $(".mobile-menus").slideToggle();
    $(".sub-child").slideUp();
    $(".child-menus").removeClass("show");
  });
  $(".child-menus .menus-title").click(function () {
    $(this).parent().toggleClass("show");
    $(this).parent().find(".sub-child").slideToggle();
  });

  new Swiper(".swiper-box", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 3,
    autoplay: true,
    paginationClickable: true,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return `<span class="outer-dot swiper-pagination-bullet"><span class="inner-dot"></span></span>`;
      },
    },
    breakpoints: {
      1920: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1028: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  });

  $("a.form").on("click", function () {
    $(".form-bg").addClass("show");
  });

  $(".close").on("click", function () {
    $(".form-bg").removeClass("show");
  });
});
var a = 0;
$(window).scroll(function () {
  var oTop =
    $(".communication-counter .counter-block").offset()?.top -
    window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $(".number-count").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-count");
      $({ countNum: $this.text() }).animate(
        { countNum: countTo },
        {
          duration: 2000,
          easing: "swing",
          step: function () {
            $this.text(Math.floor(this.countNum * 10) / 10);
          },
          complete: function () {
            $this.text(separator(this.countNum));
          },
        }
      );
    });
    a = 1;
  }
});

const cssLink = document.createElement("link");
cssLink.href = "style.css";
cssLink.rel = "stylesheet";
cssLink.type = "text/css";
frames[
  "leadsquared_landing_page_frame"
].contentWindow.document.body.appendChild(cssLink);
