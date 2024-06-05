import { FaMinus, FaPlus, FaTrashAlt } from 'react-icons/fa';

const OrderCard = (props) => {
  const { id, quantity, title, imageURL, price, handleDelete, handleQuantity } =
    props;

  return (
    <div className="flex justify-between items-center mb-3 gap-2">
      <div className="flex items-center gap-2">
        {handleDelete ? (
          <div className="flex flex-col items-center rounded-full min-w-7 max-w-7 border border-gray-200 overflow-hidden">
            <button
              className={`bg-gray-200 w-7 h-7 flex justify-center items-center focus:outline-none ${
                quantity >= 10 ? 'pointer-events-none' : ''
              }`}
              onClick={() => {
                if (quantity < 10) {
                  handleQuantity(id, 1);
                }
              }}
            >
              {quantity < 10 ? (
                <FaPlus className="w-3 h-3" />
              ) : (
                <FaPlus className="w-3 h-3 text-gray-400" />
              )}
            </button>
            <span className="text-lg select-none">{quantity}</span>
            <button
              className="bg-gray-200 w-7 h-7 flex justify-center items-center focus:outline-none"
              onClick={() => handleQuantity(id, -1)}
            >
              {quantity > 1 ? (
                <FaMinus className="w-3 h-3" />
              ) : (
                <FaTrashAlt className="w-3 h-3" />
              )}
            </button>
          </div>
        ) : (
          <p className="min-w-5 font-medium">{quantity}</p>
        )}

        <figure className="min-w-20 max-w-20 h-20">
          <img
            className="w-full h-full rounded-lg object-contain select-none"
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
        {handleDelete && (
          <FaTrashAlt
            className="cursor-pointer"
            onClick={() => handleDelete(id, quantity)}
          />
        )}
      </div>
    </div>
  );
};

export default OrderCard;
