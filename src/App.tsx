import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import GlobalBackground from './components/GlobalBackground'

function App() {
  return (
    <>
      <GlobalBackground />
      <Router>
        <div className="min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Projects />
                <Skills />
                <About />
                <Contact />
              </>
            } />
          </Routes>
      </div>
      </Router>
    </>
  )
}

export default App
