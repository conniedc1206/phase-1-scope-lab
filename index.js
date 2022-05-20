//declare a global variable called customerName using var keyword
//assign it the value 'bob'
var customerName = 'bob';

const leastFavoriteCustomer = 'john'

//define a function
//accesses global variable customerName
//uppercases the variable
//no return statement bc we want to redefine the variable
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

//write a function that when called, declares a variable called bestCustomer in global scope and assigns it to 'not bob'
function setBestCustomer() {
    bestCustomer = 'not bob';
}

//See the consequences of declaring a variable in global scope, by writing a new function called overwriteBestCustomer() that changes that bestCustomer variable to 'maybe bob'.
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
}

//Now declare a constant (using the const keyword) in global scope called leastFavoriteCustomer; be sure to assign it some initial value. 
//see above

//write a function called changeLeastFavoriteCustomer() that attempts to change that constant - notice what JavaScript does when you try to change the constant.
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'steve'
}