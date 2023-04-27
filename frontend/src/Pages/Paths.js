
import { Routes, Route } from "react-router-dom"

import AddProduct from "../Components/AddProduct";
import Update from '../Components/Update';
import Logout from '../Components/Logout';
import Products from '../Components/Products';
import Profile from "../Components/Profile"
import SignUp from "../Components/Signup";
const Paths = () =>{
    return(
        <Routes>
        <Route path="/" element={<Products />}/>
        <Route path="/add" element={<AddProduct />}/>
        <Route path="/update" element={<Update />}/>
        <Route path="/Logout" element={<Logout />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/signup" element={<SignUp />}/>
        </Routes>
    )
}

export default Paths

