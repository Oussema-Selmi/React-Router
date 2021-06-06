import React,{useState,useEffect} from 'react'
import {FiHome} from 'react-icons/fi'
import {Link} from 'react-router-dom'

const MovieAbouts = ({movies, match}) => {
    const [movie, setMovie] = useState({});
    
  useEffect(() => {
    setMovie(movies.find((el) => el.id === +match.params.movieid));},[movies, match.params.movieid]);
  return (
    <div className="MovieAbouts">
      <Link to="/">
        <FiHome style={{height:"50px",width:"50px"}} />
      </Link>
        <h1 className="moviename">{movie.title}</h1>
        <iframe title={movie.title} width="50%" height="500px" src={movie.trailer}/>
        <br />
        <h2 className="description">{movie.description}</h2>

    </div>
  );

}

export default MovieAbouts
