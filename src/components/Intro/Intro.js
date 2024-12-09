import './Intro.css';

import img from '../../assets/portimage-top.png' ; 

const Intro = () => {

    return (
        <div className='intro'>

            <img  src={img} alt='image laoding' />

            <h1 className='intro-heading'> <span className='intro-color'> I am Pankaj Pandey</span>, full stack developer </h1>

            <p className='intro-description'> I am a full stack developer from India , with 2 years of experience in multiple companies like Wells Fargo , SkillsYard , Inept Studio ,Coding Block </p>

            <div className='intro-footer'>

                <div className='first-div' >
                    Connect with me 
                </div>

                <div className='second-div'>

                    My resume
                </div>
            </div>
        </div>
    )
}

export default Intro; 