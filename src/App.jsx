import { MapPin, Wrench, ShieldCheck } from 'lucide-react';
import NavBar from './components/NavBar';
import Section from './components/Section';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans bg-n5 text-n1 min-h-screen">
      {/* Enlace de salto: primer elemento enfocable para usuarios de teclado/lectores de pantalla */}
      <a href="#inicio" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-[100] focus:bg-n4 focus:text-n5 focus:px-4 focus:py-2 focus:font-bold">Saltar al contenido principal</a>

      <NavBar />

      <Section />

      {/* SECCIÓN DE SERVICIOS */}
      <Services />

      {/* SECCIÓN B2B / NOSOTROS */}
      <section id="nosotros" className="bg-n1 py-16 text-n5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-6">Su Aliado Estratégico B2B en Guayana</h2>
          <p className="text-lg max-w-3xl mx-auto text-n3">
            Con una presencia sólidamente establecida en Puerto Ordaz, comprendemos las exigencias de la industria local. Nuestro contenido técnico y trabajos en campo demuestran la calidad de los lubricantes que manejamos y la operatividad de nuestra ingeniería aplicada.
          </p>

          {/* Pilares de empresa: contenido redactado únicamente con información existente en el sitio */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-n2 p-8 rounded-lg shadow-lg text-center border-t-4 border-n4">
              <MapPin className="h-10 w-10 text-n4 mx-auto mb-4" aria-hidden="true" />
              <h3 className="text-xl font-bold mb-3">Presencia en Guayana</h3>
              <p className="text-n3">
                Ubicación establecida en Puerto Ordaz, con atención directa a la industria de la región.
              </p>
            </div>
            <div className="bg-n2 p-8 rounded-lg shadow-lg text-center border-t-4 border-n4">
              <Wrench className="h-10 w-10 text-n4 mx-auto mb-4" aria-hidden="true" />
              <h3 className="text-xl font-bold mb-3">Ingeniería Aplicada</h3>
              <p className="text-n3">
                Trabajos en campo y contenido técnico que demuestran la operatividad de nuestra ingeniería.
              </p>
            </div>
            <div className="bg-n2 p-8 rounded-lg shadow-lg text-center border-t-4 border-n4">
              <ShieldCheck className="h-10 w-10 text-n4 mx-auto mb-4" aria-hidden="true" />
              <h3 className="text-xl font-bold mb-3">Calidad Comprobada</h3>
              <p className="text-n3">
                Calidad de los lubricantes que manejamos y soporte especializado in situ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO Y FOOTER */}
      <Footer />

    </div>
  );
}

export default App;
