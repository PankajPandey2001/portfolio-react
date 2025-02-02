import React, { useState } from "react";
import "./navbar.css";
import image from '../../assets/Logo1.png';
import img1 from '../../assets/nav_underline.svg' ; 

const Navbar = () => {

     const [menu , setMenu] = useState('home') ; 


    return (

        <div className="navbar">

            <div className="main-logo">

            <img className="nav-image" src={image} alt="logo-here" />
{/* 
            <img className="underline-img1" src={img1} alt="image"></img> */}
            </div>


            <ul className="nav-menu">
                <li>
                     <p onClick={()=>{setMenu('Home')}} > Home </p>{menu === 'Home' ? <img src={img1} alt="underline"/> : <></>}      
                </li>

                <li>
                    <p onClick={()=>{setMenu('About')}} > About Me </p> {menu === 'About' ? <img src={img1} alt="underline"/> : <></>}
                </li>

                <li>
                    <p onClick={()=>{setMenu('Services')}}> Services</p> {menu === 'Services' ? <img src={img1} alt="underline"/> : <></>}
                </li>

                <li>
                <p onClick={()=>{setMenu('Portfolio')}}> Portfolio</p> {menu === 'Portfolio' ? <img src={img1} alt="underline"/> : <></>}
                </li>

                <li>
                <p onClick={()=>{setMenu('Contact')}}> Contact</p> {menu === 'Contact' ? <img src={img1} alt="underline"/> : <></>}
                </li>



            </ul>


             <div className="nav-connect">
               Connect With me
             </div>
        </div>
    );


}


export default Navbar; 