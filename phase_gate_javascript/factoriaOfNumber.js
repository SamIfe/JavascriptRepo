const ps = require("prompt-sync")
const prompt = ps();

let numberInput = Number(prompt("Enter a number: "));
let factoria = 1;

for (let count = 1; count <= numberInput; count++) {
    factoria *= count;
}
    if (factoria <= 1000) {

	console.log("The factorial of " + numberInput + " is " + factoria);

    } else {

	console.log("You are not allow to exceed 1000");
    
}
    





