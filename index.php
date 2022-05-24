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
            <img src="img/slider/fondoBueno.jpg" alt="Bienvenida" class="d-block" style="width:100%">
            <div id="texto-medio" class="carousel-caption">
                <h3>¡BIENVENIDOS A SPIL GAMES, LA MEJOR PÁGINA DE JUEGOS DE CARTAS!</h3>
            </div>
        </div>
        <div class="carousel-item ">
            <img src="img/slider/foto1.jpg" alt="Uno" class="d-block" style="width:100%">
            <div class="carousel-caption">
                <h3>UNO</h3>
            </div>
        </div>
        <div class="carousel-item">
            <img src="img/slider/foto2.jpg" alt="Spider Solitaire" class="d-block" style="width:100%">
            <div class="carousel-caption">
                <h3>SPIDER SOLITAIRE</h3>
            </div>
        </div>
        <div class="carousel-item">
            <img src="img/slider/foto3.jpg" alt="Memory game" class="d-block" style="width:100%">
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