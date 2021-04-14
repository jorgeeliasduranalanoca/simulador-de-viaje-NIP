var URLPOST ="https://jsonplaceholder.typicode.com/posts"
var send = JSON.stringify(InfoSend)
            
var infopost = InfoSend;
   $(".send").click(()  => {
       $.post(URLPOST,infopost,(respuesta,estado) => {
           if(estado === "success"){
               alert("los datos del viaje fueron cargados con exito "+respuesta);
               
           }
       });

   });