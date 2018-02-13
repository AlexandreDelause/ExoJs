window.onload = function(){
    var exerciceContainer = document.getElementsByClassName('exercice')[0];
    var footer = exerciceContainer.childNodes[5];
    var footerContent = footer.childNodes[1];
    var nbrClics = 0;
    footer.addEventListener('click', function() {
      nbrClics++;
      footerContent.innerHTML = nbrClics;
    });
}
