var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
context.beginPath();
context.moveTo(line._x, line._y);
context.lineTo(line._x1, line._y1);
context.strokeStyle = line._color;
context.stroke();

context.beginPath();
context.arc(circle._x, circle._y, circle._r, 0, 2 * Math.PI);
context.fillStyle = circle._color;
context.fill();

context.beginPath();
context.moveTo(triangle._x, triangle._y);
context.lineTo(triangle._x1, triangle._y1);
context.lineTo(triangle._x2, triangle._y2);
context.fillStyle = triangle._color;
context.fill();

context.beginPath();
context.fillRect(rectangle._x, rectangle._y, rectangle._width, rectangle._height);
context.fillStyle = rectangle._color;
context.fill();