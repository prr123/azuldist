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
	colwProp = false
	if (tblObj.hasOwnProperty('colW')) {
		colwProp = true;
	}
	if (tblObj.hasOwnProperty('head')) {
		let theader = tbl.createTHead();
		let hdRow = theader.insertRow();
		if (tblObj.hasOwnProperty('hdStyl')) {
			Object.assign(hdRow.style, tblObj.hdStyl)
		}
//cc

		const hdcolNum = tblObj.head.length;

		for (let hdcol=0; hdcol < hdcolNum; hdcol++) {
			let hdCell = hdRow.insertCell();
			if (tblObj.hasOwnProperty('hdcelStyl')) {
				Object.assign(hdCell.style, tblObj.hdcelStyl)
			}
			if (colwProp) {hdCell.style.width = tblObj.colW[hdcol];}
			hdCell.textContent = tblObj.head[hdcol];
		}
	}
	let trStylProp = false;
	if (tblObj.hasOwnProperty('rowStyl')) {
		tbl.rowStyl = {};
		Object.assign(tbl.rowStyl, tblObj.rowStyl)
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
		if (trStylProp) {Object.assign(trow.style, tblObj.rowStyl)}
//            trow.classList.add((tbl.id + 'Row'), (tbl.id + 'Row' + row));
		let cellList = new Array(tbl.ncols);
		for (let col=0; col < tbl.ncols; col++) {
			let newCell = trow.insertCell();
			cellList[col] = newCell;
			if (tblObj.hasOwnProperty('cell')) {Object.assign(newCell, tblObj.cell);}
			if (cellStylProp) {Object.assign(newCell.style, tblObj.cellStyl);}
			if (colwProp) {newCell.style.width = tblObj.colW[col];}

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

	tbl.addRow = function() {
//	console.log('add Row');
		let tbody=tab.tbody
		let nrow = tbody.insertRow(-1);
		if (tbl.hasOwnProperty('rowStyl')) {Object.assign(nrow.style, tbl.rowStyl);}
		let cellList = new Array(tbl.ncols);

		for (let col=0; col < tbl.ncols; col++) {
			let newCell = nrow.insertCell();
			cellList[col] = newCell;
			if (tbl.hasOwnProperty('cellStyl')) {Object.assign(newCell.style, tbl.cellStyl);}
		}
		tbl.cells.push(cellList);
		tbl.nrows++;
	}

	tbl.delRow = function() {
//	console.log('del Row');
		if (tbl.nrows<2) {return}
		let tbody=tbl.tbody;
		tbody.deleteRow(-1);

		tbl.cells.pop();
		tbl.nrows--;
	}
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
	colW: ['100px', '200px', '150px'],
	head: ['first', 'last', 'id'],
	hdStyl: {
		height: '30px',
		},
	hdcelStyl: {
//		width: '100px',
		border: '1px solid red',
		textAlign: 'center',
		fontWeight: 'bold',
		},

	style: {
		margin: '10px',
		borderCollapse: 'collapse',
	},
	rowStyl: {
		height: '50px',
	},
	cellStyl: {
//		width: '100px',
		border: '1px solid green',
		textAlign: 'center',
	},
};

let tab = azul.addTable(tabObj);


addBut.addEventListener('click', tab.addRow);


delBut.addEventListener('click', tab.delRow);


tdiv.appendChild(addBut);
tdiv.appendChild(delBut);
tdiv.appendChild(tab);

azul.docbody.appendChild(tdiv);
