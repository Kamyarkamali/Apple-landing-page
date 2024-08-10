$(document).ready(function () {
  $(".customer-logos").slick({
    slidesToShow: 6, // تعداد اسلایدهای نمایش داده شده در سایز بزرگ
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4, // تعداد اسلایدهای نمایش داده شده در سایز دسکتاپ کوچک و تبلت بزرگ
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3, // تعداد اسلایدهای نمایش داده شده در سایز تبلت
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2, // تعداد اسلایدهای نمایش داده شده در سایز موبایل
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1, // تعداد اسلایدهای نمایش داده شده در سایز موبایل کوچک
        },
      },
    ],
  });
});
