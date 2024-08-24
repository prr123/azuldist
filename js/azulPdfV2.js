// V1: some corrections to reduce the text blur
//
// V2: use code from example
// - includes transform
// use await in functions
//
let pdfurl = '/pdf/helloworld.pdf'

//var { pdfjsLib } = globalThis;

pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.5.136/pdf.worker.min.mjs';

const loadingTask = pdfjsLib.getDocument(pdfurl);
const pdf = await loadingTask.promise;

    	// Fetch the first page
let pageNumber = 1;
const page = await pdf.getPage(pageNumber);

let scale = 2.0;
//        const pageWidthScale = azul.docbody.clientWidth / page.view[2];
//        const pageHeightScale = azul.docbody.clientHeight / page.view[3];

const viewport = page.getViewport({ scale });

const outputScale = window.devicePixelRatio || 1;
console.log('device pix: ' + window.devicePixelRatio);

// Prepare canvas using PDF page dimensions
let context = canvas.getContext('2d');

canvas.width = Math.floor(viewport.width * outputScale);
canvas.height = Math.floor(viewport.height * outputScale);
canvas.style.width = Math.floor(viewport.width) + "px";
canvas.style.height = Math.floor(viewport.height) + "px";

const transform = outputScale !== 1
    ? [outputScale, 0, 0, outputScale, 0, 0]
    : null;

// Render PDF page into canvas context
const renderContext = {
	canvasContext: context,
	transform,
	viewport,
};

const renderTask = page.render(renderContext);
