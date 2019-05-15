$(document).ready(function () {
    $('#animate').click(function(){
        $('#content').animate({"width":"60%", "heigth":"30%"}, 1000, function () {
            $(this).html("acabou desgraça");
        })
    })
})