var models = models || {};

(function(scope) {
    var CONTAINER = 'container',
        CONTAINER_TITLE = 'ToDo List';

    function Container(title) {
        this.title = title || CONTAINER_TITLE;
        this._sections = [];
    }

    Container.prototype.addSection = function (section) {
        this._sections.push(section);
    };

	Container.prototype.addToDOM = function addToDOM(selector) {
        var wrapper,
            container,
            title,
            section,
            sections,
            _this,
            input,
            footer,
            button;

        wrapper = document.querySelector(selector);

        container = document.createElement('div');
        container.setAttribute('class', CONTAINER);

        title = document.createElement('h1');
        title.innerHTML = this.title;
        container.appendChild(title);

        sections = document.createElement('div');
        sections.setAttribute('id', 'sections');
        container.appendChild(sections);

        this._sections.forEach(function (section){
            section.addToDOM('#sections');
        });

        footer = document.createElement('footer');
        input = document.createElement('input');
        input.setAttribute('type', 'text');
        button = document.createElement('button');
        button.innerHTML = 'Add section';
        container.appendChild(input);
        container.appendChild(button);

        _this = this;
        addListener(button, input, _this);

        wrapper.appendChild(container);
    };

    function addListener(button, input, _this){
        button.addEventListener('click', function () {
            var sectionName = input.value;
            if (sectionName.length) {
                input.value = '';
                var section = new scope.section(sectionName);
                _this.addSection(section);
                section.addToDOM('#sections');
            }
        });
    }

    scope.container = Container;
})(models);