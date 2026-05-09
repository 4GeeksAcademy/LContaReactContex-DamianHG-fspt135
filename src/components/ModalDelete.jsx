import React, { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
const url = 'https://playground.4geeks.com/contact/'
const usuario = "damian"

export const ModalDelete = (props) => {
    
    const delCont = async () => {
        try {
            const res = await fetch(`${url}agendas/${usuario}/contacts/${props.id}`, {
                method: 'DELETE'
            });
            
            if (res.ok) {
               await props.newList();
                props.closeModal();
            }
        } catch (err) {
            console.error("Error al borrar el contacto", err);
        }
    };

    return (
        <div className="modal show d-block" style={{backgroundColor: 'rgba(0,0,0,0.5)'}} tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Are you sure?</h1>
                        <button type="button" className="btnX" onClick={props.closeModal}><i class="fa-solid fa-xmark"></i></button>
                    </div>
                    <div className="modal-body">
                        If you delete this thing the entire universe will go down!
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btnClose" onClick={props.closeModal}>Oh no!</button>
                        <button type="button" className="btnDelete" onClick={delCont}>Yes baby!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}