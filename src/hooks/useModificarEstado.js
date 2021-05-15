import { useState } from 'react'

const useModificarEstado = () => {
  const [estado, setEstado] = useState("hola")

  return {
    estado: estado, 
    setEstado: setEstado
  }
}


export default useModificarEstado
