import React, {useState, useEffect} from 'react'
import { todosPersonajes } from '../funciones/funciones.js'

const Inicio = () => {
  const [personajes, setPersonajes] = useState (null)
  useEffect (() => {
    todosPersonajes(setPersonajes)
  },[])
  return (
    <>
      {personajes !== null ? (
        personajes.map(personaje => (
          <div key={personaje.id}>
            <a href={`/personaje/${personaje.id}`}>{personaje.name}</a>
            <img src={personaje.image} />
          </div>)
        )) : ('no hay personajes')}
    </>
  )
}

export default Inicio