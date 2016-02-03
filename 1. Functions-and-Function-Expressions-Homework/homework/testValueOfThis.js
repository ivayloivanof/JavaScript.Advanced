function testContext() {
	console.log(this);
}

//testContext();	//print object this corectly

function testInsideInvoke() {
	testContext();	//not print this object
}

new testContext();	//print empty object