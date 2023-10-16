import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import PreHeader from "./Component/PreHeader/PreHeader";
import Header from "./Component/Header/Header";
import Job from "./Pages/JobApply/Job";
import Home from "./Pages/HomePage/Home";
import Loan from "./Pages/Loan/Loan";
import Login from "./Component/Login/Login"
import FpoApply from "./Component/FpoApply/FpoApply";
import Product from "./Pages/ProductPage/Product";
import ProductDetails from "./Component/ProductDetails/ProductDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="bg-[#f5f5f5] w-full h-full">
          <PreHeader />
          <Header />
          <Routes>
            <Route path="/" element={ <Home/>} />
            <Route path="/product" element={  <Product/>} />
            <Route path="/product/:id" element={  <ProductDetails/>} />
            <Route path="/AddProduct" element={  <FpoApply/>} />


            <Route path="/Job" element={  <Job/>} />
           
            <Route path="/Loan" element={  <Loan/>} />
            <Route path="/Scheme" element={  <Job/>} />
            <Route path="/Scheme/:id" element={  <FpoApply/>} />
            
            <Route path="/Login" element={  <Login/>} />
          </Routes>
         
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
