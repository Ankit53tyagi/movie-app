import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const ProductCard = ({item}) => {
  return (
    <Card className='rounded-0 h-100' key={item.imdbID}>
      <Card.Img variant="top" className='rounded-0' src={item.Poster} style={{height:'220px',objectFit:'fit'}} />
      <Card.Body>
        <Card.Title className='h6'>{item.Title}</Card.Title>
        <small className='card-text border-top pt-3 mb-0 pb-0'>
              <div className='d-flex justify-content-between'><b>Type : <small>{item.Type}</small></b><b>Year : <small>{item.Year}</small></b></div>  
        </small>
        <Link className='stretched-link' to={`details/${item.imdbID}`}></Link>
      </Card.Body>
    </Card>
  )
}

export default ProductCard


