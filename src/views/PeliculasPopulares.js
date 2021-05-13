import PeliculasSection from '../components/PeliculasSection'
import { URL_PELICULAS_POPULARES, convertirAMayusculas} from '../utils/variables'
import useFetch from '../hooks/useFetch';

import { useHistory, useParams, useLocation } from 'react-router-dom'

const PeliculasPopulares = () => {

  const history = useHistory()
  const params = useParams()
  const location = useLocation()


  const peliculasPopulares = useFetch(location.pathname)
  const titulo = "peliculas populares"
  
  return(
    <>
    <PeliculasSection 
      peliculas={peliculasPopulares} 
      titulo={convertirAMayusculas(titulo)}

      />
      </>
  )
}

export default PeliculasPopulares
