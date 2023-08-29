document.addEventListener('DOMContentLoaded', function() {
    function showProjects(category) {
        const allContainers = document.querySelectorAll('.cards-container');
        allContainers.forEach(container => {
            container.style.display = 'none';
        });

        const containerToShow = document.querySelector(`.cards-container.${category}`);
        containerToShow.style.display = 'block';
    }

    document.getElementById('design-tab').addEventListener('click', function(event) {
        event.preventDefault();
        showProjects('design');

        document.querySelector('.nav-link.active').classList.remove('active');
        this.classList.add('active');
    });

    document.getElementById('frontend-tab').addEventListener('click', function(event) {
        event.preventDefault();
        showProjects('frontend');

        document.querySelector('.nav-link.active').classList.remove('active');
        this.classList.add('active');
    });

    document.getElementById('backend-tab').addEventListener('click', function(event) {
        event.preventDefault();
        showProjects('backend');

        document.querySelector('.nav-link.active').classList.remove('active');
        this.classList.add('active');
    });

    // Mostrar proyectos de diseño por defecto
    showProjects('design');

    // Establecer la pestaña "diseño" como activa por defecto
    document.querySelector('.nav-link.active').classList.remove('active');
    document.getElementById('design-tab').classList.add('active');
});
