import React, { useEffect } from "react"
import Navbar from "components/Navbar"
import Footers from "components/Footers"
import "aos/dist/aos.css"
import Aos from "aos"
import "index.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import About from "pages/About"
import Latest from "pages/Latest"
import Shop from "pages/Shop"
import Contact from "pages/Contact"
import Home from "pages/Home"

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 })
  }, [])
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/latest" element={<Latest />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Footers />
    </>
  )
}

export default App
