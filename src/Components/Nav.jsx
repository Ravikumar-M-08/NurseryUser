import { Link, Outlet, useLocation } from 'react-router-dom';

function Nav() {
	const location = useLocation();

	return (
		<>
			<nav className="navbar navbar-expand-md bg-body-tertiary p-0">
				<div className="container-fluid nav">
					<Link className="navbar-brand" to="/"><img src="public/image/logo.png" alt="" width="70px" /></Link>
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

							{/* <li className="nav-item dropdown">
								<Link className="nav-link dropdown-toggle" id='navbardrop' role="button"
									data-bs-toggle="dropdown">
									Product
								</Link>
								<ul className="dropdown-menu" aria-labelledby='navbardrop'>
									<li><Link className="dropdown-item" to='/gardening'>Gardening</Link></li>
									<li><Link className="dropdown-item" to='/plants'>Plants</Link></li>
									<li><Link className="dropdown-item" to='/seeds'>Seeds</Link></li>
									<li><Link className="dropdown-item" to='/bubls'>Bubls</Link></li>
									<li><Link className="dropdown-item" to='/plots'>Pots</Link></li>
									<li><Link className="dropdown-item" to='/fertilizer'>Fertilizer</Link></li>
									<li><Link className="dropdown-item" to='/accessories'>Accessories</Link></li>
								</ul>
							</li> */}
							<li className="nav-item">
								<Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
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


