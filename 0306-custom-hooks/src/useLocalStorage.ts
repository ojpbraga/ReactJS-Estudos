import { useEffect, useState } from "react";

const useLocalStorage = (key: string, initial: string) => {
    const [state, setState] = useState(() => {
      const local = localStorage.getItem(key);
      return local ? local : initial;
    });

    useEffect(() => {
      localStorage.setItem(key, state);
    }, [state, key]);

  return [state, setState];
}

export default useLocalStorage; 