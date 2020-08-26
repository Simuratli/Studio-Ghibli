import React,{useState} from 'react'
import './LocationsCard.scss'
function MovieCard({name,climate,terrain,surface,films}) {

    const [state, setstate] = useState(false)

    function openBlock(){
        setstate(!state)
    }

    return (
        <div  className="movie-card">
            <div onClick={openBlock} className="movie-header">
            <h1>{name}</h1>
            <button className='movie-button' onClick={openBlock}>+</button>
            </div>
            <div className={`movie-info panel ${state?'openInfo':''}`}>
            <h3>Climate:{climate}</h3>
            <h4>Terrain:{terrain}</h4>
            <h4>Surface water:{surface}</h4>
            
            </div>
            
        </div>
    )
}

export default MovieCard
