
window.addEventListener('DOMContentLoaded', iniciarApp);
const pokmnAmarillo = document.querySelector('#pkmn-Amarillo');

function iniciarApp(){
 addListeners();
}

function cargarJuego(nombre, url, core){
    console.log("Juego cargado");
    EJS_player = nombre;
    EJS_biosUrl = '';
    EJS_gameUrl = url;
    EJS_core = core;
}

function addListeners(){
    window.addEventListener('keydown', disableTec);
    pokmnAmarillo.addEventListener('click', cargarJuego('#gameboycolor', window.location.href + 'roms/PokemonEAmarilla.zip', 'gb'));
}

function disableTec(e){
    e.preventDefault();
}
