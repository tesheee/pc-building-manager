import React from "react";
import { Categories } from "../Components";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

const mainBlockAnimation = {
    hidden: {
        y: 30,
        opacity: 0.2,
    },
    visible: {
        y: 0,
        opacity: 1,
    }
}

function Home(){
    return(
        <>
            <motion.div className="container" initial="hidden" whileInView="visible">
                <div className="mainpage-top-grid">
                    <motion.div variants={mainBlockAnimation} className="mainpage-category-menu">
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
                     </motion.div>
                    <div className="mainpage-configurator-grid">
                        <motion.div variants={mainBlockAnimation} transition={{ delay: 0.02 }} className="mainpage-configurator">
                            <img id="category-img-swapper"
                                 src="https://media.cdn.sapphiretech.com.cn/-/media/sites/sapphire/pim/product-images/11308_01_rx6900xt_nitro_16ggddr6/11308_01_rx6900xt_nitro_16gbgddr6_c02_800x500.ashx"
                                 draggable="false"/>
                        </motion.div>
                    </div>
                </div>
                <div className="mainpage-bot-grid">
                    <div className="mainpage-bot-block-left">
                        <h2>Конфигуратор ПК</h2>
                    </div>
                    <div className="mainpage-bot-block-center">
                        <h3>Готовые сборки</h3>
                        <ul>
                            <li><Link to="/Develop">Игровая</Link></li>
                            <li><Link to="/Develop">Для работы</Link></li>
                            <li><Link to="/Develop">Для офиса</Link></li>
                            <li><Link to="/Develop">Для Доты</Link></li>
                            <li><Link to="/Develop">Для Танков</Link></li>
                        </ul>
                    </div>
                    <div className="mainpage-bot-block-right">
                        <h3>Попробуйте!</h3>
                        <Link to="/Develop">Создать собственную сборку</Link>
                    </div>
                </div>
            </motion.div>
        </>
    );}

export default Home;

