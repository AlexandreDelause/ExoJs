window.onload = function() {
    var input = document.getElementsByClassName('exercice')[0].children[2].children[0].children[0];
    var output = document.getElementsByClassName('exercice')[0].children[2].children[1];
    var txt = "";

    input.addEventListener("keyup", function() {
        txt = input.value;
        txt = txt.replace(/\[b\](.*)\[\/b\]/gi, "<b>$1</b>");
        txt = txt.replace(/\[u\](.*)\[\/u\]/gi, "<u>$1</u>");
        txt = txt.replace(/\[s\](.*)\[\/s\]/gi, "<s>$1</s>");
        txt = txt.replace(/\[color=(.*?)\](.*)\[\/color\]/gi, '<FONT color="$1">$2</FONT>');
        txt = txt.replace("http://", "");
        txt = txt.replace(/\[link=(.*?)\](.*)\[\/link\]/gi, '<a href="http://$1">$2</a>');
        output.innerHTML = txt;
    })
}
