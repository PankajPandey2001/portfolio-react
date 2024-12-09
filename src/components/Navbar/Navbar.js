import React from "react";
import "./navbar.css";
import image from '../../assets/Logo1.png';
import img1 from '../../assets/nav_underline.svg' ; 

const Navbar = () => {

    return (

        <div className="navbar">

            <div className="main-logo">

            <img className="nav-image" src={image} alt="logo-here" />

            <img className="underline-img1" src={img1} alt="image"></img>
            </div>


            <ul className="nav-menu">
                <li>
                    Home

                    <img className="underline-img" src={img1} alt="image"></img>
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