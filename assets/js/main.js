//funcion ejercicio 1
function principal(){
	var boton = document.getElementById("demo");//se llama el id
	boton.addEventListener("click", function(){//se realiza 'onclick' que se hacía en html.
		alert("HOLA MUNDO");
	});
}
principal();

//ejercicios con on en html.
function verificacionBody(){
	alert("YA SE CARGÓ");
}
function verificacionInputUno(){
	alert("Estás sobre mi 1313");
}
function verificacionInputDos(){
	alert("No estás sobre mi");
}