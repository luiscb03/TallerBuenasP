import React from "react"
import {firebase} from '../firebase'
import '../estilos/Lista.css'
import { BiTrashAlt } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";

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

    const eliminar= async (id) =>{
        try{
            const db = firebase.firestore()
            await db.collection('personas').doc(id).delete()
            const aux = lista.filter(item => item.id !== id)
            setLista(aux)
            alert('eliminado con exito')
        }catch(error){
            console.log(error)
        }
    }

    return(
        <>
        <h3>Lista</h3>
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
                            <button onClick={() => eliminar(item.id)}><BiTrashAlt></BiTrashAlt></button>
                            <button><AiOutlineEdit></AiOutlineEdit></button>
                        </li>
                }) 
            }</ul>    
        </div>
        </>
    );
}