import React, { useState } from 'react';
import './Formulario'
const Formulario = () => {

    const[nombre,setNombre]= useState('')
    const [email,setEmail]=useState('')
    const [direccion,setDireccion]=useState('')
    const [mostrarValores,setMostrarValores]=useState(false)

    const [mostraPassword,setMostrarPassword]=useState(false)

    const[nombreValido,setNombreValido]=useState(false)
    const[direccionValido,setDireccionValido]=useState(false)

    const[emailValidacion,setEmailValidacion]=useState(false)



    function nombreActualizado(event){
        setNombre(event.target.value)
        setNombreValido(event.target.value.length>3)

       
    }

    function emailActualizado(event){
        setEmail(event.target.value)

        setEmailValidacion(/^\S+@\S+\.\S+$/.test(event.target.value))
        
    }

    function direccionActualizado(event) {
        setDireccion(event.target.value)
        setDireccionValido(event.target.value.length>3)
        
    }

    function enviarDatos(e) {
        e.preventDefault()
        setMostrarValores(true)
    }

    function enviarPassword(e) {
        e.preventDefault()
        // setMostrarPassword(true)

        setMostrarPassword(!mostraPassword)
       
    }

    if(nombreValido && direccionValido && emailValidacion){
        console.log('Formulario correcto')
    }else{
        console.log('Formulario con datos no validos')
    }

  
    return(
      
            <div className='row my-5 justify-content-md-center'>
                        <div className='col-md-5'>
                            <form >
                    <div className="form-group">
                        <label htmlFor="">Nombre</label>
                        <input type="text" value={nombre}  onChange={nombreActualizado} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Email</label>
                        <input type="Email" value={email} onChange={emailActualizado} required/>
                    </div>

                    <div>
                        <input type={mostraPassword?"text":"password"} placeholder='password' />
                    </div>
                    <div>
                        <button onClick={enviarPassword}>{mostraPassword?'ocutar':'mostrar'} password</button>
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Direccion</label>
                        <input type="text" value={direccion} onChange={direccionActualizado}  />
                    </div>
                        <button type='submit' onClick={enviarDatos}>Enviar</button>

                    </form >
                    
                    { mostrarValores &&  
                     <div>
                            <h3>Tus datos son:</h3>
                            <p>nombre:{nombre}</p>
                            <p>email{email}</p>
                            <p>direccion{direccion}</p>
                    </div> 
                    }
                </div> 
                

                   
        </div>
    )
}



export { Formulario }