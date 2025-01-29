import { createContext, useContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

export const GlobalStorange = ({children}) => {
    const [data, setData] = useState();

    useEffect(() => {
        async function fetchData() {
            let response = await fetch('https://ranekapi.origamid.dev/json/api/produto/');
            response = await response.json();
            setData(response);
            console.log(response);
        }
        fetchData();
    }, []);

    function eraseData() {
        setData(null);
    };

    return (
        <GlobalContext.Provider value={{data, eraseData}}>
            {children}
        </GlobalContext.Provider>
    )
}