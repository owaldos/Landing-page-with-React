import React from "react";
import PropTypes from "prop-types";

const Card = ({ data }) => {
	return (
		<>
			<div className="card w-25 mb-5 mx-2">
				<img src={data.img} className="card-img-top" alt={data.alt} />
				<div className="card-body">
					<h5 className="card-title">{data.title}</h5>
					<p className="card-text">{data.description}</p>
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		</>
	);
};

export default Card;

Card.propTypes = {
	data: PropTypes.object
};
