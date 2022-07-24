import { Facebook, Instagram, LinkedIn, MenuBook, Pinterest, SettingsPowerRounded, Twitter, GitHub } from '@material-ui/icons'
import React, { useState } from 'react'
import './styles/Main.scss'
import man from './assets/man.png'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Works from './Works'
import Contact from './Contact'
import logos from './assets/logos.png'



const Main = () => {

    const navigate = useNavigate();


    // const navigateToWorks = () =>{
    //     navigate('/works');
    // }

    const navigateToCOntact = () =>{
        navigate('/contact');
    }

    return (
        <div className='main'>
            <div className='main__container'>


                <div className="main__content">

                    <div className="text">
                            <p>Hey There !</p>
                            <h1>I am Adisa Rasak</h1>
                            <p>Web & App Developer</p>
                            <p>Graphics Design</p>

                            <div className="icons">
                                <a href="https://www.twitter.com/uncle_real1" target="_blank" className='social_accounts'><Twitter className='icon'/></a>
                                <a href="https://github.com/Adisaduke/" target="_blank" className='social_accounts'><GitHub className='icon'/></a>
                                <a href="https://www.linkedin.com/in/adisa-rasak-51189b201/" target="_blank" className='social_accounts'><LinkedIn className='icon'/></a>
                            </div>


                    <div className="buttons">
                        <a href={logos} download="logos.png">Download CV</a>
                        <button onClick={navigateToCOntact}>Hire Me Now</button>

                        <Routes>
                            <Route path='/works' element={<Works/>}/>
                            <Route path='/contact' element={<Contact/>}/>
                        </Routes>
                    </div>

                    </div>


                </div>


                <div className="main__img">
                    <img src={man} alt="" />
                </div>


            </div>



        </div>
    )
}


export default Main
