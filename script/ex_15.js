window.onload = (function() {
var div = document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[1];

document.onclick = function() {
var letters = '0123456789ABCDEF';
var color = '#';
for (var i = 0; i < 6; i++ ) {
color += letters[Math.floor(Math.random() * 16)];
}
div.style.background = color;
};
});
