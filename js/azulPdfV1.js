// V1: some corrections to reduce the text blur
//
let pdfurl = '/pdf/helloworld.pdf'

var { pdfjsLib } = globalThis;

pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.5.136/pdf.worker.min.mjs';

var loadingTask = pdfjsLib.getDocument(pdfurl);
loadingTask.promise.then(function(pdf) {
	console.log('PDF loaded');

    	// Fetch the first page
	let pageNumber = 1;
    pdf.getPage(pageNumber).then(function(page) {
		console.log('Page loaded');

//		let scale = 1.0;
        const pageWidthScale = azul.docbody.clientWidth / page.view[2];
        const pageHeightScale = azul.docbody.clientHeight / page.view[3];

      	// Prepare canvas using PDF page dimensions
//      var canvas = document.getElementById('the-canvas');
		let context = canvas.getContext('2d');

		console.log(window.devicePixelRatio);
		var scales = { 1: 3.2, 2: 4 },
		defaultScale = 4,
		scale = scales[window.devicePixelRatio] || defaultScale;

		var viewport = page.getViewport({ scale: scale });
		canvas.height = viewport.height;
		canvas.width = viewport.width;

		var displayWidth =  Math.min(pageWidthScale, pageHeightScale);;
		canvas.style.width = `${(viewport.width * displayWidth) / scale}px`;
		canvas.style.height = `${(viewport.height * displayWidth) / scale}px`;


      	// Render PDF page into canvas context
      	let renderContext = {
        	canvasContext: context,
        	viewport: viewport
      	};
      	let renderTask = page.render(renderContext);
      	renderTask.promise.then(function () {
        	console.log('Page rendered');
		});
	});
}, function (reason) {
    // PDF loading error
	console.error(reason);
});
