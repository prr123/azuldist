const myWorker = new Worker('/js/worker.js');

myWorker.postMessage(5);

myWorker.onmessage = function (event) {
  console.log('Received message from worker:', event.data);
};
