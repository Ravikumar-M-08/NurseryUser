import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
// import Data from "./Data.json";
const Home = ({cart, setcart}) => {
    const carouselRef = useRef(null);
    const listRef = useRef(null);
    const nextBtnRef = useRef(null);
    const prevBtnRef = useRef(null);
    const runningTimeRef = useRef(null);

    useEffect(() => {
        const nextBtn = nextBtnRef.current;
        const prevBtn = prevBtnRef.current;
        const carousel = carouselRef.current;
        const list = listRef.current;
        const runningTime = runningTimeRef.current;

        let timeRunning = 3000;
        let timeAutoNext = 7000;
        let runTimeOut;
        let runNextAuto;

        const resetTimeAnimation = () => {
            if (runningTime) {
                runningTime.style.animation = 'none';
                // Force reflow
                runningTime.offsetHeight;
                runningTime.style.animation = null;
                runningTime.style.animation = 'runningTime 7s linear 1 forwards';
            }
        };

        const showSlider = (type) => {
            const sliderItemsDom = list.querySelectorAll('.item');
            if (type === 'next') {
                list.appendChild(sliderItemsDom[0]);
                carousel.classNameList.add('next');
            } else {
                list.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
                carousel.classNameList.add('prev');
            }

            clearTimeout(runTimeOut);
            runTimeOut = setTimeout(() => {
                carousel.classNameList.remove('next');
                carousel.classNameList.remove('prev');
            }, timeRunning);

            clearTimeout(runNextAuto);
            runNextAuto = setTimeout(() => {
                showSlider('next');
            }, timeAutoNext);

            resetTimeAnimation();
        };

        nextBtn.onclick = () => showSlider('next');
        prevBtn.onclick = () => showSlider('prev');

        // Initial auto slide
        runNextAuto = setTimeout(() => {
            showSlider('next');
        }, timeAutoNext);

        resetTimeAnimation();

        return () => {
            clearTimeout(runTimeOut);
            clearTimeout(runNextAuto);
        };
    }, []);

    // const setdata = document.getElementById('setdata');
    const [selectedProduct, setSelectedProduct] = useState(null);

    const setdata = (id) => {
        const product = Data.find(info => info.productId === id);
        setSelectedProduct(product);
    };

    const addTocart=(product)=>{
        const existing = cart.find((item)=> item.productId === product.productId);
        if(existing){
            alert("This Product is Already in Cart...");
            const updatedCart = cart.map((item)=>
                item.productId === product.productId ? {...item, quantity:item.quantity+1} : item
            );
            setcart(updatedCart)
        }else{
            setcart([...cart,{...product,quantity:1}]);
        }
    }

    const[Data,getData] = useState([])

    useEffect(()=>{
        trigger()
    },[])

    async function trigger(){
        const values = await axios.get("http://localhost:8080/data")
        getData(values.data)
    }


    return (
        <>
            {/* --- CAROUSEL SECTION --- */}
            <div className="container-fulid">
                <div className="carousel" ref={carouselRef}>
                    <div className="list" ref={listRef}>
                        {[
                            { title: 'EAGLE', img: '/image/home/carousal4.jpg' },
                            { title: 'OWL', img: '/image/home/carousal1.jpg' },
                            { title: 'CROW', img: '/image/home/carousal2.jpg' },
                            { title: 'BUTTERFLY', img: '/image/home/carousal3.avif' },
                        ].map((item, index) => (
                            <div className="item" key={index} style={{ backgroundImage: `url(${item.img})` }}>
                                <div className="content">
                                    <div className="title">SLIDER</div>
                                    <div className="name">{item.title}</div>
                                    <div className="des">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</div>
                                    <div className="btn"><a href="#">Shop Now</a></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="arrows">
                        <button className="prev" ref={prevBtnRef}>‹</button>
                        <button className="next" ref={nextBtnRef}>›</button>
                    </div>

                    <div className="timeRunning" ref={runningTimeRef}></div>
                </div>
            </div>
            <div className="container">
                <div className="products_container">
                    {
                        Data.map(info => {
                            return (
                                <div className="product_container">
                                    <a href="#exampleModalToggle" className="product_link" data-bs-toggle="modal" id="setdata" onClick={() => setdata(info.productId)}>
                                        <div className="product_card">
                                            <div className="product_img">
                                                <img src={info.productImg} alt="" width="100%" height="230px" />
                                            </div>
                                            <div>
                                                <p>{info.productName}</p>
                                                <span className="price"><span>&#8377;{info.productprice}</span></span>
                                                <span className="discount">10% off</span>
                                                <a href="#" onClick={() => addTocart(info)} className="add_to_card"><span className="fa-solid fa-cart-shopping"></span></a>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            {selectedProduct && (
                <div className="modal fade m-0 p-0" id="exampleModalToggle">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <img src={selectedProduct.productImg} width="100%" />
                            </div>
                            <div className="modal-body">
                                <div className='modal-name'>
                                    <h5>{selectedProduct.productName}</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#1f1f1f"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg></button>
                                </div>
                                <div>
                                    <span className='me-2'>₹{selectedProduct.productprice}</span>
                                    <p>{selectedProduct.productCategery}</p>
                                    <p>{selectedProduct.productDescription}</p>
                                </div>
                                <div className='modal-addtocart'>
                                    <div className='modal-add'>
                                        <button onClick={() => addTocart(selectedProduct)} >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}


            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-8 col-md-12 col-12 mt-3">
                        <div className="banner banner1">
                            <div className="content">
                                <h2>A Living Gift - Upto 30% Off</h2>
                                <h5 className="mb-4">Express True Emotions with gift that grows forever.</h5>
                                <img src="public/image/home/sub_image1.png" alt="" />
                                <a href="">Shop Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mt-3">
                        <div className="banner banner2">
                            <div className="content">
                                <h2>Organic Seeds - 50% off</h2>
                                <h5 className="mb-4">Best quality seeds for organic lovers.No chemical No preservatives</h5>
                                <img src="public/image/home/sub_image2.png" alt="" />
                                <a href="">Shop Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mt-3">
                        <div className="banner banner2" >
                            <div className="content">
                                <h2>Microgreen Seeds - 50% Off</h2>
                                <h5 className="mb-4">Grow own food full of nutrients,flavour,and freshness</h5>
                                <img src="public/image/home/sub_image3.png" alt="" />
                                <a href="">Shop Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mt-3">
                        <div className="banner banner2" >
                            <div className="content">
                                <h2>Miniature Garden - Upto 30% Off</h2>
                                <h5 className="mb-4">Enjoy a living gerden environment spaces</h5>
                                <img src="public/image/home/sub_image4.png" alt="" />
                                <a href="">Shop Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mt-3">
                        <div className="banner banner2" >
                            <div className="content">
                                <h2>Event Gifts - Starting &#8377;119</h2>
                                <h5 className="mb-4">Enjoy a living gerden environment spaces</h5>
                                <img src="public/image/home/sub_image5.png" alt="" />
                                <a href="">Shop Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row supports mt-3">
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="d-flex support">
                            <div>
                                <i className="fa-solid fa-cart-flatbed-suitcase p-2"></i>
                            </div>
                            <div>
                                <h5>Largest Nursery</h5>
                                <p>1.2 Million plant lovers connected with us</p>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="d-flex support">
                            <div>
                                <i className="fa-solid fa-people-arrows p-2"></i>
                            </div>
                            <div>
                                <h5>Lifetime Support</h5>
                                <p>We help you grow your garden for lifetime</p>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 ">
                        <div className="d-flex support">
                            <div>
                                <i className="fa-solid fa-shop p-2"></i>
                            </div>
                            <div>
                                <h5>All India Delivery</h5>
                                <p>Delivering greenery across India since 2014</p>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="d-flex support">
                            <div>
                                <i className="fa-solid fa-truck-fast p-2"></i>
                            </div>
                            <div>
                                <h5>Secure Shipping</h5>
                                <p>Diligent care taken to deliver healthy plants</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 mt-3">
                        <div className="banner banner3" >
                            <div className="content">
                                <h2>Planters - Startign &#8377;129</h2>
                                <h5 className="mb-4">Add Color to your Garden.200+ pots of different colors,shapes, material.</h5>
                                <img src="public/image/home/sub_image6.png" alt="" />
                                <a href="">Shop Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 mt-3">
                        <div className="banner banner3" >
                            <div className="content">
                                <h2>Pebbles - Starting &#8377;79</h2>
                                <h5 className="mb-4">Add Visual and textural features to your garden with a wide range of natural
                                    pebbles</h5>
                                <img src="public/image/home/sub_image7.png" alt="" />
                                <a href="">Shop Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 mt-3">
                        <div className="banner banner3">
                            <div className="content">
                                <h2>Tools - Starting &#8377;129</h2>
                                <h5 className="mb-4">Get a tool for every gardening activity and make it fun experience.</h5>
                                <img src="public/image/home/sub_image9.png" alt="" />
                                <a href="">Shop Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 mt-3">
                        <div className="banner banner3" >
                            <div className="content">
                                <h2>Soil & Fertilizers - Starting &#8377;100</h2>
                                <h5 className="mb-4">Healthy food is a key for healthy plants.choose from a wide range of soil and
                                    fertiliers. </h5>
                                <img src="public/image/home/sub_image8.png" alt="" />
                                <a href="">Shop Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
