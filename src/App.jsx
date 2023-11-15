import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card } from './Components/Card/Card'
import { useState } from 'react'
import { Formulario } from './Components/Formulario/Formulario'

function App() {
 //useState



 const [contador,setContador]=useState(0)

 console.log(contador)


  function incrementar(){
    if(contador<10){
      setContador(contador+1)

    }
}

function decrementar(){
  if(contador>0){

    setContador(contador-1)
  }
}

  return (
    <div>
      <p>El numero es {contador} </p>
      <button onClick={incrementar} disabled={contador == 10 ?"disabled":""} >Incrementa +</button>
      {/* <button onClick={()=>setContador(contador+1)}>Incrementa funcion dentro</button> */}
      <button onClick={decrementar}disabled={contador == 0 ?"disabled":""} >Decrementar -</button>
    <Formulario/>
    </div>
  )
}

export default App
