import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export const Home = () => {

    const [pregunta, setPregunta] = useState()
    const [cuestionario, setCuestionario] = useState({
        id:'',
        pregunta:''
    })

    const guardarPregunta = (item, e) => {
        e.preventDefault()
        let storagePreguntas = JSON.parse(
            localStorage.getItem('preguntas') || '[]'
        )

        storagePreguntas.push(item)
        console.log(item)
        localStorage.setItem('preguntas', JSON.stringify(storagePreguntas))
    }

    const hadleChange = (e) => {
        e.preventDefault()
        setCuestionario({
            id:uuidv4(),
            pregunta:e.target.value
        })
    }
    const hadleChange2 = (e) => {
        e.preventDefault()
        setCuestionario({
            id:uuidv4(),
            pregunta:e.target.value
        })
    }
    console.log(cuestionario)
    return (
        <div 
        style={{
            display:'flex',
            flexDirection:'column',
            width:'50vw',
            height:'50vh',
            justifyContent:'space-around',
        }}>
            <h1>Crear Nueva pregunta</h1>
            <label htmlFor='text'>Ingrese pregunta</label>
            <input type='text' value={cuestionario.pregunta} onChange={hadleChange} />
            <button onClick={(e) => guardarPregunta(cuestionario, e)}>
                Agregar pregunta
            </button>
            
        </div>
    )
}
