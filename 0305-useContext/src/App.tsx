import { useState, useContext } from 'react'
import UserContext from './UserContext';
import Produto from './Produto';
import { GlobalStorage } from './GlobalContext';
import ProductExercise from './ProductExercise';
import { ExerciseContext, ExerciseStorage } from './Exercise';
// Importar na página mais global que temos / onde queremos aquele contexto

function App() {

  // createContext
  // O contexto irá permitir passarmos dados/estado a todos os componentes, sem a necessidade de utilizar prorpriedades. Serve principalmente para dados/estados globais como por exemplo dados do usuário logado.


  // Exercício
  // Utilize o GlobalContext do exemplo anterior para puxar os dados da API abaixo:
  // https://ranekapi.origamid.dev/json/api/produto/
  // assim que o usuário acessar o app
  // coloque os dados da API no contexto global, dando acesso aos dados da mesma
  // defina uma função chamada limparDados que é responsável por zerar os dados de produto
  // e exponha essa função no contexto global
  const productFetch = useContext(ExerciseContext);
  console.log(productFetch);
  
  return (
    // Provider: provê o contexto global
    <div>
      <GlobalStorage>
        <Produto/>
    </GlobalStorage>
    
    <ExerciseStorage>
      <ProductExercise/>
    </ExerciseStorage>
    </div>
  )
}

export default App
