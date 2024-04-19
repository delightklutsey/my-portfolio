import "./index.css"
import Navbar from "./components/Navbar/Navbar"
// import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Intro from "./components/Intro/Intro"
import Skills from "./components/Skills/Skills"
import Portfolio from "./components/Portfolio/Portfolio"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
function App() {
  return (
   
    <div className='App'>
      <Navbar/>
      <Intro/>
      <Skills/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
