import React, { useState } from 'react'

function Input({id, label, type, value, onChange, ...props}) {
  return (
    <>
        <label htmlFor={id}>{label}</label>
        <input 
            type={type}
            id={id}
            name={id}
            value={value}
            onChange={onChange}
            {...props}
        />
    </>
  )
}

export default Input