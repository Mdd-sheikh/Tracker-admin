
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css'
import Navbar from "./components/navbar/Navbar";
import { Routes,Route } from "react-router-dom";
import Dashboard from "./assets/pages/Dashboard/Dashboard";
import Order from "./assets/pages/orders/Order";

function App() {
 

  return (
    
    <>
      <Navbar/>
      <ToastContainer/>
      <div className="home">
         <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/Orders" element={<Order/>}/>
         </Routes>
      </div>
    </>
  )
}

export default App
