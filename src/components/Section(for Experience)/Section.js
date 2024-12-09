import { BiHeading } from 'react-icons/bi';
import './section.css' ; 
import { FaArrowRightLong } from "react-icons/fa6";

const Section = ({number , topic , content  , para1 , para2 , handleRead , handleContent}) =>{




    const handleClick = () =>{

         handleRead(true) ; 

         console.log("click ho rahai") ; 

         const obj = {
             heading : topic ,
             para1 :  para1 , 
             para2 : para2,
         }

         handleContent(obj) ; 

    }

    return (

        <div className="section">
           
           <p className="section-heading"> {number}</p>

           <p className="section-topic">{topic}</p>

             
          <p className="section-content"> {content} </p>

          <div className="section-footer">

             <p className='section-read-more' onClick={handleClick}> Read more</p>


             
             <FaArrowRightLong />
          </div>
        </div>
    ) ; 

}

export default Section ; 