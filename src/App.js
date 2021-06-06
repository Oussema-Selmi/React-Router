import React,{useState} from 'react'
import MovieList from './Components/MovieList'
import NavBar from './Components/NavBar'
import MovieAbouts from './Components/MovieAbouts'
import {Route} from 'react-router-dom'
import './App.css'



function App() {
  const [filter,setFilter]=useState('')
  const [ratingfilter,setRatingFilter]=useState(0)
  
  const[movies,setMovies]=useState([
  {id: Math.random(),    title:"The Shawshank Redemption",                        description:"It tells the story of banker Andy Dufresne (Tim Robbins), who is sentenced to life in Shawshank State Penitentiary for the murders of his wife and her lover, despite his claims of innocence.",                                                                                                             posterURL:"https://i.egycdn.com/pic/WmFwZndlY3Z0Y21wZWNtanhQbUxOYm1wbQ.jpg",                rating:4,    trailer:"https://www.youtube.com/embed/6hB3S9bIaco"},
  {id: Math.random(),    title:"Harry Potter and the Deathly Hallows: Part 2",    description:"Deathly Hallows Part 2 is all about the final confrontation between Harry and Voldemort, the ultimate showdown between good and evil, . ",                                                                                                                                                                   posterURL:"https://i.egycdn.com/pic/WmFwZndlY21FbXB2bVltRWN2Y2NOYm1ZRXdkTHc.jpg",           rating:5,    trailer:"https://www.youtube.com/embed/5NYt1qirBWg"},
  {id: Math.random(),    title:"The Conjuring 2",                                 description:"Peggy, a single mother of four children, seeks the help of occult investigators Ed and Lorraine Warren when she and her children witness strange, paranormal events in their house.",                                                                                                                        posterURL:"https://i.egycdn.com/pic/WmFwZndlY21tbWJtRW1Uam1lY21tbUVtdm12YW1qbWJ2Yw.jpg",    rating:3,    trailer:"https://www.youtube.com/embed/KyA9AtUOqRM"},
  {id: Math.random(),    title:"Joker",                                           description:"Arthur Fleck, a party clown, leads an impoverished life with his ailing mother. However, when society shuns him and brands him as a freak, he decides to embrace the life of crime and chaos.",                                                                                                              posterURL:"https://i.egycdn.com/pic/WmFwZndlY21MTnZtYm1qbWptYWN4dmNtam1tbW13VG1tYg.jpg",    rating:3,    trailer:"https://www.youtube.com/embed/zAGVQLHvwOY"},
  {id: Math.random(),    title:"The Godfather",                                   description:"The Godfather is an American film series that consists of three crime films directed by Francis Ford Coppola inspired by the 1969 novel of the same name by Italian American author Mario Puzo. ",                                                                                                           posterURL:"https://i.egycdn.com/pic/WmFwZndlY21FbUVtcGJtdnZjRWNtRW1Id2xtYmxtamE.jpg",       rating:5,    trailer:"https://www.youtube.com/embed/sY1S34973zA"},
  {id: Math.random(),    title:"The Dark Knight ",                                description:"After Gordon, Dent and Batman begin an assault on Gotham's organised crime, the mobs hire the Joker, a psychopathic criminal mastermind who offers to kill Batman and bring the city to its knees.",                                                                                                         posterURL:"https://i.egycdn.com/pic/WmFwZndlY21FbW1tYm1ibXVjbWptVElhY05md1A.jpg",           rating:4,    trailer:"https://www.youtube.com/embed/EXeTwQWrcwY"},
])
  
    return (

          <div className="App">
            <Route exact path="/" render={()=>
            <div>
              <NavBar setFilter={setFilter} setRatingFilter={setRatingFilter} />
              <MovieList movies={movies} setMovies={setMovies} filter={filter} ratingfilter={ratingfilter} />
            </div>
          } />
            
            <Route
        exact
        path="/movieabouts/:movieid"
        render={(props)=> <MovieAbouts movies={movies} {...props} />}
      />
        </div>
          
      )
    }

    export default App
