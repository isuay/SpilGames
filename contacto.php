<?php include './templates/header.php';?>

<div class="page-wrapper bg-red">
        <div class="wrapper">
            <div class="card card-2">
                <div class="card-heading"></div>
                <div class="card-body">
                    <h2 class="title">Contact</h2>
                    <form method="POST">
                        <div class="form-floating mb-3 mt-3">
                            <input type="text" class="form-control" name="name" placeholder="Enter name" id="name">
                            <label for="name">Name</label>
                        </div>
                        <div class="form-floating mb-3 mt-3">
                            <input type="email" class="form-control" id="email" placeholder="Enter email" name="email">
                            <label for="email">Email</label>
                        </div>
                        <p>Elige una opción</p>
                        <select name="option" id="option" class="form-select">
                            <option value="Error">Error</option>
                            <option value="Error">Mejora</option>
                            <option value="Error" selected>Comentario</option>
                        </select>
                        <div class="form-floating mb-3 mt-3">
                            <textarea name="mensaje" id="mensaje" cols="90" rows="5" placeholder="Mensaje"></textarea>
                        </div>
                        <div class="p-t-30">
                            <button type="submit" class="btn btn-dark" id="btnEnviar">Enviar</button>
                            <!-- <input type="submit" value="Enviar" class="btn btn-dark" id="btnEnviar"> -->
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
<script src ="./js/contact.js"></script>
<?php include './templates/footer.php'; ?>