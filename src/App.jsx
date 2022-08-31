import { Home } from './views/Home'
import { Questions } from './views/Questions'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { Quizz } from './views/Quizz'
function App() {

    return (
        <BrowserRouter>
            <div className='App'>
                <header>
                    <NavBar />
                </header>
                <main>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='questions' element={<Questions />} />

                        <Route path='quizz' element={<Quizz />} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    )
}

export default App
