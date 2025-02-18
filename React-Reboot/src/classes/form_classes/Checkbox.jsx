import React, { useEffect } from 'react'

function Checkbox({options, value, setValue}) {

    function handleClick({target}) {
        if(target.checked) {
            setValue([...value, target.value]);
        } else {
            setValue(value.filter( item => item !== target.value))
        }
        // Acredito que esteja errado...
        console.log(value);
    }

  return (
    <form>
        <h2>Checkbox</h2>
        {
            options.map(option => (
                <label key={option} htmlFor={option}>
                    <input type="checkbox" id={option}  value={option} checked={value.includes(option)} onChange={handleClick}/>
                    {option}
                </label>
            ))
        }
    </form>
  )
}

export default Checkbox