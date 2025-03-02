// Fetch all the characters
fetch('https://thronesapi.com/api/v2/Characters')
    .then(response => response.json())
    .then(data => {
        // Filter out duplicates with new
        const familiesWithHouse = new Set(
            data

        // Map only family parameter
        .map(character => character.family)

        // Filter families containing "House"
        .filter(family => family && family.includes('House'))
        );

    // Log each family name
    familiesWithHouse.forEach(family => console.log(family));
  }
)

// Output:
// House Targaryen
// House Tarly
// House Stark
// House Baratheon
// House Lannister
// House Greyjoy
// House Lanister
// House Clegane
// House Baelish
// House Seaworth
// House Tyrell