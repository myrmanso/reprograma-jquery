$(document).ready(function (){
  $('#btn-busca') .click(function (e){
      //previne que o form tente enviar algo e mude a url.
      e.preventDefault() 
      $('.area-gif').html("");

      let palavraBusca = $('#campo-busca').val();
      console.log(palavraBusca);
    //   alert(palavraBusca);
      $.ajax({
        url:`https://api.giphy.com/v1/gifs/search?api_key=wt7ehCLEtx2ebkKe7aS5gFG6eNg07FQL&q=${palavraBusca}&limit=25`,
        type: "GET",
        success: function (gifs) {

            console.log(gifs);

            let arrayGif = gifs.data;
            $(arrayGif).each(function(){

                console.log(this)
                const container = $('<div>').attr('class', 'gif');
                const gif = $('<img>').attr('src', this.images.fixed_width.url);

                container.append(gif);
                $('#exibe-busca').find('.area-gif').append(container);
            })
        },
        error: function (req) {
            const errorImage = $('<img>').attr('src', `https://http.cat/${req.status}`);
            $('.area-gif').append(errorImage);
        }

      });
    });
});