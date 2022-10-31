import { React, useState, useEffect } from "react";
import BasketView from "./BasketView";
import data from "./data";

export default function App() {
  const [items, setItems] = useState(data);
  const [basket, updateBasket] = useState([]);

  useEffect(() => {
    console.log("product added", [items])
  })
    return (
      <>
        <BasketView items={items} />
        {basket}
        <button
          disabled={items.quantity === 0}
          onClick={() => updateBasket([])}
          className="btn">
          Add to basket
        </button>
      </>

  )
};