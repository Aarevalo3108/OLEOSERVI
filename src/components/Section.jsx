import repuesto from '../assets/repuesto.webp';
import { ChevronRight } from 'lucide-react';

const Section = () => {
  return (
      <section id="inicio" className="relative bg-n2 text-n5 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
              Soluciones Integrales en <span className="text-n4">Oleohidráulica</span> y Mantenimiento Industrial
            </h1>
            <p className="text-lg text-n3 mb-8 max-w-lg">
              Soporte técnico especializado y suministro de alta calidad para la industria pesada y talleres de alto rendimiento en Puerto Ordaz y toda la región de Guayana.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contacto" className="bg-n4 hover:bg-red-700 text-n5 font-bold py-3 px-8 rounded flex items-center justify-center transition-colors">
                Contactar Asesor <ChevronRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#servicios" className="border-2 border-n3 hover:border-n5 text-n5 font-bold py-3 px-8 rounded flex items-center justify-center transition-colors">
                Ver Servicios
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-n4 rounded-lg transform translate-x-4 translate-y-4 opacity-50"></div>
            <img 
              src={repuesto} 
              alt="Repuesto de Oleohidráulica" 
              className="relative rounded-lg shadow-2xl object-cover w-full h-[400px] border-4 border-n1"
            />
          </div>
        </div>
      </section>
  )};

export default Section