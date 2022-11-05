import React from 'react'
import {RiHeart3Fill} from 'react-icons/ri'
import { Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



const Cards = (props) => {
  return (
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.gender}, {props.status}</Card.Text>
        <Link to={`/personaje/${props.id}`}>
          <Button variant="primary">Learn More!</Button>
        </Link>
        <Button variant="primary" style={{marginLeft:'4rem'}}><RiHeart3Fill/></Button>
      </Card.Body>
    </Card>
  
  )
}

export default Cards