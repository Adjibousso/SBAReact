import {BrowserRouter, Routes , Route} from "react-router-dom"
import './App.css'
import NavBar from "../src/compoments/NavBar"
function App() {
  

  return (
    <>
<h1>Text</h1>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
        //  path="/" element={<Home/>}
        ></Route>
      </Routes>
      <footer/>
      </BrowserRouter>
      
  
     
    </>
  )
}

export default App
