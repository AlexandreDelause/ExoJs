window.onload = (function() { document.body.onkeypress = function(value) { 
  var exerciceContainer = document.getElementsByClassName('exercice')[0];
  var footer = exerciceContainer.childNodes[5];
  var footerContent = footer.childNodes[1];
    if (value.charCode !=0)
    {
      if (footerContent.innerHTML.length <= 41)
      {
      footerContent.innerHTML += value.key;
      }
      else
      {
        footerContent.innerHTML = footerContent.innerHTML.substr(1);
        footerContent.innerHTML += value.key;
      }
    }
  }
});
