import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import {NavLink } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
          <Route path="/Login" exact element={<Login/>}/>
           <Route path="/Register" exact element={<Register/>}/>
        </Routes>
         <NavLink exact to="/Login" activeClassName="page-active"><i class="fas fa-user"></i>Login</NavLink>
         <NavLink exact to="/Register" activeClassName="page-active"><i class="fas fa-id-card"></i>Register</NavLink>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
