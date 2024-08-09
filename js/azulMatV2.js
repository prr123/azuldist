let inpTxtStyl = {
			width: '100px',
            borderWidth: '0',
            outline: 'none',
//            borderBottom: '1px solid blue',
			background: '#f2f2f2',
		};

let divStyl = {
          border: '1px solid green',
          width: '250px',
          height: '30px',
          position: 'absolute',
          top: '30px',
          left: '50px',
	};

let fdivStyl = { border: '1px solid green', width: '95%', height: '400px', margin: "40px 10px 10px 10px", position: 'absolute', top: '20px',};

let inpObj = {
	first: {r: 1, c: 1, w: 100, val: ''},
	last: {r: 1, c:2, w:150, val: ''},
	city: {r: 2, c:1, w:150, val: ''},
	street: {r: 3, c: 1, w:200, val: ''},
};

function listInpObj(inpObj) {
	let formDiv = document.createElement('div');
	Object.assign(formDiv.style,fdivStyl);
	formDiv.inpf = {};
	let keys = Object.keys(inpObj);
	for (let i=0; i<keys.length; i++) {
//		console.log('key[' + (i+1) + ']: ' + keys[i] + ' val: ' + inpObj[keys[i]]);
		const k = keys[i];
//		console.log('k: ' + k + ' vobj: '+ inpObj[k].w);

	    const itemdiv = document.createElement('div');
	    Object.assign(itemdiv.style,divStyl);
		itemdiv.style.top = 30 + (inpObj[k].r -1)*50 + 'px';
		itemdiv.style.left = 50 + (inpObj[k].c -1)*300 + 'px';

		let lab = document.createElement('label');
		lab.textContent = k + ': ';

		let inp = document.createElement('input');
		Object.assign(inp.style,inpTxtStyl);
		inp.style.width = inpObj[k].w + 'px';
		lab.appendChild(inp);
		itemdiv.appendChild(lab);
		formDiv.appendChild(itemdiv);
		formDiv.inpf[k] = inp;
	}

	azul.docbody.appendChild(formDiv);
	return formDiv
}

function addHov(form) {

	let keys = Object.keys(inpObj);
	for (let i=0; i<keys.length; i++) {
		const k = keys[i];
		let inp = form.inpf[k]
		inp.value = 'Peter';
//		console.log("key: " + k + " val: " + inp.value);
		inp.addEventListener("mouseover", (event) => {event.preventDefault(); inp.style.borderBottom ='1px solid blue';});
		inp.addEventListener("mouseout", (event) => {event.preventDefault(); inp.style.borderBottom ='0px';});
	}
}

function addMenuEvents() {
	let icon = azul.menuIcon;
//	console.log("icon: " + icon);
	iconEl = icon.firstElementChild;
	icon.addEventListener("mouseover", (event) => {event.preventDefault(); iconEl.style.stroke = 'red';});
	icon.addEventListener("mouseout", (event) => {event.preventDefault(); iconEl.style.stroke ='black';});
	icon.addEventListener("click", (event) => {event.preventDefault(); console.log('menu click');});
}

const form = listInpObj(inpObj);

addHov(form);

addMenuEvents();
//azul.docbody.replaceWith(form);




