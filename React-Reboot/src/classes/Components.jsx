import Foorter from "./components-class/Footer";
import Form from "./components-class/Form";
import Header from "./components-class/Header";

export default function Components() {

// Um componente sempre deve retornar algo: string, array, elemento jsx, null e etc), porém objetos não

// React.Fragment ou <></>
// Adiciona direto no dom ou elemento pai, dessa forma não precisaria ser div dentro de várias divs

    
    return (
        <>
            <Header/>
            {/* O ideal é dividir o aplicativo em pequenos componentes para facilitar a manutenção. */}
            <Form/>
            <Foorter/>
        </>
    )
}