const readlineSync = require('readline-sync');
const ps = require("prompt-sync")
const prompt = ps();
/*
Drivers are concerned with the mileage their automobiles get. One driver has
kept track of several trips by recording the miles driven and gallons used for each tankful. Develop
a Java application that will input the miles driven and gallons used (both as integers) for each trip.
The program should calculate and display the miles per gallon obtained for each trip and print the
combined miles per gallon obtained for all trips up to this point. All averaging calculations should
produce floating-point results. Use class Scanner and sentinel-controlled iteration to obtain the data
from the user.

PSUEDO CODE.

Initialize and store the variable milesDriven to be used later.
Initialize and store the variable gallonUsed to be used later.
Give condition to be true to receive user input.
call the variable milesDriven and request user input
prompt the input to break if miles == "-1" to exit user input.
calculate the gallon used for the current trip
Add total mileDriven
Add total gallonUsed
if galonUsed is not equal to zero
initialize tripMilePerGallon to be mileDriven divided by gallonused (as floating-point)
Print the trip MPG to be tripMilePerGallon
Initialize totalMiles to be equal to totalMiles plus mileDriven
Initialize totalGallons to be equal to totalGallons plus gallonUsed
calculate the miles per gallon for all trips
initialize ovarallMPGToal to be equal tototalIles divided by totalGalons
print out combine miles
Else, gallon used cannot be zero, please enter valid values of gallon

*/

let longString ="WELCOME TO FUEL USAGE APPLICATION";
console.log("\n" + longString + "\n");

let milesDriven;
let gallonUsed;

let totalMiles = 0;
let totalGallonUsed = 0;

while (true) {
	milesDriven = parseInt(readlineSync.question("Enter the miles driven ('-1' to quit): "), 10);
		if (milesDriven === -1) {
			break;
		}
	gallonused = parseInt(readlineSync.question("Enter the gallon used (-1 to quit): "), 10);
		if (gallonUsed === -1) {
			break;
	}

	let milesPerGallon = milesDriven / gallonUsed;
	let firstResult = parseFloat(milesPerGallon.toFixed(2));
	console.log("Miles per gallon for this trip is " + firstResult);
	
	totalMiles = totalMiles + milesDriven;
	totalGallonUsed = totalGallonUsed + gallonused;

	if (totalGallonUsed != 0) {
	let tripMilePerGallon = totalMiles / totalGallonUsed;
	let secondResult = parseFloat(tripMilePerGallon.toFixed(2));
	console.log("Overall total miles per gallon is " + secondResult);
	}
}


