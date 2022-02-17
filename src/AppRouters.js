import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home"
import { Login } from "./components/Login"
import { Registro } from "./components/Registro"
import { Movies } from "./components/movies"

export const AppRouters = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>

    /*<div className="App">
    </div>*/
  );
}

