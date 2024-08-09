
const jsurl = '/json/adress.json';

async function fetchJson(geturl) {

	const resp = await fetch(geturl)
	if (!resp.ok) {
		throw new Error(`HTTP error, status = ${response.status}`);
	}
	const adr = await resp.json();

	const tdivObj = {
    	typ: 'div',
    	style: {
        	border: '1px solid blue',
        	margin: '10px',
        	minHeight: '100px',
    	},
	};

	let tdiv = azul.addElement(tdivObj);

	for (let key in adr){
//		console.log( key + ": " + adr[key]);
		let p = document.createElement("p");
		p.textContent = key + ": " + adr[key];
		tdiv.appendChild(p);
	}

	azul.docbody.appendChild(tdiv);
}

fetchJson(jsurl);



