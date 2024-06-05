import { useContext } from 'react';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ShoppingCartContext } from '../../Context';
import OrderCard from '../../Components/OrderCard';
import { totalPrice } from '../../utils';
import './styles.css';

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);

  const handleDelete = (id, quantity) => {
    const filteredProducts = context.cartProducts.filter(
      (product) => product.product.id !== id
    );
    context.setCartProducts(filteredProducts);
    context.setCount(context.count - quantity);
  };

  const handleQuantity = (id, quantity) => {
    let updatedCartProducts = [...context.cartProducts];
    const index = updatedCartProducts.findIndex(
      (product) => product.product.id === id
    );

    if (index !== -1) {
      updatedCartProducts[index].quantity += quantity;
      if (updatedCartProducts[index].quantity <= 0) {
        updatedCartProducts.splice(index, 1);
      }
      context.setCartProducts(updatedCartProducts);
      context.setCount(context.count + quantity);
    }
  };

  const handleCheckout = () => {
    const date = new Date();
    const orderToAdd = {
      date: date.toLocaleDateString(),
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts),
    };

    context.setOrder([...context.order, orderToAdd]);
    context.setCartProducts([]);
    context.setCount(0);
  };

  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'
      } checkout-side-menu flex flex-col fixed right-0 border-2 border-gray-200 shadow-2xl rounded-lg bg-white z-20`}
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
      <div className="px-6 overflow-y-scroll flex-1">
        {context.cartProducts.map((product) => (
          <OrderCard
            key={product.product.id}
            id={product.product.id}
            quantity={product.quantity}
            title={product.product.title}
            imageURL={product.product.image}
            price={product.product.price}
            handleDelete={handleDelete}
            handleQuantity={handleQuantity}
          />
        ))}
      </div>
      <div className="px-6 mb-6">
        <p className="flex justify-between items-center mb-2">
          <span className="font-normal">Total:</span>
          <span className="font-medium">
            ${totalPrice(context.cartProducts)}
          </span>
        </p>
        <Link to="/my-orders/last">
          <button
            className="bg-black py-2 text-white rounded-lg w-full"
            onClick={() => {
              if (totalPrice(context.cartProducts) > 0) {
                handleCheckout();
              }
            }}
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
};

export default ProductDetail;
