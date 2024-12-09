import './section.css' ; 
import { FaArrowRightLong } from "react-icons/fa6";

const Section = ({number , topic , content }) =>{

    return (

        <div className="section">
           
           <p className="section-heading"> {number}</p>

           <p className="section-topic">{topic}</p>

             
          <p className="section-content"> {content} </p>

          <div className="section-footer">

             <p> Read more</p>

             <FaArrowRightLong />
          </div>
        </div>
    ) ; 

}

export default Section ; 