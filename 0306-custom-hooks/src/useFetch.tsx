import { useCallback, useState } from "react"

const useFetch = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState<boolean | null>(null);

    const request = useCallback(
        async (url: string, options?: object) => {
            let response;
            let json;
            try {
                setError(null);
                setLoading(true);
                response = await fetch(url, options);
                json = await response.json();
                
            } catch(error) {
                json = null;
                setError("Erro");
            } finally {
                setData(json);
                setLoading(false);
                return {response, json}
            }
        
        }, 
    []);

    return {data, error, loading, request}
}

export default useFetch;