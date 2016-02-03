(function() {
	function printArgsInfo() {
		for (var i = 0; i < arguments.length; i++) {
			var obj = arguments[i];
			console.log(obj + ' (' +typeof obj + ')');
		}

		console.log(this.person + ' ' + this.role);
	}

	//printArgsInfo(2, 3, 2.5, -110.5564, false);
	//printArgsInfo(null, undefined, "", 0, [], {});
	//printArgsInfo([1, 2], ["string", "array"], ["single value"]);
	//printArgsInfo("some string", [1, 2], ["string", "array"], ["mixed", 2, false, "array"], {name: "Peter", age: 20});
	//printArgsInfo([[1, [2, [3, [4, 5]]]], ["string", "array"]]);

	var i = {
		person: 'Provercho', role: 'Javascript Looser'
	};

	printArgsInfo.call();
	printArgsInfo.call(i);

	printArgsInfo.apply();
	printArgsInfo.apply(i);

})();