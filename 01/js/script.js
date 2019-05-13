//JavaScript
/*
function escrever(){
    var lis = document.querySelectorAll('li');
    for(var i=0; i < lis.length; i++){
        lis[i].textContent = "Batata";
    }
}

escrever() === $('li').text('batata');
*/




/* chamando um seletro dentro de outro
$('.lista1 .botao') --> todo botão dentro dessa classe
$('.lista1 li.botao') --> identifica de qual tag a classe pertence
$('.lista1 > .botao') --> classe que descende de outra classe
$('.lista').find('botao') --> bom para coisas específicas
*/


// jQuery() ===  $() --> seletores

/*
método de inicialização do jQuery no começo da página
$(document).ready(function ({
    console.log('carregou');
}));
*/

//.text() --> retorna apenas o valor que está no seletor
//.text('outro texto') --> retorna outra string



function mudaLi(){
    $('li').text('Batata');
    if($('li').length > 0){
        console.log($('.lista1 .botao').text());
    }
}

function mudaBtn() {
    $('button').text('batata3');
    $('.lista1 li.botao').text('Teste');
    $('.lista2 .botao').text('Maravilha');
}


$(document).ready(function () {
    
    mudaLi();
    mudaBtn();
    alert("Muda! Porque quando você muda o mundo muda com você!")
    console.log("Ouve o que você tá falando");
    
});






