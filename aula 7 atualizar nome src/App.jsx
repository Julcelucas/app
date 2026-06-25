import { useState } from "react";

function App(){
const [nome, setNome] = useState("")

return(
  <div>
    <input onChange={(e)=>
    setNome(e.target.value)} 
    />
    <h1>Ola, {nome}</h1>
  </div>
)
 
}

export default App