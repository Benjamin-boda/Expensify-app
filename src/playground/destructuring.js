//Object destructuring

// const person = {
//     name: "Benjamin",
//     age: 24,
//     location: {
//         city: "Thorigny",
//         temp: 35
//     }
// };

// const {name: firstName = "Anonymous", age} = person;
// console.log(`${firstName} is ${age}`);

// const {city, temp: temperature} = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`)
// }

// const book = {
//     title: "David la farge",
//     author: "Exodia",
//     publisher: {
//         name: "Penguin"
//     }
// };

// const {name: publisherName = "Self-published"} = book.publisher;
// console.log(`The publisher is ${publisherName}`);


//Array Destruturing

// const address = ["rue carnot", "Thorigny", "Seine et marne", "77400"];

// const [, city = "New York", state] = address; 
// console.log(`${city} is in ${state}`);

const item = ["coffee (hot)", "2€", "3€", "4€"];
const [product, , medium] = item;

console.log(`A medium ${product} is ${medium}`);