'use strict';

function fibonacci_series(n) {
	var arr = new Array(n+1);
	arr[0] = 0;
	arr[1] = 1;
	for(var i = 1;i < n; i++){
		arr[i+1] = arr[i] + arr[i-1];
	}
	return arr;
}

module.exports = fibonacci_series;
