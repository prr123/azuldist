butLObj = {
	style: {
		margin: '0 0 0 20px',
		height: '30px',
		width: '100px',
		border: '1px solid green',
	},
	typ: 'button',
	textContent: 'prev',
//	evlist: {
//		click: function butrf() {console.log('left button click');},
//	},
};
const lbut = azul.addElement(butLObj);

zinObj = {
	style: {
		margin: '0 0 0 20px',
		height: '30px',
		width: '100px',
		border: '1px solid green',
	},
	typ: 'button',
	textContent: 'zoom in',
//	evlist: {
//		click: function zinfun() {console.log('zoom in click');},
//	},
};
const zin = azul.addElement(zinObj);

const butRObj = {
	style: {
		margin: '0 20px 0 0',
		float: 'right',
		height: '30px',
		width: '100px',
		border: '1px solid green',
	},
	typ: 'button',
	textContent: 'next',
//	evlist: {
//		click: function butlf() {console.log('next');},
//	},
};

const rbut = azul.addElement(butRObj);

const zoutObj = {
	style: {
		margin: '0 20px 0 0',
		float: 'right',
		height: '30px',
		width: '100px',
		border: '1px solid green',
	},
	typ: 'button',
	textContent: 'zoom out',
//	evlist: {
//		click: function zoutfun() {console.log('zoom out button click');},
//	},
};
const zout = azul.addElement(zoutObj);

labObj = {
	typ: 'label',
	float: 'none',
	display: 'inline-block',
	textContent: 'Page: ',
	style: {
		width: '200px',
		margin: '0 0 0 20px',
	}
}

const lab = azul.addElement(labObj);


pgInpObj = {
	typ: 'input',
	type: 'number',
	value: '0',
	style: {
		width: '20px',
		borderWidth: '0',
		outline: 'none',
//            borderBottom: '1px solid blue',
		background: '#f2f2f2',
	}
}

const pgInp = azul.addElement(pgInpObj);
lab.appendChild(pgInp)

pagesObj = {
	typ: 'span',
	textContent: 'Pages: 99',
	style: {
		width: '50px',
		margin: '0 0 0 20px',
	}
}
let pages = azul.addElement(pagesObj);

zoomObj = {
	typ: 'span',
	textContent: 'Zoom: 1.0',
	style: {
		width: '50px',
		margin: '0 0 0 20px',
	}
}
let zoom = azul.addElement(zoomObj);

const vudivObj = {
	typ: 'div',
//	parent: azul.docbody,
	style: {
		minHeight: '400px',
		margin: '5px',
		border: '1px solid blue',
		overflow: 'auto',
	},
};
const vdiv = azul.addElement(vudivObj);

const cvdivObj = {
	typ: 'div',
//	parent: azul.docbody,
	style: {
		maxHeight: '800px',
		margin: '5px',
		border: '1px dotted green',
		overflow: 'auto',
	},
};
const cvdiv = azul.addElement(cvdivObj);


vdiv.appendChild(rbut);
vdiv.appendChild(lbut);
vdiv.appendChild(zin);
vdiv.appendChild(zout);
vdiv.appendChild(lab);
vdiv.appendChild(pages);
vdiv.appendChild(zoom);
vdiv.appendChild(cvdiv);


const canvasObj = {
	typ: 'canvas',
	parent: cvdiv,
	style: {
//		width: '100%',
		margin: '5px',
		border: '1px, dashed green',
//		float: 'right',
//		overflow: 'auto',
	},
}

let canvas = azul.addElement(canvasObj);

azul.docbody.appendChild(vdiv);
