import React from 'react'
import {RiHeart3Fill} from 'react-icons/ri'
import { Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



const Cards = (params) => {
  return (
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={params.image} />
      <Card.Body>
        <Card.Title>{params.name}</Card.Title>
        <Card.Text>{params.gender}, {params.status}</Card.Text>
        <Link to={`/personaje/${params.id}`}>
          <Button variant="primary">Learn More!</Button>
        </Link>
        <Button variant="primary" style={{marginLeft:'4rem'}}><RiHeart3Fill/></Button>
      </Card.Body>
    </Card>
  
  )
}

export default Cards