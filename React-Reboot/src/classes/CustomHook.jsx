import { useCallback, useEffect } from "react";
import { useState } from "react";

const useLocalStorage = (key, initial) => {
    const [state, setState] = useState(() => window.localStorage.getItem(key) ? window.localStorage.getItem(key) : initial);

    useEffect(() => {
        window.localStorage.setItem(key, state);
    }, [key, state]);

    return[state, setState];
}

const useFetch = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(null);

    const doRequest = useCallback(async (url, options) => {
        let response;
        let json;

        try {
            setError(false);
            setLoading(true);
            response = await fetch(url, options);
            json = await response.json();
        } catch (error) {
            json = null;
            setError(true);
        } finally {
            setData(json);
            setLoading(false);
            return {response, json}
        }
    }, []);

    return {data, loading, doRequest, error}
}

const CustomHook = () => {
    // Podemos criar nossos proprios hooks para evitar repetição de código. Deve começar com a palavra use.
    const [product, setProduct] = useLocalStorage('produto', 'notebook');
    const {doRequest, data, loading, error} = useFetch();

    useEffect(() => {
        async function fetchData() {
            const {response, json} = await doRequest('https://ranekapi.origamid.dev/json/api/produto/');
        }
        fetchData();
        console.log('Fetch') // app é atualizados inúmeras vezes, ou seja, toda vez é uma função nova
    }, [doRequest]);

    if(error) return <p>Erro ao carregar</p> 
    if (loading) return <p>Carregando</p>
    if (data) 
        return (
            <div>
                <h1>Custom Hook</h1>
                <button onClick={({target}) => setProduct(target.innerText)}>Notebook</button>
                <button onClick={({target}) => setProduct(target.innerText)}>Celular</button>
        
                <h3>Lista de produtos</h3>
                <ul>
                    {
                        data && data.map(({nome, id}) => (
                            <li key={id}>{nome}</li>
                        ))
                    }
                </ul>

            </div>
        )
    
    
}
export default CustomHook;