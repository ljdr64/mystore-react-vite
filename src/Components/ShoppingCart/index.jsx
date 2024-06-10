import { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { ShoppingCartContext } from '../../Context';

const ShoppingCart = () => {
  const context = useContext(ShoppingCartContext);

  const openCheckout = () => {
    context.openCheckoutSideMenu();
    context.closeProductDetail();
  };

  return (
    <div
      className="flex gap-0.5 items-center text-lg cursor-pointer select-none"
      onClick={() => openCheckout()}
    >
      <FaShoppingCart />
      <div className="absolute bottom-6 right-6 flex justify-center items-center rounded-full bg-black w-4 h-4 font-size-bold text-xs text-white">
        {context.count}
      </div>
    </div>
  );
};

export default ShoppingCart;
