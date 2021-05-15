import { useState, useEffect } from 'react'
import useFetch from '../hooks/useFetch'

const API_KEY = "84e25ac11ad6125024e1d376337be05f"

const URL_PELICULAS_POPULARES = "https://api.themoviedb.org/3/movie/popular?api_key=c7e318bc4679faa16a6f940e1435e019&language=es-ES&page=1"
const URL_PELICULAS_PUNTUADAS = "https://api.themoviedb.org/3/movie/top_rated?api_key=c7e318bc4679faa16a6f940e1435e019&language=es-ES&page=1"
const URL_PELICULAS_ULTIMAS = "https://api.themoviedb.org/3/movie/upcoming?api_key=c7e318bc4679faa16a6f940e1435e019&language=es-ES&page=1"


const Home = () => {
  const peliculasPopulares = useFetch(URL_PELICULAS_POPULARES)
  const peliculasPuntuadas = useFetch(URL_PELICULAS_PUNTUADAS)
  const ultimosLanzamientos = useFetch(URL_PELICULAS_ULTIMAS)

  console.log(peliculasPopulares, peliculasPuntuadas, ultimosLanzamientos)

  return(
    <h1>Soy HOME</h1>
  )
}

export default Home
