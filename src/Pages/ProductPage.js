import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";

function ProductPage({ title }) {
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [numberSlide, setNumberSlide] = React.useState(1);
    const slider = React.useRef();

    React.useEffect(() => {
        slider.current.style.transform = `translateX(${currentSlide}px)`;
    }, [currentSlide])

    return(
        <div className="container">
            <div className="product_grid">
                <div className="image_block sticky block_bg">
                <div className="product_images">
                    <div className="image_display">
                        <div ref={slider} className="image_showcase">
                            <img src="https://static.gigabyte.com/StaticFile/Image/Global/303d4516244d408a66af70a74dfb8fe6/Product/26166"></img>
                            <img src="https://static.gigabyte.com/StaticFile/Image/Global/303d4516244d408a66af70a74dfb8fe6/Product/26165"></img>
                            <img src="https://static.gigabyte.com/StaticFile/Image/Global/303d4516244d408a66af70a74dfb8fe6/Product/26168"></img>
                            <img src="https://static.gigabyte.com/StaticFile/Image/Global/303d4516244d408a66af70a74dfb8fe6/Product/26169"></img>
                        </div>
                    </div>
                </div>
                <div className="image_select">
                    <div className={numberSlide === 1 ? 'image_item active_image' : "image_item"}>
                        <a onClick={() => (setCurrentSlide(0), setNumberSlide(1))}>
                            <img src="https://static.gigabyte.com/StaticFile/Image/Global/303d4516244d408a66af70a74dfb8fe6/Product/26166"></img>
                        </a>
                    </div>
                    <div className={numberSlide === 2 ? 'image_item active_image' : "image_item"}>
                        <a onClick={() => (setCurrentSlide(-480), setNumberSlide(2))}>
                            <img src="https://static.gigabyte.com/StaticFile/Image/Global/303d4516244d408a66af70a74dfb8fe6/Product/26165"></img>
                        </a>
                    </div>
                    <div className={numberSlide === 3 ? 'image_item active_image' : "image_item"}>
                        <a onClick={() => (setCurrentSlide(-970), setNumberSlide(3))}>
                            <img src="https://static.gigabyte.com/StaticFile/Image/Global/303d4516244d408a66af70a74dfb8fe6/Product/26168"></img>
                        </a>
                    </div>
                    <div className={numberSlide === 4 ? 'image_item active_image' : "image_item"}>
                        <a onClick={() => (setCurrentSlide(-1460), setNumberSlide(4))}>
                            <img src="https://static.gigabyte.com/StaticFile/Image/Global/303d4516244d408a66af70a74dfb8fe6/Product/26169"></img>
                        </a>
                    </div>
                    
                </div>
            </div>
            <div className="">
                <div className="product_header">
                    <h2>Видеокарта GIGABYTE AORUS RTX 3080</h2>
                    <div className="price_block_bg">
                        <div className="price-n-functions flex-row">
                            <h3>72990₽</h3>
                            <h4>18247₽ x 4</h4>
                            <button><FontAwesomeIcon icon={faHeart} size={"lg"}/></button>
                        </div>
                        <br/>
                        <a className="product_page__button">Добавить в корзину</a>
                        <br/>
                        <h3>Характеристики:</h3>
                        <div className="specs">
                        <ul>
                            <li>
                                <span>Видеочипсет: </span>
                                <span>NVIDIA GeForce RTX 3080, 1830 МГц</span>
                            </li>
                            <li><span>Память:</span> <span>12288 МБ GDDR6X, 19000 МГц</span></li>
                            <li><span>Интерфейс:</span> <span>PCI-E 4.0</span></li>
                            <li><span>Техпроцесс:</span> <span>8 нм</span></li>
                            <li><span>Разъемы:</span> <span>Display Port х 3</span></li>
                            <li><span>Питание:</span> <span>8+8 pin</span></li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="product_bot">
                <p>Характеристики</p>
                <p>Отзывы</p>
            </div>
        </div>
    );}

export default ProductPage;