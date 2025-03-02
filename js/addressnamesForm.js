
let namesObj = {

	render: function() {
		let namGridSec = new azulInpGrid({rows: 3, cols: 1, name: 'names'});
		let namgrid = namGridSec.inpgrid;

		this.inp1 = new azulInp({Field: 'First', Length: '150px', idx: 1});
		this.inp2 = new azulInp({Field: 'Middle', Length: '200px', idx: 2});
		this.inp3 = new azulInp({Field: 'Last', Length: '200px', idx: 3});

		let firstRow = namgrid.els[0][0];
		firstRow.appendChild(this.inp1.getInpEl());
		firstRow.appendChild(this.inp2.getInpEl());
		firstRow.appendChild(this.inp3.getInpEl());

		let secRow = namgrid.els[1][0];
		this.inp4 = new azulInp({Field: 'Email',Length: '250px', idx: 4});
		secRow.appendChild(this.inp4.getInpEl());


		let thirdRow = namgrid.els[2][0];
		this.inp5 = new azulInp({Field: 'Phone',Length: '250px', idx: 5});
		thirdRow.appendChild(this.inp5.getInpEl());

		this.inp1.setnextprev(this.inp2, this.inp5);
		this.inp2.setnextprev(this.inp3, this.inp1);
		this.inp3.setnextprev(this.inp4, this.inp2);
		this.inp4.setnextprev(this.inp5, this.inp3);
		this.inp5.setnextprev(this.inp1, this.inp4);

		return namGridSec.inpgridDiv;
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

let adrObj = {
	name: 'adrForm',
	render: function () {
		let adrGridSec = new azulInpGrid({rows: 4, cols: 1, name: 'adr'});
		let adrgrid = adrGridSec.inpgrid;



		this.inp1 = new azulInp({Field: 'Street', Length: '250px', idx: 1});
		this.inp2 = new azulInp({Field: 'Number', Length: '100px', idx: 2});
		this.inp3 = new azulInp({Field: 'Door', Length: '100px', idx: 3});

		let firstRow = adrgrid.els[0][0];
		firstRow.appendChild(this.inp1.getInpEl());
		firstRow.appendChild(this.inp2.getInpEl());
		firstRow.appendChild(this.inp3.getInpEl());

		let secRow = adrgrid.els[1][0];
		this.inp4 = new azulInp({Field: 'City',Length: '250px', idx: 4});
		this.inp5 = new azulInp({Field: 'Communidad',Length: '250px', idx: 5});
		secRow.appendChild(this.inp4.getInpEl());
		secRow.appendChild(this.inp5.getInpEl());


		let thirdRow = adrgrid.els[2][0];
		this.inp6 = new azulInp({Field: 'Zip',Length: '200px', idx: 6});
		thirdRow.appendChild(this.inp6.getInpEl());

		this.inp1.setnextprev(this.inp2, this.inp6);
		this.inp2.setnextprev(this.inp3, this.inp1);
		this.inp3.setnextprev(this.inp4, this.inp2);
		this.inp4.setnextprev(this.inp5, this.inp3);
		this.inp5.setnextprev(this.inp6, this.inp4);
		this.inp6.setnextprev(this.inp1, this.inp5);

		return adrGridSec.inpgridDiv;
	},

	getInpValues: function() {
		let inpVal = {
			Street: adrObj.inp1.getInpValue(),
			Number: adrObj.inp2.getInpValue(),
			Door: adrObj.inp3.getInpValue(),
			City: adrObj.inp4.getInpValue(),
			State: adrObj.inp5.getInpValue(),
			Zip: adrObj.inp6.getInpValue(),
		};
		const inpJsonStr = JSON.stringify(inpVal)
		console.log('adr inp: ' + inpJsonStr);
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
let adrSec = adrObj.render();
azul.docbody.appendChild(adrSec);

let submitSec = submitObj.render();
azul.docbody.appendChild(submitSec);

