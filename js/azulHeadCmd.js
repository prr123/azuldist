const headCmdDiv = {
	typ: 'div',
	style: {
            height: '50px',
            position: 'absolute',
            bottom: '10px',
            left: '50px',
			right: '100px',
            border: '1px solid blue',
	},
}
let cmdDiv=azul.addElement(headCmdDiv);


const cmdbutStyl = {
            height: '30px',
            width: '100px',
            position: 'absolute',
            bottom: '10px',
            left: '50px',
            border: '1px solid green',
        };

const cmdbut1Obj = {
        style: cmdbutStyl,
        parent: cmdDiv,
        typ: 'button',
        textContent: 'people',
        elNam: 'butPeople',
        evlist: {
            click: function but1() {console.log('but people click');},
        },
    };

azul.addElement(cmdbut1Obj);

let cmdbut2Obj = {
        style: cmdbutStyl,
        parent: cmdDiv,
        typ: 'button',
        textContent: 'invoices',
        elNam: 'butInvoice',
        evlist: {
            click: function but2() {console.log('but invoice click');},
        },
    };

cmdbut2Obj.style.left = '200px';
azul.addElement(cmdbut2Obj);

let cmdbut3Obj = {
        style: cmdbutStyl,
        parent: cmdDiv,
        typ: 'button',
        textContent: 'bills',
        elNam: 'butbill',
        evlist: {
            click: function but3() {console.log('but bill click');},
        },
    };
cmdbut3Obj.style.left = '350px';
azul.addElement(cmdbut3Obj);

let cmdbut4Obj = {
        style: cmdbutStyl,
        parent: cmdDiv,
        typ: 'button',
        textContent: 'ledger',
        elNam: 'butledger',
        evlist: {
            click: function but4() {console.log('but ledger click');},
        },
    };

cmdbut4Obj.style.left = '500px';

azul.addElement(cmdbut4Obj);

azul.header.appendChild(cmdDiv);
