import { useState, useEffect } from 'react'
import { definirURL } from '../utils/variables'

const useFetch = (url) => {

  const [peliculas, setPeliculas] = useState([])

  useEffect(() => {
    fetch(definirURL(url))
    .then(res => res.json())
    .then(data => setPeliculas(data.results))
  }, [])


  return peliculas
}

export default useFetch
