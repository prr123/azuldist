const butLObj = {
	style: {
		margin: '0 0 0 20px',
		height: '30px',
		width: '100px',
		border: '1px solid green',
	},
	parent: azul.docbody,
	typ: 'button',
	textContent: 'left',
	elNam: 'lbut',
	evlist: {
		click: function butrf() {console.log('left button click');},
	},
};

azul.addElement(butLObj);

const butRObj = {
	style: {
		margin: '0 20px 0 0',
		float: 'right',
		height: '30px',
		width: '100px',
		border: '1px solid green',
	},
	parent: azul.docbody,
	typ: 'button',
	textContent: 'right',
	elNam: 'rbut',
	evlist: {
		click: function butlf() {console.log('right button click');},
	},
};

azul.addElement(butRObj);


const vudiv = {
	typ: 'div',
	parent: azul.docbody,
	style: {
		minHeight: '400px',
		margin: '5px',
		border: '1px solid blue',
	},
};

azul.addElement(vudiv);
