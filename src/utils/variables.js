const API_KEY = "84e25ac11ad6125024e1d376337be05f"

export const URL_PELICULAS_POPULARES = "https://api.themoviedb.org/3/movie/popular?api_key=c7e318bc4679faa16a6f940e1435e019&language=es-ES&page=1"
export const URL_PELICULAS_PUNTUADAS = "https://api.themoviedb.org/3/movie/top_rated?api_key=c7e318bc4679faa16a6f940e1435e019&language=es-ES&page=1"
export const URL_PELICULAS_ULTIMAS = "https://api.themoviedb.org/3/movie/upcoming?api_key=c7e318bc4679faa16a6f940e1435e019&language=es-ES&page=1"


export const convertirAMayusculas = string => {
  return string.toUpperCase()
}

export const cortarArray = (array) => {
  return array.slice(0, 5)
}
