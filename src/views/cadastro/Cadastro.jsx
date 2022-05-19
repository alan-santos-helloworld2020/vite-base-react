import React, { useRef, useState } from 'react';
import Swal from 'sweetalert2';

const Cadastro = () => {
    const formulario = useRef()
    const [cliente, setCliente] = useState({
        nome: "",
        telefone: "",
        email: "",
        cep: ""
    })
    function salvar(event) {
        event.preventDefault()
        Swal.fire({
            title:"Sucesso",
            icon:"success",
            text:JSON.stringify(cliente)
        }).then(()=>{
            fetch("http://localhost:3000/cliente",{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(cliente)
            }).then(res=>res.json())
            .then(data=>console.table(data))
            .catch(err=>console.error(err.message))            
            formulario.current.reset()
        })
        
    }
    return (
        <div className="position-absolute top-50 start-50 translate-middle col-10 col-lg-6">
            <p className="text-center fw-bold">Cadastro</p>
            <form onSubmit={salvar} ref={formulario}>
                <div className="mb-3">
                    <label htmlFor="nome" className="form-label">Nome</label>
                    <input type="text" onChange={(e) => setCliente({ ...cliente, nome: e.target.value })} className="form-control" name="nome" id="nome" aria-describedby="helpId" placeholder="" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="telefone" className="form-label">Telefone</label>
                    <input type="tel" onChange={(e) => setCliente({ ...cliente, telefone: e.target.value })} className="form-control" name="telefone" id="telefone" aria-describedby="helpId" placeholder="" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" onChange={(e) => setCliente({ ...cliente, email: e.target.value })} className="form-control" name="email" id="email" aria-describedby="helpId" placeholder="" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="cep" className="form-label">Cep</label>
                    <input type="text" onChange={(e) => setCliente({ ...cliente, cep: e.target.value })} className="form-control" name="cep" id="cep" aria-describedby="helpId" placeholder="" required/>
                </div>
                <div className="mb-3 d-flex justify-content-end">
                    <button type="submit" className="btn btn-primary d-flex">
                        <span className="me-2">ENVIAR</span>
                        <i className="material-icons">send</i>
                    </button>
                </div>
            </form>
        </div>

    )
}


export default Cadastro;