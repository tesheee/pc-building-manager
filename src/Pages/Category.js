import React from "react";
import Cart from "./Cart";

function Category() {
    return(
        <div className="container">
            <div className="category__header">
                <h3>Название категории</h3>
            </div>
            <div className="category-grid">
                <div className="category-filters-sidebar">
                    <div className="category-filter">
                        <h3>Фильтры</h3>
                        <details>
                            <summary>Вендоры</summary>
                                <ul>
                                    <li><a>Gigabyte</a></li>
                                    <li><a>Maxsun</a></li>
                                    <li><a>Asus</a></li>
                                    <li><a>China Refab</a></li>
                                </ul>
                        </details>
                        <h5>Цена</h5>
                        <input type="range" step="1" min="0" max="100" id="price" name="price"/>
                        <p>1 - 100000</p>
                    </div>
                </div>
                <div className="category-content">
                    <div className="category-content__item">
                        <a>Глек</a>
                    </div>
                    <div className="category-content__item">
                        <a onClick={() => Cart()}>Купить</a>
                    </div>
                </div>
            </div>
        </div>
    );}

export default Category;
