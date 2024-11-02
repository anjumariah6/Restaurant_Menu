
import React from "react";
import { useStateValue } from "../helpers/StateProvider";

function MenuItem({ image, name, price, rating }) {
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
        type: "ADD_TO_BASKET",
        item: {
            image: image,
            name: name,
            price: price,
            rating: rating,
        },
    });
  };

  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> ₹{price} </p>
      <div className="product__rating">
            {Array(rating)
            .fill()
            .map((_, i) => (
                <p>⭐</p>
            ))}
        </div>
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default MenuItem;
