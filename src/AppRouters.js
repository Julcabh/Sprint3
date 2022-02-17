import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home"
import { Login } from "./components/Login"
import { Registro } from "./components/Registro"

export const AppRouters = () => {
  return (
    <BrowserRouter> 
       <Home/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </BrowserRouter>

    /*<div className="App">
    </div>*/
  );
}

