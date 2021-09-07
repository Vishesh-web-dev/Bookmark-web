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
var i1 = 0,i2=0,i3=0,i4=4;


function seeAnswer1(answer,arrow){
  if (i1 == 1) {
    answer.style.display = "none";
    arrow.style.transform = "rotate(360deg)";
    arrow.style.transition = "all 0.5s";
    i1 = 0;
  }
  else{
    answer.style.display = "initial";
    arrow.style.transform = "rotate(180deg)";
    arrow.style.transition = "all 0.5s";
    i1 = 1;
  }
}
function seeAnswer2(answer,arrow){
  if (i2 == 1) {
    answer.style.display = "none";
    arrow.style.transform = "rotate(360deg)";
    arrow.style.transition = "all 0.5s";
    i2 = 0;
  }
  else{
    answer.style.display = "initial";
    arrow.style.transform = "rotate(180deg)";
    arrow.style.transition = "all 0.5s";
    i2 = 1;
  }
}
function seeAnswer3(answer,arrow){
  if (i3 == 1) {
    answer.style.display = "none";
    arrow.style.transform = "rotate(360deg)";
    arrow.style.transition = "all 0.5s";
    i3 = 0;
  }
  else{
    answer.style.display = "initial";
    arrow.style.transform = "rotate(180deg)";
    arrow.style.transition = "all 0.5s";
    i3 = 1;
  }
}
function seeAnswer4(answer,arrow){
  if (i4 == 1) {
    answer.style.display = "none";
    arrow.style.transform = "rotate(360deg)";
    arrow.style.transition = "all 0.5s";
    i4 = 0;
  }
  else{
    answer.style.display = "initial";
    arrow.style.transform = "rotate(180deg)";
    arrow.style.transition = "all 0.5s";
    i4 = 1;
  }
}

function validate(email){
  value = email.value;
  if (value.includes("@") &&( (value.includes(".com")) ||(value.includes(".in")) ) && (!(value.includes(" "))) ) {
    console.log("its a email");
  }else if(value == ""){
   console.log("cant be empty");
  }else{
    console.log("wrong format");
  }
}