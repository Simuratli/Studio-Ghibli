import React from 'react'
import './Loader.scss'
function Loader() {
    return (
       <div className="loader">
            <img className='loader-img' src={require('../../assets/images/giphy.gif')} alt="Ghibli loader"/>
       </div>
    )
}

export default Loader
