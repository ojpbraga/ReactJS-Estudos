import React, { ComponentProps } from 'react'

interface PropsButtonModal extends ComponentProps<'button'> {
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function ButtonModal({setModal}:PropsButtonModal) {
  return (
    <button onClick={() => setModal(true)} >Abrir</button>
  )
}

export default ButtonModal