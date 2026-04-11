import logo from '../assets/logo.webp';


const NavBar = () => {
  return (
      <nav className="bg-n5 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-24 items-center justify-center md:justify-between">
            <div className="flex-shrink-0 flex items-center">
              <img className="h-16 w-auto" src={logo} alt="Oleoservi C.A." />
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-n1 hover:text-n4 font-bold transition-colors">Inicio</a>
              <a href="#servicios" className="text-n1 hover:text-n4 font-bold transition-colors">Servicios</a>
              <a href="#nosotros" className="text-n1 hover:text-n4 font-bold transition-colors">Nosotros</a>
              <a href="#contacto" className="text-n1 hover:text-n4 font-bold transition-colors">Contacto</a>
            </div>
          </div>
        </div>
      </nav>
  )
}

export default NavBar