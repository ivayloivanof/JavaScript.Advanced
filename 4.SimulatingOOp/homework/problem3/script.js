"use strict";
var result = [];
//var array = [1, 2, 3, 4];
//var array = [1, 2, [3, 4], [5, 6]];
var array = [0,	["string", "values"], 5.5, [[1, 2, true], [3, 4, false]],10];

(function() {
	function printArray(array){
		for(var i = 0; i < array.length; i++){
			if(array[i] instanceof Array){
				printArray(array[i]);
			}else{
				result.push(array[i]);
			}
		}
	}

	printArray(array);
})();

array.flatten = function() {
	return result;
};

console.log(array.flatten());