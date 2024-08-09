function addScript(url) {
//    const script = document.createElement('script');
    fetch(url).then(function(response) {
        if (!response.ok) {
            return false;
        }
        return response.blob();
    }) .then(function(myBlob) {
        var objectURL = URL.createObjectURL(myBlob);
        var sc = document.createElement("script");
        sc.setAttribute("src", objectURL);
        sc.setAttribute("type", "text/javascript");
//        document.head.appendChild(sc);
    })
	return sc;
}
