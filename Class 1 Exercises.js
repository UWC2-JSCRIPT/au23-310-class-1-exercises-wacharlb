/**
 * MATH
 */

// 1. Pagliacci charges $16.99 for a 13” pizza and $19.99 for a 17” pizza.
// What is the area for each of these pizzas?
// (radius would be the listed size - i.e. 13" - divided by 2)

const SMALL_PIZZA_DIAMETER = 13;
const LARGE_PIZZA_DIAMETER = 17;
const SMALL_PIZZA_PRICE = 16.99;
const LARGE_PIZZA_PRICE = 19.99;

const smallPizzaArea = Math.PI * Math.pow((SMALL_PIZZA_DIAMETER / 2), 2);
const largePizzaArea = Math.PI * Math.pow((LARGE_PIZZA_DIAMETER / 2), 2);

console.log(smallPizzaArea);
console.log(largePizzaArea);

// 2. What is the cost per square inch of each pizza?

const smallPizzaCostPerSquareInch = SMALL_PIZZA_PRICE / smallPizzaArea;
const largePizzaCostPerSquareInch = LARGE_PIZZA_PRICE / largePizzaArea;

console.log(`Small Pizza Cost Per Square Inch: $${smallPizzaCostPerSquareInch}`)
console.log(`Large Pizza Cost Per Square Inch: $${largePizzaCostPerSquareInch}`)

// 3. Using the Math object, put together a code snippet
// that allows you to draw a random card with a value
// between 1 and 13 (assume ace is 1, jack is 11…)

const LOWEST_CARD = 1
const HIGHEST_CARD = 13

const card = Math.floor(Math.random() * (HIGHEST_CARD - LOWEST_CARD + 1) + LOWEST_CARD)

console.log(`card: ` +  card)

// 4. Draw 3 cards and use Math to determine the highest
// card

const card1 = Math.floor(Math.random() * (HIGHEST_CARD - LOWEST_CARD + 1) + LOWEST_CARD)
const card2 = Math.floor(Math.random() * (HIGHEST_CARD - LOWEST_CARD + 1) + LOWEST_CARD)
const card3 = Math.floor(Math.random() * (HIGHEST_CARD - LOWEST_CARD + 1) + LOWEST_CARD)

console.log(`card1: ${card1}`)
console.log(`card2: ${card2}`)
console.log(`card3: ${card3}`)

const highestCard = Math.max(card1, card2, card3)
console.log(`Highest Card of cards 1, 2, and 3: ${highestCard}`)

/**
 * ADDRESS LINE
 */

// 1. Create variables for firstName, lastName,
// streetAddress, city, state, and zipCode. Use
// this information to create a formatted address block
// that could be printed onto an envelope.

let firstname = 'John'
let lastname = 'Harper'
let streetAddress = '90 Southampton St'
let city = 'Boston'
let state = 'Massachusetts'
let zipCode = '02118'

console.log(`${firstname} ${lastname}`)
console.log(`${streetAddress}`)
console.log(`${city}, ${state} ${zipCode}`)

let addressLabel = `${firstname} ${lastname}\n${streetAddress}\n${city}, ${state} ${zipCode}`
console.log(`${addressLabel}`)

// 2. You are given a string in this format:
// firstName lastName(assume no spaces in either)
// streetAddress
// city, state zip(could be spaces in city and state)
// 
// Write code that is able to extract the first name from this string into a variable.
// Hint: use indexOf, slice, and / or substring

let tokens = addressLabel.split(/ |\n/)
let lines = addressLabel.split(/\n/)
const FULLNAME_LINE_INDEX = 0
const STREETADDRESS_LINE_INDEX = 1
const CITY_STATE_ZIP_LINE_INDEX = 2
const FIRSTNAME_INDEX = 0
const LASTNAME_INDEX = 1
const CITY_INDEX = 0
const STATE_ZIP_INDEX = 1
const STATE_INDEX = 0
const ZIPCODE_INDEX = 1

let fullnameExtracted = lines[FULLNAME_LINE_INDEX]
let streetAddressExtracted = lines[STREETADDRESS_LINE_INDEX]
let cityStateZipExtracted = lines[CITY_STATE_ZIP_LINE_INDEX]

let firstnameExtracted = fullnameExtracted.split(/ /)[FIRSTNAME_INDEX]
let lastnameExtracted = fullnameExtracted.split(/ /)[LASTNAME_INDEX]
let cityExtracted = cityStateZipExtracted.split(/, /)[CITY_INDEX]
let stateExtracted = cityStateZipExtracted.split(/, /)[STATE_ZIP_INDEX].split(/ /)[STATE_INDEX]
let zipcodeExtracted = cityStateZipExtracted.split(/, /)[STATE_ZIP_INDEX].split(/ /)[ZIPCODE_INDEX]

console.log(lines[0])
console.log(lines[1])
console.log(lines[2])
console.log(tokens)

console.log(`firstnameExtracted: ${firstnameExtracted}`)
console.log(`lastnameExtracted: ${lastnameExtracted}`)
console.log(`streetExtracted: ${streetAddressExtracted}`)
console.log(`cityExtracted: ${cityExtracted}`)
console.log(`stateExtracted: ${stateExtracted}`)
console.log(`zipcodeExtracted: ${zipcodeExtracted}`)

/**
 * FIND THE MIDDLE DATE
 */
// On your own find the middle date(and time) between the following two dates:
// 1/1/2020 00:00:00 and 4/1/2020 00:00:00
//
// Look online for documentation on Date objects.

const startDate = new Date("2020-01-02")
const endDate = new Date("2020-04-01")

const startTime = startDate.getTime()
const endTime = endDate.getTime()

console.log(`startTime: ${startTime}`)
console.log(`endTime: ${endTime}`)

const averageTime = (endTime + startTime) / 2
const middleDate = new Date(averageTime)

console.log(`startDate: ${startDate}`)
console.log(`endDate: ${endDate}`)
console.log(`middleDate: ${middleDate}`)
