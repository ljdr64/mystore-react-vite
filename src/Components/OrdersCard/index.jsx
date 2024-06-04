const OrdersCard = (props) => {
  const { date, totalPrice, totalProducts } = props;

  return (
    <div className="flex justify-between items-center mb-3 p-2 border-2 border-gray-200 shadow-md rounded-lg border border-black gap-2">
      <p className="flex flex-col w-60">
        <div className="flex justify-between">
          <p>Date: </p>
          <p> {date}</p>
        </div>
        <div className="flex justify-between">
          <p>Products: </p>
          <p> {totalProducts}</p>
        </div>
        <div className="flex justify-between">
          <p>Total: </p>
          <p>{totalPrice}</p>
        </div>
      </p>
    </div>
  );
};

export default OrdersCard;
