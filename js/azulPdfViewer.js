butLObj = {
	style: {
		margin: '0 0 0 20px',
		height: '30px',
		width: '100px',
		border: '1px solid green',
	},
	typ: 'button',
	textContent: 'left',
	evlist: {
		click: function butrf() {console.log('left button click');},
	},
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
	evlist: {
		click: function zinfun() {console.log('zoom in click');},
	},
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
	textContent: 'right',
	evlist: {
		click: function butlf() {console.log('right button click');},
	},
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
	evlist: {
		click: function zoutfun() {console.log('zoom out button click');},
	},
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
const pages = azul.addElement(pagesObj);


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

vdiv.appendChild(rbut);
vdiv.appendChild(lbut);
vdiv.appendChild(zin);
vdiv.appendChild(zout);
vdiv.appendChild(lab);
vdiv.appendChild(pages);


const canvasObj = {
	typ: 'canvas',
	parent: vdiv,
	style: {
		width: '100%',
		border: '1px, dashed green',
	},
}

let canvas = azul.addElement(canvasObj);

azul.docbody.appendChild(vdiv);


