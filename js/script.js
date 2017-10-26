(function(){
    var converter = new showdown.Converter(),
        res = document.querySelector(".resolt"),
        fileInput = document.querySelector("#fileInput");


    if(!window.FileReader) {
        var output = document.querySelector("#output"),
            info = document.createElement("span");

        info.classList.add("list-group-item", "list-group-item-danger");
        info.textContent = "Brak wsparcia dla Web Storage";
        output.appendChild(info);
        return;
    }

    fileInput.onchange = function() {
        var file = this.files[0],
            reader = new FileReader();
            reader.readAsText(file);

        reader.onload = function(e) {
            var html = converter.makeHtml(this.result);
            res.textContent = html;
        };
    };
})();