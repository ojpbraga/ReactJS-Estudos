import React, { ComponentProps } from 'react'

interface PropsModal {
    modal: boolean;
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function Modal({modal, setModal}: PropsModal) {
    if(modal) {
        return (
          <div>
              Esse é um modal. <button onClick={() => setModal(false)}>Fechar</button>
          </div>
        )
    }
    return null;
}

export default Modal