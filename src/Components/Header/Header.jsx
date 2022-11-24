import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping, faHeart, faMagnifyingGlass, faUser} from "@fortawesome/free-solid-svg-icons";
import NavItemCount from "../NavItemCount";
import { Link } from "react-router-dom";
import ModalLogin from "../ModalLogin";
import headerStyles from "./Header.module.css";

function Header(){
    const [modalActive, setModalActive] = useState(false);

    return (
        <header className={headerStyles.header}>
            <div className="container">
                <div className={headerStyles.header__nav}>
                    <Link to="/" className="logo">Хагенти</Link>
                    <div className="nav-search">
                        <form className="nav-search-form">
                            <input type="text" placeholder="KSAS 1000W?" className="search"></input>
                                <button type="submit"><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
                        </form>
                    </div>
                    <nav className="nav">
                        <ul className="nav-list">
                            <li className="nav-item">
                                <button onClick={() => setModalActive(!modalActive)}><FontAwesomeIcon icon={faUser}/></button>
                                {modalActive && <ModalLogin state={() => setModalActive(!modalActive)}/>}
                            </li>
                            <li className="nav-item">
                                <NavItemCount></NavItemCount>
                                <FontAwesomeIcon className="nav-item-icon" icon={faHeart}/>
                                <a href="/" className="nav-link">Избранное</a>
                            </li>
                            <li className="nav-item">
                                <NavItemCount></NavItemCount>
                                <FontAwesomeIcon className="nav-item-icon" icon={faCartShopping}/>
                                <Link to={"/Cart"} className="nav-link">Корзина</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )}
export default Header;