import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";

function Sort(){
    //const dispatch = useDispatch();
    //const sort = useSelector(state => state.filter.sort)

    const [activeIndex, setActiveIndex] = useState(null);

    const sortings = [
        {name: 'Сначала дешевле', sortProperty: '-price'},
        {name: 'Сначала дороже', sortProperty: 'price'},
        {name: 'Популярные', sortProperty: 'popular'},
        {name: 'Рейтинг', sortProperty: 'rating'},
    ];

    const onClickSort = (index) => {
        setActiveIndex(index);
    }

    return(
        <>
        <div className="category-filters">
            <span>Сортировать по:</span>
            {sortings.map((value, i) => (
                <a onClick={() => onClickSort(i)} className={activeIndex === i ? "active" : ""}>{value.name}</a>
            ))}
        </div>
        </>
    )
}

export default Sort;