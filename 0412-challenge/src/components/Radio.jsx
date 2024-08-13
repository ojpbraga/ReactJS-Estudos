import React from 'react'

function Radio({options, value, setValue, question, ...props}) {
  return (
    <>
        {
            options.map((option, i) => (
                <label key={i}>
                    <input 
                        type="radio" 
                        value={option}
                        checked={value === option}
                        onChange={(({target}) => setValue({...value,[question]:target.value}))}
                        {...props}
                    />
                    {option}
                    <br/>
                </label>
            ))
        }
    </>
  )
}

export default Radio