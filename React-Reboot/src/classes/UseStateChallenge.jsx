import React, { useState } from 'react'

const Product = ({isLoading, data}) => {
    if(isLoading) {
        return (
            <div>
                <p>Carregando...</p>
            </div>
        )
    } else {
        return (
            <div>
                {data.id}
            </div>
        )
    }
}

function UseStateChallenge() {
    const [isLoading, setIsLoading] = useState(null);
    const [data, setData] = useState(null);

    async function handleFetch(event) {
        setIsLoading(true);

       let response = await fetch('https://ranekapi.origamid.dev/json/api/produto/'+event.target.innerText);
       response = await response.json();

       setIsLoading(false);
       setData(response);
       console.log(data);

       return response;
    }

  return (
    <div>
        <button onClick={handleFetch}>notebook</button>
        <button onClick={handleFetch}>smartphone</button>
        <button onClick={handleFetch}>tablet</button>
        
        {data && <Product isLoading={isLoading} data={data}/>}
    
    </div>
  )
}

export default UseStateChallenge