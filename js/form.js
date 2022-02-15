function validarFormulario(){
	var verificar=true;
	var expRegNombre =/^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ]{1,}([\s][A-Za-zÁáÉéÍíÓóÚúÜüÑñ]{1,})+$/;
	var expRegTel1=/[0-9]{9}/;
	var expRegDni=/[0-9]{8}[a-zA-Z]{1}/;
	var expRegIban=/[a-zA-Z]{2}[0-9]{22}/;
	var expRegMail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var form = document.getElementById("form");
	var nombre = document.getElementById("nombre");
	var email = document.getElementById("mail");
	var telefono = document.getElementById("tel");
	var dni = document.getElementById("dni");
	var iban= document.getElementById("iban");
	var Swift = document.getElementById("swift");
	var usuario = document.getElementById("user");	
	var fecnac = document.getElementById("fecha");	
	 
	if(!nombre.value){
	alert("Escriba su nombre y apellido por favor.");
	nombre.focus();
	verificar=false;
	return false;
	}
	else if(nombre.value.split(" ").length < 2){
	alert("Escriba sus nombre y apellido completos por favor.");
	nombre.focus();
	verificar=false;
	return false;
	}
	else if(!expRegNombre.exec(nombre.value)){
	alert("Este campo admite letras de la a-zA-Z, ÁáÉéÍíÓóÚúÜüÑñ y no admite espacios en blanco al final.");
	nombre.focus();
	verificar=false;
	return false;
	}
	else if(!expRegMail.exec(email.value)){
	alert("Escriba su email correctamente por favor(aaa@aa.aa)");
	email.focus();
	verificar=false;
	return false;
	}
	else if(!dni.value){
		alert("Escriba un numero de telefono");
		email.focus();
		verificar=false;
		return false;
		}
	else if(!expRegDni.exec(dni.value)){
	alert("Escriba 8 numeros y una letra para el dni.   12345678A")
	dni.focus();
	verificar=false;
	return false;
	}
	else if(!iban.value){
		alert("Escriba un iban");
		email.focus();
		verificar=false;
		return false;
		}
	else if(!expRegIban.exec(iban.value)){
	alert("Escriba iban correcto. 2 letras y 22 digitos sin espacios");
	iban.focus();
	verificar=false;
	return false;
	}
	else if(!telefono.value){
		alert("Escriba un telefono");
		email.focus();
		verificar=false;
		return false;
		}
	//!expRegTel1.exec(telefono.value)||
	else if(!expRegTel1.exec(telefono.value)){
	alert("Telefono incorrecto!");
	telefono.focus();
	verificar=false;
	return false;
	}

	else if(!Swift.value){
	alert("Escriba un swift por favor.");
	telefono.focus();
	verificar=false;
	return false;
	}

	if(verificar==true){
	document.formulario.submit();
	}
}
function limpiarFormulario(){
	document.getElementById("form").reset();
}
function calcular(){
	var contadorChar= document.getElementById("contador-char").innerHTML=1000 -document.formulario.comentario.value.length;
}
window.onload=function(){
	var botonLimpiar=document.getElementById("limpiar");
	botonLimpiar.onclick=limpiarFormulario;
	var botonEnviar=document.getElementById("enviar");
	botonEnviar.onclick=validarFormulario;
}