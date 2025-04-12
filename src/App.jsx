import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Cartitem from "./Components/Cartitem";
import Product from "./Components/Product";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import { useState ,useEffect} from "react";

const App = () => {

  const[isLogin,setIsLoggedIn]=useState(false);

  return (<div>

     
        <div className="bg-slate-900">
        <Navbar isLogin={isLogin} setIsLoggedIn={setIsLoggedIn}></Navbar>
        </div>
        <Routes>
          <Route path="/" element={ <Login setIsLoggedIn={setIsLoggedIn} > </Login>}></Route>
          <Route path="/Home" element={<Home></Home>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
        </Routes>

  </div>)
};

export default App;
