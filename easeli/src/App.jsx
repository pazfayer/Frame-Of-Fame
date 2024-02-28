import "./App.css";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function App() {

  return (
   <>
   <h1 className="text-primaryBG">Home</h1>
    <Navbar/>
    <Outlet/>
   </>
  );
}

export default App;
