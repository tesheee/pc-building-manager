import React from "react";

function ProductPage({ title }) {
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const slider = React.useRef();

    React.useEffect(() => {
        slider.current.style.transform = `translateX(${currentSlide}px)`;
    }, [currentSlide])

    return(
        <div className="container">
            <div className="product_grid">
            <div className="image_block">
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
                    <div className="image_item">
                        <a onClick={() => (setCurrentSlide(0))}>
                            <img src="https://static.gigabyte.com/StaticFile/Image/Global/303d4516244d408a66af70a74dfb8fe6/Product/26166"></img>
                        </a>
                    </div>
                    <div className="image_item">
                        <a onClick={() => (setCurrentSlide(-550))}>
                            <img src="https://static.gigabyte.com/StaticFile/Image/Global/303d4516244d408a66af70a74dfb8fe6/Product/26165"></img>
                        </a>
                    </div>
                    <div className="image_item">
                        <a onClick={() => (setCurrentSlide(-1090))}>
                            <img src="https://static.gigabyte.com/StaticFile/Image/Global/303d4516244d408a66af70a74dfb8fe6/Product/26168"></img>
                        </a>
                    </div>
                    <div className="image_item">
                        <a onClick={() => (setCurrentSlide(-1640))}>
                            <img src="https://static.gigabyte.com/StaticFile/Image/Global/303d4516244d408a66af70a74dfb8fe6/Product/26169"></img>
                        </a>
                    </div>
                    
                </div>
            </div>
            <div className="product_side_block">
                <h3>Видеокарта GIGABYTE AORUS RTX 3080</h3>
                <h4>72990$</h4>
            </div>
            </div>
        </div>
    );}

export default ProductPage;