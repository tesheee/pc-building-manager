import React from "react";

import {Header, Footer} from "./Components";
import {EmptyCart, Home, Cart, CategoryGPU, Test} from "./Pages";
import {Route, Routes} from "react-router-dom";

function App() {

  const [searchValue, setSearchValue] = React.useState('');

  return (
      <>
    <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
  <main>
    <Routes>
      <Route path="/EmptyCart" element={<EmptyCart/>}/>
      <Route path="/Cart" element={<Cart/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/Category/GPU" element={<CategoryGPU searchValue={searchValue}/>}/>
      <Route path="/Test" element={<Test/>}/>
    </Routes>
  </main>
  <Footer/>
      </>
)}

export default App;
