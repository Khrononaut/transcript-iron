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
    innerExplDivs[i].style.color = "white";
    innerExplDivs[i].style.borderLeft = "solid 1px white";
    circleInfos[i].style.color = "white";
  }
  ironBtn.style.backgroundColor = "#38A3A5";
  smoothBtn.style.backgroundColor = "#57CC99";


  explDivTop.style.backgroundColor = "rgba(6, 163, 165, 0.5)";
  explDivTop.style.borderColor = "white";
  explDivBottom.style.backgroundColor = "rgba(87, 204, 153, 0.5)";
  explDivBottom.style.borderColor = "white";
  
}

function hideInfo() {
  for (let i = 0; i < innerExplDivs.length; i++) {
    innerExplDivs[i].style.color = "transparent";
    innerExplDivs[i].style.borderLeft = "solid 1px transparent";
    circleInfos[i].style.color = "transparent";
  }
  ironBtn.style.backgroundColor = "#c4c4c4";
  smoothBtn.style.backgroundColor = "#c4c4c4";

  explDivTop.style.backgroundColor = "transparent";
  explDivTop.style.borderColor = "transparent";
  explDivBottom.style.backgroundColor = "transparent";
  explDivBottom.style.borderColor = "transparent";
}