import './App.css';
import './estilos/general.css'
import React from 'react';
import {firebase} from './firebase'
import {nanoid} from 'nanoid'
import { Lista } from './components/Lista';

//personas base de datos

function App() {
  const [nombre, setNombre] = React.useState('')
  const [apellido, setApellido] = React.useState('')
  const [edad, setEdad] = React.useState('')
  const [sexo, setSexo] = React.useState('')
  const [cedula, setCedula] = React.useState('')
  const [lista, setLista] = React.useState([])

  const guardar = async (e) =>{
    e.preventDefault()
    try {
        const db = firebase.firestore()
        const nuevaTransaccion = {
            nombre: nombre,
            apellido: apellido,
            edad: edad,
            sexo: sexo,
            cedula: cedula
        }

        
        setLista([...lista,
            {
                id: nanoid(),
                nombre: nombre,
                apellido: apellido,
                edad: edad,
                sexo: sexo,
                cedula: cedula
            }
        ])
        
        await db.collection('personas').add(nuevaTransaccion)

        alert('Guardado con exito')
    } catch (error) {
        console.log(error)
    }
}


  return (
    <div className="App">
        <div className='general'>
            <form action="" className='formulario' onSubmit={guardar}>
                <label htmlFor="">Registrar</label>
                <input type="text" name="" id="" placeholder='Nombre' onChange={(e) =>{setNombre(e.target.value)}}/>
                <input type="text" name="" id="" placeholder='Apellido' onChange={(e) =>{setApellido(e.target.value)}}/>
                <input type="text" name="" id="" placeholder='Edad' onChange={(e) =>{setEdad(e.target.value)}}/>
                <input type="text" name="" id="" placeholder='sexo' onChange={(e) =>{setSexo(e.target.value)}}/>
                <input type="text" name="" id="" placeholder='cedula' onChange={(e) =>{setCedula(e.target.value)}}/>
                <button type="submit">Crear</button>
            </form>
            <div className="mostrar">
                <Lista></Lista>
            </div>
        </div>
    </div>
  );
}

export default App;
