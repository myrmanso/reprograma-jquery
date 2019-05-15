$(document).ready(function () {
    // alert("Ouve o que você tá falando");

    // $('li').hover(function mostrar() {
    //     //o this do .mmenu2 abra/apareça

    //     $(this).find('.menu2').show(this);
    // }, function esconder(){
    //     $(this).find('.menu2').hide(this);
    // });

    //Click
    $('li').click(function mostrar() {

        $(this).find('.menu2').slideToggle();//abre a classe menu2
        $(this).siblings().find('.menu2').slideUp();//fecha os irmãos 
    
    });
});