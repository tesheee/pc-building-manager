import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping, faHeart, faUser} from "@fortawesome/free-solid-svg-icons";
import NavItemCount from "../NavItemCount";
import { Link } from "react-router-dom";
import ModalLogin from "../ModalLogin";
import headerStyles from "./Header.module.css";
import Search from "./Search";

function Header(){
    const [modalActive, setModalActive] = useState(false);

    return (
        <header className={headerStyles.header}>
            <div className="container">
                <div className={headerStyles.header__nav}>
                    <Link to="/" className={headerStyles.logo}>Хагенти</Link>
                    <Search/>
                    <nav className={headerStyles.nav}>
                        <ul className={headerStyles.nav__list}>
                            <li className="nav-item">
                                <button onClick={() => setModalActive(!modalActive)}><FontAwesomeIcon icon={faUser}/></button>
                                {modalActive && <ModalLogin state={() => setModalActive(!modalActive)}/>}
                            </li>
                            <li className="nav-item">
                                <FontAwesomeIcon className="nav-item-icon" icon={faHeart}/>
                                <Link to={"/"} className="nav-link">Избранное</Link>
                            </li>
                            <li className="nav-item">
                                <NavItemCount/>
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