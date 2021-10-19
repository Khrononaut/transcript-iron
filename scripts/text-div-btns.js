const copyBtn = document.querySelector("#copy-btn");
copyBtn.onclick = copy;
const cleanBtn = document.querySelector("#clean-btn");
cleanBtn.onclick = clean;

function copy() {
    let copyText = document.getElementById("output");
    
    copyText.select(); 
    copyText.setSelectionRange(0, 99999);
    
    document.execCommand("copy");
    
    alert("Erfolgreich kopiert!");
  }
  
  function clean() {
    document.getElementById("input").value = "";
  }