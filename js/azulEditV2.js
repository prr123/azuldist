let edSite = {
	hdObj: {
		style: {
                color: 'MediumPurple',
                margin: 'auto',
                textAlign: 'center',
                padding: '0.5em',
            },
		id: 'editHead',
		className: 'doch3',
		textContent: 'Test Editor',
		typ: 'h3',
	},
	mdObj: {
    	style: {
       		margin: '10px',
			border: '1px dashed blue',
        	position: 'relative',
			minHeight: '200px',
    	},
    	id: 'mdDiv',
    	typ: 'div',
	},
	lineObj: {
		style: {
			margin: '10px',
			border: '1px dashed green',
			position: 'relative',
			minHeight: '20px',
		},
		typ: 'div',
	},
};

class EdInpEl {
	constructor (idx) {
		this.idx = idx;
	}

	creEdInp() {
		let lineDiv = document.createElement('div');

//		const elStyl = {
//			margin: '10px',
//			border: '1px dashed green',
//			minHeight: '40px',
//			width: this.mdInp.width,
//			position: 'relative',
//		};
		Object.assign(lineDiv.style,edSite.lineObj.style);
		lineDiv.id = 'lineDiv'+this.idx;

		let lab = document.createElement('label');
		lab.textContent = this.idx + '>';
		lab.htmlFor = 'LinInp' + this.idx;
		const labStyl = {
			color: 'blue',
			textAlign: 'start',
			width: '30px',
		};
		Object.assign(lab.style,labStyl);

		let baseStyle = '1px solid black';
		let focusStyle = '2px solid blue';

		const inpStyl = {
			borderWidth: '0',
			outlineStyle: 'none',
			width: 'calc(100% - 30px)',
		};

		let inp = document.createElement('input');
		inp.type = 'text';
		inp.id = 'LinInp' + this.idx;
		inp.idx = this.idx;
		inp.label = lab;

		Object.assign(inp.style,inpStyl);
		inp.style.borderBottom = baseStyle;

		inp.addEventListener('focus', (event) => {this.inpEdFocInp(event, inp);});
		inp.addEventListener('blur', (event) => {this.inpEdBlurInp(event, inp);});
		inp.addEventListener('keyup', (event) => {this.inpEdKeyUpInp(event, inp);});

		lineDiv.inp = inp;
		lineDiv.appendChild(lab);
		lineDiv.appendChild(inp);
		return lineDiv;
	}

	inpEdFocInp(ev, inp) {
		ev.preventDefault();
//		inp.placeholder="";
		inp.style.borderBottom = '2px solid blue';
		inp.Change = false;
		return;
	}

	inpEdBlurInp(ev, inp) {
		ev.preventDefault();
//	console.log('blur!')
		inp.style.borderBottom = '1px solid black';
//		if (inp.value.length > 0)
		return;
	}

    inpEdKeyUpInp(ev, inp) {
        ev.preventDefault();
//	console.log('key up!')
        let key = ev.key;
        let el = ev.target;
        let ctrlkey = ev.ctrlKey;
         switch (key) {
//            case "ArrowLeft":

//            case "ArrowRight":
            case "ArrowUp":
				let nidx = el.idx - 1;
				if (nidx<0) {nidx = edSite.line.length -1;}
				edSite.line[nidx].inp.focus();
                break;
            case 'ArrowDown':
				let nidx2 = el.idx + 1;
				if (nidx2>(edSite.line.length -1)) {nidx2 =0;}
				edSite.line[nidx2].inp.focus();
                break;
            case 'Enter':
				let nidx3 = el.idx + 1;
				if (nidx3>(edSite.line.length -1)) {
			        inp.blur();
					break;
				}
				edSite.line[nidx3].inp.focus();
                break;

            default:
                return;

        }
//        if (inp.value.length == 0) {inp.placeholder=this.mdInp.label;}
//        inp.blur();
        return;
    }
}

    edSite.head = azul.addElement(edSite.hdObj);
    edSite.mdDiv = azul.addElement(edSite.mdObj);

    edSite.line = new Array();
    for (let i=0; i<10; i++) {
        let entry = new EdInpEl(i);
       	edSite.line.push(entry.creEdInp());
        edSite.mdDiv.appendChild(edSite.line[i]);
    }


    azul.docbody.appendChild(edSite.head);
    azul.docbody.appendChild(edSite.mdDiv);
