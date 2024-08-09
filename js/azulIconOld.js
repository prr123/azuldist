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
            pathEl.setAttribute('d', 'M 50,40 A 15,15 0 0 1 50,10 A 15,15 0 0 1 50,40 M 22,90 A 28,49 0 0 1 50,50 28,49 0 0 1 78,90 60,60 90 0 1 22,>            svgEl.addEventListener('click',(event)=>{svgLoginClick(event, this.login);});
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
            pathEl.setAttribute('d','M 20,18 30,96 h40 L80,18 M 50,90 50,25 M 40,90 35,25 M 60,90 65,25 M 15,15 h70 M 20,15 20,10 H80 L80,15 M 43,10>
            break;
        case 'cal':
            pathEl.setAttribute('d','M 10,15 V85 A 5,5 0 0 0 15,90 H85 A 5,5 0 0 0 90,85 V15 H10 M 10,16 H90 M 10,17 H90 M 10,18 H90 M 10,19 H90 M 2>
            break;
        case 'cart':
            pathEl.setAttribute('d','M 5,40 25,80 h50 L120,10 h5 M 25,90 A 5,5 0 1 0 30,85 A 5,5 0 0 0 25,90 M 65,90 A 5,5 0 1 0 70,85 A 5,5 0 0 0 6>
            break;
        default:
          throw 'unknown icon: ' + iconObj.icon;                                                                                                             }

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
	}


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
//          console.log('leaving');
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


function svgLeftClick(e, el) {
	e.preventDefault();
//        console.log('left click: ' + el.iconType);
	el.clickFun();
}

function svgElClick(e) {
	e.preventDefault();
//        console.log('click: ' + e.target.iconType);
}
