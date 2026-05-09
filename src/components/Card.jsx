import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import PropsTypes from "prop-types";
import { ModalDelete } from "./ModalDelete";
import useGlobalReducer from "../hooks/useGlobalReducer";


export const Card = (props) => {
	const {store, dispatch} = useGlobalReducer();
	const navigate = useNavigate();
	const [modalDelete, setModalDelete] = useState(false);
	const editContact = ()=>{
		dispatch({
			type: 'edit_contact',
			payload: props
		});
		navigate('/editContact')
	};

	return (
		<div className="cardBody">
			<div className="fotoText">
			<img src="https://thumbs.dreamstime.com/b/stylish-raccoon-cool-funny-theme-style-cyberpunk-steampunk-dark-vintage-background-generative-ai-stylish-363100606.jpg"/>
			<div className="textBody">
			<p className=" name">{props.name}</p>
			<p className="textCard email"><i className="fa-regular fa-envelope"></i>{props.email}</p>
			<p className="textCard phone"><i className="fa-solid fa-mobile-screen"></i>{props.phone}</p>
			<p className="textCard address"><i className="fa-solid fa-location-dot"></i>{props.address}</p>
			</div>
			</div>
			<div className="buttonBody">
			<i style={{ cursor: "pointer" }} onClick={editContact} className="fa-solid fa-pen"></i>
			<i style={{ cursor: "pointer" }} data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setModalDelete(true)} className="fa-regular fa-trash-can"></i>
			</div>
			{modalDelete && (<ModalDelete
			id={props.id}
			closeModal={() =>setModalDelete(false)}
			newList={props.newList}
			/>)}
		</div>
		
	);
};
Card.propsTypes = {
    name: PropsTypes.string,
    email: PropsTypes.string,
	phone: PropsTypes.string,
	address: PropsTypes.string,
	id: PropsTypes.number
};



