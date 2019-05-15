$(document).ready(function () {
   $('a').click(function (event) {
      
    // console.log(this.hash); hash === #
    //Existe um hash? - chec
    if(this.hash !== ""){
        let hash = this.hash;
        console.log("TESTE")
        //scrollTop -->  scrolla do topo
        //offset()-->calcula a distância > .offset().de onde vc quer q ele calcule a distância até a o objeto desejado

        $('html, body').animate({scrollTop:$(hash).offset().top}, 800, function () {
            window.location.hash = hash;
            //coloca o caminho da hshtag no navegador

        })
    }
   });
});