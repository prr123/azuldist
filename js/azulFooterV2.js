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

const grid = azul.addGrid(gridObj);

function fbutf1() {console.log('footer f1 click')};
function fbutf2() {console.log('footer f2 click')};

const butFootStyl = {
	background: 'none',
  	border: 'none',
	padding: '0',
	margin: '5px',
	cursor: 'pointer',
};

let butFootObj = {
        style: butFootStyl,
        typ: 'button',
        textContent: 'privacy',
        elNam: 'butPeople',
        evlist: {
            click: fbutf1,
        },
    };

butFootObj.textContent = 'Privacy';

let fbut1 = azul.addElement(butFootObj);
grid.els[0][0].appendChild(fbut1);


butFootObj.textContent = 'Data';
butFootObj.evlist.click = fbutf2;

let fbut2 = azul.addElement(butFootObj);
grid.els[1][0].appendChild(fbut2);


nfooter.appendChild(grid);

azul.divMain.replaceChild(nfooter, azul.footer);
