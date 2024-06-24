import { useEffect } from "react";
import useFetch from "./useFetch";
import useLocalStorage from "./useLocalStorage"

function App() {

  // useLocalStorage
  // Podemos criar nossos próprios hooks, assim evitamos a repetição de código. Todo custom hook deve começar com a palavra use. Exemplo: useNomeDoHook. Podemos retornar o que quisermos do hook, sejo um valor único, uma array ou um objeto.

  const [product, setProduct] = useLocalStorage('product', 't');
  
  function handleClick({target}: Event) {
    if(target instanceof HTMLElement) {
      console.log(target.innerText)
      setProduct(target.innerText);
    }
  }

  // useFetch
  const {data, request, loading, error} = useFetch()
  useEffect(() => {
    async function fetchData() {
      const {response, json} = await request("https://ranekapi.origamid.dev/json/api/produto/");
      console.log(response, json);
    }
    fetchData();

  }, [])
  console.log(data)
  
  if(error) return <p>{error}</p>
  if(loading) return <div>Carregando</div>
  if(data)
  return (
    <>
    <h4>Preferido: {product}</h4>
      <button onClick={handleClick}>Computer</button>
      <button onClick={handleClick}>Cellphone</button>

      {data.map(({id}) => (
        <div key={id}>
          <h1>{id}</h1>
        </div>
      ))}
    </>
  )
  else return null
}

export default App
