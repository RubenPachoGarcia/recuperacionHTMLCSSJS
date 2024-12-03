// Función para añadir un nuevo registro con los valores introducidos por el usuario
export function aniadirFila(email, nombre, horario, notificaciones) {
    const tabla = document.getElementById('tablaDatos');
    // Variable que creara una nueva fila en la tabla donde se muestran los datos
    const fila = document.createElement('tr');
    // Se añaden los valores introducidos en sus respectivas columnas
    fila.innerHTML = `
        <td>${email}</td>
        <td>${nombre}</td>
        <td>${horario}</td>
        <td>${notificaciones ? 'Sí' : 'No'}</td>
    `;

    // Se añade la fila con sus respectivos valores a la tabla de datos
    tabla.appendChild(fila);
}

// Función para seleccionar y volver en las imagenes que elija el usuario
export function imagenes(imagen, mostrarImagenes) {
    const galeria = document.getElementById('galeria');
    const imagenElegida = document.getElementById('imagenElegida');
    const imagenActual = document.getElementById('imagenActual');

    if (mostrarImagenes) {
        // Se oculta la galeria para que solo muestre la imagen seleccionada por el usuario
        galeria.classList.add('d-none');
        imagenElegida.classList.remove('d-none');
        imagenActual.src = imagen;
    } else {
        // Se muestra la galeria de imagenes nuevamente
        galeria.classList.remove('d-none');
        imagenElegida.classList.add('d-none');
        imagenActual.src = '';
    }
}

