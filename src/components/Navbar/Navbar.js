import React, { useState } from "react";
import "./navbar.css";
import image from '../../assets/Logo1.png';
import img1 from '../../assets/nav_underline.svg' ; 
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {

     const [menu , setMenu] = useState('home') ; 


    return (

        <div id="navbar" className="navbar">

            <div className="main-logo">

            <img className="nav-image" src={image} alt="logo-here" />

            </div>


            <ul className="nav-menu">
                <li>
                    <AnchorLink  className="anchor-link"  href="#intro"> <p className="nav-no-margin" onClick={()=>{setMenu('Home')}} > Home </p> </AnchorLink>{menu === 'Home' ? <img src={img1} alt="underline"/> : <></>}      
                </li>

                <li>
                   <AnchorLink  className="anchor-link" href="#about"> <p  className="nav-no-margin" onClick={()=>{setMenu('About')}} > About Me </p > </AnchorLink>{menu === 'About' ? <img  style={{marginTop: '-2px'}}src={img1} alt="underline"/> : <></>}
                </li>

                <li>
                    <AnchorLink className="anchor-link"  href="#experience"> <p className="nav-no-margin" onClick={()=>{setMenu('Services')}}> Services</p> </AnchorLink>{menu === 'Services' ? <img src={img1} alt="underline"/> : <></>}
                </li>

                <li>
                 <AnchorLink className="anchor-link"  href="#project"><p  className="nav-no-margin" onClick={()=>{setMenu('Portfolio')}}> Portfolio</p> </AnchorLink>{menu === 'Portfolio' ? <img src={img1} alt="underline"/> : <></>}
                </li>

                <li>
                 <AnchorLink  className="anchor-link" href="#contact"><p  className="nav-no-margin" onClick={()=>{setMenu('Contact')}}> Contact</p> </AnchorLink>{menu === 'Contact' ? <img src={img1} alt="underline"/> : <></>}
                </li>



            </ul>


             <div className="nav-connect"> <AnchorLink href="#contact" className='anchor-connect-underline'  > 
               Connect With me
               </AnchorLink>
             </div>
        </div>
    );


}


export default Navbar; 