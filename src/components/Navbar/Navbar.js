import React from "react";
import "./navbar.css";
import image from '../../assets/Logo1.png';

const Navbar = () => {

    return (

        <div className="navbar">

            <img className="nav-image" src={image} alt="logo-here" />


            <ul className="nav-menu">
                <li>
                    Home
                </li>

                <li>
                    About Me
                </li>
                <li>
                    Services
                </li>
                <li>
                    Portfolio
                </li>
                <li>
                    Contact
                </li>



            </ul>


             <div className="nav-connect">
               Connect With me
             </div>
        </div>
    );


}


export default Navbar; 