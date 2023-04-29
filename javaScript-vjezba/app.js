//Prva vježba if, if else, else vježba
let age = -5;

if(age >= 18){
    console.log("Punoljetni ste!!!")
}
else if(age < 0){
    console.log("Još niste rođeni!!!")
}
else{
    console.log("Maloljetni ste!!!")
}


//Druga vježba
let online = true;

if(online){
    console.log("Vi ste online")
}else{
    console.log("Vi niste online!!!")
}


//Treća vježba check opcija
document.getElementById("myButton").onclick = function(){

    const checkBox = document.getElementById("checkBox")
    const visaBtn = document.getElementById("visaBtn")
    const mastercardBtn = document.getElementById("mastercardBtn")
    const paypalBtn = document.getElementById("paypalBtn")
    
    //Provjera preplate
    if(checkBox.checked){
        console.log("Preplaćeni ste")  
    }
    else{
        console.log("Niste preplaćeni")
    }
    
    //Provjera kartice
    if(visaBtn.checked){
        console.log("Plaćate Visa karticom")
    }else if(mastercardBtn.checked){
        console.log("Plaćate MasterCard karticom")
    }else if(paypalBtn.checked){
        console.log("Plaćate PayPal karticom")
    }else{
        console.log("Morate odabrati jednu od kartica")
    }
}


//Četvrta vježba switch
let ocijena = "0"

switch(ocijena){
    case "5":
        console.log("Odličan pet BRAVO");
    case "4":
        console.log("Vrlo dobar četiri");
    case "3":
        console.log("Dobar tri");
    case "2":
        console.log("Dovoljan dva");
    case "1":
        console.log("Nedovoljan jedan");
    default:
        console.log(ocijena, "nije ocijena")
}


//Peta vježba && ||
let temp = 1;
let suncano = false;

if(temp <=0 || temp >= 30){
    console.log("Vrijeme je loše")
}else{
    console.log("Vrijeme je odlično")
}

if(temp > 0 && temp < 30 && suncano){
    console.log("Vrijeme je odlično")
}else{
    console.log("Vrijeme je loše")
}

                                                                                /*Ovaj komentar je da se ne pokolju s donjim kodom gdje se koristi 
                                                                                  window.prompt
//Šesta vježba while(dok) loop (petlja)
let korisnickoIme = "";

while(korisnickoIme == "" || korisnickoIme == null){
    korisnickoIme = window.prompt("Poštovani unesite svoje ime")
}

console.log("Pozdrav", korisnickoIme);

//Sedma vježba do while(radi dok) loop (petlja)
let userName;

do{
    userName = window.prompt("Poštovani unesite svoje ime")
}while(userName == "")

console.log("Srdačan pozdrav", userName)
                                                                                */

//Osma vježba for(za) loop (petlja)
for(let x = 1; x <=10; x+=1){
    console.log(x);
}

for(let i = 10; i >=0; i-=1){
    console.log(i);
}

for(let z = 0; z <= 28; z += 4){
    console.log(z);
}

for(let y = 100; y >=0; y-=5){
    console.log(y);
}

//Deveta vježba brake(prekini) and(i) continue(nastavi)
for(let i = 1; i <= 20; i +=1){
    if(i==13){
        break;
    }
    console.log(i);
}
//break prekida do određenog broja koji je naveden
//continue izbacuje broj koji je naveden
for(let l = 1; l <= 20; l +=1){
    if(l==13){
        continue;
    }
    console.log(l);
}


//Deseta vježba nested loops (petlja gnjezda)
    //za konzolu
for(i = 1; i <=5; i+=1){
    for(let j = 1; j <=3; j+=1){
        console.log(j)
    }
}
    //za HTML
let simbol = window.prompt('Unesite simbol');
let redovi = window.prompt('Unesi # redova');
let stupci = window.prompt('Unesite # stupaca');

for(i = 1; i <= redovi; i +=1){
    for(let j = 1; j <= stupci; j+=1){
        document.getElementById("mojPravokutnik").innerHTML += simbol;
    }
    document.getElementById("mojPravokutnik").innerHTML +="<br>";
} 

