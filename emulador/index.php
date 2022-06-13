/*<?php include '../templates/header-games.php';?>
<section>
  <!-- Slider -->
<div id="slider-principal" class="carousel slide" data-bs-ride="carousel">

<!-- Botones inferiores -->
<div class="carousel-indicators">
    <button type="button" data-bs-target="#slider-principal" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#slider-principal" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#slider-principal" data-bs-slide-to="2"></button>
    <button type="button" data-bs-target="#slider-principal" data-bs-slide-to="3"></button>
</div>

<!-- Presentacion de diapositivas -->
<div class="carousel-inner">
    <div class="carousel-item active">
        <img src="images/game_boy.jpg" alt="Bienvenida" class="d-block">
        <div class="carousel-caption">
            <h3>JUEGOS DE GAME BOY</h3>
        </div>
    </div>
    <div class="carousel-item">
        <img src="images/pokemon.jpeg" alt="Pokemon" class="d-block">
        <div class="carousel-caption">
            <!-- <h3>POKEMON AMARILLO</h3> -->
            <a href="#juego"><button id="pkmn-Amarillo" class="btn myButton">
            Jugar
            </button> </a>
        </div>
    </div>
    <div class="carousel-item ">
        <img src="images/SuperMarioLand.jpg" alt="Mario" class="d-block">
        <div class="carousel-caption">
            <!-- <h3>SUPER MARIO LAND</h3> -->
        </div>
    </div>
    <div class="carousel-item">
        <img src="images/tetris.jpg" alt="Zelda" class="d-block">
        <div class="carousel-caption">
            <!-- <h3>TETRIS</h3> -->
        </div>
    </div>
</div>

<!-- Flechas de izquierda/derecha -->
<button class="carousel-control-prev" type="button" data-bs-target="#slider-principal" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#slider-principal" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
</button>
</div>
</section>
<section id="juego">
    <div class="emulator-container d-flex flex-wrap justify-content-center"> 
        <div style="width:640px;height:480px;max-width:100%">
            <div id="gameboycolor"></div>
        </div>
    </div>
 </section >
    <script src="js/loader.js"></script>
    <script src="js/main.js"></script>
    <script src="../bootstrap/js/bootstrap.min.js"></script>

<?php include '../templates/footer-games.php'; ?>
