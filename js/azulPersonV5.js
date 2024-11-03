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
	constructor (mdInp, idx) {
		this.mdInp = mdInp[idx];
		this.idx = idx;
	}

	creMdInp() {
		let elDiv = document.createElement('div');

		const elStyl = {
			margin: '10px',
			border: '1px dashed green',
			minHeight: '40px',
			width: this.mdInp.width,
			position: 'relative',
		};
		Object.assign(elDiv.style,elStyl);
		elDiv.id = 'inpDiv'+this.idx;

		let lab = document.createElement('label');
		lab.textContent = this.mdInp.label;
		lab.htmlFor = 'inp' + this.idx;
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
		inp.id = 'inp' + this.idx;
		inp.idx = this.idx;
		inp.label = lab;
		inp.placeholder = this.mdInp.label;

		Object.assign(inp.style,inpStyl);
		inp.style.borderBottom = baseStyle;

		inp.addEventListener('focus', (event) => {this.inpMdFocInp(event, inp, lab);});
		inp.addEventListener('blur', (event) => {this.inpMdBlurInp(event, inp, lab);});
		inp.addEventListener('keyup', (event) => {this.inpMdKeyUpInp(event, inp, lab);});

		elDiv.inp = inp;
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
        let el = ev.target;
        let ctrlkey = ev.ctrlKey;
         switch (key) {
//            case "ArrowLeft":

//            case "ArrowRight":
            case "ArrowUp":
				let nidx = el.idx - 1;
				if (nidx<0) {nidx = perSite.mdEl.length -1;}
				perSite.mdEl[nidx].inp.focus();
                break;
            case 'ArrowDown':
				let nidx2 = el.idx + 1;
				if (nidx2>(perSite.mdEl.length -1)) {nidx2 =0;}
				perSite.mdEl[nidx2].inp.focus();
                break;
            case 'Enter':
				let nidx3 = el.idx + 1;
				if (nidx3>(perSite.mdEl.length -1)) {
			        inp.blur();
					break;
				}
				perSite.mdEl[nidx3].inp.focus();
                break;

            default:
                return;

        }
        if (inp.value.length == 0) {inp.placeholder=this.mdInp.label;}
//        inp.blur();
        return;
    }
}

	let MdInpList = new Array();

	MdInpList.push({
		width: '250px',
		label: 'first',
	});

	MdInpList.push({
		width: '300px',
		label: 'last',
	});


	perSite.mdEl = new Array();
	for (let i=0; i< MdInpList.length; i++) {
		let entry = new InpEl(MdInpList,i);
		perSite.mdEl.push(entry.creMdInp());
	}

	perSite.mdDiv = azul.addElement(perSite.mdObj);

	perSite.mdDiv.appendChild(perSite.mdEl[0]);
	perSite.mdDiv.appendChild(perSite.mdEl[1]);


	azul.docbody.appendChild(perSite.mdDiv);

