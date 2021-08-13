import React,{useState} from 'react'

const Lista = () => {

    //Array normal
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    //Haciendo operaciones con el array
    const data = numeros.map((numeros) => numeros * 201);
    console.log(data);
    
    //Agregando el array al estado
    const [lista, setLista] = useState(numeros);

    //Array de objetos
    const Objt =[
        {id:1, texto: 'hola uno'},
        {id:2, texto: 'hola dos'},
        {id:3, texto: 'hola tres'}
    ]

    //agregando el array al estado
    const [objeto, setObjeto] = useState(Objt);
    console.log(Objt);

    //Modificar el state

    const Agregar = () =>{
        setObjeto(
          [
            ...objeto,
            {id:4, texto: 'hola cuatro'}
          ]
        )
    }

    
    return (
        <div>
            <hr />
            <h1>Recorrer Array</h1>
            <br />
            {
                lista.map((item, index) =>(
                    <h4 key={index}>{item}</h4>
                ))
            }

            <br />
            <hr />
            <h1>Recorrer Array de objetos</h1>
            {
                objeto.map((data, index) => (
                    <h4 key={index}>{data.texto}</h4>
                ))
            }

            <button onClick={() => Agregar()}>Agregar Hola</button>
        </div>
    )
}

export default Lista
