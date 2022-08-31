import {useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import { ImBin } from 'react-icons/im'
export const Questions = () => {
  const [preguntas, setPreguntas] = useState([])

  const deleteTodo = (id) => {
    const filteredTodo = preguntas.filter(pregunta => pregunta.id !== id)
    setPreguntas(filteredTodo)
    }

  useEffect(() => {
    let storagePreguntas = JSON.parse(
        localStorage.getItem('preguntas') || '[]'
    )
    setPreguntas(storagePreguntas)
  }, [])
  
  
    return (
        <>
    <div
    style={
        {
            backgroundColor:'black',
            display:'flex',
            flexWrap:'wrap'

        }
    }
    >
        {preguntas.map(pregunta=>(
            <div key={pregunta.id}
           >
            <div 
            style={{
                margin:'15px',
                backgroundColor:'gray',
                padding:'10px',
                borderRadius:'5px',
                color:'black',
                minWidth:'200px',
                minHeight:'150px',
                justifyContent:'center',
                alignContent:'center',
                display:'flex'
    
               }}
            
            >
                <h3
                
                >{pregunta.pregunta}</h3>   
                <button style={{
                cursor:'pointer',
                color:'white',
                margin:'auto',
                height:'auto',
                }}  onClick={() => deleteTodo(pregunta.id)}>
                    <ImBin />
                </button>           

            </div>
            </div>
        ))}

    </div>
    <Link to='/quizz'>
    <button>Realizar Cuestionario</button>

    </Link>

    </>
  )
}
