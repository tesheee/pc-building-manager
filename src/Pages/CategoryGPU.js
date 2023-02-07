import React, { useState } from "react";
import axios from 'axios';
import { Card, Pagination, Sort } from "../Components";
import { SearchContext } from "../App";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from "../Components/ItemBlock/Skeleton"

function CategoryGPU() {
    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    //const dispatch = useDispatch();
    //const sortType = useSelector((state) => state.filter.sort.sortProperty)

    React.useEffect(() => {
        
        axios
        .get(
            `https://6395a92790ac47c680703bcd.mockapi.io/GPU?page=${currentPage}&limit=4`
        )
        .then((res) => {
            setItems(res.data);
            setIsLoading(false);
        });

    }, [currentPage])

    const { searchValue } = React.useContext(SearchContext);

    const videocards = items.filter(obj => {
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
                    {
                        isLoading ? [...new Array(4)].map((_, index) => <Skeleton key={index}/>) : videocards
                    }
                </div>
            </div>
            <Pagination onChangePage={(number) => setCurrentPage(number)}/>
        </div>
    );}

export default CategoryGPU;
