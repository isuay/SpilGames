<!-- AUTORES PÁGINA
25% JOSÉ DAVID ROSALES RIOS
25% BLAYIMIR ALEXIS PÉREZ
50% IRIS SUAY PATRICIO -->

<?php ?>
<!doctype html>
<html lang="es">

<head>
    <meta charset="utf-8">
    <title>Inicio</title>
    <meta name="description" content="HTML5, CSS3">
    <meta name="author" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/custom.css">
    <link rel="stylesheet" href="css/contact.css">
</head>

<body>

    <!-- Header normal -->
    <header id="header-normal" class="row d-flex flex-wrap justify-content-between py-3 align-middle contenedor mx-auto">

        <div id="alineacion-img" class="col-md-4">
            <a href="./index.php"><img id="logo-web" src="img/logos/logo_v1.png" alt="Logo"></a>
        </div>
            
        <div class = "col-md-8 d-flex justify-content-end">
            <nav class="navbar navbar-expand-lg navbar-dark">
                <div class="container" id="main_nav">
                    <ul class="nav nav-pills" id="menu-links">
                        <li class="nav-item"><a href="./index.php" class="nav-link" aria-current="page">Home</a></li>
                        <li class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                                Games
                            </a>
                            <ul class="dropdown-menu">
                                <li><a href="./Solitario/public/index.html" class="dropdown-item">Solitaire</a></li>
                                <li><a href="./uno/" class="dropdown-item">uno</a></li>
                                <li><a href="./memoria/memoria.html" class="dropdown-item">memory</a></li>
                            </ul>
                        </li>
                        <li class="nav-item"><a href="#" class="nav-link">Emulator</a></li>
                        <li class="nav-item"><a href="./contacto.php" class="nav-link">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </div>
        
    </header>

    <!-- Header modelo offCanvas -->
    <div class="offcanvas offcanvas-end d-flex" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
            <a href="./index.php"><img id="logo-offCanvas" src="img/logos/logo_v1.png" alt="Logo"></a>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <ul class="nav nav-pills" id="menu-offCanvas">
                <li class="nav-item"><a href="./index.php" class="nav-link" aria-current="page">HOME</a></li>
                <li class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                        GAMES
                    </a>
                    <ul class="dropdown-menu dropdown-menuOffCanvas">
                        <li><a href="./Solitario/public/index.html" class="dropdown-item juegosOffCanvas">SOLITAIRE</a></li>
                        <li><a href="./uno/" class="dropdown-item juegosOffCanvas">UNO</a></li>
                        <li><a href="./memoria/memoria.html" class="dropdown-item juegosOffCanvas">MEMORY</a></li>
                    </ul>
                </li>
                <!-- <li class="nav-item"><a href="#" class="nav-link">GAMES</a></li>
                <li class="nav-item"><a href="./solitario.html" class="nav-link juegosOffCanvas">SOLITAIRE</a></li>
                <li class="nav-item"><a href="./uno.html" class="nav-link juegosOffCanvas"></a></li>
                <li class="nav-item"><a href="./memoria.html" class="nav-link juegosOffCanvas">MEMORY</a></li> -->
                <li class="nav-item"><a href="#" class="nav-link">EMULATOR</a></li>
                <li class="nav-item"><a href="./contacto.php" class="nav-link">CONTACT</a></li>
            </ul>
        </div>
    </div>

    <header id="alineacion-img2" class="d-flex flex-wrap justify-content-between py-3 mb-4 mx-5">
        <div class="col-4">
            <a href="./index.php"><img id="logo-web" src="img/logos/logo_v1.png" alt="Logo"></a>
        </div>
        <button id="btn-offcanvas" class="btn col-8" type="button" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
            <i class="fa-solid fa-bars color-terciario"></i>
        </button>
    </header>