import { FaPlus } from 'react-icons/fa';
import { useContext } from 'react';
import { ShoppingCartContext } from '../Context';

const Card = (data) => {
  const context = useContext(ShoppingCartContext);

  const showProduct = (productDetail) => {
    context.openProductDetail();
    context.setProductToShow(productDetail);
  };

  const addProductsToCart = (productData) => {
    context.setCount(context.count + 1);
    context.setCartProducts([...context.cartProducts, productData]);
    console.log('CART: ', context.cartProducts);
  };

  return (
    <div
      className="bg-white cursor-pointer w-56 h-auto rounded-lg p-2 shadow-md"
      onClick={() => showProduct(data?.data)}
    >
      <figure className="relative mb-2 w-full h-52">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-sm m-2 px-3 py-0.5">
          {data.data?.category}
        </span>
        <img
          className="w-full h-full object-contain rounded-lg"
          src={data.data?.image}
          alt="headphones"
        />
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
          onClick={(e) => {
            e.stopPropagation();
            addProductsToCart(data?.data);
          }}
        >
          <FaPlus />
        </div>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{data.data?.title}</span>
        <span className="text-lg font-medium">{data.data?.price}</span>
      </p>
    </div>
  );
};

export default Card;
