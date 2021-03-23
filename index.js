var removeFontFamily = function(div){
    const allElements = div.querySelectorAll("[style]");
    for (let i = 0; i < allElements.length; i++) {
        const element = allElements[i];
        element.attributeStyleMap.delete("font-family");
        if( element.getAttribute("style") === ""){
            element.removeAttribute("style");
        }
    }
}
var onRemoveFontFamily = function(event){
    const div = document.getElementById("div-html-box");
    removeFontFamily(div);
};

var onRemoveFontFamily2 = function(event){
    const div = document.getElementById("textbox-html-box");
    const text = div.textContent;
    const d = document.createElement("div");
    const ws = document.getElementById("workingspace");
    ws.appendChild(d);
    d.innerHTML = text;
    removeFontFamily(d);
    div.textContent = d.innerHTML;
    ws.removeChild(d)
};

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btn-remove-font-family").addEventListener("click", onRemoveFontFamily);
    document.getElementById("btn-remove-font-family2").addEventListener("click", onRemoveFontFamily2);
  });