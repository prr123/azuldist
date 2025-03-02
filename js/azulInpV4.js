//v2 classes
//v3 add select
//v4 add textarea

class azulInp {
	constructor(inpobj) {
		this.inpDiv = document.createElement('div');
		this.inpobj = inpobj;
    	const divStyl = {
        	id: 'inpDiv' + inpobj.idx,
        	margin: '10px',
        	border: '1px dashed green',
        	minHeight: '50px',
        	minWidth: inpobj.Length,
        	position: 'relative',
    	};
    	Object.assign(this.inpDiv.style,divStyl);

		let lab = document.createElement('label');
		lab.textContent = inpobj.Field;
		lab.htmlFor = 'inp' + inpobj.idx;
		const labStyl = {
			visibility: 'hidden',
			color: 'blue',
			textAlign: 'start',
			position: 'absolute',
			fontSize: '0.8em',
			left: '0px',
			bottom: '22px',
//		display: 'none',
		};
		Object.assign(lab.style,inpobj.labStyl);
		if ('labtext' in inpobj) {lab.textContent=inpobj.labtext;}

		const baseStyle = '1px solid black';
		const focusStyle = '2px solid blue';

		const inpStyl = {
			borderWidth: '0',
			outlineStyle: 'none',
			position: 'absolute',
			left: '0px',
			bottom: '0px',
			minWidth: inpobj.Length,
		};

		let inp = document.createElement('input');
		inp.type = 'text';
		if ('type' in inpobj) {inp.type = inpobj.type;}
		inp.id ='inp' + inpobj.idx;
		inp.label = lab;
		inp.placeholder = 'Enter ' + this.inpobj.Field;
		Object.assign(inp.style,inpStyl);
		inp.style.borderBottom = baseStyle;

		inp.addEventListener('focus', (event) => {this.inpMdFocInp(event, inp, lab);});
		inp.addEventListener('blur', (event) => {this.inpMdBlurInp(event, inp, lab);});
        inp.addEventListener('keyup', (event) => {this.inpMdKeyUpInp(event, inp, lab);});

		this.inpDiv.inp = inp

		this.inpDiv.appendChild(lab);
		this.inpDiv.appendChild(inp);
	}


	inpMdFocInp(ev, inp, lab) {
		ev.preventDefault();
		inp.placeholder="";
		inp.style.borderBottom = '2px solid blue';
//            Object.assign(el.style,el.focusStyle);
		lab.style.visibility = 'visible';
		inp.Change = false;
		return;
	}

	inpMdBlurInp(ev, inp, lab) {
		ev.preventDefault();
//	console.log("lost focus");
		inp.style.borderBottom = '1px solid black';
//		lab.style.visibility = 'hidden';
		if (inp.value.length == 0) {inp.placeholder='Enter ' + this.inpobj.Field;}
//	if (inp.change) {filledInp(el.value);inp.Change = false;}
		return;
	}


    inpMdKeyUpInp(ev, inp, lab) {
        ev.preventDefault();

        let key = ev.key;
        let el = ev.target;
        let ctrlkey = ev.ctrlKey;
//      console.log('key: ' + key);
         switch (key) {
//            case "ArrowLeft":
//            case "ArrowRight":
            case "ArrowUp":
//				console.log("arrow down");
				this.previnp.inpDiv.inp.focus();
                break;
            case 'ArrowDown':
//				console.log("arrow down");
				this.nextinp.inpDiv.inp.focus();
				break;
            case 'Enter':
//				console.log("enter");
				this.nextinp.inpDiv.inp.focus();
                break;
            default:

              return;

        }
//        if (inp.value.length == 0) {inp.placeholder=this.mdInp.label;}
//        inp.blur();
        return;
    }

	setnextprev(ninp, pinp) {
		this.nextinp = ninp;
		this.previnp = pinp;
		return;
	}


	getInpEl() {
		return this.inpDiv;
	}

	getInpValue() {
		return this.inpDiv.inp.value;
	}
}

class azulCheck {
	constructor(inpobj) {
		this.inpDiv = document.createElement('div');
		this.inpobj = inpobj;
    	const divStyl = {
        	id: 'inpDiv' + inpobj.idx,
        	margin: '10px',
        	border: '1px dashed green',
        	minHeight: '1 rem',
        	minWidth: inpobj.Length,
        	position: 'relative',
    	};
    	Object.assign(this.inpDiv.style,divStyl);


		let lab = document.createElement('label');
		lab.textContent = inpobj.Field;
		lab.htmlFor = 'inp' + inpobj.idx;
		const labStyl = {
//			visibility: 'hidden',
//			color: 'blue',
//			textAlign: 'start',
			position: 'absolute',
			fontSize: '1 rem',
			left: '20px',
			bottom: '0px',
//		display: 'none',
		};
		Object.assign(lab.style,labStyl);
		if (labStyl in inpobj) {Object.assign(lab.style,inpobj.labStyl);}
		if ('labtext' in inpobj) {lab.textContent=inpobj.labtext;}

		const baseStyle = '1px solid black';
		const focusStyle = '2px solid blue';

		const inpStyl = {
			borderWidth: '0',
			outlineStyle: 'none',
			position: 'absolute',
			left: '0px',
			bottom: '5px',
			fontSize: '1 rem',
//			height: '1.5 rem',
//			width: '1.5 rem',
//			minWidth: inpobj.Length,
		};

		let inp = document.createElement('input');
		inp.type = 'checkbox';
//		if ('type' in inpobj) {inp.type = inpobj.type;}
		inp.id ='inp' + inpobj.idx;
		inp.name = 'test';
		inp.label = lab;
//		inp.placeholder = 'Enter ' + this.inpobj.Field;
		Object.assign(inp.style,inpStyl);
//		inp.style.borderBottom = baseStyle;

		inp.addEventListener('focus', (event) => {this.inpMdFocInp(event, inp, lab);});
		inp.addEventListener('blur', (event) => {this.inpMdBlurInp(event, inp, lab);});
        inp.addEventListener('keyup', (event) => {this.inpMdKeyUpInp(event, inp, lab);});

		this.inpDiv.inp = inp

		this.inpDiv.appendChild(inp);
		this.inpDiv.appendChild(lab);
	}


	inpMdFocInp(ev, inp, lab) {
		ev.preventDefault();
//		inp.placeholder="";
		inp.style.borderBottom = '2px solid blue';
//            Object.assign(el.style,el.focusStyle);
//		lab.style.visibility = 'visible';
		inp.Change = false;
		return;
	}

	inpMdBlurInp(ev, inp, lab) {
		ev.preventDefault();
//	console.log("lost focus");
		inp.style.borderBottom = '1px solid black';
//		lab.style.visibility = 'hidden';
		if (inp.value.length == 0) {inp.placeholder='Enter ' + this.inpobj.Field;}
//	if (inp.change) {filledInp(el.value);inp.Change = false;}
		return;
	}


    inpMdKeyUpInp(ev, inp, lab) {
        ev.preventDefault();

        let key = ev.key;
        let el = ev.target;
        let ctrlkey = ev.ctrlKey;
//      console.log('key: ' + key);
         switch (key) {
//            case "ArrowLeft":
//            case "ArrowRight":
            case "ArrowUp":
//				console.log("arrow down");
				this.previnp.inpDiv.inp.focus();
                break;
            case 'ArrowDown':
//				console.log("arrow down");
				this.nextinp.inpDiv.inp.focus();
				break;
            case 'Enter':
//				console.log("enter");
				this.nextinp.inpDiv.inp.focus();
                break;
            default:

              return;

        }
//        if (inp.value.length == 0) {inp.placeholder=this.mdInp.label;}
//        inp.blur();
        return;
    }

	setnextprev(ninp, pinp) {
		this.nextinp = ninp;
		this.previnp = pinp;
		return;
	}


	getInpEl() {
		return this.inpDiv;
	}

	getInpValue() {
		return this.inpDiv.inp.value;
	}
}


class azulTxtInp { constructor(inpobj) {
		this.txtDiv = document.createElement('div');
		this.inpobj = inpobj;
    	const divStyl = {
        	id: 'inpDiv' + inpobj.idx,
        	margin: '10px',
        	border: '1px dashed green',
        	minHeight: '50px',
        	minWidth: inpobj.Length,
        	position: 'relative',
    	};
    	Object.assign(this.txtDiv.style, divStyl);

		const baseStyle = '1px solid black';
		const focusStyle = '2px solid blue';

		const inpStyl = {
			border: '1px sold black',
			padding: '5px',
			resize: 'none',
		};

		let par = document.createElement('p');
		par.textContent = this.inpobj.Field + ':';

		let inp = document.createElement('textarea');
		inp.id ='inp' + inpobj.idx;
		inp.placeholder = 'Enter ' + this.inpobj.Field;
		inp.cols = inpobj.cols;
		inp.rows = inpobj.rows;
		Object.assign(inp.style,inpStyl);
//		inp.style.borderBottom = baseStyle;

		inp.addEventListener('focus', (event) => {this.txtMdFocInp(event, inp);});
		inp.addEventListener('blur', (event) => {this.txtMdBlurInp(event, inp);});
//        inp.addEventListener('keyup', (event) => {this.inpMdKeyUpInp(event, inp, lab);});

		this.txtDiv.inp = inp

		this.txtDiv.appendChild(par);
		this.txtDiv.appendChild(inp);
	}


	txtMdFocInp(ev, inp) {
		ev.preventDefault();
//		inp.placeholder="";
//		inp.style.borderBottom = '2px solid blue';
//            Object.assign(el.style,el.focusStyle);
		inp.Change = false;
		return;
	}

	txtMdBlurInp(ev, inp) {
		ev.preventDefault();
//	console.log("lost focus");
//		inp.style.borderBottom = '1px solid black';
//		lab.style.visibility = 'hidden';
//		if (inp.value.length == 0) {inp.placeholder='Enter ' + this.inpobj.Field;}
//	if (inp.change) {filledInp(el.value);inp.Change = false;}
		return;
	}


    inpMdKeyUpInp(ev, inp, lab) {
        ev.preventDefault();

        let key = ev.key;
        let el = ev.target;
        let ctrlkey = ev.ctrlKey;
//      console.log('key: ' + key);
         switch (key) {
//            case "ArrowLeft":
//            case "ArrowRight":
            case "ArrowUp":
//				console.log("arrow down");
				this.previnp.inpDiv.inp.focus();
                break;
            case 'ArrowDown':
//				console.log("arrow down");
				this.nextinp.inpDiv.inp.focus();
				break;
            case 'Enter':
//				console.log("enter");
				this.nextinp.inpDiv.inp.focus();
                break;
            default:

              return;

        }
//        if (inp.value.length == 0) {inp.placeholder=this.mdInp.label;}
//        inp.blur();
        return;
    }

	setnextprev(ninp, pinp) {
		this.nextinp = ninp;
		this.previnp = pinp;
		return;
	}


	getInpEl() {
		return this.txtDiv;
	}

	getInpValue() {
		return this.txtDiv.inp.value;
	}
}

class azulSel {
	constructor(selobj) {
		this.selDiv = document.createElement('div');
		this.selobj = selobj;
    	const divStyl = {
        	id: 'selDiv' + selobj.idx,
        	margin: '10px',
        	border: '1px dashed green',
        	minHeight: '50px',
        	minWidth: selobj.Length,
        	position: 'relative',
    	};
    	Object.assign(this.selDiv.style,divStyl);

		let lab = document.createElement('label');
		lab.textContent = selobj.Field;
		lab.htmlFor = 'inp' + selobj.idx;
		const labStyl = {
			visibility: 'hidden',
			color: 'blue',
			textAlign: 'start',
			position: 'absolute',
			fontSize: '0.8em',
			left: '0px',
			bottom: '22px',
//		display: 'none',
		};
		Object.assign(lab.style,selobj.labStyl);
		if ('labtext' in selobj) {lab.textContent=selobj.labtext;}

		const baseStyle = '1px solid black';
		const focusStyle = '2px solid blue';

		const selStyl = {
			borderWidth: '0',
			outlineStyle: 'none',
			position: 'absolute',
			left: '0px',
			bottom: '0px',
			minWidth: selobj.Length,
		};

		let sel = document.createElement('select');
		selobj.List.forEach((element, key) => {
  			sel[key] = new Option(element, key);
		});
//		inp.type = 'text';
		sel.id ='inp' + selobj.idx;
		sel.label = lab;
//		inp.placeholder = 'Enter ' + this.inpobj.Field;
		Object.assign(sel.style,selStyl);
		sel.style.borderBottom = baseStyle;

		sel.addEventListener('focus', (event) => {this.selMdFocInp(event, sel, lab);});
		sel.addEventListener('blur', (event) => {this.selMdBlurInp(event, sel, lab);});
//        sel.addEventListener('keyup', (event) => {this.inpMdKeyUpInp(event, sel, lab);});

		this.selDiv.sel = sel

		this.selDiv.appendChild(lab);
		this.selDiv.appendChild(sel);
	}


	selMdFocInp(ev, sel, lab) {
		ev.preventDefault();
		sel.placeholder="";
		sel.style.borderBottom = '2px solid blue';
//            Object.assign(el.style,el.focusStyle);
		lab.style.visibility = 'visible';
		sel.Change = false;
		return;
	}

	selMdBlurInp(ev, sel, lab) {
		ev.preventDefault();
//	console.log("lost focus");
		sel.style.borderBottom = '1px solid black';
//		lab.style.visibility = 'hidden';
		if (sel.value.length == 0) {sel.placeholder='Enter ' + this.inpobj.Field;}
//	if (inp.change) {filledInp(el.value);inp.Change = false;}
		return;
	}


    selMdKeyUpInp(ev, sel, lab) {
        ev.preventDefault();

        let key = ev.key;
        let el = ev.target;
        let ctrlkey = ev.ctrlKey;
//      console.log('key: ' + key);
         switch (key) {
//            case "ArrowLeft":
//            case "ArrowRight":
            case "ArrowUp":
//				console.log("arrow down");
				this.previnp.selDiv.sel.focus();
                break;
            case 'ArrowDown':
//				console.log("arrow down");
				this.nextinp.selDiv.sel.focus();
				break;
            case 'Enter':
//				console.log("enter");
				this.nextinp.selDiv.focus();
                break;
            default:

              return;

        }
//        if (inp.value.length == 0) {inp.placeholder=this.mdInp.label;}
//        inp.blur();
        return;
    }

	setnextprev(ninp, pinp) {
		this.nextinp = ninp;
		this.previnp = pinp;
		return;
	}


	getInpEl() {
		return this.selDiv;
	}

	getInpValue() {
		let sel = this.selDiv.sel;
		let selopt = sel.options[sel.selectedIndex];
		return selopt.text;
	}
}

class azulInpGrid {
    constructor(gridinp) {
        this.rows = gridinp.rows;
        this.cols = gridinp.cols;
        this.name = gridinp.name;

        const gridDivObj = {
            style: {
                minHeight: '200px',
                margin: '10px',
                border: '1px dashed blue',
                position: 'relative',
            },
//          id: 'namesForm',
            typ: 'div',
        };

        let gridObj = {
            rows: this.rows,
            cols: this.cols,
            style: {
                display: 'grid',
                border: '1px dashed blue',
                margin: '10px',
            },
            elStyle: {
                display: 'flex',
                flexWrap: 'wrap',
                minHeight: '100px',
//          margin: '5px',
                outline: '1px dashed magenta',
//          border: '1px dashed green',
            }

        };

        this.inpgridDiv = azul.addElement(gridDivObj);
        this.inpgrid = azul.addGrid(gridObj);
        this.inpgridDiv.appendChild(this.inpgrid);
    }
}
