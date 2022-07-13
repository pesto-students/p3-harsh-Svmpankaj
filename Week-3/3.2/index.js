let name = {
    firstname: "Mohit",
    lastname: "Kuma",
}
let printFullName = function (hometown, district) {
    console.log(this.firstname + " " + this.lastname + " from " + hometown + " , " + district);
}
printFullName.call(name, "Mango", "Jamshedpur");

let name2 = {
    firstname: "Kumar",
    lastname: "Ankit",
}

// function borrowing

// call method

printFullName.call(name2, "Chas", "Bokaro");

// apply method

printFullName.apply(name2, ["Chas", "Bokaro"]);

// bind method

let printMyName = printFullName.bind(name2, "Chas", "Bokaro");
console.log(printMyName);
printMyName();