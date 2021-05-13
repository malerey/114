import PeliculasSection from '../components/PeliculasSection'
import { URL_PELICULAS_ULTIMAS, convertirAMayusculas } from '../utils/variables'
import useFetch from '../hooks/useFetch'

const PeliculasUltimas = () => {
  const peliculasUltimas = useFetch(URL_PELICULAS_ULTIMAS)

  const titulo = "ultimos lanzamientos"

  return(
    <PeliculasSection 
      peliculas={peliculasUltimas} 
      titulo={convertirAMayusculas(titulo)}/>
  )
}

export default PeliculasUltimas
