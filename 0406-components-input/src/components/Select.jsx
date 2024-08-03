import React from 'react'

function Select({options, value, setValue, ...props}) {
  return (
    <select value={value} onChange={(({target}) => setValue(target.value))} {...props}> // value que seleciona o que vai estar selecionado por default
        <option value="" disabled>Select</option>
        {options.map((option, index) => (
            <option key={option + index} value={option}>{option.charAt(0).toUpperCase() + option.slice(1)}</option>
        ))}
    </select>
  )
}

export default Select