"option strict"
let indice = 1;

$(document).ready(function(){
$('#btnIndietro,#btnAvanti').css({
    width:"100%",
    height:"100px",
    backgroundColor:"#ccc",
    textAlign :"center",
    borderRadius:"25px",
    fontWeight:"bold"    

    });
$("#img").prop("src","img1.jpg")//prop mi fa impostare gli attributi html che voglio
    .css({
        width: "100%"
    });

    $("#btnIndietro").prop("disabled",true);
    $("#btnAvanti").click(function(){
        indice++;
         $("#btnIndietro").prop("disabled",false);
         $("#img").fadeOut(200, function(){
            $("#img").prop("src","img" + indice +".jpg").fadeIn(100);
         });
          if(indice > 8){
             indice = 1;
          $("#img").prop("src","img" + indice +".jpg").fadeIn(100);
        }
    });


    $("#btnIndietro").prop("disabled",false);
    $("#btnIndietro").click(function(){
        indice--;
         $("#img").fadeOut(200, function(){
            $("#img").prop("src","img" + indice +".jpg").fadeIn(100);
         });
         if(indice < 1){
        indice = 8;
          $("#img").prop("src","img" + indice +".jpg").fadeIn(100);
    }
    });

   
    
});