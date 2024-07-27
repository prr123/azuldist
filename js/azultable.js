  window.onload = (event) => {
    const azul = new HtmlPage;
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
    }

    let metaObj = {
        metaNames: [
            {name: 'description', content: 'a blog'},
            {name: 'author', content: 'prr'},
            {name: 'date', content: '1/10/2022'},
            ],
    };

    let linkObj = {
        id: 'azulCss',
        type: 'text/css',
        href: 'azulLib.css',
    }

    azul.init(pageObj);

    azul.addMeta(metaObj);

    azul.addLink(linkObj);

    let stylObj = {};
    azul.addStyles(stylObj);

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
        textContent: 'header title',
        typ: 'h3',
    }
    azul.addElement(hdObj);

    let hd2Obj = {
        style: hdStyl,
        parent: azul.doc,
        id: 'docmain',
        className: 'doch3',
        textContent: 'docmain',
        typ: 'h3',
    }
    azul.addElement(hd2Obj);

    let hdfooterObj = {
        style: hdStyl,
        parent: azul.footer,
        id: 'footer',
        className: 'doch3',
        textContent: 'footer',
        typ: 'h3',
    }
    azul.addElement(hdfooterObj);

    let elObj = {
        style: {
                height: '100px',
                margin: '10px',
                border: '1px solid green',
        },
        parent: azul.doc,
        typ: 'div',
    };
    let ndiv = azul.addElement(elObj);

  let tblObj = {
	style: {
      height: '100px',
      width: '300px',
      borderSpacing: '0px',
      borderCollapse: 'collapse',
  		margin: 'auto',
	},

	rowStyle: {

	},
	cellStyle: {
      border: '1px solid black',
      padding: '2px',
	  backgroundColor: 'white',
	},
	hovCellStyle: {
		backgroundColor: 'pink',
	},
    nrows: 2,
    ncols: 3,
    header: false,
    id: 'tblA',
    className: 'tblClass',
    edit: 'true',
  }


  let testTable = new tableWidget();
  let tbl = testTable.init(tblObj);

  ndiv.appendChild(tbl);


    document.body.appendChild(azul.divMain);

}
/*
.tblACell:hover {
  background-color: pink;
  cursor: pointer;
}
*/
