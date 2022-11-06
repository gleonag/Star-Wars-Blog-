import React from 'react'
import Card from 'react-bootstrap/Card';

const CardPersonaje = (props) => {
  return (  
    <div style={{backgroundColor:'#606060'}}>
      <div className="container" style= {{padding:'3%',backgroundColor:'grey'}}>
        <div className="card" style={{diplay:'flex',backgroundColor:'#CCFFCC'}}>
          <div className="card-superior" style={{display:'flex'}}>
            <div className="card-left">
                <img src={props.image}/>
      
            </div>
            <div className="card-right" style={{display:'flex'}}>
              <ul style={{listStyleType: 'none'}}>
                <li><h2>{props.name}</h2></li>
                <li><h5>{props.status}</h5></li>
                <li><h5>{props.gender}</h5></li>
              </ul>
            </div>
          </div>
          <div className="card-down" style={{display:'flex', justifyContent:'space-around'}}>

            <p>{props.origin}</p>
            <p>{props.location}</p>
          </div>
        </div>
      </div>
    
  </div>
  )
}

export default CardPersonaje