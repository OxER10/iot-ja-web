// Create JSON string
var employee = '{"firstName":"Zarya","lastName":"Szoboslai","age":12,"position":"CEO"}';

// Parse the string to obj
var obj = JSON.parse(employee);
for (let i in obj) {
    console.log(obj[i]);
}

// Create array of JSON
var employees = [];
employees.push('{"firstName":"Kaapo","lastName":"Gakpo","age":20,"position":"Siivooja"}');
employees.push('{"firstName":"Virgil","lastName":"Van Maguire","age":46,"position":"Asiakaspalvelija"}');
employees.push('{"firstName":"Khristiano","lastName":"Sewy","age":6,"position":"Viemärisukeltaja"}');

// Use for loop to iterate
var array = [];
employees.forEach(function(employee) {
    array.push(JSON.parse(employee));
});

// Use filter method
var seniorEmployees = array.filter(employee => employee.age > 40);
console.log(seniorEmployees);

// Use map
var employeePositions = array.map(function(employee) {
    return employee.position;
});
console.log(employeePositions);

// Use reduce and store in averageAge
var ages = array.map(employee => employee.age);
var averageAge = ages.reduce(func) / ages.length;
function func (total, num) {
    return total + num;
}

// Log averageAge
console.log(averageAge);