import { useEffect, useState } from 'react'
import {useParams}  from 'react-router-dom'

const DetallePelicula = () => {
const [detalle, setDetalle] = useState({})
  const params = useParams()

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=c7e318bc4679faa16a6f940e1435e019&language=es-ES`)
    .then(res => res.json())
    .then(data => setDetalle(data))
  }, [])
  
  return(
    <h1>Hola, soy el detalle de una pelicula</h1>
  )
}

export default DetallePelicula
