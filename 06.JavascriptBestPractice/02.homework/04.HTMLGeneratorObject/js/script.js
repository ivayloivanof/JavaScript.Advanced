"use strict";

var HTMLGen = {}, e, paragraph, textParagraph, d, a;
HTMLGen.createParagraph = function(div, text) {
	e = document.getElementById(div);
	paragraph = document.createElement("p");
	textParagraph = document.createTextNode(text);
	paragraph.appendChild(textParagraph);
	e.appendChild(paragraph);
}

HTMLGen.createDiv = function (div, section) {
	e = document.getElementById(div);
	d = document.createElement("div");
	d.className = section;
	e.appendChild(d);
}

HTMLGen.createLink = function (div, linkText, linkUrl) {
	e = document.getElementById(div);
	a = document.createElement("a");
	a.href = linkUrl;
	a.innerHTML = linkText;
	e.appendChild(a);

	console.log(e);
}


HTMLGen.createParagraph('wrapper', 'Soft Uni');
HTMLGen.createDiv('wrapper', 'section');
HTMLGen.createLink('book', 'C# basics book', 'http://www.introprogramming.info/');

/*	result
 <div id="wrapper">
 	<p>Soft Uni</p>
 	<div class="section"></div>
 </div>
 <div id="book">
 	<a href="http://www.introprogramming.info/">C# basics book</a>
 </div>
 */