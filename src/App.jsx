import Home from "./components/Home"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills" 
import SocialLinks from "./components/SocialLinks"
import "./index.css"
   
const App = () => {
    return (  
        <>
        <Navbar/>
        <Home/>
        <About/>
        <Projects/>
        <Skills/>

        <SocialLinks/>
        </>
    )
}
export default App