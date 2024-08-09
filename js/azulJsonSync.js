const tdivObj = {
    typ: 'div',
    style: {
        border: '1px solid blue',
        margin: '10px',
        minHeight: '100px',
    },
};

let tdiv = azul.addElement(tdivObj);

const jsurl = '/json/adress.json';

function fetchJson(geturl) {

	const resp = fetch(geturl)
	if (!resp.ok) {
		throw new Error(`HTTP error, status = ${response.status}`);
	}
	const adr = resp.json();
	for (let key in adr){console.log( key + ": " + adr[key]);}
//	return adr;
}

fetchJson(jsurl);


azul.docbody.appendChild(tdiv);


