import {BrowserRouter, Routes , Route} from "react-router-dom";
import './App.css';
import NavBar from "../src/compoments/NavBar";
import Footer from "./compoments/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop"
function App() {
  

  return (
    <>

      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/shop" element={<Shop/>}></Route>

        
      </Routes>
      <Footer/>
      </BrowserRouter>     
  
     
    </>
  )
}

export default App
