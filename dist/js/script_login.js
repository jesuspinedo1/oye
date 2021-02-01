function limpiarErrores() {
    var errores = document.getElementsByClassName("error");
    for (var i = 0; i < errores.length; i++) {
        errores[i].innerHTML = "";
    }
}


function count(cadena, caracter) {
    counting = 0
    posicion = 0

    posicion = cadena.indexOf(caracter)
    while (posicion != -1) {
        counting++;
        posicion = cadena.indexOf(caracter, posicion + 1);
    }
    return counting;
}


function validar(formulario) {

    limpiarErrores();


    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(formulario.email.value)) {
        document.getElementById("errorEmail").innerText = "Campo inválido";
        formulario.email.focus();
        return false;
    }

    if (formulario.contrasena.value.trim().length == 0) {
        document.getElementById("errorContrasena").innerText = "Campo obligatorio";
        formulario.contrasena.focus();
        return false;
    }

    if (formulario.contrasena.value.trim().length < 9) {
        document.getElementById("errorContrasena").innerText = "*Campo inválido (Mínimo 9 caracteres)";
        formulario.contrasena.focus();
        return false;
    }

    alert("Datos enviados");

    return true;
}