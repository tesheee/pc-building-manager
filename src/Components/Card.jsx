import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom";

import { addItem } from '../redux/slices/cartSlice'

function Card({ id, pic, title, price, count }) {
    const dispatch = useDispatch();

    const onCLickAdd = () => {
        const item = {
            id,
            title,
            price,
            pic,
            count
        };
        dispatch(addItem(item))
    }

    return(
        <div className="category-content__item">
            <img src={pic} draggable="false"/>
            <a>{title}</a>
            <div className="category-content__buy__block">
                <p>{price}₽</p>
                <a onClick={onCLickAdd} className="category-content__item__button">Купить</a>
            </div>
            
        </div>
    )}

export default Card;