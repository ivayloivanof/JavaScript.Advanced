define(['item'], function (Item) {
	var Section = (function() {
		var idCounter = 1;

		function Section(title) {
			this.title = title;
			this.items = [];
			this.id = idCounter++;
		}

		Section.prototype.addItem = function addItem(item) {
			this.items.push(item);
		};

		Section.prototype.addToDOM = function addToDOM() {
			var sectionWrapper = createElement('div'),
				sectionItems = createElement('div'),
				sectionInpBtn = createElement('div'),
				sectionTitle = createElement('h2'),
				sectionInput = createElement('input'),
				sectionButton = createElement('button');

			sectionTitle.innerHTML = this.title;
			sectionTitle.style.textAlign = 'right';
			sectionTitle.style.margin = '0';
			sectionItems.setAttribute('id', 'section-items');
			sectionItems.style.border = '2px solid grey';
			sectionItems.style.padding = '5px';
			sectionItems.style.marginBottom = '10px';
			sectionWrapper.style.marginBottom = '10px';
			sectionInput.setAttribute('placeholder', ' Add item...');
			sectionInput.style.marginRight = '5px';
			sectionButton.innerHTML = '+';

			sectionButton.addEventListener('click', function () {
				var item = new Item(sectionInput.value);
				sectionItems.appendChild(item.addToDOM());
				sectionInput.value = '';
			});

			sectionItems.appendChild(sectionTitle);
			sectionInpBtn.appendChild(sectionInput);
			sectionInpBtn.appendChild(sectionButton);
			sectionWrapper.appendChild(sectionItems);
			sectionWrapper.appendChild(sectionInpBtn);

			sectionInpBtn.style.display = 'flex';
			sectionInpBtn.style.justifyContent = 'flex-end';

			return sectionWrapper;
		};

		function createElement(tag) {
			return document.createElement(tag);
		}

		return Section;
	})();

	return Section;
});