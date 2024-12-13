import Project_section from "./Project_section";

import './project.css' ; 

import image from '../../assets/nav_underline.svg'

const Project = () =>{


    return (


        <div className="project">

            <h1 className="project-heading"> Projects </h1>



  {/* hum image ko div ke andar isliye rakh re hain so that , img ka koi parent continer ho jisko him position relative dekar
 img ki position ko abosolute karke , use apne accoridng set kar sake */}
         <div className="project-heading-underline">
         <img src={image} alt="image loading"/>

         </div>
           

            <div className="project-content">

                  <Project_section name = "react-notes" />

                  <Project_section name = "Ping Pong game" />

                  <Project_section name = "Portfolio" />

                  <Project_section name = "To-do-list" />

          
            </div>
            
        </div>
    ) ; 


}

export default Project ;