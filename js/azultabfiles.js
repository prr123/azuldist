// input select test
  window.onload = (event) => {
    const azul = new HtmlPage;
    let pageObj = {
        mainDiv: {
            style: {
                width: 'calc(100% - 300px)',
                border: '1px solid blue',
                minHeight: '300px',
            },
            id: 'divMain',
        },
        header: {
            style: {
                height: '100px',
                margin: '10px',
                border: '1px solid DeepPink',
                position: 'relative',
            },
            id: 'header',
            className: 'pagSections',
        },
        section: {
            style: {
                minHeight: '500px',
                margin: '10px',
                border: '1px solid Tomato',
                position: 'relative',
            },
            id: 'docmain',
            className: 'pagSections',
        },
        footer: {
            style: {
                height: '100px',
                margin: '10px',
                border: '1px solid green',
                position: 'relative',
            },
            id: 'footer',
            className: 'pagSections',
        },
    }

    let metaObj = {
        metaNames: [
            {name: 'description', content: 'a blog'},
            {name: 'author', content: 'prr'},
            {name: 'date', content: '1/10/2022'},
            ],
    };

    let linkObj = {
        id: 'azulCss',
        type: 'text/css',
        href: 'azulLib.css',
    }

    azul.init(pageObj);

    azul.addMeta(metaObj);

    azul.addLink(linkObj);

    let stylObj = {};
    azul.addStyles(stylObj);

//    azul.addScript('azulLib.js');


    let hdStyl = {
        color: 'MediumPurple',
        margin: 'auto',
        textAlign: 'center',
        padding: '0.5em',
    };

    let hdObj = {
        style: hdStyl,
        parent: azul.header,
        id: 'header',
        className: 'doch3',
        textContent: 'header title',
        typ: 'h3',
    }
    azul.addElement(hdObj);

    let hd2Obj = {
        style: hdStyl,
        parent: azul.doc,
        id: 'docmain',
        className: 'doch3',
        textContent: 'docmain',
        typ: 'h3',
    }
    azul.addElement(hd2Obj);

    let hdfooterObj = {
        style: hdStyl,
        parent: azul.footer,
        id: 'footer',
        className: 'doch3',
        textContent: 'footer',
        typ: 'h3',
    }
    azul.addElement(hdfooterObj);

    let elObj = {
        style: {
                height: '100px',
                margin: '10px',
                border: '1px solid green',
        },
        parent: azul.doc,
        typ: 'div',
    };
    let ndiv = azul.addElement(elObj);

	let tabObj = {
		style: {
			border: '1px dashed purple',
			minHeight: '400px',
		},
		tabNames: ['first', 'second', 'third'],
		id: 'tabFiles',
		className: 'divClass',
		parent: azul.doc,
		nav: {
			style: {
				border: '1px dotted orange',
				minHeight: '50px',
			},

		},
		tab: {
			style: {},
		},
		div: {
			style: {
				margin: '10px',
				color: 'black',
				border: '1px dashed purple',
			},
		},
		div0: {
			style: {
				color: 'blue',
				padding: '10px',
			},
			id: 'tabDiv0',
		},
		div1: {
			style: {
				color: 'red',
			},
			id: 'tabDiv1',
		},
	};

	const tabFiles = new tabDivs();
	let tabDiv = tabFiles.create(tabObj);

	azul.doc.appendChild(tabDiv);
    document.body.appendChild(azul.divMain);

}
