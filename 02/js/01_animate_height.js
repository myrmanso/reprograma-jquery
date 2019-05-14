$(document).ready(function(){
    $('#animate').click(function(){
        //animate({primeiro parâmetro é o atributo q vc que mexer}, velocidade da animação)
        $('#content').animate({"height":"100px"}, "slow");
    });
});