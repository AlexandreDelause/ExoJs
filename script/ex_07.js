window.onload = (function(){

  var canvas = document.childNodes[1].childNodes[2].childNodes[1].childNodes[1].childNodes[5].childNodes[1].childNodes[1];
  var boutonP = document.childNodes[1].childNodes[2].childNodes[1].childNodes[1].childNodes[5].childNodes[3].childNodes[1];
  var boutonS = document.childNodes[1].childNodes[2].childNodes[1].childNodes[1].childNodes[5].childNodes[3].childNodes[3];
  var boutonM = document.childNodes[1].childNodes[2].childNodes[1].childNodes[1].childNodes[5].childNodes[3].childNodes[5];

  if (canvas.getContext)
  {
    var triangle = canvas.getContext('2d');
    triangle.strokeStyle="#ffffff";
    triangle.beginPath();
    triangle.moveTo(6,6);
    triangle.lineTo(14,10);
    triangle.lineTo(6,14);
    triangle.lineTo(6, 6);
    triangle.stroke();
  }

  var audio = document.createElement('audio');
  audio.setAttribute("src","https://wac.epitech.eu/www/racingjs/pony_song.ogg");

  canvas.onclick = function(){
  audio.play();
  }

  boutonP.onclick = function() {
    audio.pause();
  }

  boutonS.onclick = function() {
    audio.pause();
    audio.currentTime = 0;
  }

  boutonM.onclick = function() {
    if(audio.muted == false)
    {
      audio.muted = true;
    }
    else
    {
      audio.muted = false;
    }
  }
//audio.setAttribute("src","http://sujet.webacademie.fr/racing_js/pony_song.ogg");
//canvas.onclick = function(){
//alert("toncul");
//audio.play();


});
