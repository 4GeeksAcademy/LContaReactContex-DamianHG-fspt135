import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const Card = (prop) => {
	return (
		<div className="cardBody">
			<div className="fotoText">
			<img src="https://images.cults3d.com/RwmZK0pz8ahkVJLhO3o79fVzatI=/516x516/filters:no_upscale()/https://fbi.cults3d.com/uploaders/48171591/illustration-file/2dea9b91-e3a9-4eea-87c7-f4f10aeaacc5/1.png"/>
			<div className="textBody">
			<p className=" name">{prop.name}</p>
			<p className="textCard email"><i className="fa-regular fa-envelope"></i>{prop.email}</p>
			<p className="textCard phone"><i className="fa-solid fa-mobile-screen"></i>{prop.phone}</p>
			<p className="textCard address"><i className="fa-solid fa-location-dot"></i>{prop.address}</p>
			</div>
			</div>
			<div className="buttonBody">
			<i className="fa-solid fa-pen"></i>
			<i className="fa-regular fa-trash-can"></i>
			</div>
		</div>
	);
};
Card.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
	phone: PropTypes.string,
	address: PropTypes.string,
};



