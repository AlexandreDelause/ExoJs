window.onload = function(){
    var exerciceContainer = document.getElementsByClassName('exercice')[0];
    var footer = exerciceContainer.childNodes[5];
    var footerContent = footer.childNodes[1];
    footer.addEventListener('click', function()
    {
      var nom = "";
      while (nom == "")
      {
      nom = prompt("Quel est votre nom ?");
      }
      if (nom == null)
      {
        return;
      }
      var conf = confirm("Etes vous sûr que " + nom + " est votre nom ?");
      if (conf == true)
      {
        alert("Bonjour " + nom + "!")
        footerContent.innerHTML = "Bonjour " + nom + "!";
      }
    });
}
//
