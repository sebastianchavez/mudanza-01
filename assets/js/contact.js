/* =========================================
   CONTACT.JS - Validación y envío de contacto
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('[data-contact-form]');
  if (!form) return;

  /* ============================================
     1. PRE-LLENAR SERVICIO SI VIENE EN URL
     ============================================ */
  const urlParams = new URLSearchParams(window.location.search);
  const servicioParam = urlParams.get('servicio');
  if (servicioParam) {
    const select = form.querySelector('[name="servicio"]');
    if (select) {
      const option = Array.from(select.options).find(o => o.value === servicioParam);
      if (option) select.value = servicioParam;
    }
  }

  /* ============================================
     2. VALIDACIÓN
     ============================================ */
  const validators = {
    nombre: v => v.trim().length >= 3 || 'El nombre debe tener al menos 3 caracteres',
    email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || 'Email no válido',
    telefono: v => v.trim() === '' || /^[+\d\s()-]{9,}$/.test(v) || 'Teléfono no válido',
    servicio: v => v !== '' || 'Selecciona un servicio',
    mensaje: v => v.trim().length >= 10 || 'El mensaje debe tener al menos 10 caracteres',
    privacidad: v => v === true || 'Debes aceptar la política de privacidad'
  };

  const showError = (field, message) => {
    const input = form.querySelector(`[name="${field}"]`);
    const error = form.querySelector(`[data-error="${field}"]`);
    if (input) {
      input.classList.add('is-invalid');
    }
    if (error) {
      error.textContent = message;
      error.classList.add('is-visible');
    }
  };

  const clearError = (field) => {
    const input = form.querySelector(`[name="${field}"]`);
    const error = form.querySelector(`[data-error="${field}"]`);
    if (input) input.classList.remove('is-invalid');
    if (error) error.classList.remove('is-visible');
  };

  const validateForm = () => {
    let isValid = true;
    const formData = new FormData(form);

    for (const field in validators) {
      clearError(field);
      const input = form.querySelector(`[name="${field}"]`);
      const value = input.type === 'checkbox' ? input.checked : formData.get(field);
      const result = validators[field](value);
      if (result !== true) {
        showError(field, result);
        isValid = false;
      }
    }
    return isValid;
  };

  // Validación on-blur
  form.querySelectorAll('input, textarea, select').forEach(input => {
    input.addEventListener('blur', () => {
      const name = input.name;
      if (validators[name]) {
        clearError(name);
        const value = input.type === 'checkbox' ? input.checked : input.value;
        const result = validators[name](value);
        if (result !== true) showError(name, result);
      }
    });
    input.addEventListener('input', () => clearError(input.name));
  });

  /* ============================================
     3. ENVÍO SIMULADO
     ============================================ */
  const submitBtn = form.querySelector('[data-submit-btn]');
  const successMessage = form.querySelector('[data-success-message]');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!validateForm()) {
      // Scroll al primer error
      const firstError = form.querySelector('.is-invalid');
      firstError?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      firstError?.focus();
      return;
    }

    // Simular envío
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg class="animate-spin w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 3.97l2-1.679z"></path>
      </svg>
      Enviando...
    `;

    setTimeout(() => {
      // Éxito simulado
      form.reset();
      submitBtn.disabled = false;
      submitBtn.innerHTML = `
        <i data-lucide="send" class="w-4 h-4"></i>
        Enviar mensaje
      `;
      window.lucide?.createIcons();

      successMessage.classList.remove('hidden');
      successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });

      setTimeout(() => {
        successMessage.classList.add('hidden');
      }, 8000);
    }, 1500);
  });

});