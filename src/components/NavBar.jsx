import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div
    style={{
        backgroundColor:'black',
        width:'100vw',
        marginBottom:'20px'
    }}
    >
    <h3>Navegacion</h3>
    <nav>
      <Link to="/">Crear preguntas</Link> |{" "}
      <Link to="questions">Ver preguntas</Link>|{" "}
      <Link to="quizz">Realizar cuestionario</Link>
    </nav>
  </div>
  )
}
