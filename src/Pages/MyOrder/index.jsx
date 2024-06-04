import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';
import { ShoppingCartContext } from '../../Context';
import Layout from '../../Components/Layout';
import OrderCard from '../../Components/OrderCard';

function MyOrder() {
  const context = useContext(ShoppingCartContext);

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-6">
        <Link to="/my-orders" className="absolute left-0">
          <FaChevronLeft className="h-5 w-5 text-black cursor-pointer" />
        </Link>
        <h1>MyOrder</h1>
      </div>
      <div className="flex flex-col w-80">
        {context.order?.slice(-1)[0].products.map((product) => (
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
    </Layout>
  );
}

export default MyOrder;
