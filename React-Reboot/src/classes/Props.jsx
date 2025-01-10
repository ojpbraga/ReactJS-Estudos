const Title = ({color, text, children}) => {

    return (
        <h1 style={{color: color}}>
            {text}, {children}
        </h1>
    );
}

const Input = ({label, id, type, ...props}) => {
    return (
        <p>
            <label htmlFor={id}>{label}</label>
            <input id={id} type={type} {...props}/>
        </p>
    )
}

export default function Props(props) {

    // É importante para reutilização e é melhor utilizar a desestruturação com ({title}) e acessar <h1>{title}</h1>

    // Children
    // Se utilizamos o componente abrindo e fechando o mesmo <title>Esse conteúdo aqui dentro é o children</title>

    // Rest e Spread
    // Usamos rest e spred quando não sabemos todas as propriedades que um componente pode receber

    return (
        <section>
            <h1>{props.title}</h1>
            <Title text="Isso é a props">Isso é o children</Title>

            {/* Pode passar diferentes tipos de dados como array, boolean, etc */}
            <Input label="Endereço" id="adress" type="text" key="1_adress"/>
        </section>
    )
}