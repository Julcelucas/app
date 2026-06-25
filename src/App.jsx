import { useState } from "react";

function App(){
  const [email, setEmail] = useState("")

  function enviarFormulario(e){
    e.preventDefault()
    alert(email)
  }

  return(
    <form onSubmit={enviarFormulario}>
      <input 
      type="email" 
      value={email} 
      onChange={(e)=>
      setEmail(e.target.value)}
      />

    <button type="submit">Enviar</button>  
    </form>
  )
}
export default App