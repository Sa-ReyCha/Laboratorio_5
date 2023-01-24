

$("#agregar").click(function(e){
    e.preventDefault() //para que no se actualize la pagina
    let valor = $("#newText").val()
    $(".Lista").append(`<div class="lis"> <li> ${valor} </li> <br> <button class = "checar" name="checar"> CHECK </button>  <button class="del"> DELETE </button> </div>`)
    // --------------------------------- VARIABLE --brake----- BOTTON 1
})

$("div").on('click','.checar',function(e){  
    e.preventDefault() //para que no se actualize la pagina
    // alert('click')    
    $(this).parent().toggleClass("chec")  
})


$("div").on('click','.del',function(e){
    e.preventDefault() //para que no se actualize la pagina
    // alert('click')    
    $(this).parent().remove()  
})






