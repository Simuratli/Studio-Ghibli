import React,{useState,useEffect} from 'react'
import Background from '../components/Background/Background'

import MovieContainer from '../components/MovieContainer/MovieContainer'
import MovieCard from '../components/MovieCard/MovieCard'
import Loader from '../components/Loader/Loader'

function Movies() {

    
    const [state, setstate] = useState({
        data:[],
        setLoader:true
    })
    useEffect(()=>{

        fetch('https://ghibliapi.herokuapp.com/films')
        .then(response => response.json())
        .then(data => {
            setstate({data:data,setLoader:false});
           
        });

       

    })


    return (
        state.setLoader ? <Loader/>:
        <Background background='wall1'>
            <MovieContainer>
            {state.data.map((item,index)=>{
                   return  <MovieCard director={item.director} score={item.rt_score} producer={item.producer} description={item.description} key={index} name={item.title} year={item.release_date} id={item.id} />
               })}
            </MovieContainer>
        </Background>
    )
}

export default Movies
