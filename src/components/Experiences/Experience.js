import './experience.css';

import Section from '../Section(for Experience)/Section';

import img1 from '../../assets/nav_underline.svg' ; 
import { useState } from 'react';


const Experience = () =>{



     const [showDetail , setShowDetail] = useState(false) ; 

     const[content , setContent] = useState({ heading: "" , para1 : ""  , para2 : ""}) ; 


   return (


      <div className='experience'>


             <h1 className='experience-heading'> My Experience</h1>


             <div className='experience-position'>  {/*/ ye div banaya hai taaki isko position ko relative karke 
                  img ko apne according kahin bhi set kar sakein
                // */}

                <img src={img1}></img>
             </div>
      <div className='experience-grid'>

      
           <Section number='01' topic='WellsFargo' content='Working as a Software developer at Wells fargo' para1="" para2="" handleRead={setShowDetail}  handleContent={setContent}/>

           <Section number='02' topic='Coding Blocks' content='JAVA Trainer at Romdeo College of Engineering ' para1="" para2="" handleRead={setShowDetail}  handleContent={setContent}/>

           <Section number='03' topic='Inept Studio Pvt Ltd' content='Working as a full Stack developer ' para1="" para2="" handleRead={setShowDetail}  handleContent={setContent}/>

           <Section number='04' topic='SkillsYard' content='Java DSA Trainer 'para1="" para2="" handleRead={setShowDetail}  handleContent={setContent} />

            
           <Section number='05' topic='HyperLoop Games Pvt Ltd' content='FrontEnd Web Developer ' para1="" para2="" handleRead={setShowDetail}  handleContent={setContent} /> 

           <Section number='06' topic='Coding Blocks' content='Python Instructor at 3 governemnt school' para1="" para2=""handleRead={setShowDetail}  handleContent={setContent} /> 


      </div>


      <div className={showDetail ? 'display': 'not-display'}>

             <div>


                mera naam
                
             </div>

      </div>
      </div>



   ) ; 


}


export default Experience ; 