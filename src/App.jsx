// import { useState } from 'react';
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/header/Navbar";
// import HomeSlider from "./components/main/HomeSlider";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
    
      <div>
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
