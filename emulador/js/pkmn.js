window.addEventListener('DOMContentLoaded', iniciarApp);

function iniciarApp(){
 addListeners();
 cargarJuego('#gameboycolor','http://localhost/spilgames/emulador/roms/PokemonEAmarilla.zip', 'gb')
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
}

function disableTec(e){
    e.preventDefault();
}
