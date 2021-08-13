import React,{useState} from 'react'

const Estado = () => {

    const [texto, setTexto] = useState('Estado inicial'); 

    const ClickStado = () =>{
        setTexto('Segundo estado')
    }

    return (
        <div>
            <hr />
             <h1>Estado</h1>
            <h1>{ texto }</h1>
            <button onClick={ () => ClickStado()} >Cambiar estado</button>
        </div>
    )
}

export default Estado
