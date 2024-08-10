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
});
