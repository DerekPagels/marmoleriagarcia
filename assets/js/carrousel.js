document.addEventListener('DOMContentLoaded', () => {
    const carouselIndicators = document.querySelector('.carousel-indicators');
    const carouselInner = document.querySelector('.carousel-inner');

    for (let i = 1; i <= 16; i++) {
        // Crear indicadores
        const indicator = document.createElement('button');
        indicator.type = 'button';
        indicator.dataset.bsTarget = '#carouselExampleIndicators';
        indicator.dataset.bsSlideTo = i - 1;
        indicator.className = i === 1 ? 'active' : '';
        indicator.setAttribute('aria-current', i === 1 ? 'true' : 'false');
        indicator.setAttribute('aria-label', `Slide ${i}`);
        carouselIndicators.appendChild(indicator);

        // Crear imágenes del carrusel
        const carouselItem = document.createElement('div');
        carouselItem.className = `carousel-item ${i === 1 ? 'active' : ''}`;
        const img = document.createElement('img');
        img.src = `/assets/img/cementeriosarabraun/v_${i}.webp`;
        img.className = 'd-block w-100';
        img.alt = `Imagen ${i}`;
        carouselItem.appendChild(img);
        carouselInner.appendChild(carouselItem);
    }
});
