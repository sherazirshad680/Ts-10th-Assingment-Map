// 1. Make an array of numbers that are doubles of the first array
var doubles = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var doubleArray = doubles.map(function (Items, Index, Array) { return Items * 2; });
console.log("Original Array ".concat(doubles));
console.log("doubleArray ".concat(doubleArray));
// 2. Take an array of numbers and make them strings
var nums = [1, 2, 3, 4, 5];
var strNums = nums.map(function (items, index, array) { return items.toString(); });
console.log(strNums);
// 3. Capitalize each of an array of names
var names = ["sheraz", "ahmad", "sir shoiab"];
var capitalizedNames = names.map(function (name) {
    return name.toUpperCase();
});
console.log(capitalizedNames);
// 4. Given an array of numbers, use .map() to calculate the square of each number and return a new array.
var nums = [1, 2, 3, 4, 5];
var square = nums.map(function (items, index, array) { return items * items; });
console.log(square);
// 5. Convert an array of strings to an array of uppercase strings using the .map() method.
var names = ["sheraz", "Ahmad", "sir rizwan"];
var capitalizedNames = names.map(function (name) {
    return name.toUpperCase();
});
console.log(capitalizedNames);
// 6.Transform an array of temperatures in Celsius to Fahrenheit using the formula (Celsius * 9/5) + 32.
var Fahrenheit = [1, 2, 3, 4, 5];
var Celsius = Fahrenheit.map(function (items, index, array) { return (items * 9 / 5) + 32; });
console.log(Celsius);
// 7. Use the .map() method to extract the lengths of strings from an array of strings and return a new array.
var arrayofstr = ["apple", "banana", "mango", "orange"];
var lengthsArray = arrayofstr.map(function (Items, index, array) { return Items.length; });
console.log(lengthsArray);
// 8. Convert an array of objects with name properties to an array containing only the names, using the .map() method.
var arrayOfObj = [
    { name: "Sheraz", age: 15 },
    { name: "Ahmad", age: 15 },
    { name: "Shoaib", age: 30 },
];
var arrayOfAges = arrayOfObj.map(function (Items, index, array) { return Items.name; });
// 9. Given an array of objects with title and author properties, create an array of strings in the format "Title by Author" using.map().
var books = [
    { title: "Book 1", author: "Author 1" },
    { title: "Book 2", author: "Author 2" },
    { title: "Book 3", author: "Author 3" },
];
var formatBooks = books.map(function (book) { return "".concat(book.title, " by ").concat(book.author); });
console.log(formatBooks);
// 10. Convert an array of objects with firstName and lastName properties to an array of full names using the.map()method
var firstName = [
    { firstname: "sheraz", lastname: "irshad" },
    { firstname: "ahmad", lastname: "jawad" },
    { firstname: "sir", lastname: "shoaib" }
];
var fullname = firstName.map(function (items) { return items.first + "" + items.lastName; });
console.log(fullname);
// 11. Use the.map() method to capitalize the first letter of each word in an array of strings.
// 12. Given an array of objects with quantity and price properties, create an array of total costs (quantity * price) using .map()
var quantity = [
    {
        item: "milk",
        price: 600,
        quantity: 700,
    },
    {
        item: "potato",
        price: 100,
        quantity: 600,
    },
    {
        item: "corn flour",
        price: 900,
        quantity: 1700,
    },
];
var totalPrice = quantity.map(function (items, index, array) { return items.price * items.quantity; });
console.log("Total price of [700 gram milk ,600 gram potato ,1700 gram cornflour  is", totalPrice);
