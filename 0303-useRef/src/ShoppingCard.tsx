import React, { useRef, useState } from 'react'

function ShoppingCard() {
    const [card, setCard] = useState(0);
    const [notification, setNotification] = useState<null | string>(null);
    const timeoutRef = useRef<number | undefined>();

    function handleClick() {
        setCard(card + 1);
        setNotification("Item added in card!");
        
        console.log("Before timeout: " + timeoutRef.current); // Salva o valor do último
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            setNotification(null);
        }, 3000)
        console.log("After timeout: " + timeoutRef.current);

        
    }

  return (
    <div>
        <p>{notification}</p>
        <button onClick={handleClick}>Add item in card {card}</button>
    </div>
  )
}

export default ShoppingCard