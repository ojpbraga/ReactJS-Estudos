import React from 'react';
import { useState } from 'react'

function Exercise() {
    // Otimize o código do slide anterior
    // Utilizando a array abaixo para mostrar
    // cada checkbox na tela.

    const coresArray = ['azul', 'azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];

    const [cores, setCores] = useState([]);

    function handleChange({target}) {
      if (target.checked) {
        setCores([...cores, target.value]);
      } else {
        setCores(cores.filter((cor) => cor !== target.value));
      }
    }
  
    function handleChecked(cor) {
      return cores.includes(cor);
    }
  
    return (
      <form>
        {coresArray.map((cor, index) => (
            <label key={cor+index}>
            <input
              type="checkbox"
              value={cor}
              checked={handleChecked({cor})}
              onChange={handleChange}
            />
            {cor.charAt(0).toUpperCase() + cor.slice(1)}
          </label>
        ))}
       </form>
    );
}

export default Exercise