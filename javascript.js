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
});
