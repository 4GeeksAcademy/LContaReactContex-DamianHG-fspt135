// Import necessary components from react-router-dom and other parts of the application.
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.
import React, { useState } from "react";
const url = 'https://playground.4geeks.com/contact/'
const usuario = "damian"

export const AddContact = () => {
  // Access the global state and dispatch function using the useGlobalReducer hook.

  const [value, setValue] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  });

  const onclick = async () => {
    try {
      const newContact = {
        "name": value.name,
        "phone": value.phone,
        "email": value.email,
        "address": value.address
      }
      console.log('soy el nuevo contacto', newContact);
      
      const res = await fetch(`${url}agendas/${usuario}/contacts`, {
				method: 'POST',
				body: JSON.stringify(newContact),
				headers: {
					'Content-type': 'application/json'
				}
			});
			const data = await res.json();
      console.log('soy la data', data);
      
    } catch (err) {
      console.error("Error agregando Contacto", err)
    }
  };
console.log('value', value);

  const handleChange= (inputValue, key) =>{
    setValue({...value, [key] : inputValue})
  };

  return (
    <div className="container">
      <h1>Add a new contac</h1>
      <p>Full Name</p>
      <input placeholder="Full name" onChange={(e) => handleChange(e.target.value, 'name')}></input>
      <p>Email</p>
      <input placeholder="Email" onChange={(e) => handleChange(e.target.value, 'email')}></input>
      <p>Phone</p>
      <input placeholder="Phone" onChange={(e) => handleChange(e.target.value, 'phone')}></input>
      <p>Address</p>
      <input placeholder="Address" onChange={(e) => handleChange(e.target.value, 'address')}></input>
      <button onClick={onclick}>Save</button>
      <Link to='/'>
        <p>Get back to Contacts</p>
      </Link>
    </div>
  );
};
