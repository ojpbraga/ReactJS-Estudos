import React from 'react'

function Button(props) {
  console.log(props);
  return (
    <button {...props}>Enviar</button>
  )
}

export default Button