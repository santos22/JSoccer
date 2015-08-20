function draw() {
	var canvas = new fabric.Canvas('canvas');

	fabric.Image.fromURL("http://www.clker.com/cliparts/a/v/l/j/s/Q/soccer-field.svg", function(oImg) {
		// worry about rotation later
		oImg.set('selectable', false);
        canvas.add(oImg);
    });
}

// window.onload = function() {
//   draw();
// };

document.addEventListener("DOMContentLoaded", function() {
  draw();
});

// solved my SVG problem
// https://github.com/kangax/fabric.js/issues/1626