import React, { useRef, useState, useEffect } from "react";
import { Categories } from "../Components";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import data from "../data";

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

    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth((carousel.current.scrollWidth - carousel.current.offsetWidth));
    }, [])
    

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
                <h3 className="title">Популярные товары</h3>
                <motion.div ref={carousel} whileTap={{cursor: "grabbing"}} className="carousel">
                <motion.div drag={"x"} dragConstraints={{right: 0, left: -width}}  className="mainpage-bot-flex">
                    <div className="mainpage-bot-block-left">
                        <a>RTX 3080</a>
                        <img src="https://static.gigabyte.com/StaticFile/Image/Global/303d4516244d408a66af70a74dfb8fe6/Product/26166"/>
                        <div className="category-content__buy__block">
                            <p>100115₽</p>
                            <a className="category-content__item__button">Купить</a>
                        </div>
                    </div>
                    <div className="mainpage-bot-block-left">
                        <a>Ryzen 9 5900x</a>
                        <img src="https://www.amd.com/system/files/2022-11/1761310-amd-ryzen-9-7000-series-PIB-angle-1260x709.png"/>
                        <div className="category-content__buy__block">
                            <p>50115₽</p>
                            <a className="category-content__item__button">Купить</a>
                        </div>
                    </div>
                    <div className="mainpage-bot-block-left">
                        <a>Z790 AORUS</a>
                        <img src="https://www.gigabyte.com/Image/1179b2ed6a06bb7f43bd798c948ebf92/Product/32318/webp/1000"/>
                        <div className="category-content__buy__block">
                            <p>100115₽</p>
                            <a className="category-content__item__button">Купить</a>
                        </div>
                    </div>
                    <div className="mainpage-bot-block-left">
                        <a>Rtx 3080</a>
                        <img src="https://static.gigabyte.com/StaticFile/Image/Global/303d4516244d408a66af70a74dfb8fe6/Product/26166"/>
                        <div className="category-content__buy__block">
                            <p>100115₽</p>
                            <a className="category-content__item__button">Купить</a>
                        </div>
                    </div>
                    <div className="mainpage-bot-block-left">
                        <a>Rtx 3080</a>
                        <img src="https://static.gigabyte.com/StaticFile/Image/Global/303d4516244d408a66af70a74dfb8fe6/Product/26166"/>
                        <div className="category-content__buy__block">
                            <p>100115₽</p>
                            <a className="category-content__item__button">Купить</a>
                        </div>
                    </div>
                    <div className="mainpage-bot-block-left">
                        <a>Rtx 3080</a>
                        <img src="https://static.gigabyte.com/StaticFile/Image/Global/303d4516244d408a66af70a74dfb8fe6/Product/26166"/>
                        <div className="category-content__buy__block">
                            <p>100115₽</p>
                            <a className="category-content__item__button">Купить</a>
                        </div>
                    </div>
                    <div className="mainpage-bot-block-left">
                        <a>Rtx 3080</a>
                        <img src="https://static.gigabyte.com/StaticFile/Image/Global/303d4516244d408a66af70a74dfb8fe6/Product/26166"/>
                        <div className="category-content__buy__block">
                            <p>100115₽</p>
                            <a className="category-content__item__button">Купить</a>
                        </div>
                    </div>
                    <div className="mainpage-bot-block-left">
                        <a>Rtx 3080</a>
                        <img src="https://static.gigabyte.com/StaticFile/Image/Global/303d4516244d408a66af70a74dfb8fe6/Product/26166"/>
                        <div className="category-content__buy__block">
                            <p>100115₽</p>
                            <a className="category-content__item__button">Купить</a>
                        </div>
                    </div>
                </motion.div>
                </motion.div>
            </motion.div>
        </>
    );}

export default Home;

