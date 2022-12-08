import React, {useState, useEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSquare, faSquareCheck} from "@fortawesome/free-solid-svg-icons";

function CartItem({ item, deleteProduct, active }){
    const {id, pic, name, price} = item;

    const [checkboxActive, setCheckboxActive] = useState(true);

    useEffect(() => setCheckboxActive(!checkboxActive), [active])

    return(
    <>
        <div className="cart-item">
            {
                <div className="cart-item-content">
                <div className="cart-item__checkbox">
                    <FontAwesomeIcon icon={checkboxActive ? faSquareCheck : faSquare} onClick={() => setCheckboxActive(!checkboxActive)}/>
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