"use strict";

const modal = document.querySelector(".modal");
const overLay = document.querySelector(".overlay");
const closebyCross = document.querySelector(".close-modal");
const showbyClick = document.querySelectorAll(".show-modal");
//console.log(showbyClick);
for (let i = 0; i < showbyClick.length; i++) {
  showbyClick[i].addEventListener("click", function () {
    modal.classList.remove("hidden");
    overLay.classList.remove("hidden");
  });
}
const modalClose = function () {
  modal.classList.add("hidden");
  overLay.classList.add("hidden");
};
closebyCross.addEventListener("click", modalClose);
overLay.addEventListener("click", modalClose);
//add escape keyboard feture to close modal like above
document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    modalClose();
  }
});
