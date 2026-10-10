/* =========================================
   GALLERY.JS - Galería con lightbox y filtros
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {

  const galleryContainer = document.querySelector('[data-render="galeria"]');
  const filtersContainer = document.querySelector('[data-gallery-filters]');

  if (!galleryContainer || typeof GALERIA === 'undefined') return;

  /* ============================================
     1. RENDERIZAR FILTROS
     ============================================ */
  if (filtersContainer && typeof CATEGORIAS_GALERIA !== 'undefined') {
    filtersContainer.innerHTML = CATEGORIAS_GALERIA.map((c, i) => `
      <button class="gallery-filter-btn px-5 py-2 rounded-full border-2 border-blue-700 text-blue-700 font-semibold hover:bg-blue-700 hover:text-white transition ${i === 0 ? 'active' : ''}" data-filter="${c.id}">
        ${c.nombre}
      </button>
    `).join('');
  }

  /* ============================================
     2. LIGHTBOX - Setup (declarado antes de usarse)
     ============================================ */
  const lightbox = document.querySelector('[data-lightbox]');
  const lightboxImg = document.querySelector('[data-lightbox-img]');
  const lightboxCaption = document.querySelector('[data-lightbox-caption]');
  const lightboxClose = document.querySelector('[data-lightbox-close]');
  const lightboxPrev = document.querySelector('[data-lightbox-prev]');
  const lightboxNext = document.querySelector('[data-lightbox-next]');

  let currentIndex = 0;
  let currentItems = [];

  const openLightbox = (index, items) => {
    currentIndex = index;
    currentItems = items;
    updateLightbox();
    lightbox?.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    lightbox?.classList.remove('is-open');
    document.body.style.overflow = '';
  };

  const updateLightbox = () => {
    if (!currentItems.length) return;
    const item = currentItems[currentIndex];
    if (lightboxImg) {
      lightboxImg.src = item.url;
      lightboxImg.alt = item.titulo;
    }
    if (lightboxCaption) {
      lightboxCaption.textContent = `${item.titulo} (${currentIndex + 1}/${currentItems.length})`;
    }
  };

  const nextSlide = () => {
    currentIndex = (currentIndex + 1) % currentItems.length;
    updateLightbox();
  };

  const prevSlide = () => {
    currentIndex = (currentIndex - 1 + currentItems.length) % currentItems.length;
    updateLightbox();
  };

  const attachLightbox = () => {
    const items = galleryContainer.querySelectorAll('.gallery-item');
    items.forEach((item, idx) => {
      item.addEventListener('click', () => {
        const allItems = Array.from(items).map(i => {
          const img = i.querySelector('img');
          const cap = i.querySelector('p');
          return {
            url: img.src,
            titulo: cap ? cap.textContent : 'Imagen'
          };
        });
        openLightbox(idx, allItems);
      });
    });
  };

  /* ============================================
     3. RENDERIZAR GALERÍA
     ============================================ */
  const renderGallery = (filter = 'todas') => {
    const items = filter === 'todas' ? GALERIA : GALERIA.filter(g => g.categoria === filter);

    galleryContainer.innerHTML = items.map((item, i) => `
      <div class="gallery-item animate-on-scroll" data-delay="${(i % 6) * 80}" data-category="${item.categoria}">
        <img src="${item.url}" alt="${item.titulo}" loading="lazy" class="w-full h-72 object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4 pointer-events-none">
          <div>
            <p class="text-white font-semibold">${item.titulo}</p>
            <p class="text-white/80 text-sm capitalize">${item.categoria}</p>
          </div>
        </div>
      </div>
    `).join('');

    // Re-attach lightbox handlers (el observer detectará los nuevos items)
    attachLightbox();
  };

  // Render inicial
  renderGallery();

  /* ============================================
     4. FILTROS
     ============================================ */
  if (filtersContainer) {
    filtersContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-filter]');
      if (!btn) return;

      filtersContainer.querySelectorAll('[data-filter]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      renderGallery(btn.dataset.filter);
    });
  }

  /* ============================================
     5. LIGHTBOX - Event listeners
     ============================================ */
  lightboxClose?.addEventListener('click', closeLightbox);
  lightboxPrev?.addEventListener('click', prevSlide);
  lightboxNext?.addEventListener('click', nextSlide);

  lightbox?.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox?.classList.contains('is-open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
  });

});