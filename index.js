var speed = 1;

var columns, rows, columnWidth, rowHeight, characterArray = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	noCursor();
	background('#000000');

	textFont('Menlo');
	textAlign(LEFT, TOP);
	fill('#00f72c');

	columnWidth = Math.round(textWidth(' '));
	rowHeight = 11;

	columns = Math.floor(width / columnWidth);
	rows = Math.floor(height / rowHeight);

	currentCharacter = String.fromCharCode(random(32, 127));

	for (var i = 0; i < columns * rows; i++) {
		characterArray.push(currentCharacter);
		if (random() < 0.1) {
			currentCharacter = String.fromCharCode(random(32, 127));
		}
	}
}

function draw() {
	background('#000000');

	for (var j = 0; j < rows; j++) {
		for (var i = 0; i < columns; i++) {
			text(characterArray[i * j + i], i * columnWidth, j * rowHeight);
		}
	}

	characterArray = rotateArray(characterArray, speed);
}