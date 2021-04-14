var URLPOST ="https://jsonplaceholder.typicode.com/posts"

            
var infopost = InfoSend;
   $(".send").click(()  => {
       $.post(URLPOST,infopost,(respuesta,estado) => {
           if(estado === "success"){
               alert("los datos del viaje fueron enviados con exito "+respuesta);
               
           }
       });

   });