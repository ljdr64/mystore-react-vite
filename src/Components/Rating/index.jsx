import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';

const Rating = ({ score }) => {
  // Calcula la cantidad de estrellas llenas y la fracción de la estrella parcial
  const fullStars = Math.floor(score);
  const partialStar = score - fullStars;

  return (
    <div className="flex items-center">
      {/* Estrellas llenas */}
      {[...Array(fullStars)].map((_, index) => (
        <FaStar key={index} className="text-yellow-500" />
      ))}
      {/* Estrella parcial */}
      {partialStar > 0 && <FaStarHalfAlt className="text-yellow-500" />}
      {/* Estrellas vacías */}
      {[...Array(5 - Math.ceil(score))].map((_, index) => (
        <FaRegStar key={index} className="text-yellow-500" />
      ))}
    </div>
  );
};

export default Rating;
