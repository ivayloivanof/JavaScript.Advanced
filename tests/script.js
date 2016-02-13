var Func = (function() {
	function f() {
		console.log(this);
		return true;
	};

	function Func(a, b, c) {
		f.call(this);
	};

	Func.prototype = {};

	return Func;
})();

var fc = new Func(10, 20, 30);