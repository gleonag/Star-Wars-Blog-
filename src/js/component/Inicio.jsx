import React, {useState, useEffect} from 'react'
import { todosPersonajes } from '../funciones/funciones.js'
import Cards from '../Views/Cards.jsx'

const Inicio = () => {
  const [personajes, setPersonajes] = useState (null)
  useEffect (() => {
    todosPersonajes(setPersonajes)
  },[])
  return (
    <>
      {personajes !== null ? (
        personajes.map(personaje => (
          <Cards key={personaje.id} id={personaje.id} name={personaje.name} status={personaje.status} gender={personaje.gender} image={personaje.image}/>
          )
        )) : ('no hay personajes')}
    </>
  )
}

export default Inicio