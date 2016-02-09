var HTMLGen = {};
HTMLGen.createParagraph = function(div, text) {
	var e = document.getElementById(div);
	var paragraph = document.createElement("p");
	var textParagraph = document.createTextNode(text);
	paragraph.appendChild(textParagraph);
	e.appendChild(paragraph);
}

HTMLGen.createDiv = function (div, section) {
	var e = document.getElementById(div);
	var d = document.createElement("div");
	d.className = section;
	e.appendChild(d);
}

HTMLGen.createLink = function (div, linkText, linkUrl) {
	var e = document.getElementById(div);
	var a = document.createElement("a");
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