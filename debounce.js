function debounce(func, wait, immediate) {
    console.log('debounce called');
	var timeout;
	return function() {
	    console.log('returned function', 'timeout', timeout, 'callNow', callNow);
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

var myEfficientFn = debounce(function() {
	console.log('qwerty');
}, 250);
