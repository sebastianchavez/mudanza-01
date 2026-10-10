# Mudanzas Express — Landing Page Template

Template HTML estático multi-página para una empresa de mudanzas. Construido con Tailwind CSS (vía CDN) y JavaScript nativo, sin build step. Datos mockeados en pesos chilenos (CLP).

## Características

- 9 páginas HTML completas + 404
- 100% responsive (mobile-first)
- Animaciones de entrada con `IntersectionObserver`
- Contadores animados
- Galería con filtros y lightbox
- Formulario de contacto con validación
- Calculadora de presupuesto interactiva
- Datos mockeados centralizados (fáciles de editar)
- Botón flotante de WhatsApp
- Paleta azul/naranja (asociada a confianza + energía)
- SEO básico (títulos, descripciones, OpenGraph)

## Páginas

| Archivo | Descripción |
|---|---|
| `index.html` | Inicio: hero, stats, servicios, proceso, galería preview, testimonios, CTA |
| `nosotros.html` | Historia, equipo, misión/visión, valores, certificaciones |
| `servicios.html` | Listado completo de servicios + proceso |
| `galeria.html` | Galería con filtros por categoría + lightbox |
| `precios.html` | 3 planes, tabla comparativa, precios individuales, calculadora, FAQ |
| `contacto.html` | Formulario + datos + horarios + FAQ + mapa de Google |
| `privacidad.html` | Política de privacidad |
| `terminos.html` | Términos y condiciones |
| `404.html` | Página de error |

## Estructura de carpetas

```
mudanza-01/
├── index.html
├── nosotros.html
├── servicios.html
├── galeria.html
├── precios.html
├── contacto.html
├── privacidad.html
├── terminos.html
├── 404.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   ├── data.js          # 👈 Toda la info mockeada (editá aquí)
│   │   ├── main.js          # Nav, animaciones, navbar, mobile menu
│   │   ├── gallery.js       # Filtros + lightbox de galería
│   │   ├── precios.js       # Calculadora de presupuesto interactiva
│   │   └── contact.js       # Validación del formulario de contacto
│   └── img/
└── README.md
```

## Cómo usar

### Opción 1: Abrir directamente

Simplemente abrí `index.html` en tu navegador. No hay build process.

### Opción 2: Servidor local (recomendado)

Algunos navegadores bloquean recursos cuando se sirve con `file://`. Para mejor performance y evitar warnings de CORS:

```bash
# Python 3
python -m http.server 8080

# Node.js (con npx)
npx serve .

# PHP
php -S localhost:8080
```

Luego abrí `http://localhost:8080` en tu navegador.

## Personalización

### 1. Datos del negocio

Toda la información del sitio está centralizada en `assets/js/data.js`. Editá el objeto `EMPRESA` con tus datos:

```js
const EMPRESA = {
  nombre: "Mudanzas Express",
  telefono: "+56 2 2345 6789",
  whatsapp: "+56 9 1234 5678",
  email: "info@mudanzasexpress.cl",
  direccion: "Av. Apoquindo 4711, Las Condes, Santiago, Chile",
  horarios: {
    lunes: "8:00 - 20:00",
    // ...
  },
  redes: {
    facebook: "...",
    instagram: "...",
    // ...
  },
  // ... coordenadas, fundación, rating, etc.
};
```

Hay un helper `formatCLP(num)` para formatear precios en pesos chilenos.

### 2. Cambiar colores

Los colores principales son `brand` (azules) y `accent` (naranjas). Para cambiar la paleta:

**Opción A:** Reemplazar las clases de Tailwind en todos los HTMLs (buscar y reemplazar).

**Opción B:** Configurar `tailwind.config` al inicio de cada HTML:

```js
tailwind.config = {
  theme: {
    extend: {
      colors: {
        brand: {
          500: '#tu-azul',
          700: '#tu-azul-oscuro',
        },
        accent: {
          500: '#tu-naranja',
          700: '#tu-naranja-oscuro',
        }
      }
    }
  }
};
```

### 3. Imágenes

Las imágenes del template vienen de Unsplash como placeholders. Reemplazalas con tus propias imágenes:

- Editá los `src="https://images.unsplash.com/..."` en cada HTML
- O agregá imágenes locales en `assets/img/` y referenciá con `assets/img/tu-imagen.jpg`

## Stack técnico

- **HTML5** semántico
- **Tailwind CSS 3** (vía CDN, no requiere build)
- **JavaScript** nativo (sin frameworks ni librerías)
- **Google Fonts:** Inter
- **Iconos:** Lucide (vía CDN)
- **Imágenes:** Unsplash (placeholders)

## Animaciones incluidas

- Fade-in al hacer scroll (`IntersectionObserver`)
- Slide-in desde izquierda/derecha
- Contadores numéricos animados
- Botones con efecto hover/ripple
- Galería con hover scale + overlay
- Lightbox modal con fade
- Cards con hover lift
- Menú móvil animado
- Pulso en botón WhatsApp
- Decoraciones SVG en hero (cajas, flechas)

## Compatibilidad

- Chrome / Edge / Firefox / Safari (últimas 2 versiones)
- iOS Safari 12+
- Soporta `prefers-reduced-motion`

## Notas legales

⚠️ El template incluye **política de privacidad** y **términos y condiciones** con contenido de ejemplo. Antes de publicar el sitio en producción:

1. Hacé revisar el texto legal por un abogado
2. Adaptá las cláusulas a tu situación particular
3. Verificá el cumplimiento de la normativa aplicable (Ley 19.628 sobre Protección de Datos Personales en Chile, RGPD si aplica, etc.)
4. Actualizá la fecha de "Última actualización"

## Licencia

Template de uso libre. Imágenes de Unsplash sujetas a su propia licencia.