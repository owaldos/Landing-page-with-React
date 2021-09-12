import React from "react";

const Navbar = () => {
	return (
		<nav className="navbar  navbar-expand-lg navbar-dark bg-dark">
			<div className="container w-75">
				<div className="col-6">
					<a className="navbar-brand" href="#">
						Bootstrap
					</a>
				</div>

				<div
					className=" col-6 collapse navbar-collapse justify-content-end"
					id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<a className="nav-link active" href="#">
							Home <span className="sr-only">(current)</span>
						</a>
						<a className="nav-link" href="#">
							About
						</a>
						<a className="nav-link" href="#">
							Services
						</a>
						<a className="nav-link" href="#">
							Contact
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
