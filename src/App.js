import React,{Suspense} from 'react'
import './App.scss'
import {HashRouter,Switch,Route} from 'react-router-dom'
import Navbar from './components/navbar/navbar.component'
import Loader from './components/Loader/Loader'
import Movie from './pages/Movie'
const Index = React.lazy(()=>{
  return import('./pages/Index')
})

const About = React.lazy(()=>{
  return import('./pages/about')
})

const Locations = React.lazy(()=>{
  return import('./pages/Locations')
})



const Movies = React.lazy(()=>{
  return import('./pages/Movies')
})


function App(props) {
  return (
    <HashRouter basename="/Studio-Ghibli">
    <Navbar/>
      <Switch>
        <Route exact path='/' render={()=>{
          return (
            <Suspense fallback={<Loader/>}>
                <Index/>
            </Suspense>
          )
        }}  />

        <Route exact path='/movies' render={()=>{
          return (
            <Suspense fallback={<Loader/>}>
                <Movies/>
            </Suspense>
          )
        }}  />
        <Route exact path='/location' render={()=>{
          return (
            <Suspense fallback={<Loader/>}>
                <Locations/>
            </Suspense>
          )
        }}  /> 
        <Route exact path='/movie/:id' component={Movie}   />
        <Route exact path='/about' render={()=>{
          return (
            <Suspense fallback={<Loader/>}>
                <About/>
            </Suspense>
          )
        }}   />
      </Switch>
    </HashRouter>
  )
}

export default App
