"use strict";
(function() {
	requirejs.config({
		paths: {
			'container': 'models/container',
			'section': 'models/section',
			'item': 'models/item'
		}
	});
})();



requirejs(['container', 'section', 'item'], function(Container, Section, Item){
	var cont = new Container('TODO List module');
	cont.addToDOM('#wrapper');
})