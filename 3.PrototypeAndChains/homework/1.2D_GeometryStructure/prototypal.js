var shape = {
    init: function init(x, y) {
        this._x = Number(x);
        this._y = Number(y);
        return this;
    },
    toString: function toString() {
        return 'x = ' + this._x + ' ' + ', y = ' + this._y;
    }
};

var circle = Object.create(shape);
circle = {
    init: function init(x, y, r, color) {
        shape.init.call(this, x, y);
        this._r = Number(r);
        this._color = color.trim();
        return this;
    },
    toString: function toString() {
        return ('x = ' + this._x +
            ', y = ' + +this._y +
            ', r = ' + this._r +
            ', color = ' + this._color);
    }
};

var rectangle = Object.create(shape);
rectangle = {
    init: function init(x, y, width, height, color) {
        shape.init.call(this, x, y); //call parent init function
        this._width = Number(width);
        this._height = Number(height);
        this._color = color.trim();
        return this;
    },
    toString: function toString() {
        return ('x = ' + this._x +
            ', y = ' + this._y +
            ', width = ' + this._width +
            ', height = ' + this._height +
            ', color = ' + this._color);
    }
};

var triangle = Object.create(shape);
triangle = {
    init: function init(x, y, x1, y1, x2, y2, color) {
        shape.init.call(this, x, y);
        this._x1 = Number(x1);
        this._y1 = Number(y1);
        this._x2 = Number(x2);
        this._y2 = Number(y2);
        this._color = color.trim();
        return this;
    },
    toString: function toString() {
        return ('x = ' + this._x +
            ', y = ' + this._y +
            ', x1 = ' + this._x1 +
            ', y1 = ' + this._y1 +
            ', x2 = ' + this._x2 +
            ', y2 = ' + this._y2 +
            ', color = ' + this._color);
    }
};

var line = Object.create(shape);
line = {
	init: function init(x, y, x1, y1, color) {
		shape.init.call(this, x, y);
        this._x1 = Number(x1);
        this._y1 = Number(y1);
        this._color = color.trim();
        return this;
	},
	toString: function toString() {
		return ('x = ' + this._x +
                ', y = ' + this._y +
                ', x1 = ' + this._x1 +
                ', y1 = ' + this._y1 +
                ', color = ' + this._color);
	}
};

circle.init(65, 320, 55, '#800080');
rectangle.init(60, 300, 150, 50, '#fa80c0');
triangle.init(322, 120, 40, 267, 151, 435, '#ff0000');
line.init(25, 120, 256, 128, '#ff0c30');

console.log(this);