# OLEOSERVI — Landing Page Corporativa

Landing page corporativa de **OLEOSERVI, C.A.** (RIF J-29515626-0), empresa especializada en oleohidráulica, suministro de lubricantes industriales, mantenimiento de maquinaria pesada y asistencia técnica. Ubicada en la región de Guayana, Puerto Ordaz, Estado Bolívar, Venezuela.

Este sitio web institucional presenta los servicios principales de la empresa de forma clara y profesional, orientado al sector B2B (business-to-business).

## Enlace al Sitio

🔗 [https://www.oleoservi.com](https://www.oleoservi.com)

## Stack Tecnológico

| Tecnología | Versión | Descripción |
|---|---|---|
| React | ^19.2.4 | Biblioteca de interfaces de usuario |
| Vite | ^8.0.4 | Herramienta de build y desarrollo |
| Tailwind CSS | ^3.4.19 | Framework de utilidades CSS |
| lucide-react | ^1.8.0 | Librería de iconos |
| gh-pages | ^6.3.0 | Deploy a GitHub Pages |

## Requisitos

- **Node.js** ≥ 22
- **npm** (incluido con Node.js)

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/usuario/Oleoservi.git

# Navegar al directorio del proyecto
cd Oleoservi

# Instalar dependencias
npm install
```

## Scripts

| Script | Comando | Descripción |
|---|---|---|
| `dev` | `vite` | Inicia el servidor de desarrollo local con hot-reload |
| `build` | `vite build` | Genera la versión de producción en `dist/` |
| `lint` | `eslint .` | Ejecuta el linter (ESLint) para verificar código |
| `preview` | `vite preview` | Previsualiza la versión de producción localmente |
| `predeploy` | `npm run build` | Ejecuta automáticamente antes de `deploy` |
| `deploy` | `gh-pages -d dist` | Despliega el contenido de `dist/` a la rama `gh-pages` |

## Estructura del Proyecto

```
Oleoservi/
├── public/
│   └── CNAME
├── src/
│   ├── assets/
│   │   ├── logo.webp
│   │   └── repuesto.webp
│   ├── components/
│   │   ├── Card.jsx
│   │   ├── Footer.jsx
│   │   ├── NavBar.jsx
│   │   ├── Section.jsx
│   │   └── Services.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── LICENSE
├── README.md
├── package.json
├── vite.config.js
└── ...
```

## Despliegue

El proyecto se despliega en **GitHub Pages** siguiendo el siguiente flujo:

1. Ejecutar `npm run deploy`.
2. El script `predeploy` ejecuta automáticamente `npm run build`, generando los archivos estáticos en `dist/`.
3. El paquete `gh-pages` sube el contenido de `dist/` a la rama `gh-pages` del repositorio.
4. GitHub Pages sirve el sitio desde la rama `gh-pages`.
5. El dominio `www.oleoservi.com` se gestiona mediante el archivo `CNAME` y se encuentra protegido tras **Cloudflare**.

## Contacto de la Empresa

| Campo | Información |
|---|---|
| **Empresa** | OLEOSERVI, C.A. |
| **RIF** | J-29515626-0 |
| **Dirección** | Zona Industrial 321, Calle 7, Manzana 2, Parcela 11-01, Puerto Ordaz, Edo. Bolívar |
| **Teléfono / WhatsApp** | +58 424-9037642 |
| **Correo Electrónico** | nestorvillegas@oleoservi.com |

## Servicios

El sitio web presenta los siguientes servicios principales de OLEOSERVI:

- **Mantenimiento de Maquinaria** — Servicio de mantenimiento preventivo y correctivo para maquinaria pesada.
- **Suministro de Lubricantes** — Proveeduría de lubricantes industriales de alta calidad.
- **Asistencia Técnica** — Soporte técnico especializado para equipos oleohidráulicos.
- **Soluciones en Oleohidráulica** — Diseño, fabricación e implementación de sistemas oleohidráulicos.

## Licencia

Este proyecto está licenciado bajo la **GNU General Public License v3.0 (GPL-3.0)**.

Consulte el archivo [LICENSE](LICENSE) para obtener más detalles sobre los términos y condiciones.