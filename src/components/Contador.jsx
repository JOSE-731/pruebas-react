import React from 'react'

const Contador = () => {

    const [contador, setContador]= React.useState(0);

    const Aumentar = () =>{
        setContador(contador + 1)
    }

    const Restar = () =>{
        setContador(contador - 1)
    }

    return (
        <div>
            <hr />
            <h1>Contador</h1>
            <h3>El contador tiene como valor el numero : { contador }</h3>
            <h3>
                {
                    //valor que se evalua si se cumple la condicion, si no se cumple
                    contador > 10 ? 'Es mayor a 10' : 'Es menor a 10'
                }
            </h3>
            <button onClick={() => Aumentar()} >Aumentar</button>
            <button onClick={() => Restar()} >Restar</button>
        </div>
    )
}

export default Contador
