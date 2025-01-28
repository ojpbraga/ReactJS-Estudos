import { Children, createContext, useContext, useState } from "react";

// Lembrando: isso é um componente, é aqui que o contexto é criado
export const UserContext = createContext();


const Product = () => {
    // Para ter acesso aos dados do context utilizaremos um hook:
    const data = useContext(UserContext);
    console.log(data); // {name: 'joao'}

    // Poderia ser também:
    const [userData, setUserData] = useState(useContext(UserContext));

    return (
        <div>
            <h3>Produtos</h3>
            <p>Olá, {data.name}!</p>
            <p>Olá, {userData.name}!</p>
        </div>
    )
}





// Exemplo real de como é feito (dois componentes dentro de um arquivo jsx):
// Traz uma sintaxe mais limpa
export const GlobalContext = createContext();

export const GlobalStorage = ({children}) => {
    const [count, setCount] = useState(0);

    return (
        <GlobalContext.Provider value={{name: 'João', age: 88, count, setCount}}>
            {children}
        </GlobalContext.Provider>
    )
}

// Exemplo de como seria dentro do App com a sintaxe mais limpa:
const App = () => {
    const global = useContext(GlobalContext);

    return (
        <div>
            <h1>Oi {global.name}!</h1>
            <p>Items: {global.count}</p>
            {/* O valor é global, ou seja, o setCount o modifica, então modifica em todo o app */}
            <button onClick={() => global.setCount(i => i+1)}>Add items</button>
        </div>
    )
}




const CreateContext = () => {
    // O contexto irá permitir que passamos dados/estado a todos os componentes, sem a necessidade de utilizar propriedades. Serve principalmente para dados/estados globais como por exemplo, dados do usuário logado.
    
    // Usamos o contexto na parte mais global, como o App. Nesse caso, usaremos esse componente como se fosse o App.
    console.log(UserContext);
    // Provider: vai prover o contexto global para todos os filhos

    return (
        <UserContext.Provider value={{name: 'joao'}}>
            {/* Agora esse section tem acesso ao context */}
            <section>
                <h1>Create Context</h1>
                {/* Product também tem acesso ao context */}
                <Product/>
            </section>
        </UserContext.Provider>
    )
};
export default CreateContext;