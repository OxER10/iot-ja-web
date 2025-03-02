// Did this with previous instructions
// Fetch every character
const result = await fetch("https://thronesapi.com/api/v2/Characters");
const data = await result.json();

// Map the results
var houseStark = data.map(function(house) {
    if (house.family == "House Stark") {
        return house.fullName;
    }
});

// Filter undefined out from array
var houseStark = houseStark.filter(house => house != undefined);

// Log array
houseStark.forEach(function(name) {
    console.log(name);
});

// Output:
// Jon Snow
// Arya Stark
// Sansa Stark
// Brandon Stark
// Ned Stark
// Catelyn Stark
// Rob Stark