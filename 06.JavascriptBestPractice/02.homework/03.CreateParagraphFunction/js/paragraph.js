function createParagraph(elementID, textInParagraph) {
	"use strict";
	var e, para, text;

	e = document.getElementById(elementID);
	para = document.createElement("p");
	text = document.createTextNode(textInParagraph);
	para.appendChild(text);
	e.appendChild(para);

	console.log(e);
	console.log(text);
}

createParagraph('wrapper', 'Some text');