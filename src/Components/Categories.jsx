import React from "react";
import {Link} from "react-router-dom";

function Categories({ items }) {
    return(
        <>
            <h1>Категории</h1>
            {
                items.map((name, index) => <div className="category-menu-item active" key={`${name}_${index}`}>
                    <Link to={"/Category/" + name[1]}>{name[0]}</Link>
                </div>)
            }
        </>
    )}

export default Categories;
