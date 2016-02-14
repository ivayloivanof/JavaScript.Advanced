"use strict";

var example = "This is an example string used only for demonstration purposes.";
var string  = example.trim();
example = {
	string : string,
	startsWith: function (str) {
		var regex = new RegExp(str);
		return regex.test(string);
	},
	endsWith: function (str) {
		var regex = new RegExp(str+'$');
		return regex.test(string);
	},
	left: function(numberOfSymbols) {
		var result = '';
		var length = example.string.length;

		for (var index = 0; index < numberOfSymbols; index++) {
			if (index >= length) {
				break;
			}

			result += example.string[index];
		}
		return result;
	},
	right: function(numberOfSymbols) {
		var result = [];
		var length = example.string.length;

		for (var index = 0; index < numberOfSymbols; index++) {
			if (index >= length) {
				break;
			}

			result.push(example.string[length - 1 - index]);
		}
		result = result.reverse();
		return result.join('');
	}
};

(function() {
	console.log(example.startsWith("This"));
	console.log(example.startsWith("this"));
	console.log(example.startsWith("other"));
	/*
	 true
	 false
	 false
	 */
})();

(function() {
	console.log(example.endsWith("poses."));
	console.log(example.endsWith ("example"));
	console.log(example.startsWith("something else"));
	/*
	 true
	 false
	 false
	 */
})();

(function() {
	console.log(example.left(9));
	console.log(example.left(90));
	/*
	 This is a
	 This is an example string used only for demonstration purposes.
	 */
})();

(function() {
	console.log(example.right(9));
	console.log(example.right(90));
	/*
	 purposes.
	 This is an example string used only for demonstration purposes.

	 */
})();

String.prototype.repeat = function(count) {
	if (count < 1) {
		return '';
	}

	return Array(count + 1).join(this.valueOf());
};

var character = "*";
console.log(character.repeat(5));
// Alternative syntax
console.log("~".repeat(3));