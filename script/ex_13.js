window.onload = (function(){
var div = document.childNodes[1].childNodes[2].childNodes[1].childNodes[1].childNodes[5].childNodes[1];
var value = localStorage.getItem("pangolin");
if (typeof localStorage != 'undefined')
  {
    var Nom = new Image();
    Nom.addEventListener('load',function(){

    })
    Nom.src = value;
    var imgg = div.appendChild(Nom);
    imgg.style.width = "42%";


var taille = imgg.style.width;
taille = taille.replace('%', "");
console.log(taille);
var e = '';
var f = '';

div.addEventListener('mouseover', function(){
    clearInterval(f);
    e = setInterval(function() {
      if(taille > 0) {
      taille--;
      }
      imgg.style.width = taille+"%";
    }, 1000);

    });

div.addEventListener('mouseout', function(){
      clearInterval(e);
     f = setInterval(function(){
       if(taille < 42) {
      taille++;
      }
      imgg.style.width = taille+"%";
      }, 1000);
      });

      imgg.onclick = function () {
        //div.parentNode.removeChild(div);
        localStorage.removeItem("pangolin");
        div.innerHTML="";
    };
  }
});


//550x386;
