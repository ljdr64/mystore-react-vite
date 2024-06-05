import {
  FaChevronRight,
  FaShoppingBag,
  FaRegCalendarAlt,
} from 'react-icons/fa';

const OrdersCard = (props) => {
  const { date, totalPrice, totalProducts } = props;

  return (
    <div className="flex justify-between items-center w-80 mb-3 p-4 border-2 border-gray-200 shadow-md rounded-lg border border-black gap-2">
      <div className="flex justify-between w-full">
        <p className="flex flex-col">
          <span className="flex items-center gap-3">
            <FaRegCalendarAlt />
            {date}
          </span>
          <span className="flex items-center gap-3">
            <FaShoppingBag />
            {totalProducts} articles
          </span>
        </p>
        <p className="flex items-center gap-2">
          <span className="font-medium text-xl">${totalPrice}</span>
          <FaChevronRight className="h-4 w-4 text-black" />
        </p>
      </div>
    </div>
  );
};

export default OrdersCard;
