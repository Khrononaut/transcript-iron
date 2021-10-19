
const cleanBtnDiv = document.querySelector("#clean-btn-div");
const cleanText = document.querySelector("#clean-text");

cleanBtn.onmouseover = function () {
  cleanBtnDiv.style.borderColor = "#FFA6D5";
  cleanText.style.color = "#FFA6D5";
}

cleanBtn.onmouseout = function () {
  cleanBtnDiv.style.borderColor = "#D8D8D8";
  cleanText.style.color = "white";
}

const copyBtnDiv = document.querySelector("#copy-btn-div");
const copyText = document.querySelector("#copy-text");

copyBtn.onmouseover = function () {
  copyBtnDiv.style.borderColor = "#FC8621";
  copyText.style.color = "#FC8621";
}
copyBtn.onmouseout = function () {
  copyBtnDiv.style.borderColor = "#D8D8D8";
  copyText.style.color = "white";
}