import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faTelegram, faVk } from "@fortawesome/free-brands-svg-icons"
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
                        <div className={footerStyles.social__network__icons}>
                            <a><FontAwesomeIcon icon={faTelegram} size={"2x"}/></a>
                            <a href="https://vk.com/id473606599"><FontAwesomeIcon icon={faVk} size={"2x"}/></a>
                        </div>
                    </div>
                    <div className="copyright"><p>Copyright © GlekTeam.com, 2022</p></div>
                </div>
            </div>
        </footer>
    )}
export default Footer;