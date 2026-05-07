import React, { useState } from "react";
import { useEffect } from "react";
import { Card } from "../components/Card";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
const url = 'https://playground.4geeks.com/contact/'
const usuario = "damian"


export const Contacs = () => {

	// https://playground.4geeks.com/contact/agendas/damian
	const [list, setList] = useState([])


	const newUser = async () => {
		try {
			const res = await fetch(`${url}agendas/${usuario}`, {
				method: 'POST'
			});
		} catch (err) {
			console.error("Error al cargar usuario", err);
		}
	}

	const getData = async () => {
		try {
			const res = await fetch(`${url}agendas/${usuario}`, {
				method: 'GET'
			});
			const data = await res.json();
			console.log(data);

			setList(data.contacts);
			console.log('soy el data.coantaccts', data.contacs);


		} catch (err) {
			console.error("Error al cargar tareas", err);
		}
	};
	console.log('soy el list', list);

	useEffect(() => {
		getData();
	}, []);

	return (
		<div className="text-center mt-5">
			<Link to='/AddContact'>
			<button>Add New Contact</button>
			</Link>
			
			{list.map((contacs) => {
				return <Card name={contacs.name} email={contacs.email} phone={contacs.phone} address={contacs.address} />
			})};
			<button onClick={newUser}>NewUser</button>
		</div>
	);
}; 