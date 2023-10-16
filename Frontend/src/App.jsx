import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import PreHeader from "./Component/PreHeader/PreHeader";
import Header from "./Component/Header/Header";
import Job from "./Pages/JobApply/Job";
import Home from "./Pages/HomePage/Home";
import Loan from "./Pages/Loan/Loan";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="bg-[#f5f5f5] w-full h-full">
          <PreHeader />
          <Header />
          <Routes>
            <Route path="/" element={ <Home/>} />
            <Route path="/product" element={  <Job/>} />
            <Route path="/Job" element={  <Job/>} />
            <Route path="/Loan" element={  <Loan/>} />
            <Route path="/Scheme" element={  <Job/>} />
          </Routes>
         
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
