import React from "react";
// import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FaSearch } from 'react-icons/fa'
import { HiOutlineXMark } from 'react-icons/hi2'
import { useDispatch, useSelector } from "react-redux";
import searchStyles from "./Search.module.scss"

import debounce from "lodash.debounce";
import { setSearch } from "../../../redux/slices/searchSlice";

function Search(){
    const dispatch = useDispatch();
    const searchValue = useSelector((state) => state.search.searchValue);
    const [value, setValue] = React.useState('');
    const inputRef = React.useRef()

    const onClickClear = () => {
        dispatch(setSearch(''))
        setValue('');
        inputRef.current.focus();
    };

    const updateSearchValue = React.useCallback(
      debounce((str) => {
        dispatch(setSearch(str))
      }, 250),
      [],
    )
    
    const onChangeInput = (event) => {
        setValue(event.target.value);
        updateSearchValue(event.target.value);
    };

    return (
        <div className="nav-search">
        <form className="nav-search-form">
            <input value={value} ref={inputRef} onChange={onChangeInput} type="text" placeholder="Поиск" className={searchStyles.search}></input>
                {value && (<button 
                onClick={onClickClear} 
                className={searchStyles.search_markX__icon}
                type="submit"><HiOutlineXMark/></button>)}
                <button type="submit" className={searchStyles.search_icon}><FaSearch/></button>
        </form>
    </div>
    )}
export default Search;