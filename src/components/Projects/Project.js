import Project_section from "./Project_section";

import './project.css' ; 

import image from '../../assets/nav_underline.svg'

import notesAppImage from '../../assets/notes-app.png';
import pingpongImage from '../../assets/pingpong.png';

import firstPortfolio from '../../assets/first-portfolio.png' ; 

import toDo from '../../assets/ToDo.png' ; 


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

                  <Project_section  path={notesAppImage}/>

                  <Project_section  path={pingpongImage} />

                  <Project_section  path={firstPortfolio} />

                  <Project_section  path={toDo} />


          
            </div>
            
        </div>
    ) ; 


}

export default Project ;