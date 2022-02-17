import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../src/components/Home"
import { Login } from "../src/components/Login"
import { Registro } from "../src/components/Registro"

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

