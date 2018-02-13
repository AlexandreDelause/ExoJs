window.onload = (function(){
var canvas = document.childNodes[1].childNodes[2].childNodes[1].childNodes[1].childNodes[5].childNodes[1].childNodes[1];
var drop = document.childNodes[1].childNodes[2].childNodes[1].childNodes[1].childNodes[5].childNodes[1];
var div = document.childNodes[1].childNodes[2].childNodes[1].childNodes[1].childNodes[5].childNodes[3];
canvas.setAttribute('draggable', true);
canvas.addEventListener('dragstart', function(e){
e.dataTransfer.setData('canvas' ,document.childNodes[1].childNodes[2].childNodes[1].childNodes[1].childNodes[5].childNodes[1].childNodes[1]);
});
drop.addEventListener('dragover', function(e) {
e.preventDefault();
})
drop.addEventListener('drop', function(e) {
drop.appendChild(canvas);
var posx = e.layerX - 380; //offset pour recup la position pas relative, utiliser les layers sans les variable remplacer variable par les offset
var posy = e.layerY - 200;
if (e.layerY !== 0 && e.layerX !== 0) {
canvas.style.transform = "translate("+posx+"px, "+posy+"px)";
div.innerHTML = "Nouvelles coordonnées => {x:"+posx+", y:"+posy+"}";
}
});
})
