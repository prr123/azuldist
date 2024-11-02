let perSite = {
		mdObj: {
    		style: {
        		margin: '10px',
        		border: '1px dashed blue',
        		position: 'relative',
				minHeight: '200px',
    		},
    	id: 'mdDiv',
    	typ: 'div',
//	parent: azul.docbody,
		},
		gridMdObj: {
    		rows: 3,
    		cols: 1,
    		style: {
        		display: 'grid',
        		border: '1px solid purple',
        		margin: '10px',
        		minHeight: '100px',
    		},
    	elStyle: {
        	border: '1px dashed green',
 		},
	},
};

class InpEl {
	constructor (mdInp) {
		this.mdInp = mdInp;
	}

	creMdInp() {
		let elDiv = document.createElement('div');

		const elStyl = {
			id: 'inpDiv',
			margin: '10px',
			border: '1px dashed green',
			minHeight: '40px',
			width: this.mdInp.width,
			position: 'relative',
		};
		Object.assign(elDiv.style,elStyl);

		let lab = document.createElement('label');
		lab.textContent = this.mdInp.label;
		lab.htmlFor = 'inptest';
		const labStyl = {
			visibility: 'hidden',
			color: 'blue',
			textAlign: 'start',
			position: 'absolute',
			fontSize: '0.8em',
			left: '0px',
			bottom: '22px',
		};
		Object.assign(lab.style,labStyl);

		let baseStyle = '1px solid black';
		let focusStyle = '2px solid blue';

		const inpStyl = {
			borderWidth: '0',
			outlineStyle: 'none',
			position: 'absolute',
			left: '0px',
			bottom: '0px',
			width: this.mdInp.width,
		};

		let inp = document.createElement('input');
		inp.type = 'text';
		inp.id ='inptest';
		inp.label = lab;
		inp.placeholder = this.mdInp.label;

		Object.assign(inp.style,inpStyl);
		inp.style.borderBottom = baseStyle;

		inp.addEventListener('focus', (event) => {this.inpMdFocInp(event, inp, lab);});
		inp.addEventListener('blur', (event) => {this.inpMdBlurInp(event, inp, lab);});
		inp.addEventListener('keyup', (event) => {this.inpMdKeyUpInp(event, inp, lab);});

		elDiv.appendChild(lab);
		elDiv.appendChild(inp);
		return elDiv;
	}

	inpMdFocInp(ev, inp, lab) {
		ev.preventDefault();
		inp.placeholder="";
		inp.style.borderBottom = '2px solid blue';
		lab.style.visibility = 'visible';
		inp.Change = false;
		return;
	}

	inpMdBlurInp(ev, inp, lab) {
		ev.preventDefault();
		inp.style.borderBottom = '1px solid black';
//		if (inp.value.length > 0)
		if (inp.value.length == 0) {
			inp.placeholder=this.mdInp.label;
			lab.style.visibility = 'hidden';
		}
		return;
	}

    inpMdKeyUpInp(ev, inp, lab) {
        ev.preventDefault();

        let key = ev.key;
//      console.log('key: ' + key);
        let el = ev.target;
        let ctrlkey = ev.ctrlKey;

         switch (key) {
            case "ArrowLeft":
            case "ArrowRight":
            case "ArrowUp":
                console.log('cntl key up');
                break;
            case 'ArrowDown':
                break;
            case 'Enter':
                break;

            default:
                return;

        }
        if (inp.value.length == 0) {inp.placeholder=this.mdInp.label;}
        inp.blur();
        return;
    }
}

	let MdInpObj1 = {
		width: '250px',
		label: 'first',
	};
	let MdInpObj2 = {
		width: '250px',
		label: 'last',
	};

	let entry1 = new InpEl(MdInpObj1);
	let entry2 = new InpEl(MdInpObj2);

	perSite.mdDiv = azul.addElement(perSite.mdObj);


	perSite.mdEl1 = entry1.creMdInp();
	perSite.mdDiv.appendChild(perSite.mdEl1);
	perSite.mdEl2 = entry2.creMdInp();
	perSite.mdDiv.appendChild(perSite.mdEl2);


	azul.docbody.appendChild(perSite.mdDiv);

