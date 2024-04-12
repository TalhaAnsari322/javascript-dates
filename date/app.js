// QUestion: 1
// Write a program that displays current date and time in
// your browser.
const currentDate = new Date()
console.log(currentDate)



// Question: 2
// Write a program that alerts the current month in words.
// For example December.
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
const month = currentDate.getMonth();
alert(monthNames[month]);



// Question: 3
// Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.
alert(monthNames[month].slice(0, 3));



// Question: 4
// Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.
const week = ["sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "saturday"]
const currentDayOfWeek = currentDate.getDay();
console.log(currentDayOfWeek)
if (week[currentDayOfWeek] === "saturday") {
    console.log("It's Fun day")
} if (week[currentDayOfWeek] === "sunday") {
    console.log("It's Fun day")
} else {
    console.log('Its Working day')
}



// Question: 5
// Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.
const date = currentDate.getDate()
if (date < 16) {
    console.log("“First fifteen days")
} else {
    console.log("Last days of the month")
}



// Question: 6
// Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.
var current = new Date();
var januaryFirst1970 = new Date('January 1, 1970 00:00:00 GMT+0000');
var millisecondsSince1970 = current.getTime() - januaryFirst1970.getTime();

var minutesSince1970 = millisecondsSince1970 / (1000 * 60);
console.log(`current date:${current}`)
console.log('elapsed milliseconds since january 1,1970: ', millisecondsSince1970);
console.log('elapsed minutes since january 1,1970:', minutesSince1970);



// Question: 7
// Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.
const hours = currentDate.getHours()
if (hours < 12) {
    console.log("Its AM")
} else {
    console.log("Its PM")
}



// Question: 8
// Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.
dateString = "2020,12,31"
const datee = new Date(dateString)
console.log("Later Date:", datee)



// Question: 9
// Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015
const date1 = new Date("June-18-2015")
const date2 = new Date()

const oneDay = 24 * 60 * 60 * 1000
const diff = Math.abs(date2 - date1)

const finalResult = Math.floor(diff / oneDay)
alert(`${finalResult} days have passed since 1st Ramadan,2015 `);



//Question: 10
// Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.
var referenceDate = new Date("Sat Dec 05 2015 22:50:15 GMT+0500");
var beginningOf2015 = new Date("Thu Jan 01 2015 00:00:00 GMT+0000")

const ref = referenceDate.getTime();
const begin = beginningOf2015.getTime();

const difff = ref - begin
const result = Math.floor(difff/1000);

console.log(`${result} seconds had passed since beginning of 2015`)



//Question: 11
// Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.
const hour = currentDate.getHours()
const resulttt = hour - 1
const Date4 = currentDate.setHours(resulttt)
console.log(Date4)
const Ndate = new Date(Date4)
console.log(`1 hour ago,it was ${Ndate}`)



//Question: 12
// Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?
const year = currentDate.getFullYear()
const result1 = year - 100
const date5= currentDate.setFullYear(result1)
const Nyear = new Date(date5)
console.log(`100 years back,it was ${Nyear}`)



//Question: 13
// Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.
const currentDate1 = new Date()
const user = prompt("Enter your age")
const birth = currentDate1.getFullYear()
console.log(birth)
const BirthYear = birth - user
console.log(`your birth year is ${BirthYear}`)



//Question: 14
// Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,

// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge
var customerName = "Talha Ansari";
var currentMonth = "April";
var NumOfUnits = 100;
var chargesPerUnits = 10.5;

console.log(`Customer Name: ${customerName}`)
console.log(`Month: ${currentMonth}`)
console.log(`Number of units: ${NumOfUnits}`)
console.log(`Charges per unit: ${chargesPerUnits}`)

var NetAmount = NumOfUnits * chargesPerUnits
console.log(`Net Amount Payable (within Due Date): ${NetAmount}`)
var LateAmount = NetAmount * 0.1
console.log(`late payment surcharge: ${LateAmount}`)
var GrossAmount = NetAmount + LateAmount
console.log(`Gross Amount Payable (after Due Date): ${GrossAmount}`)