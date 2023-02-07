import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare, faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";

import { removeItem } from '../redux/slices/cartSlice'

function CartItem({ item, active }){
    const dispatch = useDispatch();

    const {id, pic, title, price} = item;

    //const [checkboxActive, setCheckboxActive] = useState(true);

    //useEffect(() => setCheckboxActive(!checkboxActive), [active])

    const onCLickDelete = () => {
        dispatch(removeItem(id))
    }

    return(
    <>
        <div className="cart-item">
            {
                <div className="cart-item-content">
                {/*<div className="cart-item__checkbox">
                    <FontAwesomeIcon icon={checkboxActive ? faSquareCheck : faSquare} onClick={() => setCheckboxActive(!checkboxActive)}/>
                </div>*/}
                <div className="cart-item__img">
                    <img src={pic} alt={title} draggable="false"/>
                </div>
                <div className="cart-item__title">
                    <a>{title}</a>
                    <span onClick={onCLickDelete}>Удалить</span>
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