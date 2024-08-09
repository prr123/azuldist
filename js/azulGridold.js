azul.addGrid = function () {
	const gridDiv = document.createElement('div');
	gridDiv.style = {
		display: 'grid',
		border: '1px solid blue',
		margin: '10px',
	};
/*
	let gDivObj = gridObj.gridDivObj;
	if (!(Object.hasOwn(gridObj, 'style'))) {gridObj.style = {};}
	gridObj.style.display = 'grid';
	let repStr = 'repeat(' + gridObj.cols + ', 1fr)'
	gridObj.style.gridTemplateColumns = repStr;

	repStr = 'repeat(' + gridObj.rows + ', 1fr)';
	gridObj.style.gridTemplateRows = repStr;

//	const grid = this.addElement(gridObj);
	const grid = document.createElement();

	grid.cells = [];
	gridDiv.parent = grid;

	for (let irow = 0; irow< gridObj.rows; irow++) {
		grid.cells.push( [] );
		grid.cells[irow] = [];
		for (let icol = 0; icol<gridObj.cols; icol++) {
			gridDiv.style.gridRow = (irow +1);
			gridDiv.style.gridColumn = (icol +1);
			if (Object.hasOwn(gridDiv,'gridDivFun')) {gridDiv.gridDivFun(irow, icol);}
			gridDiv.textContent = 'div ' + (irow +1) + ':' + (icol+1);
			let gridEl = this.addElement(gridDiv);
			grid.cells[irow].push(gridEl);
		}
	}
*/
	return gridDiv;
}

const gridObj = {

};

let gdiv = azul.addGrid(gridObj);
azul.docbody.appendChild(gdiv);
