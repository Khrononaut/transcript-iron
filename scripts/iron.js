const ironBtn = document.querySelector("#iron-btn");
const output = document.querySelector("#output");
const input = document.querySelector("#input");
ironBtn.onclick = iron;

function iron() {
    let removedUs = 0;
    let removedBlankLines = 0;

    let text = input.value;
    text = text.trim();
    let arr = text.split("");

    // count removed blank lines 
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "\n" && arr[i+1] === "\n") {
        removedBlankLines++;
      }
    }
    
    // remove blank lines
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == "\n") {
        arr[i] = " ";
      }
    }
    
    for (let i = 0; i < arr.length; i++) {
      
      // shorten empty spaces
      if (arr[i] === " " && arr[i+1] === " ") {
        arr[i] = "";
      }
      
      // capitalise "i"
      if (arr[i] === "i" && arr[i-1] === " ") {
        if (arr[i+1] === " " || (arr[i+1] === "'" && arr[i+2] === "m" && arr[i+3] === " ")) {
          arr[i] = arr[i].toUpperCase();
        }
      }
      
      // remove "uh" and "um"
      if ((arr[i] == "u" || arr[i] === "U") && (arr[i+1] === "h" || arr[i+1] === "m") && (arr[i+2] === " " || arr[i+2] === "." || i === arr.length - 2)) {
        //case: at the beginning of a sentence
        if (arr[i-1] == ".") {
          arr[i] = "";
          arr[i+1] = "";
          arr[i+3] = arr[i+3].toUpperCase();
        } else if (arr[i-1] === " ") { //case: in the middle of a sentence
          arr[i] = "";
          arr[i+1] = "";
          arr[i-1] = "";
            if (arr[i-2] === ".") {
              arr[i+3] = arr[i+3].toUpperCase();
            }
        }
        removedUs++;
      }

      // capitalise first letter
      let firstLetter = arr[0].toUpperCase();
      arr[0] = firstLetter;

      // capitalise first letter after period
      if (arr[i] == "." && arr[i+1] < arr.length ) {
        arr[i+2] = arr[i+2].toUpperCase();
      }
    }

    if (removedUs !== 0) {
      uCounter.innerHTML = removedUs;
      uCounter.style.fontWeight = "bold";
    } else {
      uCounter.innerHTML = "keine";
      uCounter.style.fontWeight = "normal";
    }
    if (removedBlankLines > 1) {
      blankLineCounter.innerHTML = removedBlankLines;
      blankLineCounter.style.fontWeight = "bold";
      document.querySelector("#small-n").style.display = "initial";
    } else if (removedBlankLines === 1) {
      blankLineCounter.innerHTML = "eine";
      blankLineCounter.style.fontWeight = "bold";
      document.querySelector("#small-n").style.display = "none";
    } else {
      blankLineCounter.innerHTML = "keine";
      blankLineCounter.style.fontWeight = "normal";
      document.querySelector("#small-n").style.display = "initial";
    }
    output.innerHTML = arr.join("");

    if (text !== "") {
      counterDiv2.style.filter = "opacity(1)";
      textBtnDivs[1].style.filter = "opacity(1)";
    }
}
    