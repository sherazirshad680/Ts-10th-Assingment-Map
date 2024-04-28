// 1. Make an array of numbers that are doubles of the first array
var doubles: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var doubleArray = doubles.map((Items, Index, Array) => Items * 2);
console.log(`Original Array ${doubles}`);
console.log(`doubleArray ${doubleArray}`);

// 2. Take an array of numbers and make them strings
var nums: number[] = [1, 2, 3, 4, 5];
var strNums = nums.map((items, index, array) => items.toString());
console.log(strNums);


// 3. Capitalize each of an array of names
var names: string[] = ["sheraz", "ahmad", "sir shoiab"];
var capitalizedNames: string[] = names.map(name => {
    return name.toUpperCase();
});
console.log(capitalizedNames);


// 4. Given an array of numbers, use .map() to calculate the square of each number and return a new array.
var nums: number[] = [1, 2, 3, 4, 5];
var square = nums.map((items, index, array) => items * items
)
console.log(square);


// 5. Convert an array of strings to an array of uppercase strings using the .map() method.
var names: string[] = ["sheraz", "Ahmad", "sir rizwan"];
var capitalizedNames: string[] = names.map(name => {
    return name.toUpperCase();
});
console.log(capitalizedNames);

// 6.Transform an array of temperatures in Celsius to Fahrenheit using the formula (Celsius * 9/5) + 32.
var Fahrenheit: number[] = [1, 2, 3, 4, 5]
var Celsius = Fahrenheit.map((items: any, index: any, array: any) => (items * 9 / 5) + 32)
console.log(Celsius)

// 7. Use the .map() method to extract the lengths of strings from an array of strings and return a new array.
var arrayofstr: string[] = ["apple", "banana", "mango", "orange"];
var lengthsArray: number[] = arrayofstr.map((Items, index, array) => Items.length);
console.log(lengthsArray)

// 8. Convert an array of objects with name properties to an array containing only the names, using the .map() method.
var arrayOfObj = [
    { name: "Sheraz", age: 15 },
    { name: "Ahmad", age: 15 },
    { name: "Shoaib", age: 30 },
];

var arrayOfAges = arrayOfObj.map((Items, index, array) => Items.name);


// 9. Given an array of objects with title and author properties, create an array of strings in the format "Title by Author" using.map().
var books = [
    { title: "Book 1", author: "Author 1" },
    { title: "Book 2", author: "Author 2" },
    { title: "Book 3", author: "Author 3" },
];

var formatBooks: string[] = books.map(book => `${book.title} by ${book.author}`);

console.log(formatBooks);


// 10. Convert an array of objects with firstName and lastName properties to an array of full names using the.map()method
var firstName: any = [
    { firstname: `sheraz`, lastname: `irshad` },
    { firstname: `ahmad`, lastname: `jawad` },
    { firstname: `sir`, lastname: `shoaib` }
]
var fullname = firstName.map(
    (items: any) => items.first + `` + items.lastName
)
console.log(fullname);


// 11. Use the.map() method to capitalize the first letter of each word in an array of strings.


// 12. Given an array of objects with quantity and price properties, create an array of total costs (quantity * price) using .map()
var quantity: any = [
    {
        item: `milk`,
        price: 600,
        quantity: 700,
    },
    {
        item: `potato`,
        price: 100,
        quantity: 600,
    },
    {
        item: `corn flour`,
        price: 900,
        quantity: 1700,
    },
];
var totalPrice = quantity.map(
    (items: any, index: any, array: any) => items.price * items.quantity
);
console.log(
    `Total price of [700 gram milk ,600 gram potato ,1700 gram cornflour  is`,
    totalPrice
);