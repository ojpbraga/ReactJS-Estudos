import { useState } from 'react';
import './App.css'
import Product from './components/Product'
import Title from './components/Title'
import styled from 'styled-components'

const TitleComponent = styled.h1`
  font-size: 2rem;
  color: tomato;
`;
const Paragraph = styled.p`
  color: #d9d9d9;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid tomato;
`;

// Props
const Price = styled.p`
  color: ${(props) => props.color};
  font: 1rem;
  border: 2px solid hsl(${Math.random()*360}, 100%, 50%);
`;

const ButtonBuy = styled.button`
  background: ${({active}) => active ? "#000" : "#fff"};
  font-size: 0.5rem;
  border: 2px solid tomato;
  &:hover {
    background: #939292;
  }
`;

function App() {

  // Import
  // A forma mais simplis de use do CSS é importando o mesmo direto no JavaScript. A importação é efetuada pelo Webpack.

  // Componentes
  // Ao importar um componente, os estilos importados do mesmo são automaticamente adicionados ao CSS final da build. Independente de você utilizar o componente ou não.

  // Conflitos
  // Todos os arquivos serão unidos em um CSS final e você é responsável por garantir que os seletores sejam específicos, para evitar conflito.
  // Resolve criando nomes únicos: .ComponenteTitulo

  // Modules
  // Os modules garantem que as classes utilizadas sejam sempre únicas, evitando o conflito. O modo já vem configurado com o create-react-app. Baste definirmos o nome do arquivo css com a palavra .module. Ex.: Produto.module.css. Devemos definir um nome para a importação, a mesma será transformada em um objeto que possui nomes únicos para as classes.

  // camelCase
  // Utilize camelCase, já que o nome da classe se transformará em uma propriedade de um objeto js. Não utilize hífens, por exemplo:
  // Errado: .titulo-principal
  // Correto: .tituloPrincipal

  // Funcionalidades Extras
  // O CSS Modules disponibiliza algumas funcionalidades extras para o CSS, como a definição de variáveis, composição de elementos e definição de classes no contexto global. Não é aconcelhável utilizar.

  // Styled Components
  // Permite escrevermos o CSS diretamente no JS. Ao invés de classes, criamos componentes com um estilo único. 
  // Styled é um objeto com diferentes métodos que representam as tags de HTML.

  // Template String Transpilation
  // O uso dos backticks para passarmos a string com os valores do CSS é válido no JS. Esses valores são passados como argumento da função.

  function template(value, total) {
    console.log(value);
    console.log(total);
  }
  const total = 1000;
  template`it's ${total} a test`;

  // Props
  // Podemos passar propriedades como em um component de React.
  const [active, setActive] = useState(false);
  function handleClick() {
    setActive(!active);
  }

  // Pseudo
  // Podemos definir o estado de :hover ou criar elementos com o ::after ou ::before utilizando o & na frente do elemento

  return (
    <>
      <div className='container'>
        <Title title="Título"/>
      </div>

      <Product/>

      <Container>
        <TitleComponent>Style Component</TitleComponent>
        <Paragraph>This is a paragraph</Paragraph>
        <Price color='blue'>R$1000</Price>
        <ButtonBuy active={active} onClick={handleClick}>Buy</ButtonBuy>
      </Container>
    </>
  )
}

export default App
