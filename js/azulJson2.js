async function LoadScript(url) {
    const script = document.createElement('script');

    script.src = url;
    script.type = "application/javascript";

//    script.onload = () => {
//        console.log('Script loaded successfuly');
//    };
    script.onerror = () => {
        console.log('Error occurred while loading script');
    };
    document.body.appendChild(script);
}


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

async function fetchJson(geturl) {

	const resp = await fetch(geturl)
	if (!resp.ok) {
		throw new Error(`HTTP error, status = ${response.status}`);
	}
	const adr = await resp.json();
	for (let key in adr){console.log( key + ": " + adr[key]);}
//	return adr;
}

fetchJson(jsurl);


azul.docbody.appendChild(tdiv);


