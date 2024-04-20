import React from 'react'

// JSX
// JavaScript XML / Extension. Estende a sintaxe do JavaScript, introduzindo elementos como XML que são convertidos em funções de React.

const Button = () => {
    return <button>Comprar</button>
};

// É transformado em:
const ButtonReact = () => {
    return React.createElement('button', null, 'Comprar');
};

export {Button, ButtonReact};
