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
