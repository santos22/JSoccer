function draw() {
	var canvas = new fabric.Canvas('canvas');

	fabric.Image.fromURL("http://www.clker.com/cliparts/a/v/l/j/s/Q/soccer-field.svg", function(oImg) {
		// worry about rotation later
		oImg.set('selectable', false);
        canvas.add(oImg);

        var player1 = new fabric.Circle({
		  radius: 20, fill: 'red', left: 800, top: 200, hasControls: false
		});

	    var text1 = new fabric.IText('Giroud', { 
		  fontFamily: 'arial black',
		  left: player1.left, 
		  top: player1.top,
		});

		var player2 = new fabric.Circle({
		  radius: 20, fill: 'red', left: 800, top: 500, hasControls: false
		});

	    var text2 = new fabric.IText('Walcott', { 
		  fontFamily: 'arial black',
		  left: player2.left, 
		  top: player2.top,
		});

		var player3 = new fabric.Circle({
		  radius: 20, fill: 'red', left: 550, top: 200, hasControls: false
		});

	    var text3 = new fabric.IText('Ozil', { 
		  fontFamily: 'arial black',
		  left: player3.left, 
		  top: player3.top,
		});

		var player4 = new fabric.Circle({
		  radius: 20, fill: 'red', left: 550, top: 500, hasControls: false
		});

	    var text4 = new fabric.IText('Ramsey', { 
		  fontFamily: 'arial black',
		  left: player4.left, 
		  top: player4.top,
		});

		var player5 = new fabric.Circle({
		  radius: 20, fill: 'red', left: 650, top: 350, hasControls: false
		});

	    var text5 = new fabric.IText('Cazorla', { 
		  fontFamily: 'arial black',
		  left: player5.left, 
		  top: player5.top,
		});

		var player6 = new fabric.Circle({
		  radius: 20, fill: 'red', left: 450, top: 350, hasControls: false
		});

	    var text6 = new fabric.IText('Coq', { 
		  fontFamily: 'arial black',
		  left: player6.left, 
		  top: player6.top,
		});

		var player7 = new fabric.Circle({
		  radius: 20, fill: 'red', left: 250, top: 100, hasControls: false
		});

	    var text7 = new fabric.IText('Nacho', { 
		  fontFamily: 'arial black',
		  left: player7.left, 
		  top: player7.top,
		});

		var player8 = new fabric.Circle({
		  radius: 20, fill: 'red', left: 250, top: 300, hasControls: false
		});

	    var text8 = new fabric.IText('Kos', { 
		  fontFamily: 'arial black',
		  left: player8.left, 
		  top: player8.top,
		});

		var player9 = new fabric.Circle({
		  radius: 20, fill: 'red', left: 250, top: 400, hasControls: false
		});

	    var text9 = new fabric.IText('Mertesacker', { 
		  fontFamily: 'arial black',
		  left: player9.left, 
		  top: player9.top,
		});

		var player10 = new fabric.Circle({
		  radius: 20, fill: 'red', left: 250, top: 600, hasControls: false
		});

	    var text10 = new fabric.IText('Bellerin', { 
		  fontFamily: 'arial black',
		  left: player10.left, 
		  top: player10.top,
		});

		canvas.add(player1);
		canvas.add(text1);

		canvas.add(player2);
		canvas.add(text2);

		canvas.add(player3);
		canvas.add(text3);

		canvas.add(player4);
		canvas.add(text4);

		canvas.add(player5);
		canvas.add(text5);

		canvas.add(player6);
		canvas.add(text6);

		canvas.add(player7);
		canvas.add(text7);

		canvas.add(player8);
		canvas.add(text8);

		canvas.add(player9);
		canvas.add(text9);

		canvas.add(player10);
		canvas.add(text10);

    });

    //canvas.renderAll();

}

function downloadCanvas(link, canvasId, filename) {
    link.href = document.getElementById(canvasId).toDataURL();
    link.download = filename;
}


// window.onload = function() {
//   draw();
// };

document.addEventListener("DOMContentLoaded", function() {
  draw();

});

// solved my SVG problem
// https://github.com/kangax/fabric.js/issues/1626

// prevent resizing of shapes
// http://stackoverflow.com/questions/14842877/make-fabric-js-object-draggable-but-not-selectable

// possible edit group text
// http://stackoverflow.com/questions/24449481/fabric-js-grouped-itext-not-editable

// export canvas as Image
// http://stackoverflow.com/questions/20032214/recreate-fabric-js-canvas-and-export-as-an-image
// http://jsfiddle.net/AbdiasSoftware/7PRNN/