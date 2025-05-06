// Escucha el evento 'scroll' en la ventana para detectar cuando el usuario se desplaza
window.addEventListener('scroll', function() {
    const menu = document.getElementById('menu'); // Obtiene el elemento con el ID 'menu'
    const carrito = document.getElementById('carrito'); // Elemento contenedor del carrito
  
    if (window.scrollY < 170) {
        menu.style.position = 'absolute'; // Fija la posición del menú como absoluta
        menu.style.backgroundColor = '#252525'; // Cambia el color de fondo del menú a gris 
    } else {
        menu.style.position = 'fixed'; // Fija la posición del menú como fija
        menu.style.backgroundColor = '#25252585'; // Cambia el color de fondo del menú a un gris semitransparente
        menu.style.transition = 'top 2s ease-in-out'; // Añade una transición suave al cambio de posición
        menu.style.top = '0'; // Asegura que el menú se posicione en la parte superior cuando se vuelve fijo
        menu.style.backdropFilter = 'blur(3px)';
        carrito.style.backdropFilter='blur(30px)';
    }
  });
  
  // Inicializa un nuevo Swiper para el carrusel de imágenes
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal', // Define la dirección del desplazamiento como horizontal
    loop: true, // Habilita el bucle para que las diapositivas se repitan continuamente
    pagination: {
        el: '.swiper-pagination', // Selecciona el elemento de paginación
        clickable: true, // Permite que los puntos de paginación sean clicables
    },
    navigation: {
        nextEl: '.swiper-button-next', // Selecciona el botón de navegación para avanzar
        prevEl: '.swiper-button-prev', // Selecciona el botón de navegación para retroceder
    },
    scrollbar: {
        el: '.swiper-scrollbar', // Selecciona la barra de desplazamiento del carrusel
        draggable: true, // Permite arrastrar la barra de desplazamiento
    },
  });
  