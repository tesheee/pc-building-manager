import React from "react";

import { Header, Footer } from "./Components";
import { Home, Cart, CategoryGPU, Test, Develop, Configurator } from "./Pages";
import { Route, Routes } from "react-router-dom";

export const SearchContext = React.createContext();

function App() {

  const [searchValue, setSearchValue] = React.useState('');

  return (
    <>
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header/>
          <main>
            <Routes>
              <Route path="/Cart" element={<Cart/>}/>
              <Route path="/" element={<Home/>}/>
              <Route path="/Category/GPU" element={<CategoryGPU searchValue={searchValue}/>}/>
              <Route path="/Test" element={<Test/>}/>
              <Route path="/Develop" element={<Develop/>}/>
              <Route path="/Configurator" element={<Configurator/>}/>
            </Routes>
          </main>
        <Footer/>
      </SearchContext.Provider>
  </>
)}

export default App;
