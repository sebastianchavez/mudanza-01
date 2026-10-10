/* =========================================
   PRECIOS.JS - Calculadora y FAQ
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ============================================
     1. RENDERIZAR PLANES
     ============================================ */
  const planesContainer = document.querySelector('[data-render="planes"]');
  if (planesContainer && typeof PLANES !== 'undefined') {
    planesContainer.innerHTML = PLANES.map((p, i) => `
      <div class="animate-on-scroll relative bg-white rounded-2xl shadow-xl p-8 ${p.destacado ? 'ring-4 ring-orange-400 scale-105 md:scale-110' : ''}" data-delay="${i * 100}">
        ${p.destacado ? `
          <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
            Más popular
          </div>
        ` : ''}
        <div class="text-center mb-6">
          <div class="w-16 h-16 mx-auto bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
            <i data-lucide="${p.icono}" class="w-8 h-8 text-blue-700"></i>
          </div>
          <h3 class="text-2xl font-bold text-gray-900 mb-2">${p.nombre}</h3>
          <p class="text-gray-600 text-sm">${p.descripcion}</p>
        </div>
        <div class="text-center mb-6 pb-6 border-b border-gray-100">
          <div class="flex items-baseline justify-center gap-1">
            <span class="text-5xl font-bold text-blue-700">${formatCLP(p.precio)}</span>
          </div>
          <span class="text-gray-500 text-sm">IVA incluido</span>
        </div>
        <ul class="space-y-3 mb-8">
          ${p.caracteristicas.map(c => `
            <li class="flex items-start gap-2 text-sm">
              ${c.incluido
                ? '<i data-lucide="check-circle-2" class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"></i>'
                : '<i data-lucide="x-circle" class="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5"></i>'
              }
              <span class="${c.incluido ? 'text-gray-700' : 'text-gray-400 line-through'}">${c.texto}</span>
            </li>
          `).join('')}
        </ul>
        <a href="contacto.html?plan=${p.nombre.toLowerCase()}" class="block text-center ${p.destacado ? 'btn-primary' : 'btn-outline'} w-full">
          Solicitar ${p.nombre}
        </a>
      </div>
    `).join('');
  }

  /* ============================================
     2. RENDERIZAR FAQ
     ============================================ */
  const faqContainer = document.querySelector('[data-render="faq"]');
  if (faqContainer && typeof FAQ !== 'undefined') {
    faqContainer.innerHTML = FAQ.map((f, i) => `
      <div class="faq-item ${i === 0 ? 'is-open' : ''}">
        <button class="faq-button" data-faq-toggle>
          <span>${f.pregunta}</span>
          <i data-lucide="chevron-down" class="icon w-5 h-5"></i>
        </button>
        <div class="faq-content">
          <p>${f.respuesta}</p>
        </div>
      </div>
    `).join('');

    // FAQ accordion logic
    faqContainer.querySelectorAll('[data-faq-toggle]').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.closest('.faq-item');
        const wasOpen = item.classList.contains('is-open');
        // Cerrar todos
        faqContainer.querySelectorAll('.faq-item').forEach(i => i.classList.remove('is-open'));
        // Abrir el actual si estaba cerrado
        if (!wasOpen) item.classList.add('is-open');
      });
    });
  }

  /* ============================================
     3. CALCULADORA RÁPIDA
     ============================================ */
  const calcForm = document.querySelector('[data-calc-form]');
  const calcResult = document.querySelector('[data-calc-result]');

  if (calcForm && calcResult) {
    calcForm.addEventListener('input', () => {
      const tipo = calcForm.querySelector('[name="tipo"]').value;
      const metros = parseInt(calcForm.querySelector('[name="metros"]').value) || 0;
      const distancia = parseInt(calcForm.querySelector('[name="distancia"]').value) || 0;
      const piso = parseInt(calcForm.querySelector('[name="piso"]').value) || 0;

      if (!tipo || metros === 0) {
        calcResult.textContent = '—';
        calcResult.classList.add('text-gray-400');
        calcResult.classList.remove('text-blue-700');
        return;
      }

      // Lógica mock (solo demo) - valores en CLP
      const basePorTipo = {
        departamento: 89900,
        casa: 199900,
        oficina: 399900
      };

      const base = basePorTipo[tipo] || 89900;
      const factorM2 = metros * 1500;
      const factorDist = distancia * 800;
      const factorPiso = piso > 1 ? (piso - 1) * 15000 : 0;

      const total = Math.round(base + factorM2 + factorDist + factorPiso);

      calcResult.textContent = formatCLP(total);
      calcResult.classList.remove('text-gray-400');
      calcResult.classList.add('text-blue-700');
    });
  }

  // Re-render lucide icons después de los renders dinámicos
  setTimeout(() => {
    if (window.lucide) window.lucide.createIcons();
  }, 50);

});