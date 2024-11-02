import { useState, useEffect } from "react";
import "../styles/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../helpers/StateProvider";
import { getBasketTotal } from "../helpers/reducer";
import { db, auth } from "./Firebase"

function Subtotal() {
    const [{basket}, dispatch] = useStateValue();
    var date = { currentTime: new Date().toLocaleString() };

    const proceedToCheckout =  async (e) => {
        e.preventDefault();  
        //API - 
        db.collection("Orders").add({
            basket: basket.map(({ name }) => name),
            date:date.currentTime,
            user: auth.currentUser.email,
        });
        alert('Order placed successfully!');
        dispatch({
            type: "CLEAR_BASKET",
        })
    }

    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText = {(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>₹{value}</strong>
                        </p>
                    </>
                )}

                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                
            />

            <button onClick={proceedToCheckout}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
