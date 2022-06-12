<?php include '../templates/header-games.php';?>
<section>
    <div>
    <div id="tablero" class="container mt-3">
        <div class="row">
            <ul id="cuerpoTablero" class="list-group  list-group-horizontal" style="display: flex;">

            </ul>




        </div>

    </div>

    <div class='depositos'>
        <div id="almacenTrebol" class="deposito"></div>
        <div id="almacenCorazones" class="deposito"></div>
        <div id="almacenPicas" class="deposito"></div>
        <div id="almacenDiamantes" class="deposito"></div>

    </div>

    <div id="reiniciar">
        REINICIAR
    </div>

</div>
</section>
<script type="module" src='app.js'></script>
<?php include '../templates/footer-games.php'; ?>