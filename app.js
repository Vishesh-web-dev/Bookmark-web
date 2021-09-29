var nav1 = document.getElementById("nav1");
var headerDesktop = document.getElementById("header-desktop");
var headerMobile = document.getElementById("header-mobile");
var hamburger = document.getElementById("hamburger");
var close = document.getElementById("close");
var headerIcon = document.getElementById("desktop-icon");
var html = document.getElementById("html");
function ham() {
  hamburger.style.display = "none";
  headerMobile.style.display = "initial";
  headerMobile.style.animation = "transition 0.5s linear 1";
  headerIcon.style.transition = "opacity 0s linear 0.5s";
  headerIcon.style.opacity = "0";
}
function clo() {
  hamburger.style.display = "initial";
  headerMobile.style.display = "none";
  headerIcon.style.display = "initial";
  headerIcon.style.transition = "opacity 0s linear 0s";
  headerIcon.style.opacity = "1";
}

const firstChanger = document.getElementById("first-changer");
const secondChanger = document.getElementById("second-changer");
const thirdChanger = document.getElementById("third-changer");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const slider = document.getElementById("slider");
const firstChangerMobile = document.getElementById("first-changer-mobile");
const secondChangerMobile = document.getElementById("second-changer-mobile");
const thirdChangerMobile = document.getElementById("third-changer-mobile");

function oneFunc() {
  firstChanger.style.color = "hsl(229, 31%, 21%)";
  secondChanger.style.color = "hsl(229, 8%, 60%)";
  thirdChanger.style.color = "hsl(229, 8%, 60%)";
  firstChangerMobile.style.color = "hsl(229, 31%, 21%)";
  secondChangerMobile.style.color = "hsl(229, 8%, 60%)";
  thirdChangerMobile.style.color = "hsl(229, 8%, 60%)";
  one.style.display = "flex";
  two.style.display = "none";
  three.style.display = "none";
  slider.style.width = "27%";
  firstChangerMobile.style.borderBottom = "5px solid orangered";
  secondChangerMobile.style.borderBottom = "none";
  thirdChangerMobile.style.borderBottom = "none";
  slider.style.transform = "translate(0)";
  slider.style.transition = "all 0.5s ease";
}
function twoFunc() {
  firstChanger.style.color = "hsl(229, 8%, 60%)";
  secondChanger.style.color = "hsl(229, 31%, 21%)";
  thirdChanger.style.color = "hsl(229, 8%, 60%)";
  firstChangerMobile.style.color = "hsl(229, 8%, 60%)";
  secondChangerMobile.style.color = "hsl(229, 31%, 21%)";
  thirdChangerMobile.style.color = "hsl(229, 8%, 60%)";
  two.style.display = "flex";
  one.style.display = "none";
  three.style.display = "none";
  slider.style.width = "26%";
  secondChangerMobile.style.borderBottom = "5px solid orangered";
  firstChangerMobile.style.borderBottom = "none";
  thirdChangerMobile.style.borderBottom = "none";
  slider.style.transform = "translate(142%)";
  slider.style.transition = "all 0.5s ease";
}
function threeFunc() {
  firstChanger.style.color = "hsl(229, 8%, 60%)";
  secondChanger.style.color = "hsl(229, 8%, 60%)";
  thirdChanger.style.color = "hsl(229, 31%, 21%)";
  firstChangerMobile.style.color = "hsl(229, 8%, 60%)";
  secondChangerMobile.style.color = "hsl(229, 8%, 60%)";
  thirdChangerMobile.style.color = "hsl(229, 31%, 21%)";
  three.style.display = "flex";
  two.style.display = "none";
  one.style.display = "none";
  slider.style.width = "22%";
  thirdChangerMobile.style.borderBottom = "5px solid orangered";
  firstChangerMobile.style.borderBottom = "none";
  secondChangerMobile.style.borderBottom = "none";
  slider.style.transform = "translate(355%)";
  slider.style.transition = "all 0.5s ease";
}
var i1 = 0,
  i2 = 0,
  i3 = 0,
  i4 = 4;

function seeAnswer1(answer, arrow) {
  let que_1 = document.querySelector(".que-1");
  if (i1 == 1) {
    answer.style.display = "none";
    arrow.style.transform = "rotate(720deg)";
    arrow.style.transition = "all 0.5s";
    que_1.style.color = "hsl(229, 31%, 21%)";
    i1 = 0;
  } else {
    answer.style.display = "initial";
    arrow.style.transform = "rotate(180deg)";
    arrow.style.transition = "all 0.5s";
    que_1.style.color = "hsl(0, 94%, 66%)";

    i1 = 1;
  }
}
function seeAnswer2(answer, arrow) {
  let que_2 = document.querySelector(".que-2");
  
  if (i2 == 1) {
    answer.style.display = "none";
    arrow.style.transform = "rotate(360deg)";
    arrow.style.transition = "all 0.5s";
    que_2.style.color = "hsl(229, 31%, 21%)";

    i2 = 0;
  } else {
    answer.style.display = "initial";
    arrow.style.transform = "rotate(180deg)";
    arrow.style.transition = "all 0.5s";
    que_2.style.color = "hsl(0, 94%, 66%)";

    i2 = 1;
  }
}
function seeAnswer3(answer, arrow) {
  let que_3 = document.querySelector(".que-3");

  if (i3 == 1) {
    answer.style.display = "none";
    arrow.style.transform = "rotate(360deg)";
    arrow.style.transition = "all 0.5s";
    que_3.style.color = "hsl(229, 31%, 21%)";
    i3 = 0;
  } else {
    answer.style.display = "initial";
    arrow.style.transform = "rotate(180deg)";
    arrow.style.transition = "all 0.5s";
    que_3.style.color = "hsl(0, 94%, 66%)";

    i3 = 1;
  }
}
function seeAnswer4(answer, arrow) {
  let que_4 = document.querySelector(".que-4");

  if (i4 == 1) {
    answer.style.display = "none";
    arrow.style.transform = "rotate(360deg)";
    arrow.style.transition = "all 0.5s";
    que_4.style.color = "hsl(229, 31%, 21%)";
    i4 = 0;
  } else {
    answer.style.display = "initial";
    arrow.style.transform = "rotate(180deg)";
    arrow.style.transition = "all 0.5s";
    que_4.style.color = "hsl(0, 94%, 66%)";

    i4 = 1;
  }
}

function validate(email) {
  let error = document.querySelector(".woops");
  let errorImg = document.querySelector(".error");
  value = email.value;
  if (
    value.includes("@") &&
    (value.includes(".com") || value.includes(".in")) &&
    !value.includes(" ")
  ) {
    console.log(1);
  } else if (value == "") {
    error.textContent = "Email can't be empty";
    error.style.display = "initial";
    errorImg.style.display = "initial";
  } else {
    error.textContent = "Whoops,make sure it's an email";
    error.style.display = "initial";
    errorImg.style.display = "initial";
  }
}

function errorRemove(email) {
  email.value = "";
  let error = document.querySelector(".woops");
  let errorImg = document.querySelector(".error");
  error.style.display = "none";
  errorImg.style.display = "none";
}
