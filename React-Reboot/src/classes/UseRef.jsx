import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

const ECommerce = () => {
    // Não precisa ser necessáriamente só sobre o dom, mas qualquer valor reativo, como setTimeout
    const [card, setCard] = useState(0);
    const [notification, setNotification] = useState(null);
    const timeoutRef = useRef();

    function handleClick() {
        setCard(i => i++);
        setNotification('Item adicionado ao carrinho');

        // useRef "salva" (salva a referência) o valor para que não seja modificado sempre
        // Nesse caso, o setTimeout está sendo adicionado várias vezes, quando clicado diversas no carrinho. Queremos que seja adicionado apenas uma.
        clearTimeout(timeoutRef);
        timeoutRef.current = setTimeout(() => {
            setNotification(null);
        }, 2000);
    }

    return (
        <div>
            <button onClick={handleClick}>Adicionar no carrinho</button>
            <p>{notification}</p>
        </div>
    )
}

const Comments = () => {
    const [comments, setComments] = useState(["Comentário 1", "Comentário 2"]);
    const [input, setInput] = useState('');
    const inputElement = useRef();

    function handleClick() {
        setComments([...comments, input]);
        inputElement.current.focus();
    }

    return (
        <div>
            {comments.map((comment, index) => ( <li key={"comment_"+index}>{comment}</li>))}

            <input ref={inputElement} type="text" value={input} onChange={({target}) => setInput(target.value)}/>
            <button onClick={handleClick}>Enviar</button>
        </div>
    )
}

const UseRef = () => {
    // Retorna um objeto com a propriedade current. Guarda valores durante todo o ciclio de vida do elemento. Usamos para referencia do DOM, sem precisa do QuerySelector
    // Precisa ser usado dentro de um callback (como useEffect), pois a página precisa ser renderizada primeiro.
    const divMain = useRef();

    useEffect(() => {
        console.log(divMain);
        // Precisa do current para ser difinido como object e ser possível fazer alterações
        console.log(divMain.current);
    }, []);

    return (
        <section>
            <h1>UseRef</h1>
            <div ref={divMain}>
                <p>Essa é a div principal!</p>
            </div>
            <Comments/>
            <ECommerce/>
        </section>
    )
}
export default UseRef;