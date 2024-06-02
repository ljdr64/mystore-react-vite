import { FaTrashAlt } from 'react-icons/fa';

const OrderCard = (props) => {
  const { id, quantity, title, imageURL, price, handleDelete } = props;

  return (
    <div className="flex justify-between items-center mb-3 gap-2">
      <div className="flex items-center gap-2">
        <p className="min-w-5 font-medium">{quantity}</p>
        <figure className="min-w-20 max-w-20 h-20">
          <img
            className="w-full h-full rounded-lg object-contain"
            src={imageURL}
            alt={title}
          />
        </figure>
        <p className="text-sm font-light">{title}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg font-medium">
          {parseFloat((price * quantity).toFixed(2))}
        </p>
        <FaTrashAlt
          className="cursor-pointer"
          onClick={() => handleDelete(id, quantity)}
        />
      </div>
    </div>
  );
};

export default OrderCard;
