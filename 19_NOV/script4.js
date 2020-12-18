//Ejemplo de solicitud sincrona con eventos mas utilizados de respuesta
//load, error, progress
//1. se cre objeto de solicitud XMLHttpRequest
let xhr = new XMLHttpRequest();
//2. se configura: solicitud-GET para URL http://localhost/archivo.txt
xhr.open('GET', 'http://localhost/archivo.txt');
//3. se envia solicitud
xhr.send();
//4. los siguientes seran invocados despues de que la respuesta sea recibida
xhr.onload = function(){
	if (xhr.status !=200) {//analiza status de la respuesta HTTP
		alert(`Error ${xhr.statusd}: ${xhr.statusText}`); //ejemplo. 404:Not Found
	}else {// muestra resultado
		alert(`Listo, se recibieron ${xhr.response.length} bytes`);
	}
};

xhr.onprogres = function(event){
	if (event.lengthComputable) {
		alert(`Recibidos ${event.loaded} de ${event.total} bytes`);
	}else {
		alert(`Recibidos ${event.loaded} bytes`); //no ser recibio longitud del contenido Content-Length
	}
};

xhr.onerror = function(){
	alert("Fallo solicitud");
};
