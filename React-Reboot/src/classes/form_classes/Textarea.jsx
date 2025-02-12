import React, { useState } from 'react'

function Textarea() {
    // No react p textarea é utilizando como um input, uma tag única sem abertura/fechamento e com o value para definir o seu valor interno.
    const [message, setMessage] = useState('')

  return (
    <form>
        <h2>Textarea</h2>
        <textarea 
            id="message"
            value={message}
            rows="5"
            onChange={({target}) => setMessage(target.value)}
        />
    </form>
  )
}

export default Textarea