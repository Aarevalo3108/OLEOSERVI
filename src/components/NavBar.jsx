import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.webp';

// Enlaces de navegación del sitio
const ENLACES = [
  { href: '#inicio', id: 'inicio', texto: 'Inicio' },
  { href: '#servicios', id: 'servicios', texto: 'Servicios' },
  { href: '#nosotros', id: 'nosotros', texto: 'Nosotros' },
  { href: '#contacto', id: 'contacto', texto: 'Contacto' },
];

const NavBar = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [seccionActiva, setSeccionActiva] = useState('inicio');
  const navRef = useRef(null);
  const botonRef = useRef(null);

  // Cierre del menú con la tecla Escape
  useEffect(() => {
    const manejarTecla = (e) => {
      if (e.key === 'Escape' && menuAbierto) {
        setMenuAbierto(false);
        botonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', manejarTecla);
    return () => document.removeEventListener('keydown', manejarTecla);
  }, [menuAbierto]);

  // Cierre del menú al hacer clic fuera del nav
  useEffect(() => {
    const manejarClic = (e) => {
      if (menuAbierto && navRef.current && !navRef.current.contains(e.target)) {
        setMenuAbierto(false);
      }
    };
    document.addEventListener('mousedown', manejarClic);
    return () => document.removeEventListener('mousedown', manejarClic);
  }, [menuAbierto]);

  // Marcar la sección visible como activa (aria-current="page")
  useEffect(() => {
    const secciones = ENLACES
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    if (secciones.length === 0) return;

    // rootMargin compensa el header sticky (h-24 = 6rem) para centrar la sección visible
    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            setSeccionActiva(entrada.target.id);
          }
        });
      },
      { threshold: 0.5, rootMargin: '-96px 0px -96px 0px' }
    );

    secciones.forEach((seccion) => observador.observe(seccion));
    return () => observador.disconnect();
  }, []);

  // Clases comunes de foco visible para accesibilidad por teclado
  const claseEnlace =
    'text-n1 hover:text-n4 font-bold transition-colors focus-visible:ring-2 focus-visible:ring-n4 focus-visible:outline-none';

  return (
    <nav ref={navRef} className="bg-n5 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-center md:justify-between">
          <div className="flex-shrink-0 flex items-center">
            {/* Dimensiones intrínsecas reales del webp (342x204) para evitar layout shift */}
            <img className="h-16 w-auto" src={logo} alt="Oleoservi C.A." width={342} height={204} />
          </div>

          {/* Botón hamburguesa: solo visible en pantallas < md (768px) */}
          <button
            ref={botonRef}
            type="button"
            onClick={() => setMenuAbierto((abierto) => !abierto)}
            aria-label={menuAbierto ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
            aria-expanded={menuAbierto}
            aria-controls="menu-principal"
            className="md:hidden absolute right-4 top-11 p-2 text-n1 hover:text-n4 transition-colors focus-visible:ring-2 focus-visible:ring-n4 focus-visible:outline-none"
          >
            {menuAbierto ? <X className="h-8 w-8" aria-hidden="true" /> : <Menu className="h-8 w-8" aria-hidden="true" />}
          </button>

          {/* Enlaces de escritorio */}
          <div className="hidden md:flex space-x-8">
            {ENLACES.map(({ href, id, texto }) => (
              <a
                key={id}
                href={href}
                aria-current={seccionActiva === id ? 'page' : undefined}
                className={claseEnlace}
              >
                {texto}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Panel del menú móvil */}
      {menuAbierto && (
        <div id="menu-principal" className="md:hidden border-t border-n3 bg-n5">
          <div className="px-4 py-4 space-y-2 flex flex-col">
            {ENLACES.map(({ href, id, texto }) => (
              <a
                key={id}
                href={href}
                onClick={() => setMenuAbierto(false)}
                aria-current={seccionActiva === id ? 'page' : undefined}
                className="block text-n1 hover:text-n4 font-bold transition-colors px-2 py-3 focus-visible:ring-2 focus-visible:ring-n4 focus-visible:outline-none"
              >
                {texto}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
