function verificarRespuestas(){
    var total = 5;
    var puntos = 0;

    var myform = document.forms["quizform"];
    var respuestas = ["a","b","c","a","b"];

    for(var i = 1; i <= total;i++){
        if(myform ["p" + i].value === null || myform["p" + i].value === ''){
            alert("Por favor responde la pregunta "+ i);
            return false;
            }else{
                if(myform["p" + i].value === respuestas[i - 1]){
                    puntos++;
            }
        }
    }
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = '<h3>tienes <span>' + puntos +'</span> de <span>' + total +'</span> </h3>';
   
    return false;
}

