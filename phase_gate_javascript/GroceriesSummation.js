let values = {"groceries": 150, "dining out": 100, "transportation": 50, "entertainment": 80};
	let total = 0;

	for(let keys in values) {
		total += values[keys];

	}
		console.log("David total expenditure is " + total);