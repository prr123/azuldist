// v3
// add event from object
// v4
// add js file
// v5 addElementAlt
// v6 add addIcon; clean
// v7
// v8 change azul from class to object
// v9 add ability to read json files also trial webworker (azulWorker.js)
// v10 read files through workers
// v11
// V12: add addCanvas
// V12: add addGrid
//

async function fetchJsonAsync(jurl) {
    const response = await fetch(jurl);
 if (!response.ok) {
            throw new Error(`HTTP error, status = ${response.status}`);
          }
    let respObj = await response.json();
//    console.log("resp: " + respObj);
	return respObj;
}

/*
async function fetchTxtAsync(url, f) {
    const resp = await fetch(url);
    let txt = await resp.text();
    console.log("resp: " + txt);
	f(txt);
	return;
}
*/

async function LoadScript(url) {
    const script = document.createElement('script');

    script.src = url;
    script.type = "application/javascript";

    script.onload = () => {
        console.log('Script loaded successfully: ' + url);
    };
    script.onerror = () => {
        console.log('Error occurred while loading script: ' + url);
    };
   	document.body.appendChild(script);
}

let azul = {

	icons: {
    	login: 'M 50,40 A 15,15 0 0 1 50,10 A 15,15 0 0 1 50,40 M 22,90 A 28,49 0 0 1 50,50 28,49 0 0 1 78,90 60,60 90 0 1 22,90',
    	menu: 'M 5,20 h 90 M 5,50 h 90 M 5,80 h 90',
    	home: 'M 15,40 V 95 H 85 V 40 M 5,44 50,15 95,44',
    	exit: 'm 5,5 90,90 m -90,0 90, -90',
    	right: 'M 5,5 95,50 5,95 Z',
    	left: 'M 95,5 5,50 95,95 Z',
		eye:  'M 0,40 A 100,100 0 0 1 100,40 m 0, 20 A 100,100 0 0 1 0,60 M 38,50 A 12,12 0 0 1 62,50 A 12,12 0 0 1 38,50',
		pencil: 'M 16.5,71.5 0,96 24,80 26,82 14,70 82,0 96,12 26,82 M 67,15 81,27 M 72,10 86,22 M 77,5 91,17',
		bin: 'M 20,18 30,96 h40 L80,18 M 50,90 50,25 M 40,90 35,25 M 60,90 65,25 M 15,15 h70 M 20,15 20,10 H80 L80,15 M 43,10 V5 H57 V10',
		cal: 'M 10,15 V85 A 5,5 0 0 0 15,90 H85 A 5,5 0 0 0 90,85 V15 H10 M 10,16 H90 M 10,17 H90 M 10,18 H90 M 10,19 H90 M 25,15 v-3 h5 v3 M 70,15 v-3 h5 v3 M 20,35 v-3 h3 v3 h-3',
		cart: 'M 5,40 25,80 h50 L120,10 h5 M 25,90 A 5,5 0 1 0 30,85 A 5,5 0 0 0 25,90 M 65,90 A 5,5 0 1 0 70,85 A 5,5 0 0 0 65,90',
	},

	scale: window.devicePixelRatio,

	init(docObj) {

		Object.assign(document.body.style, docObj.bodyStyl);
        let metaEl = document.createElement('meta');
        metaEl.setAttribute('charset','UTF-8');
        const headEl = document.head;
        headEl.appendChild(metaEl);

		let metaObj = docObj.metaObj;
        for (let i=0; i<metaObj.metaNames.length; i++) {
            let metaEl = document.createElement('meta');
            metaEl.name = metaObj.metaNames[i].name;
            metaEl.content = metaObj.metaNames[i].content;
   			if (metaObj.metaNames[i].hasOwnProperty('id')) {metaEl.id = metaObj.metaNames[i].id;}
	        headEl.appendChild(metaEl);
        }

        const styleEl = document.createElement('style');
        styleEl.type = 'text/css';
        document.head.appendChild(styleEl);

		this.styleBaseEl = styleEl;

        let styleSheet = styleEl.sheet;
//        styleSheet.insertRule('* { margin: 0; padding: 0; font-family: Calibri; list-style: none; text-decoration:none;}');
//        styleSheet.insertRule('* { margin: 0; padding: 0; font-family: Calibri; text-decoration:none;}');
        styleSheet.insertRule('* { margin: 0; padding: 0; font-family: Calibri; font-size: 20px; text-decoration:none;}');
		this.styleSheet = styleSheet;

		if (docObj.hasOwnProperty('title')) {
 			const titEl = document.createElement('title');
			titEl.textContent = docObj.title;
        	document.head.appendChild(titEl);
//			document.head.title = docObj.title;
		}
	},

    loadPage(pgObj) {
      	const divMain = document.createElement('div');
//     	Object.assign(divMain,pgObj.mainDiv);
      	Object.assign(divMain.style,pgObj.mainDiv.style);
		if (pgObj.append) {document.body.appendChild(divMain);}

		const hasHeader = 'header' in pgObj;
		if (hasHeader) {
			let headerObj = document.createElement('header');
			Object.assign(headerObj, pgObj.header);
			Object.assign(headerObj.style, pgObj.header.style);
			divMain.appendChild(headerObj);
			this.header = headerObj;
		}
		const hasSection = 'section' in pgObj;
		if (hasSection) {
			let sectionObj = document.createElement('section');
			Object.assign(sectionObj, pgObj.section);
			Object.assign(sectionObj.style, pgObj.section.style);
			divMain.appendChild(sectionObj);
			this.docbody = sectionObj;
		}
		const hasFooter = 'footer' in pgObj;
		if (hasFooter) {
			let footerObj = document.createElement('footer');
			Object.assign(footerObj, pgObj.footer);
			Object.assign(footerObj.style, pgObj.footer.style);
			divMain.appendChild(footerObj);
			this.footer = footerObj;
		}
      	this.divMain = divMain;
	  	return divMain;
	},

	addElement(elObj) {
//      console.log('elObj: ', + elObj);
		if (elObj.typ === undefined) {return}
        let el = document.createElement(elObj.typ);
        Object.assign(el,elObj);
		if (elObj.hasOwnProperty('stylObj')) {Object.assign(el.style,elObj.stylObj);}

		if (Object.hasOwn(elObj,'style')) {Object.assign(el.style,elObj.style);}

		if (Object.hasOwn(elObj,'elNam')) {
			this[elObj.elNam] = el;
		}

		if (Object.hasOwn(elObj,'evlist')) {
			for (const [key, value] of Object.entries(elObj.evlist)) {
//				console.log(`key: ${key}, val: ${value}`);
				el.addEventListener(key,value);
			}
		}
		if (elObj.hasOwnProperty('parent')) {elObj.parent.appendChild(el);}
		return el;
	}, // add ElementAlt

	addGrid(gridObj) {
    	let gridDiv = document.createElement('div');
    	Object.assign(gridDiv.style, gridObj.style);

		let geStyl = {};
		if (gridObj.hasOwnProperty('elStylObj')) {geStyl = gridObj.elStylObj;}

		if (Object.hasOwn(gridObj,'elStyle')) {geStyl = gridObj.elStyle;}

    	let repStr = 'repeat(' + gridObj.cols + ', 1fr)'
    	gridDiv.style.gridTemplateColumns = repStr;

    	repStr = 'repeat(' + gridObj.rows + ', 1fr)'
    	gridDiv.style.gridTemplateRows = repStr;

		gridDiv.cols = gridObj.cols;
		gridDiv.rows = gridObj.rows;

//    	geStyl = {
//        	border: '1px solid green',
//    	};
		let gridEls = [];

    	for (let irow = 0; irow< gridObj.rows; irow++) {
			gridEls[irow] = [];
        	for (let icol = 0; icol<gridObj.cols; icol++) {
            	let gridEl = document.createElement('div');
            	Object.assign(gridEl.style, geStyl);
            	gridDiv.appendChild(gridEl);
				gridEls[irow][icol] =  gridEl;
        	}
    	}
		gridDiv.els = gridEls;

    	return gridDiv;
	},


	addElEvents(el, elObj) {

		if (el === undefined) {return}
		if (Object.hasOwn(elObj,'evlist')) {
			for (const [key, value] of Object.entries(elObj.evlist)) {
//				console.log(`key: ${key}, val: ${value}`);
				el.addEventListener(key,value);
			}
		}
	},

	addCanvas(canvasObj) {

		const width = canvasObj.width;
		const height = canvasObj.height;
		if (this.scale === 'undefined') {console.log('error -- no scale');}
        let canvas = document.createElement('canvas');
        Object.assign(canvas,canvasObj);
		if (canvasObj.hasOwnProperty('stylObj')) {Object.assign(canvas.style,canvasObj.stylObj);}

		if (Object.hasOwn(canvasObj,'style')) {Object.assign(canvas.style,canvasObj.style);}

		canvas.style.width = `${width}px`;
		canvas.style.height = `${height}px`;
		canvas.width = Math.floor(width * this.scale);
		canvas.height = Math.floor(height * this.scale);
		canvas.ctx = canvas.getContext('2d');
		return canvas
	},

	// rework attributes
	addIcon(iconObj) {
    	const svgNS = "http://www.w3.org/2000/svg";

    	let svgEl = document.createElementNS(svgNS, 'svg');
    	svgEl.setAttribute('width', '48');
    	svgEl.setAttribute('height', '48');
    	if (iconObj['size'] !== undefined) {
        	svgEl.setAttribute('width', iconObj['size']);
        	svgEl.setAttribute('height', iconObj['size']);
    	}
    	svgEl.setAttribute('viewBox', '0 0 100 100');
//  svgEl.setAttribute('version', '1.1');

//    	Object.assign(svgEl,iconObj);
    	Object.assign(svgEl.style,iconObj.svgStyl);

    	let pathEl = document.createElementNS(svgNS,'path');

    	Object.assign(pathEl.style,iconObj.pStyl);
    	pathEl.setAttribute('d', iconObj.pathstr)

    	svgEl.appendChild(pathEl);

		if (Object.hasOwn(iconObj,'evlist')) {
			for (const [key, value] of Object.entries(iconObj.evlist)) {
//				console.log(`key: ${key}, val: ${value}`);
				svgEl.addEventListener(key,value);
			}
		}

    	if (iconObj.hasOwnProperty('parent')) {iconObj.parent.appendChild(svgEl);}
    	return svgEl;
	},

    addMeta(metaObj) {
        const headEl = document.head;
        const metaEl = document.createElement('meta');
        metaEl.setAttribute('charset','UTF-8');
        headEl.appendChild(metaEl);

        for (let i=0; i<metaObj.metaNames.length; i++) {
            let metaEl = document.createElement('meta');
            metaEl.name = metaObj.metaNames[i].name;
            metaEl.content = metaObj.metaNames[i].content;
            headEl.appendChild(metaEl);
        }

    },

    addLink(linkObj) {
        const headEl = document.head;
        let linkEl = document.createElement('link');
        let keys = Object.keys(linkObj);
        for (let i=0; i< keys.length; i++) {
            let key = keys[i];
            linkEl.setAttribute(key, linkObj[key])
        }
        headEl.appendChild(linkEl);
		return linkEl;
    },

    addStyleObj() {

        const styleEl = document.createElement('style');
        styleEl.type = 'text/css';

        document.head.appendChild(styleEl);

		this.styleBaseEl = styleEl;
        let styleSheet = styleEl.sheet;
//        styleSheet.insertRule('* { margin: 0; padding: 0; font-family: Calibri; list-style: none; text-decoration:none;}');
        styleSheet.insertRule('* { margin: 0; padding: 0; font-family: Calibri; text-decoration:none;}');
		this.styleSheet = styleSheet;
		return styleEl;
    },

    addCssRule(cssRuleObj) {
		let styleSheet = this.styleSheet;
		for (let i=0; i<cssRuleObj.cssRules.length; i++) {
			let cssRule = cssRuleObj.cssRules[i]
    	    styleSheet.insertRule(cssRule);
		}
	},
};
