import React from "react";
import {Link} from "react-router-dom";

function Card({ pic, title, price }) {
    return(
        <div className="category-content__item">
            <img src={pic} draggable="false"/>
            <a>{title}</a>
            <div className="category-content__buy__block">
                <p>{price}₽</p>
                <a className="category-content__item__button">Купить</a>
            </div>
            
        </div>
    )}

export default Card;