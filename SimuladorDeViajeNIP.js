




var ElUsuario = [];
var ArtuculosBoletos = [];
var CantidadBoletos = [];
var ArtEstadia = [];
var ArtCateg = [];
var Movilidad = [];


   


function agregar()
                    {


    var ingresado = document.getElementById("usuario").value;
        ElUsuario.push(ingresado);

    var boletoTipo = document.getElementById("Tipo_boleto").value;
        ArtuculosBoletos.push(boletoTipo);


    var cant_boleto = document.getElementById("cant_personas").value;
        CantidadBoletos.push(cant_boleto);

    var estadia =  document.getElementById("dias").value;
        ArtEstadia.push(estadia);

    var categoria = document.getElementById("hotel").value;
        ArtCateg.push(categoria);

    var auto = document.getElementById("movilidad").value;
        Movilidad.push(auto);
        
      /*  console.log("el usuario:" + ingresado +" boleto tipo:"+boletoTipo+
        " cantidad de boletos:"+ cant_boleto +" dias:"+ estadia+" hotel categoria:"+categoria+" movilidad: "+auto);*/
        
            var elemento = document.getElementById("incluido");
            var incluido = document.createElement("p");
                
                incluido.innerHTML = ("Usuario: "+ElUsuario +
                                      " Tipo de boletos: "+ArtuculosBoletos+
                                      " Boletos: "+CantidadBoletos+
                                      " Por la estadia de "+ArtEstadia+" dias"+
                                      " Hotel "+ArtCateg+" estrellas"+
                                      " Movilidad: "+Movilidad);
                
                  elemento.appendChild(incluido);
                 
            var obj = JSON.stringify(InfoSend)
            
                localStorage.datos = obj;
                
            var informacion = localStorage.datos;
                console.log(informacion);
                
                

               }
                
            $(".send").hover(function(){
                $(this).css("color","white");
                $(this).css("background-color","black");
                $(this).css("border","white");
            });
            

               
               


         $("#boton").click(function(){
            
         $(".usuario").hide(2000)
                      .show(2000,function(){
         $(".usuario").append(" " +ElUsuario[0])
                            })
                        });
         $("#boton").click(function(){
            $(".boleto").slideUp(2000);
            $(".boleto2").slideUp(2000);
            $(".Gente").slideUp(2000);
            $(".Gente2").slideUp(2000);
            $(".estadia").slideUp(2000);
            $(".estadia2").slideUp(2000);
            $(".hotel").slideUp(2000);
            $(".hotel2").slideUp(2000);
            $(".automovil").slideUp(2000);
            $(".automovil2").slideUp(2000);

         })

         $("#boton").hover(
             function(){
            $(this).css("color","white");
            $(this).css("background-color","black");
            $(this).css("border","white");
         },
            function(){
                $(this).css("color","black");
            $(this).css("background-color","white");
            $(this).css("border","black");
            }
         )

         $("#usuario").click(function(){

             $("div.login").append("<span>Escriba su usuario sin espacios, puntos ni comas. </span>")
         })

         


    function compra(event) 
                    {
            if (event.keyCode == 13) { // 13 es el c??digo asociado a la tecla enter
             alert("presiono enter");
                                     }
                     }
     
                                











