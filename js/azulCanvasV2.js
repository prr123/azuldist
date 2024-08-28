const vudivObj = {
	typ: 'div',
//	parent: azul.docbody,
	style: {
		minHeight: '400px',
		margin: '5px',
		border: '1px dashed blue',
	},
};
const vdiv = azul.addElement(vudivObj);

const cvdivObj = {
    typ: 'div',
//  parent: vdiv,
  parent: vdiv,
    style: {
		position: 'relative',
        minHeight: '600px',
        margin: '5px',
        border: '1px dotted orange',
        overflow: 'auto',
    },
};
const cvdiv = azul.addElement(cvdivObj);

const canvasObj = {
    typ: 'canvas',
    parent: cvdiv,
	width: '600',
	height: '500',
    style: {
		position: 'absolute',
		top: '10px',
		left: '10px',
        margin: '5px',
        border: '1px, dashed green',
//      overflow: 'auto',
    },
}

let canvas0 = azul.addCanvas(canvasObj);
let canvas1 = azul.addCanvas(canvasObj);

let ctx0 = canvas0.ctx;
let ctx1 = canvas1.ctx;

// Set line width
ctx0.lineWidth = 10;

// Wall
ctx0.strokeRect(75, 140, 150, 110);

ctx0.fillRect(130, 190, 40, 60);

ctx0.beginPath();
ctx0.moveTo(50, 140);
ctx0.lineTo(150, 60);
ctx0.lineTo(250, 140);
ctx0.closePath();
ctx0.stroke();

ctx1.fillStyle = "green";
ctx1.fillRect(10, 10, 150, 100);

cvdiv.appendChild(canvas0);
cvdiv.appendChild(canvas1);

//vdiv.appendChild(cvdiv);
azul.docbody.appendChild(vdiv);


