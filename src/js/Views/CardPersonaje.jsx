import React from 'react'
import Card from 'react-bootstrap/Card';

const CardPersonaje = (props) => {
  return (
    <Card class="card mb-3" style="max-width: 540px;">
    <Card class="row g-0">
      <Card class="col-md-4">
        <img src="..." class="img-fluid rounded-start" alt="..."/>
      </Card>
      <Card class="col-md-8">
        <Card class="card-body">
          <h5 class="card-title">{props.name}</h5>
          <p class="card-text">{props.gender}</p>
          <p class="card-text"><small class="text-muted">{props.status}</small></p>
        </Card>
      </Card>
    </Card>
  </Card>
  )
}

export default CardPersonaje