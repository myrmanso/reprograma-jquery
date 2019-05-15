$(document).ready(function(){
    $('#animate').click(function(){
        //animate({primeiro parâmetro é o atributo q vc que mexer}, velocidade da animação)
        $('#content').animate({"width":"100px"}, "slow").animate({"width":"300px"}, "slow").animate({"width":"600px"}, "slow");
    });
});