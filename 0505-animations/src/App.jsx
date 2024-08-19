import { useState } from 'react'
import Product from './Product'
import './App.css'
import Slide from './Slide';

function App() {
  // Animation
  // Anime a entrada de elementos utilizando a propriedade animation
  const [active, setActive] = useState(false);

  const slides = [
    {
      id: 'slide1',
      text: 'Slide 1'
    },
    {
      id: 'slide2',
      text: 'Slide 2'
    },
    {
      id: 'slide3',
      text: 'Slide 3'
    },
  ];

  return (
    <>
      <div>
        <button onClick={() => setActive(!active)}>Active</button>
        {active && <Product/>}
      </div>

      <div>
        <Slide slides={slides}/>
      </div>
    </>
  )
}

export default App
