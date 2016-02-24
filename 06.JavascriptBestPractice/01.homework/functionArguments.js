var printArgsInfo = (function() {
	function printArgsInfo() {
		for (var i = 0; i < arguments.length; i++) {
			var obj = arguments[i];
			this.person = obj.person;
			this.role = obj.role;
			//console.log(obj + ' (' +typeof obj + ')');
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

	printArgsInfo.call(this);
	printArgsInfo.call(this, i);

	printArgsInfo.apply(this);
	printArgsInfo.apply(this, {
		person: 'Provercho', role: 'Javascript Looser'
	});

	return this
})();