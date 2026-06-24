import Header from "./components/header";
import Perfil from "./components/perfil";

function App(){
  return(
    <div>
      <Header />
      
      <p>Conteudo da Pagina</p>

      <Perfil nome="Julce Lucas" profissao="Engenheiro"/>
      <Perfil nome="Joana Luis" profissao="Designer" />
      <Perfil nome="Carlos Jose" profissao="Mecanico" />
    </div>
  )
}

export default App