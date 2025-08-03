import Header from "./Components/Header.js"
import Main from "./Components/Main.js"
import Contact from "./Components/Contact.js"
import Skills from "./Components/Skills.js"
import Projects from "./Components/Projects.js"
import Footer from "./Components/Footer.js"
import { Particles } from "@/Components/magicui/particles";

const App = () => {
  return (
    <>
    <Particles className="fixed w-full min-h-screen" staticity={10}/>
    <Header/>
    <Main/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App