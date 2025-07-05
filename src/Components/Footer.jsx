
function Footer() {
    return (
        <>
            <footer className="">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-12 d-flex justify-content-center align-items-center">
                            <div className="connect">
                                <p className="text-center">Get In Touch With Us For The Best Quality Plants & Succulents</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <img src="logo.png" alt="" width="100%" />
                                <div className="logo">
                                    <ul className="d-flex justify-content-evenly">
                                        <li>
                                            <a href=""><span className="fa-brands fa-instagram"></span></a>
                                        </li>
                                        <li>
                                            <a href=""><span className="fa-brands fa-facebook"></span></a>
                                        </li>
                                        <li>
                                            <a href=""><span className="fa-brands fa-youtube"></span></a>
                                        </li>
                                    </ul>
                                </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="quick-link">
                                <h3>Quick Links</h3>
                                <ul>
                                    <li>
                                        <a href="">Home</a>
                                    </li>
                                    <li>
                                        <a href="">Products</a>
                                    </li>
                                    <li>
                                        <a href="">About</a>
                                    </li>
                                    <li>
                                        <a href="">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="news_letter row">
                                <div className="">
                                    <div>
                                        <h5>Sign Up For Newsletters</h5>
                                        <p>Get E-mail updates about our latest shop and <span>special offers.</span></p>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="sign_up mt-4 ">
                                        <form action="" >
                                            <input type="email" placeholder="Your Email Address" />
                                                <input type="submit" value="Sign Up" />
                                        </form>
                                            
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copy-rights text-center">
                            <div>
                                <p className="m-0">Copyright © 2025 The Garden Path Chennai</p>
                            </div>

                        </div>
                </div>
            </footer>
        </>
    )
}
export default Footer