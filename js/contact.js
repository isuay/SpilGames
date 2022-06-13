/* AUTORES PÁGINA
100% BLAYIMIR ALEXIS PÉREZ*/

window.addEventListener('DOMContentLoaded', iniciarAPP);
const nombre = document.querySelector('#name');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const btnEnviar = document.querySelector('#btnEnviar');

function iniciarAPP() {
  addEventListeners();
  desactivarBTN(btnEnviar);
}

function addEventListeners() {
  nombre.addEventListener('input', validarFormulario);
  email.addEventListener('input', validarFormulario);
  mensaje.addEventListener('input', validarFormulario);
  btnEnviar.addEventListener('click', clickBtnEnviar);
}

function validarFormulario(e) {
  e.preventDefault();

  if (e.target.value != '') {
    e.target.classList.remove('border-red');
    e.target.classList.add('border-green');
  } else {
    e.target.classList.remove('border-green');
    e.target.classList.add('border-red');
    mostrarError('Todos los campos son obligatorios');
  }

  /* VALIDAR EMAIL */
  if (e.target.type === 'email') {
    if (er.test(e.target.value)) {
      e.target.classList.remove('border-red');
      e.target.classList.add('border-green');
    } else {
      mostrarError('Email no válido');
      e.target.classList.remove('border-green');
      e.target.classList.add('border-red');
    }
  }

  if (er.test(email.value) && mensaje.value != '' && nombre.value != '') {
    activarBTN(btnEnviar);
  } else {
    desactivarBTN(btnEnviar);
  }
}

function mostrarError(error) {
  console.log(error);
}

function activarBTN(btn) {
  btn.disabled = false;
  btn.classList.remove('no-cursor', 'op50');
}

function desactivarBTN(btn) {
  btn.disabled = true;
  btn.classList.add('no-cursor', 'op50');
}

function clickBtnEnviar() {
  let spinner = document.createElement('span');
  spinner.innerHTML =`
    <div class="spinner-border text-danger"></div>
  `;
  btnEnviar.appendChild(spinner);
}