import React from 'react';
import { Settings, Droplet, Wrench, ShieldCheck, MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import NavBar from './components/NavBar';
import Section from './components/Section';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans bg-n5 text-n1 min-h-screen">
      
      <NavBar />

      <Section />

      {/* SERVICIOS SECTION */}
      <Services />

      {/* SECCIÓN B2B / NOSOTROS */}
      <section id="nosotros" className="bg-n1 py-16 text-n5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-6">Su Aliado Estratégico B2B en Guayana</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-300">
            Con una presencia sólidamente establecida en Puerto Ordaz, comprendemos las exigencias de la industria local. Nuestro contenido técnico y trabajos en campo demuestran la calidad de los lubricantes que manejamos y la operatividad de nuestra ingeniería aplicada.
          </p>
        </div>
      </section>

      {/* CONTACTO Y FOOTER */}
      <Footer />

    </div>
  );
}

export default App;