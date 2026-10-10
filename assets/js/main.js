/* =========================================
   MAIN.JS - Funcionalidad compartida
   - Navbar (scroll, mobile menu, active link)
   - Animaciones on-scroll
   - Renderizado dinámico (servicios, equipo, etc.)
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ============================================
     1. NAVBAR SCROLL EFFECT
     ============================================ */
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  /* ============================================
     2. MOBILE MENU TOGGLE
     ============================================ */
  const menuBtn = document.querySelector('[data-menu-btn]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  const menuOverlay = document.querySelector('[data-menu-overlay]');
  const menuClose = document.querySelector('[data-menu-close]');

  const openMenu = () => {
    mobileMenu?.classList.add('is-open');
    menuOverlay?.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    mobileMenu?.classList.remove('is-open');
    menuOverlay?.classList.remove('is-open');
    document.body.style.overflow = '';
  };

  menuBtn?.addEventListener('click', openMenu);
  menuClose?.addEventListener('click', closeMenu);
  menuOverlay?.addEventListener('click', closeMenu);

  // Cerrar al hacer click en un link
  document.querySelectorAll('[data-mobile-menu] a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  /* ============================================
     3. INTERSECTION OBSERVER (animaciones)
     - Soporta contenido estático Y dinámico (renderizado por JS)
     - Progressive enhancement: si JS falla, todo es visible
     - Respeta prefers-reduced-motion
     ============================================ */
  const setupScrollAnimations = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!('IntersectionObserver' in window) || prefersReducedMotion) {
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        el.classList.remove('is-pending');
        el.classList.add('is-visible');
      });
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = parseInt(entry.target.dataset.delay) || 0;
          setTimeout(() => {
            entry.target.classList.remove('is-pending');
            entry.target.classList.add('is-visible');
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -30px 0px' });

    const observeNew = () => {
        document.querySelectorAll('.animate-on-scroll:not(.is-observed)').forEach(el => {
          el.classList.add('is-pending');
          el.classList.add('is-observed');
          observer.observe(el);
        });
      };

    // Inicial
    observeNew();

    // Capturar contenido añadido dinámicamente (servicios, equipo, galería, etc.)
    const mutationObserver = new MutationObserver(observeNew);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    // Fallback de seguridad: si tras 3s algo quedó pendiente, mostrarlo
    setTimeout(() => {
      document.querySelectorAll('.animate-on-scroll.is-pending').forEach(el => {
        el.classList.remove('is-pending');
        el.classList.add('is-visible');
      });
    }, 3000);
  };

  setupScrollAnimations();

  /* ============================================
     4. RENDERIZADO DINÁMICO
     ============================================ */

  // Renderizar servicios destacados (home)
  const serviciosContainer = document.querySelector('[data-render="servicios-destacados"]');
  if (serviciosContainer && typeof SERVICIOS !== 'undefined') {
    serviciosContainer.innerHTML = SERVICIOS.slice(0, 4).map((s, i) => `
      <div class="animate-on-scroll bg-white rounded-xl shadow-lg overflow-hidden card-hover" data-delay="${i * 100}">
        <div class="h-48 overflow-hidden">
          <img src="${s.imagen}" alt="${s.titulo}" class="w-full h-full object-cover" loading="lazy">
        </div>
        <div class="p-6">
          <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
            <i data-lucide="${s.icono}" class="w-6 h-6 text-orange-500"></i>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">${s.titulo}</h3>
          <p class="text-gray-600 mb-4">${s.resumen}</p>
          <div class="flex items-center justify-between">
            <span class="text-sm text-gray-500">Desde <strong class="text-blue-700">${formatCLP(s.desde)}</strong></span>
            <a href="servicios.html#${s.id}" class="text-orange-500 font-semibold text-sm hover:text-orange-600 inline-flex items-center gap-1">
              Ver más <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </a>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Renderizar servicios completos (servicios.html)
  const serviciosAllContainer = document.querySelector('[data-render="servicios-all"]');
  if (serviciosAllContainer && typeof SERVICIOS !== 'undefined') {
    serviciosAllContainer.innerHTML = SERVICIOS.map((s, i) => `
      <article id="${s.id}" class="animate-on-scroll grid md:grid-cols-2 gap-8 items-center bg-white rounded-2xl shadow-lg overflow-hidden ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}" data-delay="${(i % 2) * 150}">
        <div class="${i % 2 === 1 ? 'md:order-2' : ''}">
          <img src="${s.imagen}" alt="${s.titulo}" class="w-full h-72 md:h-96 object-cover" loading="lazy">
        </div>
        <div class="p-6 md:p-10 ${i % 2 === 1 ? 'md:order-1' : ''}">
          <div class="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-semibold mb-4">
            <i data-lucide="${s.icono}" class="w-4 h-4"></i>
            Servicio
          </div>
          <h2 class="text-3xl font-bold text-gray-900 mb-3">${s.titulo}</h2>
          <p class="text-gray-600 mb-6">${s.descripcion}</p>
          <ul class="space-y-2 mb-6">
            ${s.incluye.map(item => `
              <li class="flex items-start gap-2 text-gray-700">
                <i data-lucide="check" class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"></i>
                <span>${item}</span>
              </li>
            `).join('')}
          </ul>
          <div class="flex items-center justify-between flex-wrap gap-4 pt-4 border-t border-gray-100">
            <div>
              <span class="text-sm text-gray-500">Desde</span>
              <div class="text-3xl font-bold text-blue-700">${formatCLP(s.desde)}</div>
            </div>
            <a href="contacto.html?servicio=${s.id}" class="btn-primary">
              Solicitar presupuesto
              <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </a>
          </div>
        </div>
      </article>
    `).join('');
  }

  // Renderizar ventajas
  const ventajasContainer = document.querySelector('[data-render="ventajas"]');
  if (ventajasContainer && typeof VENTAJAS !== 'undefined') {
    ventajasContainer.innerHTML = VENTAJAS.map((v, i) => `
      <div class="animate-on-scroll text-center p-6" data-delay="${i * 80}">
        <div class="w-16 h-16 mx-auto bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
          <i data-lucide="${v.icono}" class="w-8 h-8 text-blue-700"></i>
        </div>
        <h3 class="text-xl font-bold text-gray-900 mb-2">${v.titulo}</h3>
        <p class="text-gray-600">${v.texto}</p>
      </div>
    `).join('');
  }

  // Renderizar estadísticas
  const statsContainer = document.querySelector('[data-render="estadisticas"]');
  if (statsContainer && typeof ESTADISTICAS !== 'undefined') {
    statsContainer.innerHTML = ESTADISTICAS.map((s, i) => `
      <div class="animate-on-scroll text-center text-white" data-delay="${i * 100}">
        <div class="text-5xl md:text-6xl font-bold mb-2">${s.numero}</div>
        <div class="text-blue-100 text-lg">${s.etiqueta}</div>
      </div>
    `).join('');
  }

  // Renderizar testimonios
  const testimoniosContainer = document.querySelector('[data-render="testimonios"]');
  if (testimoniosContainer && typeof TESTIMONIOS !== 'undefined') {
    const stars = n => Array(n).fill('<i data-lucide="star" class="w-5 h-5 fill-current"></i>').join('');
    testimoniosContainer.innerHTML = `
      <div class="overflow-hidden">
        <div class="testimonial-track" data-testimonial-track>
          ${TESTIMONIOS.map(t => `
            <div class="testimonial-slide">
              <div class="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
                <div class="flex items-center gap-1 text-yellow-400 justify-center mb-4">${stars(t.estrellas)}</div>
                <i data-lucide="quote" class="w-10 h-10 text-orange-400 mx-auto mb-4"></i>
                <p class="text-gray-700 text-lg md:text-xl text-center italic mb-6">"${t.texto}"</p>
                <div class="flex items-center justify-center gap-4">
                  <img src="${t.foto}" alt="${t.nombre}" class="w-14 h-14 rounded-full object-cover">
                  <div>
                    <div class="font-bold text-gray-900">${t.nombre}</div>
                    <div class="text-sm text-gray-500">${t.ciudad}</div>
                  </div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
      <div class="flex justify-center gap-2 mt-8" data-testimonial-dots></div>
    `;

    // Lógica del carrusel
    const track = testimoniosContainer.querySelector('[data-testimonial-track]');
    const dotsContainer = testimoniosContainer.querySelector('[data-testimonial-dots]');
    let currentSlide = 0;
    const totalSlides = TESTIMONIOS.length;

    // Crear dots
    dotsContainer.innerHTML = TESTIMONIOS.map((_, i) => `
      <button class="w-3 h-3 rounded-full transition-all ${i === 0 ? 'bg-orange-500 w-8' : 'bg-gray-300'}" data-slide="${i}" aria-label="Testimonio ${i + 1}"></button>
    `).join('');

    const dots = dotsContainer.querySelectorAll('button');
    const goToSlide = (n) => {
      currentSlide = (n + totalSlides) % totalSlides;
      track.style.transform = `translateX(-${currentSlide * 100}%)`;
      dots.forEach((d, i) => {
        d.classList.toggle('bg-orange-500', i === currentSlide);
        d.classList.toggle('w-8', i === currentSlide);
        d.classList.toggle('bg-gray-300', i !== currentSlide);
      });
    };

    dots.forEach((dot, i) => dot.addEventListener('click', () => goToSlide(i)));

    // Auto-play
    let autoplay = setInterval(() => goToSlide(currentSlide + 1), 6000);
    testimoniosContainer.addEventListener('mouseenter', () => clearInterval(autoplay));
    testimoniosContainer.addEventListener('mouseleave', () => {
      autoplay = setInterval(() => goToSlide(currentSlide + 1), 6000);
    });
  }

  // Renderizar equipo
  const equipoContainer = document.querySelector('[data-render="equipo"]');
  if (equipoContainer && typeof EQUIPO !== 'undefined') {
    equipoContainer.innerHTML = EQUIPO.map((m, i) => `
      <div class="animate-on-scroll bg-white rounded-xl shadow-lg overflow-hidden card-hover text-center" data-delay="${i * 100}">
        <div class="aspect-square overflow-hidden bg-gray-100">
          <img src="${m.foto}" alt="${m.nombre}" class="w-full h-full object-cover hover:scale-110 transition-transform duration-500" loading="lazy">
        </div>
        <div class="p-6">
          <h3 class="text-xl font-bold text-gray-900">${m.nombre}</h3>
          <p class="text-orange-500 font-semibold text-sm mb-3">${m.cargo}</p>
          <p class="text-gray-600 text-sm">${m.bio}</p>
        </div>
      </div>
    `).join('');
  }

  // Renderizar horarios
  const horariosContainer = document.querySelector('[data-render="horarios"]');
  if (horariosContainer && typeof EMPRESA !== 'undefined') {
    const dias = [
      { key: 'lunes', label: 'Lunes' },
      { key: 'martes', label: 'Martes' },
      { key: 'miercoles', label: 'Miércoles' },
      { key: 'jueves', label: 'Jueves' },
      { key: 'viernes', label: 'Viernes' },
      { key: 'sabado', label: 'Sábado' },
      { key: 'domingo', label: 'Domingo' }
    ];
    horariosContainer.innerHTML = dias.map((d, i) => {
      const hora = EMPRESA.horarios[d.key];
      const cerrado = hora.toLowerCase().includes('cerrado');
      return `
        <div class="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
          <span class="font-medium text-gray-700">${d.label}</span>
          <span class="${cerrado ? 'text-red-500' : 'text-green-600 font-semibold'}">${hora}</span>
        </div>
      `;
    }).join('');
  }

  /* ============================================
     5. PRELOADER DE ICONOS LUCIDE
     ============================================ */
  if (window.lucide) {
    window.lucide.createIcons();
  }

  /* ============================================
     5.1. WHATSAPP FLOAT - LINK DINÁMICO
     ============================================ */
  if (typeof EMPRESA !== 'undefined' && EMPRESA.whatsappLink) {
    const waBtn = document.querySelector('.whatsapp-float');
    if (waBtn) waBtn.href = EMPRESA.whatsappLink;
  }

  /* ============================================
     5.2. FALLBACK PARA IMÁGENES ROTAS
     ============================================ */
  const FALLBACK_IMG = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect fill="%23e5e7eb" width="400" height="300"/><text x="50%" y="50%" font-family="Arial" font-size="20" fill="%236b7280" text-anchor="middle" dy=".3em">Imagen no disponible</text></svg>';

  document.addEventListener('error', (e) => {
    if (e.target.tagName === 'IMG') {
      const img = e.target;
      if (img.dataset.fallbackApplied) return;
      img.dataset.fallbackApplied = '1';
      img.src = FALLBACK_IMG;
      img.alt = img.alt || 'Imagen no disponible';
    }
  }, true);

  /* ============================================
     6. AÑO AUTOMÁTICO EN FOOTER
     ============================================ */
  document.querySelectorAll('[data-year]').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

});

/* ============================================
   UTILIDAD: Smooth scroll a anchors
   ============================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#' || href.length < 2) return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});