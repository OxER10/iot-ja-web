// Fetch all the characters
fetch('https://thronesapi.com/api/v2/Characters')
    .then(response => response.json())
    .then(data => {
        // Find Davos Seaworth's id:
        const davos = data.find(character => character.fullName === 'Davos Seaworth');

        // Log Davos Seaworth's id:
        console.log('Davos Seaworth ID:', davos.id);

        // Fetch only Davos Seaworth's information with id
        return fetch(`https://thronesapi.com/api/v2/Characters/${davos.id}`);
    })
    .then(response => response.json())
    .then(davosDetails => {
        // Log Davos Seaworth's information
        console.log(davosDetails);
    }
)

// Output:
// Davos Seaworth ID: 17
// {
//   id: 17,
//   firstName: 'Davos',
//   lastName: 'Seaworth',
//   fullName: 'Davos Seaworth',
//   title: 'Hand of the King',
//   family: 'House Seaworth',
//   image: 'davos-seaworth.png',
//   imageUrl: 'https://thronesapi.com/assets/images/davos-seaworth.png'
// }