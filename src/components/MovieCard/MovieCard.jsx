import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './MovieCard.scss'
function MovieCard({name,year,description,producer,score,director,id}) {

    const [state, setstate] = useState(false)

    function openBlock(){
        setstate(!state)
    }

    return (
        <div  className="movie-card">
            <div onClick={openBlock} className="movie-header">
                <div onClick={openBlock}>
                    <h1>{name} <span className="year">({year})</span></h1>
                </div>
                <button className='movie-button' onClick={openBlock}>+</button>
            </div>
            <div className={`movie-info panel ${state?'openInfo':''}`}>
            <h3>Director:{director}</h3>
            <h4>Producer:{producer}</h4>
            <h4>Score:{score}</h4>
               <p className='desc'>
                   <h4>Description</h4>
               {description}
               </p>
               <br/>
               <div align='right'>
                <Link className='link' to={`/movie/${id}`}>More Info</Link>
            </div>
            </div>
            
        </div>
    )
}

export default MovieCard
