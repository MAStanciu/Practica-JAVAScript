function validar(e) {
	// El evento 'e' está asociado al botón 'enviar' (type=submit)
	// en este caso lo que hace es enviar el formulario

	// Validamos cada una de las cajas de texto con llamadas a sus funciones correspondientes.
	if (
		validarCamposTexto(this) &&
		validarProvincia() &&
		confirm("¿Deseas enviar el formulario?")
	)
		return true;
	else {
		// Cancelamos el evento de envío por defecto asignado al botón de 'submit' enviar
		e.preventDefault();
		return false; //Salimos de la función devolviendo false
	}
}

function validarDni(){
    
}

document.getElementById("enviar").addEventListener("click", validar, false);