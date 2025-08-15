# 🚀 Francisco Gonzalez (Pacho) - Modern Portfolio

## 📋 Descripción

Portfolio moderno y responsivo desarrollado con **React + Vite + Tailwind CSS** que presenta mi experiencia como Desarrollador WordPress con más de 12 años en el desarrollo web. El sitio está diseñado como una Single Page Application (SPA) con un tema oscuro elegante y animaciones fluidas.

## ✨ Características Principales

### 🎨 **Diseño Moderno**
- Tema oscuro elegante con acentos cyan (#06B6D4)
- Diseño completamente responsivo (mobile-first)
- Animaciones suaves con AOS (Animate On Scroll)
- Tipografía moderna con Inter font

### 🧩 **Secciones Principales**
1. **Hero Section** - Presentación impactante con CTA principal
2. **Services** - Especialidad en migración de sitios estáticos a WordPress/ReactJS
3. **Skills** - Habilidades técnicas e interpersonales con barras de progreso
4. **Projects** - Portfolio de proyectos destacados con enlaces
5. **About** - Historia profesional y valores
6. **Contact** - Formulario integrado con WhatsApp
7. **Footer** - Información de contacto y enlaces sociales

### 🛠 **Tecnologías Utilizadas**
- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Animations:** AOS (Animate On Scroll)
- **Icons:** Lucide React
- **Deployment:** Compatible con Netlify, Vercel, GitHub Pages

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone [URL_DEL_REPOSITORIO]

# Navegar al directorio
cd pacho-portfolio-react

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build
```

### Scripts Disponibles
- `npm run dev` - Inicia el servidor de desarrollo en puerto 3000
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Vista previa de la build de producción
- `npm run lint` - Ejecuta ESLint para revisar el código

## 📱 Funcionalidades Especiales

### 💬 **Integración WhatsApp**
- Formulario de contacto que abre WhatsApp con mensaje pre-formateado
- Enlaces directos a WhatsApp desde múltiples secciones
- Tiempo de respuesta garantizado (24 horas)

### 🎯 **CTA Estratégicos**
- **Primario:** "Transforma Tu Sitio Estático" (Hero → Contact)
- **Secundario:** "Hablemos de Tu Proyecto" (Services → Contact)
- Enlaces de navegación suave entre secciones

### 📊 **Métricas de Rendimiento**
- Optimizado para velocidad de carga
- Imágenes optimizadas y lazy loading
- Código minificado en producción
- SEO friendly con meta tags apropiados

## 🎨 Sistema de Diseño

### Colores Principales
```css
/* Primario (Cyan) */
--primary-50: #ecfeff
--primary-500: #06b6d4
--primary-600: #0891b2

/* Fondo (Slate) */
--slate-900: #0f172a
--slate-800: #1e293b
--slate-700: #334155
```

### Componentes Reutilizables
- **Buttons:** `.btn-primary`, `.btn-secondary`
- **Cards:** `.card-hover` con efectos de transformación
- **Containers:** `.section-container`, `.section-padding`
- **Text:** `.gradient-text` para texto con gradiente

## 📂 Estructura del Proyecto

```
src/
├── components/
│   ├── Hero.jsx          # Sección principal con presentación
│   ├── Services.jsx      # Servicios y especialidades
│   ├── Skills.jsx        # Habilidades técnicas e interpersonales
│   ├── Projects.jsx      # Portfolio de proyectos
│   ├── About.jsx         # Información personal y profesional
│   ├── Contact.jsx       # Formulario de contacto
│   └── Footer.jsx        # Pie de página
├── App.jsx               # Componente principal
├── main.jsx              # Punto de entrada de React
└── index.css             # Estilos globales con Tailwind
```

## 🌟 Proyectos Destacados

### Featured Projects
1. **Grupo Experto Logístico ENMA** - WordPress con ACF Pro
2. **LOCI** - Portal multilingüe de logística internacional
3. **TCA Software Solutions** - Portal corporativo con Elementor
4. **UANL** - Portal universitario institucional
5. **Dosachi eCommerce** - Tienda WooCommerce
6. **Trading UI/UX Concept** - Diseño en Figma

## 📞 Información de Contacto

- **Nombre:** Francisco Gonzalez (Pacho)
- **Ubicación:** Monterrey, Nuevo León, México
- **Email:** pachogzz@gmail.com
- **Teléfono/WhatsApp:** +52 (811) 918-4632
- **LinkedIn:** [linkedin.com/in/pachogzz](https://linkedin.com/in/pachogzz)
- **GitHub:** [github.com/pachogzz](https://github.com/pachogzz)

## 🎯 Especialidades

### Migración de Sitios Web
Experto en convertir sitios estáticos HTML/CSS en:
- **WordPress:** Themes personalizados, ACF Pro, Elementor
- **ReactJS:** SPAs modernas con mejor rendimiento
- **Mantenimiento:** Del diseño original con funcionalidad administrable

### Stack Técnico
- **CMS:** WordPress, WooCommerce, Elementor, ACF Pro
- **Frontend:** HTML5, CSS3, JavaScript (ES6), React, jQuery
- **CSS Frameworks:** Bootstrap, Tailwind CSS
- **Backend:** PHP, MySQL
- **Tools:** Git, GitHub, Figma, Adobe Creative Suite

## 📈 Experiencia

- **12+ años** en desarrollo web completo
- **8+ años** especializándose en WordPress
- **100+ proyectos** completados exitosamente
- **Formación:** Diseño Gráfico + Desarrollo autodidacta

## 🚀 Deployment

### Netlify (Recomendado)
```bash
# Build del proyecto
npm run build

# Subir carpeta 'dist' a Netlify
# Configurar redirects para SPA en netlify.toml
```

### GitHub Pages
```bash
# Instalar gh-pages
npm install --save-dev gh-pages

# Agregar script de deploy
# "deploy": "gh-pages -d dist"

# Deploy
npm run build && npm run deploy
```

## 📄 Licencia

© 2024 Francisco Gonzalez (Pacho). Todos los derechos reservados.

---

**Desarrollado con ❤️ en Monterrey, México**

¿Interesado en trabajar juntos? [¡Hablemos por WhatsApp!](https://wa.me/5281191846320?text=Hola%20Pacho!%20Me%20interesa%20trabajar%20contigo.)
