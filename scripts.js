document.addEventListener("DOMContentLoaded", function() {
    const menuLinks = document.querySelectorAll('.navbar-center ul li a');

    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
    document.addEventListener("DOMContentLoaded", function() {
        // Función para abrir modal
        function openModal(modalId) {
            var modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = "block";
                document.body.style.overflow = 'hidden'; // Evitar el scroll de fondo al abrir modal
            }
        }

        // Función para cerrar modal
        function closeModal(modalId) {
            var modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = "none";
                document.body.style.overflow = 'auto'; // Restaurar scroll de fondo al cerrar modal
            }
        }

        // Agregar evento al botón "Hazte Socio"
        const joinButton = document.querySelector('.join-button');
        joinButton.addEventListener('click', function(e) {
            e.preventDefault();
            openModal('join-modal');
        });

        // Agregar evento para cerrar modal al hacer clic en la 'x'
        const closeModalButtons = document.querySelectorAll('.close');
        closeModalButtons.forEach(button => {
            button.addEventListener('click', function() {
                closeModal(button.closest('.modal').id);
            });
        });

        // Agregar evento para cerrar modal al hacer clic fuera del contenido del modal
        window.onclick = function(event) {
            const modals = document.querySelectorAll('.modal');
            modals.forEach(modal => {
                if (event.target == modal) {
                    closeModal(modal.id);
                }
            });
        };
    });

    // Agregar EventListener al botón "Más Información" de Misión
    const masInfoMisionButton = document.querySelector('#mision .read-more');
    masInfoMisionButton.addEventListener('click', function(e) {
        e.preventDefault();
        mostrarMasDescripcion('mision');
    });

    // Agregar EventListener al botón "Más Información" de Visión
    const masInfoVisionButton = document.querySelector('#vision .read-more');
    masInfoVisionButton.addEventListener('click', function(e) {
        e.preventDefault();
        mostrarMasDescripcion('vision');
    });

    // Agregar EventListener al botón de "Más Información" en la sección "Quiénes Somos"
    const masInfoAboutButton = document.querySelector('.about-content button');
    masInfoAboutButton.addEventListener('click', function(e) {
        e.preventDefault();
        mostrarMasDescripcion('quienes-somos'); // Pasar un identificador único
    });
});

// Función para mostrar el modal de más información
function mostrarMasDescripcion(seccion) {
    var modalId;
    switch (seccion) {
        case 'mision':
            modalId = 'modal-mision';
            break;
        case 'vision':
            modalId = 'modal-vision';
            break;
        case 'quienes-somos':
            modalId = 'mas-informacion-modal';
            break;
        default:
            return;
    }

    var modal = document.getElementById(modalId);
    var span = modal.querySelector('.close');

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Evitar el salto automático al abrir el modal

    // Cuando el usuario haga clic en (x), cierra el modal
    span.onclick = function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Cuando el usuario haga clic fuera del modal, cierra el modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }
}

// Función para abrir modal
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "block";
        document.body.style.overflow = 'hidden'; // Evitar el scroll de fondo al abrir modal
    }
}

// Función para cerrar modal
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = 'auto'; // Restaurar scroll de fondo al cerrar modal
    }
}
