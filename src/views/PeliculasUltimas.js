import PeliculasSection from '../components/PeliculasSection'
import { URL_PELICULAS_ULTIMAS, convertirAMayusculas } from '../utils/variables'
import useFetch from '../hooks/useFetch'
import {useLocation} from 'react-router-dom'

const PeliculasUltimas = () => {
  const location = useLocation()
  const peliculasUltimas = useFetch(location.pathname)

  const titulo = "ultimos lanzamientos"

  return(
    <PeliculasSection 
      peliculas={peliculasUltimas} 
      titulo={convertirAMayusculas(titulo)}/>
  )
}

export default PeliculasUltimas
