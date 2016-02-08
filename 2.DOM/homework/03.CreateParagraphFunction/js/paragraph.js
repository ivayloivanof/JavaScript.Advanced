function createParagraph(elementID, textInParagraph) {

	var e = document.getElementById(elementID);
	var para = document.createElement("p");
	var text = document.createTextNode(textInParagraph);
	para.appendChild(text);
	e.appendChild(para);
	console.log(e);
	console.log(text);
}

createParagraph('wrapper', 'Some text');