document.addEventListener('DOMContentLoaded', () => {
    // Obtener referencias a elementos del DOM
    const carrito = document.querySelector('#carrito'); // Elemento contenedor del carrito
    const listaProductos = document.querySelector('#lista'); // Contenedor de la lista de productos
    const listaCarrito = document.querySelector('#lista-carrito tbody'); // Cuerpo de la tabla del carrito
    const btnVaciarCarrito = document.querySelector('#vaciar-carrito'); // Botón para vaciar el carrito
    const totalElemento = document.querySelector('#total'); // Elemento para mostrar el total

    let total = 0; // Variable para almacenar el total

    // Cargar event listeners
    listaProductos.addEventListener('click', agregarAlCarrito); // Escucha el clic para agregar productos al carrito
    carrito.addEventListener('click', eliminarDelCarrito); // Escucha el clic para eliminar productos del carrito
    btnVaciarCarrito.addEventListener('click', vaciarCarrito); // Escucha el clic para vaciar el carrito

    // Función para agregar un producto al carrito
    function agregarAlCarrito(e) {
        e.preventDefault(); // Previene el comportamiento predeterminado del enlace
        if (e.target && e.target.closest('.agregar-carrito')) {
            // Verifica si el clic se realizó en el botón "Agregar al carrito"
            const producto = e.target.closest('.producto-individual'); // Obtiene el contenedor del producto
            if (producto) {
                const infoProducto = obtenerDatosProducto(producto); // Obtiene los datos del producto
                insertarEnCarrito(infoProducto); // Inserta el producto en el carrito
                controlarVisibilidadBoton(); // Controla la visibilidad del botón "Vaciar carrito"
                actualizarTotal(infoProducto.precio); // Actualiza el total
            }
        }
    }

    // Obtener la información del producto seleccionado
    function obtenerDatosProducto(producto) {
        return {
            imagen: producto.querySelector('img').src, // Obtiene la direccion del archivo de la imagen del producto
            titulo: producto.querySelector('h3').textContent, // Obtiene el título del producto
            precio: parseFloat(producto.querySelector('p').textContent.replace('$', '').replace(',', '')), // Obtiene el precio del producto y lo convierte a número
            id: producto.querySelector('a.agregar-carrito').getAttribute('data-id') // Obtiene el ID del producto
        };
    }

    // Insertar el producto en el carrito
    function insertarEnCarrito(producto) {
        const row = document.createElement('tr'); // Crea una nueva fila para el producto
        row.setAttribute('data-id', producto.id); // Asigna el ID del producto a la fila
        row.innerHTML = `
            <td><img src="${producto.imagen}" width="100" /></td>
            <td>${producto.titulo}</td>
            <td>$${producto.precio.toFixed(2)}</td>
            <td><a href="#" class="borrar" data-id="${producto.id}">X</a></td>
        `;
        listaCarrito.appendChild(row); // Añade la fila al cuerpo de la tabla del carrito
    }

    // Eliminar producto del carrito
    function eliminarDelCarrito(e) {
        e.preventDefault(); // Previene el comportamiento predeterminado del enlace
        if (e.target && e.target.classList.contains('borrar')) {
            // Verifica si se hizo clic en el enlace "borrar"
            const row = e.target.closest('tr'); // Obtiene la fila correspondiente al producto
            if (row) {
                const precio = parseFloat(row.children[2].textContent.replace('$', '')); // Obtiene el precio del producto
                total -= precio; // Resta el precio del total
                row.remove(); // Elimina la fila del producto
                controlarVisibilidadBoton(); // Controla la visibilidad del botón "Vaciar carrito"
                actualizarTotalDisplay(); // Actualiza el total mostrado
            }
        }
    }

    // Vaciar todo el carrito
    function vaciarCarrito() {
        // Elimina todos los elementos del carrito
        while (listaCarrito.firstChild) {
            const precio = parseFloat(listaCarrito.firstChild.children[2].textContent.replace('$', '')); // Obtiene el precio del primer elemento
            total -= precio; // Resta el precio del total
            listaCarrito.removeChild(listaCarrito.firstChild); // Elimina el primer elemento de la lista
        }
        controlarVisibilidadBoton(); // Controla la visibilidad del botón "Vaciar carrito"
        actualizarTotalDisplay(); // Actualiza el total mostrado
    }

    // Controlar la visibilidad del botón "Vaciar carrito"
    function controlarVisibilidadBoton() {
        if (listaCarrito.children.length > 0) {
            // Si hay productos en el carrito, muestra el botón
            btnVaciarCarrito.style.display = 'block';
        } else {
            // Si no hay productos en el carrito, oculta el botón
            btnVaciarCarrito.style.display = 'none';
        }
    }

    // Actualiza el total y lo muestra en el submenú
    function actualizarTotal(precio) {
        total += precio; // Suma el precio del nuevo producto al total
        actualizarTotalDisplay(); // Llama a la función para mostrar el total
    }

    // Muestra el total en el elemento correspondiente
    function actualizarTotalDisplay() {
        totalElemento.textContent = `Total: $${total.toFixed(2)}`; // Actualiza el texto del total
    }

    // Inicializar la visibilidad del botón y el total al cargar la página
    controlarVisibilidadBoton(); // Controla la visibilidad del botón "Vaciar carrito" al iniciar
    actualizarTotalDisplay(); // Muestra el total al iniciar
});
