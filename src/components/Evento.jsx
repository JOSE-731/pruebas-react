import React from 'react'

const Evento = () => {

    const Click = () =>{
        console.log('click xd');
    }

    return (
        <div>
            <hr />
            <h1>Evento</h1>
            <button onClick={() => Click()} >Click</button>
        </div>
    )
}

export default Evento
