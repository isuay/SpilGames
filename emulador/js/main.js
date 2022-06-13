/* AUTORES PÁGINA 
100% BLAYIMIR ALEXIS PÉREZ*/

window.addEventListener('DOMContentLoaded', iniciarApp);
const pokmnAmarillo = document.querySelector('#pkmn-Amarillo');
const superMario = document.querySelector('#super-mario');
const tetris = document.querySelector('#tetris');

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
    superMario.addEventListener('click', cargarJuego('#gameboycolor', window.location.href + 'roms/Super_Mario', 'gb'));
    tetris.addEventListener('click', cargarJuego('#gameboycolor', window.location.href + 'roms/Tetris.zip', 'gb'));
}

function disableTec(e){
    e.preventDefault();
}
