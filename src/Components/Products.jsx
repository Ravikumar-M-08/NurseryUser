import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
    return (
        <>
            <div className='container-fluid'>
                <div className="gardening-head">
                    <img src="/image/home/banner1.jpg" alt="img" />
                    <h3 className="title">Products</h3>
                </div>
                <div>
                    <h1 className='text-center'>Our Products</h1>
                    <div className="product_section">
                        <div className="products">
                            <img src="/image/products/products1.jpg" alt="" />
                            <div className="goto">
                                <p>Gardening</p>
                                <Link to='/gardening'>Gardening</Link>
                            </div>
                        </div>
                        <div className="products">
                            <img src="/image/products/products2.jpg" alt="" />
                            <div className="goto">
                                <p>Plants</p>
                                <Link to='/plants'>Explore</Link>
                            </div>
                        </div>
                        <div className="products">
                            <img src="/image/products/products3.jpg" alt="" />
                            <div className="goto">
                                <p>Seeds</p>
                                <Link to='/seeds'>Explore</Link>
                            </div>
                        </div>
                        <div className="products">
                            <img src="/image/products/products4.jpg" alt="" />
                            <div className="goto">
                                <p>Bubls</p>
                                <Link to='/bubls'>Explore</Link>
                            </div>
                        </div>
                        <div className="products">
                            <img src="/image/products/products5.jpg" alt="" />
                            <div className="goto">
                                <p>Pots</p>
                                <Link to='/plots'>Explore</Link>
                            </div>
                        </div>
                        <div className="products">
                            <img src="/image/products/products7.jpg" alt="" />
                            <div className="goto">
                                <p>Fertilizer</p>
                                <Link to='/fertilizer'>Explore</Link>
                            </div>
                        </div>
                        <div className="products">
                            <img src="/image/products/products6.jpg" alt="" />
                            <div className="goto">
                                <p>Accessories</p>
                                <Link to='/accessories'>Explore</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Products
