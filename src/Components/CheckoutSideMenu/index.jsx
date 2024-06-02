import { useContext } from 'react';
import { FaTimes } from 'react-icons/fa';
import { ShoppingCartContext } from '../Context';
import OrderCard from '../../Components/OrderCard';
import './styles.css';

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
      <div className="px-6 overflow-y-scroll">
        {context.cartProducts.map((product) => (
          <OrderCard
            key={product.product.id}
            quantity={product.quantity}
            title={product.product.title}
            imageURL={product.product.image}
            price={product.product.price}
          />
        ))}
      </div>
    </aside>
  );
};

export default ProductDetail;