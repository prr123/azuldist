// v10 download images via workers
//     display pdf files
//

function crePage() {
    const pageObj = {
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
    };


    azul.loadPage(pageObj);


    const hdStyl = {
        color: 'MediumPurple',
        margin: 'auto',
        textAlign: 'center',
        padding: '0.5em',
    };

    const hdObj = {
        style: hdStyl,
        parent: azul.header,
        id: 'header',
        className: 'doch3',
        textContent: 'Azul Accounting',
        typ: 'h3',
    };
    azul.addElement(hdObj);

    const hd2Obj = {
        style: hdStyl,
        parent: azul.docbody,
        id: 'docmain',
        className: 'doch3',
        textContent: 'overview',
        typ: 'h3',
    };
    azul.addElement(hd2Obj);

    const hdfooterObj = {
        style: hdStyl,
        parent: azul.footer,
        id: 'foodheader',
        className: 'doch3',
        textContent: 'footer',
        typ: 'h3',
    };
    azul.addElement(hdfooterObj);

	const menuObj = {
        parent: azul.header,
		size: '32',
		svgStyl: {
			position: 'absolute',
			top: '30px',
			right: '50px',
		},
		pStyl: {
			strokeWidth:'10',
        	strokeLinecap: 'round',
        	stroke: 'black',
        	fill : 'none',
		},
		pathstr: azul.icons.menu,
	};

//	console.log("path: ", HtmlPage.icons.menu);
	azul.menuIcon = azul.addIcon(menuObj);

    document.body.appendChild(azul.divMain);
};

const docObj = {
	title: 'azul test',
    metaObj: {
        metaNames: [
            {name: 'description', content: 'pg client'},
            {name: 'author', content: 'prr'},
            {name: 'date', content: '1/10/2022'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1.0'},
            ],
    	},
	bodyStyl: {
		fontSize: '16px',
		},
};

azul.init(docObj);

crePage();

//const url = '/js/azulPdfViewer.js';
//LoadScript(url);

