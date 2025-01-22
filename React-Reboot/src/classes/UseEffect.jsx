import { useEffect, useState } from "react";
import UseEffectChallenge from "./UseEffectChallenge";

const Product = () => {
    // Efeitos de window, dom, deverão ser feitos no useEffect.
    // Limpando evento, pois ele não atualiza o evento, mas sim adiciona novamente quando renderizado
    useEffect(() => {
        function handleScroll(event) {
            console.log('scroll');
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            console.log("Removeu o event")
        }
    }, []);

    return (
        <div style={{height:'150vh'}}>  
            <p>Produto aqui</p>
        </div>
    )
}

export default function UseEffect() {
    // useEffect podemos definir um callback que irá ser executado
    const [count, setCount] = useState(0);
    const [data, setData] = useState(null);
    const [modal, setModal] = useState(false);

    // Quando o array está vazio, ele executa uma vez. Quando ele está com alguma dependencia, ele executa uma vez no na inicialização e nas vezes em que o valor da dependencia mudar.
    // Fetch são feitos no useEffect

    console.log('Executou fora');
    useEffect(() => {
        async function fetchData() {
            let response = await fetch('https://ranekapi.origamid.dev/json/api/produto/notebook');
            response = await response.json();
            setData(response);
        }
        fetchData();

        console.log('Executou');
    }, [count]);


    return (
        <section>
            <h1>UseEffect</h1>
            {
                data && 
                <>
                    <h3>{data.nome}</h3>
                    <p>R$ {data.preco*count}</p>
                </>
            }

            <button onClick={() => setCount(i => i+1)}>{count}</button>
            <button onClick={() => setModal(!modal)}>Modal</button>
            {modal && <Product/>}
            <UseEffectChallenge/>
        </section>
    )

}