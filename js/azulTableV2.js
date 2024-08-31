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
	if (tblObj.hasOwnProperty('trStyl')) {trStylProp = true;}

	let cellStylProp = false;
	if (tblObj.hasOwnProperty('cellStyl')) {cellStylProp = true;}

	let tbody = tbl.createTBody();

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

let tab = azul.addTable(tabObj);

tab.cells[0][0].textContent = 'test';

tdiv.appendChild(tab);

azul.docbody.appendChild(tdiv);
