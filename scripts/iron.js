const ironBtn = document.querySelector("#iron-btn");
ironBtn.onclick = iron;

function iron() {
    let text = document.getElementById("input").value;
    let arr = text.split("");
    
    // Leerzeichen an erster Stelle entfernen
    if (arr[0] === " ") {
      arr.shift();
    }
    
    // Leerzeichen an letzter Stelle entfernen
    if (arr[arr.length - 1] === " ") {
      arr.pop();
    }
    
    // Absätze entfernen
    for (let element in arr) {
      if (arr[element] == "\n") {
        arr[element] = " ";
      }
    }
    
    for (let i = 0; i < arr.length; i++) {
      
      // Leerstellen stutzen
      if (arr[i] === " " && arr[i+1] === " ") {
        arr[i] = "";
      }
      
      // "I" kapitalisieren
      if (arr[i] == "i" && arr[i-1] == " " && arr[i+1] == " ") {
        let bigI = arr[i].toUpperCase();
        arr[i] = bigI;
      }
      
      // "Uh" und "Um" entfernen
      if ((arr[i] == "u" || arr[i] == "U") && (arr[i+1] == "h" || arr[i+1] == "m") && (arr[i+2] == " " || arr[i+2] == "." || i == arr.length - 2)) {
        
        if (arr[i-1] == ".") {
          arr[i] = "";
          arr[i+1] = "";
          arr[i+3] = arr[i+3].toUpperCase();
          console.log("1");
          
        } else if (arr[i-1] == " ") {
          arr[i] = "";
          arr[i+1] = "";
          arr[i-1] = "";
          
            if (arr[i-2] == ".") {
              arr[i+3] = arr[i+3].toUpperCase();
              console.log("2a");
            } else {
              console.log("2b");
            }
          
        } else if (i == 0) {
          for (let j = i + 0; j < 3; j++) {
            arr[j] = "";
          }
          arr[i+3] = arr[i+3].toUpperCase();
          console.log("3");
        }
      }
      
      // ersten Buchstaben des Textes kapitalisieren
      let firstLetter = arr[0].toUpperCase();
      arr[0] = firstLetter;
      
      // Erstbuchstaben nach Satzpunkten kapitalisieren
      if (arr[i] == "." && arr[i+1] < arr.length ) {
        let firstLetterOfSentence = arr[i+2].toUpperCase();
        arr[i+2] = firstLetterOfSentence;
      }  
      
    }
    
    let string = "";
    for (let i = 0; i < arr.length; i++) {
      string += arr[i] ; 
    }
    document.getElementById("output").innerHTML = string;
}