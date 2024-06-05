/**
 * This function calculates total price of a new order
 * @param {Array} products cartProduct: Array of Objects
 * @returns {number} Total price
 */
export const totalPrice = (products) => {
  const total = parseFloat(
    products
      .reduce(
        (sum, product) => sum + product.quantity * product.product.price,
        0
      )
      .toFixed(2)
  );
  return total;
};

/**
 * This function calculates total products of a new order
 * @param {Array} products cartProduct: Array of Objects
 * @returns {number} Total products
 */
export const totalProducts = (products) => {
  const total = products.reduce((sum, product) => sum + product.quantity, 0);
  return total;
};
