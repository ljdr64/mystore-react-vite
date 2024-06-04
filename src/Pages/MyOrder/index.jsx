import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';
import { ShoppingCartContext } from '../../Context';
import Layout from '../../Components/Layout';
import OrderCard from '../../Components/OrderCard';
import { totalPrice } from '../../utils';

function MyOrder() {
  const context = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1);
  if (index === 'last') index = context.order?.length - 1;

  return (
    <Layout>
      <div className="p-4 border-2 border-gray-200 shadow-md rounded-lg">
        <div className="flex items-center justify-center relative w-80 mb-6">
          <Link to="/my-orders" className="absolute left-0">
            <FaChevronLeft className="h-5 w-5 text-black cursor-pointer" />
          </Link>
          <h1>MyOrder</h1>
        </div>
        <div className="flex flex-col w-80 mb-2">
          {context.order?.[index]?.products.map((product) => (
            <OrderCard
              key={product.product.id}
              id={product.product.id}
              quantity={product.quantity}
              title={product.product.title}
              imageURL={product.product.image}
              price={product.product.price}
            />
          ))}
        </div>
        <div className="flex justify-between items-center w-80 text-lg">
          <span className="font-normal">Total:</span>
          <span className="font-medium">
            ${totalPrice(context.order?.[index]?.products)}
          </span>
        </div>
      </div>
    </Layout>
  );
}

export default MyOrder;
