let icons = {
	login: 'M 50,40 A 15,15 0 0 1 50,10 A 15,15 0 0 1 50,40 M 22,90 A 28,49 0 0 1 50,50 28,49 0 0 1 78,90 60,60 90 0 1 22,90',
	menu: 'M 5,20 h 90 M 5,50 h 90 M 5,80 h 90',
	home: 'M 15,40 V 95 H 85 V 40 M 5,44 50,15 95,44',
	exit: 'm 5,5 90,90 m -90,0 90, -90',
	right: 'M 5,5 95,50 5,95 Z',
	left: 'M 95,5 5,50 95,95 Z',
};

/*
iconobj
	Attr {name: vale}
	pelpath
	pelstyle
	size
*/


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
//	svgEl.setAttribute('version', '1.1');

	Object.assign(svgEl,iconObj);
	Object.assign(svgEl.style,iconObj.svgStyle);

	let pathEl = document.createElementNS(svgNS,'path');
	pathEl.style.strokeWidth = '10px';
	pathEl.style.strokeLineCap = 'round';
	pathEl.style.strokeLineJoin = 'miter';
	pathEl.style.stroke = '#000000';
	pathEl.style.fill = 'none';
	Object.assign(pathEl.style,iconObj.pstyle);
	pathEl.setAttribute('d', pathstr)

	svgEl.appendChild(pathEl);
	iconObj.parent.appendChild(svgEl);

	return svgEl;
};


/*
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
*/
