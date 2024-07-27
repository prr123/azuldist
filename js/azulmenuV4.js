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
	};
	const divMain = azul.init(pageObj);

	let headerObj = {
		id: 'header',
		menuObj: {
	    	id: 'mainMenu',
			style: {
    			width: '300px',
    			minHeight: '500px',
    			margin: '10px',
    			border: '1px solid green',
    			position: 'absolute',
    			top: '0px',
   				left: '0px',
    			zIndex: '1',
    			backgroundColor: 'white',
    			display: 'block',
				parent: azul.doc,
			},
			MainMenu: {
				home: '',
				products: 'products.json',
				services: 'services.json',
				examples: {
					expl_1: 'exp1.json',
					example_2: 'exp2.json',
				},
				Blogs: 'blogs.json',
			},
		},

    };

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

    azul.addMeta(metaObj);

    azul.addLink(linkObj);


    let stylObj = {};
    azul.addStyles(stylObj);

//    azul.addScript('azulLib.json');
/*
	let mainObj = {
		id: 'main',
		typ: 'div',
		style: {
			width: 'calc(100% - 300px)',
			border: '1px solid blue',
            minHeight: '300px',
		},
	}

	let main = azul.addElement(mainObj);
*/
//	azul.main = main;

	let header = azul.addAzulHeader(headerObj);

	let secObj = {
		typ: 'section',
		parent: this.divMain,
		id: 'doc',
 		name: 'docmain',
      className: 'azulSection',
		style: {
                minHeight: '500px',
                margin: '10px',
                border: '1px solid Tomato',
                position: 'relative',
		},
	};

	const doc = azul.addElement(secObj);

	let footerObj = {
		parent: this.divMain,
		cols: {
			Company: {
				mission: 'mission.json',
				team: 'team.json',
				history: 'history.json',
			},
			Legal: {
			 	cookies: 'cookies.json',
				terms: 'terms.json',
				privacy: 'privacy.json',
			},
			Contact: {
				map: 'google',
				geoPos: {
					long: '39.46558953048778',
					lat:  '-0.3696211238660346',
				},
				address: {
					street: 'calle de maestro Gozalbo',
					st_num: '12',
					apt: '10',
					city: 'Valencia',
					zip: '46005',
					country: 'Spain',
				},
			}, //contact
		}, //cols
	}; //footerObj
	let footer = azul.addAzulFooter(footerObj);

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
//    azul.addElement(hdObj);

    let hd2Obj = {
        style: hdStyl,
        parent: azul.doc,
        id: 'docmain',
        className: 'doch3',
        textContent: 'docmain',
        typ: 'h3',
    }
 //   azul.addElement(hd2Obj);

    let hdfooterObj = {
        style: hdStyl,
        parent: azul.footer,
        id: 'footer',
        className: 'doch3',
        textContent: 'footer',
        typ: 'h3',
    }
//    azul.addElement(hdfooterObj);


    document.body.appendChild(this.divMain);
}
