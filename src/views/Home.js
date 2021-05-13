import { useState, useEffect } from 'react'

const API_KEY = "84e25ac11ad6125024e1d376337be05f"

const URL_PELICULAS_POPULARES = "https://api.themoviedb.org/3/movie/popular?api_key=c7e318bc4679faa16a6f940e1435e019&language=es-ES&page=1"
const URL_PELICULAS_PUNTUADAS = "https://api.themoviedb.org/3/movie/top_rated?api_key=c7e318bc4679faa16a6f940e1435e019&language=es-ES&page=1"
const URL_PELICULAS_ULTIMAS = "https://api.themoviedb.org/3/movie/upcoming?api_key=c7e318bc4679faa16a6f940e1435e019&language=es-ES&page=1"


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
