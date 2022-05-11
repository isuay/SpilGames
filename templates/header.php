<?php ?>
<!doctype html>
<html lang="es">

<head>
    <meta charset="utf-8">
    <title>Header</title>
    <meta name="description" content="HTML5, CSS3">
    <meta name="author" content="">
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <link rel="stylesheet" href="css/style.css">
</head>

<body>
    <header class="d-flex flex-wrap justify-content-between py-3 mx-5 border-bottom ">
        <img id="logo-web" src="img/logos/logo.png" alt="Logo">
        <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="container" id="main_nav">
                <ul class="nav nav-pills" id="menu-links">
                    <li class="nav-item"><a href="#" class="nav-link" aria-current="page">Home</a></li>
                    <li class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            Games
                        </a>
                        <ul class="dropdown-menu">
                            <li><a href="#" class="dropdown-item">FAQs</a></li>
                            <li><a href="#" class="dropdown-item">About</a></li>
                        </ul>
                    </li>
                    <li class="nav-item"><a href="#" class="nav-link">Emulator</a></li>
                </ul>
            </div>
        </nav>
    </header>