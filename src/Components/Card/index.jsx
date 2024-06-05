import { FaPlus } from 'react-icons/fa';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';

const Card = (data) => {
  const context = useContext(ShoppingCartContext);

  const showProduct = (productDetail) => {
    context.openProductDetail();
    context.setProductToShow(productDetail);
    context.closeCheckoutSideMenu();
  };

  const addProductsToCart = (event, productData) => {
    event.stopPropagation();

    const existingProduct = context.cartProducts?.find(
      (product) => product.product.id === productData.id
    );

    if (!existingProduct) {
      context.setCartProducts([
        ...context.cartProducts,
        { product: productData, quantity: 1 },
      ]);
      context.setCount(context.count + 1);
    } else {
      const productIndex = context.cartProducts.findIndex(
        (product) => product.product.id === productData.id
      );

      if (
        productIndex !== -1 &&
        context.cartProducts[productIndex].quantity < 10
      ) {
        const updatedProduct = {
          ...context.cartProducts[productIndex],
          quantity: context.cartProducts[productIndex].quantity + 1,
        };

        const updatedCart = [
          ...context.cartProducts.slice(0, productIndex),
          updatedProduct,
          ...context.cartProducts.slice(productIndex + 1),
        ];

        context.setCount(context.count + 1);
        context.setCartProducts(updatedCart);
      }
    }
    context.openCheckoutSideMenu();
    context.closeProductDetail();
  };

  return (
    <div
      className="bg-white cursor-pointer w-56 h-auto  border-2 border-gray-200 rounded-lg p-2 shadow-md "
      onClick={() => showProduct(data?.data)}
    >
      <figure className="relative mb-2 w-full h-52">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-sm capitalize m-2 px-3 py-0.5">
          {data.data?.category}
        </span>
        <img
          className="w-full h-full object-contain rounded-lg select-none"
          src={data.data?.image}
          alt={data.data?.title}
        />
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
          onClick={(event) => addProductsToCart(event, data?.data)}
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
