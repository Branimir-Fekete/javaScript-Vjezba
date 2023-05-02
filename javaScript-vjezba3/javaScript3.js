//Vježba 1. array
let fruits = ["jabuka", "kruška", "banana"];//array kreće od 0 (nula)

fruits[0] = "orah"//zamjenjuje člana koji je naveden u zagradi
fruits.push("limun");//dodaje novog na kraju
fruits.pop();//uklanja zadnjeg
fruits.unshift("kivi");//dodaje na početak
fruits.shift();//uklanja prvog

let lenght = fruits.length;
let index = fruits.indexOf("banana")

console.log(fruits);//ispisuje cijeli array "fruits"
console.log(lenght);//dužina array-a
console.log(index);//ispisuje položaj u array-u

//Vježba 2. loop through an array
let prices = [5, 10, 15, 20];

for(let i = 0; i < prices.length; i += 1){//prema naprijed petlja +
    console.log(prices[i]);
}

for(let i = prices.length - 1; i >= 0; i -= 1){//prema natrag petlja -
    console.log(prices[i]);
}

for(let price of prices){//jednostavniji način
    console.log(price);
}

//vježba 3. sortiranje array
let cars = ["audi", "golf", "mečava", "fičo"];

cars = cars.sort();//abecednim redom A-Z
cars = cars.sort().reverse();//sortiranje unatrag Z-A

for(let car of cars){
    console.log(car);
}

//Vježba 4. 2D array
let meats = ["svinjetina", "junetina", "piletina"];
let vegetables = ["mrkva", "grah", "krumpir"];
let alcohol = ["pivo", "vino", "rakija"];

let groceryList = [meats, vegetables, alcohol];

for(let list of groceryList){//prepisat će cijeli array
    console.log(list)
}

groceryList[0][0] = "odrezak";//prva zagrada=red, druga zagrada=stupac

for(let list of groceryList){//sortirat če ga kao listu
    for(let food of list){
        console.log(food);
    }
}

//Vježba 5. spread operator ...
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(...numbers);//... pretvara u individualne brojeve

let maximum = Math.max(...numbers);
console.log(maximum);//Ako nema ... vrati NaN (not a number)

let class1 = ["pikachu", "raichu", "machamp"];
let class2 = ["bulbasaur", "charizard", "jigglypuff"];

class1.push(...class2);
console.log(...class1);//Ako se doda ... na class1 and console.log() izbacit će ćisti spisak

//Vježba 7. rest parameters
let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;
let f = 6;

console.log(sum(a, b, c, d));

function sum(...numbers){//Zbraja beskonačni broj brojeva s jednom funkcijom
    let total = 0;
    for(let number of numbers){
        total += number
    }
    return total
}

//Vježba 8. callback
let total = sum(2, 3);
displayConsole(total);
displayDOM(total);

function sum(x, y){
    let result = x + y;
    return result;
}

function displayConsole(output){
    console.log(output);
}//Ispisuje u konzoli

function displayDOM(output){
    document.getElementById("myLabel").innerHTML = output;
}//Ispisuje u HTML-u

//Vježba 9. array for each()
let students = ["ivo", "ana", "luka"];
students.forEach(capitalize);
students.forEach(print);

function capitalize(element, index, array){
    array[index] = element[0].toUpperCase() + element.substring(1);
}//ispisat će prvo veliko slovo

function print(element){
    console.log(element);
}//ispisat će sve studente

console.log(students[0]);

//Vježba 10. array map()
let numberS = [1, 2, 3, 4, 5];//zadnje slovo S je veliko jer se ponavlja naziv funkcije
let squares = numberS.map(square);//square-kvadriranje
let cubes = numberS.map(cube);//na treću potenciju

cubes.forEach(print);//ovdije se mijenjaju variable

function square(element){
    return Math.pow(element, 2);
}

function cube(element){
    return Math.pow(element, 3);
}

function print(element){
    console.log(element);
}

//Vježba 11. array.filter()
let ages = [18, 16, 21, 17, 19, 90];
let adults = ages.filter(checkAge);

adults.forEach(print);

function checkAge(element){
    return element >= 18;
}

function print(element){
    console.log(element);
}

//Vježba 12. array.reduce()
let priceS = [5, 10, 15, 20, 25, 30];//Prvo slovo je veliko S jer se ponavlja naziv varijable
let ukupno = priceS.reduce(checkOut);//na hrvatskom je da se ponavlja iz prijašnjih vježbi

console.log(`Ukupan iznos je: €${ukupno}`);

function checkOut(total, element){
    return total + element;
}

//Vježba 13. sort an array of numbers
let grades = [100, 50, 90, 80, 70];

grades = grades.sort(acendingSort);//Ovdje se mjenja (acendingSort) i (acendingSort)

grades.forEach(print);

function desendingSort(x, y){
    return y - x;
}

function acendingSort(x, y){
    return x - y;
}

function print(element){
    console.log(element);
}
