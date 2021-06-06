import React from 'react'
import {Card , Button} from 'react-bootstrap'
import StarRatingComponent from 'react-star-rating-component';
import {Link} from 'react-router-dom'


const MovieCard = ({movie , id}) => {
    return (
        
        <div >
            <Card className="MovieCard" border="secondary" style={{ width: "350px",height: "830px" }}>
                <Card.Img variant="top" src={movie.posterURL}/>
                <Card.Body className="MovieCardBody">
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>
                    {movie.description}
                </Card.Text>
                <StarRatingComponent 
                    name="" 
                    starCount={5}
                    value={movie.rating}
                    />
                    <br />
                    <Link to={`movieabouts/${movie.id}`} >
                <Button variant="primary" className="MovieButton">About this movie </Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default MovieCard
