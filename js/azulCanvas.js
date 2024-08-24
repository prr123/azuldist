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

const vudivObj = {
	typ: 'div',
	parent: azul.docbody,
	style: {
		minHeight: '400px',
		margin: '5px',
		border: '1px dashed blue',
	},
};
const vdiv = azul.addElement(vudivObj);

//let mod = document.createElement('script');
//mod.type = 'module';
//mod.text = "import {sayHi} from '/js/Modtest.js'";

//document.body.appendChild(mod);

