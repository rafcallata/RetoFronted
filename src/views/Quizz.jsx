import React, { useState, useEffect } from 'react'
import { Recorder } from './Recorder'
import { Link } from 'react-router-dom'
export const Quizz = () => {
    const [preguntas, setPreguntas] = useState([
        {
            id: '',
            pregunta: '',
        },
    ])
    const [preguntaActual, setPreguntaActual] = useState(0)
    const [puntuación, setPuntuación] = useState(0)
    const [isFinished, setIsFinished] = useState(false)
    const [tiempoRestante, setTiempoRestante] = useState(10)
    const [areDisabled, setAreDisabled] = useState(false)
    const [answersShown, setAnswersShown] = useState(false)

    useEffect(() => {
        let storagePreguntas = JSON.parse(
            localStorage.getItem('preguntas') || '[]'
        )
        setPreguntas(storagePreguntas)
    }, [])

    if (isFinished)
        return (
            <main
                style={{
                    width: '100vw',
                    display: 'flex',
                    justifyContent: 'center',
                    alignContent: 'center',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '30vh',
                        width: '30vw',
                        justifyContent: 'space-around',
                    }}
                >
                    <h2>
                        {' '}
                        Muchas gracias por realizar este cuestionario de{' '}
                        {preguntas.length} preguntas{' '}
                    </h2>
                    <Link to={'/questions'}>
                        <button style={{ width: '100%' }}>Salir</button>
                    </Link>
                </div>
            </main>
        )

    return (
        <main>
            <div>
                <div>
                    <span> Pregunta {preguntaActual + 1} de</span>{' '}
                    {preguntas.length}
                </div>
                <div>
                    <Recorder />
                    <div
                        style={{
                            display: 'flex',
                            width: '100vw',
                            justifyContent: 'center',
                            marginBottom: '20PX',
                        }}
                    >
                        La pregunta es : {preguntas[preguntaActual].pregunta}
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            width: '100vw',
                            justifyContent: 'center',
                        }}
                    >
                        <button
                            onClick={() => {
                                if (preguntaActual === 0) {
                                    setIsFinished(true)
                                } else {
                                    setPreguntaActual(preguntaActual - 1)
                                }
                            }}
                        >
                            Anterior
                        </button>
                        <button
                            onClick={() => {
                                if (preguntaActual === preguntas.length - 1) {
                                    setIsFinished(true)
                                } else {
                                    setPreguntaActual(preguntaActual + 1)
                                }
                            }}
                        >
                            Continuar
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}
