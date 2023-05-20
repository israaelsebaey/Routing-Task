import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Products from "./components/Products";
import Profile from "./components/Profile";
import ProtectProfile from "./components/ProtectProfile";
import Mobile from "./components/Mobile";
import Headphone from "./components/Headphone";

function App() {
  return (
    <div className="text-center mt-5">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}>
          <Route path="mobiles" element={<Mobile/>}/>
          <Route path="headphones" element={<Headphone/>}/>
        </Route>
        <Route element={<ProtectProfile/>}>
           <Route path="/profile" element={<Profile/>}/>
        </Route>
        <Route path="/signup" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}
export default App;
