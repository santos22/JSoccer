var rotateThisImage;

function draw() {
	var canvas = new fabric.Canvas('canvas');

	fabric.Image.fromURL("http://www.clker.com/cliparts/a/v/l/j/s/Q/soccer-field.svg", function(oImg) {
		// rotation of SVG soccer field
		oImg.set('selectable', false);
		canvas.add(oImg);
		canvas.centerObject(oImg);
		canvas.renderAll();
		rotateThisImage = oImg;
		rotateThisImage.setAngle(90);
		canvas.renderAll();

        var player1 = new fabric.Circle({
		  radius: 20, fill: 'red', left: 100, top: 300, hasControls: false
		});

		// use to change fill colors or player
		//player1.set( { fill: 'blue' } )

	    var text1 = new fabric.IText('Giroud', { 
		  fontFamily: 'arial black',
		  originX: 'center',
		  originY: 'center',
		  hasControls: false
		});

		text1.animate('left', 100, {
		  onChange: canvas.renderAll.bind(canvas),
		  duration: 1000,
		  easing: fabric.util.ease.easeInCubic
		});

		var player2 = new fabric.Circle({
		  radius: 20, fill: 'red', left: 350, top: 300, hasControls: false
		});

	    var text2 = new fabric.IText('Walcott', { 
		  fontFamily: 'arial black',
		  left: player2.left, 
		  top: player2.top,
		  hasControls: false
		});

		var player3 = new fabric.Circle({
		  radius: 20, fill: 'red', left: 100, top: 500, hasControls: false
		});

	    var text3 = new fabric.IText('Ozil', { 
		  fontFamily: 'arial black',
		  left: player3.left, 
		  top: player3.top,
		  hasControls: false
		});

		var player4 = new fabric.Circle({
		  radius: 20, fill: 'red', left: 450, top: 500, hasControls: false
		});

	    var text4 = new fabric.IText('Ramsey', { 
		  fontFamily: 'arial black',
		  left: player4.left, 
		  top: player4.top,
		  hasControls: false
		});

		var player5 = new fabric.Circle({
		  radius: 20, fill: 'red', left: 375, top: 450, hasControls: false
		});

	    var text5 = new fabric.IText('Cazorla', { 
		  fontFamily: 'arial black',
		  left: player5.left, 
		  top: player5.top,
		  hasControls: false
		});

		var player6 = new fabric.Circle({
		  radius: 20, fill: 'red', left: 300, top: 650, hasControls: false
		});

	    var text6 = new fabric.IText('Coq', { 
		  fontFamily: 'arial black',
		  left: player6.left, 
		  top: player6.top,
		  hasControls: false
		});

		var player7 = new fabric.Circle({
		  radius: 20, fill: 'red', left: 50, top: 800, hasControls: false
		});

	    var text7 = new fabric.IText('Nacho', { 
		  fontFamily: 'arial black',
		  left: player7.left, 
		  top: player7.top,
		  hasControls: false
		});

		var player8 = new fabric.Circle({
		  radius: 20, fill: 'red', left: 250, top: 800, hasControls: false
		});

	    var text8 = new fabric.IText('Kos', { 
		  fontFamily: 'arial black',
		  left: player8.left, 
		  top: player8.top,
		  hasControls: false
		});

		var player9 = new fabric.Circle({
		  radius: 20, fill: 'red', left: 400, top: 800, hasControls: false
		});

	    var text9 = new fabric.IText('Per', { 
		  fontFamily: 'arial black',
		  left: player9.left, 
		  top: player9.top,
		  hasControls: false
		});

		var player10 = new fabric.Circle({
		  radius: 20, fill: 'red', left: 500, top: 800, hasControls: false
		});

	    var text10 = new fabric.IText('Bellerin', { 
		  fontFamily: 'arial black',
		  left: player10.left, 
		  top: player10.top,
		  hasControls: false
		});

		var player11 = new fabric.Circle({
		  radius: 20, fill: 'red', left: 325, top: 1000, hasControls: false
		});

	    var text11 = new fabric.IText('Cech', { 
		  fontFamily: 'arial black',
		  left: player11.left, 
		  top: player11.top,
		  hasControls: false
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

		canvas.add(player11);
		canvas.add(text11);

    });

    canvas.renderAll();
    // add option to change team colors; drop down menu?
    // hopefully add feature to change text

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

// solved rotation
// http://jsfiddle.net/PromInc/h9kL5bs0/