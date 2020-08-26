import React from 'react'
import Background from '../components/Background/Background'
function About() {
    return (
        <Background background='wall1'>
        <div className='about'>
           <h3> Developed by Elcan Simuratli</h3>
            <ul>
                <li> <a href="https://github.com/Simuratli">Github</a> </li>
                <li><a href="https://www.linkedin.com/in/elcan-simuratli-36678818a/">Linkedin</a></li>
                <li> <a href="https://www.facebook.com/simuratli/">Facebook</a></li>
            </ul>
        </div>
        </Background>
    )
}

export default About
