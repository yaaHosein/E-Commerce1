import React from "react";

const BasketView = ({ items }) => {
  return (
    <>
      {items.map((item) => {
        const { id, name, image, price, quantity, description } = item;
        return (
          <div key={id}>
            <div className="details">
              <li>
                <h3> {name}</h3>
              </li>
              <img src={image} alt={name} />
              <p>Quantity: {quantity} </p>
              <p>Price: ${price}</p>
              <p>Description: {description} </p>
            </div>
          </div>
        );
      })}

    </>
  );
}

export default BasketView;