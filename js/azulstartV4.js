// v3 replace addButton with addElement
//
var azul = new HtmlPage;

window.onload = (event) => {

//    const azul = new HtmlPage;
    let pageObj = {
        mainDiv: {
            style: {
                width: 'calc(100% - 300px)',
                border: '1px solid blue',
                minHeight: '300px',
            },
            id: 'divMain',
        },
        header: {
            style: {
                height: '100px',
                margin: '10px',
                border: '1px solid DeepPink',
                position: 'relative',
            },
            id: 'header',
            className: 'pagSections',
        },
        section: {
            style: {
                minHeight: '500px',
                margin: '10px',
                border: '1px solid Tomato',
                position: 'relative',
            },
            id: 'docmain',
            className: 'pagSections',
        },
        footer: {
            style: {
                height: '100px',
                margin: '10px',
                border: '1px solid green',
                position: 'relative',
            },
            id: 'footer',
            className: 'pagSections',
        },
    };

    let metaObj = {
        metaNames: [
            {name: 'description', content: 'a blog'},
            {name: 'author', content: 'prr'},
            {name: 'date', content: '1/10/2022'},
            ],
    };

/*
    let linkObj = {
        id: 'azulCss',
        type: 'text/css',
        href: 'azulLib.css',
    }
*/
    azul.init(pageObj);

    azul.addMeta(metaObj);

//    azul.addLink(linkObj);

    azul.addStyleObj();

//    azul.addScript('azulLib.js');


    let hdStyl = {
        color: 'MediumPurple',
        margin: 'auto',
        textAlign: 'center',
        padding: '0.5em',
    };

    let hdObj = {
        style: hdStyl,
        parent: azul.header,
        id: 'header',
        className: 'doch3',
        textContent: 'testing websocket',
        typ: 'h3',
    };
    azul.addElement(hdObj);

    let hd2Obj = {
        style: hdStyl,
        parent: azul.docbody,
        id: 'docmain',
        className: 'doch3',
        textContent: 'docmain',
        typ: 'h3',
    };
    azul.addElement(hd2Obj);

    let hdfooterObj = {
        style: hdStyl,
        parent: azul.footer,
        id: 'footer',
        className: 'doch3',
        textContent: 'footer',
        typ: 'h3',
    };
    azul.addElement(hdfooterObj);

    let butObj = {
        style: {
			height: '30px',
			width: '100px',
			position: 'absolute',
			top: '50px',
			left: '50px',
			border: '1px solid green',
        },
        parent: azul.header,
        typ: 'button',
		textContent: 'press',
		cpar: 'tstpar',
		butFunc() {
			let count = 1;
			var webSocket = new WebSocket('ws://89.116.30.49:9003/hijack');
			webSocket.binaryType = "arraybuffer";

			webSocket.addEventListener("error", (event) => {
  				console.log("WebSocket error: ", event);
			});
			webSocket.addEventListener("open", (event) => {
				console.log('socket open');
  				webSocket.send("Hello Server!");
				console.log('sent message');
			});
			webSocket.addEventListener("message", (event) => {
				if (event.data instanceof ArrayBuffer) {
    			// binary frame
    				const view = new DataView(event.data);
    				console.log("binary msg: ", view.getInt32(0));
					const buffer = new ArrayBuffer(16);
					const outview = new DataView(buffer);
					outview.setInt32(1, view.getInt32(0)+3)
	  				webSocket.send(buffer);
  				} else {
					console.log("Message from server> ", event.data);
					if (event.data == 'end') {
						webSocket.close();
						return;
					}
	  				webSocket.send('Hello Server ' + count + '!');
					count++;
				};
			});
		},
    };



    let butNObj = {
//		but2() {console.log('button click');},
        style: {
			height: '30px',
			width: '100px',
			position: 'absolute',
			top: '50px',
			left: '50px',
			border: '1px solid green',
        },
        parent: azul.header,
        typ: 'button',
		textContent: 'press',
		elNam: 'but',
		evlist: {
			click: function but1() {console.log('button click');},
//			click: this.but2,
		},
	};

    azul.addElementAlt(butNObj);

    document.body.appendChild(azul.divMain);

//	console.log('button name: ' + azul.but);

	// add fetch
//	fetchTxtAsync("http://89.116.30.49:9005/js/azultest.js", ftst);

	// opt2 add script
/*
	const script = document.createElement('script');

	script.src = '/js/azultest.js';
	script.async = true;

	script.onload = () => {
  		console.log('Script loaded successfuly');
	};
	script.onerror = () => {
  		console.log('Error occurred while loading script');
	};
	document.head.appendChild(script);
*/

	// opt 3
	let url = '/js/azultest.js';
	LoadScript(url);

};


