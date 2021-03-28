


/*

class viaje {
    constructor(usuario, email,cantidad,destino, TipoBoleto,dias,hotelCateg,mascotas){
            this.usuario = usuario;
            this.cantidad = cantidad;  
            this.destino = destino;
            this.TipoBoleto = TipoBoleto;
            this.email = email;
            this.dias = dias;
            this.hotelCateg = hotelCateg;
            this.mascotas = mascotas;
            }
            comienzo = function(){
            console.log("el usuario "+this.usuario+" esta cargando sus datos");
        }
            iniciando = function(){
                
                console.log("boletos "+this.cantidad);
                console.log("destino " + this.destino);
                console.log("boleto tipo "+this.TipoBoleto);
                console.log("dias " +this.dias);
                console.log("categoria " +this.hotelCateg);
                console.log("mascotas " +this.mascotas);
            }


            BoloetoVendido = function(dest,tipo,cantidad,dias,hotel,mascotas)  {  
                console.log("el usuario "+ this.usuario+" cargo los datos");  

                this.destino = dest;
                this.TipoBoleto = tipo;
                this.cantidad= cantidad;
                this.dias = dias;
                this.hotelCateg = hotel;
                this.mascotas = mascotas;

            } 
        vuelo = function(){
                
                console.log("el susuario "+this.usuario +" correspondiente al E-mail "+this.email +" encargo") ;
                console.log(this.cantidad + " boletos")
                console.log("viaje a " + this.destino);
                console.log("boletos tipo "+this.TipoBoleto);
                console.log("por la estancia de " +this.dias +" dias");
                console.log("En hotel categoria de " +this.hotelCateg+" estrellas");
                console.log ("el usuario "+ this.usuario+" "+this.mascotas +" transporta mascotas")
            }
                
            cambio = function()
                {
                    console.log("el usuario "+ this.usuario+ " cancelo su vuelo debido a problemas de salud");
                }
          
            

        }

        /*var pasajero_1 = new viaje(prompt("Coloque su usuario"),prompt("coloque su e-mail "),0,"a definir", "-----",0,0,"---")
        
        pasajero_1.comienzo();
        pasajero_1.iniciando();
        pasajero_1.BoloetoVendido(

            prompt("destino"),
            prompt("tipo boleto VIP / TURISTA"),
            prompt("cantidad de boletos"),
            prompt("cantidad de dias de instatcia"),
            prompt("de 2 a 5 que categoria quiere"),
            prompt("lleva con usted mascotas? SI / NO ")
            
            );
        pasajero_1.vuelo();
        pasajero_1.cambio();*/
       
/*
class boletos{
            constructor(){
                    this.boletostotal = [] ;
                }
            
            adicionar = function(adicionar){
                    this.boletostotal.push(adicionar);
                }

                actualizacion = function(){
                    return this.boletostotal;
                }

            concatboletos = function(todos){
                this.boletostotal = this.boletostotal.concat(todos.actualizacion());
            }       
            


            }
        

            var adultos = new boletos();
                adultos.adicionar("padre");
                adultos.adicionar("madre");
                console.log(adultos);

            var menores = new boletos();
                menores.adicionar("hijo 17 años");
                menores.adicionar("hija 13 años");
                menores.adicionar("hijo 8 años");
                    console.log(menores);
            
            
            var mayores = new boletos();
                mayores.adicionar("señor 65 años");
                mayores.adicionar("señora 60 años")
                    console.log(mayores);
            
            var mascotas = new boletos();
                mascotas.adicionar("perro");
                mascotas.adicionar("gato");
                    console.log(mascotas)

            adultos.concatboletos(menores);
            adultos.concatboletos(mayores);
            adultos.concatboletos(mascotas);
                console.log(adultos);
*/

var ElUsuario = [];
var ArtuculosBoletos = [];
var CantidadBoletos = [];
var ArtEstadia = [];
var ArtCateg = [];
var Movilidad = [];

var InfoSend = {
            "Usuario": ElUsuario,
            "TipoDeBoleto": ArtuculosBoletos,
            "CantidadBoletos":CantidadBoletos,
            "TiempoEstadia":ArtEstadia,
            "TipoDeHotel":ArtCateg,
            "AlquilerDeVehiculo":Movilidad,

};
   

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
                
         
            
    function compra(event) 
                    {
            if (event.keyCode == 13) { // 13 es el código asociado a la tecla enter
             alert("presiono enter");
                                     }
                     }
                
                
                

                
                                  
                            
            





  //  elemento.innerHTML = ingresado;      document.body.appendChild(ingresado);












