import { Settings } from 'lucide-react';


const Card = ({ title, description }) => {
  return (
    <div className="bg-n1 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-n5 border-b-4 border-n4">
      <Settings className="h-12 w-12 text-n4 mb-4" />
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-gray-300">
        {description}
      </p>
    </div>
  )
};

export default Card;