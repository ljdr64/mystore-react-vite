import { useContext } from 'react';
import { ShoppingCartContext } from '../Context';
import './styles.css';
import { FaTimes } from 'react-icons/fa';

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);

  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'
      } checkout-side-menu flex flex-col fixed right-0 shadow-md rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <div
          className="cursor-pointer"
          onClick={() => context.closeCheckoutSideMenu()}
        >
          <FaTimes />
        </div>
      </div>
    </aside>
  );
};

export default ProductDetail;
