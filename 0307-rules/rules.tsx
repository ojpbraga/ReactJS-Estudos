// Top Level

function useRandomNumber() {
    const number = Math.random();
    useEffect(() => {
        document.title = number;
    }, [])
    return number;
}

const App = () => {
    // Correto
    useEffect(() => {
        document.title = 'Título novo'
    }, [])

    // Errado - Não pode usar dentro de uma condição
    let condition = true;
    if(condition) {
        useEffect(() => {
            document.title = 'Título novo'
        }, [])
    }

    // Errado - Utilizar hook dentro de uma função
    function changeTitle() {
        useEffect(() => {
            document.title = 'Título novo'
        }, [])
    }

    // Errado - Utilizar dentro de um for loop
    for(let i = 0; i < 10; i++) {
        useEffect(() => {
            document.title = 'Título novo'
        }, [])
    }


    // Componentes e Custom Hooks
    // Utilize hooks apenas em componentes e em custom hooks.
    // Errado, mas pode se transformar em um custom hook se começar com use

    function randomNumber() {
        const number = Math.random();
        useEffect(() => {
            document.title = number;
        }, [])
        return number;
    }

    return (
        <div></div>
    )

}
