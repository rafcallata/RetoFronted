import {useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
export const Questions = () => {
  const [preguntas, setPreguntas] = useState([])

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
