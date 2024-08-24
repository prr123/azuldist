const jsurl = '/json/adresses.json';

async function fetchJson(geturl) {

	const resp = await fetch(geturl)
	if (!resp.ok) {
		throw new Error(`HTTP error, status = ${response.status}`);
	}
	const adr = await resp.json();
	console.log('adr: ' + adr.length);
}

fetchJson(jsurl);

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

const vudivObj = {
    typ: 'div',
//  parent: azul.docbody,
    style: {
        minHeight: '400px',
        margin: '5px',
        border: '1px solid blue',
        overflow: 'auto',
    },
};
const vdiv = azul.addElement(vudivObj);

/*
const adrdivObj = {
    typ: 'div',
//  parent: azul.docbody,
    style: {
		width: '500px',
        minHeight: '400px',
        margin: '5px',
        border: '1px dotted black',
    },
};
const adrdiv = azul.addElement(adrdivObj);
*/

vdiv.appendChild(rbut);
vdiv.appendChild(lbut);

azul.addGrid = function(gridObj) {
	let gridDiv = document.createElement('div');
	Object.assign(gridDiv.style, gridObj.style);

	let repStr = 'repeat(' + gridObj.cols + ', 1fr)'
	gridDiv.style.gridTemplateColumns = repStr;

	repStr = 'repeat(' + gridObj.rows + ', 1fr)'
	gridDiv.style.gridTemplateRows = repStr;
	geStyl = {
		minHeight: '20px',
        border: '1px dotted green',
	};

	for (let irow = 0; irow< gridObj.rows; irow++) {
		for (let icol = 0; icol<gridObj.cols; icol++) {
			let gridEl = document.createElement('div');
			Object.assign(gridEl.style, geStyl);
			gridDiv.appendChild(gridEl);
		}
	}
	return gridDiv;
};

let gridObj = {
	rows: 10,
	cols: 2,
	style: {
 		maxWidth: '400px',
       display: 'grid',
		gridTemplateColumns: 'repeat(2, 1fr)',
        border: '1px dotted blue',
        margin: '10px',
		minHeight: '100px',
	},
};


let gdiv = azul.addGrid(gridObj);
vdiv.appendChild(gdiv);

//vdiv.appendChild(adrdiv);

azul.docbody.appendChild(vdiv);
