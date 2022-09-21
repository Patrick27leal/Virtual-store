var cont = 1;
var carrossel = setInterval(function(){

    $('.slide'+cont).css("z-index","0");
    cont++;
    if(cont == 4){
        cont = 1;
    }

    $('.slide'+cont).css("z-index","1");

},10000);




$(".btn-filter").click(function() {
    if($(".menu_options").css("display") == "none"){
        $(".menu_options").css("display", "grid");
    }else{
        $(".menu_options").css("display", "none");
    }
    
  });




  function mostrarPorcentagem(novoValor) {
    document.getElementById("exibePercent").innerHTML = novoValor;
}


$(".btn-filtrar").click(function(){
    console.log("clicou!!!!");
})

/* FUNCIONALIDADES  */


var btnSearch = document.querySelector('#btn-search');
btnSearch.addEventListener("click", function(){
    PalavraChave = document.querySelector("#camp-search").value;
    
    

});