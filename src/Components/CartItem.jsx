import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { removeItem } from '../redux/slices/cartSlice'
import { Link } from "react-router-dom";

function CartItem({ item, active }){
    const dispatch = useDispatch();

    const {id, pic, name, price} = item;

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
                    <img src={pic} alt={name} draggable="false"/>
                </div>
                <div className="cart-item__title">
                    <Link to={"/Category/GPU" + "/" + id}>{name}</Link>
                    <span onClick={onCLickDelete}>Удалить</span>
                </div>
                    <div className="cart-item__price">
                        <p>{price.toLocaleString()}₽</p>
                    </div>
                </div>
            }
        </div>
    </>
    )
}

export default CartItem;