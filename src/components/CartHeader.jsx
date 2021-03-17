import React from "react";

const CartHeader = (props) => {
  return (
    <header>
      <h2>
        Cart <span>{props.numberOfElements}</span>
      </h2>
      <button onClick={props.onEmpty}>CLear Cart</button>
    </header>
  );
};

export default CartHeader;
