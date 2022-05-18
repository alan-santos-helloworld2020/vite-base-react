import React from "react";
import logo from '../../logo.svg'
import './Home.css'

const Home = () => {
    return (
        <div class="position-absolute top-50 start-50 translate-middle">
            <img src={logo} alt="" srcset="" />
            <p className="text-center">Home</p>
        </div>
    )
}

export default Home;
