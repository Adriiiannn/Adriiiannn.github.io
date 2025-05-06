// Animaciones al hacer scroll
document.addEventListener('DOMContentLoaded', function() {
    // Animación de elementos
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('[data-animate]');
      const windowHeight = window.innerHeight;
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        
        if (elementPosition < windowHeight - 100) {
          element.classList.add('animated');
        }
      });
    };
    
    // Ejecutar al cargar
    animateOnScroll();
    
    // Ejecutar al hacer scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Validación de formulario
    const contactForm = document.querySelector('.contact__form');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validación simple
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (name && email && message) {
          // Aquí iría la lógica de envío real
          alert('Mensaje enviado con éxito. ¡Gracias por contactarme!');
          contactForm.reset();
        } else {
          alert('Por favor complete todos los campos requeridos.');
        }
      });
    }
    
    // Smooth scrolling para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId !== '#') {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  });
