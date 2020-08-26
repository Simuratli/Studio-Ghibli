import React,{useEffect,useState} from 'react'
import './Search.scss'
import {Link} from 'react-router-dom'

function Search() {

    const [state, setstate] = useState({
        data:[],
        filteredNames:'Salam'
    })

    useEffect(()=>{
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(response => response.json())
        .then(data => {
            setstate({data:data});
        });
      
    },[])
    

    function filterNames(e){
        e.preventDefault();
        const {value} = e.target
        setstate({
            ...state,
            filteredNames:value.toLowerCase()
        })
    }


    return (
        <div className="mainContainer">
            <div className="search">
                <form>
                    <input id='search' autoComplete="off" name="ghibli" onChange={filterNames} placeholder="Search Studio Ghibli movies" type="text" />
                    {
                        state.data
                        .filter((item)=>{
                            return item.title.toLowerCase().includes(state.filteredNames)
                        })
                        .filter((item,index)=>{return index<=3})
                        .map((item,index)=>{
                            return(
                            <div key={index} className="seach-results"> 
                                <Link to={`/movie/${item.id}`}>{item.title}</Link>
                             </div>
                            )
                        })
                    }
                   
                </form>
               
            </div>
        </div>
    )
}

export default Search
