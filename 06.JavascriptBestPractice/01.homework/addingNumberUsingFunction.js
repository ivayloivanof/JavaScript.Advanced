function add(a) {
	var add = a;

	function func(b) {
		add += b;
		return func
	}

	func.toString = function() {
		return add;
	};

	return func;
}

console.log(add(1).toString()); // 1
console.log(+add(2)(3)); // 5
console.log(+add(1)(1)(1)(1)(1)); // 5
console.log(+add(1)(0)(-1)(-1)); // -1