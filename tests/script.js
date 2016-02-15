var Func = (function() {
	function f() {
		this.args = arguments;
		return true;
	};

	function Func(arguments) {
		f.call(this, arguments);
	};

	Func.prototype = {};

	return Func;
})();

var fc = new Func(10, 20, 30);
console.log(fc);