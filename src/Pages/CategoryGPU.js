import React from "react";
import data from "../data";
import Card from "../Components/Card";

function CategoryGPU({searchValue}) {

    const videocards = data.filter(obj => {
        if(obj.name.toLowerCase().includes(searchValue.toLowerCase())){
            return true;
        }

        return false;
    }).map((obj) => (<Card pic={obj.pic} title={obj.name} price={obj.price}/>))

    return(
        <div className="container">
            <div className="category__header">
                <h3>Видеокарты</h3>
            </div>
            <div className="category-grid">
                <div className="category-filters-sidebar">
                    <div className="category-filter">
                        <h2>Фильтры</h2>
                        <details>
                            <summary>Вендоры</summary>
                                <ul>
                                    <li><a>Gigabyte</a></li>
                                    <li><a>Maxsun</a></li>
                                    <li><a>Asus</a></li>
                                    <li><a>China Refab</a></li>
                                </ul>
                        </details>
                    </div>
                </div>
                <div className="category-content">
                    {videocards}
                </div>
            </div>
        </div>
    );}

export default CategoryGPU;
