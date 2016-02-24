var models = models || {};

(function (scope) {
	function Item(content) {
		this.content = content;
		this.status = false;
		this.count = 0;
	}

	Item.prototype.ChangeStatus = function () {
		this.status = !this.status;
	};

	Item.prototype.addToDOM = function (selector) {
		var section,
			checkbox,
			content,
			_this,
			line;

		section = document.querySelector(selector);
		content = document.createElement('span');
		content.innerHTML = this.content;
		checkbox = document.createElement('input');
		checkbox.setAttribute('type', 'checkbox');
		checkbox.setAttribute('id', 'check-' + this.count);

		_this = this;
		checkbox.addEventListener('change', function (ev) {
			if (!_this.status) {
			    content.setAttribute('class', 'completed');
			} else {
				content.removeAttribute('class');
			}
			_this.ChangeStatus();
		});

		line = document.createElement('li');
		line.appendChild(checkbox);
		line.appendChild(content);
		section.appendChild(line);

		this.count++;
	};

	scope.item = Item;
}(models));