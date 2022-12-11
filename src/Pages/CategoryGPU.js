import React from "react";
import data from "../data";
import { Card, Pagination, Sort } from "../Components";
import { SearchContext } from "../App";
import { useDispatch, useSelector } from "react-redux";

function CategoryGPU() {
    //const dispatch = useDispatch();
    //const sortType = useSelector((state) => state.filter.sort.sortProperty)

    const { searchValue } = React.useContext(SearchContext);

    const videocards = data.filter(obj => {
        if(obj.name.toLowerCase().includes(searchValue.toLowerCase())){
            return true;
        }

        return false;
    }).map((obj) => (<Card key={obj.id} id={obj.id} pic={obj.pic} title={obj.name} price={obj.price} count={obj.count}/>))

    return(
        <div className="container">
            <div className="category__header">
                <h3>Видеокарты</h3>
            </div>
            <Sort/>
            <div className="category-grid">
                <div className="category-filters-sidebar">
                    <div className="category-sort">
                        <details open={true}>
                            <summary>Производители</summary>
                                <ul>
                                    <li><a>Amd</a></li>
                                    <li><a>Nvidia</a></li>
                                </ul>
                        </details>
                        <details open={true}>
                            <summary>Вендоры</summary>
                                <ul>
                                    <li><a>Gigabyte</a></li>
                                    <li><a>Maxsun</a></li>
                                    <li><a>Asus</a></li>
                                    <li><a>China Refab</a></li>
                                </ul>
                        </details>
                        <details open={true}>
                            <summary>Модели</summary>
                                <ul>
                                    <li><a>RTX 3080</a></li>
                                    <li><a>RTX 3080Ti</a></li>
                                </ul>
                        </details>
                    </div>
                </div>
                <div className="category-content">
                    {videocards}
                </div>
            </div>
            <Pagination/>
        </div>
    );}

export default CategoryGPU;
