import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom";

import { addItem } from '../redux/slices/cartSlice'

function Card({ id, pic, title, price, count, category }) {
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
            <Link to={"/Category/" + category + "/" + title}>{title}</Link>
            <div className="category-content__buy__block">
                <p>{price}₽</p>
                <a onClick={onCLickAdd} className="category-content__item__button">Купить</a>
            </div>
        </div>
    )}

export default Card;