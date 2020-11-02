import React from "react";
import OrderHistory from "./components/OrderHistory";
import "./styles.scss";

export default function App() {
  return (
    <div className="App">
      <h1>Order history</h1>
      <OrderHistory />
    </div>
  );
}
