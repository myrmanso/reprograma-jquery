function cartaAleatoria(){ 
    $.get("http://localhost:3000/cartas", trocarCarta);
   /*(padrão que el vai retoras, status)*/
}


function trocarCarta(cartas, status){
    if(status == 'success'){
        console.log(cartas);

        let numeroAleatoirio = Math.floor(Math.random()*cartas.length);
        console.log([numeroAleatoirio]);
        $('.titulo').text(cartas[numeroAleatoirio].nome);
        $('.tipo').text(cartas[numeroAleatoirio].tipo);
        $('.descricao').text(cartas[numeroAleatoirio].descricao);
        $('.image').attr("src", cartas[numeroAleatoirio].imagem);
        $('.saiba-mais').attr("src", cartas[numeroAleatoirio].link);

    }else{
        $('.messagem').text("Não foi possível carregar carta");
    }
}

$(document).ready(function(){
    cartaAleatoria();
    $('#novaCarta').click(cartaAleatoria);
});