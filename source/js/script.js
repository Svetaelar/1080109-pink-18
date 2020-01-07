var navMain = document.querySelector (".main-nav");
var navToggle = document.querySelector (".main-nav__toggle");
var form = document.querySelector(".form");
var popupSuccess = document.querySelector(".popup--success");
var btnSuccess = popupSuccess.querySelector(".button--submit");
var popupError = document.querySelector(".popup--error");
var btnError = popupError.querySelector(".button--submit");
var firstName = form.querySelector("[name=firstname]");
var surname = form.querySelector("[name=surname]");
var email = form.querySelector("[name=email]");

navMain.classList.remove ("main-nav--nojs");
navToggle.addEventListener ("click", function() {
  if (navMain.classList.contains("main-nav--closed"
  )){
    navMain.classList.remove ("main-nav--closed");
    navMain.classList.add ("main-nav--opened");
  } else {
    navMain.classList.add ("main-nav--closed");
    navMain.classList.remove ("main-nav--opened");
  }
  });

form.addEventListener("submit", function(evt) {
  evt.preventDefault();
  console.log(surname);

  if (!firstName.value || !surname.value || !email.value) {
  popupError.classList.add("popup__show");
  console.log(surname.value);
  console.log(firstName.value);
  console.log(name1);
  console.log(email);
  console.log(email.value);
  } else {
    popupSuccess.classList.add("popup__show");
  }
});

btnSuccess.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupSuccess.classList.remove("popup__show");
});

btnError.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupError.classList.remove("popup__show");
});
