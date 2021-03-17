import React from "react";
import ProductList from "./ProductList";

const CartBody = ({ products, onDelete }) => {
  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <ProductList product={product} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartBody;
