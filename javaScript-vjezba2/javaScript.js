//Vježba jedan: funkcije
/*
     pokreniProgram();

     function pokreniProgram(){
         let korisnickoIme = "Lega";
         let godina = 18;

        rodPjesma(korisnickoIme, godina);
     }


     function rodPjesma(korisnickoIme, godina){
         console.log("Sretan rođendan ti");
         console.log("Sretan rođendan ti");
         console.log("Sretan rođendan dragi", korisnickoIme);
         console.log("Sretan rođendan ti");
         console.log("Sada si", godina, "godina star");
     }
         //drugačija verzija sa slovima (a,b)
     noviProgram();

     function noviProgram(){
         let korIme = "Kolega";
         let god = 19;
        Pjesma(korIme, god)
     }
     function Pjesma(a, b){
         console.log("Sretan rođendan ti");
         console.log("Sretan rođendan ti");
         console.log("Sretan rođendan dragi", a);
         console.log("Sretan rođendan ti");
         console.log("Sada si", b, "godina star");
     }

//Vježba dva: return (vrati)
     let area;
     let width;
     let height;

     width = window.prompt("Unesite širinu");
     height = window.prompt("Unesite širinu");

     area = getArea(width, height);

         console.log("Ovaj prostor je veličine:", area)

     function getArea(width, height){
         let rezultat = width * height;
         return rezultat;
     }
*/
//Vježba tri: ternary operator (kraći oblik)

let odrasli = provjeriGodinu(18);
console.log(odrasli);

function provjeriGodinu(godina){

    return godina >= 18 ? true : false;
}

    //Drugi primjer
    provjeriPobjednika(false)
    function provjeriPobjednika(pobjeda){
        pobjeda ? console.log("Pobijedili ste") : console.log("Izgubili ste")
}

//Vježba četiri: Tamplate literals

let userName = "lega";
let items = 3;
let total = 75;

console.log(`Pozdrav ${userName}`);
console.log(`Imate ${items} u svojoj košarici`);
console.log(`Vaš total je ${total}`);

let text = 
    `Pozdrav ${userName}<br>
    Imate ${items} u vašoj košarici<br>
    Vaš total je ${total}<br>`;

document.getElementById('myLabel').innerHTML = text

console.log(text);

//Vježba pet: format currency
let myNum = 123456.789;
let newNum = 0.5;
let unitNum = 45;

//myNum = myNum.toLocaleString("en-US");
myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "USD"});    
console.log(myNum);

newNum = newNum.toLocaleString(undefined, {style: "percent"});
console.log(newNum);

unitNum = unitNum.toLocaleString(undefined, {style: "unit", unit: "celsius"});
console.log(unitNum)

//Vježba šest: konvercija celzijusa (mini aplikacija)
document.getElementById("submitButton").onclick = function(){
    
    let temp;
    
    if(document.getElementById("cButton").checked){
        temp = document.getElementById("textBox").value;
        temp = Number(temp);
        temp = toCelsius(temp);
        document.getElementById("tempLabel").innerHTML = temp + "°C"
    }else if(document.getElementById("fButton").checked){
        temp = document.getElementById("textBox").value;
        temp = Number(temp);
        temp = toFahrenheit(temp);
        document.getElementById("tempLabel").innerHTML = temp + "°F"
    }else{
        document.getElementById("tempLabel").innerHTML = "Odaberite jednu od opcija"
    }
}

function toCelsius(temp){
    return (temp - 32) * (5/9);
}
function toFahrenheit(temp){
    return temp * 9 / 5 +32
}

//Vježba sedam: Function expression
const greeting = function(){
    console.log("Pozdrav");
}

greeting();

let count = 0;

document.getElementById("povecanGumb").onclick = function(){
    count+=1;
    document.getElementById("myLabel2").innerHTML = count;
}

document.getElementById("smanjiGumb").onclick = function(){
    count-=1;
    document.getElementById("myLabel2").innerHTML = count;
}

//Vježba osam: arrow function

const pozdrav = userName => console.log(`Pozdrav ${userName}`);

pozdrav("Lega");

const percent = (x,y) => x/y * 100;

console.log(`${percent(80, 150)}%`);

let ocijene = [100, 50, 90, 60, 80, 70];

ocijene.sort((x,y) => y-x);
ocijene.forEach((element) => console.log(element));

//Vježba devet: nested functions

let userNam = "Lega";
let userInbox = 1;

login()

function login(){
    dysplayUserNam();
    dysplayUserInbox();

    function dysplayUserNam(){
        console.log(`Dobrodošli ${userNam}`);
        }
        
    function dysplayUserInbox(){
            console.log(`Imate ${userInbox} novu poruku`);
        }
}

//Vježba deset: map

const store = new Map([
    ["majca", 20],
    ["hlace", 200],
    ["jakna", 250],
    ["patike", 100]

]);

let shopingKosarica = 0;
/*
shopingKosarica += store.get("patike");
shopingKosarica += store.get("hlace");
console.log(shopingKosarica);//total
*/
/*
store.set("sesir", 40);
store.delete(sesir);
*/
console.log(store.has("sesir"));//boolean

console.log(store.size);

store.forEach((value, key) => console.log(`${key} ${value}`));

//Vježba deset: objekti
const car = {
    model:"Corvette",
    color:"plava",
    year:"2022",

    drive : function(){
        console.log("Vi vozite auto");
    },
    brake : function(){
        console.log("Vi ste stisnuli kočnice");
    }
}

console.log(car.model);
console.log(car.color);
console.log(car.year);

car.drive();
car.brake();