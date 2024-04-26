import React, { ComponentProps } from 'react'

interface TituloProps extends ComponentProps<'h1'> {
    texto?: string
}

function Titulo({texto, ...prosp}: TituloProps) {
  return (
    <h1 {...prosp} style={{color: "green"}}>{texto}</h1>
  )
}

export default Titulo