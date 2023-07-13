const agregarInput = document.getElementById("agregarInput");
agregarInput.addEventListener("click", () => {
  // Obtener referencia al contenedor donde se agregarán los campos
  const contenedor = document.getElementById("contenedor");
  
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
  
  // Agregar un evento de escucha al botón de eliminar
  button.addEventListener("click", () => {
    // Obtener el elemento de grupo padre del botón
    const Grupo = button.parentNode;
    
    // Obtener el contenedor y eliminar el grupo del contenedor
    const contenedor = document.getElementById("contenedor");
    contenedor.removeChild(Grupo);
  });

   // Agregar los elementos al DOM
   contenedor.appendChild(Grupo);
   Grupo.appendChild(input);
   Grupo.appendChild(button);
 });