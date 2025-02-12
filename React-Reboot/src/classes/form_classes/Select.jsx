import React, { useState } from 'react'

function Select() {
    // O value e onChange são definidos no select. Para definir um valor incial, coloque o mesmo no useState
    const [select, setSelect] = useState('');

  return (
    <form>
        <select value={select} onChange={({target}) => setSelect(target.value)} id="products">
            <option disabled value="">Selecione</option>
            <option value="notebook">Notebook</option>
            <option value="smartphone">Smartphone</option>
            <option value="tablet">Tablet</option>
        </select>
        <p>Selecionado: {select}</p>
    </form>
  )
}

export default Select