import React from "react";
import { Link } from "react-router-dom";

const Navegador = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand fw-bold" to={{pathname:"/"}}>Onload</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link"  to={{pathname:"/"}}>Home</Link>             
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link"  to={{pathname:"/cadastro"}}>Cadastro</Link>             
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={{pathname:"/sobre"}}>Sobre</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


export default Navegador;