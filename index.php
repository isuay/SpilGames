<!-- AUTORES PÁGINA
33,33% JOSÉ DAVID ROSALES RIOS
33,33% BLAYIMIR ALEXIS PÉREZ
33,33% IRIS SUAY PATRICIO -->

<?php include './templates/header.php';?>

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
            <img src="img/slider/fondoBueno2.jpg" alt="Bienvenida" class="d-block">
            <div id="texto-medio" class="carousel-caption">
                <h3>¡BIENVENIDOS A SPIL GAMES, LA MEJOR PÁGINA DE JUEGOS DE CARTAS!</h3>
            </div>
        </div>
        <div class="carousel-item">
            <a href="./Solitario/public/index.html"><img src="img/slider/solitaire.jpg" alt="Spider Solitaire" class="d-block"></a>
            <div class="carousel-caption">
                <h3>SOLITAIRE</h3>
            </div>
        </div>
        <div class="carousel-item ">
            <a href="./uno.html"><img src="img/slider/uno.jpg" alt="Uno" class="d-block"></a>
            <div class="carousel-caption">
                <h3>UNO</h3>
            </div>
        </div>
        <div class="carousel-item">
            <a href="./memoria.html"><img src="img/slider/memoria2.png" alt="Memory game" class="d-block"></a>
            <div class="carousel-caption">
                <h3>MEMORY GAME</h3>
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

<?php include './templates/footer.php'; ?>