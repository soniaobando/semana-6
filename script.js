const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const contrasena = document.getElementById("contrasena");
const confirmar = document.getElementById("confirmar");
const edad = document.getElementById("edad");
const enviar = document.getElementById("enviar");

function validarFormulario() {
  let valido = true;

  if (nombre.value.length < 3) {
    errorNombre.textContent = "Mínimo 3 caracteres.";
    valido = false;
  } else {
    errorNombre.textContent = "";
  }

  const regexCorreo = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  if (!regexCorreo.test(correo.value)) {
    errorCorreo.textContent = "Correo inválido.";
    valido = false;
  } else {
    errorCorreo.textContent = "";
  }

  const regexPass = /^(?=.*[0-9])(?=.*[!@#$%^&*])/;
  if (contrasena.value.length < 8 || !regexPass.test(contrasena.value)) {
    errorContrasena.textContent = "8+ caracteres, número y símbolo.";
    valido = false;
  } else {
    errorContrasena.textContent = "";
  }

  if (contrasena.value !== confirmar.value) {
    errorConfirmar.textContent = "No coinciden.";
    valido = false;
  } else {
    errorConfirmar.textContent = "";
  }

  if (parseInt(edad.value) < 18) {
    errorEdad.textContent = "Debes tener 18+.";
    valido = false;
  } else {
    errorEdad.textContent = "";
  }

  enviar.disabled = !valido;
}

[nombre, correo, contrasena, confirmar, edad].forEach(input => {
  input.addEventListener("input", validarFormulario);
});

formulario.addEventListener("submit", e => {
  e.preventDefault();
  alert("¡Formulario válido y enviado!");
});
