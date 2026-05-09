import React, { useState } from "react";
import { useEffect } from "react";
import { Card } from "../components/Card";
import { Link } from "react-router-dom";
import { Loading } from "../components/Loading";
import useGlobalReducer from "../hooks/useGlobalReducer";
const url = 'https://playground.4geeks.com/contact/'
const usuario = "damian"


export const Contacs = () => {

	const [list, setList] = useState([]);
	const [loading, setLoading] = useState(false);

	const getData = async () => {
		setLoading(true)
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
		setLoading(false)
	};

	useEffect(() => {
		getData();
	}, []);



	return (
		<>
			{loading ? (<Loading />) : (
				<div className="text-center mt-5">
					<Link to='/AddContact'>
						<button className="butNewCont"><i className="fa-solid fa-plus"></i> Add New Contact</button>
					</Link>
					{list.map((contacs) => {
						return <Card name={contacs.name} email={contacs.email} phone={contacs.phone} address={contacs.address} id={contacs.id} newList={getData} />
					})}
				</div>
			)};
		</>
	);
}; 