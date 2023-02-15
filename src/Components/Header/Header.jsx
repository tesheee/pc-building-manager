import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faGear, faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import NavItemCount from "../NavItemCount";
import { Link } from "react-router-dom";
import ModalLogin from "../ModalLogin";
import Search from "./Search";

function Header(){
    const [modalActive, setModalActive] = useState(false);

    return (
        <header>
            <div className="container">
                <div className="header__nav">
                    <Link to="/" className={"logo"}>Hagenti</Link>
                    <Link to="/Configurator" className="nav__button">Конфигуратор ПК <FontAwesomeIcon className="pad-l-5" icon={faGear}/></Link>
                    <Search/>
                    <ul className="nav__list">
                        <li>
                            <a className="nav-item" onClick={() => setModalActive(!modalActive)}>
                                <FontAwesomeIcon icon={faUser} size={"lg"}/>
                                {modalActive && <ModalLogin state={() => setModalActive(!modalActive)}/>}
                                Вадим
                            </a>
                        </li>
                        <li >
                            <Link to={"/"} className="nav-item">
                                <FontAwesomeIcon className="nav-item-icon" icon={faHeart} size={"lg"}/>
                                Избранное
                            </Link>
                        </li>
                        <li>
                            <NavItemCount/>
                            <Link to={"/Cart"} className="nav-item">
                                <FontAwesomeIcon className="nav-item-icon" icon={faCartShopping} size={"lg"}/>
                                Корзина
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )}
export default Header;