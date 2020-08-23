import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
	return (
		<div className="sign-in">
			<header className="shadow w-100">
				<div className="container">
					{/* header */}
					<nav className="navbar navbar-expand-lg navbar-light flex-column flex-md-row justify-content-center justify-content-md-between align-items-center px-0">
						<Link to="/" className="text-blue title mb-3 mb-md-0">
							Fintelligent.
						</Link>

						<div className="d-flex justify-content-end">
							<Link to="/forgot-password">
								<button className="btn bg-blue text-white">Forgot Password?</button>
							</Link>
						</div>
					</nav>
				</div>
			</header>
			<section className="container content d-flex justify-content-center align-items-center">
				<div className="form h-100 d-flex justify-content-center">
					<form action="#" className="d-flex flex-column justify-content-center align-items-center">
						<h1 className="font-weight-bold mb-lg-5">Sign In</h1>
						<input className="d-block w-100 border-0 py-2 mb-3" type="text" placeholder="Email" />
						<input className="d-block w-100 border-0 py-2 mb-3" type="password" placeholder="Password" />
						<div className="d-flex flex-column justify-content-end w-100">
							<button type="submit" className="btn bg-blue text-white w-100 mb-3 py-2">
								Sign In
							</button>
							<Link to="/forgot-password d-block w-100">
								<button className="btn bg-secondary text-black w-100 py-2">Google Sign In</button>
							</Link>
						</div>
					</form>
				</div>
			</section>
		</div>
	);
};

export default SignIn;
