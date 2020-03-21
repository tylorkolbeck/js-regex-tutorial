// A regular expression is an object that can be defined using a RegExp Object or using the regular expression literal format.
// You pass either option the pattern that you wish to search for.

const regExpConstructor = new RegExp('hello')
const regExpLiteral = /hey/

// If you are using a variable to pass to the regexp then you will need to use the regExp constructor

let searchPattern = 'hello'
const regExpConstructor = new RegExp(searchPattern)

// This will not work because the literal format does not accept template literals
const regExpLiteral = `/${searchPattern}/`

// Testing our pattern against the following strings would all match 'hello'
// hello world
// helloworld

// but how do we test our pattern against a string?

// The regexp constructor gives us a test method. We will assign our string to test to a 
// variable and then pass it to the test method.

let stringToSearch = 'hello world'
regExpConstructor.test(stringToSearch)

