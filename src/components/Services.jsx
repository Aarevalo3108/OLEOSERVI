import Card from './Card';


const Services = () => {
  return (
    <section id="servicios" className="py-20 bg-n5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-n2 sm:text-4xl">Nuestros Servicios</h2>
          <div className="mt-2 w-24 h-1 bg-n4 mx-auto"></div>
          <p className="mt-4 text-xl text-n3">Especialistas en mantener su industria en movimiento</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Tarjeta 1 */}
          <Card
            title="Mantenimiento de Maquinaria"
            description="Mantenimiento preventivo y correctivo enfocado en equipos pesados e industriales, garantizando la máxima operatividad."
          />

          {/* Tarjeta 2 */}
          <Card
            title="Suministro de Lubricantes"
            description="Comercialización de aceites y grasas de grado industrial y automotriz. Somos el puente entre grandes marcas y la industria pesada."
          />

          {/* Tarjeta 3 */}
          <Card
            title="Asistencia Técnica"
            description="Soporte especializado in-situ para plantas y empresas del sector básico (Sidor, Venalum, etc.) y privado en la región de Guayana."
          />

          {/* Tarjeta 4 */}
          <Card
            title="Soluciones en Oleohidráulica"
            description="Expertos en el manejo de sistemas de fluidos, reparación y suministro de componentes y repuestos hidráulicos específicos."
          />
        </div>
      </div>
    </section>
)};

export default Services;