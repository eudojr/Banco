function crear_cuenta(){
	
	sessionStorage.setItem("cuenta",document.getElementById("cuentas").value);
	sessionStorage.setItem("tipo",document.getElementById("tipo_cuenta").value);
	window.location.href = "validacion.html";
}

function confirmacion(){
	window.location.href = "success.html";
}
