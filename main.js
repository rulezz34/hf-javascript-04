// 1. Írj meg egy fv-t, ami kap egy string paramétert (feltételezhetjük, hogy csak ASCII karakterek szerepelnek benne), és az összes nagy karaktert kicsivé alakítja

function toLowerCase(str) {
    const lowerCasedStr = '';

    for (let i = 0; i < str.length; i++) {
        const currentChar = str[i];
        if (!isBigCharacter(char)) {
            lowerCasedStr += currentChar;
        } else {
             const newChar = makeCharLower(currentChar)
             lowerCasedStr += newChar;
        }
    }

    return lowerCasedStr;
}

function isBigCharacter(char) {
    const charCode = char.charCodeAt(0)
    if (charCode < 65 || charCode > 90) {
        return false;
    } else {
        return true;
    }
}

function makeCharLower(char) {
    const originalCharCode = char.charCodeAt(0);
    const newCharCode = originalCharCode + 32;
    const newChar = String.fromCharCode(newCharCode);
    return newChar;
}



// Tömb metódusok: (some, every, filter, find, findIndex, findLast, findLastIndex, map)
// 2. Az alábbi feladatok mindegyikénél írj egy fv-t, ami paraméterül kap egy számokból álló tömböt és döntsd el, hogy 5-10, illetve 15-20 közötti számok

// 2.1 vannak-e a tömbben

const tomb = [1, 3, 5, 13, 22, 30];

function tartalmaz(tomb) {
    const tartalmaz5_10 = tomb.some(szam => szam >= 5 && szam <= 10);
    const tartalmaz15_20 = tomb.some(szam => szam >= 15 && szam <= 20);

    if(tartalmaz5_10 || tartalmaz15_20) {
        console.log("van a tömbben 5-10 vagy 15-20 közötti szám");
    } else {
        console.log('nincs benne 5-10 vagy 15-20 közötti szám');
    }
}

// 2.4 találd meg a legelső ilyen számot

function tartalmaz(tomb) {
    const tartalmaz5_10 = tomb.find(szam => szam >= 5 && szam <= 10);
    const tartalmaz15_20 = tomb.find(szam => szam >= 15 && szam <= 20);

    

}


// 3. Az alábbi feladatok mindegyikénél írj egy fv-t, ami paraméterül kap egy string-ekből álló tömböt és
// 3.3 válogasd ki azokat a string-eket, amelyeknek a hossza több mint 6
    
function hosszabbMint6(tomb3) {
    return tomb3.filter(str => str.length > 6);
  }



//   6. Írj egy objektumot, melyben 2 kulcs-érték pár van: az első egy életkor (age), a másik egy metódus (printDifference), ami paraméterül kap egy másik életkort és a különbséget megjeleníti

const person = {
    age: 26,
    printDifference: function(otherAge) {
      const difference = Math.abs(this.age - otherAge);
      console.log(`Az életkor különbsége: ${difference} év`);
    }
  };

// 7. Írj egy objektumot, melyben 2 kulcs-érték pár van: az első egy nevekből (string) álló tömb (names), a másik egy metódus (printAllNames), ami kiírja egyessével az összes nevet
  

const someObject = {
    names: ['Dénes', 'Péter', 'Máté', 'Aladár'],
    printAllNames: function() {
        for(let i = 0; i < this.names.length; i++) {
            console.log(this.names);
        }
    }
} 



// 8. DOM: hozz létre egy egy <p>-t és 3 gombot a következő feliratokkal:
// 'kék', 'piros', 'zöld' --- amikor vmelyik gombra rákattintasz, akkor a gomb felirata jelenjen meg a <p> tag-ben

const blueBtn= document.querySelector('#blue');
const greenBtn= document.querySelector('#green');
const redBtn= document.querySelector('#red');
const paragraph = document.querySelector('p');

paragraph.innerText = "nem kattintottál még";

blueBtn.onclick = () => {
    paragraph.innerText = "kék";
}

greenBtn.onclick = () => {
    paragraph.innerText = "zöld";
}

redBtn.onclick = () => {
    paragraph.innerText = "piros";
}



