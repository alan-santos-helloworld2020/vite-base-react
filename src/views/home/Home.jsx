import React, { useEffect } from "react";
import logo from '../../logo.svg'
import './Home.css'

const Home = () => {
    document.title="Home";
    useEffect(()=>{
        
    },[]);
    return (
        <div className="position-absolute top-50 start-50 translate-middle">
            <img src={logo}/>
            <h3 className="text-center fw-bold">Home</h3>
        </div>
    )
}

export default Home;
