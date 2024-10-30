const nfObj = {
	style: {
		height: '150px',
		margin: '10px',
		border: '1px dashed red',
		position: 'relative',
	},
	id: 'nfooter',
	typ: 'div',
};
const nfooter = azul.addElement(nfObj);

let gridObj = {
    rows: 3,
    cols: 4,
    style: {
        display: 'grid',
        border: '1px solid blue',
        margin: '10px',
        minHeight: '100px',
    },
	elStyle: {
 		border: '1px solid green',
	}

};

let gridparObj = {
	typ: 'p',
	style: {
		margin: '5px',
	}
}


const grid = azul.addGrid(gridObj);

//for (let irow = 0; irow< grid.rows; irow++) {
//	for (let icol = 0; icol<grid.cols; icol++) {
//		let par = azul.addElement(gridparObj);
//		par.textContent = 'r:' + irow + ' c:' + icol;
//		grid.els[irow][icol].appendChild(par);
//	}
//}

let par = azul.addElement(gridparObj);
par.textContent = 'Privacy';
grid.els[0][0].appendChild(par);

par = azul.addElement(gridparObj);
par.textContent = 'Legal';
grid.els[1][0].appendChild(par);

par = azul.addElement(gridparObj);
par.textContent = 'Contact Info';
grid.els[0][3].appendChild(par);

nfooter.appendChild(grid);

azul.divMain.replaceChild(nfooter, azul.footer);
