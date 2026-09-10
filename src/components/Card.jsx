// Tarjeta reutilizable de servicio: el icono lucide llega como prop para identificar cada servicio.
// Nota: se desestructura en el cuerpo (no en la firma) porque ESLint, sin eslint-plugin-react,
// no rastrea usos en JSX; el renombre a mayúscula queda cubierto por varsIgnorePattern '^[A-Z_]'
// solo en declaraciones de variables, no en parámetros de función renombrados.
const Card = (props) => {
  const { title, description, icon: Icon } = props;
  return (
    <div className="bg-n1 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-n5 border-b-4 border-n4">
      <Icon className="h-12 w-12 text-n4 mb-4" aria-hidden="true" />
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-n3">
        {description}
      </p>
    </div>
  );
};

export default Card;
