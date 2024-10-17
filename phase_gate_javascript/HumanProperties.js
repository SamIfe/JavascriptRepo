const humanProfile = {name: "Alice", age: 30, city: "Wonderland"};
	let count = 0;
	for (let profile in humanProfile) {
		if (humanProfile.hasOwnProperty(profile));
		count++;
	}
	console.log("Properties in object Human Profile are " + count)
