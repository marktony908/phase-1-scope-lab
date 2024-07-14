// Write your solution in this file!

// index.js

// Task 1: Declare a variable in global scope called `customerName` using `var` keyword
var customerName = 'bob';

// Task 2: Write a function `upperCaseCustomerName()` to uppercase `customerName`
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// Task 3: Write a function `setBestCustomer()` to declare `bestCustomer` in global scope
function setBestCustomer() {
    bestCustomer = 'not bob';
}

// Task 4: Write a function `overwriteBestCustomer()` to change `bestCustomer`
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

// Task 5: Declare a constant `leastFavoriteCustomer` in global scope
const leastFavoriteCustomer = 'someone';

// Task 6: Write a function `changeLeastFavoriteCustomer()` attempting to change `leastFavoriteCustomer`
function changeLeastFavoriteCustomer() {
    // This will throw an error because you cannot change the value of a constant
    leastFavoriteCustomer = 'new person';
}

// Export functions if needed (not specified in the assignment)

module.exports = {
    customerName,
    upperCaseCustomerName,
    setBestCustomer,
    overwriteBestCustomer,
    leastFavoriteCustomer,
    changeLeastFavoriteCustomer
};

