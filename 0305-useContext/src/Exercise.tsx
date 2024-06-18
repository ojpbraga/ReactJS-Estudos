import { ReactHTMLElement, createContext, useContext, useEffect, useState } from "react"

export const ExerciseContext = createContext();

export const ExerciseStorage = ({children}) => {

    const [data, setData] = useState<object[] | null>(null);

    useEffect(() => {
        async function fetchItem() {
            const dataResponse = await fetch('https://ranekapi.origamid.dev/json/api/produto/');
            const dataJson = await dataResponse.json();
            setData(dataJson);
        }
        fetchItem();
    }, [])

    function cleanData() {
      setData(null);
    }

  return (
    <ExerciseContext.Provider value={{data, cleanData}}>
        {children}
    </ExerciseContext.Provider>
  )
}