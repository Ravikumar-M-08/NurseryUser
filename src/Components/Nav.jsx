import { Link, Outlet, useLocation } from 'react-router-dom';

function Nav() {
	const location = useLocation();

	return (
		<>
			<nav className="navbar navbar-expand-md bg-body-tertiary p-0">
				<div className="container-fluid nav">
					<Link className="navbar-brand" to="/"><img src="logo.png" alt="" width="70px" /></Link>
					<label for="menu" className="menu navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
						<input type="checkbox" name="menu" id="menu" />
						<span></span>
						<span></span>
						<span></span>
					</label>


					<div className="collapse navbar-collapse" id="navbarNavDropdown">
						<ul className="navbar-nav w-50">
							<li className="nav-item">
								<Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} >Home</Link>
							</li>
							<li className="nav-item">
								<Link to="/products" className={`nav-link ${location.pathname === '/products' ? 'active' : ''}`} >Products</Link>
							</li>

							<li className="nav-item">
								<Link to="/gallery" className={`nav-link ${location.pathname === '/gallery' ? 'active' : ''}`}>About</Link>
							</li>
							<li className="nav-item">
								<Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
							</li>
							<li className="nav-item">
								<Link to="/cart" className={`nav-link ${location.pathname === '/cart' ? 'active' : ''}`} >cart</Link>
							</li>
							{/* <li className="nav-item">
								<Link  to="/login" className={`nav-link ${location.pathname === '/login' ? 'active' : ''}`}>Login</Link>
							</li> */}
						</ul>
					</div>
				</div>
			</nav>
			<Outlet />
		</>

	)
}

export default Nav;


