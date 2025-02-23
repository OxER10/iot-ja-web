// Created book JSON string
var book = '{"title": "Castle of the rings","author": "Jörma Pötter","year": 1937,"pages": 1}';
console.log(book);

// Use JSON.parse and log
const book1 = JSON.parse(book);
for (let i in book1) {
    console.log(book1[i]);
}

// Create array of JSON
var books = [];
books.push('{"title":"Fränklin turbottaa rättisitikan","author":"Joke Bowling","year":1983,"pages":39}'); 
books.push('{"title":"Paluu luontoon","author":"Freddy Flint","year":145,"pages":203}'); 
books.push('{"title":"Kivipyörän keksiminen","author":"Bane Rumble","year":2021,"pages":305}');
console.log(books);

// Use for loop to iterate books to obj
var array = [];
books.forEach(function(book) {
    array.push(JSON.parse(book));
});

// Use forEach to print values
array.forEach(function(book) {
    for (let i in book) {
        console.log(book[i]);
    }
});

// Use map to create new array
var bookTitles = array.map(function(book) {
    return book.title;
});
console.log(bookTitles);

// Use JSON.stringify
var bookString = JSON.stringify(bookTitles);

// Log bookString
console.log(bookString);