import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import {BrowserRouter, Routes, Route} from "react-router-dom"
import { HomePage } from "./components/HomePage";
import { LoginPage } from "./components/LoginPage";
import { RegisterPage } from "./components/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element = {<LoginPage/>}/>
        <Route path="/register" element = {<RegisterPage/>}/>
        <Route path="/home" element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
