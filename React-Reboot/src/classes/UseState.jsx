import { useState } from "react";
import UseStateChallenge from "./UseStateChallenge";

const Modal = ({modal, setModal}) => {
    if (modal) {
        return (
            <div>
                <h3>Modal</h3>
                <button onClick={() => setModal(!modal)}>Modal on</button>
            </div>
            
        ) 
    } else {
        return (
            <div>
                <h3>Modal</h3>
                <button onClick={() => setModal(!modal)}>Modal off</button>
            </div>
            
        ) 
    }
}

function UseState() {
    // Hooks são funções que permitem controlarmos o ciclio de vida dos componentes, ou seja, renderizar um componente e os filhos dele. Pode-se passar vários dados
    const [active, setActive] = useState(true);
    //      valor   função
    // atualizar dados dentro de um objeto mantendo o que já existia:
    const [data, setData] = useState({name: 'João', age: 99});
    function handleClick() {
        setActive(state => !state);
        setData({...data, person:true});
        console.log(data);
    }

    // Props
    // Podemos passar o estado e a função como propriedade
    const [modal, setModal] = useState(true);

    // Reatividade
    // Utilizar funções de atualização de estado, garante a reatividade
    // Exemplo
    const [items, setItems] = useState(['item 1', 'item 2']);

    // Errado
    function handleClickA() {
        items.push("item 3");
    }
    // Correto
    function handleClickB() {
        setItems([...items, 'item 3']);
    }

    // O valor inicial também pode ser externo
    const [paid, setPaid] = useState(() => {
        const status = window.localStorage.getItem('paid');
        return status;
    })


    return (
        <section>
            <h1>useState</h1>
            <button onClick={handleClick}>{active?'Active':'Inactive'}</button>
            <p>{data.name} - {data.age}</p>
            <Modal modal={modal} setModal={setModal}/>
            <UseStateChallenge/>
        </section>
    )
}

export default UseState;