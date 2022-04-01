import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Pay from "./components/Pay"
import Success from "./components/Success"
import "./App.css"

function App() {
  return (
    <>
      <div className="App">
        <h1>HELLO WORLD</h1>
      </div>
      <Router>
        <Routes>
          <Route path="/Pay" element={<Pay />} />
          <Route path="/Success" element={<Success />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
