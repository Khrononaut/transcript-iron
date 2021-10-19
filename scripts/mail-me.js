const mailImg = document.querySelector(".fa-envelope");
mailImg.onmouseover = showCall;
mailImg.onmouseout = hideCall;
mailImg.onclick = copyMailAddress;
let ftWrapperCenterTxt = document.querySelector("#ft-wrapper-center-txt");
let ftWrapperCenter = document.querySelector("#ft-wrapper-center");
  
function showCall() {
  ftWrapperCenterTxt.style.color = "#EAEAEA";
  ftWrapperCenter.style.borderColor = "white";
  ftWrapperCenter.style.backgroundColor = "#252A34"
  mailImg.style.backgroundColor = "#FF2E63";
}

function hideCall() {
  ftWrapperCenterTxt.style.color = "transparent";
  ftWrapperCenter.style.borderColor = "transparent";
  ftWrapperCenter.style.backgroundColor = "transparent"
  mailImg.style.backgroundColor = "transparent";

}
  
function copyMailAddress() {
  const str = document.createElement("span");
  str.innerText = "w.felk@me.com";
  const el = document.createElement('textarea');
  el.value = str.innerText;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  alert("Du hast meine E-Mail-Adresse „w.felk@me.com“ erfolgreich kopiert.");
}