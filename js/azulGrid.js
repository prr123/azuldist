azul.addGrid = function(gridObj) {
	let gridDiv = document.createElement('div');
	Object.assign(gridDiv.style, gridObj.style);

	let repStr = 'repeat(' + gridObj.cols + ', 1fr)'
	gridDiv.style.gridTemplateColumns = repStr;

	repStr = 'repeat(' + gridObj.rows + ', 1fr)'
	gridDiv.style.gridTemplateRows = repStr;
	geStyl = {
        border: '1px solid green',
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
	rows: 3,
	cols: 4,
	style: {
        display: 'grid',
		gridTemplateColumns: 'repeat(3, 1fr)',
        border: '1px solid blue',
        margin: '10px',
		minHeight: '100px',
	},
};

let gdiv = azul.addGrid(gridObj);
azul.docbody.appendChild(gdiv);
