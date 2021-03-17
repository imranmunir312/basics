import React, { useState } from "react";
import CartBody from "./CartBody";
import CartFooter from "./CartFooter";
import CartHeader from "./CartHeader";
import Data from "../data.json";
const Cart = () => {
  const [products, setProducts] = useState(Data);

  const emptyCart = () => {
    setProducts([]);
  };

  const deleteProductFromCart = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  return (
    <div className="cart-wrapper">
      <CartHeader numberOfElements={products.length} onEmpty={emptyCart}>
        <h4>How are you</h4>
      </CartHeader>
      <CartBody products={products} onDelete={deleteProductFromCart} />
      <CartFooter />
    </div>
  );
};

export default Cart;
