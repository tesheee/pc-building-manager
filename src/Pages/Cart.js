import React, { useEffect, useState } from 'react';
import { CartItem } from "../Components";
import data from "./../data";

function Cart() {
    const [cart, setCart] = useState(data);
    const [total, setTotal] = useState({
        price: cart.reduce((prev, curr) => prev + curr.price, 0),
        count: cart.reduce((prev, curr) => prev + curr.count, 0)
    })

    useEffect(() => {
        setTotal({
            price: cart.reduce((prev, curr) => prev + curr.price, 0),
            count: cart.reduce((prev, curr) => prev + curr.count, 0)
        })
    }, [cart]);

    const deleteProduct = (id) => {
        setCart((cart) => cart.filter((product) => id !== product.id));
    }

    const products = cart.map((product => {
        return <CartItem item={product} key={product.id} deleteProduct={deleteProduct}/>;
    }))

    return(
        <div className="container">
                <div className="cart">
                    <div className="cart-content-main-block">
                        <div className="cart-title">
                            <h1>Корзина</h1>
                            <p><input type="checkbox"/> Выбрать всё</p>
                        </div>
                        <div className="cart-items">
                            {products}
                        </div>
                    </div>
                    <div className="cart-content-side-block">
                        <div className="order-details">
                            <h3>Детали заказа</h3>
                            <div className="order-details-item"><p>{total.count}. {total.count > 1 ? "Товара" : "Товар"}</p><p>{total.price}₽</p></div>
                            <div className="order-details-item sum"><p>Сумма</p><p>{total.price}₽</p></div>
                        </div>
                        <a href="/">Оформить заказ</a>
                    </div>
                </div>
        </div>
    );}

export default Cart;