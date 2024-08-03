import React, { useState } from 'react'

function Input({id, label, type, value, setValue, ...props}) {
  return (
    <>
        <label htmlFor={id}>{label}</label>
        <input 
            type={type}
            id={id}
            name={id}
            value={value}
            onChange={(({target}) => setValue(target.value))}
            {...props}
        />
    </>
  )
}

export default Input