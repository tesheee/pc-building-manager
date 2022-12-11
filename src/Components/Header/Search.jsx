import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass, faXmark} from "@fortawesome/free-solid-svg-icons";
import { SearchContext } from "../../App";

function Search(){

    const { searchValue, setSearchValue } = React.useContext(SearchContext);

    return (
        <div className="nav-search">
        <form className="nav-search-form">
            <input value={searchValue} onChange={event => setSearchValue(event.target.value)} type="text" placeholder="KSAS 1000W?" className="search"></input>
                {searchValue && (<button onClick={() => {setSearchValue("")}} className="search-markX__icon" type="submit"><FontAwesomeIcon icon={faXmark}/></button>)}
                <button type="submit" className="search-icon"><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
        </form>
    </div>
    )}
export default Search;