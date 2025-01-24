import { useMemo, useState } from "react"

function deleyFunction() {
    let c;
    for (let i = 0; i < 100000000; i++) {
        c = i + i / 10;
    }
    return c;
}

const UseMemo = () => {
    // Memoriza um valor, evitando a recriação do mesmo todas as vezes que o componente for recriado. Recebe callback e array de referência
    // Serve melhor para operações lentas (matematica). Soma de uma array com milhões de itens
    // Recebe uma array de dependencias para mudar os itens.
    const [count, setCount] = useState();
    // const value = useMemo(() => {
    //     const localItem = window.localStorage.getItem('product');
    //     console.log('useMemo ok');
    //     return localItem;
    // }, []);
    // console.log(value);
    
    // Comprovando que é uma operação lenta:
    const time1 = performance.now()
    console.log(deleyFunction());
    console.log("Tempo demorado: " + (performance.now() - time1));

    // Utilizando useMemo:
    const time2 = performance.now()
    console.log(useMemo(() => deleyFunction(), []));
    console.log("Tempo demorado com useMemo: " + (performance.now() - time2));

    return (
        <section>
            <h1>UseMemo</h1>
            <button onClick={() => setCount(count+1)}>Operation</button>
        </section>
    )
}
export default UseMemo;