<!DOCTYPE html>
<html>

<head>
    <title>Formulario Dinámico</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">

    <style>
        h2 {
            text-align: center;
        }

        .error {
            border: 2px solid red;
        }
    #ContenedorPrincipal {
        width: 22%;
        height: 40%;
        margin: 7% auto;
        border: 1px solid grey;
        padding: 20px;
    }



       
    </style>
</head>

<body>
    <div id="ContenedorPrincipal">
       
        <h2><b>INGRESO DE PERSONAL</b></h2>
        
            <form id="formulario">
                <div id="contenedor">
                    <div class="Grupo">
                        <input type="text" name="input[]" placeholder="Ingrese sus nombres">
                        <button type="button" class="btn btn-danger btn-sm">Eliminar</button>

                    </div>
                </div>

                <button type="button" id="agregarInput" class="btn btn-success text-white">Agregar Input</button>
                <br><br>

                <button type="submit" class="btn btn-outline-primary">Enviar</button>
            </form>
          
    </div>

    <script src="script.js">

    </script>
</body>

</html>