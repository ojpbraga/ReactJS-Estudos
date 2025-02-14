import React from 'react'

function Radio({options, value, setValue, ...props}) {
  return (
    <form>
        <h2>Radio</h2>
        {options.map(option => (
            <label htmlFor={option} key={option} {...props}>
                <input id={option} type="radio" checked={value === option} value={option} onChange={({target}) => setValue(target.value)} />
                {option}
            </label>
        ))}
    </form>
  )
}

export default Radio