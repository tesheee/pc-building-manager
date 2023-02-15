import React, { useState } from "react";
import axios from "axios";
import { Card, Pagination, Sort, Filters } from "../Components";
import { SearchContext } from "../App";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from "../Components/ItemBlock/Skeleton"
import { setCurrentPage } from "../redux/slices/filterSlice";

function Category() {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const dispatch = useDispatch();
    const { sort, currentPage } = useSelector((state) => state.filter)

    const { searchValue } = React.useContext(SearchContext);

    const getProducts = async () => {
        setIsLoading(true);

        const sortBy = sort.sortProperty.replace('-', '');
        console.log(sortBy);
        const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
        console.log(order);
        //const search = searchValue ? `&search=${searchValue}` : '';

        try {
            const res = await axios.get(
                `https://6395a92790ac47c680703bcd.mockapi.io/GPU?page=${currentPage}&limit=4&sortBy=${sortBy}&order=${order}`
            );
            setItems(res.data);
        } catch (error) {
            console.log('ERROR: ', error);
        } finally {
            setIsLoading(false);
        }

        window.scrollTo(0, 0);
    }

    const onChangePage = (number) => {
        dispatch(setCurrentPage(number))
    }

    React.useEffect(() => {
        getProducts();
    }, [currentPage, sort.sortProperty, searchValue])

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
                <Filters/>
                <div className="category-content">
                    {
                        isLoading ? [...new Array(4)].map((_, index) => <Skeleton key={index}/>) : videocards
                    }
                </div>
            </div>
            <Pagination currentPage={currentPage} onChangePage={onChangePage}/>
        </div>
    );}

export default Category;
