const vudivObj = {
	typ: 'div',
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
        border: '1px dashed green',
//      overflow: 'auto',
    },
}

let canvas0 = azul.addCanvas(canvasObj);
canvas0.style.zIndex = 0;
let canvas1 = azul.addCanvas(canvasObj);
canvas1.style.zIndex = 1;
//canvas1.addEventListener('click', (e) => canvasclick(e));
canvas1.addEventListener('mousedown', (e) => canvasmd(e));
canvas1.addEventListener('mouseup', (e) => canvasmup(e));
canvas1.addEventListener('mousemove', (e) => canvasmv(e));

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

cvdiv.appendChild(canvas0);
cvdiv.appendChild(canvas1);

azul.docbody.appendChild(vdiv);

// need to define after canvas is rendered
const rect = canvas0.getBoundingClientRect();
//console.log('rect: ' + rect.top +'/' + rect.left);

click = false;
const msObj = {
	click: false,
	mdown : false,
	mx: -1,
	my: -1,
};

function drawX(e) {

//	console.log('click: ' + msObj.click);
	let mx = 0;
	let my = 0;
	if (msObj.click) {
		mx = msObj.mx
		my = msObj.my
	} else {
		mx = parseInt(e.clientX - rect.left);
		my = parseInt(e.clientY - rect.top);
	}
	ctx1.clearRect(0,0, canvas1.width,canvas1.height);
	ctx1.strokeStyle = "blue";
	ctx1.strokeRect(mx-25, my-25, 50, 50);

	ctx1.lineWidth = 2;
	ctx1.beginPath();
	ctx1.moveTo(mx-20, my-20);
	ctx1.lineTo(mx+20, my+20);
	ctx1.moveTo(mx-20, my+20);
	ctx1.lineTo(mx+20, my-20);
	ctx1.closePath();
	ctx1.stroke();

	msObj.mx = mx;
	msObj.my = my;
	msObj.click=true;
}

function canvasmd(e) {
	e.preventDefault();
//	console.log('mouse down! ' + msObj.click);
	// x has been drawn
	if (msObj.click) {
		msObj.mdown = true;
		const nx = parseInt(e.clientX - rect.left) - msObj.mx;
		const ny = parseInt(e.clientY - rect.top) -msObj.my;
		ctx1.strokeStyle = "red";
		ctx1.strokeRect(msObj.mx,msObj.my, nx, ny);
	}
}

function canvasmup(e) {
	e.preventDefault();
//	console.log('mouse up!');
	if (!msObj.click) {
		drawX(e);
		msObj.click = true;
	} else {
		msObj.click = false;
		msObj.nx = parseInt(e.clientX - rect.left) - msObj.mx;
		msObj.ny = parseInt(e.clientY - rect.top) -msObj.my;
		console.log("nx/ny: " + msObj.nx + ":" + msObj.ny);
	}
	msObj.mdown = false;
}

function canvasmv(e) {
	e.preventDefault();
//	console.log('mouse move! ' + msObj.click + ' : ' + msObj.mdown);
	if (msObj.click && msObj.mdown) {
		drawX(e);
		const nx = parseInt(e.clientX - rect.left) - msObj.mx;
		const ny = parseInt(e.clientY - rect.top) -msObj.my;
		ctx1.strokeStyle = "red";
		ctx1.strokeRect(msObj.mx,msObj.my, nx, ny);
	}
}

