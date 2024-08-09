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

let adr = {};
fetch(jsurl)
	.then((response) => {
		if (!response.ok) {
			throw new Error(`HTTP error, status = ${response.status}`);
		}
		return response.json();
	})
	.then((adrObj) => {
//		console.log('adress: ' + adrObj);
		return adrObj;
	})
	.catch(console.error);

    	for (let key in adrObj){
        	console.log( key + ": " + adrObj[key]);
    	}


azul.docbody.appendChild(tdiv);


