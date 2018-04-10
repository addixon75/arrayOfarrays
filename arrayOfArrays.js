function largestOfFour(arr) {
	let largestNum = arr.map((currentArr) => currentArr.reduce(function (previousVal, currentVal) { 
		if (previousVal > currentVal) {
		return previousVal;
        } else {
		return currentVal;
        }
}));
  return largestNum;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);