import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CartItem, EmptyCart } from "../Components";

function Cart() {
    const { totalCount, totalPrice, items } = useSelector(state => state.cart);

    /*if(!totalPrice){
        return <EmptyCart/>
    }*/

    return(
        <div className="container">
                <div className="cart">
                    <div className="cart-content-main-block">
                        <div className="cart-title">
                            <h1>Корзина</h1>
                            <div className="cart-item__checkbox">
                                
                            </div>
                        </div>
                        <div className="cart-items">
                            {items.map((item, index) => (
                                <CartItem item={item} key={`${item.id}_${index}`}/>
                            ))}
                        </div>
                    </div>
                    <div className="cart-content-side-block">
                        <div className="order-details">
                            <h3>Детали заказа</h3>
                            <div className="order-details-item"><p>{totalCount}. {totalCount > 1 & totalCount < 5 ? "Товара" : totalCount > 4 ? "Товаров" : totalCount == 0 ? "Ничего не выбрано" : "Товар"}</p><p>{totalPrice}₽</p></div>
                            <div className="order-details-item sum"><p>Сумма</p><p>{totalPrice}₽</p></div>
                        </div>
                        <a href="/">Оформить заказ</a>
                    </div>
                </div>
        </div>
    );}

export default Cart;