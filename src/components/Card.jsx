import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const Card = (prop) => {
	return (
		<div>
			<img src="https://images.cults3d.com/RwmZK0pz8ahkVJLhO3o79fVzatI=/516x516/filters:no_upscale()/https://fbi.cults3d.com/uploaders/48171591/illustration-file/2dea9b91-e3a9-4eea-87c7-f4f10aeaacc5/1.png"/>
			<p>{prop.name}</p>
			<p>{prop.email}</p>
			<p>{prop.phone}</p>
			<p>{prop.address}</p>
			<button>lapiz</button>
			<button>trash</button>
		</div>
	);
};
Card.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
	phone: PropTypes.string,
	address: PropTypes.string,
};



