const ps = require("prompt-sync")
const prompt = ps();

/*let theNumber = Number(prompt("Pick anumber: "));
if(!Number.isNaN(theNumber)){


console.log("The number is the square root of " + theNumber * theNumber);
} else {
console.log("Hey. Why didn't you give me a number?");
}




let yourName;
do {
yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName);*/


function starParttern(star) {
for (let count = 0; count <= star; count++) {
	let str = " ";
	for(let j = 0; j < count; j++) {
	str += "* "
		}

	console.log(str);
	}

}

starParttern(10)
starParttern(3)

