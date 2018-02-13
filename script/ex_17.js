window.onload = function(){
    var bloc = document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[5]
    var water = document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[3]

    var top = getComputedStyle(bloc).top
    bloc.style.top = top
    var poid = water.textContent
    bloc.addEventListener('click', function (){
        poid = water.textContent
        poid++
        water.textContent = poid
    })
    var test = setInterval(function(){
        poid = water.textContent
        if(poid > 2){
            top = bloc.style.top
            top = top.replace('px',"")
            if (calcul(poid)<1150){
                bloc.style.top = calcul(poid)+'px'
            }
            else{
                bloc.style.top = 1150+'px'
                clearInterval(test)
            }
        }
        else if (poid == 2){
            top = bloc.style.top
            top = top.replace('px',"")
            top = parseFloat(top)+0.3
            if (top < 375){
                bloc.style.top = top+'px'
            }
        }
    },100)
}

function calcul(poid){
    var nin = 9.81 * parseFloat(poid)
    var result = (nin / 15.62) - 1
    var top = document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[5].style.top
    return 1*parseFloat(result) +parseFloat(top)
}
