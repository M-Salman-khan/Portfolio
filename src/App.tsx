import Header from "./Components/Header.jsx"
import Main from "./Components/Main.jsx"
import Contact from "./Components/Contact"
import Skills from "./Components/Skills"
import Projects from "./Components/Projects"
import Footer from "./Components/Footer.jsx"
// import {useContext} from 'react'
import {ActiveProvider} from './Context/ActiveLink.jsx'

const App = () => {
  return (
    <>
<ActiveProvider>
    <Header/>
    <Main/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
</ActiveProvider>
    </>
  )
}

export default App