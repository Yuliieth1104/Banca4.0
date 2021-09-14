import React from 'react';
import Slider from './componentes/Slider'
import './estilos.css';
import styled from 'styled-components';


const App = () => {
  return (
    <main>
      <Titulo>Banca</Titulo>
      <Slider />
    </main>
  );
}

const Titulo = styled.p `
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

export default App;