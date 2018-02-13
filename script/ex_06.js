document.addEventListener("DOMContentLoaded", function(){

    var exerciceContainer = document.getElementsByClassName('exercice')[0];
    var footer = exerciceContainer.childNodes[5];
    var footerContent = footer.childNodes[1];

    function Hero(nom, classe, intel, force){
    this.nom = nom.charAt(0).toUpperCase() + nom.substring(1).toLowerCase();
    this.classe = classe;
    this.intel = intel;
    this.force = force;
    this.toString = function(){
    var description = "Je suis " + this.nom + " le " + this.classe + ", j'ai " + this.intel + " points d'intelligence et " + this.force + " points de force !";
    footerContent.innerHTML += description + "<br/>";
    }
    }
    var mage = new Hero("amadeus", "mage", 10, 3);
    var guerrier = new Hero("pontius", "guerrier", 3, 10);
    mage.toString();
    guerrier.toString();
    });
