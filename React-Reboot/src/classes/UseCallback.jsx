import { useCallback, useState } from "react";

// Gera uma array de itens unicos
const set1 = new Set();
const set2 = new Set();

const Product = () => {
    const func1 = () => {
        console.log("Sem useCallback");
        console.log(set1.add(func1));
    };

    const func2 = () => {
        console.log("Com useCallback");
        console.log(set1.add(func2));
    };

    console.log("Sem callback: ", set1);
    console.log("Com callback: ", set2);

    return (
        <div>
            <button onClick={func1}>Sem useCallback</button>
            <button onClick={func2}>Com useCallback</button>
        </div>
    )
}

const UseCallback = () => {
    // Permite definirmos um callback e uma lista de dependencias do callback. Só será recriado se essa lista de dependencias for modificada.
    // Toda vez que uma função normal é usada, ela redenriza o componente, porém é uma operação muito rápida. o useCallback faz com que só seja criada na primeira vez que for redenrizada.
    const [count, setCount] = useState(0);
    const handleClick = useCallback(() => {
        setCount((i) => i + 1);
    }, []);

    return (
        <section>
            <h1>UseCallback</h1>
            <button onClick={handleClick}>{count}</button>
            <Product/>
        </section>
    )
};
export default UseCallback;