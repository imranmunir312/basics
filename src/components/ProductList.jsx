import React from "react";

const ProductList = ({ product, onDelete }) => {
  const { name, id, img } = product;
  return (
    <div>
      <h4>{id}</h4>
      <h2>{name}</h2>
      <img height="250" width="250" src={img} />
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default ProductList;
