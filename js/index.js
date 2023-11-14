const menu_btn = document.querySelector(".hamburger");
const mobile_menu = document.querySelector(".mobile-nav");

menu_btn.addEventListener("click", () => {
  menu_btn.classList.toggle("is-active");
  mobile_menu.classList.toggle("is-active");
});

let tabLinks = document.querySelectorAll(".about__content__info__tabs__title");
let tabContents = document.querySelectorAll(".about__content__info__details");

tabLinks.forEach((tabLink) => {
  tabLink.addEventListener("click", (e) => {
    tabLinks.forEach((link) => {
      if (link !== e.target) {
        link.classList.remove("about__content__info__tabs__title--active");
      }
      e.target.classList.add("about__content__info__tabs__title--active");
    });

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("about__content__info__details--active");
    });

    document
      .getElementById(e.currentTarget.innerText)
      .classList.add("about__content__info__details--active");
  });
});

// Submitting contact form

const scriptURL =
  "https://script.google.com/macros/s/AKfycbxHJ5NDH1tur0DxQyEUcz3y_7gsAXeqUVqOjioENk13RvyKTjDq_bnoNfqksANieZmN/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerText = "Message sent successfully";
      setTimeout(function () {
        msg.innerText = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
