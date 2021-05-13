import { useState, useEffect } from 'react'
import { URL_PELICULAS_ULTIMAS , URL_PELICULAS_PUNTUADAS, URL_PELICULAS_POPULARES} from '../utils/variables'


const Home = () => {

  const [peliculasPopulares, setPeliculasPopulares] = useState([])
  const [peliculasMejorPuntuadas, setPeliculasMejorPuntuadas] = useState([])
  const [ultimosLanzamientos, setUltimosLanzamientos] = useState([])

  useEffect(() => {
    fetch(URL_PELICULAS_POPULARES)
    .then(res => res.json())
    .then(data => setPeliculasPopulares(data.results))

    fetch(URL_PELICULAS_ULTIMAS)
    .then(res => res.json())
    .then(data => setUltimosLanzamientos(data.results))

    fetch(URL_PELICULAS_PUNTUADAS)
    .then(res => res.json())
    .then(data => setPeliculasMejorPuntuadas(data.results))
  }, [])

  console.log(peliculasPopulares, peliculasMejorPuntuadas, ultimosLanzamientos)

  return(
    <h1>Soy HOME</h1>
  )
}

export default Home
