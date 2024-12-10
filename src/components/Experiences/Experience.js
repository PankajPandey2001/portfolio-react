import './experience.css';

import Section from '../Section(for Experience)/Section';

import img1 from '../../assets/nav_underline.svg';
import { useState } from 'react';

import { RxCrossCircled } from "react-icons/rx";


const Experience = () => {



    const [showDetail, setShowDetail] = useState(false);

    const [content, setContent] = useState({ heading: "", para1: "", para2: "" });


    const handleClick = () => {

        setShowDetail(false);
    }


    return (


        <div className='experience'>


            <h1 className='experience-heading'> My Experience</h1>


            <div className='experience-position'>  {/*/ ye div banaya hai taaki isko position ko relative karke 
                  img ko apne according kahin bhi set kar sakein
                // */}

                <img src={img1}></img>
            </div>
            <div className='experience-grid'>


                <Section number='01' topic='WellsFargo' content='Working as a Software developer at Wells fargo' para1="At Wells Fargo, I contribute to building scalable and user-friendly banking solutions using Spring Boot for backend development and React for crafting seamless frontend experiences. My role involves designing, developing, and maintaining RESTful APIs, ensuring secure and efficient data transactions." para2="Beyond coding, I actively participate in code reviews, troubleshooting, and implementing best practices to maintain high-quality software standards. My responsibilities also include debugging complex issues" handleRead={setShowDetail} handleContent={setContent} />

                <Section number='02' topic='Coding Blocks' content='JAVA Trainer at Romdeo College of Engineering ' para1="As a Java DSA Trainer at Ramdeo Baba College of Engineering, I had the opportunity to mentor and teach over 150 students the intricacies of Java programming and Data Structures & Algorithms (DSA)." para2="My role involved designing comprehensive course materials, delivering interactive lectures, and conducting hands-on coding sessions to help students master problem-solving skills and algorithmic thinking.

" handleRead={setShowDetail} handleContent={setContent} />

                <Section number='03' topic='Inept Studio Pvt Ltd' content='Working as a full Stack developer ' para1="I contributed to designing and developing dynamic, responsive, and user-centric web applications. I worked across the entire development lifecycle, handling both frontend and backend responsibilities." para2="On the frontend, I utilized modern frameworks to build intuitive user interfaces, while on the backend, I developed robust APIs and implemented efficient database solutions." handleRead={setShowDetail} handleContent={setContent} />

                <Section number='04' topic='SkillsYard' content='Java DSA Trainer ' para1="Developed and delivered structured lesson plans, quizzes, and practical assignments to reinforce theoretical learning with hands-on coding experience." para2="Guided students through coding challenges, ensuring they grasped critical concepts such as arrays, linked lists, trees, graphs, sorting algorithms, dynamic programming, and more." handleRead={setShowDetail} handleContent={setContent} />


                <Section number='05' topic='HyperLoop Games Pvt Ltd' content='FrontEnd Web Developer ' para1="Collaborated with a team of developers and designers to build and maintain engaging user interfaces for web-based gaming platforms.
Utilized HTML, CSS, JavaScript, and front-end frameworks like React to create responsive and visually appealing game pages." para2="Worked closely with back-end developers to integrate APIs, ensuring seamless data flow between the front-end and back-end systems." handleRead={setShowDetail} handleContent={setContent} />

                <Section number='06' topic='Coding Blocks' content='Python Instructor at 3 governemnt school' para1="Taught Python programming to over 200 students, ranging from beginners to intermediate learners, fostering an interest in coding and problem-solving.
Developed and delivered interactive lessons, assignments, and projects to help students understand core programming concepts such as variables, loops, conditionals, functions, and data structures." para2="Implemented hands-on exercises and coding challenges to encourage students to apply their learning in real-world scenarios." handleRead={setShowDetail} handleContent={setContent} />


            </div>


            <div className={showDetail ? 'display' : 'not-display'}>

                <div className='window-pop'>







                    <div className='cross-icon'>
                        <h1>
                            {content.heading}
                        </h1>


                      

                       <div className='window-close'>
                           <RxCrossCircled  size={40} onClick={handleClick} />
                       </div>
                        

                        

                    </div>


                    <p>

                        {content.para1}
                    </p>

                    <p>

                        {content.para2}
                    </p>

                </div>

            </div>
        </div>



    );


}


export default Experience; 