import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSort } from '../redux/slices/filterSlice';

function Sort(){
    const dispatch = useDispatch();
    const sort = useSelector(state => state.filter.sort)

    const [activeIndex, setActiveIndex] = useState(null);

    const list = [
        {name: 'Популярные', sortProperty: 'popular'},
        {name: 'Сначала дешевле', sortProperty: '-price'},
        {name: 'Сначала дороже', sortProperty: 'price'},
        //{name: 'Рейтинг (DESK)', sortProperty: 'rating'},
    ];

    const onClickSort = (obj, i) => {
        dispatch(setSort(obj));
        setActiveIndex(i);
    }

    return(
        <>
        <div className="category-filters">
            <span>Сортировать по:</span>
            {list.map((obj, i) => (
                <a onClick={() => onClickSort(obj, i)} key={i} className={activeIndex === i ? "active" : ""}>{obj.name}</a>
            ))}
        </div>
        </>
    )
}

export default Sort;