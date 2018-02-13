
document.addEventListener("DOMContentLoaded", function(){
    var exerciceContainer = document.getElementsByClassName('exercice')[0];
    var footer = exerciceContainer.childNodes[5];
    var footerContent = footer.childNodes[1];
    footerContent.innerHTML = "Hello World";
});
