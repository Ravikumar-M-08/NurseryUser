import { Link } from "react-router-dom";
function Login() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12 p-0">
                        <div className="register-page">
                            <form action="" method="post">
                                <div>
                                    <span>
                                        <h2>Get Started Now</h2>
                                    </span>

                                    <div className="input_section mt-4">
                                        <input type="text" />
                                        <span>Email</span>
                                    </div>
                                    <div className="input_section mt-4">
                                        <input type="text" />
                                        <span>Password</span>
                                    </div>

                                    <div className="terms_condition mt-2">
                                        <input type="checkbox" /><span htmlFor="">I Agree to the <a href="">Terms & Condition</a></span>
                                    </div>
                                </div>
                                <div className="goto_login row">
                                    <div className="col-lg-8 col-md-6 col-12">
                                        <p>Already a Member <Link to="/register"><span>Goto Login</span></Link></p>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-12">
                                        <button>Sign Up</button>
                                    </div>
                                </div>

                            </form>

                        </div>
                    </div>
                    <div className="col-lg-6 col-12 p-0">
                        <div className="register_page_img">
                            <img src="register.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;