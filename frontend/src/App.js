import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"
import Shop from "./pages/Shop"

import "./App.css"

function App() {
  return (
    <>
      <div className="App">
        <h1>HELLO WORLD</h1>
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
