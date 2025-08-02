import Header from "./Components/Header.js"
import Main from "./Components/Main.js"
import Contact from "./Components/Contact.js"
import Skills from "./Components/Skills.js"
import Projects from "./Components/Projects.js"
import Footer from "./Components/Footer.js"
// import {useContext} from 'react'
import {ActiveProvider} from './Context/ActiveLink.js'

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