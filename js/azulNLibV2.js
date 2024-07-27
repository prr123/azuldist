// v2 add  select input to class htmlWidget
//

async function fetchDataAsync(url) {
    const response = await fetch(url);
    let respObj = await response.json();
//    console.log("resp: " + respObj);
	return respObj;
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
//          console.log('el click');
            el.clickFun(el.textContent);
        }
	} // add Element


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
//      console.log('addButton: ' + cfval);

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
//              const payload = new FormData(formA);
            if (cfval) {
                let res = butObj.butFunc();
            }
            console.log('click fun exit');
        } //butelclick


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

} //htmlPage
