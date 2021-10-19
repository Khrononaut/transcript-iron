const smoothBtn = document.querySelector("#smooth-btn");
smoothBtn.onclick = smooth;

function smooth() {
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
    
    for (let i = 0; i < arr.length; i++) {
      
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