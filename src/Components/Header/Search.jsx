import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import debounce from "lodash.debounce";
import { SearchContext } from "../../App";

function Search(){
    const [value, setValue] = React.useState('');
    const { setSearchValue } = React.useContext(SearchContext);
    const inputRef = React.useRef()

    const onClickClear = () => {
        setSearchValue('');
        setValue('');
        inputRef.current.focus();
    };

    const updateSearchValue = React.useCallback(
      debounce((str) => {
        setSearchValue(str);
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
            <input value={value} ref={inputRef} onChange={onChangeInput} type="text" placeholder="KSAS 1000W?" className="search"></input>
                {value && (<button 
                onClick={onClickClear} 
                className="search-markX__icon" 
                type="submit"><FontAwesomeIcon icon={faXmark}/></button>)}
                <button type="submit" className="search-icon"><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
        </form>
    </div>
    )}
export default Search;