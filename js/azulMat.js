let inpTxtStyl = {
			width: '100px',
            borderWidth: '0',
            outline: 'none',
            borderBottom: '1px solid blue',
			background: '#f2f2f2',
		};

let divStyl = {
          border: '1px solid green',
          width: '200px',
          height: '30px',
          position: 'absolute',
          top: '30px',
          left: '50px',
	};

let fdivStyl = { border: '1px solid green', width: '95%', height: '400px', margin: "40px 10px 10px 10px", position: 'absolute', top: '20px',};

let inpObj1 = {
	first: {
		label: {
			textContent: 'First: ',
		},
		inp: {
			minlength:'4',
			maxlength:"8",
     	},
	},
	last: {
		label: {
			textContent: 'Last: ',
		},
		inp: {
			minlength:'4',
			maxlength:"15",
     	},
	},


};

function creInpPg (inpObj) {
	let formDiv = document.createElement('div');
	Object.assign(formDiv.style,fdivStyl);

	let firstDiv = document.createElement('div');
	Object.assign(firstDiv.style,divStyl);
//	console.log('inpobj: ' + inpObj.parent);
	let lab = document.createElement('label');
	Object.assign(lab,inpObj.first.label);
	let inp = document.createElement('input');
	Object.assign(inp,inpObj.first.inp);
	Object.assign(inp.style,inpTxtStyl);
	lab.appendChild(inp);
	firstDiv.appendChild(lab);
	formDiv.appendChild(firstDiv);

	let lastDiv = document.createElement('div');
	Object.assign(lastDiv.style,divStyl);
	lastDiv.style.left = '300px';
//	console.log('inpobj: ' + inpObj.parent);
	let lab2 = document.createElement('label');
	Object.assign(lab2,inpObj.last.label);
	let inplast = document.createElement('input');
	Object.assign(inplast,inpObj.first.inp);
	Object.assign(inplast.style,inpTxtStyl);
	lab2.appendChild(inplast);
	lastDiv.appendChild(lab2);
	formDiv.appendChild(lastDiv);

	azul.docbody.appendChild(formDiv);
};

creInpPg(inpObj1);


