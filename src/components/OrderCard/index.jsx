import React from "react";
import "./index.scss";

export default ({ name, image, quantity, totalPrice }) => {
  return (
    <div className="product-card">
      <img src={image} />
      <div>
        <h2>{name}</h2>
        <div>
          <div className="stats">
            <label>Quantity</label>
            <p>{quantity}</p>
          </div>
          <div className="stats">
            <label>Total Price</label>
            <p>{totalPrice}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
