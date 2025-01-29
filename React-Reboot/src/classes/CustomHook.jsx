import { useEffect } from "react";
import { useState } from "react";

const useLocalStorage = (key, initial) => {
    const [state, setState] = useState(() => window.localStorage.getItem(key) ? window.localStorage.getItem(key) : initial);

    useEffect(() => {
        window.localStorage.setItem(key, state);
    }, [key, state]);

    return[state, setState];
}

const CustomHook = () => {
    // Podemos criar nossos proprios hooks para evitar repetição de código. Deve começar com a palavra use.
    const [product, setProduct] = useLocalStorage('produto', 'notebook');

    return (
        <div>
            <h1>Custom Hook</h1>
            <button onClick={({target}) => setProduct(target.innerText)}>Notebook</button>
            <button onClick={({target}) => setProduct(target.innerText)}>Celular</button>
        </div>
    )
}
export default CustomHook;