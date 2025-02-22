onmessage = function (event) {
  console.log('Received message from main thread:', event.data);

  // Perform some heavy computation
  const result = event.data * 2;

  // Send the result back to the main thread
  postMessage(result);
};
