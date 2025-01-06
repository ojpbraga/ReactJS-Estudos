import picture from './img/pexels-photo-1252983.webp'

function App() {
  // Imagens
  // Podemos importar a imagem direto para o componente. O webpack irá gerar o caminho correto na build final.

  // SVG
  // O svg pode ser importado como imagem, porém ele pode ser adicionado como componente. No Vite é necessário instalar um plugin para ter essa funcionalidade.

  return (
    <>
      <div>
        <img style={{width: '200px'}} src={picture} alt="" />
      </div>
    </>
  )
}

export default App
