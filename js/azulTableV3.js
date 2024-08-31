azul.addTable = function(tblObj) {

	let tbl = document.createElement('table');
	tbl.focusCol = 0;
	tbl.focusRow = 0;

	Object.assign(tbl,tblObj);
	Object.assign(tbl.style,tblObj.style);
	if (tblObj.hasOwnProperty('hovCellStyl')) {
		Object.assign(tbl.hovCellStyle,tblObj.hovCellStyl);
        tbl.hovKeys = Object.keys(tbl.hovCellStyle);
	}
	if (tblObj.hasOwnProperty('head')) {
		let theader = tbl.createTHead();
		let hdRow = theader.insertRow();
		let hdCell = hrow.insertCell();
	}
	let trStylProp = false;
	if (tblObj.hasOwnProperty('trStyl')) {
		tbl.trStyl = {};
		Object.assign(tbl.trStyl, tblObj.trStyl)
		trStylProp = true;
	}

	let cellStylProp = false;
	if (tblObj.hasOwnProperty('cellStyl')) {
		tbl.cellStyl = {};
		Object.assign(tbl.cellStyl, tblObj.cellStyl)
		cellStylProp = true;
	}

	let tbody = tbl.createTBody();
	tbl.tbody = tbody;

	let rowList = new Array(tbl.nrows);
	for (let row=0; row < tbl.nrows; row++) {
		let trow = tbody.insertRow();
		trow.id = tbl.id + 'R:' + row;
		if (trStylProp) {Object.assign(trow.style, tblObj.trStyl)}
//            trow.classList.add((tbl.id + 'Row'), (tbl.id + 'Row' + row));
		let cellList = new Array(tbl.ncols);
		for (let col=0; col < tbl.ncols; col++) {
			let newCell = trow.insertCell();
			cellList[col] = newCell;
			if (tblObj.hasOwnProperty('cell')) {Object.assign(newCell, tblObj.cell);}
			if (cellStylProp) {Object.assign(newCell.style, tblObj.cellStyl);}
//                newCell.id = tbl.id + 'R' + row + 'C' + col;
//                newCell.classList.add((tbl.id + 'Cell'), (tbl.id + 'CelCol' + col), (tbl.id + 'CelRow' + row));
			newCell.textContent = 'R:' + row + 'C:' + col;
			if (tbl.edit) {newCell.contentEditable = 'true'};
//                newCell.addEventListener('input',(event) => {inpFun(event)});
//                newCell.addEventListener('click',(event) => {clickFun(event)});
//                newCell.addEventListener('keydown',(event) => {keydFun(event)});
//                newCell.addEventListener('mouseenter',(event) => {cellHover(event)});
//                newCell.addEventListener('mouseleave',(event) => {cellLeave(event)});
		}
		rowList[row] = cellList;
	} // row
	tbl.cells = rowList;
	return tbl;
}

const tdivObj = {
	typ: 'div',
	style: {
        border: '1px solid blue',
        margin: '10px',
        minHeight: '100px',
	},
};
let tdiv = azul.addElement(tdivObj);

butLObj = {
    style: {
        margin: '10px 0 0 20px',
        height: '30px',
        width: '100px',
        border: '1px solid green',
    },
    typ: 'button',
    textContent: 'add',
};
const addBut = azul.addElement(butLObj);

const butRObj = {
    style: {
        margin: '10px 20px 0 0',
        float: 'right',
        height: '30px',
        width: '100px',
        border: '1px solid green',
    },
    typ: 'button',
    textContent: 'del',
};
const delBut = azul.addElement(butRObj);


const tabObj = {
	nrows: 2,
	ncols: 3,
	style: {
//		width: '100%',
		margin: '10px',
		borderCollapse: 'collapse',
	},
	trStyl: {
		height: '50px',
	},
	cellStyl: {
		width: '100px',
		border: '1px solid green',
		textAlign: 'center',
	},
};


//let tab = {};

let tab = azul.addTable(tabObj);

tab.addRow = function() {
	console.log('add Row');
	let tbody=tab.tbody
	let nrow = tbody.insertRow(-1);
	if (tab.hasOwnProperty('trStyl')) {Object.assign(nrow.style, tab.trStyl);}
	let cellList = new Array(tab.ncols);

	for (let col=0; col < tab.ncols; col++) {
		let newCell = nrow.insertCell();
		cellList[col] = newCell;
		if (tab.hasOwnProperty('cellStyl')) {Object.assign(newCell.style, tab.cellStyl);}
	}
	tab.cells.push(cellList);
	tab.nrows++;
}

addBut.addEventListener('click', tab.addRow);

tab.delRow = function() {
	console.log('del Row');
	if (tab.nrows<2) {return}
	let tbody=tab.tbody;
	tbody.deleteRow(-1);

	tab.cells.pop();
	tab.nrows--;
}

delBut.addEventListener('click', tab.delRow);


tdiv.appendChild(addBut);
tdiv.appendChild(delBut);
tdiv.appendChild(tab);

azul.docbody.appendChild(tdiv);
