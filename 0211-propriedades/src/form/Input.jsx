import React from 'react'

const Input = ({label, id, ...props}) => {
    console.log(props);
    return (
      <div>
        <label htmlFor={id}>{label}</label>
        <input type="text" id={id} {...props} />
        {/* type text será substituído por password, pois foi passado via ...prosp um novo type */}
      </div>
    )
  }

export default Input