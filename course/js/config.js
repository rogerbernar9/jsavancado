function setConfig()    {
    var texts = {
        "title":"App control"
    };
    document.title=texts.title;
    document.getElementById("navTitle").innerHTML = texts.title;
}

setConfig();