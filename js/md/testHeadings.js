let mdDivObj = {
	typ:'div',
	id: 'mdDiv',
	style: {
		margin: '10px',
		border: '1px dashed blue',
		position: 'relative',
		minHeight: '200px',
	},
};
let mdDiv = azul.addElement(mdDivObj);
let el2= document.createElement("h1");
let el3=document.createTextNode("markdown test file");
// dbg -- el: el3 parent:el2 kind:Heading
el2.appendChild(el3);
// dbg -- el: el2 parent:mdDiv kind:Document
mdDiv.appendChild(el2);
let el4=document.createElement("p");
let el5=document.createTextNode("This is a test file to check the markdown conversion process.");
// dbg -- el: el5 parent:el4 kind:Paragraph
el4.appendChild(el5);
// dbg -- el: el4 parent:mdDiv kind:Document
mdDiv.appendChild(el4);
let el6= document.createElement("h2");
let el7=document.createTextNode("Second heading");
// dbg -- el: el7 parent:el6 kind:Heading
el6.appendChild(el7);
// dbg -- el: el6 parent:mdDiv kind:Document
mdDiv.appendChild(el6);
let el8=document.createElement("p");
let el9=document.createTextNode("This paragrapgh is written under the second heading.");
// dbg -- el: el9 parent:el8 kind:Paragraph
el8.appendChild(el9);
// dbg -- el: el8 parent:mdDiv kind:Document
mdDiv.appendChild(el8);
let el10= document.createElement("h3");
let el11=document.createTextNode("Third Heading");
// dbg -- el: el11 parent:el10 kind:Heading
el10.appendChild(el11);
// dbg -- el: el10 parent:mdDiv kind:Document
mdDiv.appendChild(el10);
let el12=document.createElement("p");
let el13=document.createTextNode("This paragrapgh is written under the third heading.");
// dbg -- el: el13 parent:el12 kind:Paragraph
el12.appendChild(el13);
// dbg -- el: el12 parent:mdDiv kind:Document
mdDiv.appendChild(el12);
let el14= document.createElement("h4");
let el15=document.createTextNode("Fourth Heading");
// dbg -- el: el15 parent:el14 kind:Heading
el14.appendChild(el15);
// dbg -- el: el14 parent:mdDiv kind:Document
mdDiv.appendChild(el14);
let el16=document.createElement("p");
let el17=document.createTextNode("This paragrapgh is written under the fourth heading.");
// dbg -- el: el17 parent:el16 kind:Paragraph
el16.appendChild(el17);
// dbg -- el: el16 parent:mdDiv kind:Document
mdDiv.appendChild(el16);
let el18= document.createElement("h5");
let el19=document.createTextNode("Fifth Heading");
// dbg -- el: el19 parent:el18 kind:Heading
el18.appendChild(el19);
// dbg -- el: el18 parent:mdDiv kind:Document
mdDiv.appendChild(el18);
let el20=document.createElement("p");
let el21=document.createTextNode("This paragrapgh is written under the fifth heading.");
// dbg -- el: el21 parent:el20 kind:Paragraph
el20.appendChild(el21);
// dbg -- el: el20 parent:mdDiv kind:Document
mdDiv.appendChild(el20);
let el22= document.createElement("h6");
let el23=document.createTextNode("Sixth Heading");
// dbg -- el: el23 parent:el22 kind:Heading
el22.appendChild(el23);
// dbg -- el: el22 parent:mdDiv kind:Document
mdDiv.appendChild(el22);
let el24=document.createElement("p");
let el25=document.createTextNode("This paragrapgh is written under the sixth heading.");
// dbg -- el: el25 parent:el24 kind:Paragraph
el24.appendChild(el25);
// dbg -- el: el24 parent:mdDiv kind:Document
mdDiv.appendChild(el24);
