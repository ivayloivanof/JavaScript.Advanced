var Shape = (function() {
	function Shape(x, y) {
		this._x = Number(x);
		this._y = Number(y);
	}

	Shape.prototype = {
		serialize: function() {
			// Serialize the shape
			// Return the serialized shape
		}
	};

	return Shape;
})();

var Circle = (function() {
	function Circle(x, y, r, color) {
		Shape.call(this, x, y);
		this._r = Number(r);
		this._color = color;
	}

	Circle.prototype = Object.create(Shape.prototype);
	Circle.prototype = {
		serialize : function () {
			Circle.prototype.serialize.call(this);
		},
		toString : function() {
			return ('x = ' + this._x +
					', y = ' +  + this._y +
					', r = ' + this._r +
					', color = ' + this._color);
		}
	};

	return Circle;
})();

var Rectangle = (function() {
	function Rectangle(x, y, width, height, color) {
		Shape.call(this, x, y);
		this._width = Number(width);
		this._height = Number(height);
		this._color = color;
	}

	Rectangle.prototype = Object.create(Shape.prototype);
	Rectangle.prototype = {
		serialize: function () {
			Rectangle.prototype.serialize.call(this);
		},
		toString : function() {
			return ('x = ' + this._x +
					', y = ' + this._y +
					', width = ' + this._width +
					', height = ' + this._height +
					', color = ' + this._color);
		}
	}

	return Rectangle;
})();

var Triangle = (function() {
	function Triangle(x, y, x1,y1, x2, y2, color) {
		Shape.call(this, x, y);
		this._x1 = Number(x1);
		this._y1 = Number(y1);
		this._x2 = Number(x2);
		this._y2 = Number(y2);
		this._color = color;
	}

	Triangle.prototype = Object.create(Shape.prototype);
	Triangle.prototype = {
		serialize: function () {
			Triangle.prototype.serialize.call(this);
		},
		toString : function() {
			return ('x = ' + this._x +
					', y = ' + this._y +
					', x1 = ' + this._x1 +
					', y1 = ' + this._y1 +
					', x2 = ' + this._x2 +
					', y2 = ' + this._y2 +
					', color = ' + this._color);
		}
	}

	return Triangle;
})();

var Line = (function() {
	function Line(x, y, x1,y1, color) {
		Shape.call(this, x, y);
		this._x1 = Number(x1);
		this._y1 = Number(y1);
		this._color = color;
	}

	Line.prototype = Object.create(Shape.prototype);
	Line.prototype = {
		serialize: function () {
			Line.prototype.serialize.call(this);
		},
		toString : function() {
			return ('x = ' + this._x +
			', y = ' + this._y +
			', x1 = ' + this._x1 +
			', y1 = ' + this._y1 +
			', color = ' + this._color);
		}
	}
	return Line;
})();

var circ = new Circle(65, 320, 55, '#800080');
var rect = new Rectangle(60, 300, 150, 50, '#ff8000');
var tria = new Triangle(322, 120, 40, 267, 151, 435, '#ff0000');
var line = new Line(25, 120, 256, 128, '#ff0c30');


console.log(circ);
console.log(circ.toString());
console.log(rect);
console.log(rect.toString());
console.log(tria);
console.log(tria.toString());
console.log(line);
console.log(line.toString());