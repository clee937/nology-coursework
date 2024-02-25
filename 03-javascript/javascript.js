// 1. Write a function that takes a number and returns true if it is a positive number and false if it is a negative number.

// const isNumberPositive = (num) => {

// 	if(typeof num !== 'number') {
// 		return 'Not a number. Please provide a number';
// 	}

// 	if(num >= 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// Ternary operator

const isNumberPositive = (num) => {

	if(typeof num !== 'number') {
		return 'Not a number. Please provide a number.';
	}

	return num >= 0 ? true : false;
}

console.log(isNumberPositive(-1)); // returns false
console.log(isNumberPositive(0.10)); // returns true
console.log(isNumberPositive('hi')); // returns 'Not a number. Please provide a number.'

// 2. Write a function that takes a number of days and converts it into an age.

const convertDaysToAge = (days) => {

	return days / 365;
}

// const convertDaysToAge = (days) => {
// 	const years = days / 365;
// 	return `You are ${years} old`;
// }

console.log(convertDaysToAge(3650)) // returns 10
console.log(convertDaysToAge(6570)); // returns 18

// 3. Write a function that takes three numbers and returns the largest of the three numbers.

// const getLargestNumber = (num1, num2, num3) => {

// 	let largestNum;

// 	if (num1 > num2 && num1 > num3) {
// 		return largestNum = num1;
// 	  } 
// 	  else if (num2 > num1 && num2 > num3) {
// 		return largestNum = num2;
// 	  } 
// 	  else {
// 		return largestNum = num3;
// 	  }
// }

const getLargestNumber = (num1, num2, num3) => {

	return Math.max(num1, num2, num3)
}

console.log(getLargestNumber(2 ,1, 4)); // returns 4
console.log(getLargestNumber(6,2,3)); // returns 6

// 4.Write a function that takes an array of names and returns the last name from the array of names.

console.log(getLastName(["Charlie","Rob","Andy"]));
console.log(getLastName(["Ash","Stu"]));
