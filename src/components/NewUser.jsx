import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Loading } from "./Loading";

const url = 'https://playground.4geeks.com/contact/'
const usuario = "damian"

export const NewUser = () => {

    const [loading, setLoading] = useState(false);

    const newUser = async () => {
        setLoading(true)
        try {
            const res = await fetch(`${url}agendas/${usuario}`, {
                method: 'POST'
            });
            if (res.ok) {
                window.location.reload();
            } else {
                console.error("Error en la respuesta del servidor");
            }
        } catch (err) {
            console.error("Error al cargar usuario", err);
        }
        setLoading(false)
    }
    return (
        <>
            {loading ? (<Loading />) : (
                <div className="container bodyNewUser">
                    <h1 className="NewUserText">Error, Crea Un Usuario</h1>
                    <button className="butNewUser" onClick={newUser}>NewUser</button>
                </div>
            )};
        </>
    )
};