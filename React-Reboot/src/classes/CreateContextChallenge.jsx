import { createContext, useContext, useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";

// GlobalContext.jsx

const CreateContextChallenge = () => {
    const global = useContext(GlobalContext);
    console.log(global)
    return (
        <div>
            <h1>Challenge</h1>
            <ul>
                {global && global.data.map(({id}) => (
                    <li>{id}</li>
                ))}
            </ul>
        </div>
    )
}
export default CreateContextChallenge;