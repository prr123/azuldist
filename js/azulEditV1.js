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
        	id: 'editDiv',
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
		spanFObj: {
			typ: 'span',
		},
		spanEdObj: {
			typ: 'span',
			contentEditable: 'true',
			textContent: '',
		},

 	};

function spedelKeyUp(ev) {
        ev.preventDefault();
        let key = ev.key;
        let el = ev.target;
        let ctrlkey = ev.ctrlKey;
//	console.log('key up: ' + key);
        switch (key) {
//            case "ArrowLeft":

//            case "ArrowRight":
            case "ArrowUp":
                let nidx = el.idx - 1;
                if (nidx<0) {nidx = edSite.line.length -1;}
                edSite.line[nidx].focus();
                break;
            case 'ArrowDown':
                let nidx2 = el.idx + 1;
                if (nidx2>(edSite.line.length -1)) {nidx2 =0;}
                edSite.line[nidx2].focus();
                break;
           case 'Enter':
				let str = el.textContent;
//  	console.log('el val' + str.length + ': ' + str);
				el.textContent = str.slice(0, );
				let nidx3 = el.idx + 1;
                if (nidx3>(edSite.line.length -1)) {
                   el.blur();
                   break;
				}
                edSite.line[nidx3].focus();
                break;

            default:
                return;

        }
        return;
    }


    edSite.head = azul.addElement(edSite.hdObj);
    edSite.mdDiv = azul.addElement(edSite.mdObj);

	edSite.line = new Array();
	for (let i=0; i<10; i++) {
		let linel = azul.addElement(edSite.lineObj);
		let spfel = azul.addElement(edSite.spanFObj)
		spfel.textContent= i + '>';
		linel.appendChild(spfel);
		let spedel = azul.addElement(edSite.spanEdObj);
		spedel.idx = i;
		spedel.addEventListener('keyup', (event) => {spedelKeyUp(event);});
		spedel.textContent= '';
		linel.appendChild(spedel);
		edSite.line.push(spedel);
		edSite.mdDiv.appendChild(linel);
	}


	azul.docbody.appendChild(edSite.head);
	azul.docbody.appendChild(edSite.mdDiv);
