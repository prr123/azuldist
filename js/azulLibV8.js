async function fetchDataAsync(url) {
    const response = await fetch(url);
    let respObj = await response.json();
//    console.log("resp: " + respObj);
	return respObj;
}


function logoSimple(azul) {

    let svgObj = {
        typ: 'svg',
        id: 'logo',
//        parent: doc,
        att: {
            viewBox: '0 0 400 70',
            version: '1.1',
//            width: '300px',
//            height: '60px',
            width: '400px',
            height: '80px',
        },
    };

    const svgEl = azul.createSvg(svgObj);

    const logoGrpObj = {
        typ: 'g',
        att: {
            transform: 'matrix(-.6 0 0 .6 63 1)',
        },
    };

    const logoGrpEl = azul.createSvg(logoGrpObj);

    const p1Obj = {
        typ: 'path',
        parent: logoGrpEl,
        att: {
            d: "m7 78h-7c-0.5 7 1 13 5 16 1 1 2 2 4 2-3-4-4-11-2-18zm79-74c-11-10-39 1-61 26-2 2-4 4-5 6h10c0.4-0.4 0.7-0.8 1-1 20-22 44-34 57-29-0.6-1-1-2-2-3z",
			fill: "#2f4694",
        },
    };
    const p1El = azul.createSvg(p1Obj);

    const p2Obj = {
        typ: 'path',
        parent: logoGrpEl,
        att: {
            d: "m93 3c-1-1-3-2-4-3 9 13-1 42-24 68-22 25-49 38-63 32 0.7 1 2 2 2 3 13 11 43-2 68-29 10-11 18-25 18-25 11-19 13-37 4-45z",
            fill: "#2ea8dc",
        },
    };
    const p2El = this.createSvg(p2Obj);

    svgEl.appendChild(logoGrpEl);

    const txtObj = {
        typ: 'text',
        parent: svgEl,
        att: {
            dx: '43px',
            dy: '51px',
        },
        style: {
            fontFamily: "Aquatico",
            fontSize: '36px',
            fill: "#0b9bd8",
            color: '#0b9bd8',
        },
        textContent: 'AZUL SOFTWARE',
    };

    const svgEltext = azul.createSvg(txtObj);

    return svgEl;
}


class HtmlPage {
    constructor () {
    	this.svgNS = "http://www.w3.org/2000/svg";
    	this.iconSize = 48;
    }

    init(pgObj) {

      	let divMain = document.createElement('div');
//     	Object.assign(divMain,pgObj.mainDiv);
      	Object.assign(divMain.style,pgObj.mainDiv.style);
		if (pgObj.append) {document.body.appendChild(divMain);}
		// let objList = Object.keys(pgObj);
		// console.log(objList);
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
	}

    createMenu(menuObj) {

        let menuDiv = document.createElement('div');
		this.menu = menuDiv;
        menuDiv.id = 'menuDiv';
		if (menuDiv.id !== undefined) {menuDiv.id = menuObj.id;}
        Object.assign(menuDiv.style, menuObj.style);

        let menuNav = document.createElement('div');
        menuNav.id = 'menuNav';
        let menuNavObj = {
            style: {
                minHeight: '50px',
                border: '1px solid blue',
            },
        };
        Object.assign(menuNav.style, menuNavObj.style);

        let menuTitleStylObj = {
            display: 'inline',
            position: 'absolute',
            padding: '5px',
        };

        let menuTitle = document.createElement('h3');
        menuTitle.textContent = 'menu';
        Object.assign(menuTitle.style, menuTitleStylObj);
        menuNav.appendChild(menuTitle);

        let iconObj = {
            id: 'menuX',
            iconType: 'exit',
			size: '32',
            svgStyle: {
                cursor: 'default',
                display: 'inline',
                position: 'absolute',
                top: '10px',
                right: '10px',
            },
            style: {color: 'black',},
            hovStyle: {cursor: 'pointer',},
            parent: menuNav,
            exitEl: menuDiv,
        };

        this.createIcon(iconObj);
        menuDiv.appendChild(menuNav);

        let menuMain = document.createElement('div');

        let menuMainStyl = {
            border: '1px solid orange',
            width: '100%',
            height: '400px',
        };
        Object.assign(menuMain.style, menuMainStyl);

        let dispObj = menuObj.MainMenu;
        let menuList = this.dispMenu(dispObj, 0);

		menuMain.appendChild(menuList);
        menuDiv.appendChild(menuMain);
        return menuDiv;
    }

    dispMenu(dispObj, nest) {
        let menuList = document.createElement('ul');
        let items =  Object.keys(dispObj);
        let values = dispObj;
        let pad = 10 + 20*nest;
        for (let i=0; i< items.length; i++) {
            let idx = items[i];
            let item = document.createElement('li');
            item.textContent = idx;
            item.style.paddingTop = '4px';
            item.style.paddingLeft = pad + 'px';
            item.addEventListener('mouseenter', (e)=>{e.target.style.color = 'red'; e.target.style.cursor = 'pointer';});
			item.addEventListener('mouseleave', (e)=>{e.target.style.color = 'black'; e.target.style.cursor = 'default';});

            menuList.appendChild(item);

            if ((typeof values[idx]) === 'object') {
//              console.log('obj: ' + i);
                let submenu = this.dispMenu(values[idx], nest+1);
                item.disp = submenu;
                item.state = false;
                item.addEventListener('mouseup', (e)=>{item.state =this.menuDisp(e, item.state);});
                menuList.appendChild(submenu);
            } else {
            item.addEventListener('mouseup', (e)=>{this.menuFun(e,i);});
            item.file = values[items[i]];
            }
        }
        return menuList
    }

	menuFun(e, i) {
		let el = e.target;
		console.log('menu item: ' + el.file);
	}

    menuDisp(e, state) {
        let el = e.target;
        let nstate = !state;
        if (state) {
            el.disp.style.display = 'block';
        } else {
            el.disp.style.display = 'none';
        }
//      console.log('menu item: ' + state);
        return nstate;
    }


    createLogin(loginObj2) {

    let loginObj = {
        id: 'login',
        style: {
            width: '800px',
            minHeight: '500px',
            margin: '10px',
            border: '1px solid green',
            position: 'absolute',
            top: '300px',
            left: '500px',
            zIndex: '1',
            backgroundColor: 'white',
            display: 'block',
        },

    };

        let loginDiv = document.createElement('div');
		this.login = loginDiv;
        loginDiv.id = 'loginDiv';
        Object.assign(loginDiv.style, loginObj.style);

        let loginNav = document.createElement('div');
        loginNav.id = 'loginNav';
        let loginNavObj = {
            style: {
                minHeight: '50px',
                border: '1px solid yellow',
            },
        };
        Object.assign(loginNav.style, loginNavObj.style);


        let loginTitleStylObj = {
            display: 'inline',
            position: 'absolute',
            padding: '5px',
        };

        let loginTitle = document.createElement('h3');
        loginTitle.textContent = 'login';
        Object.assign(loginTitle.style, loginTitleStylObj);
        loginNav.appendChild(loginTitle);

        let iconObj = {
            id: 'loginX',
            iconType: 'exit',
			size: '32',
            svgStyle: {
                cursor: 'default',
                display: 'inline',
                position: 'absolute',
                top: '10px',
                right: '10px',
            },
            style: {
                color: 'black',
            },
            hovStyle: {
                cursor: 'pointer',
            },
            parent: loginNav,
            exitEl: loginDiv,
        };
        this.createIcon(iconObj);
        loginDiv.appendChild(loginNav);

        let loginMain = document.createElement('div');
        loginMain.id = 'loginMain';

        let loginMainStyl = {
            border: '1px solid purple',
            width: '100%',
            height: '400px',
        };

        Object.assign(loginMain.style, loginMainStyl);

        let labelObj = {
            parent: loginMain,
            id: 'nameInp',
            textContent: 'Name (or email):',
            style: {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                textAlign: 'right',
                width: '600px',
                lineHeight: '26px',
                margin: '20px',
            },
            input: {
                style: {
                    height: '35px',
                    width: '350px',
                },
                id: 'nameInp',
            },

        };



        let submitObj = {
            parent: loginMain,
            textContent: 'login',
            id: 'loginSubmit',
            style: {
                width: '200px',
                height: '40px',
                margin: '20px 0 20px 160px',
            },
            hovStyl: {},
        };

        //name
        let nameInp = this.labelInp(labelObj);

        labelObj.id = 'pwdLabel';
        labelObj.textContent = 'Password:'
        labelObj.input.id = 'pwdInp';

        let pwdInp = this.labelInp(labelObj);

        const forget = document.createElement('p');
        const forgetSpan = document.createElement('span');
        forgetSpan.textContent='forgot password? ';
        const forgetRef = document.createElement('a');
        forgetRef.textContent= 'Click here!';
        forget.appendChild(forgetSpan);
        forget.appendChild(forgetRef);
        forget.style.marginLeft = '20px';
        loginMain.appendChild(forget);
        let submitBut = this.addButton(submitObj);

        loginDiv.appendChild(loginMain);
		this.loginDiv = loginDiv;

        function loginFun(e) {
            console.log('login submit');

        }
        return loginDiv;
    }


	addAzulHeader(headerObj) {

		let header = document.createElement('header');

		let azulHeaderObj = {
            style: {
                minHeight: '60px',
                margin: '10px',
                border: '1px solid lightgreen',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                flexWrap: 'nowrap',
            },
            id: 'header',
            className: 'pagSections',
		}

		Object.assign(header, azulHeaderObj);
		Object.assign(header.style,azulHeaderObj.style);
		this.header = header;

//	let iconWid = new svgIcon(48);

		let iconMenuObj = {
			iconType: 'menu',
			id: 'menu',
			parent: header,
			svgStyle: {},
//			svgStyle: {padding: '20px 0 0 20px',},
			hovStyle: {},
		};
		const menuIcon = this.createIcon(iconMenuObj);

    	let svgEl = logoSimple(this);
    	header.appendChild(svgEl);

		let iconDivObj = {
			id: 'iconDiv',
			typ: 'div',
		  	style: {display: 'inline',},
		};

		let iconDiv = this.addElement(iconDivObj);

		let iconRightObj = {
			iconType: 'login',
			id: 'loginIcon',
			parent: iconDiv,
//			svgStyle: {padding: '20px 20px 0 0',},
			hovStyle: {},
		};

		let loginIcon = this.createIcon(iconRightObj);

		iconRightObj.iconType = 'home';
		iconRightObj.id = 'homeIcon';
		let homeIcon = this.createIcon(iconRightObj);

		header.appendChild(iconDiv);

		const menuDiv = this.createMenu(headerObj.menuObj);
		const loginDiv = this.createLogin({});
		menuDiv.style.display='none';
		loginDiv.style.display='none';
		header.appendChild(menuDiv);
		header.appendChild(loginDiv);

		const parent = this.divMain;
		parent.appendChild(header);
		return header;
	} //addAzulHeader

	addAzulFooter(footerObj) {

		let footer = document.createElement('footer');

		let azulFooterObj = {
            style: {
                minHeight: '60px',
                margin: '10px',
                border: '1px solid lightgreen',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                flexWrap: 'nowrap',
            },
		}

		footer.id = 'footer';
		Object.assign(footer.style,azulFooterObj.style);
		this.footer = footer;

		const colNames = Object.keys(footerObj.cols);
		let colsObj = {
			typ: 'div',
			parent: footer,
			style: {border: '1px solid lightblue',minWidth: '200px',}
		};

		let colhdObj = {
			typ: 'h3',
			style: {color: 'blue',},
		};

		let itemObj = {
			typ: 'p',
			click: true,
			style: {cursor: 'default',color: 'black',},
			hovStyle: {cursor: 'pointer',color: 'red',},
		}

		for (let i=0; i< colNames.length; i++) {
			let col = this.addElement(colsObj);
			colhdObj.parent = col;
			colhdObj.textContent = colNames[i];
			this.addElement(colhdObj);
			let items =  Object.keys(footerObj.cols[colNames[i]]);
			let values = footerObj.cols[colNames[i]];
			for (let j=0; j<items.length; j++) {
				itemObj.parent = col;
				itemObj.textContent = items[j];
				itemObj.file = values[items[j]];
				let item = this.addElement(itemObj);
			}
//		console.log('menu items: ' + items);
		} // col loop

		this.divMain.appendChild(footer);
		return footer;
	} // addazul footer

//xxx
	addElement(elObj) {
//      console.log('elObj: ', + elObj);
		if (elObj.typ === undefined) {return}
        let el = document.createElement(elObj.typ);
        Object.assign(el,elObj);
		if (Object.hasOwn(elObj, 'style')) {Object.assign(el.style,elObj.style);}
		if (Object.hasOwn(elObj,'parent')) {
			if (typeof elObj.parent === 'object') {
				if (elObj.parent === null) {
					document.body.appendChild(el);
				} else {
					elObj.parent.appendChild(el);
				}
			}
			if (typeof elObj.parent === 'string') {
				const parentEl = document.getElementById(elObj.parent);
				if (parentEl !== undefined) {
					parentEl.appendChild(el);
				}
			}
		}

		if (Object.hasOwn(elObj, 'elNam')) {
			this[elObj.elNam] = el;
		}

		if (Object.hasOwn(elObj, 'file')) {
			el.addEventListener('mouseup', (event) => {this.getFile(event, elObj)});
		}

		if (Object.hasOwn(elObj, 'clickFun')) {
			if (elObj.clickFun != null) {
				el.addEventListener('mouseup', (event) => {moUp(event,el)});
//				console.log('el click');
			}
		}

		if (Object.hasOwn(elObj, 'hovStyle')) {
			el.baseStyle = {};
			let keys = Object.keys(el.hovStyle)
       	    for (let i=0; i<keys.length; i++) {
                let prop = keys[i];
                el.baseStyle[prop] = el.style[prop];
			}


			el.addEventListener('mouseenter', (event) => {moEnt(event, el);});
			el.addEventListener('mouseleave', (event) => {moLev(event, el);});
		}

		if (elObj.typ === 'input') {
//			console.log(elObj.id + ' input!')
			if (el.focusStyle != undefined) {
	        	el.blurStyle = {};
				el.oldPh = el.placeholder;
//				Object.assign(el.blurStyle, el.focusStyle);
				let keys = Object.keys(el.focusStyle)
        	    for (let i=0; i<keys.length; i++) {
                	let prop = keys[i];
                	el.blurStyle[prop] = el.style[prop];
				}
				el.addEventListener('focus', (event) => {focInp(event,el);});
				el.addEventListener('blur', (event) => {blurInp(event,el);});
			}
		}
        return el;

		function moEnt(ev, el) {
			ev.preventDefault();
			Object.assign(el.style,el.hovStyle);
			return;
		}

		function moLev(ev, el) {
			ev.preventDefault();
			Object.assign(el.style,el.baseStyle);
			return;
		}

    	function moUp(e, el) {
	        e.preventDefault();
//    	    console.log('el click');
			el.clickFun(el.textContent);
    	}
	} // add Element

	addMdEl(mdEl) {
//		console.log(mdEl)
		var self = this;
		if (mdEl.typ == "txt") {
			let txtEl = document.createTextNode(mdEl.txt);
			if (mdEl.hasOwnProperty('style')) {Object.assign(txtEl.style,mdEl.style);}
			if (mdEl.pare != null) {mdEl.pare.appendChild(txtEl);}
			return
		}
		let el = mdEl;
		el = document.createElement(mdEl.typ);
		if (mdEl.hasOwnProperty('style')) {Object.assign(el.style,mdEl.style);}
		switch (mdEl.typ) {
			case "a":
				el.href = mdEl.href;
				break;
			case "img":
				el.src = mdEl.src;
			default:
			break;
		}

		if (mdEl.pare != null) {mdEl.pare.appendChild(el);}

		for (let i = 0; i < mdEl.ch.length; i++) {
			let chEl = mdEl.ch[i];
			chEl.pare = el;
			self.addMdEl(chEl);
		}
	return el;
	}

	parseMd(mdobj) {

		let el = this.addMdEl(mdobj);

		this.section.appendChild(el);
	}

	getFile(event, el) {
//		console.log('file: ' + e.target.file);
		fetchDataAsync(el.file).then((respObj) => {
			this.renderJsonObj(respObj);
		});
	}

	dispFile(url) {
		fetchDataAsync(url).then((respObj) => {
			this.renderJsonObj(respObj);
		});
	}

	addGrid(gridObj) {
		let gridDiv = gridObj.gridDivObj;
		if (!(Object.hasOwn(gridObj, 'style'))) {gridObj.style = {};}
		gridObj.style.display = 'grid';
		let repStr = 'repeat(' + gridObj.cols + ', 1fr)'
		gridObj.style.gridTemplateColumns = repStr;

		repStr = 'repeat(' + gridObj.rows + ', 1fr)'
		gridObj.style.gridTemplateRows = repStr;

		let grid = this.addElement(gridObj);
		grid.cells = [];
		gridDiv.parent = grid;
		for (let irow = 0; irow< gridObj.rows; irow++) {
			grid.cells.push( [] );
			grid.cells[irow] = [];
        	for (let icol = 0; icol<gridObj.cols; icol++) {
        		gridDiv.style.gridRow = (irow +1);
        		gridDiv.style.gridColumn = (icol +1);
				if (Object.hasOwn(gridDiv,'gridDivFun')) {gridDiv.gridDivFun(irow, icol);}
//        		gridDiv.textContent = 'div ' + (irow +1) + ':' + (icol+1);
        		let gridEl = this.addElement(gridDiv);
				grid.cells[irow].push(gridEl);
        	}
    	}
		return grid;
	}

    addMeta(metaObj) {
        const headEl = document.head;
        let metaEl = document.createElement('meta');
        metaEl.setAttribute('charset','UTF-8');
        headEl.appendChild(metaEl);

        for (let i=0; i<metaObj.metaNames.length; i++) {
            let metaEl = document.createElement('meta');
            metaEl.name = metaObj.metaNames[i].name;
            metaEl.content = metaObj.metaNames[i].content;
            headEl.appendChild(metaEl);
        }

    }

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
    }

    addScript(url) {
        if (!(url.length>0)) {return}
        let scriptEl = document.createElement('script');
        scriptEl.type = 'text/javascript';
        scriptEl.async = true;
        scriptEl.src = url;
        document.head.appendChild(scriptEl);
		return scriptEl;
    }

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
    }

    addCssRule(cssRuleObj) {
		let styleSheet = this.styleSheet;
		for (let i=0; i<cssRuleObj.cssRules.length; i++) {
			let cssRule = cssRuleObj.cssRules[i]
    	    styleSheet.insertRule(cssRule);
		}
	}

	renderJsonObj(parElObj, rendObj) {
	// parElObj = {parent: this.docmain, id:'gdocMain', append:'false'}

		parEl = this.addElement(parElObj);
		const parent = this.docmain;
		const elNum = rendObj.elements.length;
		const doc = rendObj.doc;
		const cssRuleNum = rendObj.cssRules.length;
		while (parent.firstChild) {
    		parent.firstChild.remove();
		}

//		this.docName = doc.docNam;
		for (let i=0; i<cssRuleNum; i++) {
			let cssRuleObj = rendObj.cssRules[i].cssRule;
			this.styleSheet.insertRule(cssRuleObj);
		}

		for (let i=0; i<elNum; i++) {
			let elObj = rendObj.elements[i];
			this.renderEl(elObj, true);
		}

//		parent.appendChild(this.gdocMain);
		parent.appendChild(parEl);
		return parEl
	}


	renderEl(elObj) {
//      console.log('elObj: ', + elObj);
		if (elObj.typ === undefined) {return}
        let el = document.createElement(elObj.typ);
        Object.assign(el,elObj);
		if (Object.hasOwn(elObj, 'style')) {Object.assign(el.style,elObj.style);}

		if (elObj.parent !== undefined) {this[elObj.parent].appendChild(el);}
		this[elObj.elNam] = el;

		if (Object.hasOwn(elObj, 'click')) {
			el.addEventListener('mouseup', (event) => {this.getFile(event, el)});
		}

		if (Object.hasOwn(elObj, 'hovStyle')) {
			el.addEventListener('mouseenter', (event) => {Object.assign(el.style,elObj.hovStyle);});
			el.addEventListener('mouseleave', (event) => {Object.assign(el.style,elObj.style);});
		}
        return el;
	}


    addButton(butObj) {
        let butEl = document.createElement('button');
        Object.assign(butEl,butObj);
        Object.assign(butEl.style,butObj.style);

        butEl.state = null;


		if (Object.hasOwn(butObj, 'hovStyle')) {
        	butEl.oldStyle = {};
			let keys = Object.keys(butEl.hovStyle)
            for (let i=0; i<keys.length; i++) {
                let prop = keys[i];
                butEl.oldStyle[prop] = butEl.style[prop];
			}
    	    butEl.addEventListener('mouseover',(event)=>{butElHov(event, butEl);});
        	butEl.addEventListener('mouseleave',(event)=>{butElLeave(event, butEl);});
		}

        butEl.addEventListener('click',(event)=>{butElClick(event, butEl);});

        butObj.parent.appendChild(butEl);
        return butEl;

        function  butElHov(e, butEl) {
			let keys = Object.keys(butEl.hovStyle)
            for (let i=0; i<keys.length; i++) {
                let prop = keys[i];
                butEl.style[prop] = butEl.hovStyle[prop];
            }
            butEl.style.cursor = 'pointer';
        }

        function  butElLeave(e, butEl) {
//  console.log('butEl leaving');
			let keys = Object.keys(butEl.hovStyle)
            for (let i=0; i<keys.length; i++) {
                let prop = keys[i];
				if (butEl.state != null) {
	                if (e.target.state) {
    	                butEl.style[prop] = butEl.oldStyle[prop];
        	        } else {
            	        butEl.style[prop] = butEl.altStyle[prop];
                	}
				} else {
                   	butEl.style[prop] = butEl.oldStyle[prop];
				}
            }
            butEl.style.cursor = 'default';

        }

        function  butElClick(e, butEl) {
 			e.preventDefault();
			if (butEl.state !== null) {butEl.state = !butEl.state;}

			let cfval = butEl['butFunc'] !== undefined;
//		console.log('addButton: ' + cfval);

			if (Object.hasOwn(butEl,'hovStyle')) {
				let keys = Object.keys(butEl.hovStyle)
    	        for (let i=0; i<keys.length; i++) {
        	        let prop = butEl.hovStyle[i];
					if (butEl.state !== null) {
                		if (butEl.state) {
							butEl.style[prop] = butEl.oldStyle[prop];
                		} else {
                    		butEl.style[prop] = butEl.altStyl[prop];
                		}
					} else {
                    	butEl.style[prop] = butEl.oldStyle[prop];
					}
        	    }
			}
//  			const payload = new FormData(formA);
			if (cfval) {
				let res = butObj.butFunc('hello jim');
				console.log('button clicked: ' + res);
			}
    		console.log('click fun exit');
        } //butelclick

   } //button


	addMdTextInp(txtInpObj) {
		let labelObj = {
    	    typ: 'label',
        	style: {textAlign: 'start', display: 'block', visibility: 'hidden', fontSize: '12pt', color: 'blue'},
    	};

    	labelObj.parent = txtInpObj.parent;
    	labelObj.textContent =  txtInpObj.labName;
    	const lab = this.addElement(labelObj);

    	let inpStylMdObj = {
        	display: 'block',
        	margin: '0 0 1em 0',
        	fontSize: '16pt',
        	width: '300px',
        	height: '1em',
        	padding: '0.2em',
        	borderWidth: '0',
        	outline: 'none',
        	borderBottom: '1px solid black',
    	};

    	let inpStylFocMdObj = {
        	borderWidth: '0',
        	outline: 'none',
        	borderBottom: '2px solid blue',
    	};

        const inp = document.createElement('input');
		inp.type = 'text';
		inp.placeholder = txtInpObj.labName;
		inp.label = lab;

		if (Object.hasOwn(txtInpObj,'style')) {
			Object.assign(inp.style, txtInpObj.style);
			inp.style.borderWidth = 0;
			inp.style.outlineStyle = 'none';
			inp.style.borderBottom = '1px solid black';
		} else {
			Object.assign(inp.style, inpStylMdObj);
		}
		if (Object.hasOwn(txtInpObj,'focusStyle')) {
			Object.asign(inp.focusStyle, txtInpObj.focusStyle);
			inp.focusStyle.borderWidth = 0;
			inp.focusStyle.outlineStyle = 'none';
			inp.focusStyle.borderBottom = '2px solid blue';
		} else {
    		inp.focusStyle = inpStylFocMdObj;
		}
//    	const inp = this.addElement(txtInpObj);

		inp.blurStyle = {};
		inp.oldPh = inp.placeholder;

		let keys = Object.keys(inp.focusStyle)
       	for (let i=0; i<keys.length; i++) {
			let prop = keys[i];
			inp.blurStyle[prop] = inp.style[prop];
		}

		inp.Change = false;
		inp.addEventListener('focus', (event) => {inpMdFocInp(event, inp);});
		inp.addEventListener('blur', (event) => {inpMdBlurInp(event, inp);});

		inp.addEventListener('input', (event) => {inpMdFun(event, inp);});
		inp.addEventListener('keyup', (event) => {inpMdKeyUpFun(event, inp);});


		let filledInp = txtInpObj.input;

		txtInpObj.parent.appendChild(inp);
		return inp;

		function inpMdFocInp(ev, el) {
			ev.preventDefault();
			el.placeholder="";
			Object.assign(el.style,el.focusStyle);
			el.label.style.visibility = 'visible';
			inp.Change = false;
			return;
		}

		function inpMdBlurInp(ev, el) {
			ev.preventDefault();
			el.placeholder= el.oldPh;
			Object.assign(el.style,el.blurStyle);
			el.label.style.visibility = 'hidden';
			if (inp.change) {filledInp(el.value);inp.Change = false;}
			return;
		}

		function inpMdFun(ev, el) {
			el.inpChange = true;
		}

        function inpMdKeyUpFun(e, el) {
            e.preventDefault();
            if (e.key == 'Enter') {
				filledInp(el.value);
            }
			return;
        }

	} //addMdtxtInp

    addInput(inpObj) {
        let inpEl = document.createElement('input');
        Object.assign(inpEl,inpObj);
        Object.assign(inpEl.style,inpObj.style);
//        inpEl.addEventListener('input',(event) => {inpFun(event)});
        inpEl.addEventListener('click',(event) => {inpClickFun(event)});
        inpEl.addEventListener('input',(event) => {inpDoneFun(event, inpEl)});
        inpEl.addEventListener('keydown',(event) => {inpKeyDownFun(event)});
        inpEl.addEventListener('keyup',(event) => {inpKeyUpFun(event)});
        inpObj.parent.appendChild(inpEl);
        return inpEl;

        function inpDoneFun(e, el) {

		}

        function inpClickFun(e) {
            e.preventDefault();
//            console.log('input click: ' + e.target.value);
        }

        function inpKeyUpFun(e) {
            e.preventDefault();
//            console.log('key up: '+ e.key);
            if (e.key == 'Enter') {
//                console.log('key enter: ' + e.target.value);
            }
        }

        function inpKeyDownFun(e) {
            let key = e.key;
            let el = e.target;
            let ctrlkey = e.ctrlKey;
//      console.log('key down1: ' + key + ' control: ' + ctrlkey );

            switch (key) {
            case "ArrowLeft":
                if (ctrlkey) {
                }
                break;
            case "ArrowRight":
        // Right pressed
                if (ctrlkey) {
                }
                break;
            case "ArrowUp":
        // Up pressed
                if (ctrlkey) {
//                    console.log('cntl key up');
                }
//                console.log('key up');
                break;
            case "ArrowDown":
        // Down pressed
                if (ctrlkey) {
                }
                break;
            default:
                return;
            }

        } // keyfun
    } // input


	addSelect(inpSelObj) {
        let inpSelEl = document.createElement('select');
        Object.assign(inpSelEl,inpSelObj);
        Object.assign(inpSelEl.style,inpSelObj.style);
		let options = inpSelObj.selOptions;
		for (let i=0;i<options.length; i++) {
			let opt = document.createElement("option");
			opt.text = options[i];
			inpSelEl.add(opt);
		}

//        inpSelEl.addEventListener('input',(event) => {selFun(event)});
        inpSelEl.addEventListener('mouseup',(event) => {selMup(event)});
//        inpSelEl.addEventListener('keydown',(event) => {selKeyDown(event)});
//        inpSelEl.addEventListener('keyup',(event) => {selKeyUp(event)});
        inpSelObj.parent.appendChild(inpSelEl);

		return inpSelEl;

        function selMup(e) {
            e.preventDefault();
//            console.log('inpSel mouse up: ' + e.target.value);
        }

        function selKeyUp(e) {
            e.preventDefault();
//            console.log('inpSel key up: '+ e.key);
            if (e.key == 'Enter') {
//                console.log('key enter: ' + e.target.value);
            }
        }

        function selKeyDown(e) {
            let key = e.key;
            let el = e.target;
            let ctrlkey = e.ctrlKey;
 //     console.log('inpSel key down: ' + key + ' control: ' + ctrlkey );

            switch (key) {
            case "ArrowLeft":
                if (ctrlkey) {
                }
                break;
            case "ArrowRight":
        // Right pressed
                if (ctrlkey) {
                }
                break;
            case "ArrowUp":
        // Up pressed
                if (ctrlkey) {
//                    console.log('cntl key up');
                }
//                console.log('key up');
                break;
            case "ArrowDown":
        // Down pressed
                if (ctrlkey) {
                }
                break;
            default:
                return;
            }

        } // keyfun

	} // inpsel


	addMdSelect(inpSelObj) {
	// sample linpSelObj:

		let labelObj = {
    	    typ: 'label',
        	style: {textAlign: 'start', display: 'block', visibility: 'visible', fontSize: '12pt', color: 'black'},
    	};

    	labelObj.parent = inpSelObj.parent;
    	labelObj.textContent =  inpSelObj.labName;
    	const lab = this.addElement(labelObj);

        let inpStylMdObj = {
            display: 'block',
            margin: '0 0 1em 0',
            fontSize: '16pt',
            width: '300px',
            height: '1em',
            padding: '0.2em',
            borderWidth: '0',
            outline: 'none',
            borderBottom: '1px solid black',
        };

        let inpStylFocMdObj = {
            borderWidth: '0',
            outline: 'none',
            borderBottom: '2px solid blue',
        };

//        txtInpObj.parent = txtInpObj.parent;
        inpSelObj.label = lab;
        inpSelObj.placeholder = inpSelObj.labName;
        inpSelObj.typ = 'select';

        if (Object.hasOwn(inpSelObj,'style')) {
            inpSelObj.style.borderWidth = 0;
            inpSelObj.style.outlineStyle = 'none';
            inpSelObj.style.borderBottom = '1px solid black';
        } else {
            inpSelObj.style = inpStylMdObj;
        }
        if (Object.hasOwn(inpSelObj,'focusStyle')) {
            inpSelObj.focusStyle.borderWidth = 0;
            inpSelObj.focusStyle.outlineStyle = 'none';
            inpSelObj.focusStyle.borderBottom = '2px solid blue';
        } else {
            inpSelObj.focusStyle = inpStylFocMdObj;
        }

        let inpSelEl = document.createElement('select');
        Object.assign(inpSelEl,inpSelObj);
        Object.assign(inpSelEl.style,inpSelObj.style);
		let options = inpSelObj.selOptions;
		for (let i=0;i<options.length; i++) {
			let opt = document.createElement("option");
			opt.text = options[i];
			inpSelEl.add(opt);
		}

		inpSelEl.sel = false;
        inpSelEl.addEventListener('mouseup',(event) => {inpSelMup(event, inpSelEl)});
        inpSelEl.parent.addEventListener('mouseup',(event) => {inpParSelMup(event, inpSelEl)});
//        inpSelEl.addEventListener('input',(event) => {inpSelInpEv(event, inpSelEl)});
        inpSelObj.parent.appendChild(inpSelEl);

		return inpSelEl;

		function inpSelMup(event, el) {
			if (event.target == el.parent) {
				if (el.sel) {
					el.sel = false;
					el.style.borderBottom = '1px solid black';
					el.label.style.color = 'black'
				}
				return;
			}
		}

		function inpParSelMup(event, el) {
			event.stopPropagation();
			if (el.sel) {
				el.sel = false;
				el.style.borderBottom = '1px solid black';
				el.label.style.color = 'black'
			} else {
				el.label.style.color = 'blue'
				el.style.borderBottom = '3px solid blue';
				el.sel = true;
			}
		}

		function inpSelInpEv(event, el) {
		}
	}


	addMdAltSel(inpSelObj) {
		let labelObj = {
    	    typ: 'label',
        	style: {textAlign: 'start', display: 'block', visibility: 'hidden', fontSize: '12pt', color: 'blue'},
    	};

    	labelObj.parent = inpSelObj.parent;
    	labelObj.textContent =  inpSelObj.labName;
    	const lab = this.addElement(labelObj);

    	let inpStylMdObj = {
        	display: 'block',
        	margin: '0 0 1em 0',
        	fontSize: '16pt',
        	width: '300px',
        	height: '1em',
        	padding: '0.2em',
        	borderWidth: '0',
        	outline: 'none',
        	borderBottom: '1px solid black',
    	};

    	let inpStylFocMdObj = {
        	borderWidth: '0',
        	outline: 'none',
        	borderBottom: '2px solid blue',
    	};

        const inp = document.createElement('input');
		inp.type = 'text';
		inp.placeholder = inpSelObj.labName;
		inp.label = lab;
//
		inp.selOpt = inpSelObj.selOptions;

		if (Object.hasOwn(inpSelObj,'style')) {
			Object.assign(inp.style, inpSelObj.style);
			inp.style.borderWidth = 0;
			inp.style.outlineStyle = 'none';
			inp.style.borderBottom = '1px solid black';
		} else {
			Object.assign(inp.style, inpStylMdObj);
		}
		if (Object.hasOwn(inpSelObj,'focusStyle')) {
			Object.asign(inp.focusStyle, inpSelObj.focusStyle);
			inp.focusStyle.borderWidth = 0;
			inp.focusStyle.outlineStyle = 'none';
			inp.focusStyle.borderBottom = '2px solid blue';
		} else {
    		inp.focusStyle = inpStylFocMdObj;
		}
//    	const inp = this.addElement(inpSelObj);

		inp.blurStyle = {};
		inp.oldPh = inp.placeholder;

		let keys = Object.keys(inp.focusStyle)
       	for (let i=0; i<keys.length; i++) {
			let prop = keys[i];
			inp.blurStyle[prop] = inp.style[prop];
		}

		inp.Change = false;

		let filledInp = inpSelObj.input;

		inp.addEventListener('focus', (event) => {selAltFocInp(event, inp);});
//		inp.addEventListener('blur', (event) => {selAltBlurInp(event, inp);});

//		inp.addEventListener('input', (event) => {selAltInpFun(event, inp);});
//		inp.addEventListener('keyup', (event) => {selAltInpKeyUpFun(event, inp);});

		inpSelObj.parent.appendChild(inp);


		// select division
        let optDiv = document.createElement('div');
		inp.optDiv = optDiv;
		optDiv.style.display = 'none';
        let optDivHd = document.createElement('h3');
		optDivHd.addEventListener('mouseup', (ev) => {selAltOptHdMupFun(ev, inp);});
		const optDivHdStyl = {minHeight: '30px', backgroundColor: 'blue',color: 'white', width: inp.style.width, padding: '10px 5px',};
		Object.assign(optDivHd.style, optDivHdStyl);
		optDivHd.textContent = 'options:';
		optDiv.appendChild(optDivHd);
        let selDiv = document.createElement('div');
		Object.assign(selDiv.style, {border:'1px dotted red', minHeight: '40px', width:inp.style.width, padding: '10px 5px',});

		let opt = [];
		for (let i=0; i< inp.selOpt.length; i++) {
        	opt[i] = document.createElement('p');
			opt[i].textContent = inp.selOpt[i];
			Object.assign(opt[i].style, {margin: '5px 0', fontSize: '20pt',});
			opt[i].addEventListener('mouseenter', (ev)=>{opt[i].style.background = 'blue'; opt[i].style.color='white';});
			opt[i].addEventListener('mouseleave', (ev)=>{opt[i].style.background = 'white'; opt[i].style.color='black';});
			opt[i].addEventListener('mouseup', (ev)=>{selAltOptMupFun(ev,inp, opt[i]);});
			selDiv.appendChild(opt[i]);
		}

		optDiv.appendChild(selDiv);

		inpSelObj.parent.appendChild(optDiv);

		return inp;

		function selAltOptHdMupFun(ev, inp) {
			inp.optDiv.style.display = 'none';
			Object.assign(inp.style,inp.blurStyle);
			inp.label.style.visibility = 'hidden';
			inp.change=false;
		}

		function selAltOptMupFun(ev, inp, optEl) {

			if (inp.value != optEl.textContent) {
//				inp.change = true;
				inp.value = optEl.textContent;
				filledInp(inp.value);
				inp.change = false;
			}
			inp.optDiv.style.display = 'none';
			Object.assign(inp.style,inp.blurStyle);
			inp.label.style.visibility = 'hidden';
//			if (inp.change) {filledInp(inp.value);inp.change = false;}
		}

		function selAltFocInp(ev, el) {
			ev.preventDefault();
			el.placeholder="";
			Object.assign(el.style,el.focusStyle);
			el.label.style.visibility = 'visible';
			el.optDiv.style.display = 'block';
			inp.change = false;
			return;
		}

		function selAltBlurInp(ev, el) {
			ev.preventDefault();
			el.placeholder= el.oldPh;
			Object.assign(el.style,el.blurStyle);
			el.label.style.visibility = 'hidden';
 			el.optDiv.style.display = 'none';
//console.log('inpfun: ' + el.value);
			if (el.change) {filledInp(el.value);inp.Change = false;}
			return;
		}

		function selAltInpFun(ev, el) {
console.log('inpfun: ' + el.value);
 			el.optDiv.style.display = 'none';
			el.inpChange = true;
		}

        function selAltKeyUpFun(e, el) {
console.log('inpKeyUpfun: ' + el.value);
            e.preventDefault();
            if (e.key == 'Enter') {
				filledInp(el.value);
            }
			return;
        }

	} //addaltMdtxtInp

	addCheckBox(inpSelObj) {
        let inpSelEl = document.createElement('select');
        Object.assign(inpSelEl,inpSelObj);
        Object.assign(inpSelEl.style,inpSelObj.style);
		let options = inpSelObj.selOptions;
		for (let i=0;i<options.length; i++) {
			let opt = document.createElement("option");
			opt.text = options[i];
			inpSelEl.add(opt);
		}

//        inpSelEl.addEventListener('input',(event) => {inpFun(event)});
        inpSelEl.addEventListener('mouseup',(event) => {inpSelMup(event, inpSelEl)});
        inpSelObj.parent.appendChild(inpSelEl);

		return inpSelEl;


	}

	addFlexRow(flexRowObj) {
		let flexObjStyl = {
			display: 'flex',
			flexDirection: 'row',
			flexWrap: 'no-wrap',
			justifyContent: 'space-between',
		}

		flexObj.parent = flexRowObj.parent;
		flexObj.typ = 'div';
		Object.assign(flexObjStyl, flexRowObj.style)

		let divEl = this.addElement(flexObj);
		return divEl;
	}

	addFlexRow3Div(flexRowObj) {
		let flexObjStyl = {
			display: 'flex',
			flexDirection: 'row',
			flexWrap: 'no-wrap',
			justifyContent: 'space-between',
		}

//		flexObj.parent = flexRowObj.parent;
//		flexObj.parent = null;
		Object.assign(flexObjStyl, flexRowObj.style)
		flexObj.typ = 'div';
		flexObj.style = flexObjStyl;

		let divEl = this.addElement(flexObj);

        let divL = document.createElement('div');
        let divM = document.createElement('div');
        let divR = document.createElement('div');
		divEl.divL = divL;
		divEl.divM = divM;
		divEl.divR = divR;

		flexRowObj.parent.appendChild(divEl);
		return divEl;
	}


	createIcon(iconObj) {
    	let svgEl = document.createElementNS(this.svgNS, 'svg');
    	if (iconObj['size'] === undefined) {
        	svgEl.setAttribute('width', '48');
        	svgEl.setAttribute('height', '48');
    	} else {
        	svgEl.setAttribute('width', iconObj['size']);
        	svgEl.setAttribute('height', iconObj['size']);
    	}
    	svgEl.setAttribute('viewBox', '0 0 100 100');
    	svgEl.setAttribute('version', '1.1');

    	Object.assign(svgEl,iconObj);
    	Object.assign(svgEl.style,iconObj.svgStyle);

		svgEl.iconType = iconObj.iconType;

    	let pathEl = document.createElementNS(this.svgNS,'path');
    	pathEl.style.strokeWidth = '10px';
    	pathEl.style.strokeLineCap = 'round';
    	pathEl.style.strokeLineJoin = 'miter';
    	pathEl.style.stroke = '#000000';
    	pathEl.style.fill = 'none';
    	Object.assign(pathEl.style,iconObj.style);
    	switch (iconObj.iconType) {
        case 'login':
            pathEl.setAttribute('d', 'M 50,40 A 15,15 0 0 1 50,10 A 15,15 0 0 1 50,40 M 22,90 A 28,49 0 0 1 50,50 28,49 0 0 1 78,90 60,60 90 0 1 22,90');
			svgEl.addEventListener('click',(event)=>{svgLoginClick(event, this.login);});
            break;
        case 'menu':
            pathEl.setAttribute('d', 'M 5,20 h 90 M 5,50 h 90 M 5,80 h 90');
			svgEl.addEventListener('click',(event)=>{svgMenuClick(event, this.menu);});
            break;
        case 'home':
            pathEl.setAttribute('d', 'M 15,40 V 95 H 85 V 40 M 5,44 50,15 95,44');
            break;
        case 'exit':
            pathEl.setAttribute('d', 'm 5,5 90,90 m -90,0 90, -90');
			svgEl.addEventListener('click',(event)=>{svgXClick(event, svgEl.exitEl);});
            break;
		case 'right':
			pathEl.setAttribute('d', 'M 5,5 95,50 5,95 Z');
			svgEl.addEventListener('click',(event)=>{svgRightClick(event, svgEl);});
			break;
		case 'left':
			pathEl.setAttribute('d', 'M 95,5 5,50 95,95 Z');
			svgEl.addEventListener('click',(event)=>{svgLeftClick(event, svgEl);});
			break;
		case 'eye':
			pathEl.setAttribute('d', 'M 0,40 A 100,100 0 0 1 100,40 m 0, 20 A 100,100 0 0 1 0,60 M 38,50 A 12,12 0 0 1 62,50 A 12,12 0 0 1 38,50');
			break;
		case 'pencil':
   			pathEl.setAttribute('d','M 16.5,71.5 0,96 24,80 26,82 14,70 82,0 96,12 26,82 M 67,15 81,27 M 72,10 86,22 M 77,5 91,17');
			break;
		case 'bin':
			pathEl.setAttribute('d','M 20,18 30,96 h40 L80,18 M 50,90 50,25 M 40,90 35,25 M 60,90 65,25 M 15,15 h70 M 20,15 20,10 H80 L80,15 M 43,10 V5 H57 V10');
			break;
		case 'cal':
			pathEl.setAttribute('d','M 10,15 V85 A 5,5 0 0 0 15,90 H85 A 5,5 0 0 0 90,85 V15 H10 M 10,16 H90 M 10,17 H90 M 10,18 H90 M 10,19 H90 M 25,15 v-3 h5 v3 M 70,15 v-3 h5 v3 M 20,35 v-3 h3 v3 h-3');
        	break;
		case 'cart':
			pathEl.setAttribute('d','M 5,40 25,80 h50 L120,10 h5 M 25,90 A 5,5 0 1 0 30,85 A 5,5 0 0 0 25,90 M 65,90 A 5,5 0 1 0 70,85 A 5,5 0 0 0 65,90');
			break;
		default:
          throw 'unknown icon: ' + iconObj.icon;
    	}

		if (Object.hasOwn(iconObj, 'hovStyle')) {
    		pathEl.state = false;
			pathEl.baseStyle = {};
			let keys = Object.keys(iconObj.hovStyle);
			pathEl.hovStyle = iconObj.hovStyle;
			for (let i=0; i<keys.length; i++) {
				let prop = keys[i];
				pathEl.baseStyle[prop] = pathEl.style[prop];
			}
    		svgEl.addEventListener('mouseenter',(event)=>{svgElHov(event, pathEl);});
    		svgEl.addEventListener('mouseleave',(event)=>{svgElHovLeave(event, pathEl);});
    		pathEl.addEventListener('mouseenter',(event)=>{svgElHov(event, pathEl);});
    		pathEl.addEventListener('mouseleave',(event)=>{svgElHovLeave(event, pathEl);});
		}

	    svgEl.appendChild(pathEl);
    	iconObj.parent.appendChild(svgEl);

		return svgEl;

		function svgElHov(e, pathEl) {
        	if (pathEl.state) { return}
        	e.preventDefault();
        	e.target.style.cursor = 'pointer';
			let keys = Object.keys(pathEl.hovStyle)
        	for (let i=0; i<keys.length; i++) {
            	let prop = keys[i];
            	pathEl.style[prop] = pathEl.hovStyle[prop];
        	}
        	pathEl.state = true;
//        console.log('hover');
		}

		function svgElHovLeave(e, pathEl) {
        	if (!(pathEl.state)) { return}
        	e.preventDefault();
        	e.target.style.cursor = 'default';
			let keys = Object.keys(pathEl.hovStyle)
        	for (let i=0; i<keys.length; i++) {
            	let prop = keys[i];
            	pathEl.style[prop] = pathEl.baseStyle[prop];
        	}
        	pathEl.state = false;
//			console.log('leaving');
    	}

		function svgRightClick(e, el) {
        	e.preventDefault();
//        console.log('right click: ' + el.iconType);
			el.clickFun();
    	}

		function svgLeftClick(e, el) {
        	e.preventDefault();
//        console.log('left click: ' + el.iconType);
			el.clickFun();
    	}

		function svgElClick(e) {
        	e.preventDefault();
//        console.log('click: ' + e.target.iconType);
    	}

    	function svgMenuClick(e, menu) {
        	e.preventDefault();
//        console.log('menu click: ');
			menu.style.display = 'block';
    	}

		function svgLoginClick(e, login) {
        	e.preventDefault();
//        console.log('login click: ');
			login.style.display = 'block';
    	}

		function svgXClick(e, exitEl) {
        	e.preventDefault();
//        console.log('X click');
			exitEl.style.display = 'none';
    	}

  	} // menu

	createSvg(svgObj) {

    	let svgEl = document.createElementNS(this.svgNS, svgObj.typ);
//		svgEl.typ = svgObj.typ;
    	Object.assign(svgEl,svgObj);

		let keys = Object.keys(svgObj.att);
		for (let i=0; i< keys.length; i++){
			let key = keys[i];
			let val = svgObj.att[key];
			svgEl.setAttribute(key, val);
		}

		if (svgObj.hasOwnProperty('style')) {Object.assign(svgEl.style,svgObj.style);}

		if (svgObj.hasOwnProperty('parent')) {svgObj.parent.appendChild(svgEl);}
		this.svgEl = svgEl;

//		svgEl.addEventListener('mouseenter',(event)=>{svgElMoEnter(event);});
//		svgEl.addEventListener('mouseleave',(event)=>{svgElMoLeave(event, svgEl);});
		svgEl.addEventListener('mouseup',(event)=>{svgElMoUp(event);});

		return svgEl;

		function svgElMoUp(e) {
        	e.preventDefault();
//        	console.log('mouse up:' + e.button + ' from ' + e.target);
    	}
	}


/*
    function svgElMoEnter(e) {
        if (e.target.state) { return}
        e.preventDefault();
        e.target.style.cursor = 'pointer';
        for (let i=0; i<hovKeys.length; i++) {
            let prop = hovKeys[i];
            pathEl.style[prop] = iconObj.hovStyle[prop];
        }
        e.target.state = true;
//        console.log('hover');
    }

    function svgElMoLeave(e, el) {
        e.preventDefault();
        e.target.style.cursor = 'default';
        for (let i=0; i<hovKeys.length; i++) {
            let prop = hovKeys[i];
            pathEl.style[prop] = iconObj.style[prop];
        }
        el.state = false;
//        console.log('leaving');
    }
*/

	addTable(tblObj) {
		let tbl = document.createElement('table');
      	tbl.focusCol = 0;
      	tbl.focusRow = 0;

      	Object.assign(tbl,tblObj);
      	Object.assign(tbl.style,tblObj.style);
      	Object.assign(tbl.hovCellStyle,tblObj.hovCellStyle);
	  	this.tbl = tbl;
      	tbl.hovKeys = Object.keys(tbl.hovCellStyle);

	  	let head = tblObj.hasOwnProperty('head');

      	if (head) {
        	let theader = tbl.createTHead();
        	let hdRow = theader.insertRow();
        	let hdCell = hrow.insertCell();
      	}

      	let tbody = tbl.createTBody();
      	for (let row=0; row < tbl.nrows; row++) {
        	let trow = tbody.insertRow();
        	trow.id = tbl.id + 'Row' + row;
        	trow.classList.add((tbl.id + 'Row'), (tbl.id + 'Row' + row));
        	for (let col=0; col < tbl.ncols; col++) {
            	let newCell = trow.insertCell();
				Object.assign(newCell.style, tblObj.cellStyle);
            	newCell.id = tbl.id + 'R' + row + 'C' + col;
            	newCell.classList.add((tbl.id + 'Cell'), (tbl.id + 'CelCol' + col), (tbl.id + 'CelRow' + row));
            	newCell.textContent = 'R' + row + 'C' + col;
            	if (tbl.edit) {newCell.contentEditable = 'true'};
            	newCell.addEventListener('input',(event) => {inpFun(event)});
            	newCell.addEventListener('click',(event) => {clickFun(event)});
            	newCell.addEventListener('keydown',(event) => {keydFun(event)});
            	newCell.addEventListener('mouseenter',(event) => {cellHover(event)});
            	newCell.addEventListener('mouseleave',(event) => {cellLeave(event)});
        	}
      	} // row

      	tbl.addEventListener('blur',(event) => {this.focoutFun(event)});

	  	function keydFun(e) {
        	let key = e.key;
        	let cel = e.target;
        	let ctrlkey = e.ctrlKey;
        	let icol = cel.cellIndex;
        	let irow = cel.parentNode.rowIndex;
//      console.log('key down1: ' + key + ' control: ' + ctrlkey + ' row: ' + irow + ' col: ' + icol);
        	let tbl = this.el;

        	switch (key) {
        	case "ArrowLeft":
            	if (ctrlkey) {
                	if (icol>0) tbl.rows[irow].cells[icol-1].focus();
            	}
        		break;
        	case "ArrowRight":
        // Right pressed
            	if (ctrlkey) {
                	if (icol < this.cols) tbl.rows[irow].cells[icol+1].focus();
            	}
            	break;
        	case "ArrowUp":
        // Up pressed
            	if (ctrlkey) {
                	if (irow > 0) tbl.rows[irow-1].cells[icol].focus();
            	}
            	break;
        	case "ArrowDown":
        // Down pressed
            	if (ctrlkey) {
                	if (irow < this.rows) tbl.rows[irow+1].cells[icol].focus();
            	}
            	break;
        	default:
            	return;
        	}

//      console.log('key down2: ' + key + ' control: ' + ctrlkey );
    	} // keyfun

    	function inpFun(e) {

    	}

    	function clickFun(e) {
        	let cel = e.target;
        	let icol = cel.cellIndex;
        	let irow = cel.parentNode.rowIndex;
//        console.log('click' + cel + ' icol: ' + icol + ' irow: ' + irow );
        	cel.focus();
    	}

    	function focoutFun(e) {
        	let el = e.target;
//      console.log("table: ' + el)
//        let cel = e.target;
//        let icol = cel.cellIndex;
//        let irow = cel.parentNode.rowIndex;
//        tabobj.dtab[irow-1][icol-1].nval = cel.textContent;
//        console.log('blur: ' + cel.textContent + ' |icol: ' + icol + ' irow: ' + irow );
    	}

		function cellHover(e) {
			let cel = e.target;
//		console.log('hovering ' + cel.id);
			cel.style.cursor = 'pointer';
			let hovKeys = tbl.hovKeys;
        	for (let i=0; i<hovKeys.length; i++) {
                let prop = hovKeys[i];
//              console.log('keys: ' + prop + '\n');
                cel.style[prop] = tbl.hovCellStyle[prop];
        	}
			tbl.cell = cel;
    	}

		function cellLeave(e) {
			let cel = tbl.cell;
//		console.log('leaving cell ' + cel.id);
			if (cel==null) {return};
			let hovKeys = tbl.hovKeys;
        	for (let i=0; i<hovKeys.length; i++) {
                let prop = hovKeys[i];
//              console.log('keys: ' + prop + '\n');
                cel.style[prop] = tbl.cellStyle[prop];
        	}
			tbl.cell = null;
			cel.style.cursor = 'pointer';
		}

		function load(datObj) {

    	}
		return tbl;
  	} // add table


  	creSvgTab(tab) {

   		const svgNS = "http://www.w3.org/2000/svg";
    	let svgEl = document.createElementNS(svgNS, 'svg');
        svgEl.setAttribute('width', '160');
        svgEl.setAttribute('height', '50');

    	svgEl.setAttribute('viewBox', '0 0 160 50');
    	svgEl.setAttribute('version', '1.1');
		svgEl.style.margin = '0 0 -12px 0';
//    	Object.assign(svgEl.style,iconObj.svgStyle);

		let tabgrpEl = document.createElementNS(svgNS,'g');
//		tabgrpEl.style.margin = '0 0 -5px 0';

    	let tabPathEl = document.createElementNS(svgNS,'path');
//    	Object.assign(tabpathEl.style,svgObj.style);

	    tabPathEl.setAttribute('d', 'm0 50 30-50h100l30 50z');
    	tabPathEl.setAttribute('class', 'svgtab');
		tabPathEl.id = 'tab_' + tab;
    	tabPathEl.style.fill = '#ccc';
    	tabgrpEl.appendChild(tabPathEl);

    	let tabTextEl = document.createElementNS(svgNS,'text');

    	tabTextEl.setAttribute('class', 'svgtext');
    	tabTextEl.setAttribute('x', '50');
    	tabTextEl.setAttribute('y', '35');
    	tabTextEl.textContent = tab;
    	tabgrpEl.appendChild(tabTextEl);

		svgEl.addEventListener('mouseenter',(event)=>{this.tabMoEnter(event);});
		svgEl.addEventListener('mouseleave',(event)=>{this.tabMoLeave(event);});
    	svgEl.appendChild(tabgrpEl);
		svgEl.path = tabPathEl;
		svgEl.text = tabTextEl;

		return svgEl

		function tabMoEnter(e) {
//  console.log('mouse enter: ' + this.active);
			if (e.target!= this.tabEls[this.active]) {
				let tabPath = e.target.path;
				tabPath.style.fill = 'aqua';
            	tabPath.style.cursor = 'pointer';
            	e.target.text.style.cursor = 'pointer';
       		}
    		setTimeout(function() {},100);
  		}


  		function tabMoLeave(e) {
//  console.log('mouse leave: ' + e.target);
			if (e.target!= this.tabEls[this.active]) {
				let tabPath = e.target.path;
        		tabPath.style.fill = '#ccc';
        		tabPath.style.cursor = 'default';
        		e.target.text.style.cursor = 'default';
			}
		}
	} // createSvgTab

	addTabbedDivs(tabDivObj) {
		let tabGrp = document.createElement('div');
    	tabGrp.tabNum = tabDivObj.tabNames.length;
		tabGrp.tabNames = tabDivObj.tabNames;
		tabGrp.tabEls = [];
		tabGrp.divEls = [];
		tabGrp.active = 0;

		Object.assign(tabGrp, tabDivObj);
		Object.assign(tabGrp.style, tabDivObj.style);
    	let navEl = document.createElement('div');
    	navEl.id = 'tabnav';

		Object.assign(navEl.style, tabDivObj.nav.style);
    	tabGrp.appendChild(navEl);

		// create tabs
    	for (let i=0; i< tabGrp.tabNum; i++) {
//  console.log('tab[' + i + ']: ' + tabObj[i]);
			let tabText = tabGrp.tabNames[i];
        	let tabEl = this.creSvgTab(tabText);
//			tabEl.addEventListener
			tabGrp.tabEls.push(tabEl);
        	tabEl.addEventListener('click',(event)=>{tabClick(event, i);});
        	navEl.appendChild(tabEl);
    	}

	    for (let i=0; i< this.tabNum; i++) {
    	    let divEl = document.createElement('div');
			Object.assign(divEl.style, tabDivObj.div.style);

			let divStyl = tabDivObj['div'+i];
			if (typeof divStyl !== 'undefined') {Object.assign(divEl.style, divStyl.style);}

// eliminate
//			this.divEls.push(divEl);

			if (i==0) {
				divEl.style.display = 'block';
			} else {
				divEl.style.display = 'none';
			}
        	divEl.id = 'div_' + tabGrp.tabNames[i];
// change
        	divEl.setAttribute('class','content');

			tabgrp.divs.push(divEl);
			if (tabgrp.div.content) {
	        	let pEl= document.createElement('p');
    	    	pEl.textContent = 'Content: ' + tabGrp.tabNames[i];
        		divEl.appendChild(pEl);
			}
			tabGrp.appendChild(divEl);
    	}
		tabGrp.parent.appendChild(tabGrp);

		return tabGrp;

		function  tabClick(e, i) {
//      	console.log('tabclick[' + i + '] active: ' + this.active);

        	tabGrp.tabEls[i].path.style.fill = '#eee';
        	tabGrp.tabEls[tabGrp.active].path.style.fill = '#ccc';

        	tabGrp.divEls[tabGrp.active].style.display = 'none';
        	tabGrp.divEls[i].style.display = 'block';
        	tabGrp.active = i;
		}
	} //create

} //htmlPage
