import Axios from "axios";
import React, { useEffect, useState } from "react";
import OrderCard from "../OrderCard";
import "./index.scss";

export default () => {
  const [mockData, setMockData] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await Axios.get(
        "https://run.mocky.io/v3/c6a94d50-1a61-4127-9a60-2a05b319deda"
      );
      setMockData(objectAccumulate(data));
    })();
  }, []);

  return (
    <div>
      <h1>History</h1>
      <div className="orders">
        {mockData.map(({ totalPrice, orderDetails }) => {
          const {
            name,
            productDetail: { webUrl },
            quantity
          } = Object.values(orderDetails)[0];
          return (
            <OrderCard
              name={name}
              image={webUrl}
              quantity={quantity}
              totalPrice={totalPrice}
            />
          );
        })}
      </div>
    </div>
  );
};

function objectAccumulate(data) {
  return data.map((order) => ({
    ...order,
    orderDetails: order.orderDetails.reduce((a, b) => {
      if (a.hasOwnProperty(b.productId)) {
        return {
          ...a,
          [b.productId]: {
            ...b,
            quantity: a[b.productId].quantity + b.quantity
          }
        };
      }
      return {
        ...a,
        [b.productId]: b
      };
    }, {})
  }));
}
