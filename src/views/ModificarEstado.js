import {useState} from 'react'
import useModificarEstado from '../hooks/useModificarEstado'

const ModificarEstado = () => {
  const { estado, setEstado } = useModificarEstado()

  const handleClick = () => {
    setEstado("chau")
  }

  return (
    <div>
      <h1>Hola soy ModificarEstado</h1>
      <p>El estado es: {estado} </p> 
    <button onClick={handleClick}>Modificar estado</button>
    </div>
  )
}
export default ModificarEstado
