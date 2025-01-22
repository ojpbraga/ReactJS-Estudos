export default function Events() {
    function handleClick(event) {
        alert("Comprou: " + event.target.innerText);
    }

    // Eventos windows/document são adicionados normalmente. Deve ser usado o useEffect
    function handleScroll(event) {
        // console.log(event)
    };
    window.addEventListener('scroll', handleScroll);

    return (
        <div style={{display:"grid", gap:"5px"}}>
            <h1>Events</h1>
            <button onClick={handleClick}>Camisa</button>

            {/* Função Anônima no evento */}
            <button onClick={(event) => alert("Comprou: " + event.target.innerText)}>Short</button>
        </div>
    )
};