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
  parent: vdiv,
    style: {
        maxHeight: '800px',
        margin: '5px',
        border: '1px dotted orange',
        overflow: 'auto',
    },
};
const cvdiv = azul.addElement(cvdivObj);


let size = 600;
const canvasObj = {
    typ: 'canvas',
    parent: cvdiv,
    style: {
//		width: '600px',
//		heigth: '600px',
        margin: '5px',
        border: '1px, dashed green',
//      overflow: 'auto',
    },
}

let canvas0 = azul.addElement(canvasObj);
let canvas1 = azul.addElement(canvasObj);

let ctx0 = canvas0.getContext('2d');
let ctx1 = canvas1.getContext('2d');
canvas0.style.width = `${size}px`;
canvas0.style.height = `${size}px`;
canvas1.style.width = `${size}px`;
canvas1.style.height = `${size}px`;

const scale = window.devicePixelRatio; // Change to 1 on retina screens to see blurry canvas.
canvas0.width = Math.floor(size * scale);
canvas0.height = Math.floor(size * scale);
canvas1.width = Math.floor(size * scale);
canvas1.height = Math.floor(size * scale);

// Normalize coordinate system to use CSS pixels.
ctx0.scale(scale, scale);
ctx1.scale(scale, scale);


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


azul.docbody.appendChild(vdiv);


