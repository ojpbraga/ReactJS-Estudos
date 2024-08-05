import React from 'react'

function Radio({options, value, setValue, ...props}) {
  return (
    <>
    {options.map((option) => (
        <label key={option}>
            <input 
                value={option}
                type="radio" 
                checked={value === option} 
                onChange={(({target}) => setValue(target.value))}
                {...props}
            />
            {option.charAt(0).toUpperCase() + option.slice(1)}
        </label>
    ))}
    </>
  )
}

export default Radio