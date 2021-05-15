import PeliculasSection from '../components/PeliculasSection'
import { URL_PELICULAS_POPULARES, convertirAMayusculas} from '../utils/variables'
import useFetch from '../hooks/useFetch';

const PeliculasPopulares = () => {
  const peliculasPopulares = useFetch(URL_PELICULAS_POPULARES)
  const titulo = "peliculas populares"

  return(
    <PeliculasSection 
      peliculas={peliculasPopulares} 
      titulo={convertirAMayusculas(titulo)}
      />
  )
}

export default PeliculasPopulares
