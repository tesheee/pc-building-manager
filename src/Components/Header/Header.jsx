import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping, faHeart, faUser} from "@fortawesome/free-solid-svg-icons";
import NavItemCount from "../NavItemCount";
import { Link } from "react-router-dom";
import ModalLogin from "../ModalLogin";
import Search from "./Search";

function Header(){
    const [modalActive, setModalActive] = useState(false);

    return (
        <header className="header">
            <div className="container">
                <div className="header__nav">
                    <Link to="/" className={"logo"}>Hagenti</Link>
                    <Search/>
                    <nav className="nav">
                        <ul className="nav__list">
                            <li className="nav-item">
                                <button onClick={() => setModalActive(!modalActive)}><FontAwesomeIcon icon={faUser}/></button>
                                {modalActive && <ModalLogin state={() => setModalActive(!modalActive)}/>}
                            </li>
                            <li className="nav-item">
                                <Link to={"/"}><FontAwesomeIcon className="nav-item-icon" icon={faHeart}></FontAwesomeIcon></Link>
                                <Link to={"/"} className="nav-link">Избранное</Link>
                            </li>
                            <li className="nav-item">
                                <NavItemCount/>
                                <Link to={"/Cart"}><FontAwesomeIcon className="nav-item-icon" icon={faCartShopping}/></Link>
                                <Link to={"/Cart"} className="nav-link">Корзина</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )}
export default Header;
