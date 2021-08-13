import React from 'react';
import Contador from './components/Contador';
import Estado from './components/Estado';
import Evento from './components/Evento';
import Imagen from './components/Imagen';
import Lista from './components/Lista';
import Parrafo from './components/Parrafo';

function App() {
  return (
    <div>
      <h1>Importando componentes</h1>
      <Parrafo/>
      <Imagen/>
      <Evento/>
      <Estado/>
      <Contador/>
      <Lista/>
    </div>
  );
}

export default App;
