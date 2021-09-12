import React from "react";

import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

//create your first component
const Home = () => {
	let data = [
		{
			img: "",
			alt: "imagen referencial",
			title: "titulo de la tarjeta",
			description: "descripcion "
		},
		{
			img: "",
			alt: "imagen referencial",
			title: "titulo de la otra tarjeta",
			description: "descripcion de la segunda tarjeta "
		},
		{
			img: "",
			alt: "imagen referencial",
			title: "titulo de la tercera tarjeta",
			description: "descripcion de la tercera tarjeta "
		}
	];

	return (
		<>
			<Navbar />
			<div className="container w-75">
				<Jumbotron />
				<div className="card-group">
					{data.map(item => (
						<Card data={item} />
					))}
					;
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;
