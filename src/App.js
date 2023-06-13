import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/Header.js';
import Formulario from './componentes/Formulario/Formulario.js';
import MiOrg from './componentes/MiOrg';

function App() {
  const [mostrarFormulario,actualizarMostrar] = useState(true);
  
  //Ternario --> condicion ? seMuestra : noSeMuestra
  //condicion && seMuestra

  const cambiarMostrar = () =>{
    actualizarMostrar(!mostrarFormulario)
  }

  return (
    <div className="App">
      <Header />
      {/* mostrarFormulario  ? <Formulario /> : <></>*/}
      { mostrarFormulario  && <Formulario />}
      <MiOrg cambiarMostrar={cambiarMostrar}/>
    </div>
  );
}

export default App;
