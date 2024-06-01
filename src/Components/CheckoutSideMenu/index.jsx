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
      <div className="px-6">
        {context.cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            title={product.title}
            imageURL={product.image}
            price={product.price}
          />
        ))}
      </div>
    </aside>
  );
};

export default ProductDetail;
