"use strict";

const getImageWithEye = document.querySelector(".img-icon");
const getImageBlock = document.querySelector(".password-watch");
const getPasswordBlock = document.querySelector(".password-result");
const mainButton = document.querySelector(".generate-button");
const copyButton = document.querySelector(".copy-button");
const getCheckboxes = document.querySelectorAll(".settings-checkbox");
const getSymbolsCount = document.querySelector(".settings-number");
const getSettingsList = document.querySelector(".settings-list");
const getControlSpan = document.getElementById("control-span");
const randomString = "string";
let passwordText = getPasswordBlock.innerText;

getImageBlock.addEventListener('click', () => {

  if (getImageWithEye.getAttribute('src') == "eye.png") {
    getImageWithEye.src = "eye-slash.png";
    getPasswordBlock.innerText = "************";
  } else {
    getImageWithEye.src = "eye.png";
    getPasswordBlock.innerText = passwordText;
  }
})

function splitString(str) {
  return str.split('');
}

const uppercaseSymbolsArray = splitString("QWERTYUOPASDFGHJKZXCVBNM");
const lowercaseSymbolsArray = splitString("qwertyuopasdfghjkzxcvbnm");
const numbersSymbolsArray = splitString("1234567890");
const specialSymbolsArray = splitString(`!@#$%^&*()?/"'`);
const hardReadSymbolsArray = splitString("ilLI");

let currentArray = [];

function generatePassword() {
  passwordText = "";
  currentArray = [];
  if (getCheckboxes[0].checked) {
    currentArray = currentArray.concat(uppercaseSymbolsArray);
  }
  if (getCheckboxes[1].checked) {
    currentArray = currentArray.concat(lowercaseSymbolsArray);
  }
  if (getCheckboxes[2].checked) {
    currentArray = currentArray.concat(numbersSymbolsArray);
  }
  if (getCheckboxes[3].checked) {
    currentArray = currentArray.concat(specialSymbolsArray);
  }
  if (getCheckboxes[4].checked == false) {
    if (getCheckboxes[0].checked || getCheckboxes[1].checked) {
      currentArray = currentArray.concat(hardReadSymbolsArray);
    }
  }
  for (let i = 0; i < getSymbolsCount.value; i++) {
    let thisRandomNumber = Math.floor(Math.random() * Math.floor(currentArray.length));
    passwordText += currentArray[thisRandomNumber];
  }
  if (getCheckboxes[6].checked) {
    getPasswordBlock.innerText = "************";
    getImageWithEye.src = "eye-slash.png";
  } else {
    getPasswordBlock.innerText = passwordText;
    getImageWithEye.src = "eye.png";
  }
  getControlSpan.innerText = passwordText;
}

mainButton.addEventListener('click', generatePassword);

getCheckboxes[5].addEventListener("change", () => {
  localStorage.setItem('immediately', getCheckboxes[5].checked);
})


// function checkLocalStorage(checkingItem) {
//   return localStorage.getItem(`$(checkingItem)`);
// }

document.addEventListener("DOMContentLoaded", () => {
  console.log(`'`.concat(randomString, "'"));
})

// copyButton.onclick = function() {
//
//   copyText.select();
//   document.execCommand("copy");
// }
function copyText(text) {
  navigator.clipboard.writeText(text);
}

copyButton.addEventListener("click", () => {
  copyText(passwordText);
})
