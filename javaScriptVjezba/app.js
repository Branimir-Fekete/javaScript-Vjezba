/*
const test = function() {
    setTimeout(function() {
        console.log("start of code");

        //alert("notice me!");
        
        console.log("end of code");
    }, 1000);

}

const test2 = function() {
    console.log("now i get attention");
};

test();
test2();

let logCall = function() {
    console.log("locCall was called back.");
};

setTimeout(logCall, 2000);

setTimeout(function() {
    console.log("the function was called back");
}, 3000);

let btn = document.querySelector('#item1');

btn.addEventListener("click", function(e) {
    console.log("the button was clicked.");
});
*/


let students = [{name:"Mary",score:90,school:"East"},
{name:"James",score:100,school:"East"},
{name:"Steve",score:40,school:"East"},
{name:"Gabe",score:90,school:"West"},
{name:"Rachel",score:85,school:"East"},
{name:"Rochelle",score:95,school:"West"},
{name:"Lynette",score:75,school:"East"}];

let processStudents = function(data, callback) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].school.toLowerCase() === "east") {
            if (typeof callback === "function") {
                callback(data[i]);
            }
        }
    }
}

processStudents(students, function(obj) {
    if (obj.score > 60) {
        console.log(obj.name + " passed!");
    }
});

let determineTotal = function() {
    let total = 0,
        count = 0;
        processStudents(students, function(obj) {
            total = total + obj.score;
            count++;
        });
        console.log("Total score: " + total + " -Total Count: " + count);
}

setTimeout(determineTotal,0);
console.log("code end")