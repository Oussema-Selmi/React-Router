import React,{useState} from 'react'
import {Button , Modal ,Card} from 'react-bootstrap'
import { RiVideoAddLine } from 'react-icons/ri';

const Add = ({setMovies,movies}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const[title,setTitle]=useState('')
    const[description,setDescription]=useState('')
    const[posterURL,setPosterURL]=useState('')
    const[rating,setRating]=useState('')
    const[trailer,setTrailer]=useState('')

   
    const AddMovie=(e)=>{
        e.preventDefault();
          let newMovie={
              id:Math.random(),
              title:title,
              description:description,
              rating:rating,
              posterURL:posterURL,
              trailer:trailer,
          };
          setMovies(movies.concat([newMovie]))
          handleClose();
      
      }

    return (
      
        <div>  
        
            
            <Card  border="secondary" onClick={handleShow} style={{  width: "350px",height: "830px"  }}>
            <RiVideoAddLine  style={{width:"350px" ,height:"650px",marginTop:"100px"}} />
            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                <Modal.Title>Add a movie </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <label>Title</label>
                        <br />
                        <input type="text" name="title" onChange={(e)=>setTitle(e.target.value)} />
                    </div>
                    <div>
                        <label>PosterURL</label>
                        <br />
                        <input type="text" name="posterURL" onChange={(e)=>setPosterURL(e.target.value)}/>
                    </div>
                    <div>
                        <label>Trailer</label>
                        <br />
                        <input type="text" name="trailer" onChange={(e)=>setTrailer(e.target.value)}/>
                    </div>
                    <div>
                        <label>Description</label>
                        <br />
                        <input type="text" name="description" onChange={(e)=>setDescription(e.target.value)}/>
                    </div>
                    <div>
                        <label>Rating</label>
                        <br />
                        <input type="text" name="rating" onChange={(e)=>setRating(e.target.value)}/>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={AddMovie}>
                    Add movie
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Add
