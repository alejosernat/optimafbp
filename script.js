//funcion de desplazamiento
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const targetPosition = targetElement.offsetTop;

        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;

        const duration = 1000; // Duración total del desplazamiento en milisegundos
        const fps = 60; // Cuadros por segundo
        const increment = distance / (duration / 1000 * fps); // Distancia de desplazamiento por fotograma

        let currentPosition = startPosition;
        let currentTime = 0;

        function scrollToTarget() {
            if (distance > 0) { // Desplazamiento hacia abajo
                if (currentPosition < targetPosition) {
                    currentPosition += increment;
                    if (currentPosition >= targetPosition) {
                        window.scrollTo(0, targetPosition);
                        return;
                    }
                }
            } else { // Desplazamiento hacia arriba
                if (currentPosition > targetPosition) {
                    currentPosition += increment;
                    if (currentPosition <= targetPosition) {
                        window.scrollTo(0, targetPosition);
                        return;
                    }
                }
            }

            window.scrollTo(0, currentPosition);

            currentTime += 1000 / fps;
            setTimeout(scrollToTarget, 1000 / fps);
        }

        scrollToTarget();
    });
});



//funcion menú transparente
document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
        var header = document.querySelector('.containerMenu');
        if(window.scrollY === 0) {
            header.classList.add('transparent-header');
            
        } else {
            header.classList.remove('transparent-header');
        }
    });
});



