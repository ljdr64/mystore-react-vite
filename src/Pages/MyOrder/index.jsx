import { useContext } from 'react';
import { ShoppingCartContext } from '../../Components/Context';
import Layout from '../../Components/Layout';
import OrderCard from '../../Components/OrderCard';

function MyOrder() {
  const context = useContext(ShoppingCartContext);

  return (
    <Layout>
      MyOrder
      <div className="flex flex-col w-80 mt-3">
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
