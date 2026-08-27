# NEXO Arquitectura + Diseño — Evaluación Final

Sitio institucional estático con 5 páginas:
- Inicio
- Nosotros
- Servicios
- Proyectos
- Contacto

## Tecnologías
HTML5 semántico, SASS, Bootstrap 5, AOS, JavaScript.

## SASS
La arquitectura SASS utiliza:
- variables
- partials
- nesting
- mixins
- @extend
- @use

## Compilar
```bash
npm install
npm run build
```

## Desarrollo
```bash
npm run watch
```

## Requisitos cubiertos
- 5 HTML con contenido distinto
- Solo index.html en raíz
- Navegación completa en todas las páginas
- Bootstrap personalizado
- Animaciones AOS + animaciones CSS
- SEO básico y accesibilidad
- Responsive desktop / tablet / mobile
- Imágenes WebP optimizadas
- robots.txt y sitemap.xml
- Preparado para GitHub y Netlify/Vercel

## Antes de publicar
Reemplazar https://example.com en:
- canonical
- Open Graph
- robots.txt
- sitemap.xml
por la URL real de Netlify/Vercel.
