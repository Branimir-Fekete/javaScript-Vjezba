/*
let asyncFunction = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("asyncFunction has resolved.");
        }, 3000);
    });
};

let asyncFunction2 = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("asyncFunction2 is done.");
        }, 2000);
    });
};


asyncFunction()
.then(function(val) {
    console.log("Yeah!! " + val);
    return asyncFunction2();
})
.then(function(val) {
    console.log("second promise: " + val);
});

console.log("this code is async");
*/


/*
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

.catch(function(err){
    console.log(err);
});

console.log("this is asynch");
*/

/*
const swapi = function(num) {
    let url = "https://swapi.dev/api/people/";

    fetch(url + num + "/")
    .then(data => data.json())
    .then(obj => {
        console.log(obj);
        return fetch(obj.homeworld);
    })
    .then(hwdata => hwdata.json())
    .then(hwobj => console.log(hwobj));
};

swapi(9);

console.log("Other comands!");
*/


//    url:  https://jsonplaceholder.typicode.com/
/*
fetch('https://jsonplaceholder.typicode.com/todos/')
.then(data => data.json())
.then(obj => console.log(obj));

console.log('Other code');
*/

/*
let todo = {
    completed: false,
    userId: 1,
    title: "Learn Promises"
};

fetch('https://jsonplaceholder.typicode.com/todos/', {
    method: 'POST',
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify(todo)
})
.then(resp => resp.json())
.then(obj => console.log(obj))
.catch(reject => console.log(`Unable to create todo ${reject}`));

console.log('Other code');
*/

/*
const moviePlanets = function(movieNum) {
    let url = 'https://swapi.dev/api/films/';

    $.getJSON(url + movieNum + '/')
    .then(function(response) {
        console.log(response.title);

        response.planets.forEach(p => $.getJSON(p).then(pl => console.log(pl.name)));
    })
    .catch(reject => console.log(`Couldn't retrieve films: ${reject}`));
};

moviePlanets(1);
*/


