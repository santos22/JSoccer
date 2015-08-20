function draw() {
	var canvas = new fabric.Canvas('canvas');
	var group = [];

	fabric.Image.fromURL("http://www.clker.com/cliparts/a/v/l/j/s/Q/soccer-field.svg", function(oImg) {
		oImg.set('selectable', false);
        canvas.add(oImg);
    });

	// create rectangle object
	var field = new fabric.Rect({
		left: 0,
		top: 0,
		fill: 'green',
		width: 400,
		height: 500
	});

	//field.set('selectable', false); // make object unselectable
	//canvas.add(field);

	// move object
	// field.set({ left: 20, top: 50 });
	// canvas.renderAll();
}

// window.onload = function() {
//   draw();
// };

document.addEventListener("DOMContentLoaded", function() {
  draw();
});

// solved my SVG problem
// https://github.com/kangax/fabric.js/issues/1626