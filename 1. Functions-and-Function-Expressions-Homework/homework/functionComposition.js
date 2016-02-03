(function() {
	function add() {
		var number = 0;

		for (var i = 0; i < arguments.length; i++) {
			number += Number(arguments[i]);
		}

		add.toString = function() {
			return number;
		}

		return add;
	}

	function addOne(x) {
		addOne.toString = function () {
			return x + 1;
		}
		return addOne;
	}

	function square(x) {
		square.toString = function () {
			return x * x;
		}
		return square;
	}

	function compose(f, g) {
		//For example, if f(x) = sin(x) and g(x) = x^2, their composition will be sin(x^2).
		//compose(addOne, square)(5)	// addOne(square(5)) = 5 * 5 + 1 = 26

		return function(arguments) {
			return f(g(arguments));
		}
	}

	//console.log(+add(5, 5));
	//console.log(+addOne(-1));
	//console.log(+square(5));
	console.log(+compose(addOne, square)(5));
	console.log(+compose(addOne, add)(5, 6));	//error
	console.log(+compose(Math.cos, addOne)(-1));
	console.log(+compose(addOne, Math.cos)(-1));

	var compositeFunction = compose(Math.sqrt, Math.cos);
	console.log(compositeFunction(0.5));
	console.log(compositeFunction(1));
	console.log(compositeFunction(-1));
})();
