import { SportsBasketball } from "@material-ui/icons";
import React from "react";
import "../styles/Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal.js";
import { useStateValue } from "../helpers/StateProvider";

function Checkout() {
  const [{basket}, dispatch] = useStateValue();

  return (
      <div className="checkout">
          <div className="checkout__left">
              <div>
                  <h2 className="checkout__title">
                      Your Cart
                  </h2>
                  {basket.map(item => (
                        <CheckoutProduct 
                            name = {item.name}
                            image = {item.image}
                            price = {item.price}
                            rating = {item.rating}
                        />
                    ))}
              </div>
          </div>

          <div className="checkout__right">
              <Subtotal />
          </div>
      </div>
  )
}

export default Checkout
