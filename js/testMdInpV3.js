let perSite = {
		mdObj: {
    		style: {
        		margin: '10px',
        		border: '1px dashed blue',
        		position: 'relative',
				minHeight: '200px',
    		},
    	id: 'mdDiv',
    	typ: 'div',
//	parent: azul.docbody,
		},
		gridMdObj: {
    		rows: 3,
    		cols: 1,
    		style: {
        		display: 'grid',
        		border: '1px solid purple',
        		margin: '10px',
        		minHeight: '100px',
    		},
    	elStyle: {
        	border: '1px dashed green',
 		},
	},
};

function creMdInp(MdInpStyl) { 

	let elDiv = document.createElement('div');
	
	const elStyl = {
		id: 'inpDiv',
		margin: '10px',
		border: '1px dashed green',
		minHeight: '40px',
		width: '300px',
		position: 'relative',
	};
	Object.assign(elDiv.style,elStyl);

//	console.log('style: ' + elStyl);

	let lab = document.createElement('label');
	lab.textContent = 'User:';
	lab.htmlFor = 'inptest';
	const labStyl = {
		visibility: 'hidden',
		color: 'blue',
		textAlign: 'start',
		position: 'absolute',
		fontSize: '0.8em',
		left: '0px',
		bottom: '22px',
//		display: 'none',
	};
	Object.assign(lab.style,labStyl);


	let baseStyle = '1px solid black';
	let focusStyle = '2px solid blue';

	const inpStyl = {
		borderWidth: '0',
		outlineStyle: 'none',
		position: 'absolute',
		left: '0px',
		bottom: '0px',
	};

	let inp = document.createElement('input');
	inp.type = 'text';
	inp.id ='inptest';
	inp.label = lab;
	inp.placeholder = 'label';

	Object.assign(inp.style,inpStyl);
	inp.style.borderBottom = baseStyle;
//	inp.style.display = 'inline';

	inp.addEventListener('focus', (event) => {inpMdFocInp(event, inp, lab);});
	inp.addEventListener('blur', (event) => {inpMdBlurInp(event, inp, lab);});


//	lab.appendChild(inp);
	elDiv.appendChild(lab);
	elDiv.appendChild(inp);
	return elDiv;
};

function inpMdFocInp(ev, inp, lab) {
	ev.preventDefault();
	inp.placeholder="";
	inp.style.borderBottom = '2px solid blue';
//            Object.assign(el.style,el.focusStyle);
	lab.style.visibility = 'visible';
	inp.Change = false;
	return;
};

function inpMdBlurInp(ev, inp, lab) {
	ev.preventDefault();
//	console.log("lost focus");
	inp.style.borderBottom = '1px solid black';
	lab.style.visibility = 'hidden';
	if (inp.value.length == 0) {inp.placeholder='lable';}
//	if (inp.change) {filledInp(el.value);inp.Change = false;}
	return;
};



	let MdInpObj = {};

	perSite.mdDiv = azul.addElement(perSite.mdObj);

	perSite.mdEl = creMdInp(MdInpObj);
	perSite.mdDiv.appendChild(perSite.mdEl);


	azul.docbody.appendChild(perSite.mdDiv);

