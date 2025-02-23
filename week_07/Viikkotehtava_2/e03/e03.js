// Create object person
const person = {
    firstName: 'value',
    lastName: 'value',
    age: 'value',
    occupation: 'value'
};

// Create function called getPersonInfo
function getPersonInfo(person) {
    console.log(person.firstName);
    console.log(person.lastName);
    console.log(person.age);
    console.log(person.occupation, "\n");
}

// Create array of objects
const people = [
    { firstName: "Oskari", lastName: "Jarvinen", age: 22, occupation: "Student" },
    { firstName: "Pekka", lastName: "Peranto", age: 44, occupation: "Unemployed" },
    { firstName: "Jussi", lastName: "Saamaton", age: 33, occupation: "Kelarotta" }
]

// Call getPersonInfo for each person
people.forEach(function(person) {
    getPersonInfo(person);
});

// Use map to create new array
const fullNames = people.map(function(person) {
    return person.lastName;
});
console.log(fullNames);

// Write a function sortByAge
function sortByAge(array) {
    let sortArray = array.map(function(sort) {
        return sort.age;
    });
    sortArray.sort(function(x,y){return x-y});
    return sortArray;
}
// Log sorted ages
const ageSorted = sortByAge(people);
console.log(ageSorted)