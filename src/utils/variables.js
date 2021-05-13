
const URL_BASE = "https://api.themoviedb.org/3/movie/"
const API_KEY = "c7e318bc4679faa16a6f940e1435e019"
const QUERY_PARAMS = "&language=es-ES&page=1"

export const URL_PELICULAS_POPULARES = URL_BASE + "popular" + "?api_key=" + API_KEY + QUERY_PARAMS
export const URL_PELICULAS_PUNTUADAS = URL_BASE + "top_rated" + "?api_key=" + API_KEY + QUERY_PARAMS
export const URL_PELICULAS_ULTIMAS = URL_BASE + "upcoming" + "?api_key=" + API_KEY + QUERY_PARAMS

export const convertirAMayusculas = string => {
  return string.toUpperCase()
}

export const cortarArray = (array) => {
  return array.slice(0, 5)
}

export const definirVariableURL = (pathName) => {
  if (pathName === "/peliculas-populares") {
    return "popular"
  }
  else if (pathName === "/peliculas-puntuadas") {
    return "top_rated"
  }
  else if (pathName === "/peliculas-ultimas") {
    return "upcoming"
  }
}

export const definirURL = (pathName) => {
  const variable = definirVariableURL(pathName)
  return URL_BASE + variable + "?api_key=" + API_KEY + QUERY_PARAMS
}
