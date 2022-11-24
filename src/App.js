import React from "react";

import {Header, Footer} from "./Components";
import {EmptyCart, Home, Cart, Category} from "./Pages";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
      <>
    <Header/>
  <main>
    <Routes>
      <Route path="/EmptyCart" element={<EmptyCart/>}/>
      <Route path="/Cart" element={<Cart/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/Category" element={<Category/>}/>
    </Routes>
  </main>
  <Footer/>
      </>
)}

export default App;
