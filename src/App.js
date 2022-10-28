import React, { useState } from "react";
import data from "./data";
import BasketView from "./BasketView";
export default function App() {
    const [items, setItems] = useState(data);
    const [basket, updateBasket] = useState([]);
    return <>
        {items.map((item) => {
            const { id, name, image, price, quantity, description } = item;
            return (
                <div key={id}>
                    <div className="details">
                        <h3> {name}</h3>
                        <img src={image} alt={name} />
                        <p>Quantity: {quantity} </p>
                        <p>Price: {price}$</p>
                        <p>Description: {description} </p>
                    </div>
                    <button
                        disabled={items.quantity === 0}
                        onClick={() => updateBasket()(<BasketView />)}
                        className="btn"
                    >
                        Add to basket
                    </button>
                </div>
            );
        })}
    </>

}