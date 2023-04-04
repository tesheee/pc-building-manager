import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom";
import { addItem } from '../redux/slices/cartSlice'

function Card({ id, pic, name, price, count }) {
    const dispatch = useDispatch();

    const onCLickAdd = () => {
        const item = {
            id,
            name,
            price,
            pic,
            count
        };
        dispatch(addItem(item))
    }

    //Добавить: 
    //кнопку для добаления в избранное
    //описание товара под названием
    //рейтинг товара
    //(необязательно) слайдер с картинками товара

    return(
        <div className={'category-content__item'}>
            <img src={pic} alt={name} draggable="false"/>
            <div className="category-content__title_and_description">
                <Link to={"/Category/GPU" + "/" + id}>{name}</Link>
                <span>Видеочипсет: NVIDIA GeForce RTX 3080, 1830 МГц</span>
                <span>Память: 12288 МБ GDDR6X, 19000 МГц</span>
                <span>Интерфейс: PCI-E 4.0</span>
                <span>Техпроцесс: 8 нм</span>
                <span>Разъемы: Display Port х 3</span>
            </div>
            <div className="category-content__buy__block">
                <p>{price.toLocaleString()}₽</p>
                <a onClick={onCLickAdd} className="category-content__item__button">В корзину</a>
            </div>
        </div>
    )}

export default Card;