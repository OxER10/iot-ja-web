// Alice object
// Dot notation assign
const person = {};
person.name = "Alice";
person.age = 30;
person.gender = "female";
person.location = "New York";
// Dot notation log
console.log(person.name);
console.log(person.age);
console.log(person.gender);
console.log(person.location);
// Bracket notation log
console.log(person['name']);
console.log(person['age']);
console.log(person['gender']);
console.log(person['location']);
// For in loop log
for (let i in person) {
    console.log(i);
}

// Car constructor function 
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
// Creating a new car
const myCar = new Car("Ford", "Mustang", 1969);
// Dot notation log
console.log(myCar.make);
console.log(myCar.model);
console.log(myCar.year);
// For in loop log
for (let i in myCar) {
    console.log(i);
}

/*
Log:
Alice
30
female
New York
Alice
30
female
New York
name
age
gender
location
Ford
Mustang
1969
make
model
year
*/