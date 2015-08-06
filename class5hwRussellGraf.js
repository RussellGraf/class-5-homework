// variables
var cup = "The blue mug ";
var dropped = "was dropped and was broken";
var sadCup = cup + dropped
console.log(sadCup);


// variables
var num1 = 45;
var num2 = 1110;
var num3 = 7443;
var sum = num1 + num2 + num3;
console.log(num1 - num2 + num3 - sum);


//alerts
alert("This is an alert");//double quote mark

alert('This is also an alert'); //single quote mark


//data types 
string "hello world"
boolean - true, false
number - 1, 5, .5, 1000
unidentified - no value

//variables
var cars = ["Lamborghini", "Ferrari"];
var colors = ["blue", "red", "white"];
console.log( cars[0] + " " + colors[1]);


var othercars = [["Lamborghini", "Ferrari"], ["blue", "red", "white"]];
console.log(othercars[0][1] + " " + othercars[1][1]);


// different way to write this
var heyCars = {awesome: "Lamborghini", fast: "Ferrari"}; // curley braces because its an object. Needs key and value (heyCars.awesome)
console.log(heyCars.awesome);


//logic? not sure what this is

/*var ten = 10*/
10 === "ten"; //false
2 !== 45; //true
2 >= 2; // true

// logic rules (if else)

var num1 = 25;
if (num1 > 21) {
	console.log("you're old enough to buy this product")
} else {
	console.log("you're too young, come back later")
}

//arrays
var thing1 = [4, 5, 6, 7, 8, "cat"];
var thing2 = [4, 5, 6, 7, 8, "cat"];

console.log(thing1[4]);
console.log(thing1[2] + thing2[0]);


// other logoic rule - similar
var num1 = 25;
if (num1 > 21) {
	console.log("you're old enough to buy this product")
} else if (num = 21) {
	console.log("awesome, you're 21!")
} else {
	console.log("you're too young, come back later")
}

//functions - HTML is at the bottom as a comment
function replaceText() {
	document.getElementById("replacetext") .innerHTML = "HAHA you can't change me back";
} 
//HTML for above: <div id="replacetext" onclick="replaceText()">Click on me to change the text</div>


// Another function - do I have to add variables?
var number1 = 40
var number2 = 300
function addNumbers() {
	return number1 + 100 + number2;
}
console.log(addNumbers(number1,number2));


