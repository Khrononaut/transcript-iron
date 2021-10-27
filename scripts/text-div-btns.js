const cleanBtn = document.querySelector("#clean-btn");
cleanBtn.onclick = clean;

function clean() {
  input.value = "";
  charCounterInput.innerHTML = "keine";
  charCounterAmendment.style.display = "none";
  charCounterInput.style.fontWeight = "normal";
}

/* ––– */ 

let allChars = /[0-9a-zA-Zäöüß]/gi;
let inputArea = document.querySelector("#input");
let charCounterInput = document.querySelector("#char-counter-input");
let charCounterAmendment = document.querySelector("#char-counter-amendment");
let counterDivs = document.querySelectorAll(".counter-div");
let textBtnDivs = document.querySelectorAll(".text-btn-div");
let counterDiv1 = counterDivs[0];
let counterDiv2 = counterDivs[1];

inputArea.oninput = function () {
  let text = document.getElementById("input").value;
  let charCounterMatches = text.match(allChars);
  counterDiv1.style.filter = "opacity(1)";
  if (text !== "") {
    charCounterInput.innerHTML = charCounterMatches.length;
    charCounterAmendment.style.display = "initial";
    charCounterAmendment.style.fontStyle = "italic";
    charCounterInput.style.fontWeight = "bold";
    textBtnDivs[0].style.filter = "opacity(1)";
  } else {
    charCounterInput.innerHTML = "keine";
    charCounterInput.style.fontWeight = "normal";
    charCounterAmendment.style.display = "none";
    textBtnDivs[0].style.filter = "opacity(.5)";
  }
}

/* ––– */

const copyBtn = document.querySelector("#copy-btn");
copyBtn.onclick = copy; 

function copy() {
  let copyText = document.getElementById("output");

  copyText.select(); 
  copyText.setSelectionRange(0, 99999);

  document.execCommand("copy");

  alert("Erfolgreich kopiert!");
}

let blankLineCounter = document.querySelector("#blank-line-counter");
let uCounter = document.querySelector("#u-counter");

// counting blank lines, uh's and um's is part of the iron function