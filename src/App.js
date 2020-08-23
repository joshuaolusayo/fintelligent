import React from "react";
import { Link } from "react-router-dom";

function App() {
	return (
		<div className="App bg-white">
			<header className="shadow w-100">
				<div className="container">
					{/* header */}
					<nav className="navbar navbar-expand-lg navbar-light flex-column flex-md-row justify-content-center justify-content-md-between align-items-center px-0">
						<Link to="/" className="text-blue title mb-3 mb-md-0">
							Fintelligent.
						</Link>

						<div className="d-flex justify-content-end">
							<Link to="/signin" className="mr-4">
								<button className="btn bg-transparent text-blue login">Log in</button>
							</Link>
							<Link to="/signup">
								<button className="btn bg-blue text-white">Get started</button>
							</Link>
						</div>
					</nav>
				</div>
			</header>

			<section className="container content d-flex align-items-center">
				{/* content */}
				<div className="col-md-6 px-0">
					<h1 className="text-secondary">Feel Better About Investing</h1>
					<h1 className="text-black">It's your money, your destiny</h1>
					<p className="text-muted font-weight-bold remb">Remember when investing was boring and complex? Fintelligence isn't.</p>
				</div>
			</section>
		</div>
	);
}

export default App;
