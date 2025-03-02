let namesObj = {
	name: 'nameForm',
	render: function () {
		const namesObj = {
			style: {
				minHeight: '200px',
				margin: '10px',
				border: '1px dashed blue',
				position: 'relative',
			},
			id: 'namesForm',
			typ: 'div',
		};

		const namesDiv = azul.addElement(namesObj);

		let gridObj = {
    		rows: 3,
    		cols: 1,
    		style: {
        		display: 'grid',
        		border: '1px dashed blue',
        		margin: '10px',
        		minHeight: '100px',
			},
			elStyle: {
				display: 'flex',
				flexWrap: 'wrap',
//        	margin: '5px',
 				outline: '1px dashed magenta',
// 			border: '1px dashed green',
			}
		};

		let namgrid = azul.addGrid(gridObj);
		namesDiv.appendChild(namgrid);

		this.inp1 = new azulCheck({Field: 'First', Length: '150px', idx: 1});
		this.inp2 = new azulCheck({Field: 'Middle', Length: '200px', idx: 2});
		this.inp3 = new azulCheck({Field: 'Last', Length: '200px', idx: 3},);

		let firstRow = namgrid.els[0][0];
		firstRow.appendChild(this.inp1.getInpEl());
		firstRow.appendChild(this.inp2.getInpEl());
		firstRow.appendChild(this.inp3.getInpEl());

		let secRow = namgrid.els[1][0];
		this.inp4 = new azulInp({Field: 'Email',Length: '250px', idx: 4, type:'email'});
		secRow.appendChild(this.inp4.getInpEl());


		let thirdRow = namgrid.els[2][0];
		this.inp5 = new azulInp({Field: 'Phone',Length: '250px', idx: 5, type: 'tel'});
		thirdRow.appendChild(this.inp5.getInpEl());

		this.inp1.setnextprev(this.inp2, this.inp5);
		this.inp2.setnextprev(this.inp3, this.inp1);
		this.inp3.setnextprev(this.inp4, this.inp2);
		this.inp4.setnextprev(this.inp5, this.inp3);
		this.inp5.setnextprev(this.inp1, this.inp4);

		return namesDiv;
	},

	getInpValues: function() {
		let inpVal = {
			First: namesObj.inp1.getInpValue(),
			Middle: namesObj.inp2.getInpValue(),
			Last: namesObj.inp3.getInpValue(),
			Email: namesObj.inp4.getInpValue(),
			Phone: namesObj.inp5.getInpValue(),
		};
		const inpJsonStr = JSON.stringify(inpVal)
		console.log('hello inp: ' + inpJsonStr);
		return inpJsonStr;
	},
}

let submitObj = {
	butDivObj: {
		style: {
			height: '50px',
			margin: '10px',
			border: '1px dashed blue',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
//			position: 'relative',
		},
		id: 'butDiv',
		typ: 'div',
	},
	butStyl: {
		height: '30px',
		width: '100px',
		border: '1px solid green',
	},

	butObj: {
        style: this.butStyl,
        typ: 'button',
        textContent: 'submit',
        evlist: {
            click: namesObj.getInpValues,
        },
	},
	render: function() {
		let butDiv = azul.addElement(this.butDivObj);
		const formBut = azul.addElement(this.butObj);
		butDiv.appendChild(formBut);
		return butDiv
	},
}

let nameHdObj = {

	hdNamesObj: {
    	style: {
        	color: 'Green',
        	margin: 'auto',
        	textAlign: 'center',
        	padding: '0.5rem',
        	fontSize: '2rem',
    	},
    	id: 'NameHd',
    	textContent: 'Name Form',
    	typ: 'h1',
	},
	render: function() {
		return azul.addElement(this.hdNamesObj);
	},
}

let headerSec = nameHdObj.render();
azul.docbody.appendChild(headerSec);

let namesSec = namesObj.render();
azul.docbody.appendChild(namesSec);

let submitSec = submitObj.render();
azul.docbody.appendChild(submitSec);

