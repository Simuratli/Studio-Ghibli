import React,{useState,useEffect} from 'react'
import Background from '../components/Background/Background'
import MovieContainer from '../components/MovieContainer/MovieContainer'
import LocationCard from '../components/Locations/LocationsCard'
import Loader from '../components/Loader/Loader'

function Movies() {
    const [state, setstate] = useState({
        data:[],
        movies:[],
        setLoader:true
    })
    useEffect(()=>{

        fetch('https://ghibliapi.herokuapp.com/locations')
        .then(response => response.json())
        .then(data => {
            setstate({data:data,setLoader:false});
           
        });
    },[])

    return (
        state.setLoader ? <Loader/>:
        <Background background='wall4'>
            <MovieContainer>
               {state.data.map((item,index)=>{
                   return  <LocationCard  climate={item.climate} surface={item.surface_water} terrain={item.terrain}  key={index} name={item.name}  />
               })}
            </MovieContainer>
        </Background>
    )
}

export default Movies
