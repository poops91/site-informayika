// Відкриває або закриває меню
let menuButton = document.querySelector(".menu-toggle");
let menu = document.querySelector("#site-navigation");

if (menuButton && menu) {
  menuButton.addEventListener("click", function () {
    menu.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", menu.classList.contains("is-open"));
  });

  // Закриває меню після переходу на іншу сторінку
  let links = menu.querySelectorAll("a");
  links.forEach(function (link) {
    link.addEventListener("click", function () {
      menu.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

// Розкриває список класів
let classButton = document.querySelector(".class-toggle");
let classMenu = document.querySelector("#class-submenu");

if (classButton && classMenu) {
  classButton.addEventListener("click", function () {
    classMenu.hidden = !classMenu.hidden;
    classButton.setAttribute("aria-expanded", !classMenu.hidden);
  });
}


// Відкриває контактну інформацію у невеликому вікні
let contactDialog = document.querySelector(".contact-dialog");
let contactOpenButtons = document.querySelectorAll("[data-contact-open]");
let contactCloseButton = document.querySelector("[data-contact-close]");

if (contactDialog && contactCloseButton) {
  contactOpenButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      if (menu && menuButton) {
        menu.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
      }
      contactDialog.showModal();
    });
  });

  contactCloseButton.addEventListener("click", function () {
    contactDialog.close();
  });

  contactDialog.addEventListener("click", function (event) {
    if (event.target === contactDialog) {
      contactDialog.close();
    }
  });
}



