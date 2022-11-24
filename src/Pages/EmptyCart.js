import React from "react";
import AuthButton from "../Components/AuthButton";

function EmptyCart() {
    return(
        <div className="container">
                <div className="cart empty-cart">
                    <div className="cart-content">
                        <h3>Ваша корзина пуста, как и кошелёк</h3>
                        <AuthButton/>
                    </div>
                </div>
        </div>
    );}

export default EmptyCart;