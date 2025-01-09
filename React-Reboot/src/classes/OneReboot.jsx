export default function OneReboot() {
    const movies = ["One", "Two"];

    const produtosDisponiveis = [
        {
        id: 1,
        nome: 'Smartphone',
        preco: 'R$ 2000',
        cores: ['#29d8d5', '#252a34', '#fc3766'],
        },
        {
        id: 2,
        nome: 'Notebook',
        preco: 'R$ 3000',
        cores: ['#ffd045', '#d4394b', '#f37c59'],
        },
        {
        id: 3,
        nome: 'Tablet',
        preco: 'R$ 1500',
        cores: ['#365069', '#47c1c8', '#f95786'],
        },
    ];

    return (
        <>
            <h1>First Class</h1>
            <ul>
                {movies.map((item, index) => 
                <li key={index+"_"+item}>{item}</li>
                )}
            </ul>

            <h2>Exercise</h2>
            {produtosDisponiveis.filter(product => Number(product.preco.replace("R$ ", "") > 1500)).map(({nome, preco, id,cores}) => 
                <div key={id}>
                    <h3>{nome}</h3>
                    <p>{preco}</p>
                    <ul>
                        {cores.map((color, index) => 
                            <li key={id+"_color_"+index} style={{background:color, color:"white", margin:"8px 0"}}>{color}</li>
                        )}
                    </ul>
                </div>
            )}

        </>
    )
}