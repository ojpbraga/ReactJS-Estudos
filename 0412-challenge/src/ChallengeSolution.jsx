import React, { useState } from 'react'

// Create Radio Component
function Radio ({pergunta, options, id, onChange, value, active}) {

    if(active === false) return null;
    return (
        <fieldset>
            <legend>{pergunta}</legend>
            {options.map((option) => (
                <label key={option}>
                    <input 
                        type="radio" 
                        checked={value === option} 
                        value={option} 
                        onChange={onChange} 
                        id={id}
                    />
                    {option}
                    <br/>
                </label>
            ))}
        </fieldset>
    )
}

// App
const perguntas = [
    {
      pergunta: 'Qual método é utilizado para criar componentes?',
      options: [
        'React.makeComponent()',
        'React.createComponent()',
        'React.createElement()',
      ],
      resposta: 'React.createElement()',
      id: 'p1',
    },
    {
      pergunta: 'Como importamos um componente externo?',
      options: [
        'import Component from "./Component"',
        'require("./Component")',
        'import "./Component"',
      ],
      resposta: 'import Component from "./Component"',
      id: 'p2',
    },
    {
      pergunta: 'Qual hook não é nativo?',
      options: ['useEffect()', 'useFetch()', 'useCallback()'],
      resposta: 'useFetch()',
      id: 'p3',
    },
    {
      pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
      options: ['set', 'get', 'use'],
      resposta: 'use',
      id: 'p4',
    },
  ];

function ChallengeSolution() {

    const [respostas, setRespostas] = useState({
        p1: "",
        p2: "",
        p3: "",
        p4: "",
    });
    const [resultado, setResultado] = useState(null);

    const [slide, setSlide] = useState(0);

    function handleChange({target}) {
        setRespostas({...respostas, [target.id] : target.value})
        console.log(respostas)
    }

    function validate() {
      const corretas = perguntas.filter(({id, resposta}) => respostas[id] === resposta);
      setResultado(`Você acertou: ${corretas.length} de ${perguntas.length}`)
    }

    function handleClick() {
        if(slide < perguntas.length - 1) {
            setSlide(i => i+1)
        } else {
            setSlide(i => i+1)
            validate();
        }
    }

  return (
    <form onSubmit={(event) => event.preventDefault()}>
        {
            perguntas.map((pergunta, index) => (
                <Radio 
                    active={slide === index}
                    key={pergunta.id} 
                    onChange={handleChange} 
                    value={respostas[pergunta.id]} 
                    {...pergunta}
                />
            ))
        }
        {resultado ? <p>{resultado}</p> : <button onClick={handleClick}>Próximo</button>}
    </form>
  )
}


export default ChallengeSolution