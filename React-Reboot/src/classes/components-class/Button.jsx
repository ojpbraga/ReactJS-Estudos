import React from 'react'

const Button = ({name, email}) => {
  console.log(name, email)
  return (
    <button onClick={() => alert(`${name} e ${email} foram enviados!`)}>Enviar</button>
  )
}

export default Button