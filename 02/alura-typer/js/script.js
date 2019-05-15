$(document).ready(function(){
   
    // let texto = ["Achou errado, otário! Tem que acabar a justiça! Tá certa a indignação! Isso aí já é problema mental teu. Jesus é da Disney, rapá. Ambiente de música é ambiente de droga. Preconceito é coisa de cigano.", "Boa noite amantes da sétima arte! Boa noite amantes do cinema de todo o Brasil. A justiça é muito injusta! Eu transei uma vez. Harry Potter sem Harry Potter é golpe. É streaming que chama isso. Spin-off.", " Falo com tranquilidade. Cinema é explosão, carro e mulheril. Me vejo obrigado a concordar com o palestrinha. Muito diálogo. É tudo computador, essa porra." , "Show! Só magia top! Ele é meu guerreirinho. Ele é minha sopinha de abóbora. Cê foi inocente agora. Ninguém transa não, as pessoas falam que transam mas não transam, dá muito trabalho."];

    // for(i=0, i<texto.length; i++){
    //     $('.textoDigitado').html(texto);
    // }

    //split() --> separa as palavras em um array

    let qtdPalavras = $('.fraseCorreta').text().split(" ").length;
    console.log(qtdPalavras)
    $('.qtdPalavras').html(qtdPalavras);

    $('.campo-digitacao').on('input', function () {
        $('.textoDigitado').text($(this).val());
        
    });
});