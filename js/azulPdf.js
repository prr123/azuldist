// V1: some corrections to reduce the text blur
//
// V2: use code from example
// - includes transform
// use await in functions
//
//let pdfurl = '/pdf/helloworld.pdf'
let pdfurl = '/pdf/New_Horizons.pdf'

//var { pdfjsLib } = globalThis;
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.5.136/pdf.worker.min.mjs';

// Fetch the first page
const outputScale = window.devicePixelRatio || 1;
let context = canvas.getContext('2d');

let pageRendering = false;

const loadingTask = pdfjsLib.getDocument(pdfurl);
const pdf = await loadingTask.promise;

const numPages = pdf.numPages;
//console.log("pages: " + numPages);

/*
let pdfData = await pdf.getMetadata();

let keys = Object.keys(pdfData.info);
console.log("info keys: " + keys);

console.log("c date: " + pdfData.info['CreationDate']);
console.log("creator: " + pdfData.info['Creator']);
*/
pages.textContent = 'Pages: ' + numPages;
pgInp.value = '1';

let pageNumber = 1;

rbut.addEventListener('click', nxtpg);
lbut.addEventListener('click', prevpg);
zin.addEventListener('click', zinf);
zout.addEventListener('click', zoutf);
let scale = 1.0;


renderPage(pageNumber);

function nxtpg() {

	if (pageNumber < numPages) {
		pageNumber++;
		renderPage(pageNumber);
		pgInp.value = pageNumber;
	}
}

function prevpg() {

	if (pageNumber > 1) {
		pageNumber--;
		renderPage(pageNumber);
		pgInp.value = pageNumber;
	}
}

function zinf() {
	if (scale >= 1.0) {
		scale += 0.1;
		renderPage(pageNumber);
		zoom.textContent = 'Zoom: ' + scale.toFixed(1);
	}
}

function zoutf() {

	if (scale >= 1.1) {
		scale = scale - 0.1;
		renderPage(pageNumber);
		zoom.textContent = 'Zoom: ' + scale.toFixed(1);
	}
}

async function renderPage(num) {
	if(pageRendering) {
		console.log("rendering page!")
		return
	}
	pageRendering = true;


	const page = await pdf.getPage(num);

//let scale = 1.0;

//const vp = page.getViewport({ scale });
//console.log("vp w: " + vp.width + " h: " + vp.height);
//const dw = azul.docbody.offsetWidth;
//console.log('dw: ' + dw);

	const viewport = page.getViewport({ scale });

//console.log('device pix: ' + window.devicePixelRatio);

// Prepare canvas using PDF page dimensions

	canvas.width = Math.floor(viewport.width * outputScale);
	canvas.height = Math.floor(viewport.height * outputScale);
	canvas.style.width = Math.floor(viewport.width) + "px";
	canvas.style.height = Math.floor(viewport.height) + "px";

//console.log("viewport w: " + viewport.width + " h: " + viewport.height);

	const transform = outputScale !== 1
    ? [outputScale, 0, 0, outputScale, 0, 0]
    : null;

// Render PDF page into canvas context
	const renderContext = {
		canvasContext: context,
		transform,
		viewport,
	};

	const renderTask = await page.render(renderContext).promise;
    pageRendering = false;
}
