let vowels = ["a", "e", "I", "o", "u"];
let userInput = "amagamation"
let counter = 0;
for (let vowel = 0; vowel < vowels.length; vowel++){

	for (let character of userInput) {
	    if (vowels[vowel] === character) {
		
		counter++;

		     }

		}
	

    }
	console.log(counter);
