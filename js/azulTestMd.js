    const hdMdObj = {
        style: {
	        color: 'Green',
    	    margin: 'auto',
			textAlign: 'center',
        	padding: '0.5em',
    	},
//        parent: 'azul.docmain',
        id: 'docmainHd',
        className: 'doch3',
        textContent: 'test markdown',
        typ: 'h3',
    };
    const hdel = azul.addElement(hdMdObj);
	azul.docbody.appendChild(hdel);
	azul.docbody.appendChild(mdDiv);
