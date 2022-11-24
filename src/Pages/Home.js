import React from "react";
import { Categories } from "../Components";
import { Link } from "react-router-dom";

function Home(){
    return(
        <>
            <div className="container">
                <div className="mainpage-top-grid">
                    <Categories items={[
                        ['Видеокарты', 'GPU'],
                        ['Процессоры', 'CPU'],
                        ['Материнские платы', 'Motherboards'],
                        ['Оперативная память', 'RAM'],
                        ['Блоки питания', 'PSU'],
                        ['Охлаждение', 'Cooling'],
                        ['Hdd', 'HDD'],
                        ['SSD', 'SDD'],
                        ['Корпуса', 'Cases']      
                    ]}/>
                    <div className="mainpage-configurator-grid">
                        <div className="mainpage-configurator">
                            <img id="category-img-swapper"
                                 src="https://media.cdn.sapphiretech.com.cn/-/media/sites/sapphire/pim/product-images/11308_01_rx6900xt_nitro_16ggddr6/11308_01_rx6900xt_nitro_16gbgddr6_c02_800x500.ashx"
                                 draggable="false"/>
                        </div>
                    </div>
                </div>
                <div className="mainpage-bot-grid">
                    <div className="mainpage-bot-block-left">
                        <h2>Конфигуратор ПК</h2>
                    </div>
                    <div className="mainpage-bot-block-center">
                        <h3>Готовые сборки</h3>
                        <ul>
                            <li><Link to="/">Игровая</Link></li>
                            <li><Link to="/">Для работы</Link></li>
                            <li><Link to="/">Для офиса</Link></li>
                            <li><Link to="/">Для Доты</Link></li>
                            <li><Link to="/">Для Танков</Link></li>
                        </ul>
                    </div>
                    <div className="mainpage-bot-block-right">
                        <h3>Попробуйте!</h3>
                        <Link to="/">Создать собственную сборку</Link>
                    </div>
                </div>
            </div>
        </>
    );}

export default Home;

