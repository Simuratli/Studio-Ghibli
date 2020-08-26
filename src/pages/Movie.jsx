import React, {useEffect,useState} from 'react'
import Background from '../components/Background/Background'
import '../assets/sass/pages/movie.scss'
import Loader from '../components/Loader/Loader'

function Movie({match}) {

    const [state, setstate] = useState({
        data:[],
        filteredNames:'Salam',
        setLoader:true
    })

    useEffect(()=>{
        fetch(`https://ghibliapi.herokuapp.com/films/${match.params.id}`)
        .then(response => response.json())
        .then(data => {
            setstate({
                data:data,
                setLoader:false
            });
           
        });
      
    })
    


    return (
       state.setLoader ?  <Loader /> :
        <Background background='wall4'>
            <div className='mainContainer container'>
                <div className='movie '>
                    <div className="mainDetail">
                    <div className='movieName'>
                        <h1 className='name'>{state.data.title}</h1>
                    </div>
                    <div className='movieInfo'>
                        <h3 className=' badge '>{state.data.release_date}</h3>
                        <h3  className=' badge '>{state.data.rt_score}</h3>
                        <h3  className=' badge '>{state.data.director}</h3>
                        <h3  className=' badge '>{state.data.producer}</h3>
                    </div>
                </div>
                    <h4 className='desc'>{state.data.description}</h4>
                </div>
            </div>
        </Background>
    )
}

export default Movie
