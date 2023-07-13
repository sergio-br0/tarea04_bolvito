<!DOCTYPE html>
<html>
<head>
  <title>Formulario Dinámico</title>
  <style>
    h1{
        text-align: center;
    }
    .error {
      border: 2px solid red;
    }

  </style>
</head>
<body>
  <h1><b>INGRESO DE PERSONAL</b></h1>
  
  <form id="formulario">
    <div id="contenedor">
      <div class="Grupo">
        <input type="text" name="input[]" placeholder="Ingrese sus nonmbres">
        <button type="button">Eliminar</button>
      </div>
    </div>
    
    <button type="button" id="agregarInput">Agregar Input</button>
    <br><br>
    
    <button type="submit">Enviar</button>
  </form>
  
  <script src="script.js">
    
  </script>
</body>
</html>
