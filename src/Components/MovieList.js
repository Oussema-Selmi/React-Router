import React from 'react'
import MovieCard from './MovieCard'
import Add from './Add'


const MovieList = ({movies,setMovies,filter,ratingfilter}) => {
    
    return (
        
        <div className="MovieList">
            {movies.filter((movie)=>movie.title.toLowerCase().includes(filter.toLowerCase().trim()) && movie.rating >= ratingfilter  )
            .map((movie,i)=><MovieCard movie={movie} key={i}/> )}
            <Add setMovies={setMovies} movies={movies}/>

        </div>
    )
}

export default MovieList
