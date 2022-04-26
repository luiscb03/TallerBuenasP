import './estilos/lista.css'
import React from "react"
import {firebase} from '../firebase'

export function Lista() {
    const [lista, setLista] = React.useState([])

    React.useEffect(()=>{
        const obtenerDatos = async () =>{
            try{
                const db = firebase.firestore()
                const data = await db.collection('personas').get()
                const array = data.docs.map(item =>(
                    {
                        id:item.id, ...item.data()
                    }
                ))
                setLista(array)

            }catch(error){
                console.log(error)
            }
        }
        obtenerDatos()
    })

    return(
        <>
        <p className='titulo'>Movimientos</p>
        <div className="lista">
            <ul>{ 
                lista.map((item, index)=>{
                    return <li key={index} className="listaItem">
                            <p> 
                                <b>Nombre: </b>{item.nombre}<br />
                                <b>Apellido: </b>{item.apellido}<br />
                                <b>Edad: </b>{item.edad}<br />
                                <b>Sexo: </b>${item.sexo}<br />
                                <b>Cedula: </b>{item.cedula}<br />
                            </p>
                        </li>
                }) 
            }</ul>    
        </div>
        </>
    );
}