import './about.css';

import image from '../../assets/port_image3.png' ; 

import img1 from '../../assets/nav_underline.svg'
const About = () => {

    return (


        <div className='about'>


            
            <h2> About me </h2>

             
             <div className='about-position'>  {/*/ ye div banaya hai taaki isko position ko relative karke 
                  img ko apne according kahin bhi set kar sakein
                // */}

                <img src={img1}></img>
             </div>
            
         


            <div className='about-description'>

                <img src={image} alt='image' />

                <div className='about-content'>


                    <div className='about-first'>
                        <p>Hello! I'm a passionate Full Stack Developer with a strong foundation in both frontend and backend development. Over the years, I have honed my skills in building dynamic, scalable, and user-centric web applications.
                        </p>

                        <p>

                            On the backend, my expertise includes Spring Boot, Java, Python, MySQL, and MongoDB, where I enjoy designing robust APIs and managing seamless data flows.
                        </p>
                    </div>

                    <div className='about-second'>

                        <div className='about-second-one'>

                            <p> HTML & CSS</p>
                            <p className='about-secondd border1'> </p>
                        </div>

                        <div className='about-second-one'>

                            <p> React JS</p>
                            <p className='about-secondd border2'> </p>
                        </div>

                        <div className='about-second-one'>

                            <p> SpringBoot</p>
                            <p className='about-secondd border3'> </p>
                        </div>

                        <div className='about-second-one'>

                            <p> Java</p>
                            <p className='about-secondd border4'> </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='about-footer'>


                <div className='about-footer-first tr'>
                    <h3 className='about-number'> 2+
                    </h3>

                    <p>YEARS OF EXPERIENCE</p>


                </div>

                 <div className='about-seperator '>
                    |
                 </div>
                <div className='about-footer-second tr'>

                    <h3 className='about-number'> 20+
                    </h3>

                    <p> PROJECTS COMPLETED</p>
                </div>
                <div className='about-seperator'>
                    |
                 </div>

                <div className='about-footer-third tr'>
                    <h3 className='about-number'> 1000+
                    </h3>

                    <p>DSA PROBLEMS SOLVED</p>
                </div>
            </div>



        </div>



    );

}

export default About; 