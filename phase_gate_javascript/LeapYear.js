console.log(isLeapYear(2020));

function isLeapYear(year) {
	if (year % 4 == 0 || year % 400 == 0) {
		return true;
	}
	else if(year % 100 == 0) {
		
		return false;

	} else {
		return false;


	}
}