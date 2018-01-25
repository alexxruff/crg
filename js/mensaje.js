
( function(){

	// document.getElementById("myTextarea").value;

	document.getElementById('enviar').addEventListener('click', mensajes)

	function mensajes(e){
		var http = new XMLHttpRequest();
		var url = "https://sendmessage-lb.herokuapp.com/api/sendMessages/send";
		// http.setRequestHeader("Content-Type", "application/json");

		var nombre = document.getElementById('nombre').value;
		var email = document.getElementById('email').value;
		var telefono = document.getElementById('telefono').value;
		var mensaje = document.getElementById('mensaje').value;


		http.onreadystatechange = function() {
		    if(http.readyState == 4 && http.status == 200) { 
		       //aqui obtienes la respuesta de tu peticion
		       alert(http.responseText);
		    }
		}

		http.open("POST", url, true);
		http.send(JSON.stringify({nombre: nombre, email: email, telefono: telefono, message: mensaje}));

		// return console.log(nombre, email, telefono, mensaje);
	}
}()
)


// var email = document.getElementById('email');
// var password = document.getElementById('pass');
// http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
// http.open("POST", url, true);

