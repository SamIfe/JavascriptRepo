let number = 10;
let count = 0;

do {
console.log(count);
count++;
} while(count < number);

let arr = [1, 2, 3, "Boy"];
for(let index in arr){

console.log(index);
console.log(arr[index]);
}


let user = {
	age : 12,
	sex : "male",
// User declearation is an object
};

for(let key in user){
	console.log(user[key]);

};

let word = "Alexandral Hanolds";

	for(let char of word){
	console.log(word);
	console.log(char);
}

let array = [1, 2, 3, "dog", "chicken",];
for(let element of array){
console.log(element);
}