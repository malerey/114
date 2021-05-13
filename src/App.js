import { useState, useEffect, useContext } from 'react' 
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import Home from './views/Home'
import Nav from './views/Nav'
import PeliculasPopulares from './views/PeliculasPopulares'
import PeliculasUltimas from './views/PeliculasUltimas'
import DetallePelicula from './views/DetallePelicula'
import './App.css';

function App() {

  return (
    <div className="App">
      
      <BrowserRouter>

      <Nav />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/peliculas-populares/" component={PeliculasPopulares} />
        <Route path="/peliculas-ultimas" component={PeliculasUltimas} />
        <Route path="/detalle/:id" component={DetallePelicula}/>
      </Switch>
        
        <footer>HOLA SOY EL FOOTER</footer>

      </BrowserRouter>
    </div>
  );
}

export default App;
