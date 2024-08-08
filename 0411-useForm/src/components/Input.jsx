import React, { useState } from 'react'

function Input({id, label, type, onChange, value, onBlur, placeholder, error,}) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input 
          type={type}
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
      />
      {error && <p>{error}</p>}
    </>
  )
}

export default Input