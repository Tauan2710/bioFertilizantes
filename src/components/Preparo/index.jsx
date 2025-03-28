import React from 'react';
import { PreparoContainer } from './Preparo.styles'

function Preparo({ children }) {
    return <PreparoContainer>{children}</PreparoContainer>;
  }


  const ModoDePreparo = () => {  // Altere para algo único
    return (
        <div>
            <h2>Modo de Preparação</h2>
            <p>Detalhes sobre como preparar o biofertilizante.</p>
        </div>
    );
};



  export default Preparo;