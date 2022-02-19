// ./src/App.js

// 1. IMPORTACIONES
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Photos from './components/Photos';
import Mars from './components/Mars';
import Blog from './components/Blog';
import SolarSystem from './components/SolarSystem';
import Game from './components/Game';
import Layout from './components/Layout';
import CommentState from './context/Comment/CommentState';
import Signup from './components/Auth/Signup';
import Signin from './components/Auth/Signin';
import UserState from './context/User/UserState';
import NasaState from './context/Nasa/NasaState'

// 2. FUNCIÓN
function App() {
  return (

    <>
      <UserState>
        <NasaState>
          <BrowserRouter>
            {/* Establecer la lista de rutas */}
            <Routes>
              {/* Establecer una ruta individual */}
              {/* El atributo path significa la construcción de la URL */}
              {/* El atributo element significa qué componente se va a leer */}

              <Route path="/" element={<Layout />}>

                {/* localhost:3000/ */}
                <Route path="/" element={<Home />} />
                {/* localhost:3000/photos */}
                <Route path="/photos" element={<Photos />} />

                {/* localhost:3000/photos */}
                <Route path="/mars" element={<Mars />} />

                {/* localhost:3000/signup */}
                <Route path="/signup" element={<Signup />} />

                {/* localhost:3000/signup */}
                <Route path="/solarsystem" element={<SolarSystem />} />

                {/* localhost:3000/signup */}
                <Route path="/blog" element={<Blog />} />

                {/* localhost:3000/signup */}
                <Route path="/game" element={<Game />} />

                {/* localhost:3000/login */}
                <Route path="/login" element={<Signin />} />

              </Route>

            </Routes>
          </BrowserRouter>
          </NasaState>
      </UserState>
    </>
  )

}

// 3. EXPORTACIÓN
export default App;
