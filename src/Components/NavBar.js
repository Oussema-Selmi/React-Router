import React from 'react'
import {FormControl,Form,Navbar,Nav} from 'react-bootstrap'
import {MdMovieFilter} from 'react-icons/md'
import StarRatingComponent from 'react-star-rating-component';


const NavBar = ({setFilter,setRatingFilter}) => {
    return (
        <div className="NavBar">
            <Navbar bg="light"  expand="lg">
    <Nav className="mr-auto my-2 my-lg-0 NavBar" style={{ maxHeight: '100px' }} navbarScroll>
        <div>
            <h2>TuniBest</h2>
        <MdMovieFilter style={{height:"50px",width:"50px"}}/>
        </div>
    </Nav>
    <StarRatingComponent name="filter" starCount={5} className="ratefilter" onStarClick={(x)=>setRatingFilter(x)} />
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
        onChange={(e)=>{setFilter(e.target.value)}}
      />
    </Form>
            </Navbar>
        </div>
    )
}

export default NavBar
