import React from "react";

function CartItem({ item, deleteProduct }){
    const {id, pic, name, price} = item;
    return(
    <>
        <div className="cart-item">
            {
                <div className="cart-item-content">
                <div className="cart-item__checkbox">
                    <input type="checkbox"/>
                </div>
                <div className="cart-item__img">
                    <img src={pic} alt={name} draggable="false"/>
                </div>
                <div className="cart-item__title">
                    <a>{name}</a>
                    <span onClick={() => {deleteProduct(id);}}>Удалить</span>
                </div>
                    <div className="cart-item__price">
                        <p>{price}₽</p>
                    </div>
                </div>
            }
        </div>
    </>
    )
}

export default CartItem;