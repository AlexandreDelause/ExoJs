document.addEventListener("DOMContentLoaded", function(){

    var exerciceContainer = document.getElementsByClassName('exercice')[0];
    var footer = exerciceContainer.childNodes[5];
    var footerContent = footer.childNodes[1];
    var bouton1 = footerContent.childNodes[1];
    var bouton2 = footerContent.childNodes[3];
    var bouton3 = footerContent.childNodes[5];
    var fontsize = getComputedStyle(document.body).getPropertyValue("font-size").replace("px","");

      bouton1.onclick = function()
      {
        fontsize++;
        document.body.style.fontSize = fontsize + "px";
      }

      bouton2.onclick = function()
      {
        fontsize--;
        document.body.style.fontSize = fontsize + "px";
      }
      console.log(bouton3);
      bouton3.onchange = function()
      {
        document.body.style.background = bouton3.value;
      }
});
