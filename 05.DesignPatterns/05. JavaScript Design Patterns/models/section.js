var models = models || {};

(function (scope) {
	function Section(title) {
		this.title = title;
		this._items = [];
	}

	Section.prototype.addItem = function (item) {
		this._items.push(item);
	};

	Section.prototype.addToDOM = function (selector) {
		var container,
			section,
			sectionTitle,
			sectionInput,
			sectionButton,
			ul,
			_this;

		container = document.querySelector(selector);
		section = document.createElement('section');
		sectionTitle = document.createElement('h2');
		sectionTitle.innerHTML = this.title;
		sectionInput = document.createElement('input');
		sectionInput.setAttribute('type', 'text');
		sectionButton = document.createElement('button');
		sectionButton.innerHTML = '+';

		ul = document.createElement('ul');
		ul.setAttribute('id', this.title + '-list');
		section.appendChild(ul);

		_this = this;
		this._items.forEach(function (item) {
			item.addToDOM('#' + _this.title + '-list');
		});

		section.appendChild(sectionTitle);
		section.appendChild(sectionInput);
		section.appendChild(sectionButton);
		container.appendChild(section);

		addListener(sectionButton, sectionInput, _this);
	};

	function addListener(sectionButton, sectionInput, _this) {
		sectionButton.addEventListener('click', function () {
			var item = sectionInput.value;
			if (item.length) {
				sectionInput.value = '';
				var section = new scope.item(item);
				_this.addItem(section);
				section.addToDOM('#' + _this.title + '-list');
			}
		});
	}

	scope.section = Section;
}(models));