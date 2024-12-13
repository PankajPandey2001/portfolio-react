import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Experience from "./components/Experiences/Experience";
import Project from "./components/Projects/Project"

const App = () =>{

   return (


       <div>
        <Navbar/>
        <Intro/>

        <About/>

        <Experience/>

         <Project/>
       </div>
   ) ; 


}


export default App ; 