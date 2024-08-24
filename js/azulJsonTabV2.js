const jsurl = '/json/adresses.json';

async function fetchJson(geturl) {

	const resp = await fetch(geturl)
	if (!resp.ok) {
		throw new Error(`HTTP error, status = ${response.status}`);
	}
	const adrObj = await resp.json();
//	const adr = await adrObj
	return adrObj;
}

let adrObj = fetchJson(jsurl);

let adrNum = 0;
let page = 0;

butNxtObj = {
    style: {
        margin: '0 0 0 20px',
        height: '30px',
        width: '100px',
        border: '1px solid green',
    },
    typ: 'button',
    textContent: 'next',
};

const nxtBut = azul.addElement(butNxtObj);

nxtBut.addEventListener('click', nxtF);

function nxtF() {
//console.log('adrNum: ' + adrNum + ':' + page);
	if (page<(adrNum -1)) {
		page++;
		dispTab();
	}
//	console.log('next click: ' + page)
};

const butPrvObj = {
    style: {
        margin: '0 20px 0 0',
        float: 'right',
        height: '30px',
        width: '100px',
        border: '1px solid green',
    },
    typ: 'button',
    textContent: 'prev',
//    evlist: {
//        click: butr,
//    },
};

const prvBut = azul.addElement(butPrvObj);

prvBut.addEventListener('click', prvF);
function prvF() {
	if (page>0) {
		page--;
		dispTab();
	}
//	console.log('prev click: ' + page)
};

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

vdiv.appendChild(nxtBut);
vdiv.appendChild(prvBut);

azul.addTable = function(tblObj, lab) {

	let tbl = document.createElement('table');
	tbl.focusCol = 0;
	tbl.focusRow = 0;

	tbl.nrows = lab.length;
	tbl.ncols = 2;
	tbl.cells = [];

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

	const cells =[];
	let tbody = tbl.createTBody();
	for (let row=0; row < tbl.nrows; row++) {
		let trow = tbody.insertRow();
		trow.id = tbl.id + 'R:' + row;
		trow.style.height = '20px';
//            trow.classList.add((tbl.id + 'Row'), (tbl.id + 'Row' + row));
//		for (let col=0; col < tbl.ncols; col++) {
		let newCell = trow.insertCell();
		newCell.textContent =lab[row];
		if (tblObj.hasOwnProperty('cell')) {Object.assign(newCell, tblObj.cell);}
		Object.assign(newCell.style, tblObj.cellStyl);
		newCell.style.width = '50px';
		newCell.style.fontWeight = 'bold';
//                newCell.id = tbl.id + 'R' + row + 'C' + col;
//                newCell.classList.add((tbl.id + 'Cell'), (tbl.id + 'CelCol' + col), (tbl.id + 'CelRow' + row));
//			newCell.textContent = 'R:' + row + 'C:' + col;
		if (tbl.edit) {newCell.contentEditable = 'true'};
//                newCell.addEventListener('input',(event) => {inpFun(event)});
//                newCell.addEventListener('click',(event) => {clickFun(event)});
//                newCell.addEventListener('keydown',(event) => {keydFun(event)});
//                newCell.addEventListener('mouseenter',(event) => {cellHover(event)});
//                newCell.addEventListener('mouseleave',(event) => {cellLeave(event)});
//		}
		newCell = trow.insertCell();
		if (tblObj.hasOwnProperty('cell')) {Object.assign(newCell, tblObj.cell);}
		Object.assign(newCell.style, tblObj.cellStyl);
		newCell.style.backgroundColor = '#D3D3D3';
		tbl.cells[row] = newCell;
	} // row
//	this.cells = cells;
	return tbl;
}


const tabObj = {
	style: {
		width: '400px',
		borderCollapse: 'collapse',
		margin: '10px',
	},
	cellStyl: {
		padding: '5px 10px 5px 10px',
        border: '1px dotted green',
		textAlign: 'left',
	},
};
const adrLab = ['First', 'Mid','Last','Short'];

let tab0 = azul.addTable(tabObj, adrLab);
let tab1 = azul.addTable(tabObj, adrLab);

let curPage = 0;
let curTab = true;

let adrList = [];
adrObj.then(
	(adrData) => {
	const adr = adrData[0];
	adrList = adrData;
//	console.log("adrData: " + adr1);
	tab0.cells[0].textContent = adr["First"];
	tab0.cells[2].textContent = adr["Last"];
//	console.log('cell rows: ' + tab0.cells.length);
	adrNum = adrData.length
	vdiv.appendChild(tab0);
	azul.docbody.appendChild(vdiv);
});

function dispTab() {
	if (page === curPage) {return}
	const adr = adrList[page];
	console.log("adrData: " + page + ':' + adr);
	if (curTab) {
		tab1.cells[0].textContent = adr["First"];
		tab1.cells[2].textContent = adr["Last"];
		vdiv.replaceChild(tab1, tab0);
		curTab = false;
	} else {
		tab0.cells[0].textContent = adr["First"];
		tab0.cells[2].textContent = adr["Last"];
		vdiv.replaceChild(tab0, tab1);
		curTab = true;
	}
	curPage = page;
//	console.log('cell rows: ' + tab0.cells.length);
//	azul.docbody.appendChild(vdiv);
}
