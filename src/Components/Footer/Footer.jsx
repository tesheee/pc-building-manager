import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import footerStyles from "./Footer.module.css";


function Footer(){
    return (
        <footer>
            <div className="container">
                <div className={footerStyles.footer__content}>
                    <div className="contacts">
                        <h1>Контакты</h1>
                        <p>+79996667536</p>
                        <h1>Cоц. сети</h1>
                        <button><FontAwesomeIcon icon="fa-brands fa-vk"/></button>
                        <button><FontAwesomeIcon icon="fa-brands fa-telegram"/></button>
                    </div>
                    <div className="copyright"><p>Copyright © GlekTeam.com, 2022</p></div>
                </div>
            </div>
        </footer>
    )}
export default Footer;