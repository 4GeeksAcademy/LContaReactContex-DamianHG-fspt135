// Import necessary components from react-router-dom and other parts of the application.
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loading } from "../components/Loading";
const url = 'https://playground.4geeks.com/contact/'
const usuario = "damian"


export const AddContact = (props) => {
  
  const {store, dispatch} = useGlobalReducer();
  const initialState = props.type === 'add' ? {
    name: "",
    email: "",
    phone: "",
    address: ""
  }: {
    name: store.editContact.name,
    email: store.editContact.email,
    phone: store.editContact.phone,
    address: store.editContact.address,
  }
const urlPost = `${url}agendas/${usuario}/contacts`
const urlPut = `${url}agendas/${usuario}/contacts/${store.editContact?.id}`
const setPost = 'POST'
const setPut = 'PUT'

  const urlChange = props.type === 'add' ? urlPost : urlPut
  const methodChange = props.type === 'add' ? setPost : setPut

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState (false)
  const [value, setValue] = useState(initialState);

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
      
      const res = await fetch(urlChange, {
        method: methodChange,
        body: JSON.stringify(newContact),
        headers: {
          'Content-type': 'application/json'
        }
      });
      if (res.ok) {
        const data = await res.json();
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
          <input className="inputForm" value={value.name} type="text" placeholder="Full name" onChange={(e) => handleChange(e.target.value, 'name')}></input>
          <p className="textForm">Email</p>
          <input className="inputForm" value={value.email} type="text" placeholder="Email" onChange={(e) => handleChange(e.target.value, 'email')}></input>
          <p className="textForm">Phone</p>
          <input className="inputForm" value={value.phone} type="number" placeholder="Phone" onChange={(e) => handleChange(e.target.value, 'phone')}></input>
          <p className="textForm">Address</p>
          <input className="inputForm" value={value.address}  type="text" placeholder="Address" onChange={(e) => handleChange(e.target.value, 'address')}></input>
          <button className="butForm" onClick={onclick}>Save</button>
          <Link to='/'>
            <p className="linkForm">Get back to Contacts</p>
          </Link>
        </div>
      )};
    </>
  );
};
