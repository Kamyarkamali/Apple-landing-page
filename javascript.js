document.addEventListener("DOMContentLoaded", function () {
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

  // کد اسلایدر
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  let currentIndex = 0;
  const maxIndex = slides.length - 6; // تعداد حداکثری از اسلایدها که می‌توان به جلو حرکت کرد

  function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * (100 / 6)}%)`;
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
});
