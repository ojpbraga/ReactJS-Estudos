import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalStorage = ({children}) => {

    const [count, setCount] = useState(0);

    function countPlusOne() {
        setCount(last => last + 1);
    }

    //Podemos passar qualquer tipo de dado dentro do value.
    return (
    <GlobalContext.Provider value={{count, setCount, name:"Jonh", countPlusOne}}>
        {children}
    </GlobalContext.Provider>

    )
}