document.addEventListener("DOMContentLoaded", function () {
  // کد منو
  const iconMenu = document.querySelector(".iconmenu");
  const hamburgerMenu = document.querySelector(".habmurgerMenu");
  const closeButton = document.querySelector(".close");

  // برای باز کردن منو
  iconMenu.addEventListener("click", function () {
    if (hamburgerMenu.style.display === "block") {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // برای بستن منو با دکمه "بستن"
  closeButton.addEventListener("click", function () {
    closeMenu();
  });

  function openMenu() {
    hamburgerMenu.style.display = "block";
    setTimeout(() => {
      hamburgerMenu.style.top = "0";
    }, 10); // تأخیر کوتاه برای اعمال transition
  }

  function closeMenu() {
    hamburgerMenu.style.top = "-100%";
    setTimeout(() => {
      hamburgerMenu.style.display = "none";
    }, 300); // زمان انیمیشن مطابق با transition در CSS
  }

  // کد اسلایدر اول
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  let currentIndex = 0;
  const slidesToShow = 6;
  const maxIndex = slides.length - slidesToShow;

  function updateSlider() {
    slider.style.transform = `translateX(-${
      currentIndex * (100 / slidesToShow)
    }%)`;
  }

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });

  nextBtn.addEventListener("click", () => {
    if (currentIndex < maxIndex) {
      currentIndex++;
      updateSlider();
    }
  });

  // کد اسلایدر دوم
  const slider2 = document.querySelector(".slider2");
  const slides2 = document.querySelectorAll(".slide2");
  const prevBtn2 = document.querySelector(".prev-btn2");
  const nextBtn2 = document.querySelector(".next-btn2");

  let currentIndex2 = 0;
  const slidesToShow2 = 3;
  const maxIndex2 = slides2.length - slidesToShow2;

  function updateSlider2() {
    slider2.style.transform = `translateX(-${
      currentIndex2 * (100 / slidesToShow2)
    }%)`;
  }

  prevBtn2.addEventListener("click", () => {
    if (currentIndex2 > 0) {
      currentIndex2--;
      updateSlider2();
    }
  });

  nextBtn2.addEventListener("click", () => {
    if (currentIndex2 < maxIndex2) {
      currentIndex2++;
      updateSlider2();
    }
  });

  // کد اسلایدر سوم
  const slider3 = document.querySelector(".slider3");
  const slides3 = document.querySelectorAll(".slide3");
  const prevBtn3 = document.querySelector(".prev-btn3");
  const nextBtn3 = document.querySelector(".next-btn3");

  let currentIndex3 = 0;
  const slidesToShow3 = 3;
  const maxIndex3 = slides3.length - slidesToShow3;

  function updateSlider3() {
    slider3.style.transform = `translateX(-${
      currentIndex3 * (100 / slidesToShow3)
    }%)`;
  }

  prevBtn3.addEventListener("click", () => {
    if (currentIndex3 > 0) {
      currentIndex3--;
      updateSlider3();
    }
  });

  nextBtn3.addEventListener("click", () => {
    if (currentIndex3 < maxIndex3) {
      currentIndex3++;
      updateSlider3();
    }
  });

  // slider4
  const slider5 = document.querySelector(".slider5");
  const prevBtn5 = document.querySelector(".prev-btn5");
  const nextBtn5 = document.querySelector(".next-btn5");

  let currentSlide5 = 0;
  const totalSlides5 = document.querySelectorAll(".slide5").length;

  prevBtn5.addEventListener("click", () => {
    if (currentSlide5 > 0) {
      currentSlide5--;
      slider5.style.transform = `translateX(-${currentSlide5 * 100}%)`;
    }
  });

  nextBtn5.addEventListener("click", () => {
    if (currentSlide5 < totalSlides5 - 6) {
      // تعداد کل باکس‌ها منهای تعداد نمایش داده شده
      currentSlide5++;
      slider5.style.transform = `translateX(-${currentSlide5 * 100}%)`;
    }
  });

  // کد اسلایدر 5
  const slider6 = document.querySelector(".slider6");
  const slides6 = document.querySelectorAll(".slide6");
  const prevBtn6 = document.querySelector(".prev-btn6");
  const nextBtn6 = document.querySelector(".next-btn6");

  let currentIndex6 = 0;
  const slidesToShow6 = 4;
  const maxIndex6 = slides6.length - slidesToShow6;

  function updateSlider6() {
    slider6.style.transform = `translateX(-${
      currentIndex6 * (100 / slidesToShow6)
    }%)`;
  }

  prevBtn6.addEventListener("click", () => {
    if (currentIndex6 > 0) {
      currentIndex6--;
      updateSlider6();
    }
  });

  nextBtn6.addEventListener("click", () => {
    if (currentIndex6 < maxIndex6) {
      currentIndex6++;
      updateSlider6();
    }
  });

  // کد اسلایدر 6

  const slider7 = document.querySelector(".slider7");
  const slides7 = document.querySelectorAll(".slide7");
  const prevBtn7 = document.querySelector(".prev-btn7");
  const nextBtn7 = document.querySelector(".next-btn7");

  let currentIndex7 = 0;
  const slidesToShow7 = 4;
  const maxIndex7 = slides7.length - slidesToShow6;

  function updateSlider7() {
    slider7.style.transform = `translateX(-${
      currentIndex7 * (100 / slidesToShow7)
    }%)`;
  }

  prevBtn7.addEventListener("click", () => {
    if (currentIndex7 > 0) {
      currentIndex7--;
      updateSlider7();
    }
  });

  nextBtn7.addEventListener("click", () => {
    if (currentIndex7 < maxIndex7) {
      currentIndex7++;
      updateSlider7();
    }
  });

  // کد اسلایدر 7

  const slider8 = document.querySelector(".slider7");
  const slides8 = document.querySelectorAll(".slide7");
  const prevBtn8 = document.querySelector(".prev-btn7");
  const nextBtn8 = document.querySelector(".next-btn7");

  let currentIndex8 = 0;
  const slidesToShow8 = 4;
  const maxIndex8 = slides8.length - slidesToShow6;

  function updateSlider8() {
    slider8.style.transform = `translateX(-${
      currentIndex8 * (100 / slidesToShow8)
    }%)`;
  }

  prevBtn8.addEventListener("click", () => {
    if (currentIndex8 > 0) {
      currentIndex8--;
      updateSlider8();
    }
  });

  nextBtn8.addEventListener("click", () => {
    if (currentIndex8 < maxIndex8) {
      currentIndex8++;
      updateSlider8();
    }
  });

  // slider8

  const slider9 = document.querySelector(".slider8");
  const slides9 = document.querySelectorAll(".slide8");
  const prevBtn9 = document.querySelector(".prev-btn8");
  const nextBtn9 = document.querySelector(".next-btn8");

  let currentIndex9 = 0;
  const slidesToShow9 = 1.8;
  const maxIndex9 = slides9.length - slidesToShow6;

  function updateSlider9() {
    slider9.style.transform = `translateX(-${
      currentIndex9 * (100 / slidesToShow9)
    }%)`;
  }

  prevBtn9.addEventListener("click", () => {
    if (currentIndex9 > 0) {
      currentIndex9--;
      updateSlider9();
    }
  });

  nextBtn9.addEventListener("click", () => {
    if (currentIndex9 < maxIndex9) {
      currentIndex9++;
      updateSlider9();
    }
  });

  // slider9

  const slider10 = document.querySelector(".slider9");
  const slides10 = document.querySelectorAll(".slide9");
  const prevBtn10 = document.querySelector(".prev-btn9");
  const nextBtn10 = document.querySelector(".next-btn9");

  let currentIndex10 = 0;
  const slidesToShow10 = 1.4;
  const maxIndex10 = slides10.length - slidesToShow6;

  function updateSlider10() {
    slider10.style.transform = `translateX(-${
      currentIndex10 * (100 / slidesToShow10)
    }%)`;
  }

  prevBtn10.addEventListener("click", () => {
    if (currentIndex10 > 0) {
      currentIndex10--;
      updateSlider10();
    }
  });

  nextBtn10.addEventListener("click", () => {
    if (currentIndex10 < maxIndex10) {
      currentIndex10++;
      updateSlider10();
    }
  });
});
