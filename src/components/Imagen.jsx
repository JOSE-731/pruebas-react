import React from 'react'

export default function Imagen() {

    const img = 'https://www.fcbarcelona.com/photo-resources/2021/04/22/4990ef15-d650-4b81-941e-d95aa0921765/2021-04-22-BARCELONA-GETAFE-53-min.JPG?width=1200&height=750';
    const pr = 'imagen barca';
    return (
        <div>
            <h1>Probando jsx</h1>
            <p>{pr}</p>
            <img src={img}/>
            <hr />
        </div>
    )
}
