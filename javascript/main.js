import { aniadirFila, imagenes } from './funciones.js';

// Funcion que controla el comportamiento del formulario
document.getElementById('formulario').addEventListener('submit', (e) => {
    // Evita que el formulario recargue la página cuando se envíe
    e.preventDefault();
    // Se obtienen los valores introducidos en cada campo
    const email = document.getElementById('email').value;  
    const nombre = document.getElementById('nombre').value;
    const horario = document.querySelector('input[name="horario"]:checked').value;
    const notificaciones = document.getElementById('notificaciones').checked;
    // Se llama a la funcion añadirFila para añadir una fila con los valores correspondientes
    aniadirFila(email, nombre, horario, notificaciones);
    // Reinicia los campos del formulario posteriormente al haberse enviado
    e.target.reset();
});

// Funcion para controlar la galeria
document.getElementById('galeria').addEventListener('click', (e) => {
    // Verifica si el elemento seleccionado es una imagen de la galería
    if (e.target.classList.contains('imagenGaleria')) {
        const imagen = e.target.src; 
        // Llama a la funcion imagenes para mostrar la imagen seleccionada
        imagenes(imagen, true); 
    }
});
// 
document.getElementById('inicioGaleria').addEventListener('click', () => {
    // Llama a la funcion imagenes para mostrar la galeria
    imagenes('', false); 
});
