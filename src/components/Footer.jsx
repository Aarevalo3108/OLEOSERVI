import { MapPin, Phone, Mail } from 'lucide-react';
import logo from '../assets/logo.webp';

// Clase común de foco visible para enlaces del footer
const claseEnlace =
  'text-n3 hover:text-n4 transition-colors focus-visible:ring-2 focus-visible:ring-n4 focus-visible:outline-none';

const Footer = () => {
  return (
          <footer id="contacto" className="bg-n2 text-n5 pt-16 pb-8 border-t-8 border-n4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

            {/* Logo y Descripción */}
            <div>
              {/* Dimensiones intrínsecas reales del webp (342x204) para evitar layout shift */}
              <img src={logo} alt="Oleoservi" width={342} height={204} className="h-16 w-auto bg-n5 p-2 rounded mb-4" />
              <p className="text-n3 mt-4 text-sm">
                Oleohidráulica y Servicios. Soluciones integrales para la industria y maquinaria pesada en el Estado Bolívar.
              </p>
              <p className="text-n3 mt-2 text-sm font-bold tracking-widest">RIF: J-29515626-0</p>
            </div>

            {/* Enlaces Rápidos */}
            <div>
              <h3 className="text-lg font-bold mb-4 border-b border-n3 pb-2 inline-block">Enlaces</h3>
              <ul className="space-y-2">
                <li><a href="#inicio" className={claseEnlace}>Inicio</a></li>
                <li><a href="#servicios" className={claseEnlace}>Nuestros Servicios</a></li>
                <li><a href="#nosotros" className={claseEnlace}>Perfil de Empresa</a></li>
              </ul>
            </div>

            {/* Información de Contacto */}
            <div>
              <h3 className="text-lg font-bold mb-4 border-b border-n3 pb-2 inline-block">Contacto</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-n4 mr-3 flex-shrink-0 mt-1" aria-hidden="true" />
                  <span className="text-n3 text-sm break-words">
                    Zona industrial 321, Calle 7 Manzana 2, Parcela 11-01. Puerto Ordaz, Edo. Bolívar.
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 text-n4 mr-3 flex-shrink-0" aria-hidden="true" />
                  <a href="tel:+584249037642" className="text-n3 text-sm hover:text-n4 transition-colors focus-visible:ring-2 focus-visible:ring-n4 focus-visible:outline-none">
                    +58 424-9037642
                  </a>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 text-n4 mr-3 flex-shrink-0" aria-hidden="true" />
                  <a href="mailto:nestorvillegas@oleoservi.com" className="text-n3 text-sm hover:text-n4 transition-colors focus-visible:ring-2 focus-visible:ring-n4 focus-visible:outline-none">
                    nestorvillegas@oleoservi.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-n3 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-n3">
            <p> {new Date().getFullYear()} Oleoservi, C.A. Todos los derechos reservados.</p>
            <p className="mt-2 md:mt-0">Desarrollado para la industria de Guayana por Ángel Arévalo.</p>
          </div>
        </div>
      </footer>
  )};

export default Footer
