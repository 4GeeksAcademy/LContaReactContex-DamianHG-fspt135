// Import necessary components from react-router-dom and other parts of the application.
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loading } from "../components/Loading";
const url = 'https://playground.4geeks.com/contact/'
const usuario = "damian"

export const AddContact = () => {
  // Access the global state and dispatch function using the useGlobalReducer hook.
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState (false)

  const [value, setValue] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  });

  const onclick = async () => {
    if (value.name === "" || value.email === "" || 
        value.phone === "" || value.address === "") {
        setError(true); 
        return;         
    }
    setError(false);

    setLoading(true);
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
      if (res.ok) {
        const data = await res.json();
        console.log('Contacto guardado:', data);
        navigate("/");
      } else {
        console.error("Error en la respuesta del servidor");
      }
      setLoading(false)
    } catch (err) {
      console.error("Error agregando Contacto", err)
    }
  };
  console.log('value', value);

  const handleChange = (inputValue, key) => {
    setValue({ ...value, [key]: inputValue })
  };

  return (
    <>
      {loading ? (<Loading />) : (
        <div className="container BodyForm">
          <h1 className="titleForm">Add a new contac</h1>
          {error && (
            <div className="alert alert-danger" role="alert">
                Todos los campos son obligatorios.
            </div>
        )}
          <p className="textForm">Full Name</p>
          <input className="inputForm" type="text" placeholder="Full name" onChange={(e) => handleChange(e.target.value, 'name')}></input>
          <p className="textForm">Email</p>
          <input className="inputForm" type="text" placeholder="Email" onChange={(e) => handleChange(e.target.value, 'email')}></input>
          <p className="textForm">Phone</p>
          <input className="inputForm" type="number" placeholder="Phone" onChange={(e) => handleChange(e.target.value, 'phone')}></input>
          <p className="textForm">Address</p>
          <input className="inputForm"  type="text" placeholder="Address" onChange={(e) => handleChange(e.target.value, 'address')}></input>
          <button className="butForm" onClick={onclick}>Save</button>
          <Link to='/'>
            <p className="linkForm">Get back to Contacts</p>
          </Link>
        </div>
      )};
    </>
  );
};
