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
});
