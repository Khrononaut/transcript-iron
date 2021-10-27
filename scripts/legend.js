const questionMark = document.querySelector(".fa-circle-question");
questionMark.onmouseover = showInfo;
questionMark.onmouseout = hideInfo;

let explDivs = document.querySelectorAll(".show-hide");
let explDivTop = document.querySelector("#expl-div-top");
let explDivBottom = document.querySelector("#expl-div-bottom");
let innerExplDivs = document.querySelectorAll(".inner-expl-divs");
let circleInfos = document.querySelectorAll(".fa-circle-info");

function showInfo() {
  for (let i = 0; i < innerExplDivs.length; i++) {
    innerExplDivs[i].style.color = "black";
    innerExplDivs[i].style.borderLeft = "solid 2px black";
    circleInfos[i].style.color = "black";
  }
  ironBtn.style.backgroundColor = "var(--clr-expl-1)";
  smoothBtn.style.backgroundColor = "var(--clr-expl-2)";


  explDivTop.style.backgroundColor = "var(--clr-expl-1)";
  explDivTop.style.borderColor = "black";
  explDivBottom.style.backgroundColor = "var(--clr-expl-2)";
  explDivBottom.style.borderColor = "black";
  
}

function hideInfo() {
  for (let i = 0; i < innerExplDivs.length; i++) {
    innerExplDivs[i].style.color = "transparent";
    innerExplDivs[i].style.borderLeft = "solid 2px transparent";
    circleInfos[i].style.color = "transparent";
  }
  ironBtn.style.backgroundColor = "#c4c4c4";
  smoothBtn.style.backgroundColor = "#c4c4c4";

  explDivTop.style.backgroundColor = "transparent";
  explDivTop.style.borderColor = "transparent";
  explDivBottom.style.backgroundColor = "transparent";
  explDivBottom.style.borderColor = "transparent";
}