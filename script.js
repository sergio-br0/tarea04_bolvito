const agregarInput = document.getElementById("agregarInput");
agregarInput.addEventListener("click", () => {
  // Obtener referencia al contenedor donde se agregarán los campos
  const contenedor = document.getElementById("contenedor");
  console.log("se creo un input y el boton eliminar");
  
  // Crear un nuevo elemento de grupo (div)
  const Grupo = document.createElement("div");
  Grupo.classList.add("Grupo");
  
  // Crear un nuevo campo de entrada (input)
  const input = document.createElement("input");
  input.type = "text";
  input.name = "input[]";
  input.placeholder = "Ingresa un valor";
  
  // Crear un nuevo botón de eliminar (button)
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = "Eliminar";
  button.classList.add("btn", "btn-danger", "btn-sm");
  
  
  // Agregar un evento de escucha al botón de eliminar
  button.addEventListener("click", () => {
    // Obtener el elemento de grupo padre del botón
    const Grupo = button.parentNode;
    console.log("se elimino un input y el boton eliminar")
    
    // Obtener el contenedor y eliminar el grupo del contenedor
    const contenedor = document.getElementById("contenedor");
    contenedor.removeChild(Grupo);
  });

   // Agregar los elementos al DOM
   contenedor.appendChild(Grupo);
   Grupo.appendChild(input);
   Grupo.appendChild(button);
 });

 const form = document.getElementById("formulario");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Obtener referencia al formulario
  const form = document.getElementById("formulario");

  // Obtener todos los campos de entrada con el atributo name="input[]"
  const inputs = form.querySelectorAll('input[name="input[]"]');

  let isValid = true;

  // Iterar sobre cada campo de entrada
  inputs.forEach(input => {
    // Verificar si el valor del campo está vacío después de recortar los espacios en blanco
    if (input.value.trim() === "") {
      isValid = false;
      // Agregar la clase "error" al campo de entrada si está vacío
      input.classList.add("error");
      
    } else {
      // Eliminar la clase "error" del campo de entrada si no está vacío
      input.classList.remove("error");
    }
  });

  if (isValid) {
    // Mostrar una alerta indicando que el formulario es válido y se puede enviar
    alert("Formulario válido. Se puede enviar.");
    console.log("El formulario se envio correctamente");
    // Aquí puedes agregar el código para enviar el formulario si es válido
  } else {
    // Mostrar una alerta solicitando al usuario que complete todos los campos requeridos
    alert("Por favor, complete todos los campos requeridos.");
    console.log("Lleno todos los campos requeridos");
  }
});
